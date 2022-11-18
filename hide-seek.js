function hideSeek(num){
    let fabi = [1,1];
    let temp_num = 0;
    for (i = 2; i < num; i++){
        temp_num = fabi[i-1] + fabi[i-2];
        fabi.push(temp_num);
    }

    let total = 1;
    for (let i = 0; i < fabi.length; i++){
        if ((fabi[i] % 2 !== 0) && (fabi[i] <= num)){
            total = total + fabi[i];
        }
    }
    return total;
}

hideSeek(8);