const app= require('./app');
require('dotenv').config('config.env');

const PORT=3000 || process.env.PORT;

const server=app.listen(PORT,()=>{
    console.log(`The app is listening on port ${PORT}`);
});