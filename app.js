var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "1a1162ef30764ed99b6768fc1e61ce02"
});

var searchTerm = ""



$.ajax({
  url: queryURL,
  method: 'GET',
}).then(function(response) {
  console.log(result);
})
