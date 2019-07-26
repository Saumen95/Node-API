// Load server using express

const express = require('express')
const app = express()

const morgan = require('morgan')  //using morgan to know response time and request we made
app.use(morgan('combined'))

app.get("/", (req, res) => {
    console.log('responding root rout')
    res.send("API testing")
})

// Creating routes

app.get("/Books", (req, res) => {
    var bookdata = /home/Minix / REST - API / books.json
    res.json(bookdata)
    res.send("Books route created")
})

app.listen(3000, () => {                 // default port:3000 defined
    console.log('server up and running')
})
