import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Search from './pages/Search'
import Home from './pages/Home'
import CommingSoon from './pages/CommingSoon'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search/:keyword' element={<Search/>}/>
            <Route path='*' element={<CommingSoon/>}/>
        </Routes>
    )
}

export default App
