function slide(){

	for(var i=1; i<=6; i++){

		var grids = [];
			grids[i] = document.getElementById('blok'+i);

		var arrow = document.createElement('div');
			arrow.id='arrow';
			arrow.innerHTML = 'dqdq';
			arrow.style.width='0px';
			arrow.style.height='200px';
			arrow.style.background = 'green';
			arrow.style.transition = 'all ease 1s';



			grids[i].addEventListener('touchmove', function(){

				for(var o = 1; o<=6; o++){

					let gr = [

						document.getElementById('blok1'),
						document.getElementById('blok2'),
						document.getElementById('blok3'),
						document.getElementById('blok4'),
						document.getElementById('blok5'),
						document.getElementById('blok6')

					];
						

				var posMouse = event.touches[0].pageX;
					
					this.style.width = 30 + 'px';
					this.style.opacity = 0;


				if(this == document.getElementById('blok'+o)){
					
						gr[o].style.top = -200 + 'px';

					}
				}

			})

	}	
			
}

slide();