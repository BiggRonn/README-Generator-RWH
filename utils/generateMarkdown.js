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
    MIT : "Link to the MIT license........",
    ISC : "Link to ISC license........",
    GNP : "Link to the GNP license........",
    Apache: "Link to the APACHE license........" 
}

  return retLicense[license]
    
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let retLicense = {
    MIT : "This section will have information about the MIT license........",
    ISC : "This section will have information about the ISC license........",
    GNP : "This section will have information about the GNP license........",
    Apache: "This section will have information about the APACHE license........"
}

  return retLicense[license]
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, install, license, github, email}) {
  return `
  ${renderLicenseBadge(license)}

  # ${title}

  ## Description
   Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
  - What was your motivation?
  - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
  - What problem does it solve?
  - What did you learn?

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  ## Installation
  What is the command to install your project?
  \`\`\`${install}\`\`\`
  ## Usage
  Provide instructions and examples for use. Include screenshots as needed.
 
 
  ## License
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  ${renderLicenseSection(license)}
  ${renderLicenseLink(license)}
  ---

  ## How to Contribute
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  ## Tests
  
  ##Questions
  ${github}
  ${email}


`;
}

module.exports = generateMarkdown;
