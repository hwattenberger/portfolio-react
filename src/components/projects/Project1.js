import project1Img from './../../images/Scheduling App - Schedule.png'
import TextAnimation from '../TextAnimation';
import Parallax from '../../Parallax';

const tools = ["React", "NodeJS", "Express", "MongoDB"];

const Project1 = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center">
                <Parallax>
                    <div className="bg-gray-300 p-2 rounded h-full flex items-center justify-center">
                        <img src={project1Img} className=""/>
                    </div>
                </Parallax>
                <div className="ml-4">
                    <h2 className="text-2xl p-2"><TextAnimation>Shift Scheduling - MySchedule</TextAnimation></h2>
                    <div className="box-border w-full flex flex-wrap">
                        {tools.map((tool)=>(
                        <span className="bg-blue-300 m-1 px-2 py-1 rounded" key={tool}>
                            {tool}
                        </span>
                        ))}
                    </div>
                    <p className="p-2">This is a full stack MERN application geared towards restaurants that have many shift workers where 
                        availability could change throughout a week (students, part time workers, etc).  Staff specify their weekly
                        availability and time off requests.  Then the manager can create a schedule based on those inputs or copy
                        a schedule from the past week.
                    </p>
                    <p className="p-2">
                        Features include authentication (local or through Google), uploading profile pictures (using Cloudinary), 
                        and various admin tasks related to creating shifts & user roles & schedules.
                    </p>
                    <div className="">
                        <button className="bg-blue-400 m-1 px-2 py-1 rounded">Learn More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project1;