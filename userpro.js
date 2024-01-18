let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};
let profileContainerEl = document.getElementById("profileContainer");
profileContainerEl.classList.add("text-center", "d-flex", "flex-column", "justify-content-center");
let imgContainerE1 = document.getElementById("imgContainer");
//let imgE1 = document.createElement("img");
let imgE1 = document.createElement("img");
imgE1.setAttribute("src", profileDetails.imgSrc);
imgE1.classList.add("profile-img");
imgContainerE1.appendChild(imgE1);




let nameEl = document.createElement("h1");
nameEl.classList.add("profile-name");
nameEl.textContent = profileDetails.name;
profileContainerEl.appendChild(nameEl);

let ageEl = document.createElement("p");
ageEl.classList.add("age");
ageEl.textContent = "Age: " + profileDetails.age;
profileContainerEl.appendChild(ageEl);