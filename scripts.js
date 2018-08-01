function myFunction(count){
	$('.add-stuff').append('Oh my');
	count++;
	if (count > 100) {
		return;
	}else{
		myFunction(count);
	}
}
myFunction(0);