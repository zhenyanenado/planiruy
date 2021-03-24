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

					let inps = [

						document.getElementById('inp1'),
						document.getElementById('inp2'),
						document.getElementById('inp3'),
						document.getElementById('inp4'),
						document.getElementById('inp5'),
						document.getElementById('inp6'),

					]
						

				var posMouse = event.touches[0].pageX;

				let verh = document.getElementById('slide');
					
					this.style.width = 30 + 'px';
					this.style.opacity = 0;

						if(this == gr[0]){
							verh.innerHTML = inps[0].value;
						}

						if(this == gr[1]){
							verh.innerHTML = inps[1].value;
						}

						if(this == gr[2]){
							verh.innerHTML = inps[2].value;
						}
						if(this == gr[3]){
							verh.innerHTML = inps[3].value;
						}

						if(this == gr[4]){
							verh.innerHTML = inps[4].value;
						}

						if(this == gr[5]){
							verh.innerHTML = inps[5].value;
						}

						if(this == gr[6]){
							verh.innerHTML = inps[6].value;
						}
				}

			})

	}	
			
}

slide();