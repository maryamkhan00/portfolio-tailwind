import Image from "next/image"

export default function home() {
  return (
      <div className="parentDiv">
        <div className="child1">
          Hey there!
          <br />
          My Name is <span className="name">Maryam</span>
          <br />I am a Next JS Developer
        </div>
        <div className="child2"> 
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbqG3NZuUc1H7Ks2mXRNuP7Ka37XSrM3Etg&s"
        alt="profile" width={450} height={300} />
       </div>
      </div>
  )};