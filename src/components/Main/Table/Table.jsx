import React, { useState } from 'react'
import { TableBody } from './TableBody/TableBody'
import { TableHeader } from './TableHeader/TableHeader'

export const Table = ({data}) => {
    const [isActive, setActive] = useState(0);

    const handleClick = (index) => {
        if(isActive === index) {
            return setActive(null)
        }

        setActive(index);
    }

    return (
        <>
            <TableHeader />
            {data.map((item, index) => (
                <TableBody 
                    data={item} 
                    isActive={isActive} 
                    handleClick={handleClick}
                    index={index}
                    key={index}
                />
            ))}
        </>
    )
}
