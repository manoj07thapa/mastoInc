import { SetStateAction, createContext, Dispatch, ReactNode } from "react";

type UserProp = {
    username: string,
    attributes: {
        email: string,
        name: string,
        phone_number: string,
        sub: string
    },
    signInUserSession: {
        accessToken: {
            payload: {
                "cognito:groups": string[]
            }
        }
    }

}

type UserContextProps = {
    user: UserProp | null,
    setUser: Dispatch<SetStateAction<UserProp | null>>
}



export const UserContext = createContext<UserContextProps | null>({} as UserContextProps);


