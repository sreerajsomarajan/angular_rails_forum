export class User {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    password_confirmation: string;
    currentUser: currentUser
};

export class currentUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    authentication_token: string
};
