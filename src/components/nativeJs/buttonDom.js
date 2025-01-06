import { LeftSide } from "../LeftSide/leftSide";  

export function nativeDOM(e) {
  
if (e.target.className == '0 submit') {    
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const email = document.querySelector('#email').value;
    const number = document.querySelector('#number').value;
    const address = document.querySelector('#address').value;
    const fullName = document.querySelector('.fullName');
    const emailP = document.querySelector('.emailP');
    const phoneP = document.querySelector('.phoneP');
    const addressP = document.querySelector('.addressP');

    fullName.innerText = firstName + " " + lastName;
    emailP.innerText = email;
    phoneP.innerText = number;
    addressP.innerText = address;
}
if (e.target.className == '1 submit') {    
    const education = document.querySelector('#education').value;
    const cityEducation = document.querySelector('#cityEducation').value;
    const startDateEd = document.querySelector('#startDateEd').value;
    const endDateEd = document.querySelector('#endDateEd').value;
    const descriptionEd = document.querySelector('#descriptionEd').value;

    const educationP = document.querySelector('.educationP');
    const cityEducationP = document.querySelector('.cityEdP');
    const startDateEdP = document.querySelector('.startDateEdP');
    const endDateEdP = document.querySelector('.endDateEdP');
    const descriptionEdP = document.querySelector('.descriptionEdP');

    educationP.innerText = education;
    cityEducationP.innerText = cityEducation;
    startDateEdP.innerText = startDateEd;
    endDateEdP.innerText = endDateEd;
    descriptionEdP.innerText = descriptionEd;
}
if (e.target.className == '2 submit') {    
    const position = document.querySelector('#position').value;
    const employer = document.querySelector('#employer').value;
    const startDateJob = document.querySelector('#startDateJob').value;
    const endDateJob = document.querySelector('#endDateJob').value;
    const responsibilities = document.querySelector('#responsibilities').value;

    const positionP = document.querySelector('.positionP');
    const employerP = document.querySelector('.employerP');
    const startDateJobP = document.querySelector('.startDateJobP');
    const endDateJobP = document.querySelector('.endDateJobP');
    const responsibilitiesP = document.querySelector('.responsibilitiesP');

    positionP.innerText = position;
    employerP.innerText = employer;
    startDateJobP.innerText = startDateJob;
    endDateJobP.innerText = endDateJob;
    responsibilitiesP.innerText = responsibilities;
}
}