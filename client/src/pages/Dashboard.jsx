import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold">
          Welcome back!
        </h2>

        <p className="text-gray-600 mt-2">
          You have 3 tasks today.
        </p>
      </main>
    </>
  );
}

export default Dashboard;