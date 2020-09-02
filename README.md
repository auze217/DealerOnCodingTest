Submission by Austin Zensen
This has solutions for both the Mars Rover problem and then I did the sales tax problem as well.

#Mars Rover
    For this one I wanted to make 2 files, one to read the input and then the other to handle the instructions
    from said input. For this one I didn't make a lot of assumptions, I put in error checking for invalid boundaries, 
    invalid starting points, and invalid instructions. One assumption I did make was for proper spacing in the txt files,
    so no end spaces at any line. For the handler I stored x,y,z coordinates as well as the boundaries for the grid. To 
    calculate the movements I first used a regex to make sure that the instructions only consisted of L R and M
    then read through each character and did the corresponding movement. I made my code in javascript and am 
    running it through Node. The only command I was using to execute was "node main.js".

#Sales Tax
    Similar to the Mars Rover I made 2 files, one to read and one to execute, but I also created a wrapper class for the
    items that are being inputted. One big assumption I made was that the tests would only include Book, Chocolate, and Pills 
    for the items exempt from the sales tax, because there seamed to be too many possibilities that there was no way to id each
    item by those categories based on the input. Since I spent more time on the Mars Rover this project is at the mercy of the
    txt files, if they are messed up then the code wont run properly, and I didn't put as much checks and tests for this one. Again
    I made this in javascript and ran it with "node main.js". I'm not sure if the last two output were correct or if my math was wrong
    through both the code and calculating with a calculator. I assumed it was (price * amount) + (price * amount * tax) but it was
    marginally off for both 2 and 3. Output 3 the cost of the chocolate was raised by .60 which I'm assuming is what's causing the error.