function clone(obj){
	if(!obj || 'object' !== typeof obj){
		return obj;
	}
	if(obj instanceof Date){
		return new Date(obj.getTime())
	}
	var o = (obj instanceof Array) ? [] : {};
	for(var i in obj){
		if(obj.hasOwnProperty(i)){
			o[i] = typeof obj[i] === "object" ? clone(obj[i]) : obj[i];   
        }   
    }
    return o;
}

var o = {
	a:[12,3,3,4,5,6,6],
	b:{name:"mix",age:90},
	d:new Date,
	e: function(){console.log(3232)}
}

console.log(clone(o));