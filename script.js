const container = document.querySelector(".container");

let limits = 10;
let pageCount = 1;
let postCount = 1;

//using async await for fetching api from net = earlier we had callback func then we had promises = then we had async await
const getpost= async () =>{
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await result.json();
    console.log(posts);

    const limitedPosts = posts.slice(0, limits);
    // console.log(posts[0].body);
    //now we are dynamically getting the id title body part

    limitedPosts.map((currelement , index)=>{
        const htmldata = ` <div class="posts">
        <p class="post-id">${currelement.id}</p>
        <h2 class="title">${currelement.title}</h2>
        <p class="post-info">${currelement.body}</p>
    </div>`;

    //now i want to add this part inside container..towe ll use insertbefore insertafter not inner html
        container.insertAdjacentHTML('beforeend', htmldata)
    })

}
getpost();
const showdata = ()=>{
    setTimeout(()=>{
        pageCount++;
        getpost();
    },300)
}
window.addEventListener('scroll', ()=>{
    const {scrollHeight , scrollTop , clientHeight} = document.documentElement;
    if(scrollTop + clientHeight >= scrollHeight){
        console.log("hi m touched")
        showdata();
    }
})
