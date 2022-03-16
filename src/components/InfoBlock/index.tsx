import { useUsers } from 'context'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { User } from 'types'

type InfoBlockProps = {
  name: 'name' | 'dob'
  data: any
}

export function InfoBlock({ name, data }: InfoBlockProps) {
  const { state, dispatch, editUserAction } = useUsers()
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
  } = useForm<any>({
    defaultValues: {
      ...data,
    },
  })

  const save = (data: any) => {
    user &&
      dispatch(
        editUserAction({
          ...user,
          [name]: {
            ...data,
          },
        })
      )
  }
  return (
    <section>
      <h2>{name}</h2>
      <form
        onSubmit={handleSubmit(save)}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {user &&
          Object.keys(user[name]).map((key: string) => {
            return (
              <>
                <label htmlFor={key}>{key}</label>
                <input
                  {...register(key, { required: true })}
                  style={{ backgroundColor: 'black' }}
                  type="text"
                  id={key}
                />
              </>
            )
          })}
        <button type="submit">Save</button>
      </form>
    </section>
  )
}
