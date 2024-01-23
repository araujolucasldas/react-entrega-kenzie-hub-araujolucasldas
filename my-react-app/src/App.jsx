import {RoutesMain} from "./routes/RoutesMain"
import "./styles/index.scss"
import { TechProvider } from './providers/TechContext.jsx'


function App() {
  return (
    <>
      <TechProvider>
        <RoutesMain />
      </TechProvider>
    </>
  )
}

export default App
