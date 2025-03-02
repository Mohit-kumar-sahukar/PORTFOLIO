// Skills Animation
function showSkill(element) {
    element.style.animation = "skillFadeIn 0.5s ease-in-out";
    setTimeout(() => element.style.animation = "", 500);
}
