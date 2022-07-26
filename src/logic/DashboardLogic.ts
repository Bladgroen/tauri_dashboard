export default class DashboardLogic {
  static initIndicatorPosition(width: number) {
    const hour = this.calculateHourPosition(width);
    let minutes = this.calculateMinutePosition(width);
    console.log("hours", hour);
    console.log("minutes", minutes);
    if (hour === 0) {
      minutes = 0;
    }

    return hour + minutes;
  }

  static calculateHourPosition(width: number) {
    let distance = 0;
    switch (new Date().getHours()) {
      case 8:
        distance = 0;
        break;
      case 9:
        distance = width;
        break;
      case 10:
        distance = width * 2;
        break;
      case 11:
        distance = width * 3;
        break;
      case 12:
        distance = width * 4;
        break;
      case 13:
        distance = width * 5;
        break;
      case 14:
        distance = width * 6;
        break;
      case 15:
        distance = width * 7;
        break;
      case 16:
        distance = width * 8;
      case 17:
        distance = width * 9;
        break;
      case 18:
        distance = width * 9;
        break;
    }

    return distance;
  }

  static calculateMinutePosition(width: number) {
    let distance = 0;
    const widthDistance = width / 12;
    const minutes = new Date().getMinutes();

    if (minutes > 5 && minutes < 10) {
      distance = widthDistance;
    } else if (minutes > 10 && minutes < 15) {
      distance = widthDistance * 2;
    } else if (minutes > 15 && minutes < 20) {
      distance = widthDistance * 3;
    } else if (minutes > 20 && minutes < 25) {
      distance = widthDistance * 4;
    } else if (minutes > 25 && minutes < 30) {
      distance = widthDistance * 5;
    } else if (minutes > 30 && minutes < 35) {
      distance = widthDistance * 6;
    } else if (minutes > 35 && minutes < 40) {
      distance = widthDistance * 7;
    } else if (minutes > 40 && minutes < 45) {
      distance = widthDistance * 8;
    } else if (minutes > 45 && minutes < 50) {
      distance = widthDistance * 9;
    } else if (minutes > 50 && minutes < 55) {
      distance = widthDistance * 10;
    } else if (minutes > 55 && minutes < 60) {
      distance = widthDistance * 11;
    }
    console.log(distance);
    return distance;
  }
}
