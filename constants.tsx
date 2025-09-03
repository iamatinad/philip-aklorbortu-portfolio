import React from 'react';
import type { PersonalInfo, Education, Experience, Award, SkillCategory } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "PHILIP AKLORBORTU",
  tagline: "Aspiring Data Scientist & AI Enthusiast",
  about: "Dynamic and results-driven aspiring data scientist with strong research and analytical skills. A fast learner and open-minded team player, passionate about using data to drive innovation and solve complex problems. Focused on contributing to research and academia in areas such as machine learning, data analysis, and Artificial Intelligence (AI)-driven solutions, with a commitment to continuous growth in the field of data science.",
  address: "GS-0102-5894, Weija – Gbawe, Accra, Ghana",
  phones: ["+233570255688", "+233205558134"],
  email: "philipaklorbortu@gmail.com",
  linkedin: "https://www.linkedin.com/in/philip-aklorbortu/",
  github: "https://github.com/paklorbortu",
  interests: ["Machine Learning", "Data Mining", "Predictive Analytics", "Neural Networks", "Natural Language Processing", "Data Visualization", "Big Data Analytics", "Deep Learning", "Artificial Intelligence", "Statistical Modeling", "Data-Driven Decision Making", "Python Programming", "R", "Cloud Computing for Data Science"]
};

export const EDUCATION_DATA: Education[] = [
    {
        institution: "Harvard University",
        degree: "Introduction to Computer Science Professional Certificate",
        date: "October 2023 – November 2024",
        description: ["Built skills in computer science with exposure to algorithms, data structures, and data manipulation.", "Gained coding experience in Python, SQL, C, HTML, JavaScript, enhancing problem-solving and computational thinking abilities."]
    },
    {
        institution: "Udacity",
        degree: "Artificial Intelligence (AI) Programming with Python",
        date: "August 2024 – October 2024",
        description: ["Completed a comprehensive course focused on AI development using Python, covering key concepts such as data structures, control flow, and scripting.", "Gained knowledge in linear algebra (NumPy), calculus (gradient descent), and neural networks.", "Developed practical skills in training AI models using PyTorch and building an AI image classifier."]
    },
    {
        institution: "Udacity",
        degree: "Introducing Generative AI [in Partnership with AWS]",
        date: "January 2024 – February 2024",
        description: ["Explored foundational concepts of Generative AI, machine learning, and Large Language Models (LLMs).", "Completed a hands-on project building a domain-specific AI chatbot using real-world data.", "Strengthened skills in prompt engineering, model training, and ethical AI development."]
    },
    {
        institution: "Google",
        degree: "Data Analytics Professional Certificate",
        date: "June 2022 – June 2024",
        description: ["Completed a nine-course program focused on data cleaning, analysis, and visualization.", "Gained hands-on experience with R, SQL, Tableau, and spreadsheets, culminating in a capstone project analyzing smart-device data to guide marketing strategy."]
    },
    {
        institution: "University of Ghana",
        degree: "Bachelor of Arts in Administration (Accounting & Economics)",
        date: "September 2018 – October 2022",
        description: ["Relevant courses: Applied Mathematics for Economists, Elements of Statistics for Economists, Applied Statistics for Economists, Audit and Assurance, Introduction to Computing, Financial Reporting, Business Finance, Corporate Reporting and Analysis."]
    }
];

