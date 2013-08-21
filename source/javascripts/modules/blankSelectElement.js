"use strict";

var setBlankDefaultOption = (function () {
	// privates
	function setBlank() {
		$('select').prop('selectedIndex', -1)
	}

	return {
		// public api
		init: function() {
      setBlank();
    }
	};

})().init()