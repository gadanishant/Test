const Signup = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const countryDropdown = document.getElementById('country');

            // Add each country as an option in the dropdown
            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.name.common;
                option.textContent = country.name.common;
                countryDropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching countries:', error));
    return (
        <>
            <h3>Signup!</h3>
        </>
    );
}

export default Signup;