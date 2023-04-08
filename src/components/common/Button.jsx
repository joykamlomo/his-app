import { PlusIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Button({ buttonName }) {
  return (
    <button className="bg-gray-900 hover:bg-gray-600 text-white text-sm inline-flex rounded px-4 py-2">
        <span>{ buttonName }</span>
        <PlusIcon className="w-5 text-white inline-block ml-2" />
    </button>
  )
}

export default Button