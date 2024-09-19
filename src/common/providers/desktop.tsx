'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

export function DesktopProvider() {

    const [show,setShow] = useState<boolean>(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setShow(false);
            } else {
                setShow(true);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[]);

    if(!show) return null;

    return(
        <Link href={"/"} className=" bg-background inset-0 max-md:hidden flex flex-col gap-5 items-center justify-center text-2xl fixed z-[99999999] overflow-hidden">
            <p className=" text-5xl">🧐</p>
            <p className="max-w-[30rem] uppercase text-center"> whoops! Access the app via Telegram miniAPPs </p>
        </Link>
    );
}