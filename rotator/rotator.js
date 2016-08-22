$(document).on('ready', function(){

  var	images = ['./img_0020_Fotor_BW.jpg', './img_0020_Fotor.jpg', './img_0020_Fotor_old.jpg', 'descarga.jpg', 'profile.jpg']
  var SIZE = 350;
  var baseCounterRight  = 0;
  var baseCounterLeft = 4;
  var baseCounterCenter = 1;
  var pocketCounterRight  = 0;
  var pocketCounterLeft = 4;
  var pocketCounterCenter = 1;


  function foto(){
    $('.ul-rotator-horizontal').append('<img class="small" src='+images[4]+'>')
    $('.ul-rotator-horizontal').append('<img class="small" src='+images[0]+'>')
    $('.ul-rotator-horizontal').append('<img class="small" src='+images[1]+'>')
    $('.ul-rotator-horizontal').append('<img class="small" src='+images[2]+'>')
    $('.ul-rotator-horizontal').append('<img class="small" src='+images[3]+'>')
    $('.ul-rotator-horizontal').append('<img class="small" src='+images[4]+'>')
    $('.ul-rotator-horizontal').append('<img class="small" src='+images[0]+'>')
    
    $('.ul-rotator-vertical').append('<img class="small" src='+images[4]+'>')
    $('.ul-rotator-vertical').append('<img class="small" src='+images[0]+'>')
    $('.ul-rotator-vertical').append('<img class="small" src='+images[1]+'>')
    $('.ul-rotator-vertical').append('<img class="small" src='+images[2]+'>')
    $('.ul-rotator-vertical').append('<img class="small" src='+images[3]+'>')
    $('.ul-rotator-vertical').append('<img class="small" src='+images[4]+'>')
    $('.ul-rotator-vertical').append('<img class="small" src='+images[0]+'>')  
  }



 foto()
 
  function keyBaseCounterCenter(count){
    baseCounterCenter =  count;
    baseCounterCenter =  limits(baseCounterCenter)
    console.log(images[baseCounterCenter])
  } 
  function keyBaseCounterRight(count){
    baseCounterRight  =  count;
    baseCounterRight  = limits(baseCounterRight );
  }

  function keyBaseCounterLeft(count){
    baseCounterLeft =  count;
    baseCounterLeft = limits(baseCounterLeft)
  }

  function keyPocketCounterCenter(count){
    pocketCounterCenter =  count;
    pocketCounterCenter =  limits(pocketCounterCenter)
    console.log(images[pocketCounterCenter])
  } 
  function keyPocketCounterRight(count){
    pocketCounterRight  =  count;
    pocketCounterRight  = limits(pocketCounterRight );
  }

  function keyPocketCounterLeft(count){
    pocketCounterLeft =  count;
    pocketCounterLeft = limits(pocketCounterLeft)
  }


  function limits(current_position){ 
    if (current_position == -1) {
      current_position = (images.length - 1)
    }
    else if (current_position == images.length) {
      current_position = 0
    }
    return current_position;
  }

  document.addEventListener("keydown", function(event){
    if (event.which === 37) {
      // I want to know wich one is my element in the midlle in order to make it bigger and to select his information
      keyBaseCounterCenter(baseCounterCenter + 1)
      // I want to set which image is going to create on the RIGHT
      keyBaseCounterRight(baseCounterRight  + 1)
      $('.ul-rotator-horizontal').append('<img class="small" src='+images[baseCounterRight ]+'>')
      $(".ul-rotator-horizontal img:first").hide(500,  function(){
       $("img:first").remove() 
      })
    }
     else if (event.which === 39){
      // I want to know wich one is my element in the midlle in order to make it bigger and to select his information    
      keyBaseCounterCenter(baseCounterCenter - 1)
      // I want to set which image is going to create on the LEFT
      keyBaseCounterLeft(baseCounterLeft-1)
      $('.ul-rotator-horizontal').prepend(' <img class="small origin" src='+images[baseCounterLeft]+' style=" display: none">')
      $('.ul-rotator-horizontal .origin').show(500)
      // I want to set wich image is deleting on RIGHT
      $(".ul-rotator-horizontal img:last").remove()
    }
      else if (event.which === 38){
      // I want to know wich one is my element in the midlle in order to make it bigger and to select his information
      keyPocketCounterCenter(pocketCounterCenter + 1)
      // I want to set which image is going to create on the RIGHT
      keyPocketCounterRight(pocketCounterRight  + 1)
        $('.ul-rotator-vertical').append('<img class="small" src='+images[pocketCounterRight ]+'>')
        $(".ul-rotator-vertical img:first").hide(500,  function(){
        $(".ul-rotator-vertical img:first").remove() 
      })
    }
      else if (event.which === 40){
      // I want to know wich one is my element in the midlle in order to make it bigger and to select his information    
      keyPocketCounterCenter(pocketCounterCenter - 1)
      // I want to set which image is going to create on the LEFT
      keyPocketCounterLeft(pocketCounterLeft-1)
      $('.ul-rotator-vertical').prepend(' <img class="small origin" src='+images[pocketCounterLeft]+' style=" display: none">')
      $('.ul-rotator-vertical .origin').show(500)
      // I want to set wich image is deleting on RIGHT
      $(".ul-rotator-vertical img:last").remove()

    }
  })
})

//a way to enhance the code would be choosing by source: images[baseCounterRight /Left] and then deleting it, so that we dont have duplicates

//Code used in previous versions that might be useful 
  // function move(target) {
  //   currentHoddie = target;
  //   $('.small').css('transform', 'translate(' + SIZE * currentHoddie + 'px)')
  // }
