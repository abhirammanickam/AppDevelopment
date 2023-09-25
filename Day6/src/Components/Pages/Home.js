import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../Assets/Home.css'
import Sidebar from './Sidebar'
function Home() {
  return (
    <div>
    <Navbar/>
    <div>
    <Sidebar/>
    <div className='container'>
    <h1 className='welcome-1'>Welcome</h1>
    
    <div className='row mx-3'>
       <div className='col-sm-3 mx-auto'>
         <img  src="https://tse2.mm.bing.net/th?id=OIP.4EH7ERtgBrRjMI6kclBxHQHaE8&pid=Api&P=0&h=180"/>
       </div>
       <div className='col-sm-3 mx-5'>
         <img  className="lazyloaded"src="https://images.unsplash.com/photo-1542147864-027e5d1330c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"/>
       </div>
       <div className='col-sm-3 mx-5'>
         <img  className="lazyloaded" src="https://images.unsplash.com/photo-1532588213355-52317771cce6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"/>
       </div>
    </div>
    </div>
    <div className='container'>
    <div className='row'>
       <div className='col-sm-4'>
        
       </div>
       <div className='col-sm-4'>
        
       </div>
       <div className='col-sm-4'>
         
       </div>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home;