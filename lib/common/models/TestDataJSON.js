module.exports = {
		    "name": "AngularJS Test App",
		    "questions" : [
		        {
		            "question" : "Which is not an advantage of using a closure?",
		            "options"  : [
		                "Prevent pollution of global scope",
		                "Encapsulation",
		                "Private properties and methods",
		                "Allow conditional use of ‘strict mode"
		            ],
		            "answer"   : "2"
		        },
		        {
		            "question" : "To create a columned list of two-line email subjects and dates for a master-detail view, which are the most semantically correct?",
		            "options"  : [
		                "<div>+<span>",
		                "<tr>+<td>",
		                "<ul>+<li>",
		                "<p>+<br>",
		                "none of these",
		                "all of these"
		            ],
		            "answer"   : "2"
		        },
		        {
		            "question" : "To pass an array of strings to a function, you should not use...",
		            "options"  : [
		                "fn.apply(this, stringsArray)",
		                "fn.call(this, stringsArray)",
		                "fn.bind(this, stringsArray)"
		            ],
		            "answer"   : "2"
		        },
		        {
		            "question" : "____ and ____ would be the HTML tags you would use to display a menu item and its description.",
		            "options"  : [
		                "<li> + <a>",
		                "<div> + <span>",
		                "<menu> + <menuItem>"
		            ],
		            "answer"   : "0"
		        },
		        {
		            "question" : "Given <div id='outer'><div class='inner'></div></div>, which of these two is the most performant way to select the inner div ?",
		            "options"  : [
		                "getElementById('outer').children[0]",
		                "getElementsByClassName('inner')[0]"
		            ],
		            "answer"   : "0"
		        },
		        {
		            "question" : "Given this: angular." +
		            		"module('myModule',[]).service('myService',(function() " +
		            		"{var message = 'Message one!' var getMessage = function() {return this.message} " +
		            		"this.message ='Message two!' this.getMessage = function() { return message } return function() " +
		            		"{ return { getMessage: getMessage, message: 'Message three!'}}})()) ",
		            "options"  : [
		                "Message one!",
		                "Message two!",
		                "Message three!"
		            ],
		            "answer"   : "2"
		        }
		    ]
		}

