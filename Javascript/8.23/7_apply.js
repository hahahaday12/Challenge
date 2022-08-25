// 주어진 숫자 만큼 0부터 순회하는 함수 
// 순회 하면서 주어진 특정한 일을 수행해야 함.
//  순회하는 숫자를 다 출력하고 싶음
// 순회하는 숫자의 두배값을 다 출력하고 싶음. 

function iteration(max, action) {
    for ( i=0; i<max; i++){
        action(i)
    }
}
function log(i) {
    console.log(i);
}

function doublLog(i){
    console.log(i * 2);
}
iteration(3, log)
iteration(3, doublLog)