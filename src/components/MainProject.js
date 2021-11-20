import Project1 from "./projects/Project1";
import Project2 from "./projects/Project2";
import Project3 from "./projects/Project3";

const MainProject = ({projectNum}) => {

    function returnProject() {
        switch (projectNum) {
            case 1:
                return <Project1/>;
            case 2:
                return <Project2/>;
            case 3:
                return <Project3/>;
            default:
                return <Project1/>
        }
    }
    
    return (
        <div className="lg:w-9/12">
            {returnProject()}
        </div>
    )
}

export default MainProject;