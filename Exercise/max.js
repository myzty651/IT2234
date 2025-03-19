//Finding the maximum

let array_1=[12,13,15,14,9];
let temp=0;

	array_1.forEach((n)=>{
		if( n > temp ){
			temp =n;
		}
		//(max<n)&&(max=n)
	});
	console.log("The Maximum Number is :"+temp);