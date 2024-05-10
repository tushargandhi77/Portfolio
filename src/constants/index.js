import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    food,
    newsmonkey,
    textutil,
    ebox,
    sylo,
    deep,
    oasis,
  } from "../assets";
  
  export const navLinks = [
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
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Competitive Coder",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
//     {
//       name: "JavaScript",
//       icon: javascript,
//     },
    {
      name: "React JS",
      icon: reactjs,
    },
//     {
//       name: "Tailwind CSS",
//       icon: tailwind,
//     },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
//     {
//       name: "Three JS",
//       icon: threejs,
//     },
//     {
//       name: "git",
//       icon: git,
//     },
//     {
//       name: "figma",
//       icon: figma,
//     },
  ];
  
  const experiences = [
    {
      title: "Data Scientist",
      company_name: "Syllogistek Systems Private Ltd.",
      icon: sylo,
      iconBg: "#E6DEDD",
      date: "Jul 2023 - Aug 2023",
      points: [
        "Projects:- QSAR FISH TOXICITY INDICATOR",
        "Successfully completed a dynamic internship at Syllogistek, actively engaging in data science, machine learning, and deep learning projects over a rigorous four-week period.",
        "Demonstrated proficiency in handling real-world datasets by effectively applying data preprocessing techniques, exploratory data analysis, and statistical analysis to derive meaningful insights.",
        "Exhibited a strong understanding of machine learning concepts and algorithms, deploying them to develop predictive models and classification systems tailored to diverse business objectives.",
        "Acquired practical experience in deep learning methodologies, including neural network architecture design, model training, and optimization, contributing to the advancement of cutting-edge projects",
        "Consistently met daily tasks and project milestones, showcasing dedication, adaptability, and problem-solving skills in tackling challenges across various practice datasets, thereby enriching the portfolio with hands-on experience and tangible outcomes."
      ],
    },
    {
      title: "Machine Learning Engineer",
      company_name: "DeepLearning.AI",
      icon: deep,
      iconBg: "#E6DEDD",
      date: "May 2023 - Aug 2023",
      points: [
        "Project:- Rover Landing using Reinforcement Learning, Image Classification",
        "Completed an intensive course on machine learning engineering offered by deeplearning.ai, delving into various fundamental and advanced concepts in machine learning algorithms.",
        "Acquired expertise in a range of machine learning algorithms including regression, random forest, logistic regression, neural networks, and reinforcement learning.",
        "Applied theoretical knowledge to practical projects, gaining hands-on experience in two significant projects: image classification and rover landing simulation using reinforcement learning.",
        "Worked extensively with diverse datasets to train, validate, and test machine learning models, enhancing skills in data preprocessing, feature engineering, and model evaluation.",
        "Demonstrated problem-solving abilities and innovation through the successful completion of projects, showcasing adaptability and creativity in addressing challenges and achieving project objectives.",
      ],
    },
    {
      title: "Data Science and Machine Learning",
      company_name: "Oasis Infobyte",
      icon: oasis,
      iconBg: "#383E56",
      date: "Apr 2024 - May 2024",
      points: [
        "Engaged in a diverse array of tasks during an enriching internship at Oasis Infobyte, spanning data analysis, model implementation, and hyperparameter tuning across five distinct projects.",
        "Successfully tackled the classic Iris flower classification problem, employing machine learning techniques to accurately classify iris species based on sepal and petal attributes. Conducted thorough data analysis, implemented machine learning models, and fine-tuned hyperparameters to achieve optimal classification performance.",
        "Conducted in-depth analysis of unemployment data to extract meaningful insights and trends. Utilized statistical methods and machine learning algorithms to identify key factors influencing unemployment rates, facilitating informed decision-making and policy recommendations.",
        "Developed a robust email spam detection system using machine learning algorithms to differentiate between spam and legitimate emails. Conducted extensive data preprocessing, implemented classification models, and fine-tuned hyperparameters to enhance detection accuracy and minimize false positives.",
        " Leveraged machine learning techniques to predict car prices and forecast sales trends based on historical data. Conducted comprehensive data analysis, implemented regression models for price prediction, and utilized time series forecasting methods for sales prediction."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Hello, I am Tushar Gandhi, a programmer and web developer with proficient skills in various programming languages and web technologies.",
      name: "tushargandhi",
      designation: "",
      company: "",
      image: "https://images.unsplash.com/photo-1599280032270-0046e64bd588?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      testimonial:
        "I am well skilled in C , C++ , Java , Python , JavaScript , Matlab , DBMS , SQL etc. I'm also expert in Data Structure and Algorithms. ",
        name:"tushar",
      designation: "",
      company: "",
      image: "https://images.pexels.com/photos/1915149/pexels-photo-1915149.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      testimonial:
        "I am currently studying bachlor of technology in Computer Science and Technology. In technical Institute of Odisa. Currently in 2nd Year ( 4Th semester ).",
      name: "study",
      designation: "BBSR",
      company: "INDIA",
      image: "https://images.unsplash.com/photo-1590507014612-08b6a0b4e31e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=368&q=80",
    },
  ];
  
  const projects = [
    {
      name: "Text Utils",
      description:
        "Web-based platform that allows users to analyse text, counting words, counting charecter, time to read text,preview text, and convert to upercase, convert to lowercase, handling extra space.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: textutil,
      source_code_link: "https://github.com/tushargandhi77/Textutils",
    },
    {
      name: "News Monkey",
      description:
        "Web application that gives you latest news on daily basis on topics like bussines, general, technology, entertainment, science, sports, health etc. Which make connectned to the world.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "NewsApi",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: newsmonkey,
      source_code_link: "https://github.com/tushargandhi77/NewsApp",
    },
    {
      name: "Summer Internship",
      description:
        "#1 Batch Rank in Summer Internship SIT_2025: Problem Solving and Programming with C & Data Structures and Algorithms by E-Box.In this program I learn how to solve problems efficiently.",
      tags: [
          {

          name: "1st",

          color: "pink-text-gradient",

        },
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "DSA",
          color: "green-text-gradient",
        },
      ],
      image: ebox,
      source_code_link: "https://github.com/tushargandhi77/C-Programming/blob/main/Certificate.pdf",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
