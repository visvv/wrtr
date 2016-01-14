/**
 * 
 */
PageController = function(scope, pageService,sce) {
	this.scope = scope;
	this.sce = sce;
	this.scope.data = 'This is the controller data';
	this.scope.pageController = this;
	this.scope.writeupList = [];
	this.scope.displayList = true;
	this.service = pageService;
	var self = this;
	angular.element(document).ready(function(){
		var writeUpId = getParameterByName('a');
		if(writeUpId){
			self.showWriteUp(writeUpId);
		}else{
			self.showList();
		}
		
	});
	this.scope.writeUp = {
			title : 'Loading...',
			content : 'Loading...'
	};
};

PageController.prototype.showList = function() {
	console.log("print the data !!!!!");
	this.scope.displayList = true; 
	var self = this;
	window.history.pushState("","writeUpId","/index.html");
	this.service.getBlogList(function(data) {
		console.log(data);
		if (data) {
			self.scope.writeupList = data.writeUpList;
		}
	});
};
PageController.prototype.showWriteUp = function(writeUpId){
	this.scope.displayList = false;
	var self = this;
	this.service.getWriteUp(stringZip(writeUpId), function(data){
		console.log(data);
		if(data){
			self.scope.writeUp.title = data.writeUp.title;
			self.scope.writeUp.content = self.sce.getTrustedHtml(data.writeUp.content);
		}
		window.history.pushState("","writeUpId","/index.html?a=" + stringZip(writeUpId));
	});
	return false;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function stringZip(str){
	var re = new RegExp(' ', 'g');
	return str.toLocaleLowerCase().replace(re,'_').trim();
}