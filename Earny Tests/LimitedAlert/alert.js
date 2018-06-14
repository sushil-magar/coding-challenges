/*
Create a function limitedAlert() which shows an alert when it's called, but only up to 3 calls 
// examples
// first
limitedAlert('something went wrong') // show alert
limitedAlert('something went wrong') // show alert
limitedAlert('something went wrong') // show alert
limitedAlert('something went wrong') // NO MORE ALERTS

function limitedAlert(message)
{

}
Can you do it without exposing a global variable? Why would that be important?
Create a unit suite for the above routine. 
*/

module.exports = (() => {
  let counter = 3;

  return (message)  => {
    if (counter > 0) {
      console.log(message);
      counter--;
      return true;
    }

    return false;
  }
})();










