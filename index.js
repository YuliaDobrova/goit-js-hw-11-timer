class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    const timerEl = document.querySelector(selector);
    this.daysEl = timerEl.querySelector('[data-value="days"]');
    this.hoursEl = timerEl.querySelector('[data-value="hours"]');
    this.minsEl = timerEl.querySelector('[data-value="mins"]');
    this.secsEl = timerEl.querySelector('[data-value="secs"]');
    this.startCountDownTimer();
  }

  startCountDownTimer() {
    setInterval(() => {
      const currentTime = Date.now();
      const differenceTime = this.targetDate.getTime() - currentTime;
      const displayTime = this.getTimeValue(differenceTime);
      this.updateTimeValue(displayTime);
    }, 1000);
  }

  getTimeValue(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  updateTimeValue({ days, hours, mins, secs }) {
    this.daysEl.textContent = days;
    this.hoursEl.textContent = hours;
    this.minsEl.textContent = mins;
    this.secsEl.textContent = secs;
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Sep 01, 2021"),
});
