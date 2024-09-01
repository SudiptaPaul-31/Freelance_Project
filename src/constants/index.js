import {
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  searchMd,
  telegram,
  twitter,

} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Aim",
    url: "#roadmap",
  },
  {
    id: "2",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "3",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const roadmap = [
  {
    id: "0",
    title: "Project Recommendation",
    text: "Unlock top-tier results with our advanced recommendation system! We analyze freelancer profiles, skills, and experience to connect you with the perfect match for your project. Say goodbye to mismatches and hello to seamless collaboration with experts who excel in their field.",
    date: "September 2024",
    status: "done",
    imageUrl: "https://img.freepik.com/free-vector/hand-drawn-flat-design-innovation-concept_23-2149149287.jpg?t=st=1725084000~exp=1725087600~hmac=4e5c36d3481f6e1f797824b71aaca3889e6b4dc9c8192cab9447f64cf9e5b623&w=1060",
    colorful: true,
  },
  {
    id: "1",
    title: "Precision Freelancer Recommendations",
    text: "Find the ideal freelancer for your project with ease! Our smart recommendations match you with top talent whose skills perfectly align with your needs. Get the right expert for every task effortlessly.",
    date: "September 2024",
    status: "progress",
    imageUrl: "https://img.freepik.com/free-vector/freelance-outsoursing-concept-people-working-remotely-through-internet-idea-jop-independency-free-schedule-time-management-work-efficiency-vector-flat-illustration_613284-1216.jpg?t=st=1725084458~exp=1725088058~hmac=bb4d125dba32b8a2b371e84954bf849390470ab89570f8299d4834c218a89309&w=1060",
  },
  {
    id: "2",
    title: "Analysis of Resume and Key Skills",
    text: "Leverage advanced analytics to evaluate resumes and highlight key skills, helping freelancers showcase their strengths effectively. Visualize data to provide insights into skill proficiency and experience, making it easier for clients to match with the right talent",
    date: "September 2024",
    status: "done",
    imageUrl: "https://img.freepik.com/free-vector/hand-drawn-gathering-data-business-concept_23-2149164274.jpg?t=st=1725084275~exp=1725087875~hmac=39ce334b7528d4c3bdc42714b5c0ad938bcd422ea31513e7c72888c232a2948e&w=826",
  },
  {
    id: "3",
    title: "User Employee Rating System",
    text: "Enable clients to rate and review freelancers, providing transparent feedback and fostering trust. Ratings help highlight top performers and guide future hiring decisions, ensuring a reliable and high-quality workforce.",
    status: "progress",
    imageUrl: "https://img.freepik.com/free-vector/tiny-business-people-using-rating-site-vote-people-computer-screen-rating-site-professional-rank-site-content-rating-page-concept-illustration_335657-2396.jpg?t=st=1725084648~exp=1725088248~hmac=de985873f677f549b32e77abecc26f88042c3b1bb176655ecc6023d48623c2b6&w=1060",
  },
];



export const benefits = [
  {
    id: "0",
    title: "Find the Perfect Freelancer",
    text: "Easily connect with skilled professionals for your projects. No matter the task, find the right talent without the hassle.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: "https://img.icons8.com/?size=100&id=33470&format=png&color=000000",
    imageUrl: "https://img.freepik.com/premium-photo/cartoon-man-sitting-laptop_867452-10815.jpg"
    
  },
  {
    id: "1",
    title: "Boost Your Business",
    text: "Leverage our platform to grow your business. Hire top talent, meet deadlines, and stay within budget.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: "https://img.icons8.com/?size=100&id=6Z5qDFuq9doa&format=png&color=000000",
    imageUrl: "https://img.freepik.com/premium-photo/cartoon-man-sitting-laptop_867452-10815.jpg",
    light: true,
  },
  {
    id: "2",
    title: "Work Seamlessly",
    text: "Collaborate with freelancers from anywhere in the world. Our platform ensures smooth communication and project management.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: "https://img.icons8.com/?size=100&id=CIZZhjJ4f5oP&format=png&color=000000",  
    imageUrl: "https://img.freepik.com/premium-photo/cartoon-man-sitting-laptop_867452-10815.jpg"
  },
  {
    id: "3",
    title: "Quick Hiring Process",
    text: "Post jobs and receive proposals within minutes. Our platform speeds up the hiring process so you can focus on what matters.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: "https://img.icons8.com/?size=100&id=jmXM1muMjLGj&format=png&color=000000",
    imageUrl: "https://img.freepik.com/premium-photo/cartoon-man-sitting-laptop_867452-10815.jpg",
    light: true,
  },
  {
    id: "4",
    title: "Expert Freelancers",
    text: "Hire from a pool of verified experts across various fields. Get the best results for your projects.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: "https://img.icons8.com/?size=100&id=pIPl8tqh3igN&format=png&color=000000",
    imageUrl: "https://img.freepik.com/premium-photo/cartoon-man-sitting-laptop_867452-10815.jpg"
  },
  {
    id: "5",
    title: "Secure Payments",
    text: "Our escrow system ensures that your payments are secure. Release funds only when you’re satisfied with the work.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: "https://img.icons8.com/?size=100&id=x9U4HcNp4Tv2&format=png&color=000000",
    imageUrl: "https://img.freepik.com/premium-photo/cartoon-man-sitting-laptop_867452-10815.jpg"
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
