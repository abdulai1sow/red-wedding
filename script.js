const addBtn = document.querySelector('#add-child')
const weddBtn = document.querySelector('#red-wedding')
const div = document.querySelector('.starks')

function addChild() {
  const creatDiv = document.createElement('div') //creating a element (div) here
  creatDiv.textContent = 'one' //passing down the div and writing 'one' when click
  div.appendChild(creatDiv) //shows the created div in the div
}

//childern is the element in the div
function redWedding() {
  while (div.children.length > 0) {
    console.log(redWedding);
    div.childern[0].remove;
  }
  console.log('power off.');
}


addBtn.addEventListener('click', addChild)
weddBtn.addEventListener('click', redWedding)



// Attach functions to buttons

// The addChild function creates new div & appends it to the starks div

// The redWedding function removes ALL stark children (loop)


/**
 * 
 * 
 const btn1 = document.getElementById('add-child')
const btn2 = document.getElementById('red-wedding')
const div = document.querySelector('.starks')

btn1.addEventListener('click', addChild)
btn2.addEventListener('click', redWedding)

// Create Two Functions -> addChild and redWedding
function addChild() {
  const div2 = document.createElement('div')
  div2.textContent = 'DIV'
  div.appendChild(div2)
}
function redWedding() {
  const children = div.querySelectorAll('div')
  const list = Array.from(children)
  list.map(e => e.remove())
}
 */