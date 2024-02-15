export default async function getSingleResult(id) {

    const result = await fetch(`http://localhost:5000/result/${id}`)

    if(!result.ok){
        throw new Error('there was an error fetching')
    }

    return result.json()
}