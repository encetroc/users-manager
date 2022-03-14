import './App.css'
import { UsersContextProvider } from 'context'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <UsersContextProvider>
      <div className="container">
        <Outlet />
      </div>
    </UsersContextProvider>
  )
}

export default App
