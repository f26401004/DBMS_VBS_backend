export default {
  insurances: async (parent, args, context, info) => {
    const data = await parent.getInsurances()
    return data
  },
  cards: async (parent, args, context, info) => {
    const data = await parent.getCards()
    console.log(data)
    return data
  }
}