var fs=require('fs');
var path=require('path');
module.exports.ensureAuthenticated=function (req, res, next) {
    if (req.session.userDetails) { return next(); }
    res.redirect('login');
}

//function csvToArray(S,F,R)
//{
//    F = F || ','; R = R || "\n";
//    var A=new Array(new Array(''));
//    var r=f=Q=0;
//    S=S.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
//    for(var C=0;C<S.length;C++)
//    {
//        if(S[C]==R && Q==0){r++;f=0;A[r]=new Array('');}
//        else if(S[C]==F && Q==0){f++;A[r][f]='';}
//        else if(S[C]=='"')
//        {
//            if(Q==0){Q=1;}
//            else
//            {
//                if(S[(C+1)]!='"'){Q=0;}
//                else{A[r][f]+='"';C++;}
//            }
//        }
//        else if(!(S[C]=="\r" && Q==0)){A[r][f]+=S[C];}
//    }
//    return A;
//}

//function convertDateToMMDDYY(date){
//    if(date)
//        return  (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
//    else
//        return "--";
//}
//function isFloat(n) {
//    return n === +n && n !== (n|0);
//}
//
//function isInteger(n) {
//    return n === +n && n === (n|0);
//}
//function emTrim(str){
//    str=str.replace(/\s+/g,'');
//    return str;
//}

//function isValidScientificNum(str){
//    if(!str && str!='0')return false;
//    var scientificNum = new RegExp(/^(([-+]?\d+)|([-+]?\d+,\d+)|([-+]?\d+,\d+.\d+)|([-+]?\d*.\d+)|([-+]?\d*.\d+[eE][-+]?\d+)|([-+]?\d*,\d+.\d+[eE][-+]?\d+))$/);
//    var match=scientificNum.exec(str);
//    return match!=null;
//}
//function isValidDDMMYY(str){
//    if(!str)return false;
//    var DDMMYYRegex = new RegExp(/(^(((0[1-9]|[12][0-9])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/);
//    var match=DDMMYYRegex.exec(str);
//    return match!=null;
//
//}
//function isvalidTime(str){
//    var timeRegex = new RegExp(/^([0|1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/);
//    var match=timeRegex.exec(str);
//    return match!=null;
//}
//function isValidDDMMYYWithOptionalTime(str){
//
//    if(isValidDDMMYY(str))
//    {
//        return true
//    }else{
//        var splitArr=str.split(" ");
//        if(splitArr.length==2){
//            console.log("splitArr",splitArr)
//            if(isValidDDMMYY(splitArr[0]) && isvalidTime(splitArr[1])){
//                return true;
//            }else{
//                return false;
//            }
//        }
//    }
//
//
//}

function createResponse(){
    function Response(){
        this.error=false;
        this.errorMsg="";
        this.successMsg="";
        this.responseData=undefined;
    }
    var obj=new Response();
    return obj;
}
function defaultErrorResponse(res,msg){
    var responseObj=createResponse();
    responseObj.error=true;
    responseObj.errorMsg = "OOPs... Something went wrong."+" ";
    if(msg){
        responseObj.errorMsg+=msg;
    }
    res.json(responseObj);
}
function ddmmyyyyStrToTimeStamp(dateValue){
    var dateValueArr=dateValue.split(" ");
    var returnDate=null;
    if(dateValueArr && dateValueArr.length>0){
        var dateValue1=dateValueArr[0];
        var dateValue1Arr=dateValue1.split("/");
        var day=parseInt(dateValue1Arr[0],10);
        var month=parseInt(dateValue1Arr[1],10);
        month--;
        var year=parseInt(dateValue1Arr[2],10);
        var hrs=0;
        var mins=0;
        var secs=0;
        if(dateValueArr.length>1 && dateValueArr[1].length>1){
            var timeArr=dateValueArr[1].split(":");
            if(timeArr.length>0){
                hrs=timeArr[0];
            }
            if(timeArr.length>1){
                mins=timeArr[1];
            }
            if(timeArr.length>2){
                secs=timeArr[2];
            }
        }
        if(day!=NaN && month!=NaN && year!=NaN){
            var returnDate=Date.UTC(year, month, day, hrs, mins, secs);
        }
    }
    return returnDate;
}
function resolveBoolean(value){
    return value==true?"Yes":"No";
}
function resolveSex(value){
    return value=="M"?"Male":"Female";
}
function resolveDataType(value,dataType){
    switch(dataType){
        case 'string': value=value.toString(); break;
        case 'number':
               var temp=value=parseInt(value,10);
               if(!isNaN(temp) && temp!=null)
                   value=temp;
                break;
        case 'date':
                var temp=ddmmyyyyStrToTimeStamp(value);
                if(!isNaN(temp))
                    value=temp;
                break;
        case 'boolean':
                if(value.toLowerCase()=='true'){
                    value=true;
                }else if(value.toLowerCase()=='false'){
                    value=false;
                }
                break;
        default:value=value.toString();

    }
    return value;
}
// function to encode file data to base64 encoded string
//function base64_encode(file) {
//    // read binary data
//    var bitmap = fs.readFileSync(file);
//    // convert binary data to base64 encoded string
//    return new Buffer(bitmap).toString('base64');
//}

