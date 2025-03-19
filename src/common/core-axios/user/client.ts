import {cache} from 'react';
import { client } from ".."
import { useUserStore } from '@/common/store/user';
import { IResponse } from '@/common/types/response.type';
import { IUser } from '@/common/types/user.type';
import { DEV_MODE } from '@/common/constanst';




class User {
    getUser = cache(async () => {
        const {message, statusCode} = await client.postBody<IResponse<IUser>>('/users/auth');

        if(message) {
            useUserStore.getState().setUser(message);

            return message;
        }
    });

    updateField = async () => {
        if(DEV_MODE) return null;
        const {message, statusCode} = await client.postBody<IResponse<IUser>>('/users/update');

        return message;
    }


}
export const UserClient = new User();