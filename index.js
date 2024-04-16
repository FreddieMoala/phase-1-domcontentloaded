document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    doSomething();
});

function doSomething() {
    document.getElementById('text').textContent = "This is really cool!";
}