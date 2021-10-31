import React  from 'react';
import './index.css';
import { heroNameBuilder } from '../../Helpers'

const Hero = ({name})=>{
    const {firstPart} = heroNameBuilder(name)
    return  <section id="hero">
    <div class="hero container">
      <div>
        <h1>Hello, <span></span></h1>
        <h1>My Name is <span></span></h1>
        <h1>{firstPart} <span></span></h1>
        <a href="#projects" type="button" class="cta">Portfolio</a>
      </div>
    </div>
  </section>
}


export default Hero;