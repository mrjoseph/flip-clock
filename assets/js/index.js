(function($, window, undefined){
	var clock = clock || {};
	clock = {
		container : $('#container'),
		seconds : 0,
		minutes : 0,
		hours : 0,
		//Seconds
		secondsFlip : '#seconds .flipper',
		secondsFront : '#seconds .front',
		secondsBack : '#seconds .back',
		secondsElem :'#seconds',
		//Minutes
		minutesFlip : '#minutes .flipper',
		minutesFront : '#minutes .front',
		minutesBack : '#minutes .back',
		minutesElem :'#minutes',
		//Minutes
		hoursFlip : '#hours .flipper',
		hoursFront : '#hours .front',
		hoursBack : '#hours .back',
		hoursElem :'#hours',

		// This function centers the clock in the middle of the browser
		browserResize: function(){
			var winHeight = $(window).height();
			this.container.height(winHeight);
		},
		adjustSeconds: function(){
			setInterval(function(){
				if(clock.seconds == 59){
					clock.seconds = 0;
					clock.adjustMinutes();
				}
				//Add 1 to the counter
				clock.seconds ++;

				//Add the extra zero
				clock.seconds = ( clock.seconds < 10 ? "0" : "" ) + clock.seconds;

				//Run the CSS flip animation
				$(clock.secondsFlip).addClass('active');
				//Append the new counter to the back
				$(clock.secondsFront).html(clock.seconds);
				
				$(clock.secondsFlip).fadeOut(550,function(){
					//Jquery remove doesn't have a callback function so I've used fadeout
					$(this).remove();
					$(clock.secondsElem).prepend($('<div class="flipper"><div class="front card">'+ clock.seconds +'</div></div>'));
					$(clock.secondsBack).html(clock.seconds);
				});
			},1000);
		},
		adjustMinutes: function(){
	
			if(clock.minutes == 59){
				clock.minutes = 0;
				clock.adjustHours();
			}
			//Add 1 to the counter
			clock.minutes ++;

			//Add the extra zero
			clock.minutes = ( clock.minutes < 10 ? "0" : "" ) + clock.minutes;

			//Run the CSS flip animation
			$(clock.minutesFlip).addClass('active');
			//Append the new counter to the back
			$(clock.minutesFront).html(clock.minutes);
			
			$(clock.minutesFlip).fadeOut(550,function(){
				//Jquery remove doesn't have a callback function so I've used fadeout
				$(this).remove();
				$(clock.minutesElem).prepend($('<div class="flipper"><div class="front card">'+ clock.minutes +'</div></div>'));
				$(clock.minutesBack).html(clock.minutes);
			});

		},
		adjustHours: function(){
			if(clock.hours == 59){
				clock.hours = 0;
			}
			//Add 1 to the counter
			clock.hours ++;

			//Add the extra zero
			clock.hours = ( clock.hours < 10 ? "0" : "" ) + clock.hours;

			//Run the CSS flip animation
			$(clock.hoursFlip).addClass('active');
			//Append the new counter to the back
			$(clock.hoursFront).html(clock.hours);
			
			$(clock.hoursFlip).fadeOut(550,function(){
				//Jquery remove doesn't have a callback function so I've used fadeout
				$(this).remove();
				$(clock.hoursElem).prepend($('<div class="flipper"><div class="front card">'+ clock.hours +'</div></div>'));
				$(clock.hoursBack).html(clock.hours);
			});
		},
		setClock: function(){
			//set the seconds
			clock.addZero();
			$('#seconds .front, #seconds .back').html(clock.seconds);
			//Set the minutes
			$('#minutes .front, #minutes .back').html(clock.minutes);
			//Set the hours
			$('#hours .front, #hours .back').html(clock.hours);
		},
		addZero: function(){
			clock.seconds = ( clock.seconds < 10 ? "0" : "" ) + clock.seconds;
			clock.minutes = ( clock.minutes < 10 ? "0" : "" ) + clock.minutes;
			clock.hours = ( clock.hours < 10 ? "0" : "" ) + clock.hours;
		},
		flipCard: function(){
			clock.adjustSeconds();
			clock.setClock();
		},
		init:function(){
			//Reset button
			$('.resetbutton a').on('click',function(e){
				e.preventDefault();
				$('#seconds .front, #seconds .back').html('00');
				$('#minutes .front, #minutes .back').html('00');
				$('#hours .front, #hours .back').html('00');
			});
			clock.browserResize();
			//Center clock in middle of screen
			$('#clock-wrapper').centerElement();
		}
	};

	$(function(){
		clock.init();
		clock.flipCard();
	});
	$(window).resize(function(){
		clock.init();
      });
}(jQuery,window));
