var toggleModule = (function () {
  "use strict";
  // privates
  var scope = $('#toggle-items');
  var triggers = $(scope).find('a');
  var targets = $(scope).find('.toggle-item');

  function setDefault() {
    var trigger = $(triggers[0]);
    var target = $(targets[0]);
    
    // hide all content divs
    $(targets).addClass('hide');

    // set state on first content div button and show content div
    $(target).removeClass('hide');
    $(trigger).addClass('active');
  }

  function setTrigger() {
    $(triggers).click(function() {
      
      // toggle button state on click
      var sibling = $(this).parent().siblings().find(triggers);
      if( $(sibling).hasClass('active') ){
        $(sibling).removeClass('active');
        $(this).addClass('active');
      }

      // call toggle content div
      var trigger = $(this).data('toggle-trigger');
      toggleItem(trigger);
    });
  }

  // level 2 private
  function toggleItem(item){
    // loop through checking data value of trigger to target
    var length = targets.length;
    var i;
    for(i=0; i<length; i++) {
      if( item === $(targets[i]).data('toggle-target') ){
        var tar = $(targets[i]).data('toggle-target', item);
        if( $(tar).hasClass('hide') ){
          
          // show content div
          $(tar).removeClass('hide');

          // hide all other content divs
          $(tar).siblings().addClass('hide');
        }
      }
    }
  }

  return {
    // public api
    // A public init function with access to privates
    init: function() {
      setDefault();
      setTrigger();
    }
  };

})().init(); // call the ifee with the init method