import './UserLi.css'
import { User } from 'types'

type UserLiProps = {
  user: User
}

export function UserLi({ user }: UserLiProps) {
  return (
    <li className='user_li'>
      <div className="user_info">
        <img
          width={48}
          height={48}
          src={user.picture.thumbnail}
          alt="avatar"
        />
        <p>{`${user.name.title}. ${user.name.first} ${user.name.last}`}</p>
      </div>
      <button className="view_more">View more</button>
    </li>
  )
}
