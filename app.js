$(document).ready(function() {
  $(".input_field").keyup(function(e) {
  	if ($(".input_field").val().trim().length === 0 ) {
  	  return;
  	}

  	var value = $(".input_field").val();

    $(function() {
      var json_url = 'https://en.wikipedia.org/w/api.php?formatversion=2&format=json&action=query&prop=info&inprop=url&generator=search&gsrsearch=' + value + '&callback=?';
      $.getJSON(json_url, function(json) {
        $("#border_size_before").html("");
        for (var i = 0; i < json.query.pages.length; i++) {
          var page_title = json.query.pages[i].title;
          var page_url = json.query.pages[i].fullurl;
          $("#border_size_before").append("<div id='border_size'>" + '<a href="' + page_url + '" target="_blank">' + page_title + '</a>' + '</div>');
	}

      });
    });
  });

  $(".input_field").keydown(function() {
    $(".container").css("margin-top", "-75px");
  });
    
  $("h1").click(function() {
    $(".container").css("margin-top", "25px");
    $("#border_size_before").html("");
    $("#border_size").html("");
    $(".input_field").val("");
  });

});
