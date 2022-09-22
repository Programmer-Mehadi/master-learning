import React, { useState } from 'react';
import Course from '../Course/Course';
const coursList = {
  courses: [
    {
      name: "Web Design for Everybody: Basics of Web Development & Coding",
      url: "https://www.coursera.org/specializations/web-design",
      skillsGain: "Computer Graphics, Computer Programming, HTML and CSS, Human Computer Interaction, Interactive Design, Javascript, Network Security, Programming Principles, Web Design, Web Development",
      skillsGain_url: "https://www.coursera.org/specializations/web-design",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d2j5ihb19pt1hq.cloudfront.net/sdp_page/s12n_logos/webdesign.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
      img_url: "https://www.coursera.org/specializations/web-design",
      rating: "4.7",
      rating_url: "https://www.coursera.org/specializations/web-design",
      reviews: "(32.6k reviews)",
      reviews_url: "https://www.coursera.org/specializations/web-design",
      features: "Beginner · Specialization · 3-6 Months",
      features_url: "https://www.coursera.org/specializations/web-design",
      authorImg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=1&w=25&h=25&q=40",
      authorImg_url: "https://www.coursera.org/specializations/web-design",
      authorName: "University of Michigan",
      authorName_url: "https://www.coursera.org/specializations/web-design",
      price: '20.48'
    },
    {
      name: "HTML, CSS, and Javascript for Web Developers",
      url: "https://www.coursera.org/learn/html-css-javascript-for-web-developers",
      skillsGain: "Web Development, HTML and CSS, CSS, Web, Html",
      skillsGain_url: "https://www.coursera.org/learn/html-css-javascript-for-web-developers",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/83/e258e0532611e5a5072321239ff4d4/jhep-coursera-course4.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
      img_url: "https://www.coursera.org/learn/html-css-javascript-for-web-developers",
      rating: "4.7",
      rating_url: "https://www.coursera.org/learn/html-css-javascript-for-web-developers",
      reviews: "(14.2k reviews)",
      reviews_url: "https://www.coursera.org/learn/html-css-javascript-for-web-developers",
      features: "Mixed · Course · 1-3 Months",
      features_url: "https://www.coursera.org/learn/html-css-javascript-for-web-developers",
      authorImg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/74/7ae340ec6911e5b395490a2a565172/JHU-Logo-Square-Mini_180px.png?auto=format%2Ccompress&dpr=1&w=25&h=25&q=40",
      authorImg_url: "https://www.coursera.org/learn/html-css-javascript-for-web-developers",
      authorName: "Johns Hopkins University",
      authorName_url: "https://www.coursera.org/learn/html-css-javascript-for-web-developers",
      price: '31.23'
    },
    {
      name: "Meta Front-End Developer",
      url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      skillsGain: "Algorithms, Application Development, Business Psychology, Cloud Computing, Collaboration, Communication, Computational Logic, Computer Architecture, Computer Graphics, Computer Networking, Computer Programming, Computer Programming Tools, Data Management, Data Structures, Front-End Web Development, HTML and CSS, Hardware Design, Human Computer Interaction, Interactive Design, Javascript, Journalism, Leadership and Management, Linux, Marketing, Mathematical Theory & Analysis, Mathematics, Network Architecture, Network Model, Network Security, Operating Systems, Operations Research, Other Web Frameworks, Programming Principles, React (web framework), Research and Design, Search Engine Optimization, Security Engineering, Semantic Web, Software Architecture, Software Engineering, Software Engineering Tools, Software Framework, Software Testing, Strategy and Operations, Theoretical Computer Science, User Experience, User Experience Design, Web Design, Web Development, Web Development Tools",
      skillsGain_url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ed/d25c0d25114924a34754928dbf8273/Front-end-dev-ProCert.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
      img_url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      rating: "4.7",
      rating_url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      reviews: "(1.9k reviews)",
      reviews_url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      features: "Beginner · Professional Certificate · 3-6 Months",
      features_url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      authorImg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/73/e03b13a8e44df9b19eb279e5506396/360-x-360.png?auto=format%2Ccompress&dpr=1&w=25&h=25&q=40",
      authorImg_url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      authorName: "Meta",
      authorName_url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      price: '12.80'
    },
    {
      name: "Google UX Design",
      url: "https://www.coursera.org/professional-certificates/google-ux-design",
      skillsGain: "Accounting, Advertising, Brand Management, Business Analysis, Business Communication, Business Psychology, Change Management, Collaboration, Communication, Computer Programming, Data Analysis, Design and Product, Entrepreneurship, Finance, Financial Analysis, Human Computer Interaction, Interactive Design, Investment Management, Leadership and Management, Marketing, Operating Systems, Planning, Problem Solving, Product Design, Programming Principles, Research and Design, Sales, Social Media, Software Architecture, Software Engineering, Software Testing, Strategy, Strategy and Operations, Supply Chain and Logistics, Systems Design, Theoretical Computer Science, User Experience, User Experience Design, User Interface, User Research, Visual Design, Web Design, Web Development",
      skillsGain_url: "https://www.coursera.org/professional-certificates/google-ux-design",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/75/32388ec64444d7a2b09297c0b59c56/1200x600_UXD.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
      img_url: "https://www.coursera.org/professional-certificates/google-ux-design",
      rating: "4.8",
      rating_url: "https://www.coursera.org/professional-certificates/google-ux-design",
      reviews: "(44.5k reviews)",
      reviews_url: "https://www.coursera.org/professional-certificates/google-ux-design",
      features: "Beginner · Professional Certificate · 3-6 Months",
      features_url: "https://www.coursera.org/professional-certificates/google-ux-design",
      authorImg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&dpr=1&w=25&h=25&q=40",
      authorImg_url: "https://www.coursera.org/professional-certificates/google-ux-design",
      authorName: "Google",
      authorName_url: "https://www.coursera.org/professional-certificates/google-ux-design",
      price: '40.7'
    },
    {
      name: "Web Applications for Everybody",
      url: "https://www.coursera.org/specializations/web-applications",
      skillsGain: "Computer Programming, Data Management, Database Application, Database Design, Databases, Full-Stack Web Development, HTML and CSS, Javascript, Mysql, Other Programming Languages, Php, Programming Principles, Relational Database, SQL, Software Architecture, Software Engineering, Statistical Programming, Theoretical Computer Science, Web Design, Web Development",
      skillsGain_url: "https://www.coursera.org/specializations/web-applications",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/88/dc5c5094d411e7b4b66f7a7a1060c7/WA4E_mainimage_coloronly2.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
      img_url: "https://www.coursera.org/specializations/web-applications",
      rating: "4.7",
      rating_url: "https://www.coursera.org/specializations/web-applications",
      reviews: "(8.1k reviews)",
      reviews_url: "https://www.coursera.org/specializations/web-applications",
      features: "Intermediate · Specialization · 3-6 Months",
      features_url: "https://www.coursera.org/specializations/web-applications",
      authorImg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=1&w=25&h=25&q=40",
      authorImg_url: "https://www.coursera.org/specializations/web-applications",
      authorName: "University of Michigan",
      authorName_url: "https://www.coursera.org/specializations/web-applications",
      price: '49.34'
    },
    {
      name: "How To Create a Website in a Weekend! (Project-Centered Course)",
      url: "https://www.coursera.org/learn/how-to-create-a-website",
      skillsGain: "Computer Programming, Web Design, Web Development Tools, Software Engineering Tools, Software Engineering, Web Development",
      skillsGain_url: "https://www.coursera.org/learn/how-to-create-a-website",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/8a/d44cb0e61c11e58ef2e3befd7c195d/websiteweekend.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
      img_url: "https://www.coursera.org/learn/how-to-create-a-website",
      rating: "3.3",
      rating_url: "https://www.coursera.org/learn/how-to-create-a-website",
      reviews: "(558 reviews)",
      reviews_url: "https://www.coursera.org/learn/how-to-create-a-website",
      features: "Mixed · Course · 1-4 Weeks",
      features_url: "https://www.coursera.org/learn/how-to-create-a-website",
      authorImg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/e8/6cc85ab7c246c594aca14a4724371f/SUNY-Circle_copy.png?auto=format%2Ccompress&dpr=1&w=25&h=25&q=40",
      authorImg_url: "https://www.coursera.org/learn/how-to-create-a-website",
      authorName: "The State University of New York",
      authorName_url: "https://www.coursera.org/learn/how-to-create-a-website",
      price: '30.99'
    },
    {
      name: "Introduction to Web Development with HTML, CSS, JavaScript",
      url: "https://www.coursera.org/learn/introduction-to-web-development-with-html-css-javacript",
      skillsGain: "Web Development Tools, Computer Programming, Full-Stack Web Development, Javascript, HTML and CSS, Front-End Web Development, Web Design, Web Development, CSS, Web, Html, Back-End Web Development, Github",
      skillsGain_url: "https://www.coursera.org/learn/introduction-to-web-development-with-html-css-javacript",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/47/5c5eb0de59424db95f1a75e67310b5/CAD2-Intro-to-Cloud-Dev-w-HTML--CSS--and-JavaScript.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&q=25&fit=fill",
      img_url: "https://www.coursera.org/learn/introduction-to-web-development-with-html-css-javacript",
      rating: "4.5",
      rating_url: "https://www.coursera.org/learn/introduction-to-web-development-with-html-css-javacript",
      reviews: "(612 reviews)",
      reviews_url: "https://www.coursera.org/learn/introduction-to-web-development-with-html-css-javacript",
      features: "Beginner · Course · 1-3 Months",
      features_url: "https://www.coursera.org/learn/introduction-to-web-development-with-html-css-javacript",
      authorImg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=1&w=25&h=25&q=40",
      authorImg_url: "https://www.coursera.org/learn/introduction-to-web-development-with-html-css-javacript",
      authorName: "IBM Skills Network",
      authorName_url: "https://www.coursera.org/learn/introduction-to-web-development-with-html-css-javacript",
      price: '50.00'
    },
    {
      name: "Introduction to Web Development",
      url: "https://www.coursera.org/learn/web-development",
      skillsGain: "Web Development, Javascript, HTML and CSS, Web Development Tools, Web Design, Web, Html, CSS, Computer Programming",
      skillsGain_url: "https://www.coursera.org/learn/web-development",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/ff/4584404c7511e7a18adb2a6ad3c009/GettyImages-185239648.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&q=25&fit=fill",
      img_url: "https://www.coursera.org/learn/web-development",
      rating: "4.7",
      rating_url: "https://www.coursera.org/learn/web-development",
      reviews: "(3.4k reviews)",
      reviews_url: "https://www.coursera.org/learn/web-development",
      features: "Beginner · Course · 1-3 Months",
      features_url: "https://www.coursera.org/learn/web-development",
      authorImg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/66/4d1f6067b511e599c247e28e57110c/Logo-B-for-Coursera.png?auto=format%2Ccompress&dpr=1&w=25&h=25&q=40",
      authorImg_url: "https://www.coursera.org/learn/web-development",
      authorName: "University of California, Davis",
      authorName_url: "https://www.coursera.org/learn/web-development",
      price: '29.00'
    },
    {
      name: "Introducción al desarrollo web",
      url: "https://www.coursera.org/learn/introduccion-desarrollo-web",
      skillsGain: "Computer Programming, HTML and CSS, Computer Programming Tools, Web Development, Web Design",
      skillsGain_url: "https://www.coursera.org/learn/introduccion-desarrollo-web",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/6c/a0ed7d702d43c999367cbbd822f793/800x800_2.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&q=25&fit=fill",
      img_url: "https://www.coursera.org/learn/introduccion-desarrollo-web",
      rating: "4.7",
      rating_url: "https://www.coursera.org/learn/introduccion-desarrollo-web",
      reviews: "(85 reviews)",
      reviews_url: "https://www.coursera.org/learn/introduccion-desarrollo-web",
      features: "Beginner · Course · 1-3 Months",
      features_url: "https://www.coursera.org/learn/introduccion-desarrollo-web",
      authorImg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/f2/1e0fc0666311e5bb98e7bc1b66e0e4/uniandessquare.png?auto=format%2Ccompress&dpr=1&w=25&h=25&q=40",
      authorImg_url: "https://www.coursera.org/learn/introduccion-desarrollo-web",
      authorName: "Universidad de los Andes",
      authorName_url: "https://www.coursera.org/learn/introduccion-desarrollo-web", price: '30.48'
    },
    {
      name: "Full-Stack Web Development with React",
      url: "https://www.coursera.org/specializations/full-stack-react",
      skillsGain: "Application Development, Cloud Computing, Computer Programming, Computer Programming Tools, Databases, Distributed Computing Architecture, Front And Back Ends, Front-End Web Development, Github, Human Computer Interaction, Javascript, Mobile Development, Mongodb, NoSQL, Operating Systems, Programming Principles, React (web framework), Security Engineering, Software Architecture, Software As A Service, Software Engineering, Software Engineering Tools, Software Security, System Security, Theoretical Computer Science, User Experience, Web Design, Web Development",
      skillsGain_url: "https://www.coursera.org/specializations/full-stack-react",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/eb/cab7f07dd411e8991ff71ead974a6c/Slide1.png?auto=format%2Ccompress&dpr=1&w=330&h=330&q=25&fit=fill",
      img_url: "https://www.coursera.org/specializations/full-stack-react",
      rating: "4.7",
      rating_url: "https://www.coursera.org/specializations/full-stack-react",
      reviews: "(11.5k reviews)",
      reviews_url: "https://www.coursera.org/specializations/full-stack-react",
      features: "Intermediate · Specialization · 3-6 Months",
      features_url: "https://www.coursera.org/specializations/full-stack-react",
      authorImg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/3a/37974779f7ad2a04626183c2f8951b/ustLogo.png?auto=format%2Ccompress&dpr=1&w=25&h=25&q=40",
      authorImg_url: "https://www.coursera.org/specializations/full-stack-react",
      authorName: "The Hong Kong University of Science and Technology",
      authorName_url: "https://www.coursera.org/specializations/full-stack-react",
      price: '48.85'
    },
    {
      name: "Develop a Company Website with Wix",
      url: "https://www.coursera.org/projects/develop-a-company-website-with-wix",
      skillsGain: "Web Design, Web Development, Computer Programming Tools, Web, Computer Programming",
      skillsGain_url: "https://www.coursera.org/projects/develop-a-company-website-with-wix",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/6d/ad0ac51a724bf193d41fb32167a875/online_marketing_internet_marketing_digital_marketing_seo_search_engine_optimization_web_online_internet-816420.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&q=25&fit=fill",
      img_url: "https://www.coursera.org/projects/develop-a-company-website-with-wix",
      rating: "4.6",
      rating_url: "https://www.coursera.org/projects/develop-a-company-website-with-wix",
      reviews: "(917 reviews)",
      reviews_url: "https://www.coursera.org/projects/develop-a-company-website-with-wix",
      features: "Beginner · Guided Project · Less Than 2 Hours",
      features_url: "https://www.coursera.org/projects/develop-a-company-website-with-wix",
      authorImg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/89/a0db8f3ea3417ca90d4f3a4ca1d73e/coursera-projectnetwork-purplesquare.png?auto=format%2Ccompress&dpr=1&w=25&h=25&q=40",
      authorImg_url: "https://www.coursera.org/projects/develop-a-company-website-with-wix",
      authorName: "Coursera Project Network",
      authorName_url: "https://www.coursera.org/projects/develop-a-company-website-with-wix",
      price: '49.50'
    },
    {
      name: "Create a no-code responsive website with Webflow",
      url: "https://www.coursera.org/projects/create-a-no-code-responsive-website-with-webflow",
      skillsGain: "Web Development Tools, Computer Programming, Web Design, Web Development",
      skillsGain_url: "https://www.coursera.org/projects/create-a-no-code-responsive-website-with-webflow",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/4f/20c96749b6453f8fdf604ea9165f14/Screen-Shot-2021-06-28-at-11.03.05-AM.png?auto=format%2Ccompress&dpr=1&w=330&h=330&q=25&fit=fill",
      img_url: "https://www.coursera.org/projects/create-a-no-code-responsive-website-with-webflow",
      rating: "4.6",
      rating_url: "https://www.coursera.org/projects/create-a-no-code-responsive-website-with-webflow",
      reviews: "(18 reviews)",
      reviews_url: "https://www.coursera.org/projects/create-a-no-code-responsive-website-with-webflow",
      features: "Beginner · Guided Project · Less Than 2 Hours",
      features_url: "https://www.coursera.org/projects/create-a-no-code-responsive-website-with-webflow",
      authorImg: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/89/a0db8f3ea3417ca90d4f3a4ca1d73e/coursera-projectnetwork-purplesquare.png?auto=format%2Ccompress&dpr=1&w=25&h=25&q=40",
      authorImg_url: "https://www.coursera.org/projects/create-a-no-code-responsive-website-with-webflow",
      authorName: "Coursera Project Network",
      authorName_url: "https://www.coursera.org/projects/create-a-no-code-responsive-website-with-webflow",
      price: '28.50'
    }
  ]
}


