import { useEffect, useRef, useState } from "react";

export function WebApp() {
    const webApp = useRef<null | TelegramWebAppAPI>(null);

    const [telegram,setTelegram] = useState<TelegramWebAppAPI | null>(null);

    useEffect(()=>{
        const interval =  setInterval(()=>{
            console.log(window.Telegram);
            if(window.Telegram) {

                const tg = window.Telegram?.WebApp;
                webApp.current = tg;
                setTelegram(tg);
                clearInterval(interval);
            }
        },1000);
        return(()=>{
            clearInterval(interval);
        })
    },[]);
    
    return telegram;
}

// WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);