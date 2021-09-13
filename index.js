let expsElem = document.querySelectorAll('.exp');
let descElem = document.querySelector('.desc');
let imgElem = document.querySelector('.exp-img');
console.log(expsElem)
expsElem.forEach(exp => {

  exp.addEventListener("click", function(e) {
    let desc = exp.getAttribute("data-desc");
    let img = exp.getAttribute("data-img");
    expsElem.forEach(exp => {exp.classList.remove('selected')});
    descElem.innerHTML = desc;
    imgElem.src = `./images/exp/${img}.gif`
    exp.classList.add('selected')

  })
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substring(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}

let skills = document.querySelector('.skills').childNodes;
console.log(skills)
skills.forEach(skill => {
  if (skill.localName == "li") {
    let perc = skill.getAttribute("data-percent");
    console.log(skill.style.background);
    skill.style.background = `linear-gradient(to right, rgb(154, 220, 112) ${parseInt(perc)}%, rgb(241, 241, 241) 0%)`
    console.log(skill.style.background);
  }
})