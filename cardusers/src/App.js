const users = [
  {
    username: "Ryan1",
    email: "bleha@gmail.com",
    name: "Ryan C"
  },
  {
    username: "Oliver2",
    email: "bleha@gmail.com",
    name: "Oliver H"
  },
  {
    username: "Harrison3",
    email: "bleha@gmail.com",
    name: "Harrison R"
  },
]

const UserCard = (props) => {
  return (

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.user.name}</h5>
        <p className="card-text">{props.user.username}</p>
        <a href="#" className="card-link">{props.user.email}</a>
      </div>
    </div>
  )
}
function App() {
  return (
    <div className="container">
      {users.map(user => <UserCard user={user} />)}
    </div>
  )
}


  export default App




// import { useState } from 'react'

// // const names = ['John Doe', 'Jane Doe', 'Jack Doe', 'James Doe', 'Jared Doe']

// const App = () => {

//   const [countState, setCountState] = useState({
//     count: 0
//   })

//   const handleIncrementCount = () => {
//     setCountState({ count: countState.count + 1 })
//   }


//   const handleIncrementCount1 = () => {
//     setCountState({ count: countState.count -1 })
//   }


//   const handleIncrementCount2 = () => {
//     setCountState({ count: countState.count = 0 })
//   }


//   const handleIncrementCount3 = () => {
//     setCountState({ count: countState.count + 9999 })
//   }





//   return (
//     <>
//       {/* <ul>
//       {names.map(name => <li>{name}</li>)}
//     </ul> */}
//       <h1>Count: {countState.count}</h1>
//       <button onClick={handleIncrementCount}>Add +1</button>
//       <button onClick={handleIncrementCount1}>Minus -1</button>
//       <button onClick={handleIncrementCount2}>Reset</button>
//       <button onClick={handleIncrementCount3}>Wild</button>
//     </>
//   )
// }

// export default App
