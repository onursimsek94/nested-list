'use strict'

import React from 'react'
import TreeNode from './TreeNode'

import { createNestedObject, findNode, removeNode } from '../utils/helper'

export default class Tree extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      nodes: createNestedObject(JSON.parse(JSON.stringify(props.nodes)))
    }
  }

  onToggle = node => {
    const { nodes } = this.state

    const selectedNode = findNode(nodes, node.ID)
    selectedNode.isOpen = !node.isOpen
    this.setState({ nodes })
  }

  deleteNode = node => {
    const { nodes } = this.state

    removeNode(nodes, node.ID)
    this.setState({ nodes })
  }

  render () {
    const { nodes } = this.state
    return (
      <div>
        {
          nodes.map(node => (
            <TreeNode
              key={node.ID}
              node={node}
              onToggle={this.onToggle}
              deleteNode={this.deleteNode}
            />
          ))
        }
      </div>
    )
  }
}
