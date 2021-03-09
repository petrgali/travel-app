const handleSearch = (request, data) => {
    let response = data.reduce((resp, country) => {
        if (country.name.toLowerCase().includes(request.toLowerCase())
            || country.capital.toLowerCase().includes(request.toLowerCase()))
            resp.push(country)
        return resp
    }, [])
    return response
}

export default handleSearch