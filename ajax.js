$(document).ready(function() {
    $.ajax({
      type: "GET",
	    url: "text.txt",
	    cache: false
    }).done(function( text ) {
        $("#local").click(function(){
	         $("#texto").html(text)
	     });
    });
});
