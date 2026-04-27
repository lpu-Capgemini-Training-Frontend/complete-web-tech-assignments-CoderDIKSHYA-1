let likebtn = document.getElementById("likebtn")
let dislikebtn = document.getElementById("dislikebtn")

let countForLike = 0
function increaseLike()
{
    console.log("Like is increasing");
    ++countForLike
    likebtn.innerText = `❤️${countForLike}`
    console.log(countForLike);
}

let countForDislike =0
function increaseDisLike()
{
    console.log("Dislike is increasing");
    ++countForDislike
    dislikebtn.innerText=`👎${countForDislike}`
    console.log(countForDislike);
    
}