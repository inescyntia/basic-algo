function starNestedLoop(n, m) {
    let str = "";

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            str += '*';
        }
        str += "\n";   
    }
    console.log(str);
}

//TEST CASE
starNestedLoop(1,2)
// *
// *

starNestedLoop(2,3)
// **
// **
// **

starNestedLoop(4,1)
// ****