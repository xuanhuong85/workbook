/***EX 3***/
var fs = require('fs')
var LineCountingContent = fs.readFileSync(process.argv[2])
var ContentString = LineCountingContent.toString()
//console.log(ContentString)
var LineArray = ContentString.split('\n')
console.log(LineArray.length-1)	
//var NoOfLines = contents.toString().split('\n').length - 1
// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
