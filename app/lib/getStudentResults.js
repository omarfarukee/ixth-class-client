export default async function getAllResults() {
    const result =await fetch('https://ixth-class-sever-omarfarukee.vercel.app/results',{
        
        next: {
            revalidate:10
        }
    })

    return result.json()
}
