import Node from '../../models/node.model.js';

// create node type
type CreateNodeArgs = {
  title: string;
  author: string;
  year: number;
  genre: string;
  publisher: string;
};

// update node type
type UpdateNodeArgs = {
  id: string;
  title?: string;
  author?: string;
  year?: number;
  genre?: string;
  publisher?: string;
};

// delete node args
type DeleteNodeArgs = {
  id: string;
};

export const resolvers = {
  Query: {
    // get all nodes
    nodes: async () => {
      return await Node.find();
    },

    // get single node by id
    node: async (_: unknown, args: { id: string }) => {
      return await Node.findById(args.id);
    },
  },

  Mutation: {
    // create node
    createNode: async (_: unknown, args: CreateNodeArgs) => {
      const node = await Node.create(args);
      return node;
    },

    // update node
    updateNode: async (_: unknown, args: UpdateNodeArgs) => {
      const { id, ...updates } = args;

      return await Node.findByIdAndUpdate(
        id,
        { $set: updates },
        {
          new: true,
          runValidators: true,
        },
      );
    },

    // delete node
    deleteNode: async (_: unknown, args: DeleteNodeArgs) => {
      const deleteNode = await Node.findByIdAndDelete(args.id);

      return deleteNode !== null;
    },
  },
};
