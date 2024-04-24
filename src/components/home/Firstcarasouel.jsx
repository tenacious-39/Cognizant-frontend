import firstcar from "../../assets/images/firstcar.jpg";
import secondcar from "../../assets/images/secondcar.jpg";
import thirdcar from "../../assets/images/thirdcar.jpg";

function Firstcarasouel() {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={firstcar} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Technology driven biopharma player with differentiated portfolio and global presence</h3>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={secondcar} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Ranked one of the fastest growing and 13th largest pharma player in India</h3>
                        <p>(* as per AIOCD-AWACS Jannuary 2024)</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={thirdcar} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Committed to ensure dedicated support in the fight against
                            COVID-19</h3>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </button>
        </div>
    );
}

export default Firstcarasouel;