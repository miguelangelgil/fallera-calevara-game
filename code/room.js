var name_room = document.getElementById("name_room");
var players;
//Crea una nueva sala en el servidor
function new_room(player_name)
{

    const room_code = new Date().getMilliseconds() * 1000 + new Date().getSeconds();
    db.ref('rooms/' + room_code).set({
        owner : player_name,
        players :{
            player_name
        }

    });
    window.location = "";
}

//busca una sala en el servidor y añade a un jugador
function join_room(id_room, player_name)
{
    db.ref('rooms/'+ id_room + '/players/').push( player_name);
}

