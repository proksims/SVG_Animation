function sunrise(){
    console.log("sunrise");
    setTimeout(function() {
        theme.classList.add('sunrise');
        theme.classList.remove('day', 'sunset', 'night');
      }, 100);
}
function day(){
    console.log("day");
    setTimeout(function() {
        theme.classList.add('day');
        theme.classList.remove('sunrise', 'sunset', 'night');
      }, 100);
}
function sunset(){
    console.log("sunset");
    setTimeout(function() {
        theme.classList.add('sunset');
        theme.classList.remove('day', 'sunrise', 'night');
      }, 100);
}
function night(){
    console.log("night");
    setTimeout(function() {
        theme.classList.add('night');
        theme.classList.remove('day', 'sunset', 'sunrise');
      }, 100);
}

let theme = document.querySelector(".container_svg");
// console.log(theme, theme.classList);

