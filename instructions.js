 //Answer make sure to answer all of the questions between the questions that follow

// The following exercise consists of DOM manipulation, variables, conditional statements, loops, arrays and objects Everything you have covered so far.
// The questions will vary with difficulty and you may be required to combine more than one topic to complete a certain exercise. 
// ***You will not be allowed to use Youtube solutions if you are unable to explain your solutions that follow. After I check your answer and you cannot explain your code, I will mark it as a strike against your name.
// AIM: To complete the exercise fully without any assistance as much as possible.
// REMEMBER:   The feeling for anxiousness and excitement is that of a fine line...Physiologically they are almost identical. 
//             The feeling you're feeling is excitement not nervousness. I know you got this! I believe in you even if you don't believe in yourself!:)


// 1. Use the following id="heading" to change the heading(This is the main heading) of the html to 'Javascript', DO NOT USE QUERY SELECTOR

let heading = document.getElementById('heading');
heading.textContent = 'Javascript'

// 2. Use the class='paragraph' and change the information to 'This is a language I have mastered and I am proud of myself. I complished this because I believed in myself'

let paragraph = document.getElementsByClassName('paragraph')
paragraph[0].textContent = 'This is a language I have mastered and I am proud of myself. I complished this because I believed in myself'

// 3. Use the h3 element and change the heading(Subheading) to 'Things I've accomplished so far'. Hint: use querySelector

let h3 = document.querySelector('h3');
h3.textContent = 'Things I\'ve accomplished so far'

// 4. Change the paragraph below Question3(above) to 'I have discovered that I can accomplish anything I put my mind to' Hint: Use querySelectorAll and index or use getElementByTagName and index

let h3para = document.querySelectorAll('p')
h3para[1].textContent = 'I have discovered that I can accomplish anything I put my mind to'

// So far you have hints, however the hints have lessened.
// 5.1. Attach the first input to a variable

let firstMultiply = document.querySelector('[data-firstMultiply]');

// 5.2. Attach the second input to a variable

let secondMultiply = document.querySelector('[data-secondMultiply]');

// 5.3. Attach the FIRST button to a variable(going to add an eventListener to button)

let calculate1 = document.querySelector('[data-calculate1]');

// 5.4. Attach the FIRST span element to a variable(To display the information to)
//         P.S. for the next step make use of console.log() to keep track of where data is going

let first = document.querySelector('[data-first]');

// 5.5. Create a normal function that allows us to multiply the 2 inputs together and writes the information to the FIRST span element.

function multiply(){
    first.textContent = eval(`${firstMultiply.value} * ${secondMultiply.value}`);
    console.log( first.textContent );
}

// 5.6. Add an event listener to the button that runs the function that tyou created

calculate1.addEventListener('click', multiply);

// 5.7 Hmm......Did you forget to make your input tags return a value instead of the element? (0.0)
//     Or did you forget we are writing to an element not an input?....which means your answer will be displayed with innerText

// NOPE

// Okay, that was pretty awesome...not too bad when you have the steps?

// 6. Now you will have to return the calculation of the 2 numbers from the modulus input for eg.......4....%....2....= 0
// 6.1 Set the first modulus input to a variable 

let firstModulus = document.querySelector('[data-firstModulus]');

// 6.2 Set the send modulud input to a variable
// second?

let secondModulus = document.querySelector('[data-secondModulus]');

// 6.3 Set the SECOND span to a varable(will display answer)

let second = document.querySelector('[data-second]');

// 6.4 Set the SECOND button to a variable(to run event listener)

let calculate2 = document.getElementById('calculate2');

// 6.5 Create a normal function to calculate the modulus of the inputs

function modulo(){
    second.textContent = eval(`${firstModulus.value} % ${secondModulus.value}`)
    console.log(second.textContent)
}

// 6.6 Add an event listener to the button which will run the function you created

calculate2.addEventListener('click', modulo)

// Hmmm......That wasn't too bad....I knew you could do it! I believe in you.
// You should now have an idea of the steps neccesary to complete actions using DOM manipulation.

// Okay now that you are aware of the steps needed, try no 7
// 7.1 Change the text of 'Bubble Tea' to 'White Tea'

let tea1 = document.getElementById('bubbleTea');
tea1.textContent = 'White Tea'

// 7.2 Change the text of 'Green Tea' to 'Black tea'

let tea2 = document.getElementsByClassName('greenTea')[0]
tea2.textContent = 'Black tea'

// 7.3 Change the text of 'Iced Tea' to 'Herbal Tea'

let tea3 = document.querySelector('[data-icedTea]');
tea3.textContent = 'Herbal Tea';

// You're eating Javascript, and again....I'm proud of you!

// 8. Declare a variable called lastName and add a value to it(value must be a string)

let lastName = 'Osman';

// 9. Declare a variable called parentsAge and give it a value of 20(value must be a number)

let parentsAge = 20

// 10. Create an array with called coolCars and give it the following value: ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']

let coolCars = ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']

console.log(coolCars)

//             Now to manipulate the arrays. ;)
// 11. Write the code to change the 'McLaren' value to 'Lamborghini' in the array Hint: use indexing to access different values in arrays

coolCars[3] = 'Lamborghini'

console.log(coolCars)

// 12. Use a for loop to loop through the array, and console.log every value inside of the array.

for( let i = 0; i < coolCars.length; i++ ){
    console.log(coolCars[i])
}

// 13. Reverse the array and console.log the reversed array.

coolCars.reverse()

console.log(coolCars)

// 14. Write the code to remove the last item in the array(coolCars not the reversed array) and store it in a variable....which means your array of coolCars must look like : ['BMW','Bugati','Ferrari','Lamborghini]

