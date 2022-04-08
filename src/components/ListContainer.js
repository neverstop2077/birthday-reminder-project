import React, { useState } from 'react'
import data from '../data/data'
import BirthdayList from './BirthdayList'
import Button from './Button'
import FormAdd from './FormAdd'

function ListContainer() {
    const [birthdayList, setBirthdayList] = useState(data)
    const [formAddState, setFormAddState] = useState(false)

    const handleRemoveItem = (index) => {
        let newList = [...birthdayList]
        newList.splice(index, 1)
        setBirthdayList(newList)
    }
    const handleAddItem = (addItem) => {
        const { name, age, image } = addItem
        let newList = [...birthdayList, {
            id: birthdayList.length + 1,
            ...{ name, age, image }
        }]
        setBirthdayList(newList)
        setFormAddState(false)
    }
    return (
        < >
            <BirthdayList birthdayList={birthdayList} onRemoveItem={handleRemoveItem} />
            {formAddState && <FormAdd onAddItem={handleAddItem} />}
            <Button
                value={formAddState ? "Hide add form" : "Show add form"}
                onHandleClick={() => setFormAddState(!formAddState)}
            />
            <Button
                value="Clear all"
                onHandleClick={() => setBirthdayList([])}
            />
        </>
    )
}

export default ListContainer