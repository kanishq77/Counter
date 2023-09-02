document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired");

    let add = document.querySelector("#add");
    let sub = document.querySelector("#sub");
    let reset = document.querySelector("#reset");
    let output = document.querySelector("#output");

    console.log("add:", add);
    console.log("sub:", sub);
    console.log("reset:", reset);
    console.log("output:", output);

    add.addEventListener("click", function() {
        let result = Number(output.innerText) + 1;
        output.innerText = result;
    });

    sub.addEventListener("click", function() {
        let result = Number(output.innerText) - 1;
        output.innerText = result;
    });

    reset.addEventListener("click", function() {
        let result = 0;
        output.innerText = result;
    });
});

