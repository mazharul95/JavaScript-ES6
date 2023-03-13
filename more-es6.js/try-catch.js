
function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error'); 
    try{
        //console.log(b.baria);
        const age = parseInt(ageText);
        if(isNaN(age)){
            throw "Please enter a valid number";
        }
        else if((age < 18)){
            throw "bacha kaccha not allowed";
        }
        else if((age > 40)){
            throw "old man not allowed here";
        }
        errorTag.innerHTML = '';
    }
    catch(err){
        console.log('ERROR:', err);
        errorTag.innerHTML='ERROR:' + err;
    }
    finally{
        console.log('all done inside try catch');
    }
    console.log(11111);
}
