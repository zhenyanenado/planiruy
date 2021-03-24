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


			let gr = [

				document.getElementById('blok1'),
				document.getElementById('blok2'),
				document.getElementById('blok3'),
				document.getElementById('blok4'),
				document.getElementById('blok5'),
				document.getElementById('blok6')

			];

			gr[0].addEventListener('touchmove', function(){

				var posMouse = event.touches[0].pageX;
					
					this.style.width = 30 + 'px';
					this.style.opacity = 0;

						gr[1].style.top = -200 + 'px';			
						gr[2].style.top = -200 + 'px';
						gr[3].style.top = -200 + 'px';
						gr[4].style.top = -200 + 'px';
						gr[5].style.top = -200 + 'px';

			})

}	
			
}

slide();