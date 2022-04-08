import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormAdd.module.scss'
import clsx from 'clsx';
import Button from './Button';

const FormAdd = ({ onAddItem }) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [image, setImage] = useState('')
    const handleSubmit = (e) => {
        if (onAddItem) {
            e.preventDefault();

            onAddItem({ name, age, image })
            setName('')
            setAge(0)
            setImage('')
        }
    }
    return (
        <div>
            <div className={clsx(styles.form)}>
                <div className={clsx(styles.formControl)}>
                    <label htmlFor='name' className={clsx(styles.formLabel)}>Name:</label>
                    <input
                        autoComplete="off"
                        placeholder='Enter name'
                        id='name'
                        type="text"
                        className={clsx(styles.formInput)}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className={clsx(styles.formControl)}>
                    <label htmlFor='age' className={clsx(styles.formLabel)}>Age:</label>
                    <input
                        autoComplete="off"
                        id='age'
                        type="number"
                        className={clsx(styles.formInput)}
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>
                <div className={clsx(styles.formControl)}>
                    <label htmlFor='image' className={clsx(styles.formLabel)}>Image:</label>
                    <input
                        autoComplete="off"
                        placeholder='Enter image URL'
                        id='image'
                        type="text"
                        className={clsx(styles.formInput)}
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <Button value="Submit" onHandleClick={handleSubmit} />
            </div>
        </div>
    );
};

FormAdd.propTypes = {
    onAddItem: PropTypes.func
};

FormAdd.defaultProps = {
    onAddItem: null
}

export default FormAdd;