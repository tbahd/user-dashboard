import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");


  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Failed to fetch users");

      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


if (loading)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <p className="text-lg font-semibold">Loading users...</p>
    </div>
  );

if (error)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <p className="text-red-500 font-semibold">Error: {error}</p>
    </div>
  );

return (
  <Layout>
    <input
      type="text"
      placeholder="Search users..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="mb-4 p-2 rounded border"
    />
    <UserList users={filteredUsers} />
  </Layout>
);


}

export default App;
