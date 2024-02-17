export default async function getExamName() {
    const result =await fetch('http://localhost:5000/examName',{
        
        next: {
            revalidate:10
        }
    })

    return result.json()
}