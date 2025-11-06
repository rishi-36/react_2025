import React from 'react'

const Form = () => {

    function submit(e) {
        e.preventDefault()
        console.log('first')
    }   

    return (
        <div>

            <form onSubmit={submit} action="">
                <input type="text" placeholder='Enter name' />
                <input type="text" placeholder='Enter age' />

                <button>Submit</button>

            </form>
        </div>
    )
}

export default Form