import React from 'react'
import { SvgIconSelector } from '../../assets/SvgIconSelector'
import style from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={style.nav}>
            <SvgIconSelector id='logo' />
            <div className={style.flex}>
                <SvgIconSelector id='notification' className={style.icon} />
                <div className={style.profile}>
                    <div className={style.avatar} />
                    <div className={style.user}>
                        <p className={style.name}>Иванов В. А.</p>
                        <p className={style.job}>Должность</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
