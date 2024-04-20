import './App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'

import Home from "./layouts/Home"
import Pokemon from "./layouts/Pokemones"
import Favoritos from "./layouts/Favoritos"
import NotFound from "./layouts/NotFound"



const App = () => {
  return (
    <>
    <NavBar />
    <Routes>

      <Route
      path="/"
      element={<Home />} />

      <Route
      path='/pokemon'
      element={<Pokemon />} />

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