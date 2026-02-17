function UserCard({ user }) {
  return (
    <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
      <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-500 text-sm">{user.company.name}</p>
    </li>
  );
}

export default UserCard;
