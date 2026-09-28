var users = [
  {
    login: "user1",
    password: "123",
    name: "Алексей"
  },
  {
    login: "user2",
    password: "456",
    name: "Мария"
  },
  {
    login: "admin",
    password: "admin",
    name: "Иван"
  },
  {
    login: "guest",
    password: "111",
    name: "Ольга"
  },
  {
    login: "test",
    password: "000",
    name: "Анна"
  }
]
  
  var form = document.getElementById("loginForm")
  var message = document.getElementById("message")
  
  form.onsubmit = function(event) {
    event.preventDefault()
  
    var loginVal = document.getElementById("login").value
    var passVal = document.getElementById("password").value
  
    // поиск через метод find
    var user = users.find(function(u) {
      return u.login === loginVal && u.password === passVal
    })
  

    if (user) {
      message.className = "success"
      message.innerText = "Привет " + user.name
    } else {
      message.className = "error"
      message.innerText = "Неверный логин или пароль"
    }
  }
  
 
  function sumAll() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i]
    }
    return sum
  }
  

  console.log(sumAll(2, 5, 6, 7))
  console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
