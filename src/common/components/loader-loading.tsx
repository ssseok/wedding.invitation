import { Loader } from 'lucide-react';

export default function LoaderLoading() {
  return (
    <div className='flex flex-col items-center justify-center py-10 space-y-4'>
      <Loader className='w-6 h-6 animate-spin text-muted-foreground' />
    </div>
  );
}
