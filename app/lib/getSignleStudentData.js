export default async function getSingleStudentDetails(id) {

    const result = await fetch(`https://ixth-class-sever-omarfarukee.vercel.app/student/${id}`)

    if(!result.ok){
        throw new Error('there was an error fetching')
    }

    return result.json()
}