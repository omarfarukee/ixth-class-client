export default async function getSingleResult(id) {

    const result = await fetch(`https://ixth-class-sever-omarfarukee.vercel.app/result/${id}`)

    if(!result.ok){
        throw new Error('there was an error fetching')
    }

    return result.json()
}