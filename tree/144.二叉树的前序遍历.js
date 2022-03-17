import pic from './pic/img.png'
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let res = [];
    dfs(root,res)
    return res;
};
const dfs = (root,res)=>{
    if(!root) return;
    res.push(root.val);
    dfs(root.left,res);
    dfs(root.right,res);
}



/*var preorderTraversal = function(root) {
    let res = []
    dfs(root,res)
    return res
};
function dfs(root,res){
    if(!root.val) return -> 应该是 root不存在时
    res.push(root.val)
    dfs(root.left,res)
    dfs(root.right,res)
}*/





// 数组模拟栈的解法 先发右节点
var preorderTraversal = function(root) {
    if(!root) return [];
    let res = [];
    let stack = [root];
    while(stack.length > 0){
        let curNode = stack.pop();
        res.push(curNode.val);
        if(curNode.right){
            stack.push(curNode.right);
        }
        if(curNode.left){
            stack.push(curNode.left);
        }
    }
    return res
};

