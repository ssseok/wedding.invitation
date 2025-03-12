import { copy } from '@/lib/copy';
import { URL } from '@/lib/utils';
import { useState } from 'react';
import { Share2, Link } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/common/components/ui/dropdown-menu';

export default function Share() {
  const [open, setOpen] = useState(false);

  const onCopy = () => {
    copy(URL);
    setOpen(false);
  };

  const kakaoSend = (image: {
    imageUrl: string;
    imageWidth: number;
    imageHeight: number;
  }) => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        ...image,
        title: '○○○ ♥ ○○○ 결혼합니다',
        description: '○○월 ○○일 ○ ○○시 ○○분\n○○, ○○○○○○',
        link: {
          mobileWebUrl: URL,
          webUrl: URL,
        },
      },
      buttons: [
        {
          title: '모바일 청첩장 보기',
          link: {
            mobileWebUrl: URL,
            webUrl: URL,
          },
        },
      ],
    });
  };

  const kakaoShareFeed = () => {
    kakaoSend({
      imageUrl:
        'https://t1.daumcdn.net/brunch/service/user/d4v5/image/ZW3pLUS0Yu60Q81nwUiTdo7RWNc.jpeg',
      imageWidth: 600,
      imageHeight: 450,
    });
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <Share2 className='w-5 h-5' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={onCopy}>
          <Link className='w-4 h-4' />
          링크 복사하기
        </DropdownMenuItem>
        <DropdownMenuItem
          className='flex justify-between'
          onClick={kakaoShareFeed}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M12 3c5.8 0 10.501 3.664 10.501 8.185c0 4.52-4.701 8.184-10.5 8.184a13.51 13.51 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866c0-4.52 4.7-8.185 10.5-8.185Zm5.908 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.472.472 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413l1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155Zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944Zm-5.857-1.091l.696-1.708l.638 1.707H9.093Zm2.523.487l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474a.696.696 0 0 0-.653.447l-1.662 4.075a.472.472 0 0 0 .874.357l.332-.813h2.07l.298.8a.472.472 0 1 0 .884-.33l-.345-.926ZM8.294 9.302a.472.472 0 0 0-.471-.472H4.578a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14a.472.472 0 0 0 .472-.472Z'
            ></path>
          </svg>
          카카오 초대장
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
