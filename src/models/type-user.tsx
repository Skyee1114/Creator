export interface UserModel {
    id: number;
    name: string;
    email: string;
}

export function createDefaultUser(): UserModel {
    return {
        id: 0,
        name: 'default',
        email: 'default@example.com'
    };
}