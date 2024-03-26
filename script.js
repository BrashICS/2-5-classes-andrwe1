/*
 * ICS4U - Mr. Brash 🐿️
 * 2.5 - Classes
 *
 * Classes are BLUEPRINTS of an abstract data type.
 * To create a copy of one (called an instance) we use "new"
 * See the README.md file.
 * 
 * Author: Andrew Leech
 */

'use strict';

class Circle {
    name = "Circle"; 
    radius = 1;
    
    area() {
        return Math.PI * this.radius**2;
    }
    circumference() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle {
    name = 'Rectangle';
    length = 3;
    width = 3; 

    perimeter() {
        return 2 * this.length + 2 * this.width; 
    }
    area() {
        return this.length * this.width; 
    }
    is_square() {
        return this.length == this.width;
    }
}

class Vehicle {
    type = '';
    num_wheels = '';
    num_doors = '';
    num_seats = '';
    fuel = "";
    can_fly = false;
}




let rect1 = new Rectangle();
let rect2 = new Rectangle();
rect1.name = "Best Rectangle Ever!";
rect1.length = 10;
rect1.width = 20;
rect2.name = "Square"
rect2.length = 5;
rect2.width = rect2.length;
console.log("The area of", rect1.name,"is:", rect1.length * rect1.width);
console.log("The area of", rect2.name,"is:", rect1.length * rect1.width);
