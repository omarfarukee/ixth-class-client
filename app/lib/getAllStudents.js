

export default async function getAllStudent() {
    const result =await fetch('http://localhost:5000/students',{
        
        next: {
            revalidate:10
        }
    })

    return result.json()
}
