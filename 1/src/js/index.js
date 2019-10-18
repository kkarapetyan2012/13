// const Rectangle = (length, width) => {
// 	this.length = length;
// 	this.width = width;
// }

// Rectangle.getLength = () => {
// 	return this.length;
// }

// Rectangle.setLength = (length) => {
// 	return this.length = length;
// }

// Rectangle.getWidth = () => {
// 	return this.width;
// }

// Rectangle.setWidth = (width) => {
// 	return this.width = width;
// }

// Rectangle.getArea = () => {
// 	return `${this.length} * ${this.width}`;
// }

// Rectangle.getPerimeter = () => {
// 	return `(${this.length} + ${this.width}) * 2`;
// }
// getArea();
// getPerimeter();
// console.log(Rectangle(5,7));

const Rectangle = (length, width) => {
	this.length = length;
	this.width = width;


	getLength = () => {
		return this.length;
	}

	setLength = (length) => {
		return this.length = length;
	}

	getWidth = () => {
		return this.width;
	}

	setWidth = (width) => {
		return this.width = width;
	}

	getArea = () => {
		return `(${this.length} * ${this.width})`;
	}

	getPerimeter = () => {
		return `((${this.length} + ${this.width}) * 2)`;
	}
	getArea();
	getPerimeter();
}

console.log(Rectangle(5,7));
