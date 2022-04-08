import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './BirthdayList.module.scss';

const BirthdayList = ({ birthdayList, onRemoveItem }) => {
    const handleOnClickRemove = (index) => {
        if (onRemoveItem) {

            onRemoveItem(index)
        }
    }
    return (
        <>
            <h3 className={clsx(styles.listHeading)}>{birthdayList.length} birthdays today</h3>
            <ul className={clsx(styles.list)}>
                {
                    birthdayList.map((i, index) => {
                        const { id, name, age, image } = i
                        return (
                            <li key={id} className={clsx(styles.itemList)}>
                                <div className={clsx(styles.itemListShow)}>
                                    <img className={clsx(styles.itemListImg)} src={image} alt={name} />
                                    <div className={clsx(styles.itemListInfo)}>
                                        <p className={clsx(styles.itemListName)}>{name}</p>
                                        <p className={clsx(styles.itemListAge)}>{age} years</p>
                                    </div>
                                </div>
                                <span
                                    className={clsx(styles.closeBtn)}
                                    onClick={() => handleOnClickRemove(index)}
                                >&times;</span>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
};


BirthdayList.propTypes = {
    birthdayList: PropTypes.array,
    onRemoveItem: PropTypes.func,
};

BirthdayList.defaultProps = {
    birthdayList: [],
    onRemoveItem: null
}


export default BirthdayList;