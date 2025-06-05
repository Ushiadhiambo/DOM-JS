
const title=document.getElementById('title');
const titleTag=document.getElementById('title-tag');
const titleTag2=document.getElementById('title-tag2');
const fruitList = document.createElement('LI');
const vegetableList=document.createElement('LI');
const paragraph=document.getElementById('paragraph');
const mangoFruit=document.getElementById('mango-fruit');
const bananaFruit=document.getElementById('banana-fruit');
const mangoBanana=document.getElementById('mango-banana');
const mango=document.getElementById('mango');
const melonFruit=document.getElementById('melon-fruit');
const grape=document.getElementById('grape-fruit');
const melonGrape=document.getElementById('melon-grape');
const banana=document.getElementById('banana');
const melon=document.getElementById('melon');
const grapeFruit=document.getElementById('grape-fruit');
const onionVeg=document.getElementById('onion-veg');
const tomatoVeg=document.getElementById('tomato-veg');
const onionTomato=document.getElementById('onion-tomato')
const onion=document.getElementById('onion');
const tomato=document.getElementById('tomato');
const kalesSpinach=document.getElementById('kales-spinach');
const kalesVeg=document.getElementById('kales-veg');
const spinachVeg=document.getElementById('spinach-veg');
const kales=document.getElementById('kales');
const frulist=document.getElementById('frulist');
const text=document.getElementById('text');
const text1=document.getElementById('text1');
const text3=document.getElementById('text3');
const text4=document.getElementById('text4');
const text5=document.getElementById('text5');
const text6=document.getElementById('text6');
const text7=document.getElementById('text7')
const clickableWord=document.querySelectorAll('.clickable');
const clickableWord1=document.querySelectorAll('.clickable1');
const clickableWord2=document.querySelectorAll('.clickable2');
const clickableWord3=document.querySelectorAll('.clickable3');
const clickableWord4=document.querySelectorAll('.clickable4');
const clickableWord5=document.querySelectorAll('.clickable5');



clickableWord.forEach(word=>{
    word.addEventListener('click',function(){
        document.getElementById('text').textContent='KES 100'
      

    });
});
clickableWord1.forEach(word=>{
    word.addEventListener('click',function(){
    document.getElementById('text1').textContent='KES 50'
   

    });
});
clickableWord2.forEach(word=>{
    word.addEventListener('click',function(){
    document.getElementById('text3').textContent='KES 150'
    

    });
});

clickableWord3.forEach(word=>{
    word.addEventListener('click',function(){
    document.getElementById('text4').textContent='KES 100'
    

    });
});

clickableWord4.forEach(word=>{
    word.addEventListener('click',function(){
    document.getElementById('text5').textContent='KES 100'
    

    });
});

clickableWord5.forEach(word=>{
    word.addEventListener('click',function(){
    document.getElementById('text6').textContent='KES 50'
    

    });
});







title.style.color='green';
title.style.textAlign='center'
title.style.fontSize='50px'

titleTag.style.textTransform = "uppercase";
titleTag.style.textAlign='center'


titleTag2.style.textTransform = "uppercase";
titleTag2.style.textAlign='center'


paragraph.style.textAlign='center'
paragraph.style.fontSize='30px'


fruitList.textContent = 'Grapes';
fruList.appendChild(fruitList);
fruitList.style.marginLeft='55em'
fruitList.style.marginTop='-1em'

vegetableList.textContent='Spinach';
vegList.appendChild(vegetableList);
vegetableList.style.marginLeft='55em'
vegetableList.style.marginTop='-1em'





mango.style.marginTop='20em'
mango.style.marginLeft='-13em'


banana.style.marginTop='20em'
banana.style.marginLeft='-13em'


mangoFruit.style.width='20%'
mangoFruit.style.borderRadius='20px'
mangoFruit.style.height='18em'
mangoFruit.style.marginLeft='-15em'
mangoFruit.style.marginTop='1em'

bananaFruit.style.width='20%'
bananaFruit.style.borderRadius='20px'
bananaFruit.style.marginLeft='20em'
bananaFruit.style.height='18em'
bananaFruit.style.marginTop='1em'


melonFruit.style.width='20%'
melonFruit.style.borderRadius='20px'
melonFruit.style.marginTop='2cm'
melonFruit.style.marginLeft='-5em'
melonFruit.style.height='18em'


grapeFruit.style.width='20%'
grapeFruit.style.borderRadius='20px'
grapeFruit.style.height='18em'
grapeFruit.style.marginLeft='22em'


onionVeg.style.width='20%'
onionVeg.style.borderRadius='20px'
onionVeg.style.height='18em'
onionVeg.style.marginLeft='-12em'
onionVeg.style.marginTop='2cm'


tomatoVeg.style.width='20%'
tomatoVeg.style.borderRadius='20px'
tomatoVeg.style.height='18em'
tomatoVeg.style.marginLeft='22em'
tomatoVeg.style.marginTop='2cm'


kalesVeg.style.width='20%'
kalesVeg.style.borderRadius='20px'
kalesVeg.style.marginTop='2cm'
kalesVeg.style.marginLeft='-3em'
kalesVeg.style.height='18em'

spinachVeg.style.width='20%'
spinachVeg.style.borderRadius='20px'
spinachVeg.style.height='18em'
spinachVeg.style.marginLeft='22em'
spinachVeg.style.marginTop='2cm'




onionTomato.style.display='flex'
onionTomato.style.justifyContent='center'

kalesSpinach.style.display='flex'
kalesSpinach.style.justifyContent='center'

tomato.style.marginTop='24em'
tomato.style.marginLeft='-12em'


kales.style.marginTop='24em'
kales.style.marginLeft='-13em'

onion.style.marginLeft='-15em'
onion.style.marginTop='24em'


melon.style.marginTop='24em'
melon.style.marginLeft='-17em'


mangoBanana.style.display='flex'
mangoBanana.style.justifyContent='center'


grape.style.width='20%'
grape.style.borderRadius='20px'
grape.style.marginTop='2cm'


melonGrape.style.display='flex'
melonGrape.style.justifyContent='center'






