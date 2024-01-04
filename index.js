import iq from "inquirer";
import qr from "qr-image";
import fs from "fs";

iq.prompt([
  {
    message: "Enter your URL",
    name: "URL",
  },
])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("links.txt",url,(err)=>{
        if(err) throw err;
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
