// Fetches a random quote from an API and logs it to console
fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => console.log(data.content + ' — ' + data.author))
  .catch(error => console.error('Error fetching quote:', error));