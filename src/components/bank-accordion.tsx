import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/common/components/ui/accordion';
import { Separator } from '@/common/components/ui/separator';
import { copy } from '@/lib/copy';
import { cn } from '@/lib/utils';
import { Copy } from 'lucide-react';

export default function BankAccordion({
  title,
  bankList,
}: {
  title: string;
  bankList: { holder: string; bank: string; number: string }[];
}) {
  return (
    <div className='mt-8 mx-8'>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent className='space-y-4'>
            {bankList.map(({ holder, bank, number }, i) => (
              <div key={i} className='relative  text-xs'>
                <div className='flex items-center h-3 space-x-2'>
                  <div>{holder}</div>
                  <Separator orientation='vertical' className='bg-foreground' />
                  <div>{bank}</div>
                  <Separator orientation='vertical' className='bg-foreground' />
                  <div>{number}</div>
                </div>
                <button
                  className={cn(
                    'absolute top-0.5 right-0',
                    ' transition-colors ',
                  )}
                  onClick={() => copy(`${bank} ${number}`)}
                >
                  <Copy className='w-4 h-4 cursor-pointer' />
                </button>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
