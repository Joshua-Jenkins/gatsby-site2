import React from 'react'
import Link from 'gatsby-link'

const Menu = () => 
   (
    <div style={{
        background: '#fafafa',
        paddingTop: '10px'
    }}>
      
      <ul stlye={{
         listStyle: 'none',
         display: 'flex',
         justifyContent: 'space-evenly' 
      }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        
      </ul>
    </div>
  )

export default Menu