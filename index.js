'use strict';

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    
    if (responseJson.message == "Breed not found") {
        alert('Breed Not Found');
      } else {
    $('.dogresults').append(`<img src="${responseJson.message}">`);
    $('.dogresults').removeClass('hidden');
      }
    } 

  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      let getDog = $('input[name="getDog"]').val();
      getDogImage(getDog);
    });
  }

  $(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
