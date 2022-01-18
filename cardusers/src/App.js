// const users = [
//   {
//     username: "Ryan1",
//     description: "bleha@gmail.com",
//     name: "Ryan C"
//   },
//   {
//     username: "Oliver2",
//     description: "bleha@gmail.com",
//     name: "Oliver H"
//   },
//   {
//     username: "Harrison3",
//     description: "bleha@gmail.com",
//     name: "Harrison R"
//   },
// ]

// const UserCard = (props) => {
//   return (

//     <div className="card">
//       <div className="card-body">
//         <h5 className="card-title">{props.user.name}</h5>
//         <p className="card-text">{props.user.username}</p>
//         <a href="#" className="card-link">{props.user.description}</a>
//       </div>
//     </div>
//   )
// }
// function App() {
//   return (
//     <div className="container">
//       {users.map(user => <UserCard user={user} />)}
//     </div>
//   )
// }


//   export default App




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

import { useState } from 'react'


const App = () => {

  const [movieState, setMovieState] = useState({

    title: ' ',
    description: ' ',
    release: ' ',
    movie: {}
  })

  const handleInputChange = ({ target: { name, value } }) => {
    setMovieState({...movieState, [name]: value })
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    console.log(movieState)
    setMovieState({
      ...movieState,
      movie: {
        title: movieState.title,
        description: movieState.description,
        release: movieState.release
      },
      title: ' ',
      description: ' ', 
      release: ' '
      
    })
  }


  return (
    <>
      <form>
        <p>
          <label htmlFor="name">Title of Movie</label>
          <input
            type="text"
            name="title"
            value={movieState.title}
            onChange={handleInputChange} />
        </p>
        <p>
          <label htmlFor="description">description</label>
          <input
            type="text"
            name="description"
            value={movieState.description}
            onChange={handleInputChange} />
        </p>
        <p>
          <label htmlFor="release">Release Date</label>
          <input
            type="text"
            name="release"
            value={movieState.release}
            onChange={handleInputChange} />
        </p>
        <p>
          <button onClick={handleFormSubmit}>Submit</button>
        </p>
      </form>
      <div>
        <h1>Title: {movieState.movie.title}</h1>
        <h1>Description: {movieState.movie.description}</h1>
        <h1> Release Date: {movieState.movie.release}</h1>
      </div>
    </>

  )}


export default App