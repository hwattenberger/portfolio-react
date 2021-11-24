import project4Img from './../../images/Todo List Still Image.png';
import TextAnimation from '../TextAnimation';
import Parallax from '../../Parallax';

const tools = ["Vanilla JS", "NodeJS", "Express", "MongoDB"];

const Project2 = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center">
                <Parallax>
                    <div className="bg-gray-300 p-2 rounded h-full flex items-center justify-center">
                        <img src={project4Img} alt="project 4"/>
                    </div>
                </Parallax>
                <div className="ml-4">
                    <h2 className="text-2xl p-2"><TextAnimation>Todo List Application</TextAnimation></h2>
                    <div className="box-border w-full flex flex-wrap">
                        {tools.map((tool)=>(
                        <span className="bg-blue-300 m-1 px-2 py-1 rounded" key={tool}>
                            {tool}
                        </span>
                        ))}
                    </div>
                    <p className="p-2">
                        This is a fancy responsive todo list.  Full CRUD, passport authentication.  I was inspired by watching someone drag around paragraphs and wanted make a todo list that did something similar.  Features include adding and updating todos for yourself and other people.  Privating
                        your todo list.  Updating the styles to fit your mood (3 different options).  Set due dates and use calendar view to visualize and update dates.
                    </p>
                    <div className="">
                        <a href="images/Todo Project.gif" target="_blank" rel="noreferrer"><button className="bg-blue-400 m-1 px-2 py-1 rounded">View Workflow</button></a>
                        <a href="https://dry-badlands-49476.herokuapp.com/" target="_blank" rel="noreferrer"><button className="bg-blue-400 m-1 px-2 py-1 rounded">View Site</button></a>
                        <a href="https://github.com/hwattenberger/todo" target="_blank" rel="noreferrer"><button className="bg-blue-400 m-1 px-2 py-1 rounded">Source Code</button></a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Project2;