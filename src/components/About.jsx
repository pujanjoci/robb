import React from 'react';

const About = () => {
  const technicalSkills = [
    'Tally ERP', 'Swastik', 'Busy', 'Spreadsheet & Data Management',
  ];

  const education = [
    {
      period: '2024 – Present',
      degree: 'Master of Business Studies (MBS)',
      institution: 'Tribhuvan University',
      coursework: ''
    },
    {
      period: '2019 – 2024',
      degree: 'Bachelor of Business Management (BBM)',
      institution: 'Tribhuvan University',
      coursework: 'Relevant coursework: Financial Management, Business Strategy, Project Management'
    },
    {
      period: '2017 – 2019',
      degree: '+2 in Management (Business)',
      institution: 'V.S. Niketan',
      coursework: ''
    }
  ];

  return (
    <section id="about" className="section-padding p-12 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-8 text-center">About Me</h3>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Audit Associate with 3+ years of experience in accounting, auditing, and compliance. 
              I am a results-driven audit professional with extensive experience in planning and 
              executing financial statement audits for publicly traded and private companies across 
              various industries.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              My expertise includes risk assessment, internal control evaluation, and ensuring 
              compliance with regulatory standards. Proficient in Tally, Swastik, Busy, and Excel 
              for maintaining accurate financial records. Skilled in client communication, resolving 
              discrepancies, and ensuring compliance with VAT, income tax, and payroll regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Professional Experience</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>3+ years of comprehensive accounting and audit experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Financial statement auditing for public and private companies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>VAT, income tax, and payroll compliance management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Client communication and discrepancy resolution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Internal controls evaluation and risk assessment</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Technical Expertise</h4>
              <div className="grid grid-cols-1 gap-3">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg border-l-4 border-green-500">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Education</h4>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <span className="font-semibold text-blue-800 text-lg">{edu.degree}</span>
                    <span className="text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-sm mt-1 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium mb-1">{edu.institution}</p>
                  {edu.coursework && (
                    <p className="text-gray-600 text-sm mt-2">{edu.coursework}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h4 className="text-xl font-semibold mb-3">Certifications & Professional Development</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="text-yellow-600 mr-2">•</span>
                <span>CPA Candidate (2 sections completed)</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Certified Internal Auditor (CIA) - In Progress</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Advanced Excel Certification</span>
              </li>
            </ul>
          </div> */}
          
        </div>
      </div>
    </section>
  );
};

export default About;