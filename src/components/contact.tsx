import {
  BRIDE_CONTACT,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
  BRIDE_NAME,
  GROOM_CONTACT,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  GROOM_NAME,
} from '../../config';
import ContactDialog from './contact-dialog';

export default function Contact() {
  return (
    <div className='mb-20'>
      <div className='mt-14 flex items-center justify-center gap-3'>
        <div>
          <div>{GROOM_FATHER_NAME}</div>
          <div>{GROOM_MOTHER_NAME}</div>
        </div>
        <span>의</span>
        <span>차남</span>
        <strong>{GROOM_NAME}</strong>
      </div>
      <div className='mt-5 flex items-center justify-center gap-3'>
        <div>
          <div>{BRIDE_FATHER_NAME}</div>
          <div>{BRIDE_MOTHER_NAME}</div>
        </div>
        <span>의</span>
        <span>장녀</span>
        <strong>{BRIDE_NAME}</strong>
      </div>
      <div className='mt-14 text-center'>
        <ContactDialog groomList={GROOM_CONTACT} priestList={BRIDE_CONTACT} />
      </div>
    </div>
  );
}
