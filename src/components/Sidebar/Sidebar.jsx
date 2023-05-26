import React from 'react'
import { SvgIconSelector } from '../../assets/SvgIconSelector';
import style from './Sidebar.module.css'

const tags = ['stack', 'user', 'package', 'coupon', 'chart', 'settings'];

export const Sidebar = () => {
    return (
        <div className={style.container}>
            <div className={style.column}>
                {tags.map(item => (
                    <div className={style.icon} key={item}>
                        <SvgIconSelector id={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}
