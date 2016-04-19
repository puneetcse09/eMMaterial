/**
 * 
 */
function schoolClass() {
	this.basicDetails = {
//		name : "",
		orgName:'',
		orgType:2,
		orgShortName : "",
		schoolId : "",
		description : "",
		orgHeadUserName : "",
		schoolBoard : "",
		softDelete : false,
		orgUrl : "",
		smsGateway:"",
		establishDate:"",
		createdBy:"", //username
		createdAt:(new Date()).getTime(),
        updatedBy:"", //username
        updatedAt:"",
        startOrgSeq:1,
        nextOrgSeq:1,
        orgRegID:0,
        orgRegNum:'',
        purchaseSts:'',
		_id : ''
	};
	this.imageData = {
		imagePath : '',
		createdBy:"", //username
		createdAt:(new Date()).getTime(),
        updatedBy:"", //username
        updatedAt:"",
		_id : ''
	};
	this.primaryAddress = {
		street2 : '',
		pincode : '',
		street1 : '',
		state : '',
		district : '',
		city : '',
		country : '',
		landmark : '',
		addressPlace:'',
		createdBy:"", //username
		createdAt:(new Date()).getTime(),
        updatedBy:"", //username
        updatedAt:"",
		_id : ''
	};
	this.secondaryAddress = {
		street2 : '',
		pincode : '',
		street1 : '',
		state : '',
		district : '',
		city : '',
		country : '',
		landmark : '',
		addressPlace:'',
		createdBy:"", //username
		createdAt:(new Date()).getTime(),
        updatedBy:"", //username
        updatedAt:"",
		_id : ''
	};
	this.contact = {
		emailPrimary : '',
		emailSecondary : '',
		phonePrimary : '',
		phoneSecondary : '',
		createdBy:"", //username
		createdAt:(new Date()).getTime(),
        updatedBy:"", //username
        updatedAt:"",
		_id : ''
	};
    this.socialNetwork={
        skypeId: '',
        facebookId: '',
        twitterUrl: '',
        skypeUrl: '',
        twitterId: '',
        facebookScreenName: '',
        facebookUrl: '',
        createdBy:"", //username
		createdAt:(new Date()).getTime(),
        updatedBy:"", //username
        updatedAt:"",
        _id: ''
    };
//	this.schoolHead = {
//	school head details (user)	
//	};
	this.setSchoolDetails = function(basicDetails, primaryAddress,
			secondaryAddress, contact, socialNetwork, imageData) {
		this.basicDetails = basicDetails;
		this.primaryAddress = primaryAddress;
		this.secondaryAddress = secondaryAddress;
		this.contact = contact;
        this.socialNetwork = socialNetwork;
        this.imageData=imageData;
	}
}

module.exports=schoolClass;
