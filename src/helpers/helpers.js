export const hexToRGB = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

// will be funсtion for get Day name with luxon
export const getDaysName = (date, isRead) => {
    
    if (date === 'Сегодня, 10:50' ) {
        if (isRead) {
            return 'новое'
        }
        return 'сегодня'
    } else  {
        return 'вчера'
    }
}