export function makeContrastSketch(){
    return function(p){
        let contrastIMG;
        p.preload=function(){
            contrastIMG = p.loadImage("assets/contrast.jpg")
        } 
        p.setup=function(){
            p.createCanvas(p.windowWidth, p.windowHeight);
        }
        p.draw=function(){
            p.background(220);
            p.image(contrastIMG, 0, 0, p.windowWidth, p.windowHeight);
        }
        p.mousePressed=function(){
            window.dispatchEvent(new Event("goToCompany"));
        }
        p.windowResized = function() {
         p.resizeCanvas(p.windowWidth, p.windowHeight);
        };

    }
   


    
}