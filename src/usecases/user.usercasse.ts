import { User } from "../interfaces/user.interface"
import { UserCreated, UserRepository } from "../interfaces/user.interface"
import { UserRepositoryPrisma } from "../repository/user.repository"


export class UserCase {

    private UserRepository : UserRepository
    constructor(){
        this.UserRepository = new UserRepositoryPrisma()
    }

    async create({ name, email, password }: UserCreated): Promise<User> {
        const user = await this.UserRepository.create({ name, email, password });
        return user
      }
}