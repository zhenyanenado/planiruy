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

				var posMouse = event.touches[0].pageX;
					
					this.style.width = 30 + 'px';
					this.style.opacity = 0;


				let values = [

					document.getElementById('inp1').value

				];

				console.log(values[0])

			})

	}	
			
}

slide();