import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  python1,
  engineer,
  analyst,
  web,
  javascript,
  anaconda,
  artificial_intelligent,
  reactjs,
  qt,
  python_logo,
  qiskit,
  flask,
  jupyter,
  machine_learning,
  nlp,
  git,
  tensorflow,
  kodacy,
  encryptarx,
  oasis_infobyte,
  prodigy_infobyte,
  VIEHGroup,
  object_detection,
  image_classification,
  defenza,
  currency_exchange,
  weather_forecasting,
  repositories,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Python Developer",
    icon: python1,
  },
  {
    title: "ML & AI Engineer",
    icon: engineer,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: analyst,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Anaconda",
    icon: anaconda,
  },
  {
    name: "Artificial_Intelligent",
    icon: artificial_intelligent,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Jupyter",
    icon: jupyter,
  },
  {
    name: "Machine_Learning",
    icon: machine_learning,
  },
  {
    name: "NLP",
    icon: nlp,
  },
  {
    name: "Python",
    icon: python_logo,
  },
  {
    name: "QisKit",
    icon: qiskit,
  },
  {
    name: "QT",
    icon: qt,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "ML & AI Engineer, Senior Technical Researcher",
    companyName: "EncryptArx",
    icon: encryptarx,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Led the development of an advanced real-time threat detection system, ensuring user safety through proper analysis and mitigation of digital threats.",
      "Focused intensely on data privacy protection while adhering to global standards of compliance in an attempt to create adaptive solutions to evolving cybersecurity challenges.",
      "Was responsible for all stages of the system's lifecycle - from data analysis, through threat modeling, to refining detection mechanisms to enhance performance.",
      "Collaborated with teams and came up with scalable, innovative frameworks, hence contributing toward the advancement of cybersecurity technologies.",
    ],
  },
  {
    title: "Android Developer",
    companyName: "Prodigy InfoTech",
    icon: prodigy_infobyte,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Aug 2023",
    points: [
      "Has played a very crucial role in the development of user-friendly mobile applications, focusing on enhancing usability and optimizing app performance.",
      "Integrated different backend systems to deliver seamless functionality, ensuring smooth and intuitive user experiences.",
      "Conducted major testing and debugging activities to refine application workflows and improve overall reliability of the developed applications.",
      "Acquired significant application development, deployment processes, and good-quality deliverables for the end users.",
    ],
  },
  {
    title: "ML Engineer",
    companyName: "VIEH Group",
    icon: VIEHGroup,
    iconBg: "#383E56",
    date: "Fab 2023 - Jul 2023",
    points: [
      "Developed data-driven solutions to challenging problems using advanced concepts in developing scalable and highly accurate predictive models.",
      "Improved my skills in analysis and problem-solving by working on real-world datasets, providing rich analyses to support better decision-making.",
      "Explored specialized areas such as natural language processing and computer vision, including innovative approaches to various projects.",
      "Participated in the deployment and maintenance of systems addressing dynamic requirements with efficiency and reliability.",
    ],
  },
  {
    title: "Android and Web Developer",
    companyName: "Oasis InfoByte",
    icon: oasis_infobyte,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - May 2022",
    points: [
      "Designed and developed dynamic applications with an emphasis on smooth functionality, engaging user experience.",
      "CWorked on comprehensive solutions through managing data workflows, optimizing design elements, and ensuring the security of systems.",
      "Contributed significantly toward the integration of multi-platform features, improving accessibility and reliability for the users.",
      "Collaborated with various teams to deliver impactful applications and refined skills in project management and execution.",
    ],
  },
  {
    title: "Robotics Engineer",
    companyName: "Kodacy Robotics",
    icon: kodacy,
    iconBg: "#383E56",
    date: "Oct 2021 - Dec 2021",
    points: [
      "Built automation systems and robotics solutions through innovative approaches to bridge integration between software and hardware.",
      "Acquired experience in projects designing and managing sensors, controllers, and techniques of automation.",
      "Hands-on experience in prototyping and real-time systems that improve the understanding of robotics and intelligent automation was gained.",
      "Continued work towards improving efficiency in operations and developing innovative solutions for the problems, thus showing adaptability and technical ingenuity.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:"",
    name: "IBM",
    designation: "Certificate form IBM for Artificial Intelligent.",
    image: "https://res.cloudinary.com/dchphur4m/image/upload/v1732464770/Certificate_from_IBM_unlyhh.jpg",
  },
  {
    testimonial:"",
    name: "KODACY",
    designation: "Certificate form Kodacy for Robotics.",
    image: "https://res.cloudinary.com/dchphur4m/image/upload/v1732464769/Internship_Complition_Certificate_from_Kodacy_nq6r9v.jpg",
  },
  {
    testimonial:"",
    name: "OASIS INFOBYTE",
    designation: "Certificate form OASIS INFOBYTE for Android Development.",
    image: "https://res.cloudinary.com/dchphur4m/image/upload/v1732464770/Complition_Certificate_from_Oasis_Infobyte_ijqcn2.jpg",
  },
  {
    testimonial:"",
    name: "VIEHGROUP",
    designation: "Certificate form VIEHGroup for Machine Learning.",
    image: "https://res.cloudinary.com/dchphur4m/image/upload/v1732465108/Intership_Certificate_from_VIEHGroup_m2zv36.jpg",
  },
  {
    testimonial:"",
    name: "OASIS INFOBYTE",
    designation: "Offer Letter form OASIS INFOBYTE for Android Development.",
    image: "https://res.cloudinary.com/dchphur4m/image/upload/v1732467399/Internship_Offer_Letter_from_Oasis_Infobyte_wmnlqj.jpg",
  },
  {
    testimonial:"",
    name: "PRODIGY INFOTECH",
    designation: "Offer Letter form PRODIGY INFOTECH for Android Development.",
    image: "https://res.cloudinary.com/dchphur4m/image/upload/v1732465060/Internship_Offer_Letter_from_Prodigy_Infotech_n8ot2a.jpg",
  },
  {
    testimonial:"",
    name: "STANFORD UNIVERSITY",
    designation: "Certificate form Stanford University for Machine Learning.",
    image: "https://res.cloudinary.com/dchphur4m/image/upload/v1732468387/AI_by_Standford_wyvpu9.jpg",
  },
  {
    testimonial:"",
    name: "NVIDIA",
    designation: "Certificate form Nvidia for Artificial Intelligent.",
    image: "https://res.cloudinary.com/dchphur4m/image/upload/v1732464770/Nvidia_Certificate_w9w1lb.jpg",
  },
  {
    testimonial:"",
    name: "DEEPLEARNING.AI",
    designation: "Certificate form DeepLearning.AI for Data Science.",
    image: "https://res.cloudinary.com/dchphur4m/image/upload/v1732469172/DL_by_deeplearning.ai_h4senp.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Object Detection (Real-Time)",
    description:
      "It is a real-time object detection system that can detect multiple object and also different variants of it. And also have the oppurtunities in future to used as a object-detector in videos.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "YOLO",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "orange-text-gradient",
      },
    ],
    image: object_detection,
    sourceCodeLink: "https://github.com/MehtabRosul/ObjectDetection_By_Rosul",
  },
  {
    name: "Image Classification System",
    description:
      "Image classification is the process of categorizing images into predefined classes based on their visual content using machine learning or AI techniques. ",
    tags: [
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "CNN",
        color: "green-text-gradient",
      },
      {
        name: "Data Augmentation",
        color: "pink-text-gradient",
      },
    ],
    image: image_classification,
    sourceCodeLink: "https://github.com/MehtabRosul/Image-Classification",
  },
  {
    name: "Defenza",
    description:
      "Defenza is an advanced real-time threat detection system that analyzes web to proactively block malicious content, ensuring robust cybersecurity and safe online experiences for all users.",
    tags: [
      {
        name: "scikit-learn",
        color: "blue-text-gradient",
      },
      {
        name: "keras",
        color: "green-text-gradient",
      },
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
      {
        name: "tensorboard",
        color: "orange-text-gradient",
      },
      {
        name: "many more",
        color: "white-text-gradient",
      },
    ],
    image: defenza,
    sourceCodeLink: "https://github.com/MehtabRosul",
  },
  {
    name: "Currency Exchange Rate App",
    description:
      "A currency exchange rate app provides real-time conversion rates between different currencies, enabling users to calculate and track currency values conveniently. ",
      tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Fixer-API",
        color: "green-text-gradient",
      },
      {
        name: "QT5",
        color: "pink-text-gradient",
      },
    ],
    image: currency_exchange,
    sourceCodeLink: "https://github.com/MehtabRosul/ExchangeRate",
  },
  {
     name: "Weather Forecasting",
    description:
      "Weather forecasting involves predicting atmospheric conditions, such as temperature, precipitation, and wind, for a specific location and time using scientific methods and data analysis. ",
      tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenWeather-API",
        color: "green-text-gradient",
      },
      {
        name: "Tkinter",
        color: "pink-text-gradient",
      },
    ],
    image: weather_forecasting,
    sourceCodeLink: "https://github.com/MehtabRosul/WeatherForcasting",
  },
  {
    name: "Do check-out My other Repositories",
    description:
      "Please do explore my GitHub and Discover the codes behind the innovation and try to have much ideas",
      tags: [
      {
        name: "Projects",
        color: "blue-text-gradient",
      },
      {
        name: "Snippets",
        color: "green-text-gradient",
      },
      {
        name: "Do check out",
        color: "pink-text-gradient",
      },
    
      ],
      image: repositories,
      sourceCodeLink: "https://github.com/MehtabRosul/WeatherForcasting",
    },
  
];

export { services, technologies, experiences, testimonials, projects };