// function to create file from base64 encoded string
//function base64_decode(base64str, file) {
//    // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
//    var bitmap = new Buffer(base64str, 'base64');
//    // write buffer to file
//    fs.writeFileSync(file, bitmap);
//    console.log('******** File created from base64 encoded string ********');
//}
//read uploaded csv
//function readUploadedCsv(req,res,callback){
//    var dataPath=req.files.hasOwnProperty("upload")?req.files["upload"].path:undefined;
//    var responseObj = new createResponse();
//    try{
//        if(!dataPath){
//            responseObj.error=true;
//            responseObj.errorMsg="Could not find the uploaded file.";
//            callback(responseObj);
//        }else{
//            fs.readFile(dataPath,function(err,csvData){
//                if(!err && csvData){
//                    var strData=csvData.toString();
//                    var jsonData=csvToArray(strData);
//                    if(jsonData && jsonData.length>0){
//                        console.log("jsonData",JSON.stringify(jsonData));
//                        fs.writeFileSync("temp.js",JSON.stringify(jsonData));
//                        responseObj.responseData=jsonData;
//                        callback(responseObj);
//                    }else{
//                        responseObj.error=true;
//                        responseObj.errorMsg="Uploaded file is blank.";
//                        callback(responseObj);
//                    }
//
//                }else{
//                    responseObj.error=true;
//                    responseObj.errorMsg="Could not find the uploaded file.";
//                    callback(responseObj);
//                }
//            })
//        }
//    }catch(e){
//        console.log("e util",e);
//        responseObj.error=true;
//        responseObj.errorMsg="Error while processing file.";
//        callback(responseObj);
//    }
//
//
//}

