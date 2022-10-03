import './styles.css';

export default function Hero() {

    return(
        <div 
        className="hero-section 
            d-flex
            flex-column
            flex-md-row
            justify-content-center
            align-items-center
            gap-2"
        >
        
            <div 
            className="module 
                d-flex
                flex-column
                justify-content-between
                p-3
                rounded-5
                bg-darkBlue"
            >
                <div className="text-goldenYellow">
                    <h1>hi, i'm</h1>
                    <h1>jaycee</h1>
                </div>
                <p className="text-neonBlue">full stack web developer</p>
            </div>

            <div 
            className="module 
                d-flex
                flex-column
                gap-2"
            >
                <div className="h-50 
                    d-flex gap-2"
                >
                    <div 
                        className="w-50 
                        p-3
                        rounded-5
                        bg-neonBlue 
                        text-pink"
                    >
                        <h5>PROJECTS</h5>
                    </div>
                    <div 
                        className="w-50 
                        p-3
                        rounded-5
                        bg-pastelGreen 
                        text-darkBlue"
                    >
                        <h5>SKILLS</h5>
                    </div>
                </div>
                <div 
                    className="h-50
                    p-3
                    rounded-5
                    bg-goldenYellow 
                    text-darkBlue"
                >
                    <h1 style={{ fontSize: "36px" }}>CONTACT ME</h1>
                </div>
            </div>   

        </div>
    )
}