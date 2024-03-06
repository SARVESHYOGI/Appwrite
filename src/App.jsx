import React, { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from "./store/authslice";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
        setLoading(false)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <div>Loading...</div>
  } else {
    return (

      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div>
          <Header />
          <main>
            {/* TODO: <>outlet</> */}
          </main>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
