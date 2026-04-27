import Navbar from './component/Nav'
import Hero from './component/Hero'
import CoursesCard from './component/CouCa'
import Cards from './component/Cards'
import CoursePage from './component/CouPa'
import CourseBanner from './component/CouBan'
import CourseFinder from './component/CourFi'
import './App.css'
import ContactBanner from './component/ConBan'
let courses = [
               {topimage: "💻", courseheading: "FRONTEND", heading: "HTML & CSS Basics", subheading: "8 lessons . 4 weeks", price: "Rs. 2,500", iconColor: "course-icon1"},
               {topimage: "⚡", courseheading: "JAVASCRIPT", heading: "JS DOM & Arrays", subheading: "12 lessons . 8 weeks", price: "Rs. 3,500", iconColor: "course-icon2"},
               {topimage: "⚛️", courseheading: "REACTJS", heading: "React + Tailwind", subheading: "15 lessons . 6 weeks", price: "Rs. 5000", iconColor: "course-icon3"},
]

let FooterCArdsData = [
               {icon: "🎯", title: "Task-Based Learning", subtitile: "Learn by building real projects from day one.", iconbg: "iconbg1"},
               {icon: "💬", title: "Live Sessions", subtitile: "Interactive classes with your instructor.", iconbg: "iconbg2"},
               {icon: "📄", title: "Handouts", subtitile: "PDF notes after every session.", iconbg: "iconbg3"},
               {icon: "🏆", title: "Certificate", subtitile: "Earn a certificate on completion.", iconbg: "iconbg4"},
];

function App() {
return(
<>
 <Navbar />
<Hero />
<section class="courses">
<div class="courses-header">
      <h2>Featured Courses</h2>
      <a href="#" class="see-all">See all →</a>
    </div>

    <div class="course-grid">
{courses.map((card, index)=>(
               <CoursesCard
               key={index}
               topimage={card.topimage}
               courseheading={card.courseheading}
               heading={card.heading}
               subheading={card.subheading}
               price={card.price}
              iconColor={card.iconColor}
               />
))}
    </div>
    </section>
    <section class="features">
               {FooterCArdsData.map((carddata, index)=>(
                              <Cards
                              key={index}
                              icon={carddata.icon}
                              titile={carddata.title}
                              subtitle={carddata.subtitile}
                              iconbg={carddata.iconbg}
                              />
               ))}
  
    </section>
<CoursePage />
<CourseBanner />
    <CourseFinder />
    <ContactBanner />
</>

)

}
export default App

