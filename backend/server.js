const express = require('express')
const cors = require("cors");
const authRoutes = require('./src/modules/auth/auth.routes')
const postRoutes = require('./src/modules/post/post.route');
const userRoutes = require('./src/modules/user/user.routes');
const inviteRoutes = require('./src/modules/invite/invite.routes');
const app = express()
const port = 4000

require('dotenv').config(); 
const connectDB = require('./src/config/config'); 

app.use(express.json())
app.use(cors());

connectDB();

// auth routes
app.use('/api/auth', authRoutes);

// user routes
app.use('/api/users', userRoutes);

// post routes
app.use('/api/posts', postRoutes);

// invite the user
app.use('/api/invite', inviteRoutes);


app.get('/', (req, res) => {
  res.send('MERN stack Blog website backend is running')
})

app.listen(port, () => {
  console.log(`MERN stack blog website backend listening on port ${port}`)
})
