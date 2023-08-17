import ImageService from './ImageService';

function Home() {
    return <div id="homepage">
        <div className="welcome_block">
        <h1>Welcome to KIMS</h1>
        <p>Pioneered in Emergency health services</p>
        </div>

        <div className="flex-container">
            <ImageService image="images/img1.jpg" title="Cardio Services"/>
            <ImageService  image="images/img2.jpg" title="Experienced Doctors"/>
            <ImageService  image="images/img3.jpg" title="Advanced Services"/>
        </div>
    </div>
}

export default Home;