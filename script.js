const quote = document.querySelector(".para");
const MyName = document.querySelector(".writer");
const button = document.getElementById("button");
const audio = document.querySelector(".myAudio")

const list=[
        {
            "quote": "Give someone a program; you frustrate them for a day; teach them how to program, and you frustrate them for a lifetime" ,
            "name":" David Leinweber"
        },
        {
            "quote":"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it ",
            "name":"Rajanand"
        },
        {
            "quote":"Everybody in this country should learn to program a computer because it teaches you how to think",
            "name":"Steve Jobs"
        },
        {
            "quote":"In programming, the hard part isn’t solving problems but deciding what problems to solve ",
            "name":"Paul Graham"
        },
        {
            "quote":"Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.",
            "name":"Eagleson’s Law"
        },
        {
            "quote":"It is not the language that makes programs appear simple. It is the programmer that make the language appear simple!",
            "name":"Robert C. Martin"
        },
        {
            "quote":"First learn computer science and all the theory.  Next develop a programming style.  Then forget all that and just hack.",
            "name":"George Carrette"
        },
        {
            "quote":"Design is the art of arranging code to work today, and be changeable forever.",
            "name":"Sandi Metz"
        },
        {
            "quote":"5 In programming, the hard part isn’t solving problems but deciding what problems to solve ",
            "name":"Paul Graham"
        }, 
        {
            "quote":"If debugging is the process of removing bugs, then programming must be the process of putting them in.",
            "name":"Edsger W. Dijkstra"
        },
        {
            "quote":"Many days I don't write any code at all, and some days I spend all day writing code.",
            "name":"Larry Wall "
        },
        {
            "quote":"I’m not a great programmer; I’m just a good programmer with great habits.",
            "name":"Kent Beck"
        },
    ]
button.addEventListener("click",()=>{
    let random=Math.floor(Math.random()*list.length)
    quote.innerHTML=list[random].quote;
    MyName.innerHTML=list[random].name;

    audio.play()
});


 