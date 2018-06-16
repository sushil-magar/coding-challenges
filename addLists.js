/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

function addLists(l1, l2) {
  const result = '';
  carryOver = 0;

  while(l1 !== null || l2 !== null) {
    let a = l1.val ? l1.val : null;
    let b = l2.val ? l2.val : null;a

    let sum = a + b;
    let value = sum % 10;
    carryOver = Math.floor(sum/10);

    result += value;

    l1 = l1.next ? l1.next : null;
    l2 = l2.next ? l2.next : null;
  }

  return result;
}



