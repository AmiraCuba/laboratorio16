document.querySelector("ul").addEventListener("click", (e) => {
    if (e.target.tagName === "LI")
        e.target.remove();
});
