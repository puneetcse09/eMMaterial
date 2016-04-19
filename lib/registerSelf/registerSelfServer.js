var defaultMenuList=require("../../lib/navbar/data/defaultMenuList.json");
var Utils=require('../../lib/common/Utils/Utils.js');

module.exports=function(app,Utils){
	
    app.post('/api/registerUser',function(req,res){
        //var firstName=req.body.userObj.basicDetails.firstName;
        //var dob=req.body.userObj.basicDetails.DOB;
        console.log("/api/registerUser >>>>>"+JSON.stringify(req.body));
        //console.log("firstName",firstName);
        //console.log("DOB",dob);
        
       // res.json(userObj);
        //user.getUserDetailsByUserName(userName,req,res,function(req,res,result){});
    });
    
}

