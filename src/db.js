import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL,
// { useNewUrlParser: true, 
// useUnifiedTopology:true, 
// useFindAndModify:false
);

const db=mongoose.connection;

const handleOpen=()=>console.log("✅Connected to DB");
const handelError=(error)=>console.log("❌DB error",error)

db.on("error",handelError);
db.once("open",handleOpen);