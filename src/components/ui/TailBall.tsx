//props type
interface TailBallProps {
  n: number | string; // ❗1. 넘어오는 값이 number만 있더라도 item(number | string)이니까 string도 받아는걸로
}

//bgColor type
type BgT = {
  "n0" : string;
  "n1" : string;
  "n2" : string;
  "n3" : string;
  "n4" : string;
}

//❗(위와 같은 코드)Record 유틸리티 타입과 템플릿 리터럴 타입을 결합
//type BgColorT = Record<`n${0|1|2|3|4}`, string>

export default function TailBall({n}:TailBallProps) {
    const bgColor:BgT = {
        "n0" : " bg-amber-700 ",
        "n1" : " bg-emerald-700 ",
        "n2" : " bg-blue-700",
        "n3" : " bg-fuchsia-700",
        "n4" : " bg-pink-700",
    }

    const num:number = typeof n === 'string' ? parseInt(n) : n ; // ❗2. Math의 메서드안에 number만 들어가야하기 때문에 n이 string으로 넘어올 수 있으므로 int로 바꿔줌
    const coloridx = `n${Math.floor(num/10)}` as keyof BgT ; //❗3. key값이 BgT에 있는것만 받는 string ///as '타입': as의 타입을 정해줌

  return (
    <div className={`w-16 h-16 ${bgColor[coloridx]}
                    flex justify-center items-center
                    p-5 rounded-full mr-5
                    text-4xl text-white font-bold`}>
      {n}
    </div>
  )
}
