import { WebApp } from "@/lib/expand-telegram";



export const useUserTelegram = () => {

    const webApp = WebApp();

    if(!webApp?.initDataUnsafe || JSON.stringify(webApp?.initDataUnsafe) === "{}") {
        return {
            user: {
                first_name: "Ciel DEV",
                username: "Darkc1el DEV",
                // photo_url: "https://t.me/i/userpic/320/lXIHQT6pvA2SlL17FPnProDjsEteGneaX8sWMAx6mB0.svg",
                
            }
        } as WebAppInitData;
    }
    

    return webApp.initDataUnsafe;
};
