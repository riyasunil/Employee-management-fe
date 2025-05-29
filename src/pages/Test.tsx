import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Test = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearchParamsSet=()=>{
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set("type", "kjdfejr")
        setSearchParams(newSearchParams)
    }

    const handleSearchParamsFetch = () => {
        console.log(Object.fromEntries(searchParams.entries()))
    }
  return (
    <div>
        <button onClick={handleSearchParamsSet}>set</button>
        <button onClick={handleSearchParamsFetch}>fetch</button>
    </div>
  )
}

export default Test