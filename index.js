'use strict';

function getDogImage() {
    const multipleDogImages = "https://dog.ceo/api/breeds/image/random/";
    let howManyDogs = $('#dog-number').val();
    fetch(multipleDogImages + howManyDogs)
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
        for (let i = 0; i < responseJson.message.length; i++) {
            const eachDogImage = $(`
            <img src="${responseJson.message[i]}" alt="random dog image" class="random-dog-images">
            `);
            $('.results').append(eachDogImage);
        }
        $('.results').removeClass('hidden');
}


function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        $('.random-dog-images').remove();
        getDogImage();
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});