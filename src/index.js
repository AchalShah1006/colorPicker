import React, { createContext, useEffect, useState } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import axios from "axios"

export const TokenContext = createContext()

const Root = () => {
  const [token, setToken] = useState("")
  useEffect(() => {
    axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`
      return config
    })
  }, [token])

  const handleTokenSave = (str) => {
    setToken(str)
  }
  return (
    <TokenContext.Provider value={handleTokenSave}>
      <App />
    </TokenContext.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
)
