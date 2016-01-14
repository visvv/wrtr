/**
 * 
 */
PageService = function(http) {
	console.log('PageService init....')
	return {
		getBlogList : function(successCallback) {
			http.get('/data/list.json').then(function(response) {
				if (response) {
					successCallback(response.data);
				}
			}, function() {
				console.error('Error details');
			});
			console.log('Loading content...');
		},
		getWriteUp : function(writeUpId, successCallback) {
			http.get('/data/'+writeUpId+'.json').then(function(response) {
				if (response) {
					successCallback(response.data);
				}
			}, function() {
				console.error('Error details');
			});
			console.log('Loading content...', writeUpId);
		}
	}
}
