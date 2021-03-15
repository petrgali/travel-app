import React from "react"

export function Country(props) {
    console.log(props.match.params.id)
    return <h1>Country</h1>
}

export default Country
