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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Competetive Coder",
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
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Front-End Projects",
      company_name: "SELF",
      icon: starbucks,
      iconBg: "#383E56",
      date: "November 2022",
      points: [
        "Start learning web development",
        "Develop a front-end web page use HTML,CSS",
        "Develop food ordering static webpage using html,css",
        "Develop Gym form using html,css",
        "Develop single page spotify clone using html,css,js",
        "Develop a dynamic front-end webpage for Dance Acedemy using PUG,CSS,JS"
      ],
    },
    {
      title: "React Native Developer",
      company_name: "SELF",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2023",
      points: [
        "Develop Textuils single page Web-Application which analyse the text and sentances and perform Operations",
        "Develop NewsApp using external API and React, which contains infinite scroll etc",
        "Develop Front-end for Notes Web-Application which stores notes of the user",
      ],
    },
    {
      title: "Back-End Projects",
      company_name: "SELF",
      icon: shopify,
      iconBg: "#383E56",
      date: "Mar 2023",
      points: [
        "Developing Backend for Dance Acedemy Website using express.js,node.js,mongoDB etc",
        "Developing Backend for Notes Web-Application using node.js,mongoDB,express.js",
        "Knowledge in DBMS,SQL,JAVA",
      ],
    },
    {
      title: "Competetive Coding",
      company_name: "NONE",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Aug 2022",
      points: [
        "Well Skilled in C , C++ , JAVA , Matlab , python , JavaScript",
        "practicing in different platform like CodeChef , HakerRank , LeetCode regularly.",
        "2-star in CodeChef",
        "5-star in HakerRank in Java Language",
        "3-star in HakerRank in Problem Solving or Algorithms",
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
      name: "Food Website",
      description:
        "This is food ordering front-end web page which you can order food.This is basis font-end web page using html and css. It also containes form for contacting. Lets make code together.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
      ],
      image: food,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };