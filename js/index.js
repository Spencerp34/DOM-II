// Your code goes here
const homeNav = document.querySelector('.nav-link:nth-of-type(1)');
const aboutNav = homeNav.nextElementSibling;
const blogNav = aboutNav.nextElementSibling;
const contactNav = blogNav.nextElementSibling;

const heading = document.querySelector('.main-navigation');

heading.addEventListener('mouseover', function(event) {
    heading.style.backgroundColor = ('red');
    setTimeout(function() {
        heading.style.backgroundColor = "";
      }, 500);
}, false);

const intro = document.querySelector('.intro');

intro.addEventListener('mouseover', function(event) {
   intro.style.backgroundColor = ('orange');
   intro.style.borderRadius = ('5%');
   setTimeout(function() {
    intro.style.backgroundColor = "";
  }, 500);
}, false);

const letsGo = document.querySelector('.text-content');

letsGo.addEventListener('mouseover', function(event) {
   letsGo.style.backgroundColor = ('yellow');
   letsGo.style.borderRadius = ('5%');
   setTimeout(function() {
    letsGo.style.backgroundColor = "";
  }, 500);
}, false);

const adventureAwaits = document.querySelector('.text-content:nth-of-type(2)');

adventureAwaits.addEventListener('mouseover', function(event) {
    adventureAwaits.style.backgroundColor = ('green');
    adventureAwaits.style.borderRadius = ('5%');
    setTimeout(function() {
        adventureAwaits.style.backgroundColor = "";
      }, 500);
}, false);

const pickDestination = document.querySelector('.content-destination')

pickDestination.addEventListener('mouseover', function(event) {
    pickDestination.style.backgroundColor = ('teal');
    pickDestination.style.borderRadius = ('5%');
    setTimeout(function() {
        pickDestination.style.backgroundColor = "";
      }, 500);
}, false);

const funSun = document.querySelector('.destination:nth-of-type(1)')
const mountainExcursion = funSun.nextElementSibling;
const islandGetAway = mountainExcursion.nextElementSibling;

funSun.addEventListener('mouseover', function(event) {
    funSun.style.backgroundColor = ('skyblue');
    funSun.style.borderRadius = ('5%');
    setTimeout(function() {
        funSun.style.backgroundColor = "";
      }, 1000);
}, false);

mountainExcursion.addEventListener('mouseover', function(event) {
    mountainExcursion.style.backgroundColor = ('violet');
    mountainExcursion.style.borderRadius = ('5%');
    setTimeout(function() {
        mountainExcursion.style.backgroundColor = "";
      }, 1000);
}, false);

islandGetAway.addEventListener('mouseover', function(event) {
    islandGetAway.style.backgroundColor = ('pink');
    islandGetAway.style.borderRadius = ('5%');
    setTimeout(function() {
        islandGetAway.style.backgroundColor = "";
      }, 1000);
}, false);

Array.from(document.links).forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // this stopped the hyperlink behavior.
    })
})