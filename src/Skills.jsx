import React from 'react';

const Skills = () => {
    const skills = [
        'JavaScript',
        'React.js',
        'Node.js',
        'HTML5',
        'CSS3',
        'Git',
        'RESTful APIs',
        'Responsive Web Design',
        'SQL',
        'MongoDB',
        'Express.js',
        'Redux',
        'Sass',
        'Webpack',
        'GraphQL',
        'Jest',
        'TypeScript',
        'Docker']
    return (
        <div className="md:mt-2 mt-16 sm:mt-4 h-screen md:h-[90vh] fullGetScreen">
            <div className="flex flex-col">
                <div className="m-auto my-5 flex gap-3 flex-col">
                    <p className="text-blue-600 flex justify-center text-2xl font-semibold">My Technical Skills 🚀</p>
                    <h2 className="sm:text-4xl justify-center flex font-bold">Skills</h2>
                    <p className="text-gray-400 font-normal text-center text-xl">A showcase of my technical expertise and skills.</p>
                </div>
                <div className="sm:w-[80%] gap-3 flex w-[98%] mx-auto bg-white">
                    <ul className="list-disc list-inside">
                        {skills.map((skill, index) => (
                            <li key={index} className="text-lg text-gray-800">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
