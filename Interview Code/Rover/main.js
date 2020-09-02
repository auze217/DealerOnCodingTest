import Rover from "./rover.js";
import fs from "fs";
function roverTest(iFile) {
  fs.readFile(iFile, (err, res) => {
    if (!err) {
      //remove \r escape characters and splitting string by \n characters
      const instructions = res.toString().replace(/\r|\r/g, "").split("\n");
      var answers = [];
      var rov = new Rover(0, 0);
      var error = false;
      let t = 0;
      //runs until file is completely read or there is an error
      while (t < instructions.length && !error) {
        let temp = instructions[t].split(" ");
        if (temp.length === 2) {
          // border maxes
          error = !rov.setMaxes(temp[0], temp[1]);
        } else if (temp.length === 3) {
          //start
          error = !rov.setStart(parseInt(temp[0]), parseInt(temp[1]), temp[2]);
        } else {
          //directions
          const ans = rov.calculate(instructions[t]);
          if (!ans) {
            error = !ans;
          } else answers.push(ans);
        }
        t++;
      }
      if (error) {
        answers.push(`Error: There is an error on line ${t} in the text file`);
      }
      console.log(`${iFile} Output:`);
      answers.map((ans, i) => {
        console.log(`${i + 1}: ${ans}`);
      });
      console.log(" ");
    }
  });
}
//tests and original output
roverTest("./input.txt"); //original
roverTest("./errorMax.txt"); // invalid grid set up
roverTest("./errorStart.txt"); // invalid starts
roverTest("./errorStart2.txt");
roverTest("./ownInput.txt"); // 1 2 W
roverTest("./errorDir.txt");
roverTest(""); //cant read the 'file' given
