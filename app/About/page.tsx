import { resolve } from "path"

export default async function About(){
    await new Promise((resolve)=> setTimeout(resolve,3000))
    return(
        <section id="about" className="py-40 bg-gray-200"> 
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-centre "> About us</h1>

            
                <p className="text-1xl  text-justify"> Our core values are rooted in trusted,
                and excellence. We work tiressly to understand our clients' need and deliver services
                that exceed expections. Whether ypu'r a small business or larg enterprise, we're here 
                to help you succeed. 
            </p>

        </div>
        </section>
    )
}