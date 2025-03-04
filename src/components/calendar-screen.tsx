import { Calendar } from '@/common/components/ui/calendar';
import { parse } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useState } from 'react';

export default function CalendarScreen() {
  const weddingDate = parse('2025.03.03', 'yyyy.MM.dd', new Date());
  const [date, setDate] = useState<Date | undefined>(weddingDate);

  return (
    <>
      <h2 className='text-center text-xl font-en'>calendar</h2>
      <div className='flex justify-center my-4'>
        <img
          src='/src/assets/wedding-3.png'
          alt='반지'
          className='w-6 h-6 aspect-square'
        />
      </div>
      <div className='max-w-[400px] mx-auto md:max-w-[500px] lg:max-w-full'>
        <Calendar
          mode='single'
          selected={date}
          locale={ko}
          disabled={(date) =>
            date < new Date('2025-01-01') || date > new Date('2025-12-31')
          }
        />
      </div>
    </>
  );
}
