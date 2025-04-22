import MyClockTime from "../../components/clock/MyClockTime"
import MyClockImage from "../../components/clock/MyClockImage"
//import './MyClock.css'

function MyClock(){
    return(
        <div className="w-11/12 h-full flex flex-col justify-center items-center">
            <MyClockImage/>
            <MyClockTime/>
        </div>
    )
}
export default MyClock