function mask(input) {
    if(input.length < 17 && input.length >11){
    let masked = [];
        for(let i = 0; i < input.length; i++){
            if(i < input.length-4){
                masked.push("*");
            }else{
                masked.push(input[i]);
            }
        }
        return masked.join("");
    } else {
        return "Invalid Credit Card Info"
    }
}

module.exports = mask;