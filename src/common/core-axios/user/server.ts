import { client } from "..";
import { IUser } from "@/common/types/user.type";
import { cookies } from 'next/headers';
import { IResponse } from "@/common/types/response.type";


class User {
    getUser = async () => {

        const cookieStore = await cookies();

        const initData = cookieStore.get("initData")?.value;

        if(!initData) return null;

        try {
            const {message, statusCode} = await client.postBody<IResponse<IUser>>('/users/auth', {headers: {Authorization: initData}});

            if(!message) return null;

            return true;
        } catch (error) {
            return null;
        }
    }
}

export const UserServer = new User();