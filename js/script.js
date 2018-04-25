$(document).ready(function() {

var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";


function getQuote() {
    $.getJSON(quoteUrl, createTweet);
};

getQuote();
$('.trigger').click(function(){
    getQuote();
});

function createTweet (input) {
    var data = input[0];

    var quoteText = $(data.content).text().trim();
    var quoteAutor = data.title;

    if(!quoteAutor.length) {
        quoteAutor = "Unknow author";
    };
};

var tweetText = "Quote of the day: " + quoteText + "Author: " + quoteAutor;

if (tweetText.length > 140) {
    getQuote();
} else {
    var tweet = tweetLink + encodeURIComponent(tweetText);
    $('.quote').text(quoteText);
    $('.author').text('Author: ' + quoteAutor);
    $('.tweet').atrr('href', tweet);
};





});