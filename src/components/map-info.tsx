import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/common/components/ui/dropdown-menu';
import { Separator } from '@/common/components/ui/separator';
import { copy } from '@/lib/copy';
import {
  WEDDING_ADDRESS,
  WEDDING_LOCATION_BUS,
  WEDDING_LOCATION_NAME,
  WEDDING_LOCATION_SUBWAY,
  WEDDING_LOCATION_TEL,
  WEDDING_PARKING,
} from '../../config';
import { Map, MoveUpRight } from 'lucide-react';

export default function MapInfo() {
  return (
    <div className='mt-10 mx-8'>
      <div className='flex justify-between items-center'>
        <p>
          {WEDDING_ADDRESS}
          <br />
          <strong>{WEDDING_LOCATION_NAME}</strong>
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Map className='w-5 h-5' />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => copy(WEDDING_ADDRESS)}>
              주소복사하기
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => {
                window.open(
                  `https://map.naver.com/p/search/${WEDDING_ADDRESS}`,
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
                  `https://map.kakao.com/?q=${WEDDING_ADDRESS}`,
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
      <p className='text-xs mt-2 text-gray-500 dark:text-foreground'>
        {WEDDING_LOCATION_TEL}
      </p>

      <div className='mt-10 space-y-8 text-gray-500 dark:text-foreground'>
        <div className='flex items-center'>
          <span className='w-14 text-foreground'>지하철</span>
          <Separator orientation='vertical' className='bg-foreground' />
          <div className='text-xs space-y-1'>
            <p>{WEDDING_LOCATION_SUBWAY}</p>
          </div>
        </div>
        <div className='flex items-center'>
          <span className=' w-14 text-foreground'>버스</span>
          <Separator orientation='vertical' className='bg-foreground' />
          <div className='text-xs space-y-1'>
            {WEDDING_LOCATION_BUS.map((bus, index) => (
              <p key={index}>{bus}</p>
            ))}
          </div>
        </div>
        <div className='flex items-center'>
          <span className='w-14 text-foreground'>주차</span>
          <Separator orientation='vertical' className='bg-foreground' />
          <div className='text-xs space-y-1'>
            <p>{WEDDING_PARKING}</p>
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
