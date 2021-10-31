import React from 'react';
import './index.css'

const buildHeroName = (name ) =>{

  if(name.length === 0 || name.split(' ').length<2)
      throw new Error(`${name} does not matches the expected firstName lastName template`)
  const firstPart = name.split(' ')[0];
  const secondPart = name.split(' ')[1];
  const firstPartFirstLetter = firstPart.charAt(0);
  const secondPartFirstLetter = secondPart.charAt(0);
  const firstPartRemainingLetters = firstPart.slice(1, firstPart.length);
  const secondPartRemainingLetters= secondPart.slice(1, secondPart.length);
  return {
            firstPartFirstLetter, 
            secondPartFirstLetter, 
            firstPartRemainingLetters, 
            secondPartRemainingLetters
  }
}
const Header = ({name, menuEntries})=>{

    const {
      firstPartFirstLetter, 
      secondPartFirstLetter, 
      firstPartRemainingLetters, 
      secondPartRemainingLetters
} = buildHeroName(name)
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