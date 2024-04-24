import anitinf from "../../assets/images/antiinfectives.jpg";
import diabetes from "../../assets/images/diabetes.jpg";
import biologics from "../../assets/images/biologics.jpg";

function Thirdsection() {
    return (
        <div className="third-section mt-5">

            <div style={{ textAlign: "center" }}>
                <h2 className="text-white pt-5" >Focus Area</h2>
                <h4 className="text-white">Established presence in key therapeutic areas</h4>
            </div>

            <div className="row mt-5">
                <div className="col card rounded shadow third-section-col" style={{
                    backgroundImage: `url(${anitinf})`, backgroundRepeat: "no-repeat"
                }}>
                    <h2 style={{ color: "#282B30", fontWeight: "900" }}>Antiinfectives</h2>
                </div>
                <div className="col card rounded shadow third-section-col" style={{
                    backgroundImage: `url(${diabetes})`, backgroundRepeat: "no-repeat"
                }}>
                    <h2 style={{ color: "#282B30", fontWeight: "900" }}>Diabetes</h2>
                </div>
                <div className="col card rounded shadow third-section-col" style={{
                    backgroundImage: `url(${biologics})`, backgroundRepeat: "no-repeat",
                    marginRight: "1rem"
                }}>
                    <h2 style={{ color: "#282B30", fontWeight: "900" }}>Biologics</h2>
                </div>
            </div>
        </div>
    );
}

export default Thirdsection;