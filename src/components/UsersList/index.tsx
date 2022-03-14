import { useUsers } from 'context'

export function UsersList() {
  const { state } = useUsers()
  return <div>users list</div>
}
