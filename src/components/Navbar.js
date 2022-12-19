import React from 'react'

const Navbar = ({filterItem , menuList}) => {
  return (
    <>
    <nav className='navbar'>

      <div className='btn-group'>

        {
            menuList.map((curr)=>{
                return ( <button className='btn-group__item' onClick={()=> filterItem(curr)}>
                    {curr}</button>)
            })         
        }
       
       
      </div>
       </nav>
      
    </>
  )
}

export default Navbar
