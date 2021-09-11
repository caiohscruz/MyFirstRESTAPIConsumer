// Setting express - begin
const express = require("express")
const app = express()
const path = require('path')
// Setting express - end

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

// route to index - begin
app.get("/", async (req, res) => {
    res.render("index.ejs")
})
// route to index - end

app.listen(process.env.PORT || 8081, () => {
    console.log("Rodando")
})