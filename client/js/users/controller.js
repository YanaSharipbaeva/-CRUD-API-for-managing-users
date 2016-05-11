'use strict';

function Controller () { 
    var $main = $('.main'),
        $body = $('body');

    this.userListView = new UserListView();
    $main.append(this.userListView.render().$el);
    
    m.subscribe('Users: create-request', createUser, false);
    m.subscribe('Users: edit-request', editUser, false);
    m.subscribe('Users: info-request', showUserInfo, false);
    m.subscribe('Users: removeForm', removeModal, false);
    

    function createUser (users) {
        var createEditView = new CreateEditView({ 
            collection: users
        });
        $main.append(createEditView.renderCreateForm().$el);
    };

    function editUser (user) {
        var createEditView = new CreateEditView({ 
            model: user
        });

        $main.append(createEditView.renderEditForm().$el);
    };

    function removeModal () {
        $body.removeClass('modal-open');
        $('.modal-backdrop').remove();
    };

    function showUserInfo (user) {
        var userInfoView = new UserInfoView({
            model: user
        });
        $main.append(userInfoView.render().$el);
    };


return this;
}
