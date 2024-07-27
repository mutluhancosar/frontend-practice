function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("task").value;
    let t = document.createTextNode(inputValue);
  
    li.appendChild(t);
    if (inputValue.trim().length === 0) {
      showSnackbarErr();
    } else {
      document.getElementById("list").appendChild(li);
      showSnackbarSuccess();
    }
    document.getElementById("task").value = "";
  
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
      };
    }
  }
  // create span and 'X'
  let myNodelist = document.getElementsByTagName("li");
  for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
  // remove list items
  let close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
  
  // when clicking on a list item add a "checked" symbol
  let list = document.querySelector("ul");
  list.addEventListener(
    "click",
    function (ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );
  
  // shows success snackbars
  
  function showSnackbarSuccess() {
    let x = document.getElementById("snackbarSuccess");
    x.className = "show";
    setTimeout(() => {
      x.className = x.className.replace("show", "");
    }, 3000);
  }
  // shows error snackbars
  function showSnackbarErr() {
    let x = document.getElementById("snackbarErr");
    x.className = "show";
    setTimeout(() => {
      x.className = x.className.replace("show", "");
    }, 3000);
  }