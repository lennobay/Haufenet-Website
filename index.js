

window.addEventListener("load", (event) => {
  fetchProject();
});


const lg = searchParams.get("lg")

async function fetchProject() {
  if (lg == "lv") {
    document.querySelector("#hero-left-title").innerHTML = "Dizains nav mans speks!"
    document.querySelector("#hero-left-text").innerHTML = "Varbut Jus kautko atradisiet"

    document.querySelector(".project-title-up").innerHTML = `Projekti`
    const data = await fetch("/data/projects.json")
    const data_parsed = await data.json();


    let latest_lowest_number = data_parsed.length - 4;
    console.log(latest_lowest_number);

    for (let i = latest_lowest_number; i < data_parsed.length; i++) {
      console.log(data_parsed[i].id);
      if (i < 0) {
        continue;
      }
      else {
        const data2 = await fetch("/data/projects/" + data_parsed[i].id + ".json")
        const data_parsed2 = await data2.json();
        console.log(data_parsed2);
        const dom_project_up = document.querySelector("#projects-sub-up");
        dom_project_up.innerHTML += `<div class='project-sub' onclick="window.location='/projects/view.html?id=${data_parsed[i].id}&lg=lv'">
            <h3>${data_parsed2[1].title}</h3>
            <p>${data_parsed2[1].description}</p>
            </div>`;


      }
    }
  }
  else if (lg == "de") {
    document.querySelector("#hero-left-title").innerHTML = "Design ist nicht meine stärke"
    document.querySelector("#hero-left-text").innerHTML = "Vielleich finde sie ja was akzeptables"
    document.querySelector(".project-title-up").innerHTML = `Projekte`
    const data = await fetch("/data/projects.json")
    const data_parsed = await data.json();
    console.log(data_parsed);
    let latest_lowest_number = data_parsed.length - 4;
    console.log(latest_lowest_number);

    for (let i = latest_lowest_number; i < data_parsed.length; i++) {

      if (i < 0) {
        continue;
      }
      else {
        console.log()
        const data2 = await fetch("/data/projects/" + data_parsed[i].id + ".json")
        const data_parsed2 = await data2.json();
        console.log(data_parsed2);
        const dom_project_up = document.querySelector("#projects-sub-up");
        dom_project_up.innerHTML += `<div class='project-sub' onclick="window.location='/projects/view.html?id=${data_parsed[i].id}&lg=de'">
            <h3>${data_parsed2[2].title}</h3>
            <p>${data_parsed2[2].description}</p>
            </div>`;

      }
    }
  }
  else {
    document.querySelector("#hero-left-title").innerHTML = "Design is not my strength!"
    document.querySelector("#hero-left-text").innerHTML = "Maybe you will find something acceptable."
    document.querySelector(".project-title-up").innerHTML = `Projects`
    const data = await fetch("/data/projects.json")
    const data_parsed = await data.json();

    let latest_lowest_number = data_parsed.length - 4;
    console.log(latest_lowest_number);

    for (let i = latest_lowest_number; i < data_parsed.length; i++) {
      if (i < 0) {
        continue;
      }
      else {
        const data2 = await fetch("/data/projects/" + data_parsed[i].id + ".json")
        const data_parsed2 = await data2.json();
        console.log(data_parsed2);
        const dom_project_up = document.querySelector("#projects-sub-up");
        dom_project_up.innerHTML += `<div class='project-sub' onclick="window.location.href = '/projects/view.html?id=${data_parsed[i].id}'">
            <h3>${data_parsed2[0].title}</h3>
            <p>${data_parsed2[0].description}</p>
            </div>`;


      }
    }
  }

}




