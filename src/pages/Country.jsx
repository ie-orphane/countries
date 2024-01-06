import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Country = () => {
    const { code } = useParams()
    const [country, setCountry] = useState()

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            .then((response) => response.json())
            .then((data) => { setCountry(data[0]) })
            .catch((error) => console.log(error))
    }, [])

    return (
        <>
            {country &&
                <div className="h-[100vh] w-[100vw] flex items-center justify-center">
                    <div className="flex w-[75%] h-[75%]">
                        <div className="flex  flex-col  gap-4">
                            <div className="flag flex flex-col gap-5 items-center justify-center shadow rounded border border-zinc-600 p-2">
                                <h1 className="text-center text-xl">Flag</h1>
                                <img className="rounded-xl h-[25vh]" src={country.flags.png} alt={country.name.common} />
                            </div>

                            <div className="coat-of-arms flex flex-col gap-5 items-center justify-center shadow rounded border border-zinc-600 p-2">
                                <h1 className="text-center text-xl">Coat of arms</h1>
                                <img className="rounded-xl h-[25vh]" src={country.coatOfArms.png} alt={country.name.common} />
                            </div>
                        </div>

                        <div className="info w-[75%] grid place-items-center">
                            <div className="w-[50%] h-[50%]">
                                <div className="proprety flex">
                                    <p>Official Name</p>
                                    <p className="ml-auto">{country.name.official}</p>
                                </div>
                                <div className="proprety flex">
                                    <p>Capital</p>
                                    <p className="ml-auto">{country.capital}</p>
                                </div>
                                <div className="proprety flex">
                                    <p>continent(s)</p>
                                    <p className="ml-auto">{country.continents}</p>
                                </div>
                                <div className="proprety flex">
                                    <p>Area</p>
                                    <p className="ml-auto">{country.area} km²</p>
                                </div>
                                <div className="proprety flex">
                                    <p>Code</p>
                                    <p className="ml-auto">{country.cca2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
} 