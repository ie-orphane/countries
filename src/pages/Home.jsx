import { useState } from "react"
import { Countries } from "../components/countries"

export const Home = () => {
    const [filter, setFilter] = useState("")
    
    return (
        <main className="flex flex-col items-center p-2 gap-6">
            <input className="border border-gray-800 border-solid outline-none p-2 rounded w-[25%]" onChange={(e) => {setFilter(e.target.value)}} type="text" placeholder="Search" />
            <Countries filter={filter}/>
        </main>
    )
}
