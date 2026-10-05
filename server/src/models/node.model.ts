import mongoose, { Document, Schema } from 'mongoose';

// node interface
export interface INode extends Document {
  title: string;
  author: string;
  year: number;
  genre: string;
  publisher: string;
}

// create node schema
const nodeSchema = new Schema<INode>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },

    publisher: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

const Node = mongoose.model<INode>('Node', nodeSchema);

export default Node;
