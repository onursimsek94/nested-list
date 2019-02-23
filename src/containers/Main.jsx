'use strict'

import React from 'react'
import Tree from '../components/Tree'

import dataset from '../data/dataset.json'

const Main = () => (
  <Tree nodes={dataset} />
)

export default Main
