// Переделайте тестовое так, чтобы в нем было доступно три функции:

// * без манипуляций с DOM
// * принимает исходные данные, а не генерируют их внутри себя (можно это делать за пределами функции)
// * возвращают результат в том формате, в котором требует задача.

//====================================================================//
//  task 1
//====================================================================//

function fit_the_condition(sourceArray) {
  //массив для хранения результатов
  let resultArray = new Array();
  //пройти циклом по всем елементам кроме последних двух
  for (let i = 0; i < sourceArray.length - 2; i++) {
    if (
      (sourceArray[i] > sourceArray[i + 1] &&
        sourceArray[i + 1] < sourceArray[i + 2]) ||
      (sourceArray[i] < sourceArray[i + 1] &&
        sourceArray[i + 1] > sourceArray[i + 2])
    ) {
      //если соответствует условиям задачи, добавить 1
      resultArray.push(1);
    } else {
      //если не соответствует условиям задачи, добавить 0
      resultArray.push(0);
    }
  }
  return resultArray;
}

//====================================================================//
//  task 2
//====================================================================//

function determine_numbers_in_matrix(matrix) {
  //массив для хранения результатов
  let results = new Array();
  //массив для сравнения
  const templateArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //вспомогательный массив
  var tempArr = new Array();
  //определяем количество столбцов в матрице
  column = matrix[0].length;

  //пройти циклами по всем участкам 3*3
  let total = column - 2;
  let countFrom = 0;
  do {
    let countTo = countFrom + 3;

    //проход по одному участку 3*3
    for (let i = 0; i < 3; i++) {
      for (let j = countFrom; j < countTo; j++) {
        //поместить все элементы участка во временный массив
        tempArr.push(matrix[i][j]);
      }
    }

    //отсортировать временный массив
    tempArr.sort();

    //сравнить временный массив с шаблонным
    if (JSON.stringify(tempArr) == JSON.stringify(templateArr)) {
      //соответствует условиям
      results.push(true);
    } else {
      //не соответствует условиям
      results.push(false);
    }

    tempArr.length = 0;

    countFrom++;
  } while (countFrom < total);

  return results;
}

//====================================================================//
//  task 3
//====================================================================//

function format_text(strings, formats, limit) {
  //создаем массив для форматированного вывода
  var formatedText = new Array();
  //переменная для подсчета длины элементов в строке
  var stringLength = 0;
  //переменная для временной форматированной строки
  var formatedString = new Array();

  //перебираем строки
  for (let i = 0; i < strings.length; i++) {
    //перебираем слова в строках
    for (let j = 0; j < strings[i].length; j++) {
      //определяем какой будет размер строки после добавления нового слова
      stringLength += strings[i][j].length;

      //если лимит не будет достигнут или превышен
      if (stringLength < limit) {
        //добавляем слово в строку
        formatedString.push(strings[i][j]);

        //добавляем пробел после слова
        formatedString.push(" ");
        stringLength++;

        //если лимит будет достигнут
      } else if (stringLength == limit) {
        //добавляем слово в строку
        formatedString.push(strings[i][j]);

        //добавляем * в начало/конец строки
        formatedString.push("*");
        formatedString.unshift("*");

        //добавляем заполненную строку в массив вывода
        formatedText.push(formatedString);

        //обнуляем переменные для перехода на новую строку
        stringLength = 0;
        formatedString = [];

        //если лимит будет превышен
      } else {
        if (formats[i] == "LEFT") {
          //убрать пробел спереди
          let shifted = formatedString.shift();
          if (shifted != " ") {
            formatedString.unshift(shifted);
          }
        }
        if (formats[i] == "RIGHT") {
          //убрать пробел сзади
          let popped = formatedString.pop();
          if (popped != " ") {
            formatedString.push(popped);
          }
        }

        //определяем незаполненное пространство в строке
        let emptySpace = Number(limit) - formatedString.join("").length;
        //создаем массив пробелов для заполнения пустого пространства
        let tempArr = new Array(emptySpace);
        tempArr.fill("&nbsp;");
        let tempArr2 = tempArr.join("");

        //добавляем массив с пробелами в начало или в конец в зависимости от условий форматирования
        if (formats[i] == "LEFT") {
          formatedString.push(tempArr2);
        }
        if (formats[i] == "RIGHT") {
          formatedString.unshift(tempArr2);
        }

        //добавляем * в начало/конец строки
        formatedString.push("*");
        formatedString.unshift("*");

        //добавляем отформатированную строку в массив вывода
        formatedText.push(formatedString);

        //обнуляем переменные для перехода на новую строку и добавляем текущее слово
        formatedString = [];
        stringLength = 0;

        formatedString.push(strings[i][j]);
        formatedString.push(" ");
        stringLength = 0;
        stringLength += strings[i][j].length;
        stringLength++;
      }
    }

    //когда достигли конца строки

    if (formats[i] == "LEFT") {
      //убрать пробел спереди
      let shifted = formatedString.shift();
      if (shifted != " ") {
        formatedString.unshift(shifted);
      }
    }
    if (formats[i] == "RIGHT") {
      //убрать пробел сзади
      let popped = formatedString.pop();
      if (popped != " ") {
        formatedString.push(popped);
      }
    }

    //определяем незаполненное пространство в строке
    var emptySpace = Number(limit) - formatedString.join("").length;
    if (emptySpace != Number(limit) && emptySpace > 0) {
      //создаем массив пробелов для заполнения пустого пространства
      let tempArr = new Array(emptySpace);
      tempArr.fill("&nbsp;");
      let tempArr2 = tempArr.join("");

      //добавляем массив с пробелами в начало или в конец в зависимости от условий форматирования
      if (formats[i] == "LEFT") {
        formatedString.push(tempArr2);
      }
      if (formats[i] == "RIGHT") {
        formatedString.unshift(tempArr2);
      }
    }

    //добавляем * в начало/конец строки
    formatedString.push("*");
    formatedString.unshift("*");

    //добавляем отформатированную строку в массив вывода
    formatedText.push(formatedString);

    //обнуляем переменные для перехода на новую строку
    formatedString = [];
    stringLength = 0;
  }

  //массив * для вставки в начало и конец вывода
  let decorLength = Number(limit) + 2;
  let decorArr = new Array(decorLength);
  decorArr.fill("*");
  formatedText.push(decorArr);
  formatedText.unshift(decorArr);

  return formatedText;
}
