import pic from './pic/img_4.png'
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(-1,null);//
    let curr = l3;
    let carry = 0;
    while(l1 || l2 || carry){
        let v1 = l1?l1.val : 0;
        let v2 = l2?l2.val : 0;
        let sum = v1 + v2 + carry;
        carry = sum >= 10 ? 1 : 0;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if(l1)l1 = l1.next;
        if(l2)l2 = l2.next;
    }
    return l3.next;
};
