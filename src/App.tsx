import './App.css'
import { CreateNewUser } from './components/CreateNewUser'
import { UsersList } from './components/UsersList'
import { Toaster } from 'sonner'


function App() {
  return (
    <>
      <UsersList />
      <CreateNewUser />
      <Toaster richColors/>
    </>
  )
}

export default App
