const book =[
    {
        title:"HARRY POTTER",
        author:"J.K.Rowling",
        year: 1997
    },
    {
        title:"INDIA'S STRUGGLE FOR INDEPENDENCE",
        author:"BIPAN CHANDRA",
        year: 2000
    },
    {
        title:"INDIA'S WAR: WORLD WAR II AND THE MAKING OF MODERN SOUTH ASIA",
        author:"SRINATH RAGHAVAN",
        year: 2016
    },
    {
        title:"WHAT HAPPENED TO NETAJI",
        author:"ANUJ DHAR",
        year: 2016
    },

]
function log (title){
    title.sort();
    console.log(title.join(","));
}
function extracttitle(book, call){
    const titles =book.map((book)=>book.title);
    call(titles);
}

extracttitle(book,log);