import { InfoBlock } from 'components'
import { useUsers } from 'context'
import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { User } from 'types'
import './UserDetails.css'

export function UserDetails() {
  const { state } = useUsers()
  const { id } = useParams()

  const user: User | null = useMemo(() => {
    if (id) {
      return state[id]
    } else {
      return null
    }
  }, [id, state])

  return (
    <>
      {user && (
        <div className="details">
          <button className="details__backBtn">
            <Link to="/">
              back
            </Link>
          </button>

          <img width={128} height={128} src={user.picture.large} alt="avatar" />
          <InfoBlock name="name" />
          <InfoBlock name="dob" />
          <InfoBlock name="location" />
        </div>
      )}
    </>
  )
}
