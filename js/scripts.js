var buttonClass = document.getElementsByClassName('button');
  console.log(buttonClass);

var i;

for ( i = 0 ; i < buttonClass.length ; i++) {
  console.log('The value of buttonClass is now: ' + i);
  alert(buttonClass.innerText);
}