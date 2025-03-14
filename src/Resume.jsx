import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb } from 'react-icons/si';

export const Cv = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }, []);

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    const name = 'Ridho Akbar';
    const email = 'ridho@example.com';
    const phone = '+62 812-3456-7890';
    const summary = 'Fullstack developer with expertise in MERN stack, Tailwind CSS, and Next.js. Passionate about building scalable web applications and working remotely.';
    
    const skills = [
        { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-3xl" /> },
        { name: 'React.js', icon: <FaReact className="text-blue-500 text-3xl" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black text-3xl" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-3xl" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600 text-3xl" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400 text-3xl" /> },
        { name: 'Git', icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
        { name: 'HTML5', icon: <FaHtml5 className="text-red-500 text-3xl" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
        { name: 'Databases', icon: <FaDatabase className="text-gray-500 text-3xl" /> }
    ];

    const experience = [
        { company: 'Freelance', title: 'Fullstack Developer', year: '2022-Present', description: 'Developing high-performance web applications using MERN stack and Next.js. Working with international clients remotely.' },
        { company: 'Startup Tech', title: 'Frontend Developer', year: '2021-2022', description: 'Built responsive and optimized UI components using React.js and Tailwind CSS.' }
    ];

    const education = [
        { institution: 'Self-Taught & Bootcamps', degree: 'Fullstack Web Development', year: '2020-2022' }
    ];

    const projects = [
        { title: 'Portfolio Website', description: 'Built a personal portfolio website using Next.js and Tailwind CSS.', link: 'https://yourportfolio.com' },
        { title: 'E-commerce Platform', description: 'Developed a full-fledged e-commerce web application with MERN stack.', link: 'https://myecommerce.com' }
    ];

    return (
        <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen p-8 flex flex-col items-center`}>
            <button
                className="mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
                onClick={toggleTheme}>
                {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>

            <div className={`max-w-4xl w-full shadow-2xl rounded-2xl p-10 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <header className="text-center border-b pb-6 mb-6">
                    <h1 className="text-5xl font-extrabold">{name}</h1>
                    <p className="text-lg mt-3 font-medium opacity-80">{email} | {phone}</p>
                </header>

                <section className="mb-6">
                    <h2 className="text-3xl font-bold border-b pb-2">Summary</h2>
                    <p className="mt-3 text-lg leading-relaxed">{summary}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-3xl font-bold border-b pb-2">Skills</h2>
                    <ul className="grid grid-cols-4 md:grid-cols-5 gap-2 mt-4 text-lg font-medium text-center">
                        {skills.map((skill, index) => (
                            <li key={index} className="bg-gray-200 px-4 py-3 rounded-lg dark:bg-gray-700 flex flex-col items-center justify-center">
                                {skill.icon}
                                <span className="mt-2 text-white">{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-3xl font-bold border-b pb-2">Experience</h2>
                    {experience.map((exp, index) => (
                        <div key={index} className="mt-5">
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <p className="text-gray-400">{exp.company} ({exp.year})</p>
                            <p className="mt-2 text-lg">{exp.description}</p>
                        </div>
                    ))}
                </section>

                <section className="mb-6">
                    <h2 className="text-3xl font-bold border-b pb-2">Education</h2>
                    {education.map((edu, index) => (
                        <div key={index} className="mt-5">
                            <h3 className="text-xl font-semibold">{edu.degree}</h3>
                            <p className="text-gray-400">{edu.institution} ({edu.year})</p>
                        </div>
                    ))}
                </section>

                <section>
                    <h2 className="text-3xl font-bold border-b pb-4">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                <p className="mt-2 text-lg text-white">{project.description}</p>
                                <a href={project.link} target="_blank" className="mt-3 inline-block text-white bg-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                                    View Project →
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};
