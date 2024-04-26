# Frontend Pomodoro- A very simple Pomodoro.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)  
- [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This is one of many projects that |I have been working on Frontend Web Coding & Developement. 
Used bootstrap framework, JQuery and Javascript! 

### Users should be able to:

- Add
- Take-away
- Mult...
- Devide
- 
## Process
 1. Looked at the entire project first, thought how to go about it
 2. Decided to use Visual Studio Code

### Built with
- Semantic HTML5 markup
- Mobile-first workflow
- 
### What I learned

```js
 function breakDecrement() {
     if(startandStopTime) {
         if(breakDecrementAndIncrement > 1) {
             $("#break-length").text(breakDecrementAndIncrement -= 1);
         }
     }
 }
 function breakIncrement() {
     if(startandStopTime) {
         if(breakDecrementAndIncrement < 60 ) {
             $("#break-length").text(breakDecrementAndIncrement += 1);
         }
     }
    
 }
 function sessionDecrement() {
     if(startandStopTime) {
         getSeconds = "00";
         if(sessionDecremenetAndIncrement > 1) {
             sessionDecremenetAndIncrement = sessionDecremenetAndIncrement - 1;
             getMinutes =  sessionDecremenetAndIncrement;
             $("#session-length").text(sessionDecremenetAndIncrement);
             if(getMinutes > 9) {
                 $("#time-left").text(hourFormat(getMinutes, getSeconds));
             }
             else {
                 getMinutes = "0" + getMinutes;
                 $("#time-left").text(hourFormat(getMinutes, getSeconds));
             }
            
         } 
     }      
 }
```

### Useful resources

- [Developer Mozilla](https://developer.mozilla.org/en-US/) - This helped me to understand how flexbox works and the grid system too. True source of Frontend information indeed. 
- [CSS Tricks](https://css-tricks.com) - This is an amazing article which helped me finally understand css. I'd recommend it to anyone still learning frontend.
- [w3schools](https://www.w3schools.com) - I think that every one heard and knows about w3schools! I find it very helpful when come to Semantic HTML5. 
[stackoverflow Community](https://stackoverflow.com) - Here is whre the biggest tech community lives &#65; &#66; &#67;


# Testing Checklist

- HTML Validation

- I used the W3C HTML Validator tool to validate my HTML code.


### Screenshot

![](static/images/e-comerce.jpg)

### Links

- [gitHub]() - Project 
- [Live Page]() - Live gitHub Page

