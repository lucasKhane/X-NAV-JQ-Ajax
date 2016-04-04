$(document).ready(function() {
    $.getJSON("text.json", function(){
        console.log("Exito");
    }).done(function(data) {
        $("#local").click(function(){
            var items = [];
            $.each(datafunction( key, val ) {
              items.push( "<li id='" + key + "'>" + val + "</li>" );
            });
	          ("#texto").html(items);
          }
	      });
    });
});
