async function dataToJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}

async function allData(category) {
    try {
        const data = await dataToJson("webdata.json");
        console.log(data[category]); // Log the category data
        return data[category]; // Return the category data for further processing
    } catch (error) {
        console.error('Error fetching data:', error); // Handle any potential errors
    }
}

function createData(container, name) {
    // Call allData and handle the returned value
    allData(name).then(Data => {
        // Check if gameData is defined before looping
        if (Data) {
            // Clear the container before appending new content
            container.innerHTML = ''; 

            // Loop through the game section
            for (const [key, value] of Object.entries(Data)) {
                console.log(`${key}: ${value}`);

                // Create link element
                let linkElement = document.createElement("a");
                linkElement.href = value;
                linkElement.innerText = key;
                linkElement.target = '_blank';
                linkElement.classList.add('links');

                // Append the link to the container
                container.appendChild(linkElement); // Append the created link to the container
                container.appendChild(document.createElement("br")); // Optional: add line break for better readability
            }
        } else {
            container.innerText = 'No data available'; // Handle case with no game data
        }
    });
}


createData(books, "books");
createData(programming, "programming");
createData(typing, "typing")
createData(english, "english");
createData(tools, "tools");
createData(ai, "ai")
createData(softwars, "softwars");
createData(games, "games");
createData(images, "images");
createData(movies, "movie");
createData(anime, "animes");



