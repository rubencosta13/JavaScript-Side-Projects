import express from 'express'
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const chatMessageContent = {}

app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("main")
})

app.post('/', (req, res) => {
    chatMessageContent[req.body.name] = req.body.text
    console.log(chatMessageContent)
    res.send(chatMessageContent[req.body.name])
})

app.listen(4000)