'use strict';

document.addEventListener('load', addValidators());

function addValidators() {
    document.getElementById('name').addEventListener('blur', function(field) {
        let msgBox = {
            box: document.getElementById('name-messagebox'),
            empty: "Name can not be empty.",
            wrong: "Name should consist first name and last name without any numbers and characters."
        };
        validation(field, msgBox, /^[a-z]+\s[a-z]+$/, true);
    });

    document.getElementById('email').addEventListener('blur', function(field) {
        let msgBox = {
            box: document.getElementById('email-messagebox'),
            empty: "Email can not be empty.",
            wrong: "Wrong e-mail. Email should be like \"example@examp.com\"."
        };
        validation(field, msgBox, /^[a-zA-Z0-9][a-zA-Z0-9.]+@[a-zA-Z0-9][a-zA-Z0-9.]+\.[a-z]+$/, false);
    });

    document.getElementById('number').addEventListener('blur', function(field) {
        let msgBox = {
            box: document.getElementById('number-messagebox'),
            empty: "Phone number can not be empty.",
            wrong: "Wrong phone number. Phon number should have nine digit."
        }
        validation(field, msgBox, /^[0-9]{3}[\s-]?[0-9]{3}[\s-]?[0-9]{3}$/, false);
    })

    document.getElementById("city").addEventListener('blur', function(field) {
        let msgBox = {
            box: document.getElementById('city-messagebox'),
            empty: "You have to choose a city.",
            wrong: "City name should not contain any digit or characters."
        }
        validation(field, msgBox, /^[A-Za-z\sąŚśźżŻŹćęółŁń]+$/, false);
    })
}


function validation(fieldEvent, msgBox, pattern, capitalizationCorrection){
    let fieldValue = fieldEvent.target.value;
    if(capitalizationCorrection) {
        fieldValue = fieldValue.trim().toLowerCase();
    }
    if(pattern.test(fieldValue)){
        fieldEvent.target.style.borderColor = "rgb(39,99,62)";
        msgBox.box.style.display = "none";
        if(capitalizationCorrection)
            fieldEvent.target.value = getClearNameString(fieldValue.split(' '));
    }
    else {
        fieldEvent.target.style.borderColor = "rgb(159,0,0)";
        msgBox.box.style.display = "block";
        if(fieldValue === ''){
            msgBox.box.innerText = msgBox.empty;
        }
        else {
            msgBox.box.innerText = msgBox.wrong;
        }
    }
}

function getClearNameString(nameParts) {
    let ret = "";
    ret = ret.concat(nameParts[0][0].toUpperCase(), nameParts[0].substr(1, nameParts[0].length - 1),
          ' ', nameParts[1][0].toUpperCase(), nameParts[1].substr(1, nameParts[1].length - 1));
    return ret;
}