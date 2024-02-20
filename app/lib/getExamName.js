export default async function getExamName() {
    const result =await fetch('https://ixth-class-sever-omarfarukee.vercel.app/examName',{
        
        next: {
            revalidate:10
        }
    })

    return result.json()
}