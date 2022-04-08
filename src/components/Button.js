import React, { useContext } from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'


function Button({ value, onHandleClick }) {

    return (
        <>
            <button onClick={onHandleClick} className={clsx(styles.btn)}>{value}</button>
        </>
    )
}

export default Button