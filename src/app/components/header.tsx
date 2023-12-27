import React from "react"

export default function Header(){
    return (
    <>
      <header className="bg-purple-600 shadow">
        <div className="max-w-3xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-widest text-gray-900">My App</h1>
          <nav className="mt-4">
            <ul className="flex justify-between items-center">
              <li>
                <a href="#" className="text-gray-200 hover:text-gray-700">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-gray-700">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-gray-700">About</a>
              </li>
              <li>
                <a href="./" className="bg-gray-800 text-white px-4 py-2 rounded-md">Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}