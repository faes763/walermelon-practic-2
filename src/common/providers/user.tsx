'use client'

import { useEffect, useLayoutEffect, useState } from "react";
import { client } from "../core-axios";
import { UserClient } from "../core-axios/user/client";
import { useUserStore } from "../store/user";
import { useGetToken } from "../hooks/useGetToken";
import { vibrate } from "../utils/vibrate";
import { useShallow } from "zustand/react/shallow";
import { LoadingButton } from "../ui/loading-button";




export const UserProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

    const [updated, user] = useUserStore(useShallow(state => [state.update, state.user]));
    const [loading, setLoading] = useState<boolean>(true);
    const { token } = useGetToken();

    useEffect(()=>{
        if(user && token) {
            setTimeout(()=>{
                setLoading(false);
            },1000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user, token]);




    useEffect(()=>{
        
        if(!token) {
            return;
        }

        client.updateHeaders({
            Authorization: token,
        });

        const vibrates = [0.12,0.2,0.3,0.45,0.52,0.623,0.725];
        for (const vib of vibrates) {
            setTimeout(()=>{
                vibrate("medium");
            },vib*1000);
        }

        UserClient.getUser().then((user)=>{
            if(user) {
                setLoading(false);
            }
        });
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token]);


    useEffect(()=>{
        if(updated) {
            // UserClient.getUser();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[updated]);


    if(loading) {
        return( 
            <div className="flex bg-neutral_default/90 backdrop-blur items-center justify-center fixed z-50 inset-0">
                <LoadingButton 

                />
            </div>
        );
    }

    return (
        <>
        {children}
        </>
    )
    // return null;
};


