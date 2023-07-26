import React, {useState, useEffect} from 'react'

const [data, setData] = useState([{}])
useEffect(() => {
  fetch('/home')
  .then(res => res.json())
  .then(data => {
    setData(data)
    console.log(data)
  })
},[])

function App() {
  return (
    <div></div>
  )
}

export default App