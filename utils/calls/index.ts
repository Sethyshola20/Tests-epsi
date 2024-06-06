export class ApiCalls {
    static ApiBaseUrl = "https://swapi.dev/api/"

    static async getList(type: string) {
        try {
            let url = `${this.ApiBaseUrl}${type}/`
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            let allResults: any[] = []

            while (url) {
                const response = await fetch(url, options)
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const data = await response.json()
                allResults = allResults.concat(data.results)
                url = data.next 
            }

            return allResults
        } catch (error: any) {
            return {
                error: error.message
            }
        }
    }
}
