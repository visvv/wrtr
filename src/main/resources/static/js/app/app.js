/**
 * 
 */
var stringZipFilter = function(str){
	return "ZZ"+str+"ZZ";
};
var app = angular.module('Wrtr',[]);
app.config(function($sceProvider) {
	// Completely disable SCE. For demonstration purposes only!
	// Do not use in new projects.
	$sceProvider.enabled(false);
});
app.factory('PageService',['$http', PageService]);
app.controller('PageController', ['$scope','PageService','$sce',PageController]);
app.filter('stringZipFilter', function(){
	return stringZipFilter;
});

window.onpopstate = function(e){
    	window.location.reload();
};

