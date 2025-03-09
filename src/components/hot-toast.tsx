import { Toaster } from 'react-hot-toast';

export default function HotToast() {
  return (
    <Toaster
      toastOptions={{
        style: {
          fontSize: '14px',
          backdropFilter: 'blur(16px)',
          filter: 'drop-shadow(rgba(0, 0, 0, 0.1) 0px 2px 10px)',
          background: 'rgba(255, 255, 255, 0.9)',
        },
        position: 'top-center',
      }}
    />
  );
}
