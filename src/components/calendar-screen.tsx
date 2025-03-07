import { Calendar } from '@/common/components/ui/calendar';
import { parse } from 'date-fns';
import { ko } from 'date-fns/locale';

export default function CalendarScreen() {
  const weddingDate = parse('2025.05.10', 'yyyy.MM.dd', new Date());

  return (
    <>
      <h2 className='text-center text-xl font-en'>calendar</h2>
      <div className='flex justify-center my-4'>
        <img
          src='/src/assets/imgs/ring.png'
          alt='반지'
          className='w-6 h-6 aspect-square'
        />
      </div>
      <div className='max-w-[400px] mx-auto md:max-w-[500px] lg:max-w-full'>
        <Calendar
          mode='single'
          selected={weddingDate}
          locale={ko}
          defaultMonth={weddingDate}
          disabled={(date) =>
            date < new Date('2025-01-01') || date > new Date('2025-12-31')
          }
        />
      </div>
    </>
  );
}
