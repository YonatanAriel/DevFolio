import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected successfully to MongoDB "),
      mongoose.connection.readyState;
  } catch (err) {
    console.log("Mongo Error: " + err.message);
  }
};
export default connect;
