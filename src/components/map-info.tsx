import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/common/components/ui/dropdown-menu';
import { Separator } from '@/common/components/ui/separator';
import { copy } from '@/lib/copy';
import { Map, MoveUpRight } from 'lucide-react';

export default function MapInfo() {
  return (
    <div className='mt-10 mx-8'>
      <div className='flex justify-between items-center'>
        <p>
          서울 중랑구 면목로 238 중랑구민회관
          <br />
          <strong>중랑구민회관웨딩홀</strong>
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Map className='w-5 h-5' />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onSelect={() => copy('서울 강남구 논현로79길 72')}
            >
              주소복사하기
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => {
                window.open(
                  'https://map.naver.com/p/search/%EC%A4%91%EB%9E%91%EA%B5%AC%EB%AF%BC%ED%9A%8C%EA%B4%80%EC%9B%A8%EB%94%A9%ED%99%80/place/11660070?c=15.00,0,0,0,dh&isCorrectAnswer=true',
                  '_blank',
                );
              }}
              className='flex justify-between'
            >
              네이버 지도 <MoveUpRight className='w-4 h-4' />
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => {
                window.open(
                  'https://map.kakao.com/?nil_profile=title&nil_src=local',
                  '_blank',
                );
              }}
              className='flex justify-between'
            >
              카카오 지도 <MoveUpRight className='w-4 h-4' />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p className='text-xs mt-2 text-gray-500'>02-491-2727</p>

      <div className='mt-10 space-y-8 text-gray-500'>
        <div className='flex items-center'>
          <span className='w-14 text-foreground'>지하철</span>
          <Separator orientation='vertical' className='bg-foreground' />
          <div className='text-xs space-y-1'>
            <p>[7호선 강남역] 용마산역 1번 출구 도보 5분</p>
          </div>
        </div>
        <div className='flex items-center'>
          <span className=' w-14 text-foreground'>버스</span>
          <Separator orientation='vertical' className='bg-foreground' />
          <div className='text-xs space-y-1'>
            <p>
              중곡초등학교 하차: 3215, 272, 2212, 2111, 2217, 2013, 4212, 262,
            </p>
            <p>용마산역 하차: 2219, 70, 2311,</p>
          </div>
        </div>
        <div className='flex items-center'>
          <span className='w-14 text-foreground'>주차</span>
          <Separator orientation='vertical' className='bg-foreground' />
          <div className='text-xs space-y-1'>
            <p>600대 동시 주차 가능 (무료)</p>
            <div className='flex gap-0.5'>
              *
              <span>
                주차장 이용이 혼잡하오니 불편하시더라도 대중교통 이용을 권장
                드립니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
