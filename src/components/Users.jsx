import React from 'react'

export default function Users({ addUser, users }) {


    return (
        <div>
            <div>
                {/* AFFICHER LA LISTE DES USERS GRACE à MAP */}
                {users.map(e => {
                    return <div>
                        <h1>{e.name}</h1>
                        <h1>{e.age}</h1>
                        <h1>{e.email}</h1>
                        <h1>{e.profession}</h1>
                    </div>
                })}
            </div>
            <form onSubmit={addUser}>
                <div>
                    <label>Name</label>
                    <input type="text" name='name' />
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" name='age' />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name='email' />
                </div>
                <div>
                    <label>Profession</label>
                    <select name="profession">
                        <option value="Web Dev">Web Dev</option>
                        <option value="Web Designer">Web Designer</option>
                        <option value="Data Scientist">Data Scientist</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button type='submit'>Ajouter un utilisateur</button>
            </form>
        </div>
    )
}
