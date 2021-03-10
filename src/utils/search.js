const handleSearch = (request, data) => data.filter((country) => (
    country.name.toLowerCase().includes(request.toLowerCase()) ||
    country.capital.toLowerCase().includes(request.toLowerCase())
))
export default handleSearch