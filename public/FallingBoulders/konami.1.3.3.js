
/*
	* Konami-JS ~ 
	* :: Now with support for touch events and multiple instances for 
	* :: those situations that call for multiple easter eggs!
	* Code: http://konami-js.googlecode.com/
	* Examples: http://www.snaptortoise.com/konami-js
	* Copyright (c) 2009 George Mandis (georgemandis.com, snaptortoise.com)
	* Version: 1.3.3 (4/16/2011)
	* Licensed under the GNU General Public License v3
	* http://www.gnu.org/copyleft/gpl.html
	* Tested in: Safari 4+, Google Chrome 4+, Firefox 3+, IE7+, Mobile Safari 2.2.1 and Dolphin Browser
*/

var pressKey = function() {
	var keyPress= {
			addEvent:function ( obj, type, fn, ref_obj )
			{
				if (obj.addEventListener)
					obj.addEventListener( type, fn, false );
				else if (obj.attachEvent)
				{
					// IE
					obj["e"+type+fn] = fn;
					obj[type+fn] = function() { obj["e"+type+fn]( window.event,ref_obj ); }
	
					obj.attachEvent( "on"+type, obj[type+fn] );
				}
			},
	        input:"",
	        pattern:"39",
		/*pattern:"38384040373937396665",*/
	        load: function(link) {					
				this.addEvent(document,"keydown", function(e,ref_obj) {											
					if (ref_obj) keyPress = ref_obj; // IE
					keyPress.input+= e ? e.keyCode : event.keyCode;
					if (keyPress.input.length > keyPress.pattern.length)keyPress.input = keyPress.input.substr((keyPress.input.length - keyPress.pattern.length));
					if (keyPress.input == keyPress.pattern) {
                    keyPress.code(link);
					keyPress.input="";
                   	return;
                    }
            	},this);
           this.iphone.load(link)
	                
				},
	        code: function() { moveRight(); },
	        iphone:{
	                start_x:0,
	                start_y:0,
	                stop_x:0,
	                stop_y:0,
	                tap:false,
	                capture:false,
					orig_keys:"",
	                keys:["UP","UP","DOWN","DOWN","LEFT","RIGHT","LEFT","RIGHT","TAP","TAP","TAP"],
	                code: function(link) { keyPress.code(link);},
	                load: function(link){
									this.orig_keys = this.keys;
	    							keyPress.addEvent(document,"touchmove",function(e){
	                          if(e.touches.length == 1 && keyPress.iphone.capture==true){ 
	                            var touch = e.touches[0]; 
	                                keyPress.iphone.stop_x = touch.pageX;
	                                keyPress.iphone.stop_y = touch.pageY;
	                                keyPress.iphone.tap = false; 
	                                keyPress.iphone.capture=false;
	                                keyPress.iphone.check_direction();
	                                }
	                                });               
	                        keyPress.addEvent(document,"touchend",function(evt){
	                                if (keyPress.iphone.tap==true) keyPress.iphone.check_direction(link);           
	                                },false);
	                        keyPress.addEvent(document,"touchstart", function(evt){
	                                keyPress.iphone.start_x = evt.changedTouches[0].pageX
	                                keyPress.iphone.start_y = evt.changedTouches[0].pageY
	                                keyPress.iphone.tap = true
	                                keyPress.iphone.capture = true
	                                });               
	                                },
	                check_direction: function(link){
	                        x_magnitude = Math.abs(this.start_x-this.stop_x)
	                        y_magnitude = Math.abs(this.start_y-this.stop_y)
	                        x = ((this.start_x-this.stop_x) < 0) ? "RIGHT" : "LEFT";
	                        y = ((this.start_y-this.stop_y) < 0) ? "DOWN" : "UP";
	                        result = (x_magnitude > y_magnitude) ? x : y;
	                        result = (this.tap==true) ? "TAP" : result;                     

	                        if (result==this.keys[0]) this.keys = this.keys.slice(1,this.keys.length)
	                        if (this.keys.length==0) { 
														this.keys=this.orig_keys;
														this.code(link)
														}
	                        }
	                }
	}
	return keyPress;
}