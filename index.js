const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send(req.url)
//     res.send("wtf")
})
app.listen(process.env.PORT || 3000)
