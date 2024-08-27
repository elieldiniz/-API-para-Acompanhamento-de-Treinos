import Fastify from 'fastify'
import { userRouters } from './routers/user.routers'


const fastify = Fastify({
    logger: true
})


fastify.register(userRouters,{
    prefix: '/users'
})

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) throw err
  })