const mongoose= require("mongoose")
module.exports = ()=>{

mongoose.connect("mongodb+srv://nigelkhan578:PTugn2IV9p8qV0or@cluster0.m3npp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected");
}).catch((e) => {
    console.log("Error connecting to database", e);
});
}