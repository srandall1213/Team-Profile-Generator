const getTeam = (team) => {

  const html = [];

  const getManager = manager => {
    let managerHTML = `
      <p>${manager.name}</p>
      <p>Manager</p>
      <p>${manager.id}</p>
      <p>${manager.email}</p>
      <p>${manager.officeNumber}</p>
    `;
    html.push(managerHTML);
  }

  const getEngineer = engineer => {
    let engineerHTML = `
      <p>${engineer.name}</p>
      <p>Engineer</p>
      <p>${engineer.id}</p>
      <p>${engineer.email}</p>
      <p>${engineer.userName}</p>
    `;
    html.push(engineerHTML);
  }

  const getIntern = intern => {
    let internHTML = `
      <p>${intern.name}</p>
      <p>Intern</p>
      <p>${intern.id}</p>
      <p>${intern.email}</p>
      <p>${intern.school}</p>
    `;
    html.push(internHTML);
  }


  for (employee of team) {
    if (employee.getRole() === "Manager") {
      getManager(employee);
    }
    if (employee.getRole() === "Engineer") {
      getEngineer(employee);
    }
    if (employee.getRole() === "Intern") {
      getIntern(employee);
    }
  }

  return html.join('');

}


function generateHTML(htmlData) {
  return `<!doctype html>
<html lang="en">
  <head>
    <title>Team Profile Generator</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- CSS -->
    <link rel="stylesheet" href="./dist/style.css"/>
    <!-- GOOGLE FONTS -->

  </head>
  <body>

    <header>
      <h1>My Team</h1>
    </header>

    <main> 
  
    ${getTeam(htmlData)} 
    
    </main>

      
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>`

}

module.exports = generateHTML;