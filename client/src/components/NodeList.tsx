import { useQuery } from '@apollo/client/react';
import { GET_NODES } from '../graphql/queries';
import type { Node } from '../types/node.types';
import NodeItem from './NodeItem';

const NodeList = () => {
  const { loading, error, data } = useQuery<{ nodes: Node[] }>(GET_NODES);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <p className="text-slate-400">Loading books...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
        <p className="text-sm text-red-400">
          Failed to load books: {error.message}
        </p>
      </div>
    );
  }

  if (!data?.nodes.length) {
    return (
      <div className="py-16 text-center">
        <p className="text-slate-400">No books found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
      {/* table header */}
      <div className="hidden border-b border-slate-800 bg-slate-900 px-6 py-4 md:grid md:grid-cols-[2fr_1.5fr_80px_1.2fr_1.5fr_auto] md:items-center md:gap-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Title
        </p>

        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Author
        </p>

        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Year
        </p>

        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Genre
        </p>

        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Publisher
        </p>

        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Actions
        </p>
      </div>

      {/* books */}
      {data.nodes.map((node: any) => (
        <NodeItem key={node.id} node={node} />
      ))}
    </div>
  );
};

export default NodeList;
