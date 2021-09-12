// Setting express - begin
const express = require("express")
const app = express()
const path = require('path')
// Setting express - end

require('dotenv/config')
var restAPI = process.env.RESTAPI

// Setting View Engine - begin
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
// Setting View Engine - end

// Setting public to static content - begin
app.use(express.static('public'))
// Setting public to static content - end

// Settings to use forms - begin
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
// Settings to use forms - end

// route to login page - begin
app.get("/", async (req, res) => {
    res.render("login.ejs", {
        restAPI: restAPI
    })
})
// route to login page - end

// route to sigup page - begin
app.get("/signup", async (req, res) => {
    res.render("signup.ejs", {
        restAPI: restAPI
    })
})
// route to signup page - end

// route to homepage - begin
app.get("/home", async (req, res) => {
    res.render("index.ejs", {
        restAPI: restAPI
    })
})
// route to homepage - end

// route to create - begin
app.get("/create", async (req, res) => {
    res.render("create.ejs", {
        restAPI: restAPI
    })
})
// route to create - end

// route to update - begin
app.get("/update/:id", async (req, res) => {
    var id = req.params.id
    res.render("update.ejs", {
        id: id,
        restAPI: restAPI
    })
})
// route to update - end

app.listen(process.env.PORT || 8081, () => {
    console.log("Rodando")
})