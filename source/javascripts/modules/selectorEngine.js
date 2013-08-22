"use strict";

var select = (function () {
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
		}, false);
	}

	function select(val) {
		container.innerHTML = "";
		var arr = document.getElementsByTagName(val);
		var length = arr.length;
		var i;
		for(i=0; i<length; i++) {
			container.innerHTML += arr[i];
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