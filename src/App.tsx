import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { JsonSerializer, throwError } from 'typescript-json-serializer';

import { data } from './json/data';
import {Organization} from "./models/organization.ts";

// Instantiate a default serializer
const defaultSerializer = new JsonSerializer();


function App() {
  const [count, setCount] = useState(0)

// Or you can instantiate a serializer with your custom options
    const customSerializer = new JsonSerializer({
        // Throw errors instead of logging
        errorCallback: throwError,

        // Allow all nullish values
        nullishPolicy: {
            undefined: 'allow',
            null: 'allow'
        },

        // Disallow additional properties (non JsonProperty)
        additionalPropertiesPolicy: 'disallow',

        // e.g. if all the properties in the json object are prefixed by '_'
        formatPropertyName: (propertyName: string) => `_${propertyName}`,
    })

// Deserialize
    const organization = defaultSerializer.deserialize(data, Organization);

// Serialize
    const data2 = defaultSerializer.serialize(organization);
    console.log(data2);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
