

export default async function getAllStudent() {
    const result =await fetch('https://ixth-class-sever-2nvj5rvt7-omarfarukee.vercel.app/students',{
        
        next: {
            revalidate:10
        }
    })

    return result.json()
}
