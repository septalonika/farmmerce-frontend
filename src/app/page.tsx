'use client'

// export default function Home() {
//   return (
//     <div>
//       test
//     </div>
//   );
// }

import { useStore } from '@nanostores/react'
import { $users } from '@/app/stores/user'
import Rating from '@mui/material/Rating';


const Users = () => {
  const admins = useStore($users)
  return (
    <div className='flex h-screen items-center justify-center'>
      <ul>
          {admins.map(user => <div>
            <li key={user.id}>
              {user.id}
              {user.name}
              {user.email}
              {/* <Button variant="contained">Hello world</Button>; */}
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </li>
          </div>)}
      </ul>
    </div>
  )
}

export default Users;
