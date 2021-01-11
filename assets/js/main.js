let app = new Vue ({
  
  el: ".container",

  data: {
    discList: [],
  },

  mounted() {
    for(let i = 0; i < 10; i++){
      axios('https://flynn.boolean.careers/exercises/api/array/music')
        .then(function (response) {
          console.log(response.data.response);
          this.discList.push(response.data.response);
          console.log(this.discList)
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  }
  
})