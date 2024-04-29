let users = [
    {
        profilePic : "images/one.jpg",
        displayPic : "images/one.jpg",
        pendingMessage : 4,
        location : "Delhi, India",
        name : "RjNidhi",
        age : 23,
        interests : [{
            icon :  `<i class="ri-music-2-fill"></i>`,
            interest : "music"
        },
        {
            icon :  `<i class="ri-quill-pen-fill"></i>`,
            interest : "writing"
        }
    ],
        bio : "Lorem i,psum dolor sit amet, consectetur adipisicing elit. Ipsa, dignissimos eos accusantium eaque temporibus expedita!",
        isFriends : null
    },

    {
        profilePic : "images/two.jpg",
        displayPic : "images/two.jpg",
        pendingMessage : 4,
        location : "Delhi, India",
        name : "priyansha",
        age : 26,
        interests : ["music","painting"],
        bio : "Lorem i,psum dolor sit amet, consectetur adipisicing elit. Ipsa, dignissimos eos accusantium eaque temporibus expedita!",
        isFriends : null
    },

    {
        profilePic : "images/three.jpg",
        displayPic : "images/three.jpg",
        pendingMessage : 4,
        location : "Delhi, India",
        name : "Yesha",
        age : 26,
        interests : [{
            icon :  `<i class="ri-music-2-fill"></i>`,
            interest : "music"
        },
        {
            icon :  `<i class="ri-quill-pen-fill"></i>`,
            interest : "writing"
        }
    ],
        bio : "Lorem i,psum dolor sit amet, consectetur adipisicing elit. Ipsa, dignissimos eos accusantium eaque temporibus expedita!",
        isFriends : null
    },

    {
        profilePic : "images/four.jpg",
        displayPic : "images/four.jpg",
        pendingMessage : 4,
        location : "Delhi, India",
        name : "Dhurvi Nanad",
        age : 22,
        interests : [{
            icon :  `<i class="ri-music-2-fill"></i>`,
            interest : "music"
        },
        {
            icon :  `<i class="ri-quill-pen-fill"></i>`,
            interest : "writing"
        }
    ],
        bio : "Lorem i,psum dolor sit amet, consectetur adipisicing elit. Ipsa, dignissimos eos accusantium eaque temporibus expedita!",
        isFriends : null
    },

    {
        profilePic : "images/five.jpg",
        displayPic : "images/five.jpg",
        pendingMessage : 4,
        location : "Delhi, India",
        name : "Tivneet_Kaur",
        age : 25,
        interests : [{
            icon :  `<i class="ri-music-2-fill"></i>`,
            interest : "music"
        },
        {
            icon :  `<i class="ri-quill-pen-fill"></i>`,
            interest : "writing"
        }
    ],
        bio : "Lorem i,psum dolor sit amet, consectetur adipisicing elit. Ipsa, dignissimos eos accusantium eaque temporibus expedita!",
        isFriends : null
    },

    {
        profilePic : "images/six.jpg",
        displayPic : "images/six.jpg",
        pendingMessage : 4,
        location : "Delhi, India",
        name : "RjNidhi",
        age : 23,
        interests : [{
            icon :  `<i class="ri-music-2-fill"></i>`,
            interest : "music"
        },
        {
            icon :  `<i class="ri-quill-pen-fill"></i>`,
            interest : "writing"
        }
    ],
        bio : "Lorem i,psum dolor sit amet, consectetur adipisicing elit. Ipsa, dignissimos eos accusantium eaque temporibus expedita!",
        isFriends : null
    }
];

function select(elem){
    return document.querySelector(elem);
}

let curr = 0; 

let isAnimating = false;

function setData(index){
    
    select(".prflimg img").src = users[index].profilePic;

    select(".badge h5").textContent = users[index].pendingMessage;

    select(".location h3").textContent = users[index].location;

    select(".name h1:nth-child(1)").textContent = users[index].name;

    select(".name h1:nth-child(2)").textContent = users[index].age;


    var clutter = "";
    users[index].interests.forEach(function(interests){
        clutter += ` <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
        ${interests.icon}
        <h3 class="text-sm tracking-tight capitalize">${interests.interest}</h3>
    </div>`
    })

    select(".tags").innerHTML = clutter;

    select(".bio p").textContent = users[index].bio;
}

(function setInitial(){
    select(".maincard img").src = users[curr].displayPic;

    select(".incomingcard img").src = users[curr+1]?.displayPic;

    setData(curr);
    curr = 2;

})();


function imageChange(){
    if(!isAnimating){
        isAnimating = true;
        let tl = gsap.timeline({
       
            onComplete : function(){
                isAnimating = false;
                let main = select(".maincard");
                let incoming = select(".incomingcard");
    
                incoming.classList.remove("z-[2]");
                incoming.classList.remove("z-[3]");
                incoming.classList.remove("incomingcard");
    
                main.classList.remove("z-[3]");
                main.classList.remove("z-[2]");
                gsap.set(main,{
                    scale : 1,
                    opacity : 1
                })
    
                if(curr === users.length) curr = 0;
                select(".maincard img").src = users[curr].displayPic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
                
    
    
            }
        });
        tl.to(".maincard",{
            scale : 1.1,
            opacity : 0,
            ease : Circ,
            duration : 0.9
        },"sahil")
        .from(".incomingcard",{
            scale : 0.9,
            opacity : 0,
            ease : Circ,
            duration : 1.1
        },"sahil")
    
    
    }
    
}

let deny =  select(".deny");
let accept = select(".accept");

deny.addEventListener("click",()=>{
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y : 100,
        opacity : 0,
        duration : 1,
        stagger : 0.1,
        ease : Circ,
    })    
})

accept.addEventListener("click",()=>{
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y : 100,
        opacity : 0,
        duration : 1,
        stagger : 0.1,
        ease : Circ,
    })    
})

function containerCreator(){
document.querySelectorAll(".element").forEach(function(element){
    let div =  document.createElement("div");
    div.classList.add(`${element.classList[1]}container`,'overflow-hidden');
    div.appendChild(element);
        select(".details").appendChild(div);
    
})
}
containerCreator();
