function CoursesCard ({topimage, courseheading, heading, subheading, price, iconColor}){
               return (
                              <>
                              
      <div class={"course-card"}>
        <div class={`course-icon ${iconColor}`}>{topimage}</div>
        <div className="cardcontent">
        <p class="category">{courseheading}</p>
        <h3 class="title">{heading}</h3>
        <p class="details">{subheading}</p>
        <div className="line"></div>
        <div className="price">
        <p class="pricetext">{price}</p>
        <a href="#" class="enrollbtn">Enroll</a>
        </div>
        </div>
      </div>

  
                              </>
               )
}
export default CoursesCard