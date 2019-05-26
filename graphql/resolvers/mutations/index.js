import deleteOperations from './deleteOperations'

const integration = {}
Object.keys(deleteOperations).forEach(key => {
  integration[key] = deleteOperations[key]
})

export default integration