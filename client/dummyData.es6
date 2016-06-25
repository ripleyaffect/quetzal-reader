import { v4 } from 'uuid'

export const cells = [
  {
    id: v4(),
    type: 'text',
    data: {
      content: 'Hello world 1'
    }
  },
  {
    id: v4(),
    type: 'text',
    data: {
      content: 'Hello world 2'
    }
  },
  {
    id: v4(),
    type: 'code',
    data: {
      syntax: 'js',
      content: 'Hello world 3'
    }
  },
  {
    id: v4(),
    type: 'text',
    data: {
      content: 'Hello world 3'
    }
  }
]