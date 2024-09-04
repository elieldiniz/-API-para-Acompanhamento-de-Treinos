export interface User {
    id: number
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    data: Date
} null


export interface UserCreated {
    email: string
    name: string
    password: string
}

export interface    UserRepository{
    listUserName: any
    create(data: UserCreated): Promise<User>
}