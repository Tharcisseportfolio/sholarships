
import './CollegeList.css'

interface CollegeListProps {

    name: string;
    location: string;
    description: string;
    length?: number;
    students: number;
    acceptanceRate: number;

}

const CollegeList = () => {

    const collegeList: CollegeListProps[] = [
        {
            name: 'UC Berkeley',
            location: 'Berkeley, CA',
            length: 4,
            description: "Nestled in the heart of a vibrant city, Our College offers students the perfect blend of academic excellence and dynamic urban life. Our campus buzzes with energy, from state-of-the-art academic facilities where you'll learn from renowned professors, to diverse extracurricular clubs and organizations that allow you to pursue your passions. Outside the classroom, the city provides ",
            students: 42091,
            acceptanceRate: 17
        },
        {
            name: 'Stanford University',
            location: 'Stanford, CA',
            length: 4,
            description: "Nestled in the heart of a vibrant city, Our College offers students the perfect blend of academic excellence and dynamic urban life. Our campus buzzes with energy, from state-of-the-art academic facilities where you'll learn from renowned professors, to diverse extracurricular clubs and organizations that allow you to pursue your passions. Outside the classroom, the city provides ",
            students: 15845,
            acceptanceRate: 4
        },
        {
            name: 'Harvard University',
            location: 'Cambridge, MA',
            length: 4,
            description: "Nestled in the heart of a vibrant city, Our College offers students the perfect blend of academic excellence and dynamic urban life. Our campus buzzes with energy, from state-of-the-art academic facilities where you'll learn from renowned professors, to diverse extracurricular clubs and organizations that allow you to pursue your passions. Outside the classroom, the city provides ",
            students: 31120,
            acceptanceRate: 5
        },

    ]


  return (
    <div className='top-colleges'>
        <h1 className='top-colleges-head'>Top 10 colleges in the US</h1>
            {collegeList.map((college) => {
                return (
                    <div className='top-colleges-body'>
                        <h1 className='top-college-name'>{college.name}</h1>

                        <div className='top-college-name-1'>
                            <h2 className='top-college-location'>{college.location}</h2>
                            <h2 className='top-college-length'>{college.length} Year</h2>
                            <h2 className='top-college-students'>{college.students} Students</h2>
                            <h2 className='top-college-review'> 0 reviews</h2>
                        </div>

                        <div className='top-college-name-2'>
                            <p className='top-college-description'>{college.description}</p>
                        </div>

                        

                        <div className='top-college-name-3'>
                            <h2 className='top-college-acceptance-rate'> Acceptance Rate {college.acceptanceRate} %</h2>
                            <h2 className='top-college-studens'> Students : {college.students}</h2>
                            <h2 className='top-college-price'>Net price : 0</h2>
                        </div>

                        <hr />

                        <div className='top-college-name-4'>
                            {/* <button className='btn btn-primary p-2'>Apply</button> */}
                            <button className='btn btn-primary p-2'>Visit</button>
                            <button className='btn btn-primary p-2'>Review</button>
                            <button className='btn btn-success p-2'>Add to list</button>
                            
                        </div>
                        
                        
                    </div>


                )
            })}
    </div>
  )
}

export default CollegeList

