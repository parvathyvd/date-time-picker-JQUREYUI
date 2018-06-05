
    $( function() {
        $( "#start-date" ).datepicker();
        $( "#end-date" ).datepicker();

        $("#submit").click(function(){

            var starDate =  $("#start-date").val();
            var endDate =  $("#start-date").val();
            var location = $("#dropdown").val();

            location = location.toUpperCase();

            console.log(starDate);
            console.log(endDate);

            console.log(location);

            $("#result").html("<p>You are going on "+starDate+" and coming back on "+endDate+ " and going to "+location+"</p>");
        
        });
    

      








      } );
