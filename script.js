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
    let changeOnProjects = window.innerHeight / 2;
    let toggleProjectChanged = false;
    let toggleLogoChanged = false;
    const buttonAbout = document.querySelector("#button-about");
    const buttonProjects = document.querySelector("#button-projects");
    const buttonContact = document.querySelector("#button-contact");
    let namePosition = document.querySelector("#about h1").getBoundingClientRect().top;
    namePosition = namePosition + (document.querySelector("#about h1").offsetHeight / 2);
    const logoV = document.querySelector("#logo .red");
    const logoG = document.querySelector("#logo");


    ////////////////////////////////////////////
    // Styling
    ///////////////////////////////////////////

    // Contact button styling
    contactButton.style.border = "solid 3px #FFDB4D";

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

    // Button Start/Stop on mousedown/mouseup
    contactButton.addEventListener('mousedown', e => {
        contactButton.style.background = "#FFCC00";
        contactButton.style.border = "solid 3px #FFCC00";
    });

    contactButton.addEventListener('mouseup', e => {
        contactButton.style.background = "#FFD633";
        contactButton.style.border = "solid 3px #FFD633";
        document.getElementById('contact').style.transition = "all 0.4s ease-in-out";
        document.getElementById('contact').scrollIntoView({behavior: "smooth"});         
    });


    // Changing on scroll
    console.log(namePosition);

    window.onscroll = function() {
        let top = window.scrollY;
        console.log(top);
        if ((top > changeOnProjects) && !toggleProjectChanged) {
            // Changing contact button on scroll (to envelope)
            contactButton.style.transition = "all 0.2s ease-in-out";

            // YOU DIDN'T FINISH HERE. YOU NEED TO CHANGE THE WORD cONTACT LETTER BY LETTER 
            // for(let i = 0; i < )
            // setTimeout(function(){
            //     contactButton.style.color = "red";  
            // }, 5000);
            contactButton.innerHTML = "";

            contactButton.classList.toggle("far");
            contactButton.classList.toggle("fa-envelope");
            contactButton.style.fontSize = "1.6em"; 
            toggleProjectChanged = true;

            contactButton.style.width = "57px";

            // Changing the red border in header
            buttonProjects.style.transition = "all 0.2s ease-in-out";
            buttonProjects.style.borderBottom = "3px solid #ee0000";
            buttonAbout.style.transition = "all 0.2s ease-in-out";
            buttonAbout.style.borderBottom = "3px solid #ffffff";


        } else if ((top < changeOnProjects) && toggleProjectChanged) {
            // Changing contact button on scroll (to 'Contact')
            contactButton.style.transition = "all 0.2s ease-in-out";
            contactButton.style.width = "150px";


            // contactButton.style.transition = "none";
            contactButton.style.fontSize = "1.2em"; 
            contactButton.innerHTML = "Contact";
            contactButton.classList.toggle("far");
            contactButton.classList.toggle("fa-envelope");
            toggleProjectChanged = false;

            // Changing the red border in header
            buttonAbout.style.transition = "all 0.2s ease-in-out";
            buttonAbout.style.borderBottom = "3px solid #ee0000";
            buttonProjects.style.transition = "all 0.2s ease-in-out";
            buttonProjects.style.borderBottom = "3px solid #ffffff";
        }


        // Change logo appearance after the name is reached
        if ((top > namePosition) && !toggleLogoChanged) {
            logoV.style.transition = "all 0.2s ease-in-out";
            logoV.style.color = "#ee0000";
            logoG.style.transition = "all 0.2s ease-in-out";
            logoG.style.color = "#222222";
            toggleLogoChanged = true;
        } else if ((top < namePosition) && toggleLogoChanged) {
            logoV.style.color = "#fff";
            logoG.style.color = "#fff";
            toggleLogoChanged = false;
        }

    }

    

    ////////////////////////////////////////////
    // Bug fixes
    ///////////////////////////////////////////
    



}