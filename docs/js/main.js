// start menu
document.getElementById('menu-btn').onclick = function() {
  document.getElementById('menu').classList.toggle('active'); 
   document.getElementById('menu-btn').classList.toggle('active');
   document.getElementById('header').classList.toggle('active'); 
   document.getElementById('body').classList.toggle('active');
}
document.getElementById('header__menu-item--sub').onclick = function() {
   document.getElementById('header__menu-item--sub-wrap').classList.toggle('active');
    document.getElementById('header__menu-down').classList.toggle('active');

}
// end menu

//start search tabs
var $tabs = function (target) {
  var
    _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
    _eventTabsShow,
    _showTab = function (tabsLinkTarget) {
      var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
      tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
      tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
      tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
      // если следующая вкладка равна активной, то завершаем работу
      if (tabsLinkTarget === tabsLinkActive) {
        return;
      }
      // удаляем классы у текущих активных элементов
      if (tabsLinkActive !== null) {
        tabsLinkActive.classList.remove('tabs__link_active');
      }
      if (tabsPaneShow !== null) {
        tabsPaneShow.classList.remove('tabs__pane_show');
      }
      // добавляем классы к элементам (в завимости от выбранной вкладки)
      tabsLinkTarget.classList.add('tabs__link_active');
      tabsPaneTarget.classList.add('tabs__pane_show');
      document.dispatchEvent(_eventTabsShow);
    },
    _switchTabTo = function (tabsLinkIndex) {
      var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
      if (tabsLinks.length > 0) {
        if (tabsLinkIndex > tabsLinks.length) {
          tabsLinkIndex = tabsLinks.length;
        } else if (tabsLinkIndex < 1) {
          tabsLinkIndex = 1;
        }
        _showTab(tabsLinks[tabsLinkIndex - 1]);
      }
    };

  _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

  _elemTabs.addEventListener('click', function (e) {
    var tabsLinkTarget = e.target;
    // завершаем выполнение функции, если кликнули не по ссылке
    if (!tabsLinkTarget.classList.contains('tabs__link')) {
      return;
    }
    // отменяем стандартное действие
    e.preventDefault();
    _showTab(tabsLinkTarget);
  });

  return {
    showTab: function (target) {
      _showTab(target);
    },
    switchTabTo: function (index) {
      _switchTabTo(index);
    }
  }

};

$tabs('.tabs');
//end search tabs

 /////------------staer swiper init--------
 let swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
       navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
     
      breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1,
    
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
   
    }
  }
    });
 ////// ------end swiper init-----

 //start video 
document.getElementById('play-btn2').onclick = function() {
   document.getElementById('video-popup').classList.add('active');
}
document.getElementById('close').onclick = function() {
   document.getElementById('video-popup').classList.remove('active');
}

document.getElementById('play-btn1').onclick = function() {
   document.getElementById('video-popup').classList.add('active');
}
document.getElementById('close').onclick = function() {
   document.getElementById('video-popup').classList.remove('active');
}
 //end video