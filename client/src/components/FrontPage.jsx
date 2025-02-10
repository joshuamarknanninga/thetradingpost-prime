import React from "react";

const FrontPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Egg & Milk Exchange
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Connect, Trade, and Thrive
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Your local platform for exchanging fresh eggs, milk, and dairy
              products. Discover nearby sellers, make secure transactions, and
              support your community.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="/signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Egg & Milk Exchange. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FrontPage;
