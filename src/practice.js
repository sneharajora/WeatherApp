// array contain numbers , even or odd , sum of odd numbers and even numbers
const arr =[1,2,3,4,5,6,7,8,9,10];

function sumofeven(arr){
    let sum =0;
    let sumodd =0;
    for(let i =0;i<=arr.length-1;i++){
        if(arr[i]%2==0){
            console.log("even");
            sum = sum+arr[i];
            
        }
        
        else{
            console.log('odd');
           sumodd = sumodd+arr[i];
       
           
        }
        
    }
    console.log(sum);
    console.log(sumodd);

}
sumofeven(arr);