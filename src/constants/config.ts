type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Rosul  |  Python Mastery",
    fullName: "Mehtab Aftabur Rosul",
    email: "mehtabrosul10@gmail.com",
  },
  hero: {
    name: "Mehtab ",
    p: ["I develop AI & ML", "for driving transformative advancements, elevating human possibilities."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your good name?",
      },
      email: { span: "Your Email", placeholder: "What's your web address?" },
      message: {
        span: "Your Message",
        placeholder: "What's that you want me to know?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `A highly proficient Python developer with deep expertise in AI and ML, I possess a comprehensive command of multiple programming languages. My work is fueled by an intense passion for quantum computing, where I aim to push the boundaries of what's possible in this rapidly evolving field. With a blend of technical acumen and visionary insight, I am committed to pioneering advancements that redefine the intersection of technology and human capability. My approach is both innovative and strategic, driven by a desire to explore uncharted territories in computational science.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "Some of my Achievements",
      h2: "Certificates.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories in it. 
          It reflects my ability to solve complex problems, work with different technologies,
          and manage projects effectively.`,
    },
  },
};
