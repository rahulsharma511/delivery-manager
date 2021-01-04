module.exports={showInventory,addProduct};
const db=require(__dirname+"/connection.js");
result=[];
function showInventory(callback){
sql="select * from products"
db().query(sql,function(err,rs,feilds){
  callback(rs);
});
};

function addProduct(product_name1, company_name1, primary_unit_name1, secondary_unit_name1, secondary_unit1, ternary_unit_name1, ternary_unit1,buy_price1,sell_price1,gst1){
  q=product_name1;
  w=company_name1;
  e=primary_unit_name1;
  r=secondary_unit_name1;
  t=secondary_unit1;
  y=ternary_unit_name1;
  u=ternary_unit1;
  i=buy_price1;
  o=sell_price1;
  p=gst1;
  console.log(q,w,e,r,t,y,u,i,o,p);
  sql="insert into products (product_name, company_name, primary_unit_name, secondary_unit_name, secondary_unit, ternary_unit_name, ternary_unit,buy_price,sell_price,gst) values (?,?,?,?,?,?,?,?,?,?)";

  db().query(sql,[product_name1, company_name1, primary_unit_name1, secondary_unit_name1, secondary_unit1, ternary_unit_name1, ternary_unit1,buy_price1,sell_price1,gst1],function(err,res,felds){
    if(err){
      throw err;
      return;
    };
    console.log("record created successfully");

  });
};
//
