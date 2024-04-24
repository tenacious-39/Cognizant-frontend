import secondsec from "../../assets/images/second-sec.jpg";

function Secondsection() {
    return (
        <div className="row second-secion mt-5">
            <div className="col-lg-6 second-section-img pl-3" style={{ textAlign: "center" }}>
                <img src={secondsec} alt="..." height="500px" />
            </div>
            <div className="col-lg-6 second-section-heading">
                <h3 className="kanit-medium" style={{ textAlign: "justify" }}>Vitacure Labs Limited was built with the purpose and core belief of making Effective
                    Medicines to Cure patients enabling them to lead
                    healthier lives</h3>
                <p className="mt-5" style={{
                    textAlign: "justify",
                    fontFamily: "Kanit",
                    fontWeight: "200",
                    fontStyle: "normal"
                }}>
                    Welcome to Vitacure Labs, where health and innovation meet to create a brighter future for
                    all. Our journey began with a simple yet profound mission: to provide effective,
                    high-quality pharmaceutical solutions that enhance the well-being of communities worldwide.

                    At Vitacure Labs, we believe in the power of science to transform lives.
                    Our state-of-the-art facilities are home to a dedicated team of researchers,
                    scientists, and healthcare professionals who are committed to excellence.
                    With a relentless pursuit of innovation, we develop a diverse range of products
                    that cater to various health needs, from over-the-counter medications to prescription drugs.
                </p>
            </div>

        </div >
    );
}

export default Secondsection;