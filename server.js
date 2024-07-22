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

//PUT
server.put('/videoPut/:id', (request, reply) => {
    
    const videoID = request.params.id 
    //Request body 
    const {Title, Description, Duration} = request.body

    database.update(videoID, {
        Title,
        Description,
        Duration
    })

    return reply.status(204).send()
})

//DELETE
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