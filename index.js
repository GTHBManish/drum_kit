let buttons = document.querySelectorAll(".drum");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let innerText = this.innerHTML;
    switch (innerText) {
      case "w":
        let w = new Audio("sounds/tom-1.mp3");
        w.play();
        break;
      case "a":
        let a = new Audio("sounds/tom-2.mp3");
        a.play();
        break;
      case "s":
        let s = new Audio("sounds/tom-3.mp3");
        s.play();
        break;
      case "d":
        let d = new Audio("sounds/tom-4.mp3");
        d.play();
        break;
      case "j":
        let j = new Audio("sounds/snare.mp3");
        j.play();
        break;
      case "k":
        let k = new Audio("sounds/crash.mp3");
        k.play();
        break;
      case "l":
        let l = new Audio("sounds/kick-bass.mp3");
        l.play();
        break;

      default:
        console.log(innerHtml);
    }
  });
}
