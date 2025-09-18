import express from 'express'
import cors from 'cors'

import "./mongoose.js"

import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'
import commentRoutes from './routes/commentRoutes.js'

const app = express()
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Blog Server Running..................")
})

app.use('/users', userRoutes)       // http://localhost:4000/users
app.use('/posts', postRoutes)       // http://localhost:4000/posts
app.use('/comments', commentRoutes)  // http://localhost:4000/comments

const port = 4000
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
});


