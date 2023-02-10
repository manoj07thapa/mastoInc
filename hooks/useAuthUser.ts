import { useState, useEffect } from 'react';
import { Auth } from "aws-amplify";
import { UserProp } from '@/types/types';

export function useAuthUser() {
    const [user, setUser] = useState<UserProp | null>(null);
    useEffect(() => {
        async function authListner() {
            const user = await Auth.currentAuthenticatedUser();
            setUser(user);
        }
        authListner();
    }, [setUser]);


    return { user, setUser };
}

