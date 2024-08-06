export interface RegisterReq {
    user: User;
    token: Token;
    message: string;
}

interface Token {
    token: string;
    expires: string;
}

export interface SignupProps {
    email: string;
    password: string;
    role?: string;
    fullName: string;
}

export interface SelfReq {
    user: UserProps;
    token: {
        token: string;
        expires: string;
    };
    message: string;
}

export interface User {
    fullName: string;
    email: string;
    role: string;
    id: string;
}

export interface UserProps {
    category: string;
    createdAt: string;
    email: string;
    fullName: string;
    id: string;
    isAccountVerified: boolean;
    mobile: string;
    role: string;
    updatedAt: string;
    username: string;
}