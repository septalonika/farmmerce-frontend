import { atom } from 'nanostores'

type User = {
    id: string,
    name: string,
    email: string,
}

export const $users = atom<User[]>([
  {
    id: '1',
    name: 'John Doe',
    email: 'johndoe@mail.com'
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'janedoe@mail.com'
  },
  {
    id: '3',
    name: 'John Smith',
    email: 'johnsmith@mail.com'
  }
])

export function addUser(user: User) {
  $users.set([...$users.get(), user]);
}