const options = document.querySelectorAll('.option');

const title = document.getElementById('titleOp');
const list = document.getElementById('leftList');
const brandOp = document.querySelectorAll('.brandOp');

const rightList = document.querySelector('.rightList');

const dropdown = document.getElementById('dropdownNav');

function goDown(){
    options.forEach(i =>{
        i.addEventListener('mouseover', () =>{
            dropdown.style.display = 'grid'
            if(i.textContent == 'CELULARES'){
                title.innerHTML = i.textContent;
                list.innerHTML = "<li class='brandOp'>Destacados</li> <li class='brandOp'>Samsung</li> <li class='brandOp'>Apple</li> <li class='brandOp'>Xiaomi</li> <li class='brandOp'>Motorola</li> <li class='brandOp'>Realme</li>"; 

            }else if(i.textContent == 'WATCHES'){
                title.innerHTML = i.textContent;
                list.innerHTML = "<li class='brandOp'>Destacados</li> <li class='brandOp'>Samsung</li> <li class='brandOp'>Apple</li> <li class='brandOp'>Xiaomi</li>";

            }else if(i.textContent == 'BUDS'){
                title.innerHTML = i.textContent;
                list.innerHTML = "<li class='brandOp'>Destacados</li> <li class='brandOp'>Samsung</li> <li class='brandOp'>Skullcandy</li> <li class='brandOp'>Apple</li> <li class='brandOp'>Xiaomi</li>";

            }else if(i.textContent == 'ACCESORIOS'){
                title.innerHTML = i.textContent;
                list.innerHTML = "<li class='brandOp'>Destacados</li> <li class='brandOp'>Cargadores</li> <li class='brandOp'>Parlantes</li> <li class='brandOp'>Fundas</li>";  

            }    
        })
    })
}

function subMenu(){
    brandOp.forEach(e => {
        e.addEventListener('click', () =>{
            console.log("si")
        })
    });
}

goDown();
subMenu();