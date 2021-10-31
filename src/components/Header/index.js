import React from 'react';
import './index.css'
import { heroNameBuilder } from '../../Helpers'
const Header = ({name, menuEntries})=>{

    const {
      firstPartFirstLetter, 
      secondPartFirstLetter, 
      firstPartRemainingLetters, 
      secondPartRemainingLetters
} = heroNameBuilder(name)
    return <section id="header">
    <div className="header container">
      <div className="nav-bar">
        <div className="brand">
          <a href="#hero">
          <h1><span>{firstPartFirstLetter}</span>{firstPartRemainingLetters} <span>{secondPartFirstLetter}</span>{secondPartRemainingLetters}</h1>
          </a>
        </div>
        <div className="nav-list">
          <div className="hamburger">
            <div className="bar"></div>
          </div>
          <ul>
            { menuEntries.map((item, index)=>
                 <li key={index}><a href={index!==0?"#"+item.toLowerCase():"#hero"} data-after={item}>{item}</a></li>
              )
            }
          </ul>            
        </div>
      </div>
    </div>
  </section>
}

export default Header;