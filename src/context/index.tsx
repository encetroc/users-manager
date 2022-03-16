import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  UsersAction,
  UsersState,
  UsersActionKind,
  User,
  UsersContextValue,
} from 'types'

const UsersContext = createContext({})

function usersReducer(state: UsersState, action: UsersAction): UsersState {
  let { type, payload } = action
  switch (type) {
    case UsersActionKind.edit:
      return {
        ...state,
        [payload.login.username]: {
          ...payload,
        },
      }
    case UsersActionKind.fetchUsers:
      return payload
    default:
      return state
  }
}

function editUserAction(user: User): {
  type: UsersActionKind
  payload: User
} {
  return { type: UsersActionKind.edit, payload: user }
}

function fetchUsers(users: UsersState): {
  type: UsersActionKind
  payload: UsersState
} {
  return {
    type: UsersActionKind.fetchUsers,
    payload: users,
  }
}

export function useUsers() {
  return useContext(UsersContext) as UsersContextValue
}

export function UsersContextProvider({ children }: { children: JSX.Element }) {
  const [state, dispatch] = useReducer(usersReducer, {})
  const [loading, setLoading] = useState(true)
  const dataUrl = 'https://randomuser.me/api/?results=20'
  useEffect(() => {
    fetch(dataUrl)
      .then((data) => data.json())
      .then((data) => {
        const users: UsersState = data.results.reduce(
          (map: any, user: User) => {
            map[user.login.username] = {
              ...user,
            }
            return map
          },
          {}
        )
        dispatch(fetchUsers(users))
        setLoading(false)
      })
  }, [])
  return (
    <UsersContext.Provider value={{ state, dispatch, editUserAction }}>
      {!loading && children}
    </UsersContext.Provider>
  )
}
