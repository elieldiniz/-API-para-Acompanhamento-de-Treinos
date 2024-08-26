import { PrismaClient, User } from "../../../node_modules/.prisma/client/index";


class UserController {
    private prisma = new PrismaClient()

    async create(data: Omit<User, 'id'>){
        try {
            return this.prisma.user.create({
                data: {
                    ...data
                }

            })
        } catch (error) {
            
        }
    }
    

}

export default UserController;