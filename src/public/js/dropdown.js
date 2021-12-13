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
            rightList.innerHTML = '<li class="productOp"><a href="/menu/product/SAMSUNG/61a7bea41243f1896b1861c0">Samsung Galaxy S21 Ultra</a></li> <li class="productOp"><a href="/menu/product/XIAOMI/61a7c6fb1243f1896b1861c7">Xiaomi Mi 11 Ultra</a></li><li class="productOp"><a>Celulares en oferta</a></li>'
        }else if(id == 'a2'){
            rightList.innerHTML = '<li class="productOp"><a href="/menu/product/SAMSUNG/61a7bea41243f1896b1861c0">Samsung Galaxy S21 Ultra</a></li> <li class="productOp"><a href="/menu/product/SAMSUNG/61a7bede1243f1896b1861c1">Samsung Galaxy S21</a></li> <li class="productOp"><a href="/menu/product/SAMSUNG/61a7bee91243f1896b1861c2">Samsung Galaxy A72</li> <li class="productOp"><a href="/menu/product/SAMSUNG/61a7beef1243f1896b1861c3">Samsung Galaxy A52S</a></li> <li class="productOp"><a href="#">Samsung Galaxy A32</a></li> <li class="productOp"><a href="/menu/product/SAMSUNG/61a7c6de1243f1896b1861c4">Samsung Galaxy A12</a></li>'
        }else if(id == 'a3'){
            rightList.innerHTML = '<li class="productOp"><a href="#">iPhone 13</a></li> <li class="productOp"></li> <li class="productOp"><a href="#">iPhone 12</a></li> <li class="productOp"><a href="#">iPhone 11</a></li> <li class="productOp"><a href="#">iPhone XR</a></li>'
        }else if(id == 'a4'){
            rightList.innerHTML = '<li class="productOp"><a href="#">Xiaomi Mi 11 Ultra</a></li> <li class="productOp"><a href="#">Redmi Note 10 Pro</a></li> <li class="productOp"><a href="#">Xiaomi Mi 11 Lite</a></li> <li class="productOp"><a href="#">Redmi Note 10S</a></li> <li class="productOp"><a href="#"><li class="productOp"><a href="#">Redmi 9</a></li></a></li>'
        }else if(id == 'a5'){
            rightList.innerHTML = '<li class="productOp"><a href="#">Motorola G20</a></li> <li class="productOp"><a href="#">Motorola Edge 20 Lite</a></li>'
        }else if(id == 'a6'){
            rightList.innerHTML = '<li class="productOp"><a href="#">Huawei Y7A</a></li> <li class="productOp"><a href="#">Huawei P40 Pro</a></li> <li class="productOp"><a href="#">Huawei Y9A</a></li>'
        }
    }else if(list.getAttribute('data-id') == 'b'){
        if(id == 'b1'){
            rightList.innerHTML = '<li class="productOp"><a href="/menu/producto/WATCH/61a7b0bb610d6e1e72f92cfc">Apple Watch Series 7</a></li> <li class="productOp"><a href="#">Galaxy Buds Live</a></li> <li class="productOp"><a href="#">Samsung Galaxy A32</a></li> <li class="productOp"><a href="#">Parlantes JBL en oferta2</a></li> <li class="productOp"><a href="#">Cargador Inalámbrico Samsung</a></li>'
        }else if(id == 'b2'){
            rightList.innerHTML = '<li class="productOp"><a href="#">Galaxy Buds Live</a></li> <li class="productOp"><a href="#">Airpods Pro</a></li> <li class="productOp"><a href="#">Freebuds 4i</a></li>'
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
                list.innerHTML = "<li class='brandOp' data-id='a1' onmouseover=submenuCont('a1')>Destacados</li> <li class='brandOp' data-id='a2' onmouseover=submenuCont('a2')>Samsung</li> <li class='brandOp' data-id='a3' onmouseover=submenuCont('a3')>Apple</li> <li class='brandOp' data-id='a4' onmouseover=submenuCont('a4')>Xiaomi</li> <li class='brandOp' data-id='a5' onmouseover=submenuCont('a5')>Motorola</li> <li class='brandOp' data-id'a6' onmouseover=submenuCont('a6')>Huawei</li>"; 
                list.setAttribute('data-id', 'a');
                exampleContent('https://www.muycomputer.com/wp-content/uploads/2021/01/Samsung-Galaxy-S21-Ultra-portada-1000x600.jpg', 'Samsung Galaxy S21 Ultra', 'google.com');
            }else if(i.textContent == 'ACCESORIOS'){
                title.innerHTML = i.textContent;
                list.innerHTML = "<li class='brandOp' data-id='b1' onmouseover=submenuCont('b1')>Destacados</li> <li class='brandOp' data-id='b2' onmouseover=submenuCont('b2')>Audifonos</li> <li class='brandOp' data-id='b3' onmouseover=submenuCont('b3')>Watches</li> <li class='brandOp' data-id='b4' onmouseover=submenuCont('b4')>Parlantes</li> <li class='brandOp' data-id='b5' onmouseover=submenuCont('b5')>Cargadores</li>";
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