import { useMutation } from '@apollo/client/react';
import { DELETE_NODE } from '../graphql/mutations';
import { GET_NODES } from '../graphql/queries';
import type { Node } from '../types/node.types';

interface NodeItemProps {
  node: Node;
}

const NodeItem = ({ node }: NodeItemProps) => {
  const [deleteNode, { loading }] = useMutation(DELETE_NODE, {
    refetchQueries: [{ query: GET_NODES }],
  });

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${node.title}"?`,
    );

    if (!confirmed) return;

    try {
      await deleteNode({
        variables: {
          id: node.id,
        },
      });
    } catch (error) {
      console.error('Failed to delete book:', error);
    }
  };

  return (
    <div className="border-b border-slate-800 px-6 py-5 last:border-b-0">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[2fr_1.5fr_80px_1.2fr_1.5fr_auto] md:items-center">
        {/* title */}
        <div>
          <p className="font-semibold text-white">{node.title}</p>
        </div>

        {/* author */}
        <div>
          <p className="text-sm text-slate-300">{node.author}</p>
        </div>

        {/* year */}
        <div>
          <p className="text-sm text-slate-400">{node.year}</p>
        </div>

        {/* genre */}
        <div>
          <span className="inline-flex rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
            {node.genre}
          </span>
        </div>

        {/* publisher */}
        <div>
          <p className="text-sm text-slate-400">{node.publisher}</p>
        </div>

        {/* actions */}
        <div>
          <button
            onClick={handleDelete}
            disabled={loading}
            className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NodeItem;
