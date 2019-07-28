// Load server using express

const express = require('express')
const app = express()
app.use(express.static('./public'))

const morgan = require('morgan')  //using morgan to know response time and request we made
app.use(morgan('combined'))


const mysql = require('mysql')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended = false}))


// Creating MySQL route

app.get("/user/: id", (req, res) => {
    console.log("Fetching Database" + req.params.id)

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'mysqlsampledatabase',
    })

    const customernumber = req.params.customerNumber
    const queryString = "FROM customers SELECT customerNumber WHERE city = ?"
    connection.query(queryString, [customernumber], (err, rows, fields) => {

        if (err) {
            console.log("Failed to fetch" + err)
            res.end()
            return
        }
        console.log("Fetched data from SQL")
        res.json(rows)
    })
})

// Creating root

app.get("/", (req, res) => {
    console.log('responding root route')
    res.send("API testing")
})

// Creating User route

app.get("/Books", (req, res) => {
    var bookdata = /home/Minix / REST - API / books.json
    req.json(bookdata)
    res.send("Books route created")
})

// Serving html form for searching books

app.post('\my-handling-form-page', (req, res) => {
    console.log('form is created')
    console.log('User Name' + req.body.user_name)
    console.log('user_email' + req.body.user_mail)
    Console.log('book_name' + req.json.title + req.json.isbn)
    res.end()
})

app.listen(3000, () => {                 // default port:3000 defined
    console.log('server up and running')
})
