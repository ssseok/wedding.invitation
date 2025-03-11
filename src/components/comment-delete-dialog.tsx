import { toast } from 'react-hot-toast';
import supabase from '@/supabase-client';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/common/components/ui/dialog';
import { Label } from '@/common/components/ui/label';
import { Input } from '@/common/components/ui/input';
import { Button } from '@/common/components/ui/button';

interface ICommentDeleteDialogProps {
  id: number;
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function CommentDeleteDialog({
  id,
  isOpen,
  onClose,
  onDelete,
}: ICommentDeleteDialogProps) {
  const [password, setPassword] = useState('');

  const handleDelete = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const deleteMessage = async () => {
      // 먼저 비밀번호 확인
      const { data } = await supabase
        .from('guestbook')
        .select('id')
        .eq('id', id)
        .eq('password', password)
        .single();

      if (!data) {
        throw new Error('비밀번호가 일치하지 않습니다.');
      }

      // 삭제 실행
      const { error } = await supabase.from('guestbook').delete().eq('id', id);

      if (error) throw error;

      onDelete();
      onClose();
    };

    toast.promise(deleteMessage(), {
      loading: '메시지를 삭제하고 있습니다...',
      success: '메시지가 삭제되었습니다.',
      error: (err) => {
        return err instanceof Error
          ? err.message
          : '오류가 발생했습니다. 다시 시도해주세요.';
      },
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>메시지 삭제</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleDelete} className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='delete-password'>비밀번호</Label>
            <Input
              id='delete-password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='비밀번호를 입력해주세요'
            />
          </div>
          <div className='flex justify-end gap-2'>
            <Button type='button' variant='outline' onClick={onClose}>
              취소
            </Button>
            <Button type='submit' variant='destructive'>
              삭제
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
