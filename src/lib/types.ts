declare global {
  interface Window {
    naver: any;
    Kakao: any;
  }
}

export interface GuestbookEntry {
  id: number;
  name: string;
  password: string;
  comment: string;
  created_at: string;
}

export interface GuestbookFormData {
  name: string;
  password: string;
  comment: string;
}

export {};
