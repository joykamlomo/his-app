import { useRouter } from 'next/router'
import React from 'react'

function login() {
    const router = useRouter()
  return (
    <div>
        {/* add login form */}
        <h1>Login to your account</h1>
        <button onClick={() => router.push("/")}>Login</button>
    </div>
  )
}

export default login