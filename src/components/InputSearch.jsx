import React, { useState } from 'react'






const InputSearch = ({setSearchLocation}) => {
    
    const recherch = e => {
        e.preventDefault()
        setSearchLocation(e.target.firstChild.value)
    }





    return (
        <form onSubmit={recherch} action="">
            <input type="text" />
            <button>seacrh</button>
        </form>
    )
}

export default InputSearch