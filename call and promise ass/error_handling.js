const url = "https://jsonplaceholder.typicode.com/posts/123456789";
fetch(url).then((response)=> {
    if (!response.ok){
        throw new Error("Network response was not ok");
    }
    return response.json();
})


