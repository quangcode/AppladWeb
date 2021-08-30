function start(){
    menuMobile();
    getAnwesomeMode();
}
start()
function menuMobile(){
    var headerMobile = document.querySelector('.header__listMobile')
    var overLay = document.querySelector('.overlay')
    var btnMobile = document.querySelector('.header__btnMobile')
    var btnClose = document.querySelector('.btnClose')
    btnMobile.onclick = function(){
        if(headerMobile){
            headerMobile.classList.add('block')
            overLay.classList.add('block')
        }
    }
    btnClose.onclick = function(){
        if(headerMobile.classList.contains('block')){
            headerMobile.classList.remove('block')
            overLay.classList.remove('block')
        }
    }
}
function getAnwesomeMode(){
    var modeMonthly = document.querySelector('.mode__monthly')
    var modeAnnually = document.querySelector('.mode__annually')
    var businessClass = document.querySelector('.businessClass')
    var proMaster = document.querySelector('.proMaster')
    modeMonthly.onclick = function(){
        if(!modeMonthly.classList.contains('active')){
            modeMonthly.classList.add('active')
            modeAnnually.classList.remove('active')
            businessClass.classList.add('active')
            proMaster.classList.remove('active')
        }
    }
    modeAnnually.onclick = function(){
        if(!modeAnnually.classList.contains('active')){
            modeAnnually.classList.add('active')
            modeMonthly.classList.remove('active')
            proMaster.classList.add('active')
            businessClass.classList.remove('active')
        }
    }
}