import pic from "../profile pic.jpg"
import Image from "next/image"
export default function Home(){
  return(
    <div className="homeContainer">
      <div className="childContainer"> 
        Hey,
        <br />
        My Name is <span className="nameColor">Noman ALi</span>
        <br />
        I am Next JS Developer
      </div>
      <div className="childContainer" > 
      <Image
       src={pic}
       alt="This is profile picture"  
       className="img"/>
      </div>
    </div>
  )
}