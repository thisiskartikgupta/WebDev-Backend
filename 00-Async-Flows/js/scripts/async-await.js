
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

const createPostPromise = (post) => {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            console.log(posts);

            //let error = true;
            let error = false;

            if(!error)
                resolve();
            else
                reject("This is inside reject");

        }, 5000);
    });
};

async function asyncExample() {
    await createPostPromise({title:"Pushed post", desc:"Description of Pushed Post"});

    await setPosts();
}

asyncExample();
