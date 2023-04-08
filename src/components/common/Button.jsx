import { PlusIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Button({ buttonName }) {
  return (
    <button className="rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 inline-flex">
        <span>{ buttonName }</span>
        <PlusIcon className="w-5 text-white inline-block ml-2" />
    </button>
  )
}

export default Button