coolCars.reverse()
let mercedes = coolCars.pop()

console.log(coolCars)

// 15. Now write the code to use the variable you made in no.14 and add it to the FRONT of the array. Your coolCars array should now look like:
// [ 'Mercedes', 'BMW', 'Bugati', 'Ferrari', 'Lamborghini']

coolCars.unshift(mercedes)

console.log(coolCars)

//             Time to SWITCH it up a bit
// 16. Write a simple conditional statement that will check if someone is younger than 18 or older than 18. The variable will be called age = 18 then a=17 to check

let age = 18;
let a = 17

if( a < age ){
    console.log( `younger than ${age}` )
} else if( a > age ){
    console.log( `older than ${age}` )
} else {
    console.log(`is ${age}`)
}

// 17. Make use of a switch statement and create a possible soultion for no.16

switch(true){
    case ( a < age ):
        console.log( `younger than ${age}` );
        break;
    case ( a > age ):
        console.log( `older than ${age}` )
        break;
    default:
        console.log(`is ${age}`)
        break;
}

// 18.     USE A SWITCH statement!!!!!
// A students Maths mark was 77%,their Physics marks was 70% and their English was 50%. You are required to calculate their average mark. Then we can check the average mark and return a message to the console, if averageMark is :
//         100%-80%(message = "You did well your average was ..."), 
//         79%-70%(message="You average was good, it was ..."),
//         69%-50%(message='Your average was okay, it was ..'), 
//         49%-0% (message ='You must work harder next time')


function getAvgMark(mathsMark, physics, english){
    return parseInt( (mathsMark + physics + english)/3 )
}

let averageMark = getAvgMark(77, 70, 50)

switch(true){
    case (averageMark >= 80):
        console.log( `You did well your average was ${averageMark}` )
        break;
    case (averageMark >= 70):
        console.log( `You average was good, it was ${averageMark}` )
        break;
    case (averageMark >= 50):
        console.log( `Your average was okay, it was ${averageMark}` )
        break;
    default:
        console.log( 'You must work harder next time' )
        break;
}

// 19. USE the variable that you created in question 9 and use a while loop to print each iteration to the console and at that same instance, increase the variable used by 1


let counter = 0;
while( counter < parentsAge ){
    counter++
    console.log(counter)
}

// 20. USE while or a do while loop to print out the array of Question15(coolCars).

// [ 'Mercedes', 'BMW', 'Bugati', 'Ferrari', 'Lamborghini']

counter = 0;

do {
    console.log(coolCars[counter])
    counter++
} while( counter < coolCars.length )

// 21. Create an object called chair and give it a 
//         property of legs and a value of 4,
//         a secondProperty of material with a value of plastic

let chair = {
    legs: 4,
    material: 'plastic'
}

// 22. Write the code that adds a property of 
//         'armRestBars' with a value of 'none' 
//         to the chair object.

chair['armRestBars'] = 'none'

console.log(chair)

// 23.1.   What code will I write to view the value of the armRestBars.

console.log(chair.armRestBars)

// 23.2    What code can I use to delete the property of legs with the value of 4.

delete chair.legs

console.log(chair)

// 24. Create an factory function that can be used to return objects of electrical devices.
//         the factory function should include the properties of 
//         name,
//         type,
//         year,
//         description

function eDevices(name, type, year, description){
    return {
        name, type, year, description
    }
}

// 24. Create 4 objects of your choice using a factory function and console.log() each of them

let fridge = eDevices('double door fridge', 'Samsung', 2022, 'has a water despenser')
let cellPhone = eDevices('Huawei', 'y7', 2019, 'has 3gb ram and a quad core snap-dragon')
let laptop = eDevices('Laptop', 'lenovo', 2022, 'AMD64 Processor with 8gb ram')
let router = eDevices('Huawei Router', 'fibre', 2020, 'has 2 packages, the 20mbs and the 40mbs')

// 25. Create a constructor function to make an object of different car, types the properties should include,
//         this.brand,
//         this.model,
//         this.year,
//         this.transmission,
//         this.drivetrains

function carTypes(brand, model, year, transmission, drivetrains){
    this.brand = brand
    this.model = model
    this.year = year
    this.transmission = transmission
    this.drivetrains = drivetrains

    return this
}

// 26. Create 4 objects of your own and print to the console all of the created objects.

let car1 = carTypes('honda', 'type r', 2016, '6-speed', '4-wheel-drive')
let car2 = carTypes('honda', 'type r', 2016, '6-speed', '4-wheel-drive')
let car3 = carTypes('honda', 'type r', 2016, '6-speed', '4-wheel-drive')
let car4 = carTypes('honda', 'type r', 2016, '6-speed', '4-wheel-drive')

console.log(car1)
console.log(car2)
console.log(car3)
console.log(car4)

// 27. After, push the 4 objects to an array called 'informationAboutCars'.
// 28. Create a function that can be used 'globally', the function should return a sentence containing all the properties used inside the object, eg 'The car brand Ford has a model of a Figo that was produced in 2019. It is a manual and is a front wheel drive'
// 29. Make sure to write the above sentences for each car inside the corresponding h4 elements
// 30. Use the array in question10 that you created and create a conditional statement that check if 'BMW' appears in the array. The console should return 'This item does appear in the array' or 'The item does not appear in the array'
// 31. Declare an array and give it a value of [5, 18, 14, 16, 2, 1].
//     Create a program that returns the middle value of the current array, if array length is even return 2 numbers, if the array lengthis odd return 1 number
// 32. Go back to Question 16 and use the conditional statement you created. The age has to be requested from the user and the message ust be written to the html page in the corresponding element
