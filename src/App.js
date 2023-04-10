import { useState, useEffect } from "react"

const App = () => {
  
  const [value, setValue] = useState(0)
  const [test, setTest] = useState(0)

  useEffect(() => {
    const button = document.querySelector(".btn")
    if (value > 1) {
      button.textContent = `Klik cislo ${value}`
    } else {
      button.textContent = `Klikni`
    }
    
  })

  useEffect(() => {
    document.title = `Novy titulok ${test}`
  },[test])

  return <div>
    <h1>test</h1>
    <p>{value}</p>
    {console.log("ja som return")}
    <button className="btn" onClick={() => setValue(value + 1)}>Klikni</button>
    <button className="btn-test" onClick={ () => setTest(test + 1)}>Titulok</button>
  </div>
}

export default App