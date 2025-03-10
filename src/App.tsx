import Layout from '@/common/components/layout';
import Intersect from '@/common/components/intersect';
import SplashScreen from '@components/splash-screen';
import VideoPlayer from '@/components/video-player';
import WeddingInvitation from '@/components/wedding-invitation';
import Phrase from '@/components/phrase';
import Contact from '@/components/contact';
import CalendarScreen from '@/components/calendar-screen';
import Gallery from '@/components/gallery';
import MapNaver from '@/components/map-naver';
import MapInfo from '@/components/map-info';
import BankAccordion from '@/components/bank-accordion';

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
        <section className='py-20 w-full'>
          <VideoPlayer />
        </section>
        {/* 결혼 초대장 */}
        <section className='bg-background mt-10'>
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
        <section className='text-sm mt-20'>
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
        {/* 결혼식 갤러리 */}
        <section className='my-20'>
          <Intersect>
            <Gallery
              images={[
                'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
                'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
                'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
                'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
                'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
                'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
                'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
                'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
                'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
                'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
                'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
                'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
                'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
                'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
                'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
                'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
                'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
              ]}
            />
          </Intersect>
        </section>
        <section className='my-20'>
          <Intersect>
            <h2 className='text-center pb-10'>오시는 길</h2>
            <MapNaver />
            <MapInfo />
          </Intersect>
        </section>
        <section className='my-20'>
          <Intersect>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-center'>마음 전하실 곳</h2>
              <div className='flex justify-center my-4'>
                <img
                  src='/ring.png'
                  alt='반지'
                  className='w-6 h-6 aspect-square'
                />
              </div>
              <div className='text-center leading-7'>
                참석이 어려우신 분들을 위해
                <br />
                계좌번호를 기재하였습니다.
                <br />
                너그러운 마음으로 양해 부탁드립니다.
              </div>
            </div>
            <BankAccordion
              title='신랑측 계좌번호'
              bankList={[
                { holder: '○○○', bank: '○○', number: '○○○-○○○-○○○' },
                { holder: '○○○', bank: '○○', number: '○○○-○○○-○○○-○○○' },
                { holder: '○○○', bank: '○○', number: '○○○-○○○-○○○' },
              ]}
            />
            <BankAccordion
              className='mt-2'
              title='신부측 계좌번호'
              bankList={[
                { holder: '○○○', bank: '○○', number: '○○○-○○○-○○○' },
                { holder: '○○○', bank: '○○', number: '○○○-○○○-○○○-○○○' },
                { holder: '○○○', bank: '○○', number: '○○○-○○○-○○○-○○○' },
              ]}
            />
          </Intersect>
        </section>
      </Layout>
    </>
  );
}

export default App;
