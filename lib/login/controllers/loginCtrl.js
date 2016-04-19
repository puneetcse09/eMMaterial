var UserClass=require("../../manageUsers/models/UserClass.js");
var user=new UserClass();
var Utils=require("../../common/Utils/Utils.js");
var appList=require("../../common/models/modules.js").getAppList();


module.exports=function(app){
    app.get("/login",function(req,res){
       res.render("login");
    });
    app.get("/getSidebarMenuList",function(req,res){
        var responseObj=new Utils.Response();
        responseObj.responseData=req.session.menuList
        res.json(responseObj);
    });
    
    app.post('/loginSubmit',function(req,res){
        var userName=req.body.username;
        var password=req.body.password;
        console.log("userName",userName);
        console.log("password",password);
               
        user.getUserDetailsByUserName(userName,req,res,function(req,res,result){
            //console.log("result login",result);
            if(result){
            	console.log("result ---------->",result);
                var userDet
                userDet=result;
                
                if(userDet!=null){
                    if(password=='password'){
//                        user.setUserDetails(userDet,pAddress,sAddress,sn,school,contact);
                        user.setUserDataInSession(req);
                        console.log("req.session.userDetails",req.session.userDetails);

                        var menuList=filterMenuItems(new appList());
                        req.session.menuList=menuList;
//                        req.session.menuList=menuList;
                        res.redirect("/index");
                    }else{
                        res.render("loginError");
                    }
                }else{
                    res.render("loginError");
                }
            }else{
                res.render("loginError");
            }
        });
    });
    app.get("/logout",function(req,res){
        req.session.userDetails=null;
        req.session.menuList=null;
        res.redirect("/login");
    });
}

function filterMenuItems(menuList){
    console.log("filterMenuItems",menuList);
    var newMenuList=[];
    for(var i= 0,loopLen=menuList.length;i<loopLen;i++){
        var menu=menuList[i];
        if(menu.hasOwnProperty('accessList')){
            if(menu.hasOwnProperty('childLinks')){
                var childlinksArr=[];
                for(var j= 0,loopLenJ=menu.childLinks.length;j<loopLenJ;j++){
                    var childMenu=menu.childLinks[j];
                    if(childMenu.hasOwnProperty('accessList')){
                            delete childMenu.accessList;
                            childlinksArr.push(childMenu);
                    }
                }
                if(childlinksArr.length>0){
                    delete menu.accessList;
                    menu.childLinks=childlinksArr;
                    newMenuList.push(menu);
                }
            }else if(menu.accessList.length>0 && menu.accessList[0]=="*"){
                delete menu.accessList;
                newMenuList.push(menu);
            }else{
                console.log("---",menu);
            }
        }
    }
    console.log("newMenuList",newMenuList);
    return newMenuList;
}


