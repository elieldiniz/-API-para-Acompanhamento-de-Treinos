import { InterfaceUser } from "./interfaceUser";
import UserError from "./userError";

type PropsCreatedUser = {
    name: string 
    email: string
    password: string
}

export default class Cadastar implements InterfaceUser {
    name: string 
    email: string
    password: string

    constructor(name: string, email: string, password: string) {
        this.name = name
        this.email = email
        this.password = password
    }

    Created( item : PropsCreatedUser){
        if(!item.name || !item.email || !item.password){
            return new UserError('Porfavor revise seus dados')
            
        }
    }
}