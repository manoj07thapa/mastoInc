import { SetStateAction, createContext, Dispatch, ReactNode } from "react";
import { UserProp } from "@/types/types";

type UserContextProps = {
    user: UserProp | null,
    setUser: Dispatch<SetStateAction<UserProp | null>>
}

export const UserContext = createContext<UserContextProps | null>({} as UserContextProps);


