import React, { useState } from 'react'
import { Switch } from '@headlessui/react'

import { classNames } from '../../utils/class-names'

export default function Home() {
  return (
    <form
      action="/switch/switch-form-submit"
      method="post"
      className="flex h-full w-screen items-start justify-center bg-gray-50 p-12"
    >
      <Switch.Group as="div" className="flex items-center space-x-4">
        <Switch.Label>Enable notifications</Switch.Label>

        <Switch
          defaultChecked
          as="button"
          type="submit"
          className={({ checked }) =>
            classNames(
              'focus:shadow-outline relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none',
              checked ? 'bg-indigo-600 hover:bg-indigo-800' : 'bg-gray-200 hover:bg-gray-400'
            )
          }
        >
          {({ checked }) => (
            <>
              <span
                className={classNames(
                  'inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out',
                  checked ? 'translate-x-5' : 'translate-x-0'
                )}
              />
            </>
          )}
        </Switch>
      </Switch.Group>
    </form>
  )
}
