import './App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'


import Home from "./layouts/Home"
import Pokemones from "./layouts/Pokemones"
import Favoritos from "./layouts/Favoritos"
import NotFound from "./layouts/NotFound"
import Cards from "./layouts/Cards"




const App = () => {
  return (
    <>
    <NavBar />
    <Routes>

      <Route
      path="/"
      element={<Home />} />

      <Route
      path='/pokemones'
      element={<Pokemones />} />

      <Route
      path='/pokemones/:name'
      element={<Cards />} />

      <Route
      path='/favoritos'
      element={<Favoritos />} />

      <Route
      path='/*'
      element={<NotFound />} />

    </Routes>
    </>
  )
}


export default App