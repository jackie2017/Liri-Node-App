console.log('this is loaded');

exports.twitterKeys = {
	consumer_key: '<yp6dkRljKO0RrdrHvE6fTPobV>',
	consumer_secret: '<giVjj3dK958NSUUNzsfCLscMHf6NGb32C4xY2zxpOENShKbcA3>',
	access_token_key: '<1935719035-13uOW0SLnsKhVAZI1QUk1iFaUWDJwb0gw65Edns>',
	access_token_secret: '<GQrWByVcpW4n1xk6SFc6xe3W3HsrIqyoKlnyCdlnW2Wdo>',
	


}

var params = {screen_name: 'SCREENNAME'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	for (var i = 0; i < tweets.length; i++) {
	  		console.log('%j \n', tweets[i].text);
	  		}
		}
	});