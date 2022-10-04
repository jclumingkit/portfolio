import { AiFillCheckCircle } from 'react-icons/ai';

export default function EmailSentMessage() {
    return(
        <div
            className="
                text-center
                bg-darkBlue
                text-goldenYellow
                rounded-5
                p-5"
        >
            <h1 className="text-pastelGreen"><AiFillCheckCircle size={72} /></h1>
            <h1>
                Your message is received. 
            </h1>
            <h2>I'll get back to you ASAP!</h2>
        </div>
    )
}