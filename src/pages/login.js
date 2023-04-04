import { useRouter } from 'next/router'
import React from 'react'

function login() {
    const router = useRouter()
  return (
    <div>
        {/* add login form */}
        <button onClick={() => router.push("/")}>Login</button>
    </div>
  )
}

export default login