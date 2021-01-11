let app = new Vue ({

  el: ".cds-container",

  data: {
    discList: [],
  },

  mounted() {
    for(let i = 0; i < 10; i++){
      axios('https://flynn.boolean.careers/exercises/api/array/music')
        .then(response => {
          this.discList.push(response.data.response[i]);  
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
    console.log(this.discList)
  }
  
})