import Node from '../../models/node.model.js';

export const resolvers = {
  Query: {
    // get all nodes
    nodes: async () => {
      return await Node.find();
    },

    // get single node by id
  },
};
