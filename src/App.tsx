import SplashScreen from '@components/splash-screen';
import Layout from '@/common/components/layout';
import VideoPlayer from '@/components/video-player';
import Intersect from '@/common/components/intersect';
import { Separator } from './common/components/ui/separator';

function App() {
  return (
    <>
      <SplashScreen />
      <Layout>
        {/* 영상 플레이어 */}
        <section className='my-20 w-full'>
          <VideoPlayer />
        </section>
        <section className='bg-white mt-20'>
          <Intersect>
            <h2 className='text-center text-xl font-en '>wedding invitation</h2>
            <div className='flex justify-center my-4'>
              <img
                src='https://github.com/bepyan/charlan-byul/assets/65283190/2a6bfd15-e502-4d61-b94d-eec5758061a4'
                alt='진주'
                className='w-3 h-3 aspect-square'
              />
            </div>
            <div className='text-center'>
              <div className='flex justify-center items-center gap-1 h-3 space-x-0.5'>
                <span>○○○</span>
                <Separator orientation='vertical' />
                <span>○○○</span>
              </div>
              <div className='mt-4 text-sm text-gy-6 leading-7'>
                ○○○○년 ○○월 ○○일 ○○일 낮 ○○:○○
                <br />
                ○○○웨딩 ○F ○○홀
              </div>
            </div>
          </Intersect>
        </section>
      </Layout>
    </>
  );
}

export default App;
