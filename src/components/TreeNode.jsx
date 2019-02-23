'use strict'

import React from 'react'

const TreeNode = props => {
  const { node, onToggle, deleteNode } = props

  const handleDeleteClick = (clickedNode, event) => {
    event.stopPropagation()
    deleteNode(clickedNode)
  }

  const getIcon = () => {
    if (!node.children) {
      return 'fas fa-minus'
    }
    return node.isOpen ? 'fas fa-caret-down' : 'fas fa-caret-right'
  }

  return (
    <div className='tree-node'>
      <span onClick={() => onToggle(node)}>
        <i className={getIcon()} />

        {`${node.City} / ${node.Name} / ${node.Phone}`}
        <i
          onClick={handleDeleteClick.bind(this, node)}
          className='fas fa-minus-circle'
        />
      </span>

      {
        node.isOpen &&
        node.children &&
        node.children.map(childNode => (
          <TreeNode
            key={childNode.ID}
            {...props}
            node={childNode}
          />
        ))
      }
    </div>
  )
}

export default TreeNode
