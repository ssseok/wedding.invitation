<h1 align="center">
  React Wedding Invitation Template (결혼 청첩장 템플릿)
</h1>

<p align="center">
  <a href="https://github.com/ssseok/wedding.invitation/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Danmin Gatsby Blog Template is released under the 0BSD license." />
  </a>
</p>

**Demo Website**: [**wedding.invitation**](https://weddinginvitation-mu.vercel.app/)  
**Open source Code**: [**Github**](https://github.com/ssseok/wedding.invitation)

**WIki**: [**Wiki**](https://github.com/ssseok/wedding.invitation/wiki) (**Wiki 읽는 것을 추천합니다**)

&nbsp;

## 👋 소개

React 기반으로 만든 모바일 결혼청첩장입니다.

누구나 손쉽게 커스텀할 수 있게끔 제작하였습니다.(자세하게 적어놓았으니 [Wiki](https://github.com/ssseok/wedding.invitation/wiki)를 봐주세요)

문제가 있거나 코드에 버그가 있다면 아낌없이 Issues 해주시면 감사하겠습니다.

&nbsp;

## ✨ 기능

- ✨ [스플래시 화면](https://github.com/ssseok/wedding.invitation/wiki/%EA%B8%B0%EB%8A%A5-%7C-%EC%8A%A4%ED%94%8C%EB%9E%98%EC%8B%9C-%ED%99%94%EB%A9%B4)
- 💅 [스크롤 애니메이션 & 결혼 축하 문구](https://github.com/ssseok/wedding.invitation/wiki/%EA%B8%B0%EB%8A%A5-%7C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-&-%EA%B2%B0%ED%98%BC-%EC%B6%95%ED%95%98-%EB%AC%B8%EA%B5%AC)
- ☎️ [연락처](https://github.com/ssseok/wedding.invitation/wiki/%EA%B8%B0%EB%8A%A5-%7C-%EC%97%B0%EB%9D%BD%EC%B2%98-%ED%99%94%EB%A9%B4)
- 📆  [캘린더](https://github.com/ssseok/wedding.invitation/wiki/%EA%B8%B0%EB%8A%A5-%7C-%EC%BA%98%EB%A6%B0%EB%8D%94)
- 📸 [갤러리](https://github.com/ssseok/wedding.invitation/wiki/%EA%B8%B0%EB%8A%A5-%7C-%EA%B0%A4%EB%9F%AC%EB%A6%AC)
- 🗺️ [지도를 활용한 위치](https://github.com/ssseok/wedding.invitation/wiki/%EA%B8%B0%EB%8A%A5-%7C-%EC%A7%80%EB%8F%84%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EC%9C%84%EC%B9%98)
- 💸 [계좌번호](https://github.com/ssseok/wedding.invitation/wiki/%EA%B8%B0%EB%8A%A5-%7C-%EA%B3%84%EC%A2%8C%EB%B2%88%ED%98%B8)
- 💬 [축하 메시지(방명록)](https://github.com/ssseok/wedding.invitation/wiki/%EA%B8%B0%EB%8A%A5-%7C-%EC%B6%95%ED%95%98-%EB%A9%94%EC%8B%9C%EC%A7%80(%EB%B0%A9%EB%AA%85%EB%A1%9D))
- 👨🏼‍💻 [공유하기](https://github.com/ssseok/wedding.invitation/wiki/%EA%B8%B0%EB%8A%A5-%7C-%EA%B3%B5%EC%9C%A0%ED%95%98%EA%B8%B0)
- 🎵 [배경음악(useVideoCheck(배너 비디오가 있는지 체크해 주는 hook))](https://github.com/ssseok/wedding.invitation/wiki/%EA%B8%B0%EB%8A%A5-%7C-%EB%B0%B0%EA%B2%BD%EC%9D%8C%EC%95%85(useVideoCheck-hook))

&nbsp;

## 🚀 시작하기

Github Page, Netlify, Vercel 등 원하시는 배포 환경을 사용하시면 됩니다.

&nbsp;

#### 🔧 Vercel 만들기

[Vercel로 배포하기](https://github.com/ssseok/wedding.invitation/wiki/Vercel%EB%A1%9C-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0)

#### 🏃‍♀️ 실행하기

[Local에서 사용방법](https://github.com/ssseok/wedding.invitation/wiki#02-local%EC%97%90%EC%84%9C-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95)

&nbsp;

## ✨ 청첩장 커스텀하기

```typescript
export const SPLASH_TEXT = [`○○, ○○ 결혼합니다.`];

// 비디오 정보 (첫 화면 비디오가 있으면 배너 이미지 보다는 비디오가 우선적으로 보여짐)
export const VIDEO_URL = '';
export const POSTER_URL = '';

// 배너 이미지 (맨위 처음에 보여지는 사진)
export const BANNERIMAGE =
  'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/d5b8c0a2-13c7-4e81-70ee-20f263346200/tog';

// 결혼 초대장 문구 다음으로 보여질 이미지
export const WEDDING_INVITATION_IMAGE =
  'https://imagedelivery.net/9PYUDgg_yiUa2u-j77sFBg/b64b73bf-f02c-42a7-55f9-1dcf79afa700/public';

// 지도 & 날짜 정보
export const WEDDING_DATE = '2025.03.15';
export const WEDDING_LOCATION = '○○○○ ○○○ ○F, ○○○○';
export const WEDDING_LOCATION_NAME = '○○○○○○○홀';
export const WEDDING_ADDRESS = '○○○○ ○○○ ○○○○';
export const WEDDING_LOCATION_TEL = '○○○-○○○-○○○○';
export const WEDDING_LOCATION_SUBWAY = '[○○호선] ○○역 ○○역 ○번 출구 도보 ○분';
export const WEDDING_LOCATION_BUS = [
  '○○○○ 하차: ○○○, ○○○, ○○○, ○○○, ○○○, ○○○, ○○○, ○○○',
  '○○○○ 하차: ○○○, ○○○, ○○○',
];
export const WEDDING_PARKING = '○○○대 동시 주차 가능 (무료)';
export const WEDDING_MAP_LOT = 37.5739539541608; // 경도
export const WEDDING_MAP_LAT = 127.085105452975; // 위도

// 신랑 & 신부 정보
export const GROOM_NAME = '○○○';
export const GROOM_FATHER_NAME = '○○○';
export const GROOM_MOTHER_NAME = '○○○';
export const BRIDE_NAME = '○○○';
export const BRIDE_FATHER_NAME = '○○○';
export const BRIDE_MOTHER_NAME = '○○○';

// 연락처
export const GROOM_CONTACT = [
  { designation: '신랑', name: '○○○', phone: '○○○-○○○-○○○○' },
  { designation: '신랑 父', name: '○○○', phone: '○○○-○○○-○○○○' },
  { designation: '신랑 母', name: '○○○', phone: '○○○-○○○-○○○○' },
];
export const BRIDE_CONTACT = [
  { designation: '신부', name: '○○○', phone: '○○○-○○○-○○○○' },
  { designation: '신부 父', name: '○○○', phone: '○○○-○○○-○○○○' },
  { designation: '신부 母', name: '○○○', phone: '○○○-○○○-○○○○' },
];

// 계좌번호 정보
export const GROOM_ACCOUNTS = [
  { holder: '○○○', bank: '○○은행', number: '○○○-○○○-○○○○' },
  { holder: '○○○', bank: '○○은행', number: '○○○-○○○-○○○○' },
  { holder: '○○○', bank: '○○은행', number: '○○○-○○○-○○○○' },
];

export const BRIDE_ACCOUNTS = [
  { holder: '○○○', bank: '○○은행', number: '○○○-○○○-○○○○' },
  { holder: '○○○', bank: '○○', number: '○○○-○○○-○○○○' },
  { holder: '○○○', bank: '○○○뱅크', number: '○○○-○○○-○○○○' },
];

// 갤러리 이미지
export const GALLERY_IMAGES = [
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
];

```

&nbsp;

## ✍️ 방명록 & 지도 & 공유하기 API KEY 등록

[API KEY 설정하는 방법](https://github.com/ssseok/wedding.invitation/wiki/API-KEY-%EC%84%A4%EC%A0%95%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)

 - Naver, Kakao, Supabase 설정하는 방법입니다.

&nbsp;

## 🚨 Requirements

bun 1.2.3

### 💡 문의

질문이 있으시거나 제안하고 싶으신 기능이 있으시다면, 👉 [여기](https://github.com/ssseok/wedding.invitation/issues/17)에 편하게 댓글 남겨주세요! :)
