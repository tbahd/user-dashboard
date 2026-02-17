function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          User Dashboard
        </h1>

        {children}
      </div>
    </div>
  );
}

export default Layout;
