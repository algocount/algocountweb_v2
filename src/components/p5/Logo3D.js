// solving issue of prefixing static files in production
// https://github.com/gatsbyjs/gatsby/issues/21975#issuecomment-650573201

export default function Logo3D(p5) {
  let myLogo
  let dx = p5.mouseX - p5.width / 2
  let dy = p5.mouseY - p5.height / 2
  let v = p5.createVector(dx, dy, 0)
  //Accounts for navbar and layout padding-top
  let vOffset = document.getElementsByClassName('navbar')[0].offsetHeight + (16*2.5) 
  let basePath = process.env.PUBLIC_URL 

  v.div(140)

  p5.preload = () => {
    myLogo = p5.loadModel(basePath + "/logo.obj")
    console.log(basePath + "/logo.obj")
  }

  p5.setup = function () {
    p5.createCanvas(p5.windowWidth, p5.windowHeight-vOffset, p5.WEBGL)
    console.log(vOffset)
  }

  p5.draw = () => {
    p5.background(255, 0)
    p5.ambientLight(255, 255, 249)
    p5.pointLight(200, 200, 200, dx, dy, -200)
    p5.specularMaterial(250, 250, 255)
    p5.translate(-25, +25, 0)
    p5.shininess(1)
    let rotateAngle = p5.sin(p5.frameCount / 45)
    p5.rotateX(p5.mouseX * 0.001)
    p5.rotateY(-rotateAngle / 2)
    p5.rotateZ(rotateAngle)
    p5.model(myLogo)
    p5.stroke(0)
  }

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight-vOffset, p5.WEBGL)
  }
}
