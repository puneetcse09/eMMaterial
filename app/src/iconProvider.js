(function(){

  angular
       .module('starterApp')  
		  .config(
				  function($mdThemingProvider, $mdIconProvider, $stateProvider, $urlRouterProvider) {
					  
					  $mdIconProvider.iconSet("avatar", './assets/svg/avatars.svg', 128);
		        
					  $mdIconProvider
                      .defaultIconSet("./assets/svg/avatars.svg", 128)
                      .icon("menu"           , "./assets/svg/menu.svg"                              , 24)
                      .icon("menu_white"     , "./assets/icons/ic_view_headline_white_24px.svg"     , 24)
                      .icon("close_black"    , "./assets/icons/ic_close_black_24px.svg"             , 24)
                      .icon("close_white"    , "./assets/icons/ic_close_white_24px.svg"             , 24)
                      .icon("person_black"   , "./assets/icons/ic_person_black_24px.svg"            , 24)
                      .icon("person_white"   , "./assets/icons/ic_person_white_24px.svg"            , 24)
                      .icon("settings_black" , "./assets/icons/ic_settings_black_24px.svg"          , 24)
                      .icon("settings_white" , "./assets/icons/ic_settings_white_24px.svg"          , 24)
                      .icon("contacts_black" , "./assets/icons/ic_contacts_black_24px.svg"          , 24)
                      .icon("contacts_white" , "./assets/icons/ic_contacts_white_24px.svg"          , 24)
                      .icon("school_black"   , "./assets/icons/ic_account_balance_black_24px.svg"        , 24)
                      .icon("school_white"   , "./assets/icons/ic_account_balance_white_24px.svg"        , 24)
                      .icon("share"          , "./assets/svg/share.svg"       , 24)
                      .icon("google_plus"    , "./assets/svg/google_plus.svg" , 512)
                      .icon("hangouts"       , "./assets/svg/hangouts.svg"    , 512)
                      .icon("twitter"        , "./assets/svg/twitter.svg"     , 512)
                      .icon("phone"          , "./assets/svg/phone.svg"       , 512);

					  
//                      $mdThemingProvider.theme('default')
//                          .primaryPalette('cyan')
//                          .accentPalette('red');
//                    red, pink, purple, deep-purple, indigo, blue, light-blue, 
//                    cyan, teal, green, light-green, lime, yellow, amber, orange, 
//                    deep-orange, brown, grey, blue-grey
		})
})();