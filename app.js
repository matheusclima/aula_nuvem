const express = require('express')

const app = express()
const PORT = 3030

const usersRoute = require('./routes/Users.route')
app.use(usersRoute)

app.get('/', (req, res) => {
    return res.send('<h1>Server online</h1>')
})

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
})