var flattenObject = (function () {
	"use strict";
  // private
  var foobar = {
  	'index': {
			'about': {
				'team': true,
				'company': ['Jim', 'Barry']
			}
		}
	}

	function flatten(obj, includePrototype, into, prefix) {
	    into = into || {};
	    prefix = prefix || "";

	    for (var k in obj) {
	    	// console.log(k);
        if (includePrototype || obj.hasOwnProperty(k)) {
          var prop = obj[k];
          // console.log(prop);
          if (prop && typeof prop === "object" && !(prop instanceof Date || prop instanceof RegExp || prop instanceof Array)) {
            // console.log(prefix + k);
            flatten(prop, includePrototype, into, prefix + k + "/");
          }
          else {
            into[prefix + k] = prop;
            // console.log(prop);
          }
        }
	    }
	    console.log(into);
	    return into;
	}

  return {
    init: function() {
    	// console.log(foobar);
    	flatten(foobar);
    }
  };

})().init();