var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "a8a6026d63e843659beeef6757c77320"
});
$.ajax({
  url: url,
  method: 'GET',
}).then(function(){

    
})

