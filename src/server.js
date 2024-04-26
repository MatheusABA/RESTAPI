require('dotenv').config();
import app from './app';



app.listen(process.env.APP_PORT,() => {
	console.log(`Listening at port ${process.env.APP_PORT}`)
})
