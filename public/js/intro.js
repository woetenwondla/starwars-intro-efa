import { warpAnimation, setIncreaseSpeedTrue, setIncreaseSpeedFalse } from './warp.js';
import * as mapUtils from './map.js';

let width = window.innerWidth;
let height = window.innerHeight;

const intro = document.getElementsByClassName('intro')[0];
const story = document.getElementsByClassName('story')[0];
const earthSection = document.getElementById('earth');
const earthMap = document.getElementById('map');
const paragraphs = document.getElementsByClassName('paragraphs')[0];
const sound = document.getElementById('sound');

intro.style.fontSize = `${width / 30}px`;
story.style.fontSize = `${width / 20}px`;
paragraphs.style.height = `${height}px`;

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    intro.style.fontSize = `${width / 30}px`;
    story.style.fontSize = `${width / 20}px`;
    paragraphs.style.height = `${height}px`;
});

/* Stars screen */

let canvas = document.getElementById('stars');

canvas.width = width;
canvas.height = height;

function startAnimation() {
    sound.play();

    intro.className = 'intro text-intro anime-intro';
    story.className = 'story text-story anime-story';
    earthSection.className = 'anime-earth-show';
    earthMap.className = 'anime-earth-expand';

    makeWarpJump();
    endWarpJump();

    zoomToAlpbach();
    setStreetViewAndHideTextSections();
}

function makeWarpJump() {
    setTimeout(() => {
        setIncreaseSpeedTrue();
    }, 50000);
}

function endWarpJump() {
    setTimeout(() => {
        setIncreaseSpeedFalse();
    }, 54000);
}

function zoomToAlpbach() {
    setTimeout(() => {
        mapUtils.smoothZoom(mapUtils.getMap(), 20, mapUtils.getMap().getZoom());
    }, 55000);
}

function setStreetViewAndHideTextSections() {
    setTimeout(() => {
        const panorama = mapUtils.createStreetView();
        mapUtils.getMap().setStreetView(panorama);
        paragraphs.className = 'hidden';
        intro.className = 'hidden';
    }, 62000);
}

window.initMap = mapUtils.initMap;

startAnimation();
warpAnimation();
