![WILDFIRE TRACKER (Logo)(1)](https://user-images.githubusercontent.com/50463988/134434075-d7946dfb-d9af-4f27-8c29-9f736c31df21.png)

    
# Wildfire Tracker

Real time global wildfire tracker built in React and Node.JS 

Powered by Google Maps and NASA's open API. We've added some styling options provided by Google to our map, and synchronized our NASA API data with the corresponding lat/long data in order to accurately show the locations of wildfires. Lastly, we use icons provided by iconify to represent the locations of wildfires as reported by NASA's Terra EOSAM-1 Satellite  🛰

![](madefire.gif)

 
## [Live Demo](wildfiretrack.herokuapp.com)
## Tech Stack

**Client:** React, Nasa API, Google Maps API
  
  [Google Maps API](https://developers.google.com/maps)
  
  [NASA Open API](https://api.nasa.gov/)
## Screenshots

![2021-09-22 18 03 11-min](https://user-images.githubusercontent.com/50463988/134434357-ac1f3333-e13b-4a2b-889b-c9acfaa3a3ef.gif)

  
## Installation

clone the app and cd into project folder

```bash
  git clone https://github.com/Parham-S/IHaveMadeFire.git
 
  cd wildfire-tracker
```
install dependencies

```bash
 npm install
```

Now its time to get your developer key from Google to connect to their API. You can find more information in the Google Maps API docs. Be sure to store your key in an environment variable if you plan on publishing the code to GitHub

Navigate to the components folder and find Map.js

```bash
 cd wildfiretracker/src/components/
```

![carbon](https://user-images.githubusercontent.com/50463988/134436300-3d8299f8-0eed-4280-aee0-0bff19397c36.png)

Replace ```process.env.REACT_APP_GOOGLE_API_KEY``` with your Google developer key. 

⚠️ ***Be sure not to pass in your key as a string, otherwise React will improperly render an exposed key into the DOM without any errors or warnings*** ⚠️



## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://parhamsaniei.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/psaniei/)


