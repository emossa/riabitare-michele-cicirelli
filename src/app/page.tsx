
export default function Home() {
  return (
    <main className="">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center gap-8 bg-black text-white">
        <h1 className="text-6xl font-bold text-center">
          Welcome to <span className="text-blue-500">Create Next App</span>
        </h1>
        <p className="text-xl text-center">
          Start building your next project with Create Next App.
        </p>
        <div className="flex gap-4">
          <a
            href="https://nextjs.org/docs"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Documentation
          </a>
          <a
            href="#"
            className="btn btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Learn More
          </a>
        </div>
      </section>

    </main>
  );
}
