import { User } from "@prisma/client"
import { UserCreated, UserRepository } from "../interfaces/user.interface"
import { UserRepositoryPrisma } from "../repository/user.repository"


export class UserUserCase {

    private UserRepository : UserRepository
    constructor(){
        this.UserRepository = new UserRepositoryPrisma()
    }

    async create({name, email, password}: UserCreated): Promise<User>{}
}