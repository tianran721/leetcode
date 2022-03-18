
import pic from './pic/img_2.png'
import pic2 from './pic/img_3.png'
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return null;
    let slow = head;
    let fast = head;
    let len = 0;
    // 记录节点个数
    while(fast != null){
        len++;
        fast = fast.next;
    }
    fast = head;
    // f移动k位 -> f指向变换后的头节点
    for(let i = 0 ; i < k%len;i++){
        fast = fast.next;
    }
    // 移动f,s指针,直到f指向最后一个节点
    while(fast.next != null){
        fast = fast.next;
        slow = slow.next;
    }
    // 变换
    fast.next = head;
    head = slow.next;
    slow.next = null;
    return head;
};


/*
// bug
var rotateRight = function(head, k) {
    if(head = null) return null;
    // let fast = null; -> 应该是 let fast = head;
    // let slow = null; -> 应该是 let slow = head;
    let len = 0;
    while(fast != null){
        len++;
        fast = fast.next;
    }
    fast = head;
    // fast 指针指向反转后的头节点
    for(let i = 0; i < k % len; i++){
        fast = fast.next;
    }
    while(fast.next != null){
        fast = fast.next;
        slow = slow.next;
    }
    fast.next = head;
    head = slow.next;
    slow.next = null;
    return head;
};*/
