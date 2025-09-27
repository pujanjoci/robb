import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Audit Associate",
      company: "Vitthartha Sewa Pvt. Ltd.",
      period: "July 2022 - Present",
      responsibilities: [
        "Collaborated with clients to gather supporting documentation and clearly communicated audit findings",
        "Supported the preparation of financial statements, audit schedules, and compliance reports",
        "Ensured adherence to internal controls and recommended process improvements to enhance efficiency",
        "Maintained accurate accounting records for multiple clients using Tally, Swastik, Busy, and Excel",
        "Prepared and filed VAT, income tax, and payroll-related returns within statutory deadlines"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding p-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Professional Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-blue-600 font-medium text-lg">{exp.company}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3 mt-4">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Optional: Add a note about total experience */}
        <div className="mt-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm inline-block">
            <p className="text-gray-700 font-semibold">
              Total Experience: <span className="text-blue-600">3 years and counting</span> in accounting, auditing, and compliance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;