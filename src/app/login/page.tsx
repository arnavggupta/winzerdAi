"use client";
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event:any) => {
    event.preventDefault()
  
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-white">
     

      <main className="flex flex-col items-center justify-center w-full max-w-2xl px-4 py-8 rounded shadow-md bg-white">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 py-2">Login with Winzerd EMS</h1>

        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-gray-700 font-bold mb-2">Email or Mobile No</label>
            <input
              type="text"
              id="email"
              className="border rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="border rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            LOGIN
          </button>
        </form>

        <div className="mt-4 text-gray-600">
          <span className="mr-2">Forgot Password?</span>
          <a href="#" className="underline">
            Reset Password
          </a>
        </div>

        <div className="mt-8 text-gray-600 mb-2">
          <span className="font-bold underline">OR</span>
        </div>

        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-3">
          LOGIN WITH EMPID
        </button>

        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          LOGIN WITH MICROSOFT OFFICE 365
        </button>
      </main>
    </div>
  )
}