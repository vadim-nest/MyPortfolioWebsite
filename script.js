// Port Number: http://127.0.0.1:5500/

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
    let toggleContactChanged = false;
    const buttonAbout = document.querySelector("#button-about");
    const buttonProjects = document.querySelector("#button-projects");
    const buttonContact = document.querySelector("#button-contact");
    let namePosition = elementLocation(document.querySelector("#about h1")).top / 2;
    const logoV = document.querySelector("#logo .red");
    const logoG = document.querySelector("#logo");
    const innerText = contactButton.innerHTML;
    let innerTextLength = innerText.length;
    let contactPageStart = elementLocation(document.querySelector("#contact")).top;
    let contactButtonRight = (window.innerWidth - document.querySelector("#contact-float").offsetLeft - document.querySelector("#contact-float").offsetWidth);
    let buttonHidden = false;
    let vh = window.innerHeight * 0.01;
    let changeOnContact = contactPageStart - (50 * vh);
    




    ////////////////////////////////////////////
    // Styling
    ///////////////////////////////////////////

    // // We listen to the resize event
    // window.addEventListener('resize', () => {
    //     // We execute the same script as before
    //     let vh = window.innerHeight * 0.01;
    //     // document.documentElement.style.setProperty('--vh', `${vh}px`);
    // });

    let projectsSectionLocation = elementLocation(document.querySelector("#projects")).top / 2;
    changeBorderHeader();


    // Contact button styling
    contactButton.style.border = "solid 3px #FFDB4D";

    contactButton.onmouseover = function() { 
        contactButton.style.transition = "all 0.1s ease-in-out";
        contactButton.style.background = "#FFD633"
        contactButton.style.border = "solid 3px #FFD633"
        contactButton.style.boxShadow = "0px 3px 5px rgba(0, 0, 0, 0.1)";
    }
    contactButton.onmouseout = function() { 
        contactButton.style.transition = "all 0.4s ease-in-out";
        contactButton.style.background = "#FFDB4D" 
        contactButton.style.border = "solid 3px #FFDB4D"
        contactButton.style.boxShadow = "0px 4px 7px rgba(0, 0, 0, 0.1)";
    }

    // Contact button on mousedown/mouseup
    contactButton.addEventListener('mousedown', e => {
        contactButton.style.background = "#FFCC00";
        contactButton.style.border = "solid 3px #FFCC00";
        contactButton.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0.1)";
    });

    contactButton.addEventListener('mouseup', e => {
        contactButton.style.background = "#FFD633";
        contactButton.style.border = "solid 3px #FFD633";
        contactButton.style.boxShadow = "0px 4px 7px rgba(0, 0, 0, 0.1)";
        document.querySelector("#contact").style.transition = "all 0.4s ease-in-out";
        document.querySelector("#contact").scrollIntoView({behavior: "smooth"});         
    });


    // Buttons in header styling
    buttonAbout.onmouseover = function() {
        buttonAbout.style.transition = "all 0.1s ease-in-out";
        buttonAbout.style.color = "#ee0000";
        buttonAbout.style.cursor = "pointer";
    }
    buttonAbout.onmouseout = function() {
        buttonAbout.style.transition = "all 0.4s ease-in-out";
        buttonAbout.style.color = "#222222";
    }
    buttonAbout.addEventListener('mouseup', e => {
        document.querySelector("#about").style.transition = "all 0.4s ease-in-out";
        document.querySelector("#about").scrollIntoView({behavior: "smooth"});         
    });


    buttonProjects.onmouseover = function() {
        buttonProjects.style.transition = "all 0.1s ease-in-out";
        buttonProjects.style.color = "#ee0000";
        buttonProjects.style.cursor = "pointer";
    }
    buttonProjects.onmouseout = function() {
        buttonProjects.style.transition = "all 0.4s ease-in-out";
        buttonProjects.style.color = "#222222";
    }
    buttonProjects.addEventListener('mouseup', e => {
        document.querySelector("#projects").style.transition = "all 0.4s ease-in-out";
        document.querySelector("#projects").scrollIntoView({behavior: "smooth"});         
    });


    buttonContact.onmouseover = function() {
        buttonContact.style.transition = "all 0.1s ease-in-out";
        buttonContact.style.color = "#ee0000";
        buttonContact.style.cursor = "pointer";
    }
    buttonContact.onmouseout = function() {
        buttonContact.style.transition = "all 0.4s ease-in-out";
        buttonContact.style.color = "#222222";
    }
    buttonContact.addEventListener('mouseup', e => {
        document.querySelector("#contact").style.transition = "all 0.4s ease-in-out";
        document.querySelector("#contact").scrollIntoView({behavior: "smooth"});         
    });


    window.onscroll = function() {
        // Changing floating button on scroll
        let top = window.scrollY;
        if ((top > changeOnProjects) && !toggleProjectChanged) {
            // Changing contact button on scroll (to envelope)
            contactButton.style.transition = "all 0.2s ease-in-out";

            // Loop for removing letters one by one with a slight delay
            for(let i = innerTextLength; i > 0; --i) {
                setTimeout(() => {
                    contactButton.innerHTML = contactButton.innerHTML.substring(0, contactButton.innerHTML.length - 1);
                }, i * 20);
            }

            contactButton.classList.toggle("far");
            contactButton.classList.toggle("fa-envelope");
            contactButton.style.fontSize = "1.6em"; 
            toggleProjectChanged = true;

            contactButton.style.width = "57px";

        } else if ((top < changeOnProjects) && toggleProjectChanged) {
            // Changing contact button on scroll (to 'Contact')
            contactButton.style.transition = "none";
            contactButton.style.fontSize = "1.2em";
            contactButton.style.transition = "all 0.2s ease-in-out";
            contactButton.style.width = "150px";

            // Loop for adding letters one by one with a slight delay
            for(let i = 0; i < innerTextLength; ++i) {
                setTimeout(() => {
                    contactButton.innerHTML = contactButton.innerHTML + innerText.charAt(i);
                }, i * 40);
            }
            contactButton.classList.toggle("far");
            contactButton.classList.toggle("fa-envelope");
            toggleProjectChanged = false;

        }

        if ((top > namePosition) && !toggleLogoChanged) {
            setTimeout(() => {
                logoV.style.transition = "all 0.2s ease-in-out";
                logoV.style.color = "#ee0000";
            }, 50);
            logoG.style.transition = "all 0.2s ease-in-out";
            logoG.style.color = "#222222";
            toggleLogoChanged = true;
        } else if ((top < namePosition) && toggleLogoChanged) {
            logoV.style.color = "#fff";
            setTimeout(() => {
                logoG.style.color = "#fff";
            }, 50);
            toggleLogoChanged = false;
        }



        // Hiding Contact Floating Button when reach Contact Section
        let floatingButtonLocation =  elementLocation(document.querySelector("#contact-float")).top;
        document.querySelector("#contact-float").style.transition = "all 0.2s ease-in-out";
        if (floatingButtonLocation >= contactPageStart && !buttonHidden) {
            buttonHidden = true;
            for(let i = contactButtonRight; i < window.innerWidth; ++i) {
                setTimeout(() => {
                    contactButton.style.right = (contactButtonRight - i).toString() + "px";
                }, i * 0.3);
            }
        } else if (floatingButtonLocation <= contactPageStart && buttonHidden) {
            buttonHidden = false;
            for(let i = window.innerWidth; i > (contactButtonRight); --i) {
                setTimeout(() => {
                    contactButton.style.right = (window.innerWidth - i + 90).toString() + "px";
                }, i * 0.4);
            }
        }

        // Changing red border in header on scroll
        buttonAbout.style.transition = "all 0.4s ease-in-out";
        buttonProjects.style.transition = "all 0.4s ease-in-out";
        buttonContact.style.transition = "all 0.4s ease-in-out";
        changeBorderHeader();
    }

    


    // Function for getting an element position relative to the page (document)
    function elementLocation(el) {
        let rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    // Function for changing the red line in header
    function changeBorderHeader() {
        if (window.scrollY < projectsSectionLocation && window.scrollY < changeOnContact) {
            buttonAbout.style.borderBottom = "3px solid #ee0000";
            buttonProjects.style.borderBottom = "3px solid #fff";
            buttonContact.style.borderBottom = "3px solid #fff";
        } else if (window.scrollY >= projectsSectionLocation && window.scrollY < changeOnContact) {
            buttonAbout.style.borderBottom = "3px solid #fff";
            buttonProjects.style.borderBottom = "3px solid #ee0000";
            buttonContact.style.borderBottom = "3px solid #fff";
        } else if (window.scrollY > projectsSectionLocation && window.scrollY > changeOnContact) {
            buttonAbout.style.borderBottom = "3px solid #fff";
            buttonProjects.style.borderBottom = "3px solid #fff";
            buttonContact.style.borderBottom = "3px solid #ee0000";
        }
    }


    
    // example use
    // var div = document.querySelector('div');
    // var divOffset = offset(div);
    // console.log(divOffset.left, divOffset.top);

    

    ////////////////////////////////////////////
    // Bug fixes
    ///////////////////////////////////////////
    



}