//function searchUser(res,searchObj,schoolId,classObj){
//    console.log("searchUser",searchObj,schoolId);
//    var query;
//    var responseObj=new createResponse();
//    if(searchObj.searchText!==''){
//        var searchText=searchObj.searchText;
//        var searchTextArr=searchText.split(",");
//
//        /*if((classObj && (classObj.name || classObj.section)) || searchText.indexOf('/')>-1){
//            query= 'Match (n:User) -[r1:STUDENT_OF]->(c:Class)-[r2:CLASS_OF]->(s:School{schoolId:"'+schoolId+'"})  '
//        }else{
//            query='Match (s:School{schoolId:"'+schoolId+'"})<-[:USER_OF]-(n:User) ';
//        }*/
//        query='Match (s:School{schoolId:"'+schoolId+'"})<-[:USER_OF]-(n:User) ';
//
//        //searchText?query+=' WHERE ':'';
//        var tempFullQuery=[];
//        for(var i= 0,len=searchTextArr.length;i<len;i++){
//            var text=searchTextArr[i];
//            var tempText=text.toLowerCase();
//            var tempQueryArr=[];
//            if(text && text.indexOf('/')==-1){
//                //query+="("
//                if(tempText=="m" || tempText=="male"){tempQueryArr.push('n.sex ="M" ')};
//                if(tempText=="f" || tempText=="female"){tempQueryArr.push('n.sex ="F" ')};
//                if(tempText=="student"){tempQueryArr.push('n.userType ="'+schoolId+'||1" ')}
//                if(tempText=="teacher"){tempQueryArr.push('n.userType ="'+schoolId+'||2" ')}
//
//                tempQueryArr.push('n.regID =~ ".*'+text+'.*" ');
//                tempQueryArr.push('n.lastName =~ ".*'+text+'.*" ');
//                tempQueryArr.push('n.firstName =~ ".*'+text+'.*" ');
//                tempQueryArr.push('n.middleName =~ ".*'+text+'.*"');
//                tempQueryArr.push('n.userName =~ ".*'+text+'.*"');
//                if(tempQueryArr.length>0){
//                    tempFullQuery.push(" ( "+tempQueryArr.join(' OR ')+" ) ");
//                }
//            }
//        }
//        if(tempFullQuery && tempFullQuery.length>0){
//            query+=' WHERE '+tempFullQuery.join(" AND ");
//        }
//
//        var tempClassQueryArr=[];
//        for(var j= 0,lenJ=searchTextArr.length;j<lenJ;j++){
//            var text=searchTextArr[j];
//            var tempText=text.toLowerCase();
//            if(text && text.indexOf('/')>-1){
//                var tempClass=text.split('/');
//                var className=tempClass.length>0?tempClass[0]:'';
//                var classSection=tempClass.length>1?tempClass[1]:'';
//                className?tempClassQueryArr.push('c.name ="'+className+'"  '):'';
//                classSection?tempClassQueryArr.push('c.section ="'+classSection+'" '):'';
//
//            }
//        }
//        if(classObj && classObj.hasOwnProperty('name') && classObj.name && classObj.hasOwnProperty('section') && classObj.section){
//            query+=' WITH n MATCH  (n:User)-[r1:STUDENT_OF]- (c:Class) ';
//            classObj && classObj.name?tempClassQueryArr.push('c.name ="'+classObj.name+'" '):'';
//            classObj && classObj.section?tempClassQueryArr.push('c.section ="'+classObj.section+'" '):'';
//            query+=' where '+ tempClassQueryArr.join(" AND ");
//        }else if(tempClassQueryArr.length>0){
//            query+=' MATCH  (n:User)-[r1:STUDENT_OF]- (c:Class) ';
//            query+=' where '+ tempClassQueryArr.join(" OR ");
//        }else{
//            query+=' OPTIONAL MATCH  (n:User)-[r1:STUDENT_OF]- (c:Class) ';
//        }
//        query+=' RETURN n,r1,c order by r1.classRollNum ASC,n.firstName';
//
//        /*if((classObj && (classObj.name || classObj.section)) || searchText.indexOf('/')>-1){
//            query+=',r1,c order by r1.classRollNum ASC ';
//        }else{
//            query+=',s order by n.userName ASC ';
//        }*/
//        query+=' LIMIT 100 ';
//
//    }else{
//
//        var query='MATCH (s:School) <-[r1:USER_OF]-(u:User) where s.schoolId="'+schoolId+'" AND u.softDelete=false ';
//        if(searchObj.hasOwnProperty('userName') && searchObj.userName){
//            query+=' AND u.userName="'+searchObj.userName+'" '
//        }
//
//
//        if(searchObj.hasOwnProperty('firstName') && searchObj.firstName){
//            query+=' AND u.firstName="'+searchObj.firstName+'" '
//        }
//        if(searchObj.hasOwnProperty('middleName') && searchObj.middleName){
//            query+=' AND u.middleName="'+searchObj.middleName+'" '
//        }
//        if(searchObj.hasOwnProperty('lastName') && searchObj.lastName){
//            query+=' AND u.lastName="'+searchObj.lastName+'" '
//        }
//        if(searchObj.hasOwnProperty('userType') && searchObj.userType){
//            query+=' AND u.userType="'+searchObj.userType+'" '
//        }
//        if(searchObj.hasOwnProperty('regID') && searchObj.regID){
//            query+=' AND u.regID="'+searchObj.regID+'" '
//        }
//        query+=' WITH u,s ';
//        if(searchObj.hasOwnProperty('class') && searchObj.class){
//
//            var classObj=JSON.parse(searchObj.class);
//            query+=' MATCH (c:Class) <-[r2:STUDENT_OF]-( u ) WHERE c.name="'+classObj.name+'" AND c.section ="'+classObj.section+'" '
//
//        }
//
//        if((searchObj.hasOwnProperty('emailPrimary') && searchObj.emailPrimary)||
//            (searchObj.hasOwnProperty('phonePrimary') && searchObj.phonePrimary)){
//            query+=' MATCH (ct:Contact) -[r3:CONTACT_OF]-> ( u ) WHERE';
//        }
//        if(searchObj.hasOwnProperty('emailPrimary') && searchObj.emailPrimary){
//            query+='  ct.emailPrimary="'+searchObj.emailPrimary+'" '
//        }
//        if(searchObj.hasOwnProperty('phonePrimary') && searchObj.phonePrimary){
//            query+='  ct.phonePrimary="'+searchObj.phonePrimary+'" '
//        }
//
//        query+=' RETURN u ';
//
//        if(searchObj.hasOwnProperty('class') && searchObj.class){
//            query+=',r2,c order by r2.classRollNum ASC ';
//        }else{
//            query+=',s order by u.userName ASC ';
//        }
//        query+=' LIMIT 100 ';
//    }
//    console.log("query",query);
//    db.cypherQuery(query,function(err,reply){
//        console.log("searchUser",query,err);
//        if(!err){
//            responseObj.responseData=reply;
//            res.json(responseObj);
//        }else{
//            responseObj.error=true;
//            responseObj.errorMsg="No Data found.";
//            res.json(responseObj);
//        }
//    });
//
//}
//function querifyJSON(obj){
//    var str='{';
//    var arr=[];
//    for(var key in obj){
//        var tempStr=key+":";
//        typeof obj[key]=='string'?tempStr+='"'+obj[key]+'"':tempStr+=obj[key];
//        arr.push(tempStr);
//    }
//    str+=arr.join(',');
//    str+='}';
//    return str;
//}
//function defaultQueryResonse(queryObj,res,callback){
//    try{
//        if(!queryObj.error){
//            query=queryObj.responseData;
//
//            var responseObj= createResponse();
//            db.cypherQuery(query,function(err,reply){
//                if(!err && reply && reply.data){
//                    if(callback && typeof callback=='function') {
//                        callback(res,reply.data)
//                    }else{
//                        responseObj.responseData=reply.data;
//                        res.json(responseObj);
//                    }
//                }else{
//                    responseObj.error=true;
//                    res.json(responseObj);
//                }
//            });
//        }else{
//            res.json(queryObj);
//        }
//    }catch(e){
//        defaultErrorResponse(res,e);
//    }
//
//}
//function camelCaseToWord(input) {
//    // Preceed Uppercase (or sets of) with commas then remove any leading comma
//    var delimited = input.replace(/([A-Z]+)/g, ",$1").replace(/^,/, "");
//    // Split the string on commas and return the array
//    var str=delimited.split(",").join(" ");
//    str=str.charAt(0).toUpperCase()+str.substr(1,str.length);
//    return str;
//};
module.exports.resolveBoolean = resolveBoolean;
module.exports.resolveSex = resolveSex;
module.exports.resolveDataType = resolveDataType;
//module.exports.isFloat=isFloat;
//module.exports.isInteger=isInteger;
//module.exports.csvToArray = csvToArray;
//module.exports.convertDateToMMDDYY = convertDateToMMDDYY;
//module.exports.emTrim = emTrim;
//module.exports.isValidScientificNum = isValidScientificNum;
//module.exports.isValidDDMMYY = isValidDDMMYY;
//module.exports.isValidDDMMYYWithOptionalTime = isValidDDMMYYWithOptionalTime;
module.exports.Response = createResponse;
module.exports.defaultErrorMsg = "OOPs... Something went wrong.";
module.exports.defaultErrorResponse = defaultErrorResponse;
module.exports.ddmmyyyyStrToTimeStamp = ddmmyyyyStrToTimeStamp;
//module.exports.getDBInstance = getDBInstance;
//module.exports.base64_encode = base64_encode;
//module.exports.base64_decode = base64_decode;
//module.exports.readUploadedCsv = readUploadedCsv;
//module.exports.searchUser = searchUser;
//module.exports.querifyJSON = querifyJSON;
//module.exports.defaultQueryResonse = defaultQueryResonse;
//module.exports.camelCaseToWord = camelCaseToWord;

