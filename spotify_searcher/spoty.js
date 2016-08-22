// response.responseJSON.artists.items[0].name
var author;
var indexx;
$('#btn_search').on('click', function(event){
	event.preventDefault();
	$('li').remove()
	author = $('#input_artist').val();
	$.ajax({
		url:'https://api.spotify.com/v1/search?type=artist&query=' + author ,
		success: handleAuthor,
		error: errorMessage
	})
})
function handleAlbum(response){
	console.log(response);
	response.items.forEach(function(element){
		var image = element.images[0]
		if (image){
		$('#artist'+indexx+'').append('<li><a id="artist_song">' + element.name + '<img src="'+ element.images[0].url + '"></a></li>' );
		// $('#artist_albums').on('click', function(event){
		// 	event.preventDefault();
		// 	author.id
		// 	$.ajax({
		// 		url:'https://api.spotify.com/v1/artists/'+ id +'/albums',
		// 		success: handleAlbum,
		// 		error: errorMessage
		// 	})

		// })
		}
	})
}


function errorMessage(){
	console.log('naah, no va')
}

function handleAuthor(response){
	console.log(response);
	response.artists.items.forEach(function(element, index){
		var image = element.images[0]
		var id = element.id
		if (image){
			$('.artist-list').append('<li id="artist'+index+'"><a id="artist_albums" href="#">' + element.name + '<img src="'+ element.images[0].url + '"></a></li>' );
		}
	})
}


$('.artist-list').on('click', '#artist_albums', function(event){
	event.preventDefault();

	$.ajax({
		url:'https://api.spotify.com/v1/artists/'+ id +'/albums',
		success: handleAlbum,
		error: errorMessage
	})

})




