import React from 'react';

function About() {
    return (
        <div className="about mt-16 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:mr-8 mb-4 md:mb-0">
                        <img src="/path/to/your/photo.jpg" alt="Your Photo" className="rounded-full w-48 h-48 md:w-64 md:h-64" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 gap-6 text-slate-400">About Me</h1>
                        <p className="mb-4">Hello! I'm Amit Rana, a passionate frontend developer.</p>
                        <p className="mb-4">I specialize in crafting delightful user experiences through clean, efficient, and responsive web development.</p>
                        <p className="mb-4">My journey in web development started with a curiosity to bring ideas to life on the internet. Over the years, I've honed my skills and gained expertise in various frontend technologies.</p>
                        <p className="mb-4">My mission is to create innovative solutions that not only meet but exceed user expectations. Whether it's designing pixel-perfect interfaces or optimizing performance, I strive for excellence in every project.</p>
                        <p className="mb-4">Thank you for visiting my portfolio website. Feel free to explore my work and reach out to me if you have any questions or collaboration opportunities!</p>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-lg md:text-xl font-bold mb-2">Skills & Expertise</h2>
                    <p className="mb-4">As a frontend developer, I possess a diverse skill set essential for creating engaging and user-friendly websites. Here are some of my key skills:</p>
                    <ul className="list-disc pl-4">
                        <li className="mb-2">Proficiency in HTML, CSS, and JavaScript</li>
                        <li className="mb-2">Experience with popular frontend librarie  React</li>
                        <li className="mb-2">Knowledge of responsive web design principles and techniques</li>
                        <li className="mb-2">Familiarity with version control systems such as Git</li>
                        <li className="mb-2">Ability to collaborate effectively with designers and backend developers</li>
                        <li>Passion for learning and staying updated with the latest web technologies</li>
                    </ul>
                    <p className="mt-4">I'm committed to delivering high-quality solutions that bring value to users and businesses alike. Let's create something amazing together!</p>
                </div>
            </div>
        </div>
    );
}

export default About;
