import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Welcome } from './Welcome'
import { Button } from './Button'
import { UserCard } from './UserCard'
import { Product } from './Product'
import { Article } from './Article'

const handleClick =() => {
  alert("случился буп") 
}

function App () {
  return (
    <div>
      <UserCard name={"Николай"} age={35}/>
        
          <h1>Product:</h1>
      <Product title={"Casio"} summary={"The G-Shock is a line of watches manufactured by the Japanese electronics company Casio."} price={999.99}/>

      <Article user={"путник"} name={"лесник"}/>
      <Article user={"Странник"} name={"Гэндальф"}/>

      <Button onClick={handleClick} text={"Бупни меня!"}/>

    </div>
  );
}

// function App() {

//   const [count, setCount] = useState(0)

//   const handleClick = () => {
//     setCount(count +1)
//   }

//   return (
//     <div>
//       <h1>Button clicked {count} times</h1>
//       <Button onClick={handleClick}/>
//     </div>
//   )
// }

export default App
