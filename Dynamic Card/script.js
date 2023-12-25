// var posts = 
//         [
//         {
//             title : "Tittle 1",
//             body: "Post Description 1"
//         },
//         {
//             title : "Tittle 2",
//             body: "Post Description 2"
//         },
//         {
//             title : "Tittle 3",
//             body: "Post Description 3"
//         },
//         {
//             title : "Tittle 4",
//             body: "Post Description 4"
//         },
//         {
//             title : "Tittle 5",
//             body: "Post Description 5"
//         },
//         {
//             title : "Tittle 6",
//             body: "Post Description 6"
//         },
//         {
//             title : "Tittle 7",
//             body: "Post Description 7"
//         },
//         {
//             title : "Tittle 8",
//             body: "Post Description 8"
//         }
//     ]

const fatchData = async (url)=>{
    try{
    const res = await axios(url);
        return res.data;
    }catch(error){
        throw Error("Data isn't fatched")
    }
}

const postsElement = document.querySelector(".posts");

const loadData = async()=>{
    var posts = await fatchData("https://jsonplaceholder.typicode.com/photos");
    posts.map((post)=>{
        var postElement = document.createElement("div");
        postElement.classList.add("post")
        postElement.innerHTML = `
        <h4>${post.title}</h4>
        <img src="${post.thumbnailUrl}" alt="">`;
        postsElement.appendChild(postElement);
    })
}
loadData();