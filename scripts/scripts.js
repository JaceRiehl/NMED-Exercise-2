$joke = $(".joke");
$body = $("body")
let jokes = ["I tried starting a hot air balloon business.", " But it never took off.", "Boss, there are 10 types of employees:", "Those who understand binary, and those who don’t. ", "How does NASA organize a party?", "They planet."];
index = 1


$joke.on("click", function() {
	$joke.text(jokes[index % jokes.length]);
	index = index + 1;
	$body.css("background-color","rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + 255 +")");
});