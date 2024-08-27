import { User, UserCreated, UserRepository } from "../interfaces/user.interface";


class UserRepositoryPrisma implements UserRepository{
    create(data: UserCreated): Promise<User> {
      
    }

}

export {UserRepositoryPrisma}