// 左中右
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import pic from './pic/img_1.png'
var inorderTraversal = function(root) {
    let res = []
    dfs(root,res);
    return res

};
const dfs = (root,res)=>{
    if(!root) return ;
    dfs(root.left,res);
    res.push(root.val);
    dfs(root.right,res);
}


/*
var inorderTraversal = function(root) {
    let res = []
    dfs(root,res);
    return res

};
const dfs = (root,res)=>{
    if(!root) return
    dfs(root.left,res)
    res.push(root.val,res) -> 应该是res.push(root.val)
    dfs(root.right,res)
}*/
