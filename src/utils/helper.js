'use strict'

export function createNestedObject (data, parent) {
  var nestedObject = []

  for (var item in data) {
    if (data[item].parentID === parent) {
      var children = createNestedObject(data, data[item].ID)

      if (children.length) {
        data[item].children = children
      }
      nestedObject.push(data[item])
    }
  }
  return nestedObject
}

export function findNode (nodes, nodeId) {
  if (nodes.ID === nodeId) {
    return nodes
  }

  let foundNode
  for (const item in nodes) {
    if (nodes.hasOwnProperty(item) && typeof nodes[item] === 'object') {
      foundNode = findNode(nodes[item], nodeId)
      if (foundNode) {
        return foundNode
      }
    }
  }
  return foundNode
}

export function removeNode (nodes, nodeId) {
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].ID === nodeId) {
      nodes.splice(i, 1)
      break
    } else {
      if (nodes[i].children) {
        removeNode(nodes[i].children, nodeId)
      }
    }
  }
}
