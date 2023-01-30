import mongoose from 'mongoose'


const connectDB = async() => {
    try {
        const m = await  mongoose.connect(process.env.MONGO_URI)
            console.log(m.connection.readyState === 1 ? 'Mongoose connected!' : 'Moongoose failed to connect')
    } 
    catch (err) {
        console.log(err)
    }
}

export default connectDB