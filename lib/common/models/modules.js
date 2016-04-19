module.exports.getAppList=function(){
    return initAppList;
};

function initAppList(){
    var appList=[      
        {
            'state': 'testLink',
            'name':'Test ',
            'collapse':true,
            'icon':"pencilSquare",
//            'abstract':true,
//            'accessList':["999"]
            'accessList':["*"]
        },
        {
            'state': 'userProfile',
            'name':'Home ',
            'collapse':true,
            'icon':"users",
//            'abstract':true,
//            'accessList':["999"]
            'accessList':["*"]
        }
    ];
    return appList;
}