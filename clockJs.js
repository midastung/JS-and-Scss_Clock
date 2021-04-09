renderClockUnit = () => {
    const unit_wrap = document.querySelector('.scale'); // 父元素 DOM
    let deg = 180;                                      //刻度的旋轉角度，180度為12時的位置
    let twelve_hours = 0;    // 十二時制
    let twenty_hours = 12;   // 二十四時制
    let time_deg = 180;


    for (let i = 0; i < 60; i++) {
        const unit = document.createElement('div'); // 創造刻度DOM
        unit.classList.add('scale__unit');

        // 小時的刻度處理
        if (i % 5 == 0) {
            unit.style.transform = `rotate(${deg}deg) translateY(110px)`;
            //時鐘數字
            unit.innerHTML = `
                <span class="twelve" style="transform:rotate(${time_deg}deg)">${i == 0 ? 12 : twelve_hours}</span>
                <span class="twenty" style="transform:rotate(${time_deg}deg)">${i == 0 ? 24 : twenty_hours}</span>
            `
            time_deg -= 30     //每小時間隔5個小刻度，每個小刻度為6度，因此一次迴圈需要將角度減去 5*6=30 度。
            twelve_hours++;
            twenty_hours++;
            // 其他刻度處理
        } else {
            unit.style.transform = `rotate(${deg}deg) translateY(120px)`;
        }
        deg += 6;
        unit_wrap.appendChild(unit);
    }
}

setDate = () => {
    //選取DOM元件
    const hour_hand = document.querySelector('.hand-hour');
    const min_hand = document.querySelector('.hand-min');
    const sec_hand = document.querySelector('.hand-sec');
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    const sec_deg = sec * 6 - 180;
    const min_deg = min * 6 + sec * 6 / 60 - 180
    const hour_deg = (hour * 30 + min * 30 / 60) - 180
    sec_hand.style.transform = `rotate(${sec_deg}deg)`;
    min_hand.style.transform = `rotate(${min_deg}deg)`;
    hour_hand.style.transform = `rotate(${hour_deg}deg)`;

}

runClock = () => {
    renderClockUnit();
    setInterval(setDate, 1000)
}

runClock()

