import ContactDialog from './contact-dialog';

export default function Contact() {
  return (
    <div className='mb-20'>
      <div className='mt-14 flex items-center justify-center gap-3'>
        <div>
          <div>○○○</div>
          <div>○○○</div>
        </div>
        <span>의</span>
        <span>차남</span>
        <strong>○○</strong>
      </div>
      <div className='mt-5 flex items-center justify-center gap-3'>
        <div>
          <div>○○○</div>
          <div>○○○</div>
        </div>
        <span>의</span>
        <span>장녀</span>
        <strong>○○</strong>
      </div>
      <div className='mt-14 text-center'>
        <ContactDialog
          groomList={[
            {
              designation: '신랑',
              name: '○○○',
              phone: '010-○○○○-○○○○',
            },
            {
              designation: '신랑 父',
              name: '○○○',
              phone: '010-○○○○-○○○○',
            },
            {
              designation: '신랑 母',
              name: '○○○',
              phone: '010-○○○○-○○○○',
            },
          ]}
          priestList={[
            {
              designation: '신부',
              name: '○○○',
              phone: '010-○○○○-○○○○',
            },
            {
              designation: '신부 父',
              name: '○○○',
              phone: '010-○○○○-○○○○',
            },
            {
              designation: '신부 母',
              name: '○○○',
              phone: '010-○○○○-○○○○',
            },
          ]}
        />
      </div>
    </div>
  );
}
