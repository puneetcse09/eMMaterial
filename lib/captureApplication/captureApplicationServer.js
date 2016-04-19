var srchSmyResult=require("../../lib/captureApplication/data/schoolInfo.json");
var Utils=require('../../lib/common/Utils/Utils.js');



module.exports=function(app,Utils){
	
    
    app.post("/api/CaptureApplication/getCaptureApplication",function(req,res){
    	 var data=srchSmyResult;
    	 var params=req.body;
    	// console.log("param data in getCaptureApplication >> "+JSON.stringify(params));
    	 res.json(data);
    });
    
   
    
    
}

