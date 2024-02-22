
export default async function getAllTeacher() {
    const result =await fetch('https://ixth-class-sever-omarfarukee.vercel.app/all-teachers',{
        
        next: {
            revalidate:10
        }
    })

    return result.json()
}
