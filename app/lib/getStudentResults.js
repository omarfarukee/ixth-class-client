export default async function getAllResults() {
    const result =await fetch('https://ixth-class-sever-2nvj5rvt7-omarfarukee.vercel.app/results',{
        
        next: {
            revalidate:10
        }
    })

    return result.json()
}
