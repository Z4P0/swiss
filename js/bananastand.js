var phase2 = (function () {
	console.log("there's always money in the banana stand..");

	// navigation
	// pages
	var pages = document.getElementById('tests').getElementsByTagName('li');
	console.log(pages);
	navigator(
		// nav pieces
		document.getElementsByTagName('nav')[0].getElementsByTagName('li'),
		// pages
		pages
	);
})();

function navigator(_navElements, _pageElements) {
	// what elements are in our navigation?
	var nav = _navElements;
	var pages = _pageElements;

	// connect to appropriate page/section
	for (var i = 0; i < nav.length; i++) {
		console.log(nav[i]);
		console.log(pages[i]);
		// nav[i].page = pages[i];
		// console.log(nav[i].page);

		nav[i].addEventListener("click", function() {
			togglePage(pages[i]);
			// console.log(togglePage(pages[i]));
			// console.log(pages[i]);
		}, false);
	}

	return nav;
}
function togglePage(_page) {
	console.log('togglePage');
	console.log(_page);
}

function gallery() {
	// set up the gallery page

	// 1. addeventlisteners
	// a. categories
	var categories = document.getElementsByClassName('categories')[0].getElementsByTagName('input');
	for (var i = 0; i < categories.length; i++) {
		addListener(categories[i], 'change', category_selection);
		if (categories[i].checked) addClass('selected', categories[i].parentNode);
	}
	// b. imgs
	var imgs = document.getElementsByClassName('gallery')[0].getElementsByTagName('img');
	for (var j = 0; j < imgs.length; j++) {
		addListener(imgs[j], 'click', showcase);
	}
	// hook stuff up
}

function category_selection(e) {
	// update UI
	document.getElementsByClassName('categories')[0].getElementsByClassName('selected')[0].className = '';
	e.target.parentNode.className += 'selected';

	console.log(e.target.value);
}
function showcase(e) {
	console.log('showcase\n'+e);
}










function element(_element, _text) {
	var ele;
	// check if _element has classes/IDs attached
	var classes = _element.split(/\W/i);
	if (classes.length > 1) {
		ele = document.createElement(classes[0]);
		var classString = "";
		for (var i = 1; i < classes.length; i++) { classString += classes[i]+" "; }
	}
	else {
		ele = document.createElement(_element);
	}

	// if we have a 2nd parameter
	if (_text !== undefined) {
		if (_element === "img") ele.setAttribute("src", _text);
		else {
			if (_element === "a") ele.setAttribute("href", _text);
			var text = document.createTextNode(_text);
			ele.appendChild(text);
		}
	}
	return ele;
}





// ======================================================================
// ======================================================================






/* addClass */
function addClass(_class, _element) {
	// variables
	var className = "", // string to hold className to add
			classExists = false; // boolean to check if the class already exists
	var classes = _element.className.split(" ");


	if (classes[0] === "") { /* element has no classes. add class name */ }
	else {
		/* element has existing classes */
		className += " "; // for appropriate spacing
		/* check if the class already exists */
		for (var i = 0; i < classes.length; i++) {
			if (classes[i] === _class) { classExists = true; } // class exists, do nothing
		}
	}

	// if className does not exist, add new className
	if (!classExists) {
		className += _class;
		_element.className += className;
	}
} // end addClass

/* removeClass */
function removeClass(_element, _class) {
	// variables
	var classExists = false, // boolean to check if the class already exists
			classRef; // will hold the array reference if the element exits
	var classes = _element.className.split(" ");


	if (classes[0] === "") { /* element has no classes. do nothing */ }
	else {
		/* element has existing classes, check if the class exists */
		for (var i = 0; i < classes.length; i++) {
			if (classes[i] === _class) {
				classExists = true;
				classRef = i;
			}
		}
	}

	// if className exists, remove the className
	if (classExists) {
		classes.splice(classRef);
		_element.className = classes;
	}
} // end removeClass


/* add event listener */
function addListener( _element, _event_string, _func ) {
	// Chrome, FF, O, Safari
	if( _element.addEventListener ) _element.addEventListener( _event_string, _func, false );
	// IE
	else if( _element.attachEvent ) _element.attachEvent( "on" + _event_string, _func );
	// credit to roxik, Masayuki Kido. roxik.com/cat
}

/* clear nodes */
function clear(_element) {
  while( _element.hasChildNodes() ) {
    _element.removeChild( _element.firstChild );
  }
}

/* AJAX */
// load
function load(_uri) {
  var currentRequest = null;

  // not IE
  if ( window.XMLHttpRequest ) {currentRequest = new XMLHttpRequest(); }
  // IE only
  else if ( window.ActiveXObject ) {currentRequest = new ActiveXObject( "Microsoft.XMLHTTP" ); }

  if ( currentRequest !== null ) {   // able to get a request object
    currentRequest.onreadystatechange = function() {
      checkLoadStatus(currentRequest);
    };
    currentRequest.open( "GET", _uri, true );  // true means non-blocking/asynchronous I/O
    currentRequest.send( "" );
  }
  else {
    console.log("error obtaining request object...");
  }
}

// check load status
function checkLoadStatus( _request ) {
  if ( _request.readyState == 4 ) { // if _request state is "loaded"
    if ( _request.status == 200 ) {  // if status code is "OK"
			// content loaded
			// parseData(_request.responseText);
			console.log('lol. AJAX');
    }
    else {
			console.log("something went wrong. checkLoadStatus()");
    }
  }
}