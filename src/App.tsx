import SplashScreen from '@components/splash-screen';
import Layout from '@/common/components/layout';
import VideoPlayer from '@/components/video-player';
import Intersect from '@/common/components/intersect';
import CalendarScreen from '@/components/calendar-screen';
import Contact from '@/components/contact';
import WeddingInvitation from '@/components/wedding-invitation';
import Phrase from '@/components/phrase';

function App() {
  // 새로고침 시 스크롤 최상단으로 이동
  // useEffect(() => {
  //   window.onbeforeunload = function pushRefresh() {
  //     window.scrollTo(0, 0);
  //   };
  // }, []);
  // 결혼식 날짜를 문자열로 지정

  return (
    <>
      <SplashScreen />
      <Layout>
        {/* 영상 플레이어 */}
        <section className='my-20 w-full'>
          <VideoPlayer />
        </section>
        {/* 결혼 초대장 */}
        <section className='bg-white mt-20'>
          <Intersect>
            <WeddingInvitation />
          </Intersect>
          <div className='mt-10'>
            <img
              className='w-full h-full aspect-4/3 pointer-events-none'
              src='https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg'
              alt='결혼사진'
            />
          </div>
        </section>
        {/* 결혼 청접장 문구 & 연락처 */}
        <section className='text-sm mt-10'>
          <Intersect>
            <Phrase />
          </Intersect>
          <Intersect>
            <Contact />
          </Intersect>
        </section>
        {/* 결혼식 날짜 */}
        <section className='my-20'>
          <Intersect>
            <CalendarScreen />
          </Intersect>
        </section>
      </Layout>
    </>
  );
}

export default App;
