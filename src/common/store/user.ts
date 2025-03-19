import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware';
import { IUser } from '../types/user.type';

export type UserState = {
    user: IUser | null;
}

export type UserUpdateActions = {
    update: number;
    revalidate: () => void;
}

export type UserActions = {
    setUser: (user: IUser) => void;
    setField: <K extends keyof IUser>(key: K, value: IUser[K]) => void;
    setPrevField:  <K extends keyof IUser>(key: K, prev: (value:IUser[K]) => IUser[K]) => void;

    removeField: <K extends keyof IUser>(key: K) => void;

} & UserUpdateActions;



export type UserStore = UserState & UserActions;


export const useUserStore = create(
    persist<UserStore>(
        (set) => ({
            user: null,
            // user: {
            //     telegramId: '',
            //     firstName: 'привет это я тестовый режим',
            //     eggs: [],
            // },
            setUser: (user: IUser) => set({ user }),
            setField: <K extends keyof IUser>(key: K, value: IUser[K]) => set((state) => {
                if(!state.user) return state;
                
                    return {
                        ...state,
                        user: {
                            ...state.user,
                            [key]: value,
                        },
                    };
                

            }),

            removeField: <K extends keyof IUser>(key: K) => set(state=>{
                const {...newUser} = state.user;

                delete newUser[key];
                
                return {
                    ...state,
                    user: {
                        ...newUser
                    }
                };
            }),
            setPrevField:  <K extends keyof IUser>(key: K, prev: (value:IUser[K]) => IUser[K]) => set(state=>{
                if(!state.user) return state;

                // return state.setField(key, prev(state.user[key]));

                // if(!state.user) return state;
                return {
                    ...state,
                    user: {
                        ...state.user,
                        [key]: prev(state.user[key])
                    }
                };
            }),

            update: Date.now(),
            revalidate: () => set({ update: Date.now() }),

        }),
        {
            name: 'user-store',
            storage: createJSONStorage(() => sessionStorage),
        })
);


