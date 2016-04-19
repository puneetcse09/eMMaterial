var defaultMenuList=require("../../lib/navbar/data/defaultMenuList.json");
var Utils=require('../../lib/common/Utils/Utils.js');

module.exports=function(app,Utils){
	
    app.get("/api/navbar/getMenuList",function(req,res){
        console.log("/api/navbar/getMenuList");
        res.json(defaultMenuList);
    });
 
   
    
    
}

