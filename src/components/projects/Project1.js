import project1Img from './../../images/Scheduling App - Schedule.png'

const Project1 = () => {
    return (
        <div className="relative m-4">
            <h2 className="text-3xl">Project 1 - Shift Scheduling - MySchedule</h2>
            <div className="bg-blue-300	rounded p-2 flex">
                <div>
                <p className="p-2">This is a full stack MERN application geared towards restaurants that have many shift workers where 
                    availability could change throughout a week (students, part time workers, etc).  Staff specify their weekly
                    availability and time off requests.  Then the manager can create a schedule based on those inputs or copy
                    a schedule from the past week.
                </p>
                <p className="p-2">
                    Features include authentication (local or through Google), uploading profile pictures (using Cloudinary), 
                    and various admin tasks related to creating shifts & user roles & schedules.
                </p>
                <p className="p-2">
                    If you visit site and do not want to create your own user, you can use the following:<br/>
                    Admin User: willy@willy.com Password: willy<br/>
                    Non-Admin User: jill@jill.com Password: jill
                </p>
                </div>
                <div>
                <img src={project1Img} className=""/>
                </div>
            </div>
            {/* <div className="w-1/2 p-4 bg-blue-300 rounded absolute bottom-500">
                <img src={project1Img} className=""/>
            </div> */}
        </div>
    )
}

export default Project1;