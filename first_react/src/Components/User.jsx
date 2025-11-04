import React from 'react'

const User = () => {

    const arr = [1,2,3,4]

  return (
    <>
        {
            arr.map((ele) => {
                return ele;
            })
        }

    </>
  )
}

export default User