export default {
  user: async (parent, args, context, info) => {
    const SSN = parent.dataValues.user
    const data = await context.dataloaders.users.load(SSN)
    return data
  },
  insured: async (parent, args, context, info) => {
    const SSN = parent.dataValues.insured
    const data = await context.dataloaders.users.load(SSN)
    return data
  },
  beneficiary: async (parent, args, context, info) => {
    const SSN = parent.dataValues.beneficiary
    const data = await context.dataloaders.users.load(SSN)
    return data
  },
  type: async (parent, args, context, info) => {
    const id = parent.dataValues.type
    const data = await context.dataloaders.insuranceTypes.load(id)
    return data
  }
}