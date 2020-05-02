class Errores{
    constructor(){

    }
    error() {
        try {
            if(number < 1 || number > 10){
                throw ": Digite un numero entre 1 y 10";
            }
            } catch (error) {
                console.log(": Digite un numero entre 1 y 10");
                alert("Error"+ error);
            }  
    }
    
}