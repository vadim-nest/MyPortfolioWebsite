// Colours:
//     white:           #FFFFFF
//     black:           #222222
//     yellow:          #FFCC02
//     red:             #EE0000
//     grey for laps:   #A3A3A3
// 

//     colors for buttons:
//     yellow button :          #FFDB4D
//     yellow button on hover : #FFD633
//     yellow button on press : #FFCC00

window.onload = function () {
    
    const contactButton = document.querySelector("#contact-float");

    ////////////////////////////////////////////
    // Styling
    ///////////////////////////////////////////

    // Contact button styling
    contactButton.onmouseover = function() { 
        contactButton.style.transition = "all 0.1s ease-in-out";
        contactButton.style.background = "#FFD633"
        contactButton.style.border = "solid 3px #FFD633"
    }
    contactButton.onmouseout = function() { 
        contactButton.style.transition = "all 0.4s ease-in-out";
        contactButton.style.background = "#FFDB4D" 
        contactButton.style.border = "solid 3px #FFDB4D"
    }

    ////////////////////////////////////////////
    // Bug fixes
    ///////////////////////////////////////////
    contactButton.style.border = "solid 3px #FFDB4D";



}