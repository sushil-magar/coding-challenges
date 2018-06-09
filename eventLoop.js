(function setName(){
  setTimeout(() => {
    console.log('This is ran after 5 seconds.');
  }, 5000);
})();

(function getName(){
  console.log('This will be ran immediately.');
})();