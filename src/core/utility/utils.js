export const createArrayByLength = (length, staticValue = "##") => {
  const arr = [];
  if (length === 1) {
    return [null];
  }
  for (let i = 0; i < length; i++) {
    arr.push(staticValue);
  }

  return arr;
};

export const just_persian = (str) => {
  var p = /^[\u0600-\u06FF\s]+$/;

  if (!p.test(str)) return false;
  else return true;
};
export const hasPersianCharacter = (str) => {
  const symbols = [" ", ".", "-", "_", "=", ")", "(", ",", "<", ">", "?"];
  let hasPersian = false;

  str.split("").every((char) => {
    if (!symbols.includes(char)) {
      if (just_persian(char)) {
        hasPersian = true;
        return false;
      }
    }
    return true;
  });

  return hasPersian;
};

export const now = () => {
  let convertedDate = new Date().toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return convertedDate;
};

export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const formatPrice = (number) => {
  if (number.toString().length > 3) {
    let arr2 = [];
    let arr = number.toString().split("");

    let addedLength = 0;

    if (arr.length % 3 !== 0) {
      arr.unshift("0");

      addedLength += 1;

      if (arr.length % 3 !== 0) {
        arr.unshift("0");
        addedLength += 1;
      }
    }

    arr.forEach((item, index) => {
      if (index !== 0 && index % 3 === 0 && index !== arr.length - 1) {
        arr2.push(",");
        arr2.push(item);
      } else {
        arr2.push(item);
      }
    });

    if (addedLength > 0) arr2.splice(0, addedLength);

    let str = "";
    arr2.forEach((item) => {
      str += item.toString();
    });

    return str;
  } else {
    return number;
  }
};

// calculateDiff

export const calculateDiff = (to) => {
  const toDate = new Date(to).getTime();
  var fromDate = new Date().getTime();
  var distance = toDate - fromDate;

  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    timeLeft: distance,
    d,
    h,
    m,
    s,
  };
};