export const EXPERIENCE_DATA: { research: Experience[], industrial: Experience[] } = {
  research: [
    {
      role: "Principal Analyst",
      company: "Ghana in Data",
      date: "October 2024",
      points: [
        "Conducted in-depth data sourcing, cleaning, and analysis on mining licenses issued in Ghana and their relationship to waterbody pollution in mining communities.",
        "Built an interactive Tableau dashboard to present key insights, ensuring accessibility and clarity for stakeholders.",
        "Key Findings: Analysis revealed a positive correlation between issued mining licenses and periodic spikes in water pollution levels, with a significant increase in licenses issued during election years.",
        "Conclusion: Demonstrated that the number of mining licenses issued is a contributing factor to water pollution, underscoring the need for improved regulatory oversight."
      ]
    }
  ],
  industrial: [
    {
      role: "Co-founder & Principal Analyst",
      company: "Ghana in Data",
      date: "September 2024 – Present",
      isVolunteer: true,
      points: [
        "Extracted and cleaned data from national datasets to assess Ghana’s progress toward the Sustainable Development Goals (SDGs).",
        "Designed and deployed an interactive Tableau dashboard for stakeholders, enabling real-time exploration of mining, environmental, and political data patterns."
      ]
    },
    {
      role: "Data Analyst",
      company: "World Trade Center Accra",
      date: "April 2022 – Present",
      points: [
        "Collected, cleaned, and analyzed data on client engagement, event space utilization, and revenue trends to inform business strategy.",
        "Conducted exploratory data analysis (EDA) to uncover patterns, and optimize service offerings and reduce operational costs.",
        "Extracted and manipulated data from internal databases for reporting and decision support.",
        "Collaborated with cross-functional teams to translate business objectives into analytics solutions, informing strategic decisions.",
        "Developed interactive dashboards to visualize trade metrics and present insights to senior leadership through data storytelling."
      ]
    },
    {
      role: "Data Analyst Associate Internship",
      company: "Excelerate & Saint Louis University",
      date: "July 2024 – August 2024",
      points: [
        "Showcased proficiency in data analysis, statistical interpretation, and problem-solving.",
        "Applied practical skills in data manipulation, visualization, and reporting to contribute valuable insights to real-world projects.",
        "Demonstrated adaptability and eagerness to learn in a dynamic internship environment, gaining hands-on experience in transforming raw data into actionable insights."
      ]
    },
    {
      role: "Data Analyst (on Forage)",
      company: "KPMG, Australia",
      date: "November 2023 – November 2023",
      points: [
        "Evaluated a new list of 1000 potential customers, segmenting them based on demographics and purchasing behavior to identify high-value prospects, potentially increasing marketing ROI by 15%.",
        "Analyzed transaction data of 3980 existing customers, revealing that 60% of total revenue originated from customers aged 25-44, guiding targeted marketing strategies.",
        "Presented actionable insights and strategic recommendations to optimize customer targeting, contributing to an estimated 10% improvement in campaign effectiveness."
      ]
    }
  ]
};

export const LEADERSHIP_DATA: Experience[] = [
    {
        role: "Team Lead",
        company: "Excelerate",
        date: "August 2024",
        points: ["Lead a team of seven people in completing a variety of data analytics tasks.", "Responsible for coordinating efforts, delegating tasks and ensuring that all assignments were completed on time and met the required standards.", "Worked closely with team members to overcome challenges and maintained a structured workflow to meet project deadlines efficiently, contributing to the successful completion of our goals."]
    }
];

export const AWARDS_DATA: Award[] = [
    {
        title: "Data Analyst Intern (Star Performer)",
        issuer: "Excelerate",
        date: "August 2024",
        description: "For having an overall score of 97% in the Data Analyst Associate Internship with Excelerate in partnership with Saint Louis University."
    }
];


export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Data Science Tools & Libraries",
    skills: ["Python (NumPy, Pandas, Scikit-learn)", "R", "SQL", "TensorFlow", "PyTorch", "Excel Macros"]
  },
  {
    title: "Machine Learning",
    skills: ["Supervised Learning", "Unsupervised Learning", "Regression", "Classification", "Clustering", "Model Optimization"]
  },
  {
    title: "Data Visualization",
    skills: ["Matplotlib", "Seaborn", "Tableau", "Looker Studio", "Power BI"]
  },
  {
    title: "Software & Platforms",
    skills: ["Python", "Microsoft Report Builder", "Jupyter Notebooks", "Microsoft Power Automate", "Microsoft Excel", "Google Colab", "AWS", "Google Cloud"]
  },
  {
    title: "Technical Expertise",
    skills: ["Data Cleaning", "Data Analysis", "Predictive Modeling", "Statistical Analysis", "Deep Learning"]
  },
  {
    title: "Personal Strengths",
    skills: ["Communication", "Interpersonal Skills", "Leadership", "Team Player", "Organizational Skills", "Time & Project Management"]
  }
];

export const ICONS: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  email: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
  ),
  phone: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  ),
  linkedin: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  ),
  github: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  ),
  location: (props) => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
  ),
  'arrow-up-right': (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
  ),
  'arrow-up': (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
  ),
};