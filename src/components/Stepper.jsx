

export default function Stepper() {
    return (
        <div className="">
            <div class="flex items-center flex-col min-h-full h-[251px] ">
                <Step
                    heading="Step.1"
                    content="Participate in a 2-month Summer internship at a Japanese company" />
                <div class="flex-auto border-l-2 transition duration-500 ease-in-out border-gray-300"></div>
                <Step
                    heading="Step.2"
                    content="After completion of the internship, you will have a chance to get the PPO from intern company." />
                <div class="flex-auto border-l-2 transition duration-500 ease-in-out border-gray-300"></div>
                <Step
                    heading="Step.3"
                    content="Join the company in October of the following year" />
            </div>
        </div>
    )
}

function Step({ content, heading }) {
    return (
        <div class="flex items-center relative text-white aspect-square ">
            {/* Circle  */}
            <div class="flex items-center justify-center rounded-full h-[21px] w-[21px] aspect-square bg-white">
                <div class="flex items-center justify-center rounded-full h-[17px] w-[17px] aspect-square border-2 border-black bg-white">

                </div>
            </div>
            <div className="absolute right-full   mt-0 mr-2">
                <p className="min-w-max text-center ml-5  text-base font-bold">
                    {heading}
                </p>
            </div>
            <div className="absolute left-full ml-5  mt-0">
                <p className="min-w-max text-center   text-base font-normal">
                    {content}
                </p>
            </div>
        </div>
    )
}
function Step2({ content, heading }) {
    return (
        <div class="flex items-center relative text-black_light aspect-square ">
            {/* Circle  */}
            <div class="flex items-center justify-center rounded-full h-[21px] w-[21px] aspect-square bg-black_light">
                <div class="flex items-center justify-center rounded-full h-[17px] w-[17px] aspect-square border-2 border-white bg-black_light">

                </div>
            </div>
            <div className="absolute right-full   mt-0 mr-2">
                <p className="min-w-max  ml-5 text-sm md:text-base font-bold  ">
                    {heading}
                </p>
            </div>
            <div className="absolute top-0 left-full ml-3 w-[65vw] md:w-[80vw] lg:ml-5 lg:w-[60vw]   lg:mt-0">
                <p className="  text-xs  lg:text-base font-normal w-full">
                    {content}
                </p>
            </div>
        </div>
    )
}


export function Stepper2() {
    return (
        <div className="">
            <div class="flex items-center flex-col min-h-full h-[500px]   ">
                <Step2
                    heading="Step.1"
                    content="You will get  notification from the Placement Cell  to inform you that they are accepting applications for the GALK summer internship." />
                <div class="flex-auto border-l-2 transition duration-500 ease-in-out border-black_light"></div>
                <Step2
                    heading="Step.2"
                    content="Please register on the GALK portal in the notification. ( registration on the GALK Portal = application ) " />
                <div class="flex-auto border-l-2 transition duration-500 ease-in-out border-black_light"></div>
                <Step2
                    heading="Step.3"
                    content="Please take the Primary selection on GALK Portal.
                Only those who pass the Primary selection will proceed to the Secondary selection."/>
                <div class="flex-auto border-l-2 transition duration-500 ease-in-out border-black_light"></div>
                <Step2
                    heading="Step.4"
                    content="Please take the Secondary selection on GALK Portal.
                    Only those who pass the Secondary selection will  be able to participate in an internship at a Japanese company."/>
                <div className="max-w-[835px] px-5 w-full pt-2">
                </div>

            </div>
            
        </div>
    )
}