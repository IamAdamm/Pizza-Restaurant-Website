import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>At Pizza, we believe that great pizza starts with the best ingredients. That's why we use only the finest, freshest ingredients in our recipes. From our hand-tossed dough to our rich, flavorful sauces, every element of our pizzas is crafted with care and precision. We source our toppings from trusted suppliers to ensure that every bite is a burst of deliciousness.

Whether you're a fan of classic Margherita, crave the bold flavors of a Meat Lovers, or prefer a veggie-packed delight, our diverse menu has something for everyone. And if you're feeling adventurous, you can create your own pizza masterpiece with our extensive selection of toppings.</p>
        </div>
    </div>
  )
}

export default About