//window.addEventListener('load'); - запускает скрипт  когда  все  загрузиться  в браузере

window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    function start(q, w, o) {
        let tab = document.querySelectorAll(q),
            info = document.querySelector(w),
            tabContent = document.querySelectorAll(o);

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) { // цыыкел скривает  контент  свзязан с табами
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) { // функция проверяет  на  наличее класа hide  если  он есть  удалят  и в ставляет другой 
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        info.addEventListener('click', function (event) {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) { // цыкл и функция  делает  ставнение  на даб который  мы  кликакем  должно добавляться  класс .shou
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    }
    start('.info-header-tab', '.info-header', '.info-tabcontent');



    //Timer

    let deadline = '2020-07-17';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.hours <= 9) {
                hours.textContent = "0"+t.hours;
            }

             if (t.minutes <= 9) {
                 minutes.textContent = "0" + t.minutes;
             }

            if (t.seconds <= 9) {
                seconds.textContent = "0" + t.seconds;
            }

            // function addZero(num) {
            //     if (num <= 9) {
            //         return '0' + num;
            //     } else return num;
            // };

            // hours.textContent = addZero(t.hours);
            // minutes.textContent = addZero(t.minutes);
            // seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);

  
});

