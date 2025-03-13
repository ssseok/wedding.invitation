import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import '@/index.css';
import HotToast from '@/common/components/hot-toast';

window.Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
window.Kakao.isInitialized();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <HotToast />
  </>,
);
