
var express = require('express');
var app = express();
var short;




app.get("/", (req, res)=>{
 res.sendFile(__dirname+"/views/index.html")
})

app.get("/error", (req, res)=>{
res.send({error:"Check the web address and make sure it's the correct format"})
})

app.get("/https://:id", (req,res)=>{
    short ="https://"+req.params.id
    res.send({short_url:"https://"+req.headers.host+"/new", original_url:short})

})

app.get("/http://:id", (req,res)=>{
    short ="http://"+req.params.id
    res.send({short_url:"http://"+req.headers.host+"/new", original_url:short})

})

app.get("/new", (req, res)=>{
res.redirect(short)
})
 
app.use((req, res)=>{
  res.redirect("https://url-shortener123.glitch.me/error");
})

 


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
