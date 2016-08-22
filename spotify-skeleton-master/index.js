function onError(){
	console.log('esa cancion no existe PRINGADO!');
}

function createModal(track){
	var authorId = track.info.artists[0].id
	var uri = 'https://api.spotify.com/v1/artists/' + authorId;
	$.ajax({
	 	url: uri, 
	 	success: prepareModal, 
	 	error: onError
	})
}

function prepareModal(author){
	$('.modal-header h2').text(author.name)
	$('.photo').attr('src', author.images[0].url)
	$('.genres').text(author.genres)
	$('.followers').text(author.followers.total)
	$('.popularity').text(author.popularity)
}

function Track(){
}
var tracks = []
function onDone(response){
	var track = new Track();
	track.info = response.tracks.items[0];
	tracks.push(track);
	$('.title').text(track.info.name);
	$('.to-author-info').text(track.info.artists[0].name)
	$('.cover-image').attr('src', track.info.album.images[0].url)
	$('audio').attr('src', track.info.preview_url)
	createModal(track)
}
function printTime () {
  var current = $('.js-player').prop('currentTime');
  $('progress').attr('value', current);
  if (current > 30){
	$('progress').attr('value', 0);
	$('.btn-play').removeClass('playing');
  }
}



$(document).on('ready', function(){
	console.log('everybody in da house say yeeeeee')

	$('.btn-play').on('click', function(){
		var current = $('.js-player').prop('currentTime')
		$('.btn-play').toggleClass('playing');
		if ($('.btn-play').hasClass('playing')){
			$('.js-player').trigger('play');
		}
		else{
			$('.js-player').trigger('pause')	
		}
	})

	$('.user-search').keypress(function(event){
		if ( event.which == 13 ) {
	    	event.preventDefault();
	    	var userSearch = $('.user-search').val()
	    	var uri = 'https://api.spotify.com/v1/search?type=track&q='+ userSearch;
	    	 $.ajax({
	    	 	url: uri, 
	    	 	success: onDone, 
	    	 	error: onError
	    	})
		}
	})
	$('.js-player').on('timeupdate', printTime);
	$('.to-author-info').on('click', function(event){
		$('.modal').modal('show');
	})
})



