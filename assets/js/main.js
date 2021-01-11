let app = new Vue ({

  el: "#wrapper",

  data: {
    discList: [],
    selectedGenre: "",
    visible: true,
  },

  methods: {
    chooseGenre () {
      console.log(this.selectedGenre);
      this.discList.forEach(elem => {
        if(this.selectedGenre !== "All"){
          if(elem.genre === this.selectedGenre){
            elem.visible = true;
          } else {
            elem.visible = false;
          }
        } else {
          elem.visible = true;
        }
    
      })
    }
  },

  mounted() {
      axios('https://flynn.boolean.careers/exercises/api/array/music')
        .then(response => {
          this.discList = response.data.response;  
          this.discList.forEach(elem => {
            elem.visible = this.visible;
          })
          console.log(this.discList)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
})