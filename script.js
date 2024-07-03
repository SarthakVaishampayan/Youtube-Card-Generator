
alert("hello")
let title = prompt("Enter the title")
let cName = prompt("Enter the name of your channel")
let views = prompt("Enter the no of view(int)")
let monthsOld = prompt("No of months old the video is ?")
let duration = prompt("duration of the video(mins:sec)")
let thumbnail = prompt("url of the thumbnail")




function createCard(title, cName, views, monthsOld, duration, thumbnail) {

    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = (Math.ceil(views / 100000)/10) + "M";
    }
    else {
        viewStr = (Math.ceil(views / 100 )/10) + "K";
    }
    let html = ` <div class="card">
        <div>
          <img
            class="thumbnail"
            src="${thumbnail}"
          />
          <div class="timestamp">
            <p>${duration}</p>
          </div>
        </div>
        <div style="position: relative; right: 10px" class="content">
          <p class="heading">${title}</p>
          <p class="undertext">${cName} . ${viewStr} views . ${monthsOld} months ago</p>
          </div>
          </div>`
          
          document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
        }
        createCard(title,cName, views, monthsOld, duration, thumbnail)
        
        
        // createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
        
        








        //After end method
         
        // document.querySelector(".empty").insertAdjacentHTML('afterend', `<div class="container">
        //       <div class="card">
        //         <div>
        //           <img
        //             class="thumbnail"
        //             src="https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q"
        //           />
        //           <div class="timestamp">
        //             <p>31:22</p>
        //           </div>
        //         </div>
        //         <div style="position: relative; right: 10px" class="content">
        //           <p class="heading">
        //             Installing VS Code & How Website Work | Sigma Web Development Course
        //             - Tutorial #1
        //           </p>
        //           <p class="undertext">CodeWithHarry . 727K views . 2 months ago</p>
        //         </div>
        //       </div>
        //     </div>`)
        
