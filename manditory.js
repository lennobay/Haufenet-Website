const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
if (searchParams.get("lg") == "lv") {
    const header = document.querySelector("header");
    header.innerHTML = `<h2 onclick = "window.location.href = '/'" class="header-sub">Haufenet </h2>
        <h4 >Projekti</h 4>`;
}
else if (searchParams.get("lg") == "de") {
    const header = document.querySelector("header");
    header.innerHTML = `<h2 class="header-sub">Haufenet </h2>
        <h4 onclick="window.location.href = '/projects'">Projekte</h 4>`;
}
else {
    const header = document.querySelector("header");
    header.innerHTML = `<h2  onclick = "window.location.href = '/'" class="header-sub">Haufenet </h2>
        <h4  onclick = "window.location.href = '/#projects'">Projects</h 4>`;
}