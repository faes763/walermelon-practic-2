import type { Metadata, ResolvingMetadata, Viewport } from 'next'
import "../styles/globals.css";
import { inter } from "@/styles/fonts";
import { cn } from "@/common/utils";
import Script from "next/script";
import { ExpandedTelegram } from '@/lib/expand-telegram';
import { UserProvider,  } from '@/common/providers/user';


type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}


export async function generateMetadata(
  { params, searchParams }: any,
  parent: any
): Promise<Metadata> {

  return {
    title: "DCL App",
    description: "Default template",
    authors: {
      name: "DCiel",
      url: "https://github.com/faes763"
    },
    creator: "dciel",
    openGraph: {
      title: "DCL App",
      description: "Default template",
      siteName: "DCiel",
      locale: "ru-RU",
      type: "website",
      images: "https://2049token.fun/other/opengraph.jpg",
    },
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // appLinks: {
    //   web: {
    //     url: "https://2049token.fun/",
    //     should_fallback: true,
    //   }
    // },
    category: 'technology',
    bookmarks: ["https://nextjs.org/blog/next-15","https://zustand.docs.pmnd.rs/guides/tutorial-tic-tac-toe","https://ui.shadcn.com/docs",],

  }
}


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000",
}


function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script  strategy="afterInteractive" id="tg-web" src="https://telegram.org/js/telegram-web-app.js"/>
      </head>
      <body
        className={cn(inter.className,`antialiased`)}
      >
        <ExpandedTelegram />
        <UserProvider >
          {children}
        </UserProvider>
      </body>
    </html>
  );
}







export default RootLayout;
