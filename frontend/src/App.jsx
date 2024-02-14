import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import DeleteBook from './pages/DeleteBook'
import CreateBook from './pages/CreateBook'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'

const App = () => {
  return (
    <Routes>
      Hi
      <Route path = '/' element = {<Home />} />
      <Route path = '/books' element = {<CreateBook />} />
      <Route path = '/books/delete/:id' element = {<DeleteBook />} />
      <Route path = '/books/find/:name' element = {<ShowBook />} />
      <Route path = '/books/update/:id' element = {<EditBook />} />
    </Routes>
  )
}

export default App;