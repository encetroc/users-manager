import { UserLi } from 'components'
import { useUsers } from 'context'
import './UsersList.css'

export function UsersList() {
  const { state } = useUsers()
  return (
    <ul className="users_ul">
      {Object.values(state).map((user) => (
        <UserLi key={user.login.uuid} user={user} />
      ))}
    </ul>
  )
}
