const optionsMobile = document.querySelectorAll('.mobileOption');
const opM1 = document.getElementById('mobileSlide1');
const opM2 = document.getElementById('mobileSlide2');
const opM3 = document.getElementById('mobileSlide3');
const opM4 = document.getElementById('mobileSlide4');
const opM5 = document.getElementById('mobileSlide5');

const optionsAcc = document.querySelectorAll('.accOption');
const opA1 = document.getElementById('accSlide1');
const opA2 = document.getElementById('accSlide2');
const opA3 = document.getElementById('accSlide3');
const opA4 = document.getElementById('accSlide4');
const opA5 = document.getElementById('accSlide5');



function anotherOption(le, op1, op2, op3, op4, op5, name1, name2, name3, name4, name5){
    le.forEach(om =>{
        om.addEventListener('mouseover', () => {
            if(om.textContent == name1){
                op1.style.display = 'block';
                op2.style.display = 'none';
                op3.style.display = 'none';
                op4.style.display = 'none';
                op5.style.display = 'none';
            }else if(om.textContent == name2){
                op1.style.display = 'none';
                op2.style.display = 'block';
                op3.style.display = 'none';
                op4.style.display = 'none';
                op5.style.display = 'none';
            }else if(om.textContent == name3){
                op1.style.display = 'none';
                op2.style.display = 'none';
                op3.style.display = 'block';
                op4.style.display = 'none';
                op5.style.display = 'none';
            }else if(om.textContent == name4){
                op1.style.display = 'none';
                op2.style.display = 'none';
                op3.style.display = 'none';
                op4.style.display = 'block';
                op5.style.display = 'none';
            }else if(om.textContent == name5){
                op1.style.display = 'none';
                op2.style.display = 'none';
                op3.style.display = 'none';
                op4.style.display = 'none';
                op5.style.display = 'block';
            }
        })
    })
}

anotherOption(optionsMobile, opM1, opM2, opM3, opM4, opM5, "Samsung", "Apple", "Xiaomi", "Motorola", "Huawei");
anotherOption(optionsAcc, opA1, opA2, opA3, opA4, opA5, "Watches", "Earbuds", "MiBand", "Parlantes", "Cargadores");