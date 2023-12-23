function showAnswer(num){
  const toggleID = "#toggle-" + num;
  const answerID = "#answer-" + num;

  const answerCont = document.querySelector(answerID);
  const answerShown = answerCont.querySelector('p');

  if(answerShown){
    answerCont.innerHTML = '';
    document.querySelector(toggleID).setAttribute('src', './assets/images/icon-plus.svg');
  }else{
    const answer = answers[num-1];
    const newP = document.createElement('p');
    newP.textContent = answer;

    //change icon to active state 
    document.querySelector(toggleID).setAttribute('src', './assets/images/icon-minus.svg');

    //reveal answer
    document.querySelector(answerID).appendChild(newP);
  }
}

const answers = ["Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
" Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."]
