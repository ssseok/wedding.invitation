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
import {
  BRIDE_ACCOUNTS,
  GALLERY_IMAGES,
  GROOM_ACCOUNTS,
  POSTER_URL,
  VIDEO_URL,
  WEDDING_INVITATION_IMAGE,
} from '../config';

function App() {
  const { hasVideo, isChecking } = useVideoCheck(VIDEO_URL);
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
                src={WEDDING_INVITATION_IMAGE}
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
            <Gallery images={GALLERY_IMAGES} />
          </Intersect>
        </section>
        {/* 찾아오시는 길*/}
        <section className='my-20'>
          <Intersect>
            <h2 className='text-center pb-10'>오시는 길</h2>
            <MapNaver />
            <MapInfo />
          </Intersect>
        </section>
        {/* 계좌번호 */}
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
            <BankAccordion title='신랑측 계좌번호' bankList={GROOM_ACCOUNTS} />
            <BankAccordion title='신부측 계좌번호' bankList={BRIDE_ACCOUNTS} />
          </Intersect>
        </section>
        {/* 방명록 */}
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
        {/* 공유하기 */}
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
