
let posts = [
    {
        title: "Post I",
        desc: "This seems like a description I",
    },
    {
        title: "Post II",
        desc: "This seems like a description II",
    },
    {
        title: "Post III",
        desc: "This seems like a description III",
    },
    {
        title: "Post IV",
        desc: "This seems like a description IV",
    },
];

//------------------------------------------------------------
// MEMBER FUNCTIONS
//------------------------------------------------------------

const setPosts = () => {

    setTimeout(() => {
        let listItems = ``;
        posts.forEach((post)=> {

            listItems += `<li>
                            <strong>${post.title}</strong>
                            <br/>
                            <div>${post.desc}</div>
                        </li>`;

        });

        document.write(listItems);
    }, 2000);
};


const createPost = post => {

    setTimeout(() => {
        posts.push(post);
        console.log(posts);
    }, 5000);
}

//------------------------------------------------------------
// PLAYGROUND
//------------------------------------------------------------


//! Pushed Post does not appear
// createPost({title:"Pushed post", desc:"Description of Pushed Post"});
// setPosts();

//! Neither does it appear here
// createPost({title:"Pushed post", desc:"Description of Pushed Post"});
// setPosts();

const createPostAsync = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        console.log(posts);
        callback();
    }, 5000);
};

createPostAsync({title:"Pushed post", desc:"Description of Pushed Post"}, setPosts);