const binaryTree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: null
    }
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 7,
      left: null,
      right: null
    }
  }
}

const reverse_binary_tree = (node) => {
  if (!node) {
    return null
  }

  const left = reverse_binary_tree(node.left)
  const right = reverse_binary_tree(node.right)

  node.left = right
  node.right = left

  return node
}

console.log(reverse_binary_tree(binaryTree))
