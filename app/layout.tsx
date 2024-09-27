import '@/app/ui/global.css';
import { monstserrat } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monstserrat.className} antialiased`}>
        {children}
        <footer className="py-10 flex justify-center intems-center">
          Hecho con amor por la gente de Vercel
        </footer>
      </body>
    </html>
  );
}
