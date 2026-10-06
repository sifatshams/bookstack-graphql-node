import { useMutation } from '@apollo/client/react';
import React, { useState } from 'react';
import { CREATE_NODE } from '../graphql/mutations';
import { GET_NODES } from '../graphql/queries';

const NodeForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [publisher, setPublisher] = useState('');

  const [createNode, { loading }] = useMutation(CREATE_NODE, {
    refetchQueries: [{ query: GET_NODES }],
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // validation
    if (!title || !author || !year || !genre || !publisher) {
      return;
    }

    try {
      await createNode({
        variables: {
          title,
          author,
          year: Number(year),
          genre,
          publisher,
        },
      });

      setTitle('');
      setAuthor('');
      setYear('');
      setGenre('');
      setPublisher('');
    } catch (error) {
      console.error('Failed to create book:', error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Title
          </label>

          <input
            type="text"
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none transition focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Author
          </label>

          <input
            type="text"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none transition focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Year
          </label>

          <input
            type="number"
            placeholder="e.g 2026"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none transition focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Genre
          </label>

          <input
            type="text"
            placeholder="e.g. Programming"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none transition focus:border-indigo-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Publisher
          </label>

          <input
            type="text"
            placeholder="Enter publisher"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none transition focus:border-indigo-500"
          />
        </div>

        <div className="md:col-span-2">
          <button
            className="w-full rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed cursor-pointer disabled:opacity-50"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Book'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NodeForm;
