import NodeForm from './components/NodeForm';
import NodeList from './components/NodeList';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* header */}
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl px-6 py-5 justify-between items-center">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              📚 Node Book Manager
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage your books with GraphQL
            </p>
          </div>
        </div>
      </header>

      {/* main */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* add book */}
        <section className="mb-10">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-white">Add New Book</h2>
            <p className="mt-1 text-sm text-slate-500">
              Add a new book to your collection.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <NodeForm />
          </div>
        </section>

        {/* book list */}
        <section>
          <div className="mb-5 flex justify-between items-end">
            <div>
              <h2 className="text-lg font-semibold text-white">
                Book Collection
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                View and manage all your books.
              </p>
            </div>
          </div>

          <NodeList />
        </section>
      </main>
    </div>
  );
};

export default App;
