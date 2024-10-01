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
      </body>
    </html>
  );
}
