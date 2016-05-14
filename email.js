var email   = require('sendemail'); // no api key
email.set_template_directory('./relative/path/to/template/directory');

var person = {
  name : "Jenny",
  email: "your.name+test" + Math.random() + "@gmail.com"
}

email('welcome', person, function(error, result){
  console.log(' - - - - - - - - - - - - - - - - - - - - -> email sent: ');
  console.log(result);
  console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - -')
})
