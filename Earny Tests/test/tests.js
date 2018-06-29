
const isPalindrome = require('./../Palindrome/palindrome');
const limitedAlert = require('./../LimitedAlert/alert');
const findUnique = require('./../FindUniqueArrayOfElements/unique');
const EventEmitter = require('./../EventEmitter/eventEmitter');

const assert = require('assert');

describe('Palindrome', () => {
  it('should return error message if no input was given', () => {
    const errMessage = 'Cannot find palindrome if the input is missing.'
    assert.equal(isPalindrome(), errMessage);
  });

  it('should return error message if input was empty string', () => {
    const errMessage = 'Cannot find palindrome if the input is missing.'
    assert.equal(isPalindrome(''), errMessage);
  });

  it('should return error message if the input was not a string', () => {
    const errMessage = 'Cannot find palindrome if the input is missing.'
    assert.equal(isPalindrome(1221), errMessage);
  });

  it('should return true if the string is palindrome', () => {
    assert.equal(isPalindrome('1221'), true);
  });

  it('should return false if the string is not a palindrome', () => {
    assert.equal(isPalindrome('ababab'), false);
  });
});

describe('LimitedAlert', () => {
  const message = `something went wrong`;

  it('should not alert 4th time and return false', () => {
    assert.equal(limitedAlert(message), true);
    assert.equal(limitedAlert(message), true);
    assert.equal(limitedAlert(message), true);
    assert.equal(limitedAlert(message), false);
  })
});

describe('Find unique array of elements', () => {
  it('should return false if no input was provided', () => {
    assert.equal(findUnique(), false);
  });

  it('should return false if empty array input was provided', () => {
    assert.equal(findUnique(), false);
  });

  it('should return false if empty string input was provided', () => {
    assert.equal(findUnique(''), false);
  });

  it('should return false if boolean input was provided', () => {
    assert.equal(findUnique(true), false);
  });

  it('should return an array', () => {
    const arr = [1,3,4,5,6,6,3,2,1,2,3];
    assert(Array.isArray(findUnique(arr)));
  });

  it('should return an array with correct values', () => {
    const arr = [1,3,4,5,6,6,3,2,1,2,3];
    assert.deepStrictEqual(findUnique(arr), [1,3,4,5,6,2]);
  });

  it('should return input array if length of input array is 1', () => {
    const arr = [1];
    assert.deepStrictEqual(findUnique(arr), [1]);
  });
});

describe('Event emitter', () => {
  it('should register an event and return reference to the EventEmitter', () => {
    const event = new EventEmitter();
    
    assert.equal(event.on('firstEvent', (input) => {
      console.log('This is firstEvent: ', input);
    }), event);
  });

  it('should return true when event listener exist',() => {
    const event = new EventEmitter();
    
    event.on('firstEvent', (input) => {
      console.log('On firstEvent: ', input);
    });
    
    assert.equal(event.emit('firstEvent', 'hi firstEvent'), true);
  });

  it('should return false when event listener exist',() => {
    const event = new EventEmitter();
    assert.equal(event.emit('firstEvent', 'hi firstEvent'), false);
  });

  it('should call multiple listeners', () => {
    const event = new EventEmitter();
    
    event.on('sayHello', (input) => {
      console.log('On firstEvent: ', input);
    });
    
    event.on('sayHello', (input) => {
      console.log('On firstEvent: ', input);
    });
    
    assert.equal(event.emit('sayHello', 'hello'), true);
  });

  it('should call listener with multiple parameters', () => {
    const event = new EventEmitter();

    event.on('sayHello', (message, message2) => {
      console.log('On firstEvent: ', message, message2);
    });

    assert.equal(event.emit('sayHello', 'hello', 'and good morning', 'this will do nothing'), true);
  });
});
