let nested_array=[[1,2,3],[6,5],[9,5,7]];
 
 //foreach loops
 nested_array.forEach((n)=>{
	 console.log(n)
 });
 console.log("\n");
 console.log(nested_array);

 //for loops
for(let i = 0 ; i <nested_array.length;i++){
	for(let k = 0 ;k< nested_array[i].length;k++){
		console.log(nested_array[i][k]);
	}
		console.log("\n");
};