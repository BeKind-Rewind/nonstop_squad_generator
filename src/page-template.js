const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

// create the projects section
const generateEmployees = employeeArr => {
    return `
      <section class="my-3" id="rolladex">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Employee Squad Rolladex</h2>
        <div class="flex-row justify-space-between">
        ${employeeArr
            .filter(({ Manager }) => Manager)
            .map(({ name, id, email, officeNumber }) => {
                return `
                    <div class="col-12 mb-2 bg-dark text-light p-3">
                        <h3 class="rolladex-item-title text-light">
                            ${name}
                        </h3>
                        <h4 class="rolladex-role">
                            Manager
                        </h4>

                        <br>

                        <h5 class="rolladex-id">
                            ID: ${id}
                        </h5>

                        <br>

                        <h4 class="rolladex-email">
                            Email: ${email}
                            <a href="mailto:${email}"><img src="ICON2.png"></a>
                        </h4>

                        <br>

                        <h4 class="rolladex-officeNumber">
                            Office Number: ${officeNumber}
                        </h4>
              
                    </div>
                `;
            })
            .join('')
        }
  
        ${employeeArr
            .filter(({ role }) => Intern)
            .map(({ name, id, email, school }) => {
                return `
                    <div class="col-12 mb-2 bg-dark text-light p-3">
                        <h3 class="rolladex-item-title text-light">
                            ${name}
                        </h3>
                        <h4 class="rolladex-role" id="role">
                            Intern
                        </h4>

                        <br>

                        <h5 class="rolladex-id" id="id">
                            ID: ${id}
                        </h5>

                        <br>

                        <h4 class="rolladex-email" id="email">
                            Email: ${email}
                            <a href="mailto:${email}"><img src="ICON2.png"></a>
                        </h4>

                        <br>

                        <h4 class="rolladex-school" id="school">
                            School: ${school}
                        </h4>
              
                    </div>
                `;
            })
            .join('')
        }

        ${employeeArr
            .filter(({ role }) => Engineer)
            .map(({ name, id, email, gitHub }) => {
                return `
                    <div class="col-12 mb-2 bg-dark text-light p-3">
                        <h3 class="rolladex-item-title text-light">
                            ${name}
                        </h3>
                        <h4 class="rolladex-role">
                            Engineer
                        </h4>

                        <br>

                        <h5 class="rolladex-id">
                            ID: ${id}
                        </h5>

                        <br>

                        <h4 class="rolladex-email">
                            Email: ${email}
                            <a href="mailto:${email}"><img src="ICON2.png"></a>
                        </h4>

                        <br>

                        <h4 class="rolladex-gitHub">
                            GitHub: <a href="https://github.com/${gitHub}">${gitHub}</a>
                        </h4>
              
                    </div>
                `;
            })
            .join('')
        }
        </div>
      </section>
    `;
  };
  
  
  
  
  module.exports = templateData => {
    console.log(templateData);
    // destructure projects and about data from templateData based on their property key names
    // this will create three variables based on data in templateData
    const { employees, name, id, } = templateData;
    console.log(employees);
    // console.log(about);
    // console.log(header);
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Employee Rolladex</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">Employee Team Rolladex</h1>
          <nav class="flex-row">
   
          </nav>
        </div>
      </header>
      <main class="container my-5">
        ${generateEmployees(employees)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">Est. 2022</h3>
      </footer>
    </body>
    </html>
    `;
  };