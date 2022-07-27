export default class DashboardLogic {
  static initIndicatorPosition(width: number) {
    const hour = this.calculateHourPosition(width);
    let minutes = this.calculateMinutePosition(width);

    return hour + minutes;
  }

  static calculateHourPosition(width: number) {
    let distance = 0;
    const widthOffset = width + 4;

    switch (new Date().getHours()) {
      case 8:
        distance = 0;
        break;
      case 9:
        distance = widthOffset;
        break;
      case 10:
        distance = widthOffset * 2;
        break;
      case 11:
        distance = widthOffset * 3;
        break;
      case 12:
        distance = widthOffset * 4;
        break;
      case 13:
        distance = widthOffset * 5;
        break;
      case 14:
        distance = widthOffset * 6;
        break;
      case 15:
        distance = widthOffset * 7;
        break;
      case 16:
        distance = widthOffset * 8;
        break;
      case 17:
        distance = widthOffset * 9;
        break;
      case 18:
        distance = widthOffset * 10;
        break;
    }

    return distance;
  }

  static calculateMinutePosition(width: number) {
    let distance = 0;
    const realwidth = width / 12;
    const widthDistance = realwidth + 4;
    const minutes = new Date().getMinutes();

    if (minutes >= 5 && minutes <= 10) {
      distance = widthDistance;
    } else if (minutes >= 11 && minutes <= 15) {
      distance = widthDistance * 2;
    } else if (minutes >= 16 && minutes <= 20) {
      distance = widthDistance * 3;
    } else if (minutes >= 21 && minutes <= 25) {
      distance = widthDistance * 4;
    } else if (minutes >= 26 && minutes <= 30) {
      distance = widthDistance * 5;
    } else if (minutes >= 31 && minutes <= 35) {
      distance = widthDistance * 6;
    } else if (minutes >= 36 && minutes <= 40) {
      distance = widthDistance * 7;
    } else if (minutes >= 41 && minutes <= 45) {
      distance = widthDistance * 8;
    } else if (minutes >= 46 && minutes <= 50) {
      distance = widthDistance * 9;
    } else if (minutes >= 51 && minutes <= 55) {
      distance = widthDistance * 10;
    } else if (minutes >= 56 && minutes <= 60) {
      distance = widthDistance * 11;
    }
    return distance;
  }
}
