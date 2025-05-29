export function makeCompanySketch(){
    return function(p){
        let companyIMG;
        p.preload=function(){
            companyIMG = p.loadImage("assets/company.jpg")
        } 
        p.setup=function(){
            p.createCanvas(p.windowWidth, p.windowHeight);
        }
        p.draw=function(){
            p.background(220);
            p.image(companyIMG, 0, 0, p.windowWidth, p.windowHeight);
        }
        p.mousePressed=function(){
            window.dispatchEvent(new Event("goToEndingcredit"));
        }
        p.windowResized = function() {
         p.resizeCanvas(p.windowWidth, p.windowHeight);
        };

    }
   


    
}