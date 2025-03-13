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
import CommentFormDialog from '@/components/comment-form-dialog';
import CommentList from '@/components/comment-list';
import Share from '@/components/share';
import BannerImage from '@/components/banner-image';
import BackgroundMusic from '@/components/background-music';
import LoaderLoading from '@/common/components/loader-loading';
import { useVideoCheck } from '@/hooks/use-video-check';
import { useState } from 'react';

const VIDEO_URL = '';
const POSTER_URL =
  'https://t1.daumcdn.net/brunch/service/user/d4v5/image/qu9IRzx1uS0s1LEHJrfpndwToP4.jpeg';

function App() {
  const { hasVideo, isChecking } = useVideoCheck(VIDEO_URL);

  // 방명록 메시지가 추가되었는지 여부를 추적하는 상태
  const [, setMessageAdded] = useState(false);

  return (
    <>
      <SplashScreen />
      <Layout>
        <BackgroundMusic hasVideo={hasVideo} />
        {/* 비디오 또는 배너 이미지 */}
        <section className='py-20 w-full'>
          {isChecking ? (
            <LoaderLoading />
          ) : hasVideo ? (
            <VideoPlayer videoUrl={VIDEO_URL} posterUrl={POSTER_URL} />
          ) : (
            <Intersect>
              <BannerImage />
            </Intersect>
          )}
        </section>
        {/* 결혼 초대장 */}
        <section className='bg-background mt-10'>
          <Intersect>
            <WeddingInvitation />
            <div className='mt-10'>
              <img
                className='w-full h-full  pointer-events-none'
                src='https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/1164b3d2-66dc-4e7f-bfab-4f7b2a991700/public'
                alt='결혼사진'
              />
            </div>
          </Intersect>
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
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/b64b73bf-f02c-42a7-55f9-1dcf79afa700/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/be9c5bb8-696e-4711-c00d-ccdaf35bc000/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/47a01f11-b2b0-411c-578f-2e548e0dcc00/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/75b30063-2783-4260-8f3c-9fa9985aa600/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/d0f72f55-c734-412a-2e89-9f00077d8f00/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/ffda64ea-96b7-42b4-4bcf-32dae73a8700/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/dcf70027-eb72-4555-4c47-b586076bd300/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/f3136807-5528-4684-0cc0-8ac1b396b400/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/779adc77-561f-4c60-991b-2479589be700/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/45acb57a-0415-4ef3-bf59-4287eadbd800/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/1164b3d2-66dc-4e7f-bfab-4f7b2a991700/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/765c3547-13ab-46cb-a5fb-44d4279a1500/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/bdc6075b-bc9c-49ed-0061-abe64e862200/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/9acd1762-59d5-4f10-e1f4-df98365e4300/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/23c7ad63-d811-4787-fdb8-b5e78aeaaf00/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/dbb6da6a-812f-4c7b-811f-3dce367c0500/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/fe4ba775-0ead-429e-42a7-23fbafa31700/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/d4a02fde-d6d1-4959-e96b-7bd8a3724b00/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/7fa74aaa-8f2d-4458-6ccd-dc6f8425d300/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/b5cf04d1-4cdf-4b6d-eaf7-3b176dce4400/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/ae7d220a-3c8c-4480-dbc4-3a64ca55fa00/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/20aa8e87-32c2-455d-db7b-5185d953a400/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/a1bc1868-f673-4ca0-7798-48a091ce1e00/public',
                'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/58bd90d8-408c-4a53-14ec-51321ac66500/public',
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
              title='신부측 계좌번호'
              bankList={[
                { holder: '○○○', bank: '○○', number: '○○○-○○○-○○○' },
                { holder: '○○○', bank: '○○', number: '○○○-○○○-○○○-○○○' },
                { holder: '○○○', bank: '○○', number: '○○○-○○○-○○○-○○○' },
              ]}
            />
          </Intersect>
        </section>
        <section className='my-20 '>
          <Intersect className='space-y-8'>
            <h2 className='text-center'>축하 메시지</h2>
            <div className='text-center'>
              <CommentFormDialog
                onSuccess={() => setMessageAdded((prev) => !prev)}
              />
            </div>

            <CommentList
              onMessageAdded={() => setMessageAdded((prev) => !prev)}
            />
          </Intersect>
        </section>
        <footer className='relative mt-20 pb-10'>
          <div className='flex items-center justify-center'>
            <Share />
          </div>
          <p className='mt-20 text-xs'>
            © 2025{' '}
            <a
              href='https://www.hyun-seok.com/'
              target='_blank'
              className='font-bold'
              rel='noreferrer'
            >
              ssseok
            </a>
            . All rights reserved.
          </p>
        </footer>
      </Layout>
    </>
  );
}

export default App;
