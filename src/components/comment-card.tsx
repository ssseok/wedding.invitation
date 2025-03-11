import { GuestbookEntry } from '@/lib/types';
import { Button } from '@/common/components/ui/button';

interface ICommentCardProps {
  message: GuestbookEntry;
  onDeleteClick: () => void;
}

export function CommentCard({ message, onDeleteClick }: ICommentCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // YYYY-MM-DD 형식으로 변환
  };

  return (
    <div className='bg-card p-4 rounded-lg border-b'>
      <div className='flex justify-between items-start mb-2'>
        <h3 className=' text-sm'>{message.name}</h3>
        <time className='text-sm text-muted-foreground'>
          {formatDate(message.created_at)}
        </time>
      </div>
      <p className='whitespace-pre-wrap font-bold'>{message.comment}</p>
      <div className='flex justify-end mt-4'>
        <Button
          className='hover:text-red-500 text-xs'
          variant='ghost'
          size='sm'
          onClick={onDeleteClick}
        >
          삭제
        </Button>
      </div>
    </div>
  );
}
