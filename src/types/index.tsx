export type UsersState = Record<string, User>

export type UsersContextValue = {
  state: UsersState
  dispatch: React.Dispatch<UsersAction>
  EditUserAction: (user: User) => UsersAction
}

export enum UsersActionKind {
  edit = 'EDIT',
  fetchUsers = 'FETCH_USERS',
}

export type UsersAction = {
  type: UsersActionKind
  payload: any
}

export type User = {
  gender: string
  name: Name
  location: Location
  email: String
  login: Login
  dob: {
    date: string
    age: number
  }
  registered: {
    date: string
    age: number
  }
  phone: string
  cell: string
  id: {
    name: string
    value: string
  }
  picture: Picture
  nat: string
}

type Name = {
  title: string
  first: string
  last: string
}

type Location = {
  street: {
    number: number
    name: string
  }
  city: string
  state: string
  country: string
  postcode: number
  coordinates: {
    latitude: string
    longitude: string
  }
  timezone: {
    offset: string
    description: string
  }
}

type Login = {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

type Picture = {
  large: string
  medium: string
  thumbnail: string
}
