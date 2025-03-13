import { useEffect, useState } from 'react';
import { GuestbookEntry } from '@/lib/types';
import supabase from '@/supabase-client';
import { CommentCard } from '@/components/comment-card';
import CommentDeleteDialog from './comment-delete-dialog';
import Intersect from '@/common/components/intersect';
import { ChevronDown, Loader } from 'lucide-react';
import { Button } from '@/common/components/ui/button';
import LoaderLoading from '@/common/components/loader-loading';

interface ICommentListProps {
  onMessageAdded?: () => void;
}

const LIST_SIZE = 5;

export default function CommentList({ onMessageAdded }: ICommentListProps) {
  const [messages, setMessages] = useState<GuestbookEntry[]>([]);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(LIST_SIZE);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMessages = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setMessages(data);
    }
    setIsLoading(false);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LIST_SIZE);
  };

  useEffect(() => {
    fetchMessages();

    const channel = supabase
      .channel('guestbook_changes')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'guestbook' },
        (payload) => {
          setMessages((prev) => [payload.new as GuestbookEntry, ...prev]);
          onMessageAdded?.();
        },
      )
      .on(
        'postgres_changes',
        { event: 'DELETE', schema: 'public', table: 'guestbook' },
        (payload) => {
          setMessages((prev) =>
            prev.filter((msg) => msg.id !== payload.old.id),
          );
          onMessageAdded?.();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [onMessageAdded]);

  return (
    <div className='space-y-4 px-8'>
      {isLoading ? (
        <LoaderLoading />
      ) : messages.length === 0 ? (
        <div className='flex flex-col items-center justify-center py-10 space-y-2'>
          <p className='text-sm text-muted-foreground dark:text-foreground'>
            아직 메시지가 없습니다.
          </p>
          <p className='text-sm text-muted-foreground dark:text-foreground'>
            첫 번째 메시지를 남겨보세요!
          </p>
        </div>
      ) : (
        <>
          {messages.slice(0, visibleCount).map((message, index) => (
            <Intersect key={message.id} type='data-animate'>
              <CommentCard
                message={message}
                onDeleteClick={() => setDeleteId(message.id)}
                data-animate-stage={(index % LIST_SIZE) + 1}
              />
            </Intersect>
          ))}

          <CommentDeleteDialog
            id={deleteId!}
            isOpen={deleteId !== null}
            onClose={() => setDeleteId(null)}
            onDelete={fetchMessages}
          />

          {visibleCount < messages.length && (
            <div className='flex justify-center pt-4'>
              <Button
                variant='ghost'
                size='sm'
                onClick={handleLoadMore}
                className='flex items-center gap-2'
              >
                더보기
                <ChevronDown className='w-4 h-4' />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
