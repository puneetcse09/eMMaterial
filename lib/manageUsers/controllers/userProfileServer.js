var testData=require("../../common/models/TestDataJSON.js");

module.exports=function(app,Utils){
    app.get("/manage-users/user-profile",function(req,res){
        console.log("Inside /manage-users/user-profile");
        res.redirect("/index");

    });
    app.post("/manage-users/setUserInSession",function(req,res){
        var user=req.body;
        req.session.userDetails=user;
        res.json({});
    });
    app.get("/manage-users/getUserprofileForUserName",Utils.ensureAuthenticated,function(req,res){
        console.log("/manage-users/getUserprofileForUserName");

        var userDetails=req.session.userDetails;
//        var clonedUserDetails=Utils.clone(userDetails);

//        delete clonedUserDetails.basicDetails.accessList;
//        console.log("userDetails ----->",userDetails);
        res.json(userDetails);
    });
    
    app.get("/manage-users/getUserprofileForUserName",Utils.ensureAuthenticated,function(req,res){
        console.log("/manage-users/getUserprofileForUserName");

        var userDetails=req.session.userDetails;
        var clonedUserDetails=Utils.clone(userDetails);

        delete clonedUserDetails.basicDetails.accessList;
//        console.log("userDetails ----->",userDetails);
        res.json(userDetails);
    });
    
    app.get("/manage-users/getTestData",Utils.ensureAuthenticated,function(req,res){
    	console.log("/manage-users/getTestData");
            res.json(testData);
    });

   
    
}

