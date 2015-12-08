/**
 * Created by Solovyov on 07.12.2015.
 */
var watchButton = document.body.querySelector('.video-player__watch');

var rulesCheck = document.body.querySelector('.footer__rules-checkbox');

rulesCheck.addEventListener('click', enableButton);

function enableButton() {
        watchButton.disabled = !rulesCheck.checked;
}