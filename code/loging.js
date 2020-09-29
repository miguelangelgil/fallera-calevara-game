
Vue.component('header', {
  template: '<!DOCTYPE html>' +
  '<html lang="en">' +
  
  '<head>' +
      '<meta charset="UTF-8">' +
      '<meta name= "viewport" content= "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />' +
      '<title>Fallera Calavera</title>'+
      '<link rel="stylesheet" href="./lib/Boostrap.css">' +
      '<link rel="stylesheet" href="./styles/styles.css">' +
      '<script src="./lib/JQuery.js"></script>' +
      '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>' +
      '<!-- development version, includes helpful console warnings -->' +
      '<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>' +    
  '</head>' +
  '<body>'
});

var app = new Vue({
    el: '#app',
    data: {
      mane_owner : 'name_owner',
      name_player : 'name_player',
      id_room : 'id_room',
    },
    methods:{
      button_new_room: function(){
        alert("pene");
        var name = this.name_owner;
        new_room(name);
      },
      button_join: function(){
        var name = this.name_player;
        var room = this.id_room;
        join_room(room,name);

      }
      

    }


  });