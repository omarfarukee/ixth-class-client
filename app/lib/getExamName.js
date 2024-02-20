export default async function getExamName() {
    const result =await fetch('https://ixth-class-sever-2nvj5rvt7-omarfarukee.vercel.app/examName',{
        
        next: {
            revalidate:10
        }
    })

    return result.json()
}