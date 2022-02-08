const Parallax = () => {
  
    var posX, posY;
    var para1 = document.getElementById("para1");
    var para2 = document.getElementById("para2");
    var para3 = document.getElementById("para3");


    document.addEventListener("mousemove", function (e) {
    posX = e.clientX - window.innerWidth/2;
    posY = e.clientY - window.innerHeight/2;

    para1.style.transform = `translate(${posX * -0.2}px,${posY * 0.2}px)`;
    para2.style.transform = `translate(${posX * 0.6}px,${posY * -0.5}px)`;
    para3.style.transform = `translate(${posX * 0.8}px,${posY * 0.3}px)`;
  });

  return (
    <div style={{ position: "absolute", zIndex: "10" }}>
      <div
        id="para1"
        style={{width: "8em", height: "8em", backdropFilter: "blur(4px)" }}
      ></div>
      <div
        id="para2"
        style={{width: "8em", height: "8em", backdropFilter: "blur(6px)" }}
      ></div>
      <div
        id="para3"
        style={{width: "8em", height: "8em", backdropFilter: "blur(8px)" }}
      ></div>
    </div>
  );
};

export default Parallax;
