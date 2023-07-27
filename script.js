
async function foo() {
    var res = await fetch("https://data.covid19india.org/v4/min/data.min.json")
    var result = await res.json();
    console.log(result);
    var root = document.getElementById("root")
    root.innerHTML=" "
    for (a in  result) {
                console.log(a,result[a])
                var div = document.createElement("div")
                div.setAttribute("class","col-3 mt-3")
                div.innerHTML=`
                <div class="card" style="width: 250px;">
                <div class="card-body">
                  <h5 class="card-title">${a}</h5>
                  <h6 class="card-subtitle mb-2">Covid-19 Cases</h6>
                  <address>
                  Confirmed : ${result[a].total.confirmed}<br>
                  Decesed : ${result[a].total.deceased}<br>
                  Recovered : ${result[a].total.recovered}<br>
                  Tested : ${result[a].total.tested}<br>
                  Vaccinated 1 : ${result[a].total.vaccinated1}<br>
                  Vaccinated 2 : ${result[a].total.vaccinated2}</address>
                  <a href="https://www.mohfw.gov.in/" class="btn btn-primary" target="blank">More Info</a>                
                </div>
              </div>
              </div>
                `
                root.appendChild(div)
               }
  }
  
  foo();