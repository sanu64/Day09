const getCountries = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
  
    xhr.responseType = "json";
  
    xhr.onload = () => {
     // ans-1
       const countries = xhr.response;
       let Asia = countries.filter(country => country.region == "Asia").map(country => country.name);
       console.log("Asian continent regions:")
       console.log(Asia)
        // ans-2
       let population = countries.filter(country => country.population < 200000).map(country => country.name);
       console.log("countires with less than 2lakh population:")
       console.log(population);
       // ans-3
       countries.forEach(country => {
         console.log(country.name)
         console.log(country.capital)
         console.log(country.flag)
       });
       // ans-4
       const totalPopulation = countries.reduce((sum , country) => sum + country.population , 0);
       console.log(`The total population of world is_${totalPopulation}: it's time that we move on to MARS :)`)
      // ans-5
      let currency = countries.filter(country => country.currencies[0].symbol == "$").map(country => country.name);
      console.log(currency)
  }
    xhr.send()
  }
  getCountries();
 