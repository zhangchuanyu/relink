var doscroll = function(){
     var $parent = $('.js-slide-list');
     var $first = $parent.find('li:first');
     var height = $first.height();
     $first.animate({
         marginTop: -height + 'px'
         }, 500, function() {
         $first.css('marginTop', 0).appendTo($parent);
     });    
};
setInterval(function(){doscroll()}, 2000);