//imports
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')


// configuring nunjucs
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// configuring statics files in a root folde 
server.use(express.static("public"))

// receive data from req.body
server.use(express.urlencoded({extended: true}));

// routes
server.get("/", pageLanding)

server.get("/study", pageStudy)

server.get("/give-classes", pageGiveClasses)

server.post("/save-classes", saveClasses)

//star and port in the server
server.listen(5500);
