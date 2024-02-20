

export default async function getAllStudent() {
    const result =await fetch('https://ixth-class-sever-omarfarukee.vercel.app/students',{
        
        next: {
            revalidate:10
        }
    })

    return result.json()
}
