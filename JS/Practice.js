/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"
 * Output: true
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s){
    let valid = true;
    const stack = [];
    const mapper = {
        '{': "}", 
        "[": "]",
        "(": ")"
    }

    for (let i in s) { // use stack to iterate the input strings 
        const v = s[i];
        if (['(', '[', '{'].indexOf(v) > -1) { // say if left brackets encountered 
            stack.push(v);
        } else { // if right brackets 
            const peak = stack.pop(); 
            if (v !== mapper[peak]){
                valid = false;
            }
        }
    }

    if (stack.length > 0) { // if empty stack 
        return false;
    }
    return valid;

}
 
 
 
 