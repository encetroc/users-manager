import { useUsers } from 'context'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { User } from 'types'
import { capitalize } from 'utils'
import './InfoBlock.css'

type InfoBlockProps = {
  name: 'name' | 'location' | 'dob'
}

type UserAttributes =
  | 'title'
  | 'first'
  | 'last'
  | 'number'
  | 'name'
  | 'city'
  | 'state'
  | 'country'
  | 'postcode'
  | 'latitude'
  | 'longitude'
  | 'offset'
  | 'description'
  | 'date'
  | 'age'

export function InfoBlock({ name }: InfoBlockProps) {
  const { state, dispatch, editUserAction } = useUsers()
  const [edit, setEdit] = useState(false)
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
      ...user?.[name],
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
    setEdit(false)
  }

  return (
    <section className="info">
      <h2 className="info__title">{capitalize(name)}</h2>
      <form
        className="info__form"
        onSubmit={handleSubmit(save)}
      >
        {user &&
          Object.entries(user[name]).map(([key, value]: any) => {
            return (
              <div className="info__field">
                <label className="info__label" htmlFor={key}>
                  {capitalize(key)}
                </label>
                {edit ? (
                  <input
                    className="info__input"
                    {...register(key, { required: true })}
                    type="text"
                    id={key}
                  />
                ) : (
                  <div className="info__value">
                    {value}
                  </div>
                )}
              </div>
            )
          })}
        <div className="info__action">
          {edit && <button onClick={() => setEdit(false)}>Cancel</button>}
          {!edit && <button onClick={() => setEdit(true)}>Edit</button>}
          {edit && <button type="submit">Save</button>}
        </div>
      </form>
    </section>
  )
}
