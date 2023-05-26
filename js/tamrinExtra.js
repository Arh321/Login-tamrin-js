const inputhandling = (e) => {
    
    let validUP = false;
    let validLow = false;
    let UpperLetters = "ASDFGHJKLPOIUYTREWQZXCVBNM";
    let lowerLetters = "qwertyuioplkjhgfdsazxcvbnm";
    const allLetters =[...UpperLetters.split(''),...lowerLetters.split('')];
    let username = e.target.value.split('');
    console.log(username)
    if(username.length != 0){
        for (let i=0 ; i < username.length ; i++){
            if (UpperLetters.split('').indexOf(username[i]) != -1){
                validUP = true;
            }
            if( lowerLetters.split('').indexOf(username[i]) != -1){
                validLow = true;
            }
            // if(allLetters.indexOf(username[i]) == -1){
            //     validLow = false;
            //     validUP = false
            // }

            if (lowerLetters.split('').indexOf(username[i]) == -1 && UpperLetters.split('').indexOf(username[i]) == -1){
                validUP = false;
                validLow = false;
                i = username.length;
            }
    
            if(validUP && validLow && username.length < 16){
                document.getElementById('name').style.borderColor = 'green';
                document.getElementById('error1').style.display = 'none';
            }else{
                document.getElementById('name').style.borderColor = 'red';
                document.getElementById('error1').style.display = 'block';
            }
        }

    }else{
        document.getElementById('name').style.borderColor = 'rgb(48, 48, 48)';
        document.getElementById('error1').style.display = 'none';
    } 
}
document.getElementById('name')
.addEventListener('input',inputhandling);


const ValidateEmail = (e) =>
{
    const validLetters = "ASDFGHJKLPOIUYTREWQZXCVBNMqwertyuioplkjhgfdsazxcvbnm.@0123456789"
    let UpperLetters = "ASDFGHJKLPOIUYTREWQZXCVBNM";
    let lowerLetters = "qwertyuioplkjhgfdsazxcvbnm";
    const allLetters =[...UpperLetters.split(''),...lowerLetters.split('')];
    let Valid = false;
    let inputText = e.target.value.split('');
    let validData = inputText[inputText.indexOf('@') +1] ;
    console.log(validData )
    if (inputText.length != 0){
    for(let char of inputText) 
    {
        if (validLetters.split('').indexOf(char) != -1 && inputText.indexOf('@') != -1){
            Valid = true;
        }else{
            Valid = false;
        }
        if(inputText[0] == '@' || allLetters.indexOf(validData) == -1){
            Valid = false;
        }

        if(Valid){
            document.getElementById('email').style.borderColor = 'green';
            document.getElementById('error2').style.display = 'none';
        }else{
            document.getElementById('email').style.borderColor = 'red';
            document.getElementById('error2').style.display = 'block';
        }
    }}else{
        document.getElementById('email').style.borderColor = 'rgb(48, 48, 48)';
        document.getElementById('error2').style.display = 'none';
    }
}

document.getElementById('email')
.addEventListener('input',ValidateEmail);


const validPassword = (e) => {
    let validUP = false;
    let validLow = false;
    let ValidNum = false;
    let UpperLetters = "ASDFGHJKLPOIUYTREWQZXCVBNM";
    let lowerLetters = "qwertyuioplkjhgfdsazxcvbnm";
    let numb = "0123456789"
    const allLetters =[...UpperLetters.split(''),...lowerLetters.split(''),...numb.split('')];
    let username = e.target.value.split('');
    console.log(username)
    if(username.length != 0){
        for (let char of username){
            if (UpperLetters.split('').indexOf(char) != -1){
                validUP = true;
            }
            if( lowerLetters.split('').indexOf(char) != -1){
                validLow = true;
            }
            if( numb.split('').indexOf(char) != -1){
                ValidNum = true;
            }
            if(allLetters.indexOf(char) == -1){
                validLow = false;
                validUP = false;
                ValidNum = false;
            }
    
            if(validUP && validLow && ValidNum && username.length > 8){
                document.getElementById('password').style.borderColor = 'green';
                document.getElementById('error3').style.display = 'none';
            }else{
                document.getElementById('password').style.borderColor = 'red';
                document.getElementById('error3').style.display = 'block';
            }   
        }
    }else{
        document.getElementById('password').style.borderColor = 'rgb(48, 48, 48)';
        document.getElementById('error3').style.display = 'none';
    }
}

document.getElementById('password')
.addEventListener('input',validPassword);