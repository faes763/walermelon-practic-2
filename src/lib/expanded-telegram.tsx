'use client'

import { LoadingButton } from "@/common/ui/loading-button";
import { WebApp } from "@/common/utils/telegram";
import { useEffect, useLayoutEffect, useState } from "react";

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