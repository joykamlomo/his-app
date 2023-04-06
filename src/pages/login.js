import React from 'react'
import { useRouter } from 'next/router'

function Login() {
  const router = useRouter();

  // rest of the component logic
  return (
    <div>
      <h1>Login to your account</h1>
      <button onClick={() => router.push("/")}>Login</button>
    </div>
  )
}

export default Login;