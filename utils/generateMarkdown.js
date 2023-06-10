// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "N/A") {
    return "";
  } else {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-brightgreen.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`;
  }
  
  if (license === "Boost 1.0") {
    return `https://www.boost.org/LICENSE_1_0.txt`;
  }
  
  if (license === "Eclipse 1.0") {
    return `https://opensource.org/licenses/EPL-1.0`;
  }
  
  if (license === "Mozilla 2.0") {
    return `https://opensource.org/licenses/MPL-2.0`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "N/A") {
    return "N/A";
  } else {
    return `## License 
    Licensed under the ${license} license.
    Click the license button for more information.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  + [License](#license)
  + [Description](#description)
  + [Installation](#installation)
  + [Usage](#usage)
  + [Contributing](#contributing)
  + [Tests](#tests)
  + [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ${renderLicenseSection(data.license)}


  ## Questions
  If you have any questions about this project, use the contact methods below.<br>
  **[GitHub](https://github.com/${data.username})** <br>
  **[Email](mailto:${data.email})**

  ## Credits
  ${data.name}
`;
}


module.exports = generateMarkdown;
