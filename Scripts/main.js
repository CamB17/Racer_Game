//creates function that shreds!
$('#shred').click(function() {

	//creates function for racer completion
	function checkIfComplete() {
		if( isComplete == false ) {
			isComplete = true;
		} else {
			place = 'second';
		}
	}
	//olympian width
	var olympianWidth = $('#yoshi').width();
	//ghet full width of browser
	var slopeTrackWidth = $(window).width() - olympianWidth;

	//Generate winning timer
	var raceTime1 = Math.floor( (Math.random() * 3000) + 1);
	var raceTime2 = Math.floor( (Math.random() * 3000) + 1);

	//Creates boolean flag variable that checks winner
	var isComplete = false;
	var place = 'first';

	//Creates movement for yoshi
	$('#yoshi').animate({
		left: slopeTrackWidth
	//Creates time of finish	
	}, raceTime1, function() {
		//function callback for movement completion
		checkIfComplete();

		$('#racerInfo1 span').text( 'Finished in ' + place + ' Winner!');


	});

$('#luigi').animate({


		left: slopeTrackWidth
	//Creates time of finish	
	}, raceTime2, function() {
		//function callback for movement completion
		checkIfComplete();

		$('#racerInfo2 span').text( 'Finished in ' + place + ' Winner!');


	});



});

$('#restart').click(function() {
        $('.olympian').css('left','0');
        $('.placeInfo span').text('');
    });