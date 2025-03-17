import { Button } from '@/common/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/common/components/ui/dialog';

import { Phone } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';

type Contact = {
  name: string;
  designation: string;
  phone: string;
};

export default function ContactDialog({
  groomList,
  priestList,
}: {
  groomList: Contact[];
  priestList: Contact[];
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>연락하기</Button>
      </DialogTrigger>
      <DialogContent className='top-[50%] w-10/12 rounded-lg border'>
        <DialogTitle className='p-4 text-center'>연락처</DialogTitle>
        <div className='px-6 pb-4 text-sm space-y-4'>
          <div className='space-y-1'>
            {groomList.map((contact, index) => (
              <ContactItem key={index} contact={contact} />
            ))}
          </div>
          <div className='space-y-1'>
            {priestList.map((contact, index) => (
              <ContactItem key={index} contact={contact} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ContactItem({ contact }: { contact: Contact }) {
  return (
    <div className='flex items-center justify-between gap-2'>
      <div className='flex-1'>{contact.designation}</div>
      <div className='flex-1'>{contact.name}</div>
      <div className='flex gap-3 text-gy-8'>
        <a
          href={`tel:${contact.phone}`}
          className='active:opacity-60 hover:opacity-60 transition-opacity'
        >
          <Phone className='w-5 h-5' />
        </a>
        <a
          href={`sms:${contact.phone}`}
          className='active:opacity-60 hover:opacity-60 transition-opacity'
        >
          <MessageCircleMore className='w-5 h-5' />
        </a>
      </div>
    </div>
  );
}
