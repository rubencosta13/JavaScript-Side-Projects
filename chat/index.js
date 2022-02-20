import express from 'express'
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()


app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("main")
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(4000)