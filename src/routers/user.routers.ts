import {FastifyInstance,FastifyReply } from "fastify"
import {UserCase } from "../usecases/user.usercasse"
import { UserCreated } from "../interfaces/user.interface"


export async function userRouters(fastify: FastifyInstance){

    const userCase = new UserCase()

    fastify.post<{Body: UserCreated}>('/', (req, reply) => {
        if(!req.body.email ||!req.body.name || !req.body.password){
            reply.status(400).send({message: "Bad Request"})
            return
        }
        try {
            const data = userCase.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })

            return reply.send(data)

        } catch (error) {
            
        }
    })

    fastify.get('/', (request, reply) => {
        reply.send({ hello: 'world' });
    })
}