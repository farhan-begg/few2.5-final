fetch("data.json").then(data => data.json())
  .then(data => {
    const gdp = [...data].sort((a, b) => b["GDP per capita"] - a["GDP per capita"])
    const social = [...data].sort((a, b) => b["Social support"] - a["Social support"])
    const life = [...data].sort((a, b) => b["Healthy life expectancy"] - a["Healthy life expectancy"])
    const generosity = [...data].sort((a, b) => b["Generosity"] - a["Generosity"])
    console.log(gdp)
    console.log(social)
    console.log(life)
    // Challange 2
    const countriesP = document.querySelector(".countries")
    countriesP.innerHTML = `Number of Countries: ${data.length}`

    // Challange 3
    const topDiv = document.querySelector(".top")
    const gdpDiv = topDiv.querySelector(".gdp-per-capita")
    const socialDiv = topDiv.querySelector(".social-support")
    const generosityDiv = topDiv.querySelector(".generosity")

    // challange 4
    const visualDiv = document.querySelector(".vis")
    const gdpVisual = visualDiv.querySelector(".gdp-per-capita")
    const socialVisual = visualDiv.querySelector(".social-support")
    const generosityVis = visualDiv.querySelector(".generosity")

    // gdp per capita
    const gdpList = document.createElement("ul")

    gdp.slice(0, 10).forEach(country => {
      const el = document.createElement("li")
      el.innerHTML = `${country["Country or region"]} - ${country["GDP per capita"]}`
      gdpList.appendChild(el)

      createElement(country, gdpVisual.querySelector(".group"))

    })
    gdpDiv.appendChild(gdpList)

    // social support
    const socialList = document.createElement("ul")

    social.slice(0, 10).forEach(country => {
      const el = document.createElement("li")
      el.innerHTML = `${country["Country or region"]} - ${country["Social support"]}`
      socialList.appendChild(el)
      createElement(country, socialVisual.querySelector(".group"))
    })
    socialDiv.appendChild(socialList)

    // generosity
    const generosityList = document.createElement("ul")
    generosity.slice(0, 10).forEach(country => {
      const el = document.createElement("li")
      el.innerHTML = `${country["Country or region"]} - ${country["Generosity"]}`
      generosityList.appendChild(el)
      createElement(country, generosityVis.querySelector(".group"))

    })
    generosityDiv.appendChild(generosityList)
    function createElement(country, div) {
      const el = document.createElement("div")
      el.classList.add("vis-item")
      el.innerHTML = `<p>${country["Country or region"]}</p>`
      div.appendChild(el)
    }
  })

