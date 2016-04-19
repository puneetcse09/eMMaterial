var srchSmyResult=require("../../lib/schoolDetails/data/schoolInfo.json");
var Utils=require('../../lib/common/Utils/Utils.js');



module.exports=function(app,Utils){
	
    
    
    app.post("/api/SchoolDetails/getSchoolDetails",function(req,res){
    	 var data=srchSmyResult;
    	 var params=req.body;
    	 console.log("param data in getschooldetails >> "+JSON.stringify(params));
    	 res.json(data);
    });
    
   
    
    
}

