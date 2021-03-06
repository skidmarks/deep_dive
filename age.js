var getAge = function(yyyymmdd) {
	
	//REQUIRED: yyyymmdd 태어난 생년월일이에요. 예) 19800205

	var 
	//리턴할 만 나이
	age;

	var yyyy = parseInt(String(yyyymmdd).substring(0,4),10);
	var mmdd = String(yyyymmdd).substring(4,6) + String(yyyymmdd).substring(6,8);

	var d = new Date();
	var tmonth = d.getMonth() + 1; //getMonth는 0(1월)~11(12월)을 반환합니다.
	var tdate = d.getDate();

	//자리수를 맞춰주기 위한 처리. 한 자리일 떄 앞에 0을 붙여줍니다.
	var today = ((tmonth < 10)? '0' + tmonth : tmonth) + ((tdate < 10)? '0' + tdate : tdate);
	age = d.getFullYear() - yyyy + 1;

	//생일이 지났는지 체크하여 계산
	if (today < mmdd) {
		age = age - 2;
	} else {
		age = age - 1;
	}

	return age;
};

//보험나이 계산
var insu_age = function(yyyymmdd) {
    var age = getAge(yyyymmdd);
    var insuAge = age;
    
    var d = new Date();
    var x= Math.abs(parseInt(String(yyyymmdd).substring(4,6)) - (d.getMonth() + 1));

    if(x > 6) {
        insuAge = age + 1;
    }

    return insuAge;
};

console.log(getAge(19730829));