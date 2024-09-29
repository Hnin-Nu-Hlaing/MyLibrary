var requestUrl = 'https://api.github.com/users/Hnin-Nu-Hlaing/repos?per_page=5';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].url);
      console.log(data[i].owner.login);
    }
  });
