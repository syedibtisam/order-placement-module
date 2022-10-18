import React from 'react'
import Pizza from '../components/Pizza'
import pizzas from '../data'

export default function HomeScreen() {
  return (
    <div className='row'>
        {pizzas.map( pizza => {
            return <div className='col-md-4'>
                <div>
                    <Pizza pizza = {pizza}/>
                </div>
            </div>

        })}
    </div>
  )
}
