import { useUsers } from 'context'

export function UsersList() {
  const { state } = useUsers()
  console.log(state)
  return <div>users list</div>
}
