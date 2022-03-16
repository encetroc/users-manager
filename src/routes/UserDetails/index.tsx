import { InfoBlock } from 'components'
import { useUsers } from 'context'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import { User } from 'types'
import './UserDetails.css'

export function UserDetails() {
  const { state, dispatch, editUserAction } = useUsers()
  const { id } = useParams()

  const user: User | null = useMemo(() => {
    if (id) {
      return state[id]
    } else {
      return null
    }
  }, [id, state])

  /* const {
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

  const save = (data: any) => {
    user &&
      dispatch(
        editUserAction({
          ...user,
          name: {
            ...data,
          },
        })
      )
  } */

  return (
    <>
      {user && (
        <div className="user_details_container">
          <Link to="/">Users list</Link>
          <img width={128} height={128} src={user.picture.large} alt="avatar" />
          <InfoBlock name="name" data={user.name} />
          {/* <section>
            <h2>Name</h2>
            <form
              onSubmit={handleSubmit(save)}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {Object.entries(user.name).map((field: any) => {
                return (
                  <>
                    <label htmlFor={field[0]}>{field[0]}</label>
                    <input
                      {...register(field[0], { required: true })}
                      style={{ backgroundColor: 'black' }}
                      type="text"
                      id={field[0]}
                    />
                  </>
                )
              })}
              <button type="submit">Save</button>
            </form>
          </section> */}
        </div>
      )}
    </>
  )
}
