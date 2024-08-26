import UserError from "./userError"

export default class User{
    name: string
    email: string
    password: string

    constructor(name: string, email: string, password: string) {
        this.name = name
        this.email = email
        this.password = password
    }

    Created() {
        if(!this.name || !this.email || !this.password){
            return new UserError('Porfavor revise seus dados')
        }

        const data = {
            name: this.name,
            email: this.email,
            password: this.password
        }

        const resdate = JSON.stringify(data)
        return resdate
    } 
}