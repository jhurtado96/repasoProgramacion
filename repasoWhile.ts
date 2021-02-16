function devolverSiM (names){
    let bool:boolean = false;
    let i:number = 0;

         while (i<names.length && bool==false)
        {
            if(names[i][0]==="m")
            {
                bool = false;
                i++;
            }
            else 
            {
                bool = true;
            }
        }
    return bool
}

function siPar (numbers:number[]){
    let i=0;
    let bool = false;
    let resultado:string = "";
    while (i<numbers.length && bool==false)
    {
        if (numbers[i]%2==0)
        {
            bool = true;

            resultado = "Hay par";
        }
        else 
        {
            bool = false;
            i++;
            resultado = "No hay par";
        }

    }
    return resultado;
}