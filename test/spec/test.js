/* global describe, it */

var residents = [
{name: 'Tyler', phoneNumber: 6735217 },
{name: 'John', phoneNumber: 9190560 },
{name: 'Jenny', phoneNumber: 8675309  }
];

(function () {
    'use strict';

		describe('Using _.pluck, _.first, and _.last on an array', function () {
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
		});


})();












