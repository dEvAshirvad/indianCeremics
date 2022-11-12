import React from 'react'

function StorySection() {
  return (
    <section className="StorySection">
        <div className="container">
            <div className="bigBanner storyBanner"></div>
            <div className="flexy">
                <div className="storyDetails sectionDetails">
                    <h2>Made In India, With Love....</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At tempus, sit ut sem vulputate erat posuere lobortis. Nunc tincidunt sit morbi tellus viverra placerat sed faucibus.
                    <br /><br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. At tempus, sit ut sem vulputate erat posuere lobortis.</p>
                    <div className="cta">
                        <a href=""><button className="prime">Our Story</button></a>
                    </div>
                </div>
                <div className="storyPic Pic">

                </div>
            </div>
        </div>
    </section>
  )
}

export default StorySection