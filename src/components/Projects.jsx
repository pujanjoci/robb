import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Manufacturing Company Audit",
      description: "Led the financial statement audit for a $500M revenue manufacturing client, identifying $2M in potential cost savings.",
      technologies: ["Team Leadership", "Risk Assessment", "SOX Compliance"],
      results: "Clean audit opinion delivered ahead of schedule"
    },
    {
      title: "Internal Controls Optimization",
      description: "Redesigned internal control procedures for a retail client, improving efficiency by 30% while maintaining compliance.",
      technologies: ["Process Improvement", "Control Testing", "Documentation"],
      results: "Reduced audit time by 25 hours per quarter"
    },
    {
      title: "Financial Analytics Implementation",
      description: "Implemented data analytics procedures for audit testing, enhancing sample selection and risk identification.",
      technologies: ["Data Analytics", "Excel Advanced", "SQL"],
      results: "Improved audit accuracy by 15%"
    }
  ];

  return (
    <section id="projects" className="section-padding p-12 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Skills Applied:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-3">
                  <span className="text-green-600 font-semibold">Result: {project.results}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;