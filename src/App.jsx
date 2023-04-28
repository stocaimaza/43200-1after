
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Hola Mundo"}/>
    </>
  )
}

export default App
