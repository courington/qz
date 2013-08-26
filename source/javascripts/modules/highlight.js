var highlight = (function () {
	"use strict";

	var trigger = document.getElementById('highlight');

	function go() {
		trigger.addEventListener('click', function(e){
			e.preventDefault();
			replaceScript('title');
		});
	}

	function replaceScript(str) {
		
		function walkTree(node){
			if( node.childNodes.length > 0 ){
				var re = new RegExp(str, 'g');
				var i;
				for(i = 0; i < node.childNodes.length; i++) {
					walkTree(node.childNodes[i]);
					if( node.childNodes[i].textContent.indexOf(str) != -1  ){
						if( node.childNodes[i].nodeValue != null  ){
							node.innerHTML = node.childNodes[i].textContent.replace(re, '<span class="hl">'+str+'</span>');
							console.log(node.innerHTML);
						}
					}
				}
			}
		}
		walkTree(document.body);

	}

return {
	init: function(){
		go();
		// replaceScript('title');
	}
};

})().init();