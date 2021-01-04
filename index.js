const express = require('express')
const app = express()
const bodyparser=require('body-parser')
const db =require(__dirname + "/connection.js")
const dataparse=require(__dirname+"/dateparse.js")
const port = 3000


app.use(express.static("public"))
app.use(bodyparser.urlencoded({extended:true}))

db().query("select * from users;", function(errors,results,feilds){
console.log(results)
})

app.get('/', function(req,res){
  console.log(req,res)
  res.sendFile(__dirname+'/index.html')
})
app.post("/", function(req,res){
  var user = req.body.username
  var pass = req.body.password
  db.conn().query("select * from users where username=? and password=?;",[user,pass], function(errors,results,feilds){
    if(results.length==0)
      res.send("login unsuccessful")
    else
      console.log("login successful")
      return res.redirect("/home")

  })
})

app.get("/home",function(req,res){
  res.sendFile(__dirname+"/home.html")
})

app.get('/insert',function(req,res){
  res.sendFile(__dirname+"/insert.html")
})
app.post("/insert",function(req,res){
  dataparse.addProduct()

})





app.listen(port, function() {
  console.log(`server started on localhost:${port}`)
})
