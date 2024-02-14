export default async function getAllResults() {
    const result =await fetch('http://localhost:5000/results',{
        
        next: {
            revalidate:10
        }
    })

    return result.json()
}
