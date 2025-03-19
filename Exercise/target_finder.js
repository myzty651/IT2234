//Common elements
let ans;
let array_1=[4,5,6,3,7,1];
let array_2=[8,3,2,1,5,1];

for(let i = 0 ; i < array_1.length;i++){
	for(let k = 0 ; k < array_2.length;k++)
	if(array_1[i] === array_2[k]){
		console.log(array_1[i]);
	}
};


//TARGET FIDER
let target = 7;
let array_3=[1,2,3,4,5,6,7];

 for(let i = 0; i <array_3.length;i++){
	for(let k =0;k< array_3.length;k++){
		if(array_3[i]+array_3[k] === target){
			console.log(array_3[i]+" "+array_3[k])
		}
	} 
 };
 
 //the most frequent Element
  let array_4 = [4, 8, 3, 4, 3, 2, 1, 8,4];
  let mostFrequentElement;
  let high;
for(let i = 0 ; i <array_4.length;i++){
	for(let k = 0 ; k< array_4.length;k++){
		if(array_4[i]=== array_4[k]){
			mostFrequentElement=array_4[i];
		}
	}
}
 console.log("The most frequent element :"+mostFrequentElement);
