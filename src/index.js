import express from "express";
import {dirname, join} from  'path'
import { fileURLToPath } from "url";

import indexRoutes from "./routes/index.js";

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname, '/views')

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(join(__dirname, 'public')))

app.use(indexRoutes)

app.listen(3000)
console.log("Server listening on port:", 3000)