(function( $, window, undefined ) {
	$.fn.centerElement = function() {
		var $elem = $(this);
		(function(){
			$elem.each(function(index){
				var
				elemHeight = $(this).height(),
				containerHeight = $(this).parent().height(),
				elemMiddle = elemHeight / 2,
				containerMiddle = containerHeight / 2,
				centerPos = containerMiddle - elemMiddle;
				$(this).css({
					marginTop : centerPos + 'px'
				});
			});
		}());
	};
})(jQuery,window);
