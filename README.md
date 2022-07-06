# Pixels For Change 

Pixels for change is a fundraising platform where companies buy advertisement space “Pixels” with all proceeds going to charity


## Acknowledgements

 - [Stripe Documentation](https://stripe.com/docs)
 


## Tech Stack

**Client:** HTML5, CSS3, SASS, Javascript, React, React Router

**Server:** Node, Express, Stripe




## Run Locally

Clone the project

```bash
  git clone https://github.com/prudziejewski/pixels-for-change
  git clone https://github.com/prudziejewski/pixels-for-change-API
```

Go to the project directory

```bash
  cd pixels-for-change
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_KEY`

To generate this key you will have to create an account on stripe, then go into the developers tab and then click API key. There will be secret key, copy and paste that key into the .env then set REACT_APP_API_KEY = to the secret key. You will now have access to the checkout function of the project   



## Roadmap

- Refactor website logic to have cleaner functionality, and to allow multiple pixel purchases  

- Create larger pixel board with the goal being 1 million pixels 

- Add database to store information instead of JSON

- Add gamification to the project to increase daily traffic 

- Add functionality to delete companies pixels with a donation




