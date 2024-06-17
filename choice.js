const question1= document.querySelector(".q1")
const question2 = document.querySelector(".q2")
const quest1 =[
"Have ugly face with musculer body",
"Be smartest man alive",
"Being richest man but selfish",
"eat your faverate food daily",
"have the ability to see 10 minutes into the future  ",
"have telekinesis (the ability to move things with your mind) ",
"find true love today ",
"wear the same socks for a month",
"Be the precident of country",
]

const quest2 =[
"musculer body with ugly face",
"Be most handsome man in the world",
"Being poor with good heart",
"never have to eat your faverate food",
"150 years into the future",
"have telekinesis (the ability to move things with your mind) ",
"win the lottery next year",
"same underwear for a week",
"Be the CEO pf google",]

let index=0;

question1.addEventListener('click',function(){
    index = (index+1)%quest1.length;
    question2.innerHTML=quest2[index];
    question1.innerHTML=quest1[index];
});
question2.addEventListener('click',function(){
    index = (index+1)%quest1.length;
    question2.innerHTML=quest2[index];
    question1.innerHTML=quest1[index];
});

