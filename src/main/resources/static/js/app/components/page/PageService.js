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
			///data/'+writeUpId+'.json
			http.get('/data/'+writeUpId+'.html').then(function(response) {
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
