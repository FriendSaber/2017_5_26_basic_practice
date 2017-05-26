// Write your cade below:
function caclRemaindar(  a,  b) {
    return a%b;
};


function caclSum( arr) {//
   var sum=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
};

function caclSumInConditon( array2, n) {
    var  sum2=0;
    for(i=0;i<array2.length;i++){
        if(array2[i]<n){
            sum2+=array2[i];
        }
    }
    return sum2;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}