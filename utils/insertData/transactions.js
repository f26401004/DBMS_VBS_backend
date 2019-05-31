import uuidv4 from 'uuid/v4'
import randonDatetime from 'random-datetime'
const dates = []
for (let i = 0 ; i < 5 ; ++i) {
  dates.push(randonDatetime({
    year: 2019,
    month: (i + 1) % 2 + 4
  }))
}

export default [
  {
    id: uuidv4(),
    type: 13,
    userCard: '0019001001143373',
    targetCard: '0000000000000000',
    value: 10,
    createdBy: 'root',
    updatedBy: 'root',
    createdAt: dates[0],
    updatedAt: dates[0]
  },
  {
    id: uuidv4(),
    type: 3,
    userCard: '0019001001143373',
    targetCard: '0019001001143374',
    value: 5000,
    createdBy: 'root',
    updatedBy: 'root',
    createdAt: dates[0],
    updatedAt: dates[0]
  },
  {
    id: uuidv4(),
    type: 13,
    userCard: '0019001001143373',
    targetCard: '0000000000000000',
    value: 10,
    createdBy: 'root',
    updatedBy: 'root',
    createdAt: dates[1],
    updatedAt: dates[1]
  },
  {
    id: uuidv4(),
    type: 3,
    userCard: '0019001001143373',
    targetCard: '0019001001143374',
    value: 2000,
    createdBy: 'root',
    updatedBy: 'root',
    createdAt: dates[1],
    updatedAt: dates[1]
  },
  {
    id: uuidv4(),
    type: 13,
    userCard: '0019001001143374',
    targetCard: '0000000000000000',
    value: 10,
    createdBy: 'root',
    updatedBy: 'root',
    createdAt: dates[2],
    updatedAt: dates[2]
  },
  {
    id: uuidv4(),
    type: 3,
    userCard: '0019001001143374',
    targetCard: '0019001001143373',
    value: 1000,
    createdBy: 'root',
    updatedBy: 'root',
    createdAt: dates[2],
    updatedAt: dates[2]
  },
  {
    id: uuidv4(),
    type: 13,
    userCard: '0019001001143374',
    targetCard: '0000000000000000',
    value: 10,
    createdBy: 'root',
    updatedBy: 'root',
    createdAt: dates[3],
    updatedAt: dates[3]
  },
  {
    id: uuidv4(),
    type: 3,
    userCard: '0019001001143374',
    targetCard: '0019001001143373',
    value: 2000,
    createdBy: 'root',
    updatedBy: 'root',
    createdAt: dates[3],
    updatedAt: dates[3]
  },
  {
    id: uuidv4(),
    type: 13,
    userCard: '0019001001143374',
    targetCard: '0000000000000000',
    value: 10,
    createdBy: 'root',
    updatedBy: 'root',
    createdAt: dates[4],
    updatedAt: dates[4]
  },
  {
    id: uuidv4(),
    type: 3,
    userCard: '0019001001143374',
    targetCard: '0019001001143373',
    value: 1000,
    createdBy: 'root',
    updatedBy: 'root',
    createdAt: dates[4],
    updatedAt: dates[4]
  }
]