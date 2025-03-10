export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='max-w-screen-sm container mx-auto font-ko'>
      {children}
    </main>
  );
}
