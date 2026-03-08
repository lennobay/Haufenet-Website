window.addEventListener("load", (event) => {
  fetchProject();
});

async function fetchProject(){
   const data = await fetch("/data/projects.json")
    const data_parsed = await data.json();

    let latest_lowest_number = data_parsed.length - 4;
    console.log(latest_lowest_number);

    for(let i = latest_lowest_number; i < data_parsed.length; i++){
        if(i < 0){
            continue;
        }
        else{
            console.log()
          const dom_project_up =   document.querySelector("#projects-sub-up");
            dom_project_up.innerHTML += `<div class='project-sub' onclick="window.location='${data_parsed[i].path}'">
            <h3>${data_parsed[i].name}</h3>
            <p>${data_parsed[i].description}</p>
            </div>`;
        
        }
    }
    

}