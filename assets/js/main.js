let app = new Vue ({

  el: "#wrapper",

  data: {
    discList: [],
    selectedGenre: "",
  },

  methods: {
    chooseGenre () {
      console.log(this.selectedGenre);
      if(this.selectedGenre = "all"){
        console.log("ciao");
        return this.discList
      } 
    }
  },

  mounted() {
      axios('https://flynn.boolean.careers/exercises/api/array/music')
        .then(response => {
          this.discList = response.data.response;  
          console.log(this.discList)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
})