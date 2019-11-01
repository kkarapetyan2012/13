// function Rectangle (width,height) {
// 	this.width = width;
// 	this.height = height;

// 	Rectangle.prototype.calcArea = () => {
// 		return this.width * this.height;
// 	}

// 	Rectangle.prototype.calcParam = () => {
// 		return (this.width + this.height) * 2
// 	}
// }

// const  rect = new Rectangle(4,5);
// console.log('Area is: ' + rect.calcArea());
// console.log('Params is: ' + rect.calcParam());



// function Rectangle(length, width) {
//     this.length = length;
//     this.width = width;


// 	Rectangle.prototype.getLength = () => {
// 		return this.length;
// 	}

// 	Rectangle.prototype.setLength = (length) => {
// 		return this.length = length;
// 	}

// 	Rectangle.prototype.getWidth = () => {
// 		return this.width;
// 	}

// 	Rectangle.prototype.setWidth = (width) => {
// 		return this.width = width;
// 	}

// 	Rectangle.prototype.getArea = () => {
// 		return this.length * this.width;
// 	}

// 	Rectangle.prototype.getPerimeter = () => {
// 		return 2 * (this.length + this.width);
// 	}
// }

// const  rect = new Rectangle(4,5);
// console.log('Area is: ' + rect.getArea());
// console.log('Params is: ' + rect.getPerimeter());

function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getLength = function () {
	return this.length;
}

Rectangle.prototype.setLength = function (length) {
	return this.length = length;
}

Rectangle.prototype.getWidth = function () {
	return this.width;
}

Rectangle.prototype.setWidth = function (width) {
	return this.width = width;
}

Rectangle.prototype.getArea = function () {
	return this.length * this.width;
}

Rectangle.prototype.getPerimeter = function () {
	return 2 * (this.length + this.width);
}


const  rec = new Rectangle(4,5);
console.log('Area is: ' + rec.getArea());
console.log('Params is: ' + rec.getPerimeter());