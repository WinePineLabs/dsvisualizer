import React from 'react'
import './static_half_style.css'
import Algos from './algos'
export default class StaticHalf extends React.Component{
    render(){
        return(
            <div className='staticDiv'>
                <div className='sitename'>
                    <h1>Data Structures & Algorithms Visualizer</h1>
                </div>

                <div className='options'>

                    <div className='data'>
                        <select name="Data Structure" id="">
                            <option value="">Stacks</option>
                            <option value="">BinaryTree</option>
                            <option value="">Trie</option>
                            <option value="">Heap</option>
                        </select>
                        <input value='Add Item' type="text" name='Add'/>
                        <button>Add Item</button>
                    </div>
                    
                    <Algos />

                </div>
            </div>
        )
    }
}