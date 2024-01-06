import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Countries = (props) => {
    let [countries, setCountries] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => { setCountries(data) })
            .catch((error) => console.log(error))
    }, [])

    countries = countries.filter(country => !["State of Israel", "Sahrawi Arab Democratic Republic"].includes(country.name.official))
    countries = countries.filter(country => country.name.official.toLowerCase().includes(props.filter.toLowerCase()))

    return (
        <div className="flex flex-wrap justify-center gap-6">
            {countries.map((country, index) =>
                <Link to={`/country/${country.ccn3}`} key={index} className="rounded border border-black p-5 flex gap-6 flex-col shadow-md flex-4 cursor-pointer">
                    <img className="w-[100%] h-[100%] rounded" src={country.flags.png} alt={country.name.common} />
                    <h4 className="text-center font-medium text-xl">{country.name.official}</h4>
                </Link>
            )}
        </div>
    )
}