let results = document.getElementById('resultInput');
let encountered = false;

function setVal(e){
    if(encountered && !isNaN(e)){
        results.value="";
    }
    results.value+=e;
    encountered = false;
}

function erres(){
    results.value= "";
    encountered = false;
}

function result(){
    let finalResult= results.value.replace('^','**');
    try{ if(results.value!=""){
        finalResult= eval(finalResult);
        if(isNaN(finalResult)){
            results.value = "Hu ha ha wrong input !!!!";
        }else{
        results.value = finalResult;}
    }
    else{
        results.value= "";

    }
}catch(err){
    results.value = 'Invalid Input';}
    encountered = true;
}

function del(){
    results.value= results.value.substring(0,results.value.length-1);
}

