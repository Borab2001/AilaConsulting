import Globe from "./globe";
// import { Map } from "./map";

const WorkGlobe = () => {
    return (
        <div className="w-full h-full relative">
            <div className="w-[500px] h-[500px] absolute z-10 flex">
                {/* <Map /> */}
                <Globe />
            </div>
        </div>
    );
};

export default WorkGlobe;