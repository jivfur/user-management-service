// src/app.js
const createServer = require('./config/server');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const app = createServer();

connectDB();

app.use('/api/users', userRoutes);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});