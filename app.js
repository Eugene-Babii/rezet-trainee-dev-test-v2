$(document).ready(function () {
  //====================================================================
  //  CASE #1
  //====================================================================

  var inputs = new Array(); //массив для хранения исходных данных
  var resultsTask1 = new Array(); //массив для хранения результатов задачи 1
  $("#btnAnalyze1").attr("disabled", true); //кнопка анализировать не активна при пустом массиве

  //
  //наполняем массив пользовательскими данными
  //

  $("#btnAdd1").click(function () {
    //проверяем случаи, если пользователь ничего не ввел
    if ($("#inputNumber1").val() == "") {
      return;
    } else {
      //добавляем в массив данные пользователя
      inputs.push($("#inputNumber1").val());
      //преобразовать массив в строку и вывести
      $("#sourceArray1").html(inputs.join());
      //очистить поле ввода
      $("#inputNumber1").val("");
    }

    //если в массиве менее 3 элементов кнопка анализировать будет не активна
    if (inputs.length < 3) {
      $("#btnAnalyze1").attr("disabled", true);
    } else {
      $("#btnAnalyze1").attr("disabled", false);
    }
  });

  //
  //анализируем массив согласно условиям задачи
  //

  $("#btnAnalyze1").click(function () {
    //обнулить массив перед наполнением
    resultsTask1.length = 0;
    $("#result1").html(resultsTask1.join());

    //вызываем функцию для обработки
    resultsTask1 = fit_the_condition(inputs);

    //вывести результаты
    $("#result1").html(resultsTask1.join());
  });

  //
  //очищаем массивы
  //

  $("#btnClear1").click(function () {
    inputs.length = 0;
    $("#sourceArray1").html(inputs.join());
    $("#inputNumber1").val("");
    $("#btnAnalyze1").attr("disabled", true);
    resultsTask1.length = 0;
    $("#result1").html(resultsTask1.join());
  });

  //====================================================================
  //  CASE #2
  //====================================================================

  var column; //переменная для ввода пользователем размера матрицы
  var matrix = new Array(3); //матрица для наполнения
  var resultsTask2 = new Array(); //массив для хранения результатов задачи 2

  $("#btnAnalyze2").attr("disabled", true); //кнопка анализа не доступна когда матрица не создана

  //
  //создаем матрицу
  //

  $("#btnAdd2").click(function () {
    //предварительная очистка
    $("#matrix").html("");
    resultsTask2.length = 0;
    $("#result2").html(resultsTask2.join());

    //проверяем случаи, если пользователь ничего не ввел
    if ($("#inputNumber2").val() == "" || $("#inputNumber2").val() < 3) {
      alert("Вы ввели не верное значение N!");
      return;
    } else {
      //получаем данные от пользователя
      column = $("#inputNumber2").val();
      //создаем матрицу
      for (let i = 0; i < 3; i++) {
        matrix[i] = new Array(column);
        for (let j = 0; j < column; j++) {
          //заполняем матрицу случайными числами от 1 до 9
          matrix[i][j] = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
        }
      }
    }

    //матрица из условий задачи (для ручной проверки)
    // matrix = [
    //   [1, 2, 3, 2, 7],
    //   [4, 5, 6, 8, 1],
    //   [7, 8, 9, 4, 5],
    // ];
    // column = 5;

    //вывести матрицу на экран
    $("#matrix").append("<table>");
    for (let i = 0; i < 3; i++) {
      $("#matrix").append("<tr>\r\n");
      for (let j = 0; j < column; j++) {
        $("#matrix").append("<td>" + matrix[i][j] + "&nbsp" + "</td>");
      }
      $("#matrix").append("</tr>\r\n");
    }
    $("#matrix").append("</table>\r\n<br>\r\n");

    //активировать кнопку анализа
    $("#btnAnalyze2").attr("disabled", false);
  });

  //
  //анализируем матрицу согласно условиям задачи
  //

  $("#btnAnalyze2").click(function () {
    //обнулить массив с результатами перед наполнением
    resultsTask2.length = 0;
    $("#result2").html(resultsTask2.join());

    //вызываем функцию для обработки
    resultsTask2 = determine_numbers_in_matrix(matrix);

    //вывести результаты
    $("#result2").html(resultsTask2.join());
  });

  //
  //очистить данные
  //

  $("#btnClear2").click(function () {
    $("#inputNumber2").val("");
    $("#btnAnalyze2").attr("disabled", true);
    $("#matrix").html("");
    resultsTask2.length = 0;
    $("#result2").html(resultsTask2.join());
  });

  //====================================================================
  // CASE #3
  //====================================================================

  var strings = new Array(); //массивы слов
  var formats = new Array(); //массив с условиями формативрования
  var limit; //лимит символов
  var countStrings = 0; //вспомогательная переменная
  var countFormats = 0;

  //
  //Добавляем строки в массив
  //

  $("#btnAddText3").click(function () {
    //проверяем случаи, если пользователь ничего не ввел
    if ($("#inputText3").val() == "") {
      return;
    } else {
      let string = $("#inputText3").val();
      let arr = string.split(", ");
      //   let arr = string.join();
      strings.push(arr);
      //   console.log(strings);
    }

    //вывести массив строк на экран
    $("#strings").html("");
    for (let i = 0; i < strings.length; i++) {
      $("#strings").append("<p>" + strings[i] + "</p>");
    }

    //очистить поле ввода
    $("#inputText3").val("");

    countStrings = strings.length;
    // console.log(countStrings);
  });

  //
  //Добавляем форматы в массив
  //

  $("#btnAddFormat3").click(function () {
    let format = $("#selectFormat3").val();
    if (!format) {
      return;
    } else {
      formats.push(format);
      countFormats = formats.length;
    }

    //вывести массив форматов на экран
    $("#formats").html("");
    for (let i = 0; i < formats.length; i++) {
      $("#formats").append("<p>" + formats[i] + "</p>");
    }
  });

  //
  //Добавляем лимит
  //

  $("#btnAddLimit3").click(function () {
    if ($("#inputLimit3").val() == "" || $("#inputLimit3").val() < 15) {
      alert("Вы ввели не верное значение лимита!");
      return;
    } else {
      limit = $("#inputLimit3").val();
    }

    //вывести лимит на экран
    $("#limit").html("");
    $("#limit").append("<p>" + limit + "</p>");
  });

  //
  //Форматируем текст
  //

  $("#btnFormat3").click(function () {
    //создаем массив для форматированного вывода
    var formatedText = new Array();
    //переменная для подсчета длины элементов в строке
    var stringLength = 0;
    //переменная для временной форматированной строки
    var formatedString = new Array();

    if (countStrings != countFormats) {
      alert("Количество форматов не соответствует количесву строк!!!");
      return;
    }

    //вызываем функцию для обработки
    formatedText = format_text(strings, formats, limit);

    //
    //вывести форматированный текст на страницу
    //
    $("#result3").html("");
    // $("#result3").append("<pre class='text-white'>" + decorArr2 + "</pre>");
    for (let i = 0; i < formatedText.length; i++) {
      $("#result3").append(
        "<pre class='text-white'>" + formatedText[i].join("") + "</pre>"
      );
    }
    // $("#result3").append("<pre class='text-white'>" + decorArr2 + "</pre>");
  });

  //
  //очистка
  //
  $("#btnClear3").click(function () {
    formatedString = [];
    formatedText = [];
    formats = [];
    stringLength = 0;
    strings = [];
    limit = 0;
    $("#result3").html("");
    $("#limit").html("");
    $("#strings").html("");
    $("#inputText3").val("");
    $("#formats").html("");
    $("#inputLimit3").val("");
  });
});
