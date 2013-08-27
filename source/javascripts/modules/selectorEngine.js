var select = (function () {
	"use strict";
	// private
	var container = document.getElementById('dom_results');
	var scope = document.getElementById('selector_engine');
	var input = scope.getElementsByTagName('input');
	var trigger = scope.getElementsByTagName('button');

	function search() {
		trigger[0].addEventListener('click', function(e){
			e.preventDefault();
			var val = input[0].value;
			select(val);
		});
		// refactor using...
		// document.querySelectorAll('div .row')
	}

	function select(val) {
		container.innerHTML = "";

		var arr;
		if( val[0] === "." ) {
			var name = val.slice(1);

			// check for space to detect child
			if( name.indexOf(" ") != name.length && name.indexOf(" ") != -1 ) {
				var space = name.indexOf(" ");
				var parent = name.slice(0, space);
				var child = name.slice(space + 1);
				var parent_arr = document.getElementsByClassName(parent);
				var p_length = parent_arr.length;
				var n;
				for(n=0; n<p_length; n++){
					arr = parent_arr[n].getElementsByTagName(child);
					var length = arr.length;
					var i;
					for(i=0; i<length; i++) {
						container.innerHTML += arr[i].nodeName + ", ";
					}
				}
			} else {
				arr = document.getElementsByClassName(name);
				var length = arr.length;
				var i;
				for(i=0; i<length; i++) {
					container.innerHTML += arr[i].nodeName + ", ";
				}
			}

		} else if( val[0] === "#" ) {
			var name = val.slice(1);
			
			// check for space to detect child
			if( name.indexOf(" ") != name.length && name.indexOf(" ") != -1 ) {
				var space = name.indexOf(" ");
				var parent = name.slice(0, space);
				var child = name.slice(space + 1);
				var parent_arr = document.getElementById(parent);
				var p_length = parent_arr.length;
				var n;
				for(n=0; n<p_length; n++){
					arr = parent_arr[n].getElementsByTagName(child);
					var length = arr.length;
					var i;
					for(i=0; i<length; i++) {
						if( length > 1 ) {
							container.innerHTML += arr[i].nodeName + ", ";
						} else {
							container.innerHTML += arr[i].nodeName
						}
					}
				}
			} else {
				arr = document.getElementById(name);
				var length = arr.length;
				var i;
				for(i=0; i<length; i++) {
					if( length > 1 ) {
						container.innerHTML += arr[i].nodeName + ", ";
					} else {
						container.innerHTML += arr[i].nodeName
					}
				}
			}

		} else {
			var name = val;

			// check for space to detect child
			if( name.indexOf(" ") != name.length && name.indexOf(" ") != -1 ) {
				var space = name.indexOf(" ");
				var parent = name.slice(0, space);
				var child = name.slice(space + 1);
				var parent_arr = document.getElementsByTagName(parent);
				var p_length = parent_arr.length;
				var n;
				for(n=0; n<p_length; n++){
					arr = parent_arr[n].getElementsByTagName(child);
					var length = arr.length;
					var i;
					for(i=0; i<length; i++) {
						if( length > 1 ) {
							container.innerHTML += arr[i].nodeName + ", ";
						} else {
							container.innerHTML += arr[i].nodeName
						}
					}
				}
			} else {
				var arr = document.getElementsByTagName(val);
				var length = arr.length;
				var i;
				for(i=0; i<length; i++) {
					if( length > 1 ) {
						container.innerHTML += arr[i].nodeName + ", ";
					} else {
						container.innerHTML += arr[i].nodeName;
					}
				}
			}

		}
	}

	// public
	return {
		init: function(){
			search();
		}
	}
})();

select.init();