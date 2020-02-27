const getLuckyNumber = (callback) => {
	const luckyNum = Math.ceil(Math.random() * 10);
	if( luckyNum <= 5 ){
		callback({msg: "Better luck next time"});
		return;
	}
	callback(undefined, luckyNum);
};
// error first callback
getLuckyNumber((err, num) => {
	if(err) {
		console.log(err.msg);
	} else {
		console.log("Lucky Number: ", num);
		getLuckyName(num, (err, name) => {
			if(err)
				console.log(err.msg)
			else {
				console.log(name)
			}
		})
	}
});

