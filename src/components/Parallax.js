import { useEffect } from "react"

const Parallax = () => {

    useEffect(() => {
      var posX, scrollTop, vOffset;
      var para1 = document.getElementById("para1");
      var para2 = document.getElementById("para2");
      var para3 = document.getElementById("para3");
      var body = document.getElementsByTagName("body");
 
      vOffset = 420; 

      const updatePos = () => {
        para1.style.transform = `scale(1)   translate(${posX*0.3}px, ${(scrollTop/2)+vOffset}px)`;
        para2.style.transform = `scale(0.7) translate(${posX*0.2}px, ${(scrollTop/3)+vOffset}px)`;
        para3.style.transform = `scale(1.2) translate(${posX*0.4-50}px, ${(scrollTop/1.5)+vOffset}px)`;
      }
      
      document.addEventListener("scroll", function (e) {
        scrollTop = -(window.scrollY/body[0].clientHeight)*2000;
        updatePos();
      });
      
      document.addEventListener("mousemove", function (e) {
        posX = e.clientX - window.innerWidth/2;
        updatePos()});
  })
    
  return (
    <div className="para-container" style={{ width:"100%", height:"100%", position: "absolute", zIndex: "5", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
      <div
        id="para1" className="parallax-box"
        style={{width: "8em", height: "8em", backdropFilter: "blur(6px)" }}
      ></div>
      <div
        id="para2" className="parallax-box"
        style={{width: "8em", height: "8em", backdropFilter: "blur(4px)" }}
      ></div>
      <div
        id="para3" className="parallax-box"
        style={{width: "8em", height: "8em", backdropFilter: "blur(8px)" }}
      ></div>
    </div>
  );
};

export default Parallax;
