function maximum(x){
    max=x[0];
    for (var i=0; i<x.length;i++){
        if(max<x[i]){
            max=x[i]
        }
    }
    return max;
}





var x=[1,2,4,5,7,2]
documnent.written(maximum(x));
