// there are 3 ways to create a component
// method 1: default functional component
// method 2: arrow function component
// method 3: default return component

// method 2:
import profile from '../assets/images/fa.png';
export const HeroSection = () => {
    return(
        <>
            <div className="container hero-section">
                <div className="row">
                    <div className="col col-sm-12 col-md-6 col-lg-6">
                        <h1 className="title-section">Hi, Fahad here!</h1>
                        <h3 className="subheading">Software Engineer</h3>
                    </div>
                    <div className="col mb-4 col-sm-12 col-md-6 col-lg-6">
                        <img width={400} height={400} src={profile} alt="profile"/>
                    </div>
                </div>
            </div>
        </>
    )
}
