/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(-1,null);
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;
    // 循环后 快指针可能在删除节点前面也可能在删除节点后面
    for(let i = 0; i < n ; i++){
        fast = fast.next
    }
    // 当快指针在删除节点前时
    while(fast.next != null){
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
};
