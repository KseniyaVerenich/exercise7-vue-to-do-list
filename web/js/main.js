var storageKey = 'com.Kverenich.myToDos';
var myToDoStorage = {
  fetch: function () {
    var myToDos =
      JSON.parse(localStorage.getItem(storageKey) || '[]')
    myToDos.forEach(function (myToDo, index) {
      myToDo.id = index
    })
    myToDoStorage.uid = myToDos.length
    return myToDos
  },
  save: function (myToDos) {
    localStorage.setItem(storageKey, JSON.stringify(myToDos))
  }
}



var app = new Vue({
  el: '#app',
  data: {
    myToDos: myToDoStorage.fetch(),
    newToDos: "",
    tempToDos: [],
    counter: 0,




  },

  watch: {
    myToDos: {
      handler: function (myToDos) {
        myToDoStorage.save(myToDos)
      },
      deep: true
    }
  },


  methods: {
    addToDo() {

      if (this.newToDos != "") {

        this.newToDos.trim(this.newToDos),


          this.myToDos.push({
            id: myToDoStorage.uid++,
            title: this.newToDos,
           
            completed: false,

          });
        this.newToDos = "";
        this.counter++;
        this.tempToDos = this.myToDos;
      }
    },

    removeToDo(myToDo, index) {
      if (this.myToDos[index] === myToDo) {
        this.myToDos.splice(index, 1)

      } else {
        let found = this.myToDos.indexOf(myToDo)
        this.myToDos.splice(found, 1)
      }


      this.counter--;
    },


    allTasks() {

      this.tempToDos = this.myToDos;


    },

    completedTask() {

      this.tempToDos = this.myToDos.filter(myToDo => myToDo.completed == true);
    },

    activeTask() {

      this.tempToDos = this.myToDos.filter(myToDo => myToDo.completed == false);


    },

 


  },

  })








//this.myToDos.splice(this.myToDos.indexOf(myToDo), 1)