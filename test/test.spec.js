var expect = require('chai').expect;
var timeDiff = require('../index');

describe('Test time difference', function(){
	it('.difference() should return the days between two dates', function(){
		var answer = 1;
		var firstDate = new Date('6/4/2016');
		var secondDate = new Date('6/3/2016');

		var diff = timeDiff.difference(	firstDate, secondDate);

		expect(diff).to.equal(answer);
	});

	it('.difference() should return negative days when measuring future days', function(){
		var answer = -10;
		var firstDate = new Date('6/10/16');
		var secondDate = new Date('6/20/16');

		var diff = timeDiff.difference( firstDate, secondDate);

		expect(diff).to.equal(answer);
	});

	it('.absoluteDifference() should return the absolute days between two dates', function(){
		var answer = 1;
		var firstDate = new Date('6/4/2016');
		var secondDate = new Date('6/3/2016');

		var diff = timeDiff.absoluteDifference(	firstDate, secondDate);

		expect(diff).to.equal(answer);
	});

	it('.absoluteDifference() should return absolute days between dates when measuring future days', function(){
		var answer = 10;
		var firstDate = new Date('6/10/16');
		var secondDate = new Date('6/20/16');

		var diff = timeDiff.absoluteDifference( firstDate, secondDate);

		expect(diff).to.equal(answer);
	});
});