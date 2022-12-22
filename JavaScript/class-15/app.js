// var str = "ahmed";
// var strToArr = str.split("");
// console.log(strToArr);



var numVal = 42;
var countVal = 0;
// console.log(numVal);

numVal = String(numVal);
// console.log(numVal, typeof (numVal));

var valueLength = numVal.length;
// console.log(valueLength);

for (var i = 0; i < numVal.length; i++) {
    // console.log(numVal[i]);

    countVal = countVal + Number(numVal[i]);
    console.log(countVal);
};

// console.log(countVal);

// var meanMediumMode = countVal / valueLength;
// console.log(meanMediumMode);