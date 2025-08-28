const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium a eligendi ad doloremque iusto incidunt blanditiis rem provident recusandae, nemo harum! Sequi.</p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Catoegory</button>
                </div>
                <div className="shopping">
                    <p>Also Aviaiable On</p>
                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="" />
                        <img src="/images/flipkart.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="hero-image">
                <img src="/images/shoe_image.png"  alt="" />
            </div>
        </main>
    )
}

export default HeroSection;