const CourseList = () => {
  const [cart, setCart] = useState([])
  const [totalCost, setTotalCost] = useState(0)
  const [tax, setTax] = useState(0)
  const [finalCost, setFinalCost] = useState(0)

  const addCart = (course) => {
    const newCart = [...cart, course]
    setCart(newCart)
    let total = 0;
    for (let index = 0; index < newCart.length; index++) {
       total = total+ parseFloat(newCart[index].price);
    }
    setTotalCost(total)
    let newTax = tax + total * 0.10;
    setTax(newTax)
    setFinalCost(total + tax)
    
  }
  const courses = coursList.courses;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto max-w-[1100px] py-8 w-11/12'>
      <div className='col-span-1 sm:col-span-2  lg:col-span-3'>
        <div className='mx-auto courses-container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
          {courses.map((course) => {
            return <Course addCart={addCart} data={course} key={course.key} />
          })}

        </div>
      </div>
      <div>
        <div className='Cart rounded text-xl shadow-md'>
          <h1 className=' bg-base-300  text-center font-bold rounded-t px-2 py-1'>Your Cart</h1>
          <div className=' text-black p-2 rounded-b flex flex-col gap-2 py-4'>
            <h1><span className='font-medium'>Selected Course:</span> {cart.length}</h1>
            <h1><span className='font-medium'>Total Cost:</span> {totalCost.toFixed(2)}</h1>
            <h1><span className='font-medium'>Tax:</span> {tax.toFixed(2)}</h1>
            <h1><span className='font-medium'>Total Cost with tax:</span> {finalCost.toFixed(2)}</h1>
          </div>
          <button className='bg-yellow-400 text-black px-3 py-1 font-bold text-xl rounded-b mt-2 w-full'>Confirm Order</button>
        </div>
      </div>
    </div>
  );
};

export default CourseList;