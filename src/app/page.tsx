import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 max-w-4xl mx-auto">
      <div className="space-y-8">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Ehsanullah "Ehsan" Nikfar</h1>
          <div className="text-gray-600 space-y-2">
            <p>70 Morningside Drive, New York, NY 10027-7236</p>
            <p>Authorized to work for any US employer | He/Him</p>
            <div className="flex gap-4">
              <a href="tel:440-506-5632" className="hover:text-blue-600">440-506-5632</a>
              <a href="mailto:en2572@columbia.edu" className="hover:text-blue-600">en2572@columbia.edu</a>
              <a href="https://linkedin.com/in/Ehsan Nikfar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
              <a href="https://github.com/enikfar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a>
            </div>
          </div>
        </header>

        {/* Education */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-b pb-2">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Columbia University</h3>
              <p className="text-gray-600">Computer Science (BS) • New York, NY • Expected May 2026</p>
              <p className="text-sm mt-2">Relevant Coursework: Introduction to Databases, Analysis of Algorithms, Probability Theory, Design Using C++, Advanced Programming, Theoretical Machine Learning, Artificial Intelligence, and Advanced System Programming.</p>
            </div>
            <div>
              <h3 className="font-semibold">Oberlin College</h3>
              <p className="text-gray-600">3-2 Engineering (BA) with a minor in Physics • Oberlin, OH • Oct 2021 - May 2024</p>
              <p className="text-sm mt-2">GPA: 3.8/4.0</p>
              <p className="text-sm mt-2">Relevant Coursework: Introduction to Computer Science, Data Structures, System Programming, Programming Abstraction, Algorithms, Computer Architecture, Discrete Math, Linear Algebra, and Multivariable Calculus</p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-b pb-2">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Languages</h3>
              <p className="text-gray-600">C, C++, Python, Java, HTML/CSS, JavaScript, TypeScript, Racket</p>
            </div>
            <div>
              <h3 className="font-semibold">Technologies & Frameworks</h3>
              <p className="text-gray-600">React.js, Node.js, git, GitHub, GitLab, MySQL, SQL Server, PostgreSQL</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-b pb-2">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Outschool</h3>
              <p className="text-gray-600">Software Engineer Intern • Remote • May 2024 - August 2024</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Developed missed class and student status features using React.js and TypeScript, integrating GraphQL for optimized data retrieval from a PostgreSQL database to enhance user experience.</li>
                <li>Contributed to transitioning Outschool's platform to accept students' birthdates instead of ages, enhancing user data accuracy and increasing new learner enrollment.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">HR Acuity</h3>
              <p className="text-gray-600">Software Engineer Intern • Florham Park, NJ • June 2023 - August 2023</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Collaborated with a team of product managers and software engineers to enhance the functionality and user experience of the HR case management software.</li>
                <li>Developed data analysis and visualization website using React, integrating SQL for efficient data retrieval from the database.</li>
                <li>Surpassed project expectations by implementing additional features, enhancing HR case management software functionality.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">GNOME Network</h3>
              <p className="text-gray-600">Research Assistant • Oberlin, OH • Oct 2021 - Present</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Implementing advanced signal processing (FFT, LMS, Excess Power) in Python.</li>
                <li>Utilizing scipy's signal.spectrogram, matplotlib, NumPy, and Panda to generate time-frequency spectrograms from magnetic field data.</li>
                <li>Selected as Featured Researcher by the Office of Undergraduate Research at Oberlin College and GNOME.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-b pb-2">Personal Projects</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">CowChat: Real-Time Network Chat Server</h3>
              <p className="text-gray-600">C, UNIX, Concurrency, Sockets • March 2025</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Engineered a scalable, high-performance network chat server in C using UNIX sockets and the select() system call.</li>
                <li>Architected a modular, maintainable codebase with a strong focus on performance optimization and resource management.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Tutor Finder</h3>
              <p className="text-gray-600">TypeScript, React, Next.js, and MongoDB • January 2023</p>
              <p className="mt-2">Developed a web application to connect 3000+ students with 250+ tutors at Oberlin College.</p>
            </div>
          </div>
        </section>

        {/* Honors & Awards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-b pb-2">Honors & Awards</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Coauthor of the research paper titled 'Hunt for Magnetic Signatures of Hidden-Photon and Axion Dark Matter in the Wilderness,' published in Physical Review D</li>
            <li>John F. Oberlin Scholarship winner</li>
          </ul>
        </section>

        {/* Hobbies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-b pb-2">Hobbies</h2>
          <p className="text-gray-600">Basketball, Cooking, Ping-Pong, Photography, Solving Rubik's Cube, Chess</p>
        </section>
      </div>
    </main>
  )
} 