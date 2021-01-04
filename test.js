const express = require("express")
const bodyparser=require("body-parser")
const dataparse= require(__dirname+"/dataParse.js")
const ejs =require("ejs")

const app=express()
app.set("view engine","ejs")
app.use(bodyparser.urlencoded({extended:true}))
app.get('/',function(req,res){
  res.send("<h2>hello</h2>")
  dataparse.showInventory(function(data){
    console.log(data)
  })
})

app.get('/insert',function(req,res){
  res.sendFile(__dirname+"/insert.html")
})
app.post("/insert",function(req,res){
  dataparse.addProduct(req.body.product_name, req.body.company_name, req.body.primary_unit_name, req.body.secondary_unit_name, req.body.secondary_unit, req.body.ternary_unit_name, req.body.ternary_unit, req.body.buy_price, req.body.sell_price, req.body.gst)
})
app.get("/display",function(req,res){
  dataparse.showInventory(function(result){
      res.render("display",{result:result})
  })
})

app.listen(3000,function(){
  console.log("successful connection on port 3000")
})
