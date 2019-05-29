import uuidv4 from 'uuid/v4'
const date = new Date()
date.setMonth(date.getMonth() - 1)

export default [
  {
    id: uuidv4(),
    type: 3,
    userCard: '0019001001143373',
    targetCard: '0019001001143374',
    value: 5000,
    createdBy: 'root',
    updatedBy: 'root',
    createdAt: date,
    updatedAt: date
  },
  {
    id: uuidv4(),
    type: 3,
    userCard: '0019001001143374',
    targetCard: '0019001001143373',
    value: 1000,
    createdBy: 'root',
    updatedBy: 'root',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]