const express = require('express')
const userRoutes = require('./src/modules/auth/auth.routes')
const postRoutes = require('./src/modules/post/post.route');
const app = express()
const port = 4000

require('dotenv').config(); 
const connectDB = require('./src/config/config'); 

app.use(express.json())

connectDB();

// user routes
app.use('/api/users', userRoutes)

// post routes
app.use('/api/posts', postRoutes);


app.get('/', (req, res) => {
  res.send('MERN stack Blog website backend is running')
})

app.listen(port, () => {
  console.log(`MERN stack blog website backend listening on port ${port}`)
})
