
import Home from '@/app/components/organisms/home'


const HomePage = () => {
    // const admins = useStore($users)
        return (
            <>
                <Home />
            </>
        );
    }
//   const admins = useStore($users)
//   return (
//     <div className='flex h-screen items-center justify-center'>
//       <ul>
//           {admins.map(user => <div>
//             <li key={user.id}>
//               {user.id}
//               {user.name}
//               {user.email}
//               <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
//             </li>
//           </div>)}
//       </ul>
//     </div>
//   )


export default HomePage;
