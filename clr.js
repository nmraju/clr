const btn=document.querySelector("button");
const body=document.querySelector('body');
const color=['black','orange','miganta','purple','yellow','red','blue'];
body.style.backgroundColor='pink';
document.addEventListener('click',function(){
      const colorIndex=parseInt(Math.random()*color.length);
      body.style.backgroundColor=color[colorIndex];


});