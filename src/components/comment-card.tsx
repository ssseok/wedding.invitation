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
    <div className='bg-foregroundp-4 border-b py-4 text-sm'>
      <div className='flex justify-between items-center mb-2 text-xs'>
        <h3>{message.name}</h3>
        <Button
          className='hover:text-red-500 text-xs'
          variant='ghost'
          size='sm'
          onClick={onDeleteClick}
        >
          삭제
        </Button>
      </div>
      <p className='whitespace-pre-wrap font-bold'>{message.comment}</p>
      <time className='text-xs text-muted-foreground flex justify-end mt-4'>
        {formatDate(message.created_at)}
      </time>
    </div>
  );
}
