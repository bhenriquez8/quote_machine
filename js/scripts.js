$(document).ready(function() {
    $("#getMessage").on("click", function(e) {
        e.preventDefault();
        $.getJSON("https://talaikis.com/api/quotes/random/", function(json) {
            var array = [];
            Object.keys(json).forEach(function(val) {
                array.push(json[val]);
            });

            console.log(array.length);
            for (var i=0; i<array.length; ++i) {
                if (typeof array[i] == "string") {
                    if (array[i] == "author")
                        $("#quote-author").text(array[i]);
                }
            }
        });
	});
});
