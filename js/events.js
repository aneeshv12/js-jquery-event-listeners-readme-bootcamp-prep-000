//define functions here

$(document).ready(function(){
  getIt();
  frameIt();
// call functions here

});

function getIt(){
  $('p').on('click',function(key){
    alert("Hey!")
  })
}

function frameIt(){
  $('img').on('load',function(){
    $('img').addClass('tasty')
  })
}