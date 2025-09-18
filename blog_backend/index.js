import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Blog Server Running..................")
})


const port = 4000
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
});


