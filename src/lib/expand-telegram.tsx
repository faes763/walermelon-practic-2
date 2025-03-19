'use client'

import { LoadingButton } from "@/common/ui/loading-button";
// import { WebApp } from "@/common/utils/telegram";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export function WebApp() {
    const webApp = useRef<null | TelegramWebAppAPI>(null);

    const [telegram,setTelegram] = useState<TelegramWebAppAPI | null>(null);

    useEffect(()=>{
        const interval =  setInterval(()=>{
            if(window.Telegram) {

                const tg = window.Telegram?.WebApp;
                webApp.current = tg;
                setTelegram(tg);
                clearInterval(interval);
            }
        },5);
        return(()=>{
            clearInterval(interval);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    return telegram;
}


interface IConfigWebApp {
    // WebApp на всю высоту телеграмма (в мобильной версии)
    isExpanded: boolean;

    // Показывать ли экран загрузки пока приложение не готово
    loadingOrReady: boolean;
}

const config: IConfigWebApp = {
    isExpanded: true,
    loadingOrReady: false,
}

export function ExpandedTelegram() {
    const webApp = WebApp();
    const [loading,setLoading] = useState<boolean>(config.loadingOrReady);
    
    useLayoutEffect(()=>{
        if(config.isExpanded) webApp?.expand();
    },[webApp]);

    useEffect(()=>{
        if(config.loadingOrReady) {
            setLoading(false);
            webApp?.ready();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    if(loading) {
        return( 
            <div className="flex items-center justify-center fixed z-50 inset-0">
                <LoadingButton/>
            </div>
        );
    }

    return null;
}