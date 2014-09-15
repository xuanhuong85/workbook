/***EX 2***/
//console.log(Number(process.argv[2])+Number(process.argv[3])+Number(process.argv[4]))
var result = 0
for (var i = 2; i < process.argv.length; i++) {
	result += Number(process.argv[i])
};
console.log(result)
