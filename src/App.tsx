import './App.css'
import { UsersContextProvider } from 'context'
import { UsersList } from 'components'

function App() {
  return (
    <UsersContextProvider>
      <div className="container">
        <UsersList />
      </div>
    </UsersContextProvider>
  )
}

export default App
