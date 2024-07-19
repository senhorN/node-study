import { fastify } from "fastify";
import { dbMemory } from "./dbmemory.js";
import { title } from "node:process";

const server = fastify()
//instancia
const database = new dbMemory()


//POST
server.post('/videosPost', (request, reply) => {  
    //Request body 
    const {Title, Description, Duration} = request.body

    database.create({
        
        title: Title,
        description: Description,
        duration: Duration,
    })

    // console.log(database.create())
    return reply.status(201).send()
})

//GET
server.get('/videosGet', () => {
    
    const videos = database.list()

    return videos
    // return 'base teste niick'
})

server.put('/videoPut/:id', () => {
    
    return 'teste teste'
})


server.delete('/videoDelete/:id', () => {
    
    return 'teste teste'
})


//CRUD (create, read, update, delete)




//get -> busca informação 
//post -> criação 
//put -> alteração 
/// delete -> apagar

//patch -> alterar uma informação especifica
//

server.listen({
    port: 3333,
})
// import {createServer} from 'node:http'

//     const server = createServer((request, response) => {
        
//         response.write('senhorN')
        
//         return response.end()
//     })


// server.listen(5000)




//42:59