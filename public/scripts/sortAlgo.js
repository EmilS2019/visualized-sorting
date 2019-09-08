const bubbleSort = arr => {
    arr = JSON.parse(JSON.stringify(arr))
    let arrInt = []
    arr.forEach(line => arrInt.push(line.height));

    for (let i = 0; i < arrInt.length; i++) {
        for (let j = 0; j < arrInt.length - i ; j++) {
        if (arrInt[j] > arrInt[j + 1]) {
            [arrInt[j], arrInt[j + 1]] = [arrInt[j + 1], arrInt[j]];
            recordedChanges.push(JSON.parse(JSON.stringify(arrInt)));
            }
        }
    }
    return arrInt
  };

const selectionSort = arr =>{
    let arrInt = []
    arr.forEach(line => arrInt.push(line.height));

    let max = 0;
    for (let i = 0; i < arrInt.length; i++) {
        
        for (let j = 0; j < arrInt.length - i; j++) {
            if (arrInt[j] > arrInt[max]) max = j        
        }

        [arrInt[arrInt.length-i-1], arrInt[max]] = [arrInt[max], arrInt[arrInt.length-i-1]]
        recordedChanges.push(JSON.parse(JSON.stringify(arrInt)));
        max = 0;
    }
    return arrInt
}

const insertionSort = arr =>{
    let arrInt = []
    arr.forEach(line => arrInt.push(line.height));
    let temp;
    for (let i = 0; i < arrInt.length; i++) {
        j = i
        while(j > 0 && arrInt[j-1] > arrInt[j]){

            [arrInt[j-1], arrInt[j]] = [arrInt[j], arrInt[j-1]]
            recordedChanges.push(JSON.parse(JSON.stringify(arrInt)));
            j--
        }
    }
    return arrInt
}

const partition = (arrInt, start, end) => {
    
    let i = start + 1;
    let piv = arrInt[start]

    for (let j = start + 1; j <= end; j++) {
        if(arrInt[j] < piv){
            [arrInt[i], arrInt[j]] = [arrInt[j], arrInt[i]]
            i++
            recordedChanges.push(JSON.parse(JSON.stringify(arrInt))); 
        }   
    }
    [arrInt[start], arrInt[i-1]] = [arrInt[i-1], arrInt[start]]
    recordedChanges.push(JSON.parse(JSON.stringify(arrInt))); 
    
    return i-1;
}

const quickSort = (arr, start, end) => {
    
    let arrInt = []
    arr[0].height !== undefined ? arr.forEach(line => arrInt.push(line.height)) 
    : arrInt = arr;
    
    if (start < end){        
        let piv_pos = partition(arrInt, start, end)
        quickSort(arrInt, start, piv_pos - 1);
        quickSort(arrInt,piv_pos+1, end)
    
    }
}