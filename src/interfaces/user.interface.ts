export interface User {
    id: number
    email: string
    name: string
}


export interface UserCreated {
    email: string
    name: string
    password: string
}

export interface    UserRepository{
    create(data: UserCreated): Promise<User>
}