function fibo(n){

    var output = "0 1";  // it initiates the first 2 numbers
    var n, f=0, s=1, sum=0;     //declare  and define the identifiers

    for(var i=2; i<=n; i++) {
    sum = f + s;                //sum is updated
    output += ' ' + sum;        // output is updated
    f = s;                      //f is re-defined
    s = sum;                    //s is redefined
    }
    console.log(output);
}


fibo(10);