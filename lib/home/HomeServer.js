var homeSchoolList=require("../../lib/home/data/homeSchoolData.json");
var stateCityList=require("../../lib/home/data/stateCityData.json");
var srchSmyResult=require("../../lib/home/data/searchSummaryResult.json");
var landingData=require("../../lib/home/data/homeLandingData.json");
var Utils=require('../../lib/common/Utils/Utils.js');

module.exports=function(app,Utils){
	
    app.get("/api/getSchoolDataForSearch",function(req,res){
        console.log("/api/getSchoolDataForSearch");
        var cityData=stateCityList;
        res.json(cityData);
    });
    
    app.post("/api/getSchoolName",function(req,res){
    	 var data=homeSchoolList;
    	 res.json(data);
    });
    
    app.post("/api/getHomeSearchSummary",function(req,res){
    	var params = req.body;
    	console.log("/api/getHomeSearchSummary : params : "+JSON.stringify(params));
    	res.json(srchSmyResult);
   });
    
    app.get("/api/landing-data",function(req,res){
    	res.json(landingData);
   });
   
    app.get("/api/schools/list",function(req,res){
    	res.json(homeSchoolList);
   });
   
    
    
}

