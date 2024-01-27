import express from "express"
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


app.use(express.static(__dirname+ "/timelinechart_1st/"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/timelinechart_1st/timeline.html");
});

app.listen(port,() =>{
  console.log(`Server is running on port ${port}`);
});