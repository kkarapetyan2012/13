class Rectangle  {
	constructor(length,width) {
		this.length = length;
		this.width = width;
	}

	get Area () {
		return this.getArea();
	}

	getArea () {
		return this.length * this.width;
	}

	get Perimeter () {
		return this.getPerimeter();
	}

	getPerimeter () {
		return (this.length + this.width) * 2;
	}

}
const rect = new Rectangle(5,7);
console.log(rect.Area);
console.log(rect.Perimeter);
