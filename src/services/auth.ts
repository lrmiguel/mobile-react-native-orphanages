import api from "./api";

interface LoginData {
    email: string;
    password: string;
}

interface LoginResponse {
    user: {
        name: string;
        email: string;
    },
    token: string;
}

export default function signIn(login: LoginData): Promise<LoginResponse> {
    return api.post("login", login);
}