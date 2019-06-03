import deleteOperations from './deleteOperations.js'
import updateOperations from './updateOperations.js'
import insertOperations from './insertOperation.js'
import generalOperations from './generalOperation.js'

const integration = {}
Object.keys(deleteOperations).forEach(key => {
  integration[key] = deleteOperations[key]
})
Object.keys(updateOperations).forEach(key => {
  integration[key] = updateOperations[key]
})
Object.keys(insertOperations).forEach(key => {
  integration[key] = insertOperations[key]
})
Object.keys(generalOperations).forEach(key => {
  integration[key] = generalOperations[key]
})

export default integration