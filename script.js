// DOM - Document Object Model

// window - object window browser
//   1. document - object document
//   2. BOM - Browser Object Model
//   3. JavaScript - objects, functions, arrays, strings, numbers, booleans


// BOM - Browser Object Model
// додаткові об'єкти в браузері
// 1. navigator - об'єкт браузера про операційну систему і сам браузер
// 2. location - URL адресу поточної сторінки

// console.log(navigator)
// console.log(location)
// console.log(window)

// console.log(document)

// console.log(document.documentElement) // <html>
// console.log(document.body) // <body>
// console.log(document.head) // <head>
// console.log(document.title) // title

// Дочірні елементи(діти) - всередині елемента (в HTML - BODY i HEAD)
// Нащадки - всі елементи в HTML

// console.log(document.body.children) // масив елементів

// console.log(document.body.childNodes) // масив елементів
// console.log(document.body.firstChild) // перший елемент
// console.log(document.body.lastChild) // останній елемент

// console.log(document.body.firstElementChild) // перший елемент
// console.log(document.body.lastElementChild) // останній елемент

// const childrenOne = document.body.children[1]

// console.log(document.body.children[1]) // елемент з номером 1
// console.log(childrenOne.previousElementSibling) // елемент з номером 0
// console.log(childrenOne.nextElementSibling) // елемент з номером 2
// console.log(childrenOne.parentElement) // повертає батьківський елемент

// InnerHTML - все всередині елемента
// console.log(childrenOne.innerHTML)

// TextContent - текст всередині елемента
// console.log(childrenOne.textContent)

// InnerText - текст всередині елемента
// console.log(childrenOne.innerText)

// childrenOne.innerHTML = '<h1>Hello</h1>'


// Пошук елементів

// getElementById - пошук елемента за ідентифікатором
// console.log(document.getElementById('span'))

// getElementsByClassName - пошук елементів за класом
// console.log(document.getElementsByClassName('container'))

// getElementByTagName - пошук елементів за тегом
// console.log(document.getElementsByTagName('li'))


// getElementByName - пошук елементів за назвою
// console.log(document.getElementsByName('first_name'))

// querySelector - пошук елементів за класом
// console.log(document.querySelector('.container')) // перший елемент

// querySelectorAll - пошук елементів за класом
// console.log(document.querySelectorAll('ul.list > li.list-item')) // масив елементів

const container = document.querySelector('.container')
// background-color: #f5f5f5; - CSS
// backgroundColor: #f5f5f5; - JS
container.style.width = '100px'
container.style.height = '100px'
container.style.backgroundColor = 'yellow'
container.style.borderRadius = '50%'
container.style.border = '1px solid black'

const link = document.getElementById('link')
link.innerHTML = 'google.com'
link.href = 'https://google.com'
link.target = '_blank'
link.style.fontSize = '20px'
link.style.color = 'red'

// Elem.matches - перевіряє чи є елемент за класом - true/false
// console.log(container.matches('.container'))
// console.log(link.matches('#link'))

// Elem.closest - шукає предка елемента за класом
// console.log(document.querySelector('li.list-item').closest('ul'))

// Створення елементів
// createElement - створює елемент
// createTextNode - створює текстовий елемент
// appendChild - додає елемент в кінець елемента
// prependChild - додає елемент в початок елемента

// const node = document.createElement('li')
// const textNode = document.createTextNode('Li element from JS')
// node.appendChild(textNode)
// document.querySelector('ul.list').appendChild(node)
// document.querySelector('ul.list').prepend(node)

// const liList = document.querySelectorAll('li.list-item')
// console.log(liList.push(node)) // DONT DO THIS

// for (let i = 0; i < liList.length; i++) {
//   liList[i].style.color = 'orange'
// }



