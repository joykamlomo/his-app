import { useRouter } from 'next/router'
import React from 'react'

export default function login() {
  const router = useRouter()
  return (
    <div>
      <h1>Login to your account</h1>
      <button onClick={() => router.push("/")}>Login</button>
    </div>
  )
}

