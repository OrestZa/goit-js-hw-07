const elemList = document.querySelectorAll(".item");
console.dir("Number of categories " + elemList.length);

elemList.forEach((element) => {
    console.dir("Catgory: " + element.querySelector("h2").textContent)
    console.dir("Elements: " + element.querySelectorAll("ul li").length)});