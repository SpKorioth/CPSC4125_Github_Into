$(document).ready(function() {
    // all custom jQuery will go here
    // $(".jumbotron-button").click(function(){
    //     $(".test").html("<b>Hello world!</b>");
    // })

    const a;
    var b = 1;//can change large scope
    let c = 2;//can change smaller scope

    if(b==2){

    }else if(c===3){//req. same type

    }else{

    }

    var d = b==2?"yes": a!=null?"yes":"no"; //inline if statement condition?truecase:falsecase

    //modulus; 1+1 -> 11
    //string, number, array[], json{}

    //check developer.mozilla.org for arrays
    //sort, 

    var xkcdJson = {title: "Standard Model Changes",
                    day: "26"};
    var xkcdDay = xkcdJson.day; //=26

    //GET, PUT, POST, DELETE | CREATE, RETRIEVE, UPDATE, DELETE

    for(var i=0;i<something;i++){}
    something.forEach()//no counter

    function firstFunction(variables){
        return variables;
        //process input, return something
    }

    Promise(function(){
        setTimeout(x);
        //what you're waiting on
    });

    console.log(variableName); //good for small program; writes to console

});
