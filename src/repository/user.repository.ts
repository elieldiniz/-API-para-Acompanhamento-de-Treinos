import { prisma } from "../database/prisma-client";
import { User, UserCreated, UserRepository } from "../interfaces/user.interface";

class UserRepositoryPrisma implements UserRepository {
  async create(data: UserCreated): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      }
    })
   
    return user
  }

  async listUserName(name: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        name,
      }
    })
  
    return user
  }
}

export { UserRepositoryPrisma };