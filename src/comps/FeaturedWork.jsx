import React from 'react'

function FeaturedWork() {
  return (
    <section className="FeaturedWork">
        <div className="container flexy">
            <div className="FeaturedPic Pic"></div>
            <div className="FeaturedDetails sectionDetails">
                <h2>Story of a lovely couple<br />(Couple Chai).</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At tempus, sit ut sem vulputate erat posuere lobortis. Nunc tincidunt sit morbi tellus viverra placerat sed faucibus.
                <br /><br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. At tempus, sit ut sem vulputate erat posuere lobortis.</p>
                <div className="cta">
                    <a href=""><button className="prime">Our Story</button></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturedWork