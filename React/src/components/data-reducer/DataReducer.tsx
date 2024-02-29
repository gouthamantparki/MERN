import { useReducer, useState } from 'react'
import './DataReducer.css'

export const DataReducer = () => {

    const initialValue = [{
        id: '',
        name: '',
        age: '',
        isAdmin: 'No'
    }]

    const initialUsers = [
        { id: '101', name: 'John', age: '22', isAdmin: false },
        { id: '102', name: 'Rock', age: '23', isAdmin: false },
        { id: '103', name: 'Sam', age: '25', isAdmin: true }
    ]

    // const [users, dispatchUser] = useReducer(userReducer, initialValue)

    const [newUser, addUser] = useState(initialValue)


    function handleChange(e: any) {
        const { name, value } = e.target

        addUser((current) => {
            if (e.target.type == 'checkbox') {
                return {
                    ...current,
                    isAdmin: value ? "YES" : "NO"
                }
            }
            else {
                return {
                    ...current,
                    [name]: value
                }
            }
        })
    }

    // userReducer(user: any, action: ) {
    //     switch 
    // }

    function handleAdd() {

    }

    return (
        <>
            <div className="center">
                <form action="" className="form">
                    <p><input type="text" placeholder="Name" name="name" onChange={handleChange} /></p>
                    <p><input type="text" placeholder="Age" name="age" onChange={handleChange} /></p>
                    <p>IsAdmin: <input type="checkbox" name="isAdmin" onChange={handleChange} /></p>
                    <p className=""><button type="button">Update</button><button type="button" onClick={handleAdd}>Add</button></p>
                </form>
                <hr />
                {
                    initialUsers.map((user) => {
                        return (
                            <div className=''>
                                <div className="user-list">
                                    <label>Name : {user.name}</label>
                                    <label>Age : {user.age}</label>
                                    <label>IsAdmin : {user.isAdmin ? "YES" : "NO"}</label>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
