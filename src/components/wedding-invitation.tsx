import { Separator } from '@/common/components/ui/separator';

export default function WeddingInvitation() {
  return (
    <>
      <h2 className='text-center text-xl font-en '>wedding invitation</h2>

      <div className='flex justify-center my-4'>
        <img
          src='/src/assets/imgs/ring.png'
          alt='반지'
          className='w-6 h-6 aspect-square'
        />
      </div>
      <div className='text-center'>
        <div className='flex justify-center items-center gap-1 h-3 space-x-0.5'>
          <span>○○○</span>
          <Separator orientation='vertical' className='bg-foreground' />
          <span>○○○</span>
        </div>
        <div className='mt-4 text-sm text-gy-6 leading-7'>
          ○○○○년 ○○월 ○○일 ○○일 낮 ○○:○○
          <br />
          ○○○웨딩 ○F ○○홀
        </div>
      </div>
    </>
  );
}
