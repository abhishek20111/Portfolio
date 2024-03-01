import React from 'react';
import Js from './assets/js.gif'
import ReactIcon from './assets/react.gif'
import Node from './assets/node.gif'
import HTML from './assets/html.gif'
import CSS from './assets/css.gif'
import GIT from './assets/git.gif'
import Express from './assets/express.png'
import Redux from './assets/redux.png'
import Mongodb from './assets/mongodb.gif'
import Tailwind from './assets/tailwind.png'
import Docker from './assets/docker.gif'
import Java from './assets/java.gif'


const Skills = () => {
    const skills = [
        [Java, 'Java'],
        [HTML, 'HTML'],
        [CSS, 'CSS3'],
        [Js, 'JavaScript'],
        [ReactIcon, 'React.js'],
        [Node, 'Node.js'],
        [GIT, 'Git'],
        [Mongodb, 'MongoDB'],
        [Express, 'Express.js'],
        [Redux, 'Redux'],
        [Tailwind, 'Tailwind'],
        [Docker, 'Docker']
    ];
    return (
        <div className="md:mt-2 mt-16 sm:mt-4 h-screen md:h-[90dvh] fullGetScreen">
            <div className="flex flex-col">
                <div className="m-auto my-5 flex gap-3 flex-col">
                    <p className="text-blue-600 flex justify-center text-2xl font-semibold">My Technical Skills 🚀</p>
                    <h2 className="sm:text-4xl justify-center flex font-bold">Skills</h2>
                    <p className="text-gray-400 font-normal text-center text-xl">A showcase of my technical expertise and skills.</p>
                </div>
                <div className="sm:w-[80%] gap-3 flex w-[98%] mx-auto bg-white">
                    <div className="sm:max-h-[60vh] max-h-[73vh] ml-6">
                        <p className="text-lg h-[100%] justify-between sm:h-[95%] md:h-full overflow-y-auto flex flex-wrap gap-4 sm:gap-10 text-gray-800">
                            {skills.map((skill, index) => (
                                <div key={index} >
                                    <img src={skill[0]} className='h-[8rem] w-[8rem]' alt="" />
                                    <p className='text-xl font-semibold flex justify-center'>{skill[1]}</p>
                                </div>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
