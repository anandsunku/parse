var jsel = require('jsel');

var myJsonData = {
	title: 'abc',
	children: [
		{
			foo:'bar'
		},
		'val'
	],
	subData:{
		foo: 555,
		foo2: 'bar2',
		inside:{
			foo: 878,
			foo: 555,
			foo: 238
		}
	}
};


var dom = jsel(myJsonData);

console.log(dom.select('count(//*)'));

console.log(dom.select('foo'));