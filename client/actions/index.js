import { v4 } from 'uuid'

export const CREATE_CELL = 'CREATE_CELL'

export const createCell = (cellData) => ({
  type: CREATE_CELL,
  cell: {
    ...cellData,
    id: v4(),
  },
})
