CreateRoom = function ()
{
    let id = '' + new Date().valueOf();
    //data room 
    let room = 
    {
        roomId: this.id,
        users: {admin:{"user": currentUser.getDataToFirebase() }},
        admin: currentUser.id,
        date: new Date().valueOf()

    }

}