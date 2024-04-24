import React from "react";
import Firstcarasouel from "./Firstcarasouel";
import Secondsection from "./Secondsection";
import Thirdsection from "./Thirdsection";

function Home() {
    return (
        <div className="homepage">
            <Firstcarasouel />
            <Secondsection />
            <Thirdsection />
            {/* <Fourthsection /> */}
        </div>
    );
}

export default Home;