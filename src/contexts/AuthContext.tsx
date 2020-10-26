import { useState } from 'react';
import { createContext } from 'react';

import auth from '../services/auth';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider(children) {
    const [user, setUser] = useState<object | null>(null);

    async function signIn() {
        const login = {
            email: "leo.rmiguel@gmail.com",
            password: "12345",
        };

        const { user } = await auth(login);
        
        setUser(user);
    }

    function signOut() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user: user, signIn}} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;