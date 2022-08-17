//Function to organize data to input in HTML
const getTeam = (team) => {

  const html = [];

  //Manager Card
  const getManager = manager => {
    let managerHTML = `<div class="card" style="width: 18rem;">
            <div class="card-header">
              ${manager.name}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item role">💼 Manager</li>
              <li class="list-group-item empID">Employee ID: ${manager.id}</li>
              <li class="list-group-item email">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
              <li class="list-group-item lastLine">Office Number: ${manager.office}</li>
            </ul>
          </div>

    `;
    html.push(managerHTML);
  }

  //Engineer Card
  const getEngineer = engineer => {
    let engineerHTML = `      <div class="card" style="width: 18rem;">
            <div class="card-header">
              ${engineer.name}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item role">👓 Engineer</li>
              <li class="list-group-item empID">Employee ID: ${engineer.id}</li>
              <li class="list-group-item email">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
              <li class="list-group-item lastLine">GitHub Username: <a target="_blank" class="lastLine" href="https://github.com/${engineer.userName}">${engineer.userName}</a></li>
            </ul>
          </div>

    `;
    html.push(engineerHTML);
  }

  //Intern Card
  const getIntern = intern => {
    let internHTML = `      <div class="card" style="width: 18rem;">
            <div class="card-header">
              ${intern.name}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item role">🎓 Intern</li>
              <li class="list-group-item empID">Employee ID: ${intern.id}</li>
              <li class="list-group-item email">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
              <li class="list-group-item lastLine">School: ${intern.school}</li>
            </ul>
          </div>

    `;
    html.push(internHTML);
  }

  //For...of loop to call the appropriate function
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

//The main code for index.html
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
    <link rel="stylesheet" href="style.css"/>
    <!-- GOOGLE FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500&display=swap" rel="stylesheet">      

  </head>
  <body>

    <div class="jumbotron jumbotron-fluid custom-jumbotron"><h1 class="display-4 text-center">My Team</h1></div>
  
    <main> 

      <div class="container">
        <div class="row justify-content-around">
            
          ${getTeam(htmlData)} 

        </div>
      </div>
    
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