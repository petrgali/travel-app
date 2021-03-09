const handleSearch = (request, data) => {
    return data.reduce((resp, country) => {
        if (country.name.toLowerCase().includes(request.toLowerCase())
            || country.capital.toLowerCase().includes(request.toLowerCase()))
            resp.push(country)
        return resp
    }, [])
}

export default handleSearch