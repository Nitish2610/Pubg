import React from "react";

function Login() {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://example.com/pubg-background.jpg')" }}>
      <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Welcome to CosmicPlayground</h1>
        <form>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="inline-flex items-center text-gray-300">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-gray-300 text-center mt-6">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up here</a>.
        </p>
      </div>
    </div>
  );
}

export default Login;
