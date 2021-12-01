

function toggleTheme() {
    console.log("toggled")

    /* let x = document.getElementsByClassName("themeable")
    x[0].classList.remove("lt-theme")
    x[0].classList.add("dk-theme") */

    /* let x = document.getElementsByTagName("span") */
    /* x[0].style.color = "black" */
    /* console.log(x.length)
    for(let i = 0; i < x.length ; i++){
        x[i].style.color = "green"
    } */

    let x = document.getElementsByClassName("themeable")
    for(let i = 0; i < x.length; i++){
        if(x[i].classList.contains("lt-bg")){
            x[i].classList.remove("lt-bg")
            x[i].classList.add("dk-bg")
        }
        else if (x[i].classList.contains("dk-bg")){
            x[i].classList.remove("dk-bg")
            x[i].classList.add("lt-bg")
        }
        else if (x[i].classList.contains("lt-bg-top")){
            x[i].classList.remove("lt-bg-top")
            x[i].classList.add("dk-bg-top")
        }
        else if (x[i].classList.contains("dk-bg-top")) {
            x[i].classList.remove("dk-bg-top")
            x[i].classList.add("lt-bg-top")
        }
        else if (x[i].classList.contains("lt-heading")){
            x[i].classList.remove("lt-heading")
            x[i].classList.add("dk-heading")
        }
        else if (x[i].classList.contains("dk-heading")){
            x[i].classList.remove("dk-heading")
            x[i].classList.add("lt-heading")
        }
        else if (x[i].classList.contains("lt-tf")) {
            x[i].classList.remove("lt-tf")
            x[i].classList.add("dk-tf")
        }
        else if (x[i].classList.contains("dk-tf")) {
            x[i].classList.remove("dk-tf")
            x[i].classList.add("lt-tf")
        }
        else if (x[i].classList.contains("lt-button")) {
            x[i].classList.remove("lt-button")
            x[i].classList.add("dk-button")
        }
        else if (x[i].classList.contains("dk-button")) {
            x[i].classList.remove("dk-button")
            x[i].classList.add("lt-button")
        }
        else if (x[i].classList.contains("lt-inner")) {
            x[i].classList.remove("lt-inner")
            x[i].classList.add("dk-inner")
        }
        else if (x[i].classList.contains("dk-inner")){
            x[i].classList.remove("dk-inner")
            x[i].classList.add("lt-inner")
        }
        else if (x[i].classList.contains("lt-fc")){
            x[i].classList.remove("lt-fc")
            x[i].classList.add("dk-fc")
        }
        else if (x[i].classList.contains("dk-fc")){
            x[i].classList.remove("dk-fc")
            x[i].classList.add("lt-fc")
        }
        else if (x[i].classList.contains("lt-count")){
            x[i].classList.remove("lt-count")
            x[i].classList.add("dk-count")
        }
        else if (x[i].classList.contains("dk-count")){
            x[i].classList.remove("dk-count")
            x[i].classList.add("lt-count")
        }
        else if (x[i].classList.contains("lt-handle")){
            x[i].classList.remove("lt-handle")
            x[i].classList.add("dk-handle")
        }
        else if (x[i].classList.contains("dk-handle")){
            x[i].classList.remove("dk-handle")
            x[i].classList.add("lt-handle")
        }
        else if (x[i].classList.contains("lt-overview")){
            x[i].classList.remove("lt-overview")
            x[i].classList.add("dk-overview")
        }
        else if (x[i].classList.contains("dk-overview")){
            x[i].classList.remove("dk-overview")
            x[i].classList.add("lt-overview")
        }
        else if (x[i].classList.contains("lt-it")){
            x[i].classList.remove("lt-it")
            x[i].classList.add("dk-it")
        }
        else if (x[i].classList.contains("dk-it")){
            x[i].classList.remove("dk-it")
            x[i].classList.add("lt-it")
        }
        else if (x[i].classList.contains("lt-ic")){
            x[i].classList.remove("lt-ic")
            x[i].classList.add("dk-ic")
        }
        else if (x[i].classList.contains("dk-ic")){
            x[i].classList.remove("dk-ic")
            x[i].classList.add("lt-ic")
        }
        else if (x[i].classList.contains("lt-cc")){
            x[i].classList.remove("lt-cc")
            x[i].classList.add("dk-cc")
        }
        else if (x[i].classList.contains("dk-cc")){
            x[i].classList.remove("dk-cc")
            x[i].classList.add("lt-cc")
        }
    }
}