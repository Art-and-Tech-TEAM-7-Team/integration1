export function makeCarInsideSketch(){
    return function(p){
        let carInsideIMG, starupIMG;
        p.preload=function(){
            carInsideIMG = p.loadImage("assets/carInside.jpg")
            starupIMG= p.loadImage("assets/startup.jpg")
        } 

        p.setup=function(){
            p.createCanvas(p.windowWidth, p.windowHeight);
            p.startupX= p.windowWidth/2 - starupIMG.width/2;
            p.startupY= p.windowHeight/2 - starupIMG.height/2;
        }
        p.draw=function()
        {
            p.background(220);
            p.image(carInsideIMG, 0, 0, p.windowWidth, p.windowHeight);
        
        }

        p.mousePressed=function(){
            window.dispatchEvent(new Event("goToContrast"));
        }
        p.windowResized = function() {
         p.resizeCanvas(p.windowWidth, p.windowHeight);
        };

    }
   


    
}