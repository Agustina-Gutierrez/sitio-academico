function iniciar(){
var elemento=document.getElementById('lienzo1');
lienzo=elemento.getContext('2d');
lienzo.fillStyle="#5c094b"
lienzo.beginPath();
lienzo.moveTo(100,100);
lienzo.lineTo(100,250);
lienzo.lineTo(350,100);
lienzo.clearRect(170,150,50,50);
lienzo.lineCap="round";
lienzo.fill();
lienzo.fillRect(150,200,5,100)
lienzo.fillRect(280,100,5,200)
lienzo.closePath();
lienzo.beginPath();
lienzo.arc(153,300,10,0,Math.PI*2,false)
lienzo.fill()
lienzo.closePath()
lienzo.beginPath()
lienzo.arc(283,300,10,0,Math.PI*2,false)
lienzo.fill()
lienzo.closePath()
lienzo.globalCompositeOperation="source-atop"
lienzo.fillStyle="#000000"
lienzo.beginPath();
lienzo.arc(200,145,35,0,Math.PI,false)
lienzo.lineWidth=8;
lienzo.stroke()
lienzo.closePath()
lienzo.beginPath();
lienzo.arc(180,120,10,0,Math.PI*2,false)
lienzo.fill()
lienzo.arc(220,120,10,0,Math.PI*2,false)
lienzo.fill()
} window.addEventListener("load", iniciar, false);