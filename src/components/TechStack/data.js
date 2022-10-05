import { BsBootstrapFill } from 'react-icons/bs';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';


const techStacks = [
    <div>
        <IoLogoHtml5 size={32} /> 
        <p className="text-neonBlue">HTML5</p>
    </div>, 
    <div>
        <IoLogoCss3 size={32} /> 
        <p className="text-neonBlue">CSS3</p>
    </div>, 
    <div>
        <BsBootstrapFill size={32} /> 
        <p className="text-neonBlue">Bootstrap</p>
    </div>, 
    <div>
        <IoLogoJavascript size={32} /> 
        <p className="text-neonBlue">Javascript</p>
    </div>, 
    <div>
        <SiMongodb size={32} /> 
        <p className="text-neonBlue">MongoDB</p>
    </div>, 
    <div>
        <SiExpress size={32} /> 
        <p className="text-neonBlue">Express.js</p>
    </div>, 
    <div>
        <SiReact size={32} /> 
        <p className="text-neonBlue">React.js</p>
    </div>, 
    <div>
        <SiNodedotjs  size={32} /> 
        <p className="text-neonBlue">Node.js</p>
    </div>
];

export default techStacks;