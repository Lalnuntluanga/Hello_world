var hello = {
	"obj" : {
		const : function(){
			this.body = document.body;
		}
	},
	"initiate" : function(){
		
		var getRandomX = function(){
				
				var max = document.documentElement.clientWidth,
					min = 0;
				return Math.random() * (max - min) + min;
			},
			getRandomY = function(){
				var max = document.documentElement.clientHeight,
					min = 0;
					
				return Math.random() * (max - min) + min;
			},
			createElement = function(){
				var elem = document.createElement("p");
				elem.innerHTML = "HELLO WORLD";
				elem.setAttribute("data-start",getRandomX());
				elem.setAttribute("data-end",getRandomX());
				elem.setAttribute("data-top",getRandomY());
				elem.setAttribute("data-bottom",getRandomY());
				return elem;
			},
			animateElement = function(elem){
				var start = elem.getAttribute("data-start"),
					end = elem.getAttribute("data-end"),
					top = elem.getAttribute("data-top"),
					bottom = elem.getAttribute("data-bottom");
					
				Velocity(elem, {left : [start, end], bottom : [top, bottom]},1000);
			};
			
		var count = 0,
			wrapper = document.getElementsByClassName("wrapper")[0],
			interval = setInterval(function(){
				var elem = createElement();
				wrapper.appendChild(elem);
				animateElement(elem);
				count++;
				
				if(count > 100)
				{
					clearInterval(interval);
					scale();
				}
			
			},100),
			scale = function(){
				setInterval(function(){
					var scaleVal = Math.random() * (2 - 0) + 0;
					//wrapper.style.transform = "scale("+scaleVal+")";
					Velocity(wrapper, {scale : scaleVal},1000, "spring");
				},2000);
			};
		
	},
	"bootStrap" : function(){
		this.obj.const();
		window.addEventListener("DOMContentLoaded", this.initiate);
	}
}.bootStrap();
