const options = document.querySelectorAll('.option');

const title = document.getElementById('titleOp');
const list = document.getElementById('leftList');

const rightList = document.querySelector('.rightList');
const productOp = document.querySelectorAll('productOp');

const closeDiv = document.querySelector('.goUp');

const dropdown = document.getElementById('dropdownNav');



function submenuCont(id){
    rightList.style.display = 'flex'

    if(list.getAttribute('data-id') == 'a'){
        if(id == 'a1'){
            rightList.innerHTML = '<li class="productOp"><a href="#">Samsung Galaxy S21 Ultra</a></li> <li class="productOp">MI 11  Ultra</li> <li class="productOp">Celulares con descuento</li>'
        }else if(id == 'a2'){
            rightList.innerHTML = '<li class="productOp">Galaxy S21 Ultra</li> <li class="productOp">GALAXY S21</li> <li class="productOp">GALAXY A72</li> <li class="productOp">GALAXY A52S</li> <li class="productOp">GALAXY A12</li> <li class="productOp">GALAXY A32</li> <li class="productOp">GALAXY A03S</li>'
        }else if(id == 'a3'){
            rightList.innerHTML = '<li class="productOp">IPHONE 13 </li> <li class="productOp"></li> <li class="productOp"></li> <li class="productOp"></li> '
        }
    }else if(list.getAttribute('data-id') == 'b'){
        if(id == 'b1'){
            rightList.innerHTML = '<li class="productOp">Apple watch Series 6</li>'
        }
    }
}

function closeSubmenu(){
    dropdown.addEventListener('mouseleave', () => {
        rightList.style.display = 'none'
    })
}

function goDown(){
    function exampleContent(a, b, c){
        document.getElementById('exampleImg').setAttribute('src', a);
        document.getElementById('exampleTitle').textContent = b;
        document.getElementById('exSM').setAttribute('href', c)
    }
    options.forEach(i =>{
        i.addEventListener('mouseover', () =>{
            dropdown.style.display = 'grid'
            
            if(i.textContent == 'CELULARES'){
                title.innerHTML = i.textContent;
                list.innerHTML = "<li class='brandOp' data-id='a1' onmouseover=submenuCont('a1')>Destacados</li> <li class='brandOp' data-id='a2' onmouseover=submenuCont('a2')>Samsung</li> <li class='brandOp' data-id='a3' onmouseover=submenuCont('a3')>Apple</li> <li class='brandOp' data-id='a4' onmouseover=submenuCont('a4')>Xiaomi</li> <li class='brandOp' data-id='a5' onmouseover=submenuCont('a5')>Motorola</li> <li class='brandOp' data-id'A6' onmouseover=submenuCont('a6')>Huawei</li>"; 
                list.setAttribute('data-id', 'a');
                exampleContent('https://www.muycomputer.com/wp-content/uploads/2021/01/Samsung-Galaxy-S21-Ultra-portada-1000x600.jpg', 'Samsung Galaxy S21 Ultra', 'google.com');
            }else if(i.textContent == 'ACCESORIOS'){
                title.innerHTML = i.textContent;
                list.innerHTML = "<li class='brandOp' data-id='b1' onmouseover=submenuCont('b1')>Destacados</li> <li class='brandOp' data-id='b2'>Samsung</li> <li class='brandOp' data-id='b3'>Apple</li> <li class='brandOp' data-id='b4'>Xiaomi</li>";
                list.setAttribute('data-id', 'b');
                exampleContent('https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7-availability_hero_10052021_big.jpg.large.jpg', 'Nuevo Apple Watch Series 7', '#');
            } 
            // }else if(i.textContent == 'BUDS'){
            //     title.innerHTML = i.textContent;
            //     list.innerHTML = "<li class='brandOp'>Destacados</li> <li class='brandOp'>Samsung</li> <li class='brandOp'>Skullcandy</li> <li class='brandOp'>Apple</li> <li class='brandOp'>Xiaomi</li>";
            //     list.setAttribute('data-id', 'c')
            // }else if(i.textContent == 'ACCESORIOS'){
            //     title.innerHTML = i.textContent;
            //     list.innerHTML = "<li class='brandOp'>Destacados</li> <li class='brandOp'>Cargadores</li> <li class='brandOp'>Parlantes</li> <li class='brandOp'>Fundas</li>";  
            //     list.setAttribute('data-id', 'd')
            // }    
        })
    })
}



function goUp(){
    closeDiv.addEventListener('mouseover', ()=>{
        dropdown.style.display = 'none'
    })
}

function btnClose(){
    dropdown.style.display = 'none'
}


goDown();
closeSubmenu();
goUp();