import { useEffect, useState } from 'react';
import { GuestbookEntry } from '@/lib/types';
import supabase from '@/supabase-client';
import { CommentCard } from '@/components/comment-card';
import CommentDeleteDialog from './comment-delete-dialog';

interface ICommentListProps {
  onMessageAdded?: () => void;
}

export default function CommentList({ onMessageAdded }: ICommentListProps) {
  const [messages, setMessages] = useState<GuestbookEntry[]>([]);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setMessages(data);
    }
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
  }, []);

  return (
    <div className='space-y-4'>
      {messages.map((message) => (
        <CommentCard
          key={message.id}
          message={message}
          onDeleteClick={() => setDeleteId(message.id)}
        />
      ))}

      <CommentDeleteDialog
        id={deleteId!}
        isOpen={deleteId !== null}
        onClose={() => setDeleteId(null)}
        onDelete={fetchMessages}
      />
    </div>
  );
}
