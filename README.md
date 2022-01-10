# e-commerce back end app

  An express.js app utilizing the sequelize npm to connect a database to api routes which can then be intereacted with via get, post, put or delete requests.

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  To use the app, first npm i to install dependencies.
  
  A functional mysql server is required to use this app, and the .env.EXAMPLE must be updated with the local username and password.

  Once MySQL is connected, use the schema.sql to create an empty ecommerce_db, then run the server.js to populate the models. After this the database can be seeded with example data by running the Develop/seeds/index.js in node.

 <font size="2"> Note: Once the models have been populated, it is reccomended to remove or comment out the sequelize.sync in server.js in favor of the commented out "app.listen" code below it. This will stop sequelize from running the models code every time the server is started. </font>

  ## Usage

  This app allows for a database to be updated using only javascript and routes, instead of MySQL code. This allows for the database to be interacted with dynamically using the get, post, put or delete requests.


  ## Contributing

  Open source, feel free to use or edit as you like.

  ## Tests

  Insomnia was used to test routes.

  ## Questions

  - Check out my other repositories at [GitHub Profile](https://github.com/c-phillips7)

  - For any questions, contact me at cp.phillips15@gmail.com.


  ## Demonstration

  Click the link for a demonstration of the app in action:
  
  https://www.youtube.com/watch?v=-FrszfVyoRA

  Alternate link:

  https://drive.google.com/file/d/1aLA4WmHq8o-FbZEFAmqt8fB62OcuUk8X/view?usp=sharing