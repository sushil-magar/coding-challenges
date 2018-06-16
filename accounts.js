
/*
For accounts = [10, 100, 20, 50, 30] and
requests = ["withdraw 2 10", "transfer 5 1 20", "deposit 5 20", "transfer 3 4 15"],
the output should be bankRequests(accounts, requests) = [30, 90, 5, 65, 30].

Your bot should also be able to process invalid requests. There are two types of invalid requests:
invalid account number in the requests;
deposit / withdrawal of a larger amount of money than is currently available.

Here are the states of accounts after each request:

"withdraw 2 10": [10, 90, 20, 50, 30];
"transfer 5 1 20": [30, 90, 20, 50, 10];
"deposit 5 20": [30, 90, 20, 50, 30];
"transfer 3 4 15": [30, 90, 5, 65, 30], which is the answer.
For accounts = [20, 1000, 500, 40, 90] and
requests = ["deposit 3 400", "transfer 1 2 30", "withdraw 4 50"],
the output should be bankRequests(accounts, requests) = [-2].

After the first request, accounts becomes equal to [20, 1000, 900, 40, 90], 
but the second one turns it into [-10, 1030, 900, 40, 90], which is invalid. 
Thus, the second request is invalid, and the answer is [-2]. 
Note that the last request is also invalid, but it shouldn't be included in the answer.
*/

function bankRequests(accounts, requests) {
  const parseAction = (str) => str.match(/[a-z]/g).join('');
  const parseNumbers = (str) => str.match(/\d+/g);
  
  for (let i = 0; i < requests.length; i++) {
      const action = parseAction(requests[i]);
      const numbers = parseNumbers(requests[i]);


      if (action === 'withdraw') {
        const index = numbers[0] - 1;
        accounts[index] = accounts[index] - numbers[1];
      } else if (action === 'deposit') {
        const index = numbers[0] - 1;
        accounts[index] = account[index] + numbers[1];        
      } else if (action === 'transfer') {
        const fromIndex = numbers[0] - 1;
        const toIndex = numbers[1] - 1;

        accounts[fromIndex] = accounts[fromIndex] - number[2];
        accounts[toIndex] = accounts[toIndex] + number[2]; 
      }
  }
}

console.log(bankRequests([10, 100, 20, 50, 30], ["withdraw 2 10", "transfer 5 1 20", "deposit 5 20", "transfer 3 4 15"]))