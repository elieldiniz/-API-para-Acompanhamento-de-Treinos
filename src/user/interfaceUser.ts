import UserError from "./userError"

export interface InterfaceUser {
    name: string
    email: string
    password: string

    Created(): string | UserError
}