const files = [
    {
        type: "title",
        title: "Survival Islands Files",
        tags: ["Survival Game", "Windows", "In Development"]
    },
    {
        type: "file",
        name: "Version 1",
        path: "https://www.dropbox.com/s/40y0lum68epjddy/Version_1_Windows.zip?dl=0"
    },
    {
        type: "file",
        name: "Version 2",
        path: "https://www.dropbox.com/s/er8vywht17de9cf/Version_2_Windows.zip?dl=0"
    },
    {
        type: "file",
        name: "Version 3",
        path: "https://www.dropbox.com/s/9exc28eqbdm7wmp/Version_3_Last_Windows.zip?dl=0"
    },
    {
        type: "file",
        name: "Version 4",
        path: "https://www.dropbox.com/s/vielzd4ruankar7/Version_4_Windows.zip?dl=0"
    },
]

const dropElement = document.querySelector(".files")

function appendTitle(title, tags) {
    const div = document.createElement("div")
    div.setAttribute("class", "horizontal_container")
    const element = document.createElement("h1")
    element.textContent = title
    dropElement.appendChild(div)
    div.appendChild(element)

    if (tags !== undefined) {
        tags.forEach(tag => {
            const devision = document.createElement("p")
            devision.setAttribute("class", "devision")
            devision.textContent = ","
            div.appendChild(devision)
            const tagElement = document.createElement("p")
            tagElement.setAttribute("class", "tag")
            tagElement.textContent = tag
            div.appendChild(tagElement)
        })
    }
}

function appendText(text) {
    const element = document.createElement("p")
    element.textContent = text
    dropElement.appendChild(element)
}

function appendLink(text, path, type) {
    const div = document.createElement("div")
    div.setAttribute("class", "horizontal_container")
    
    if (type !== undefined && type === "file") {
        const icon = document.createElement("img")
        icon.setAttribute("class", "file_icon")
        icon.setAttribute("src", "/files/public/images/folder_icon.png")
        div.appendChild(icon)
    }

    const element = document.createElement("a")
    element.textContent = text
    element.setAttribute("href", path)
    element.setAttribute("target", "_blank")
    dropElement.appendChild(div)
    div.appendChild(element)
}

files.forEach(file => {
    if (file.type === "title") {
        appendTitle(file.title, file.tags)
    } else if (file.type === "file") {
        appendLink(file.name, file.path, "file")
    }
})