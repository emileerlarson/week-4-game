$( document ).ready(function() {
var wins = 0;
var loss = 0;
// var growScore = 0;
var totalScore = 0;
var computerRando = 0;
//random number generator

function restGame(){
	totalScore = 0;
	$('#totalScore').empty();
	$('#compRando').empty();
	startGame();

}


function startGame(){
computerRando = Math.floor(Math.random() * 120) + 19;
$('#compRando').text(computerRando);
//crytstal button generatior
for (var i = 0; i < 4; i++){
		var crystalRando = Math.floor(Math.random() * (12 - 1) + 1);
		$('#crystal-' + i).attr({
			value: crystalRando
		})
	}
}
$('.crystal').on('click', function(){

	var scoreCount = parseInt($(this).val());

	if (totalScore < computerRando){
     	totalScore = totalScore + scoreCount;
        $('#totalScore').html(totalScore);
     }
	else if(totalScore == computerRando){
		console.log("you win");
		++wins
		$('#wins').html(wins);
		restGame();
	}
	else if(totalScore > computerRando){
     	 console.log("you lose")
     	 ++loss
     	 $('#loss').html(loss)
     	 restGame();
     }
	
})
startGame();
})