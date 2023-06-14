// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("license:", license);
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
    const link = `https://opensource.org/licenses/MIT`;
    console.log("License Link:", link);
    return link
  }
  
  if (license === "Boost 1.0") {
    const link = `https://www.boost.org/LICENSE_1_0.txt`;
    console.log("License Link:", link);
    return link
  }
  
  if (license === "Eclipse 1.0") {
    const link = `https://opensource.org/licenses/EPL-1.0`;
    console.log("License Link:", link);
    return link
  }
  
  if (license === "Mozilla 2.0") {
    const link = `https://opensource.org/licenses/MPL-2.0`;
    console.log("License Link:", link);
    return link
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
    return `## License\n\nLicensed under the ${license} license.\nClick the license button above for more information.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

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

  ## Questions
  If you have any questions about this project, use the contact methods below.<br>
  **[GitHub](https://github.com/${data.username})** <br>
  **[Email](mailto:${data.email})**

  ## Credits
  ${data.name}
`;
}


module.exports = generateMarkdown;
