import React, { useState } from 'react'
import { SvgIconSelector } from '../../../../../assets/SvgIconSelector';
import style from './Tab.module.css'

export const Tab = ({title, content, index, isActive, handleClick}) => {
    const [currentStatus, setCurrentStatus] = useState()
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e, index) => {
        setCurrentStatus(e.target.value);
    }

    return (
        <div className={style.tab}>
            <div className={style.menu} onClick={() => handleClick(index)}>
                <div className={style.title}>
                    <h1>{title}</h1>
                    {isActive === index ? (<SvgIconSelector id='arrowActive' />) : (<SvgIconSelector id='arrowNotActive' />)}
                </div>
            </div>
            <div className={isActive === index ? 'content show' : 'content'} >
                {content.map((item, index) => (
                        <div className={style.content} key={index}>
                            <div className={style.text}> 
                                <p>{item.date}</p>
                            </div>
                            <div className={style.text}> 
                                <p>{item.taskCode}</p>
                            </div>
                            <div className={style.text}>  
                                <p>{item.taskCode}</p>
                            </div>
                            <div className={style.text}> 
                                <p>{item.task}</p>
                            </div>
                            <div>
                                <select className={style.select} onChange={(e) => handleChange(e, index)}>
                                    <option value='Выполнено' >Выполнено</option>
                                    <option value='На паузе' >На паузе</option>
                                    <option value='В работе' >В работе</option>
                                </select>
                            </div>
                            <div className={style.text}>
                                <p>{item.owner}</p>
                            </div>
                            <div className={style.text}>
                                <p>{item.reassign}</p>
                            </div>
                            <div className={style.text}>
                                <p>{item.priority}</p>
                            </div>
                            <div className={style.text}>
                                <p>{item.comment}</p>
                            </div>
                            <div className={style.text}>
                                <p>{item.planTime}</p>
                            </div>
                            <div className={style.text}>
                                <p>{item.factTime}</p>
                            </div>
                            <div className={style.text}>
                                <p>{item.start}</p>
                            </div>
                            <div className={style.text}>
                                <p>{item.finish}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
