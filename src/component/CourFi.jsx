import { useState } from "react"

let Course = ["HTML & CSS", "CSS", "HTML", "JavaScript", "ReactJS"];
let findcourse = ()=>[
               
]
function CourseFinder (){
               return (
                              <>
                              <section class="courses-section">
    <div class="courses-container">

      <aside class="courses-filters">
        <div class="filter-block">
          <h3 class="filter-title">CATEGORY</h3>
          <ul class="filter-list">
            <li className="allcourse"><a href="#">All Courses (6)</a></li>
            <li className="forpading"><a href="#">HTML & CSS (2)</a></li>
            <li className="forpading"><a href="#">JavaScript (2)</a></li>
            <li className="forpading"><a href="#">ReactJS (2)</a></li>
          </ul>
        </div>

        <div class="filter-block">
          <h3 class="filter-title">LEVEL</h3>
          <ul class="filter-list">
            <li className="allcourse"><a href="#">All Levels</a></li>
            <li className="forpading"><a href="#">Beginner</a></li>
            <li className="forpading"><a href="#">Intermediate</a></li>
          </ul>
        </div>
      </aside>

      <div class="courses-list">
        <div class="course-card">
          <p class="course-category">HTML & CSS</p>
          <h4 class="course-title">Web Foundations</h4>
          <p class="course-details">8 lessons · Beginner</p>
          <p class="course-price">Rs. 2,500</p>
          <p class="course-rating">★★★★★</p>
        </div>

        <div class="course-card">
          <p class="course-category">CSS</p>
          <h4 class="course-title">Tailwind CSS Mastery</h4>
          <p class="course-details">10 lessons · Beginner</p>
          <p class="course-price">Rs. 3,000</p>
          <p class="course-rating">★★★★☆</p>
        </div>

        <div class="course-card">
          <p class="course-category">JavaScript</p>
          <h4 class="course-title">JS DOM & Arrays</h4>
          <p class="course-details">12 lessons · Intermediate</p>
          <p class="course-price">Rs. 3,500</p>
          <p class="course-rating">★★★★★</p>
        </div>

        <div class="course-card">
          <p class="course-category">ReactJS</p>
          <h4 class="course-title">React + Vite + Tailwind</h4>
          <p class="course-details">15 lessons · Intermediate</p>
          <p class="course-price">Rs. 5,000</p>
          <p class="course-rating">★★★★★</p>
        </div>
      </div>
    </div>
  </section>
                              </>
               )
}
export default CourseFinder