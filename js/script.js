$('.carousel').carousel({
    fullWidth: true
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: false
});

$('.moveNextCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
});

$('.movePrevCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
});

$(document).ready(function(){
    $('.sidenav').sidenav();
  });

$(document).ready(function(){
    $('.modal').modal();
});

(function() {

	var ConnectFour = function() {
		gameBoard = {};
		currentPlayer = 'Rouge';
		numRows = 6;
		numCols = 7;
		numTurns = 0;
		_init = function() {
			var columns;
			columns = document.querySelectorAll('.column');
			Array.prototype.forEach.call(columns, function(col) {
				col.addEventListener('click', function() {
					markNextFree(col.getAttribute('data-x'));
				});
			});
			for(var x = 0; x <= numRows; x++) {
				gameBoard[x] = {};
				for(var y = 0; y <= numCols; y++) {
					gameBoard[x][y] = 'free';
				}
			}
		};
		
		var markNextFree = function(x) {
			var nextY;
			nextY = false;
			for(var y = 0; y < numRows; y++) {
				if(gameBoard[x][y] === 'free') {
					nextY = y;
					break;
				}
			}
			if(nextY === false) {
				alert('Cette colonne est pleine, vous devez mettre votre jeton ailleurs !');
				return false;
			}
			gameBoard[x][nextY] = currentPlayer;
			document.querySelector('#column-'+x+' .row-'+nextY+' circle').setAttribute(
					'class', currentPlayer
			);
			if(isWinner(parseInt(x), nextY)) {
				alert('Le joueur '+currentPlayer+' a gagné!');
				clearBoard();
				return true;
			}
			numTurns = numTurns + 1;
			if(numTurns >= numRows * numCols) {
				alert('Égalité !');
				clearBoard();
				return true;				
			}
			currentPlayer = currentPlayer === 'Rouge' ? 'Jaune' : 'Rouge';

		};
		
		var clearBoard = function() {
			Array.prototype.forEach.call(document.querySelectorAll('circle'), function(piece) {
				piece.setAttribute('class', 'free');
			});
			gameBoard = {};
			for(var x = 0; x <= numRows; x++) {
				gameBoard[x] = {};
				for(var y = 0; y <= numCols; y++) {
					gameBoard[x][y] = 'free';
				}
            console.log(gameBoard);
			}
			numTurns = 0;
			return gameBoard;
		};

		var isWinner = function(currentX, currentY) {
			return checkDirection(currentX, currentY, 'vertical') || 
				checkDirection(currentX, currentY, 'diagonal') || 
				checkDirection(currentX, currentY, 'horizontal');
		};
		
		var isBounds = function(x, y) {
			return (gameBoard.hasOwnProperty(x) && typeof gameBoard[x][y] !== 'undefined');
		};

		var checkDirection = function(currentX, currentY, direction) {
			var chainLength, directions;
			directions = {
				horizontal: [
					[0, -1], [0, 1]
				],
				vertical: [
					[-1, 0], [1, 0]
				],
				diagonal: [
					[-1, -1], [1, 1], [-1, 1], [1, -1]
				]
			};
			chainLength = 1;
			directions[direction].forEach(function(coords) {
				var i = 1;
				while( isBounds(currentX + (coords[0] * i), currentY + (coords[1] * i)) && 
					(gameBoard[currentX + (coords[0] * i)][currentY + (coords[1] * i)] === currentPlayer)
				) {
					chainLength = chainLength + 1; 
					i = i + 1; 
				};
			});
			return (chainLength >= 4);
		};
		_init();
	};
	ConnectFour();
})();
