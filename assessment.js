/*
Returns assessment result when name is input
@param {string} userName User's Name
@return {string} result Assessment results
*/

'use strict';

const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');


assessmentButton.onclick = () => {

    const userName = userNameInput.value;
    if (userName.length === 0){
        return;
    }

    while (resultDivided.firstChild){
        resultDivided.removeChild(resultDivided.firstChild);
    }

    const header = document.createElement('h3');
    header.innerText = 'Assessment Results';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

};

const answers = [
    '{userName}, your strength is persistence.',
    '{userName}, your strength is kindness.',
    '{userName}, your strength is leadership.',
    '{userName}, your strength is knowledge.',
    '{userName}, your strength is uniqueness.',
    '{userName}, your strength is creativity.',
    '{userName}, your strength is decision-making skills.',
    '{userName}, your strength is curiosity.',
    '{userName}, your strength is passion.',
    '{userName}, your strength is love.',
    '{userName}, your strength is sincerity.',
    ];

function assessment(userName) {
    //Create a code by counting the sum of all characters//
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++) {
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);   
    }

    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    result = result.replaceAll('{userName}',userName)

    return result;

}
