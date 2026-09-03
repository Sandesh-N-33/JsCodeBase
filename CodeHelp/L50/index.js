try{
    console.log("try starts here"); //1
    console.log(x); //2
    console.log("try ends here");
} catch(e){
    console.log("catch starts here");//3
    throw new Error("Trying catch", {cause: e});//5
    console.log("catch ends here");
} finally{
    console.log("In finally");//4
}