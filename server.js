var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req,res){

	url = 'https://engineering.paypalcorp.com/cal/logviewui/environment/paypal/pool/helixserv/machine/dcg12java9794/eventDetail?datetime=2016/07/14%2005:05&thread=0x69477&evt=1468497943030&key=050540:0:13495&colo=dcg12';

	// url = 'https://admin.paypal.com/cgi-bin/admin';

	request(url, function(error,response, html){
		if(!error){
			var $ = cheerio.load(html);

			fs.writeFile('html.txt', html, function(err){
				console.log('File successfully written! - check your project directory for the output.json file');
			})


			var title, release, rating;
			var json = { title: "", release: "", rating : "", checking: "khk"};

			// $('#id_reset').filter(function(){
			$(".name").filter(function(){

				var data = $(this);

				// title = data.children().first().text();
				// release = data.children().last().text();

				title = data.eq(3).text();
				// release = data.eq(4).val();
				// rating = data.first().text();

				json.title = title;
				json.release = release;
				json.rating = rating;
				json.checking = "jist check";
			})


			// $('.header').filter(function(){

			// 	var data = $(this);

			// 	title = data.children().first().text();
			// 	release = data.children().last().children().text();

			// 	json.title = title;
			// 	json.release = release;
			// })



			// $('.star-box-giga-star').filter(function(){
			// 	var data = $(this);

			// 	rating = data.text();

			// 	json.rating = rating;
			// })
		}

		fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
			console.log('File successfully written! - check your project directory for the output.json file');
		})

		res.send('check your console!')
	});

})

app.listen('8081')

console.log("magic happens on port 8081");

exports = module.exports = app;

