// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let retLicense = {
    MIT : "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    ISC : "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    GNP : "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    Apache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
}

  return retLicense[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let retLicense = {
    MIT : "[MIT]Link Here",
    ISC : "[ISC]Link Here",
    Unlicense : '[Unlicense]<https://unlicense.org>',
    Apache: "[Apache]http://www.apache.org/licenses/LICENSE-2.0" 
}

  return retLicense[license]
    
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  let retLicense = {
    MIT : "MIT",
    ISC : "ISC",
    Unlicense: "Unlicense",
    Apache:  "Apache 2.0"
}

  return retLicense[license] ? retLicense[licensee] : " ";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, install, license, github, email, usage, contribute, test}) {
  return `
  
  
  # ${title}
  ${renderLicenseBadge(license)}
 
  ​
  ## Description
  ​
  -Write a good description of the project, including what kind of problem it solves, and your motivation for building.
  ​
  ## Table of Contents 
  ​
  * [Installation](#installation)
  ​
  * [Usage](#usage)
  ​
  * [License](#license)
  ​
  * [Contributing](#contributing)
  ​
  * [Tests](#tests)
  ​
  * [Questions](#questions)
  ​
  ## Installation
  ​
  To install necessary dependencies, run the following command:
  ​
  \`\`\`
  ${install}
  \`\`\`
  ​
  ## Usage
  ​
  ${usage}
  ​
  ## License
  ​
  This project is licensed under the MIT license.
    
  ## Contributing
  ​
  ${contribute}
  ​
  ## Tests
  ​
  To run tests, run the following command:
  ​
  \`\`\`
  ${test}
  \`\`\`
  ​
  ## Questions
  ​
  If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [GitHub](https://github.com/${github}/).
`;
}

module.exports = generateMarkdown;
