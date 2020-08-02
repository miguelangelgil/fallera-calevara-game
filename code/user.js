class User
{
    constructor(_id, _alias = "Anon", _isAnonymus = true, _firebaseUser = {})
    {
        this.Id = _id;
        this.alias = _alias;
        this.firebaseUser = _firebaseUser;
        this.isAnonymus = _isAnonymus;
    }

    getDataToFirebase = function() {
        return { "Id": this.Id, "alias": this.alias, "isAnonymus": this.isAnonymus };
    }
}


/*
 * current user
 */
var currentUser = {};