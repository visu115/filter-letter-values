let array1 = ['seetha','raman','raja','karthick','veera'];

let ans =array1.toString()

function getFilterValues(arr,val){

    let count =0;

    for (let i =0 ; i < arr.length ; i++){
        if (arr[i]===val){

            count++

        }
    }
    return count;
}

console.log(getFilterValues(ans,'a'))