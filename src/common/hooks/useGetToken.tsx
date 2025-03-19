import { useLayoutEffect, useState } from "react";
import { WebApp } from "@/lib/expand-telegram";

import { setCookie } from "nookies";
import { DEV_MODE } from "../constanst";


export const useGetToken = () => {
    const [token, setToken] = useState<string>("");

    const webApp = WebApp();


    useLayoutEffect(()=>{
        if(webApp) {
            const devToken = process.env.DEV_TOKEN;
            // const devToken = "user=%7B%22id%22%3A1453231063%2C%22first_name%22%3A%22Ciel%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22Darkc1el%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FlXIHQT6pvA2SlL17FPnProDjsEteGneaX8sWMAx6mB0.svg%22%7D&chat_instance=3150925625463109109&chat_type=private&auth_date=1736881256&signature=G4xmPWohiEsy34l9t4T7FHnnW7z3zPSb9--6rWg5vEQa24EoY1nyrkveKZKmp840nOXzv6oE2vYDOXjTijeNAA&hash=99383f4d93b5cf3cf8b60c9a67e78867b428bc6236c7398279272ba776ff7e34" 
            const authData = DEV_MODE ? devToken : webApp.initData;
            setToken(authData);
            setCookie(null, "initData", authData);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[webApp]);

    return {
        token,
        IS_DEV_TOKEN: token === process.env.DEV_TOKEN,
    }
};
