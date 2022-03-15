import './UserLi.css'
import { User } from 'types'
import { useNavigate } from 'react-router-dom'

type UserLiProps = {
  user: User
}

export function UserLi({ user }: UserLiProps) {
  const navigate = useNavigate()
  return (
    <li className="user_li">
      <div className="user_info">
        <img width={48} height={48} src={user.picture.thumbnail} alt="avatar" />
        <p>{`${user.name.title}. ${user.name.first} ${user.name.last}`}</p>
      </div>
      <button
        onClick={() => navigate(`/user/${user.login.username}`)}
        className="view_more"
      >
        View more
      </button>
    </li>
  )
}
