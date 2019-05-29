import deleteOperations from './deleteOperations.js'
import updateOperations from './updateOperations.js'

const integration = {}
Object.keys(deleteOperations).forEach(key => {
  integration[key] = deleteOperations[key]
})
Object.keys(updateOperations).forEach(key => {
  integration[key] = updateOperations[key]
})

export default integration