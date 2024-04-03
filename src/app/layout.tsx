
import "@/styles/globals.css";
import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils"
import Providers from "./components/ui/Providers";

const inter = Inter({subsets: ['latin']})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('bg-white text-slate-900 antialiased', inter)}>
      <body className=" min-h-screen bg-slate-50 dark:bg-slate-900 antialiased" >
        <Providers>{children}</Providers>
        </body>
    </html>
  );
}
