export default async function getSingleStudentDetails(id) {

    const result = await fetch(`http://localhost:5000/student/${id}`)

    if(!result.ok){
        throw new Error('there was an error fetching')
    }

    return result.json()
}