import Image from "next/image"

function MyClockImage() {
    return(
        // animate-[bounce_1.5s_ease-in-out_infinite]
        <Image  src="/clock.png" alt="시계" width={200} height={200}></Image> 
    )
}
export default MyClockImage