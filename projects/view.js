

const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);

const title = document.querySelector(".title-view");
const text = document.querySelector(".text-view");
const top = document.querySelector(".top-view");


const fetch_data = await fetch("/data/projects/" + searchParams.get("id") + ".json")

const fetch_data_parsed = await fetch_data.json();

if (searchParams.get("lg") == "lv") {
    title.innerHTML = `<h1>${fetch_data_parsed[1].title} </h1>`
    text.innerHTML = `<p>${fetch_data_parsed[1].text}</p>`
    top.innerHTML = `<p onclick="window.location.href = '${fetch_data_parsed[1].github}'">${fetch_data_parsed[1].github}</p>`
}


else if (searchParams.get("lg") == "de") {
    title.innerHTML = `<h1>${fetch_data_parsed[2].title} </h1>`
    text.innerHTML = `<p>${fetch_data_parsed[2].text}</p>`
    top.innerHTML = `<p>${fetch_data_parsed[2].github}</p>`
}
else{
    title.innerHTML = `<h1>${fetch_data_parsed[0].title} </h1>`
    text.innerHTML = `<p>${fetch_data_parsed[0].text}</p>`
    top.innerHTML = `<p>${fetch_data_parsed[0].github}</p>`
}




export default searchParams;