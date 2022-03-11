import React from 'react'
import './trainingheader.css'
import {TrainingHeaderItem} from './trainingheaderItems'
import {Link} from 'react-router-dom'


export default function Trainingheader() {
  return (
    <div className='trainingheader'>
        <div className='trainingheaderWrapper'>
            <ul className='content'>
                {TrainingHeaderItem.map((item,index)=>{
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                })}
            </ul>
        </div>
    </div>
  )
}
