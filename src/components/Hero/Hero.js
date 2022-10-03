import { Stack } from 'react-bootstrap';
import { RiGitlabFill } from 'react-icons/ri';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import './styles.css';

export default function Hero({refProps}) {
    const handleScrollTo = (idx) => refProps.current[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });

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
                p-xl-5
                rounded-5
                bg-darkBlue"
            >
                <div className="text-goldenYellow">
                    <h1>hi, i'm jaycee</h1>
                    <p className="text-neonBlue">full stack web developer</p>
                </div>
                <div className="text-goldenYellow">
                    <Stack direction="horizontal" gap={3}>
                        <RiGitlabFill size={32} />
                        <BsLinkedin size={32} />
                        <BsGithub size={32} />
                    </Stack>
                </div>
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
                        text-darkBlue"
                        onClick={() => handleScrollTo(0)}
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