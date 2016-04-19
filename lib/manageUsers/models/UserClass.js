var Utils=require("../../common/Utils/Utils.js");

module.exports=function (){
    this.basicDetails={
        _id:'', 
        salutation:"",
        userName:"",
        firstName:"",
        middleName:"",
        lastName:"",
        userType:'',
        emailId:'',
        DOB:'',
        sex:"",
        updatedAt:'',
        createdAt:'',        
        createdBy:"",
        updatedBy:"",
        accessList:"",
    }
    this.getUserDetailsByUserName=function(userName,req,res,callback){
    	this.basicDetails.userName=userName;
    	var result=this.basicDetails;
        if(result){
            callback(req,res,result);
        }else if(err && res){
            Utils.defaultErrorResponse(res,"Failed to find User Details for "+userName+".");
        }
    }
    this.setUserDetails=function(basicDetails){
        this.basicDetails=basicDetails;
    }
    this.setUserDataInSession=function(req){
        req.session.userDetails=this;
            }    
}


