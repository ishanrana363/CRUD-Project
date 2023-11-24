const app = require("./app")
const connectDB = require("./src/database/databaseConnect")
const port = 5052;

app.listen(port,async ()=>{
    console.log(`Server run successfully at http://localhost:${port} `)
    await connectDB()
})