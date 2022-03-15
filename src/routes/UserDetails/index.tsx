import { useUsers } from 'context'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
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

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...user?.name,
    },
  })
  return (
    <>
      {user && (
        <div className="user_details_container">
          <img width={128} height={128} src={user.picture.large} alt="avatar" />
          <section>
            <h2>Name</h2>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="title">Title</label>
              <input
                {...register('title', { required: true })}
                style={{ backgroundColor: 'black' }}
                type="text"
                id="title"
              />
              <label htmlFor="first">First name</label>
              <input
                {...register('first', { required: true })}
                style={{ backgroundColor: 'black' }}
                type="text"
                id="first"
              />
              <label htmlFor="last">Last Name</label>
              <input
                {...register('last', { required: true })}
                style={{ backgroundColor: 'black' }}
                type="text"
                id="last"
              />
            </form>
          </section>
        </div>
      )}
    </>
  )
}
