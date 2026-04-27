
function Cards ({icon, titile, subtitle, iconbg}){
               return (
                              <>
                              
    <div class="feature-card">
      <div class={`icon ${iconbg}`}>{icon}</div>
      <h3>{titile}</h3>
      <p>{subtitle}</p>
    </div>
                              </>
               )
}
export default Cards