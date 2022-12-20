function sound(){
navigator.mediaDevices.getUserMedia({audio:true , video:false});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/UhIyrWq4h/model.json',{probabilityThreshold:0.7},modelready);    
}

function modelready(){
classifier.classify(gotresult);    
}
var dog=0;
var cat=0;

function gotresult(error,result){
  if (error){
  console.error(error);  
  }
  else{
   console.log(result);
   randomnumberr=Math.floor(Math.random()*255)+1;
   randomnumberg=Math.floor(Math.random()*255)+1;
   randomnumberb=Math.floor(Math.random()*255)+1; 
   document.getElementById("resultlabel").innerHTML="detected voice is "+result[0].label;
   document.getElementById("resultcount").innerHTML="detected dog "+dog+"detected cat"+cat;
   document.getElementById("resultlabel").style.color="rgb("+randomnumberr+","+randomnumberg+","+randomnumberb+")";
   document.getElementById("resultcount").style.color="rgb("+randomnumberr+","+randomnumberg+","+randomnumberb+")";
img=document.getElementById('animalimage');
if(result[0].label=="Dog"){
  img.src="dog-puppy-on-garden-royalty-free-image-1586966191.jpg";
  dog=dog+1;  
}
else if(result[0].label=="Cat"){
    img.src="pexels-pixabay-45201.jpg";
    cat=cat+1;
}
else{
img.src="Speaker_Icon.svg.png";

}
  }  
}