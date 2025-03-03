# Test If A Binary Tree Is Symmetric

https://backtobackswe.com/platform/content/test-if-a-binary-tree-is-symmetric

## My solution

```js
const isSymmetric = (root) => {
    	const helper = (left, right) => {
		if (!left && !right) return true
		if (!left || !right || left.val !== right.val) return false
		return helper(left.left, right.right) && helper(left.right, right.left)
	}

  if (!root) return true
	return helper(root.left, root.right)
}
```
