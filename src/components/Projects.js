
const Projects = ({projectNum, setProjectNum}) => {
    
    function onClickProject(num) {
        setProjectNum(num);
    }

    return (
        // <div className="flex flex-col h-full justify-center">
        //     <h2 className="text-center text-2xl">Pick a project</h2>
            <div className="grid grid-flow-row grid-cols-2 grid-rows-3 gap-4 p-4">
                <div className="bg-green-300 p-2 drop-shadow rounded flex flex-col justify-center 
                    hover:bg-purple-400 transform hover:-translate-y-1 transition duration-500 ease-in-out cursor-pointer"
                    onClick={() => onClickProject(1)}>
                    <h3 className="text-5xl">1</h3>
                    <div>Shift Scheduling - MySchedule</div>
                    <div>MERN</div>
                </div>
                <div className="bg-green-300 p-2 drop-shadow rounded flex flex-col justify-center 
                    hover:bg-purple-400 transform hover:-translate-y-1 transition duration-500 ease-in-out cursor-pointer"
                    onClick={() => onClickProject(2)}>
                    <h3 className="text-5xl">2</h3>
                    <span>Trip Experiences</span>
                    MERN, GraphQL, Apollo
                </div>
                <div className="bg-green-300 p-2 drop-shadow rounded flex flex-col justify-center 
                    hover:bg-purple-400 transform hover:-translate-y-1 transition duration-500 ease-in-out cursor-pointer"
                    onClick={() => onClickProject(3)}>
                    <h3 className="text-5xl">3</h3>
                    <span>Substring KMT Search</span>
                    React, Redux, Tailwind
                </div>
                <div className="bg-green-300 p-2 drop-shadow rounded">
                    <h3 className="text-5xl">4</h3>
                    <span>Shift Scheduling - MySchedule</span>
                    MERN
                </div>
                <div className="bg-green-300 p-2 drop-shadow rounded">
                    <h3 className="text-5xl">5</h3>
                    <span>Shift Scheduling - MySchedule</span>
                    MERN
                </div>
                <div className="bg-green-300 p-2 drop-shadow rounded">
                    <h3 className="text-5xl">6</h3>
                    <span>Shift Scheduling - MySchedule</span>
                    MERN
                </div>
            </div>
        // </div>
    )
}

export default Projects;