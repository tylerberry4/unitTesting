/* global describe, it */

//used for _.pluck()
var residents = [
{name: 'Tyler', phoneNumber: 6735217 },
{name: 'John', phoneNumber: 9190560 },
{name: 'Jenny', phoneNumber: 8675309  }
];

//used for ._last()
var sports = ['soccer', 'football', 'hockey'];

//used for _.first
var numbers = [1, 2, 3, 4];


(function () {
    'use strict';

		describe('Using _.pluck, _.last, and _.first on an array', function () {
      describe('_.pluck', function () {
          
	      it("should expect _.pluck to form a new array made of the residents names", function(){
	        expect(_.pluck(residents,'name')).to.deep.equal([ 'Tyler' ,'John', 'Jenny' ]);
	      });

	      it("should expect the residents phone numbers to include Jennys number", function (){
	        expect(_.pluck(residents,'phoneNumber')).to.include(8675309);
	      });

	      it("should expect to be empty because there was no argument", function (){
	        expect(_.pluck()).to.be.empty;
	      });

	      it("should expect to be not equal to for a bad argument", function (){
	        expect(_.pluck(residents, 'name')).to.not.have.property('Lani');
	      });
	    });


		describe('_.last', function () {
          
	      it("should expect _.last to find the last sport in the array", function(){
	        expect(_.last(sports)).to.deep.equal('hockey');
	      });

	      it("should expect to be empty because there was no argument", function (){
	        expect(_.last()).to.be.empty;
	      });

	      it("should expect to be not equal to for a bad argument", function (){
	        expect(_.last(sports)).to.not.have.property('quidditch');
	      });
	    });


		describe('_.first', function () {
          
	      it("should expect _.first to find the first number in the array", function(){
	        expect(_.first(numbers)).to.deep.equal(1);
	      });

	      it("should expect to be empty because there was no argument", function (){
	        expect(_.first()).to.be.empty;
	      });

	      it("should expect a bad argument of not a number", function (){
	        expect(_.first(numbers)).to.not.be.an('string');
	      });
	      
	    });
		});
})();












