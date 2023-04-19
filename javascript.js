function startShadow(){

var elementarray = document.getElementsByClassName('blockelement');
for(var n = 0; n < elementarray.length; n++){

    var CurrentElement = elementarray[n];
    var shadowVar = '';

    var shadowVar2 = '';

    var distance = CurrentElement.getAttribute('shadow-distance')
    var color = CurrentElement.getAttribute('shadow-color')
    var dir = CurrentElement.getAttribute('shadow-dir')

    for(var i = 0; i < distance; i++){

        switch (dir){
            case "top-left": {
                shadowVar +=(shadowVar? ',':'')+i*-1+'px '+ i * -1+'px 0'+ color;
                break;
            }             
               case "top-right": {
                shadowVar +=(shadowVar? ',':'')+i*1+'px '+ i * -1+'px 0'+ color;
                break;
            }            
                case "bottom-left": {
                shadowVar +=(shadowVar? ',':'')+i*-1+'px '+ i * 1+'px 0'+ color;
                break;
            }         
            case "bottom-left": {
                shadowVar +=(shadowVar? ',':'')+i*1+'px '+ i * 1+'px 0'+ color;
                break;
            }        
            case "both": {
                shadowVar +=(shadowVar? ',':'')+i*1+'px '+ i * 1+'px 0'+ color;
                break;
            }
            default:{
                shadowVar +=(shadowVar? ',':'')+i*1+'px '+ i * 1+'px 0'+ color;
                break;
            }
        }

        
    }

    CurrentElement.style.boxShadow = shadowVar;


}

}
