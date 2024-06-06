"use client"

import { ApiCalls } from "@/utils/calls"
import React ,{ useState } from "react"

export const Form = ({setList}:{setList:React.SetStateAction<any>}) => {
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const type = formData.get('type') as string
        setLoading(true)
        try {
            const data = await ApiCalls.getList(type)
            setList(data)
            return data
        } catch (error:any) {
            console.log(error.message)
            setErrorMessage(error.message)
            return alert(error.message)
        }finally{
            setLoading(false)
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Select Type</label>
                    <select name="type" id="type" className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black">
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="species">Species</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="starships">Starships</option>
                    </select>
                </div>
                <button id='submit' type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Get List</button>
            </form>
            {errorMessage && <div className="text-center text-red-500">{errorMessage}</div>}
            {loading && <div className="text-center">Loading...</div>}
        </>
    )
}