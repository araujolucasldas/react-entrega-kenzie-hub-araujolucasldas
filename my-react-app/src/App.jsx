import {RoutesMain} from "./routes/RoutesMain"
import "./styles/index.scss"

function App() {
  const notify = ()=>{
    toast.success("teste")
  }
  return (
    <>
      <RoutesMain />
    </>
  )
}

export default App
