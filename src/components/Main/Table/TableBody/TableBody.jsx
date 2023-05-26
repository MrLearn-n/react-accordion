import React from 'react'
import { Tab } from './Tab/Tab';

export const TableBody = ({data, index, isActive, handleClick}) => {    
    return (
        <>
            <Tab 
                title={data.label} 
                content={data.content}
                isActive={isActive}
                handleClick={handleClick}
                index={index}
            />
        </>
    )
}
