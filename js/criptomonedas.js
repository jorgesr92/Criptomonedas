
function buscarFotos(){

$.ajax({
    url:"https://coinmarketcap.com/api/",
    type: "GET",
    async: true,

    data: "rank="+i+"&format=json&jsoncallback=?",
    dataType: "json",
    success: function (result){
        $.each(result.items,function(i,item){
            
        })
    },
    error: function(jqXHR , textStatus , errorThrown){
        alert(JSON.parse(jqXHR.responseText));
    }
});
return false;
}



(function() {
    var criptomonedas = "https://coinmarketcap.com/api/?jsoncallback=?";
    $.getJSON( criptomonedas, {
      tags: "mount rainier",
      tagmode: "any",
      format: "json"
    })
      .done(function( data ) {
        $.each( data.items, function( i, item ) {
          $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
          if ( i === 3 ) {
            return false;
          }
        });
      });
  })();