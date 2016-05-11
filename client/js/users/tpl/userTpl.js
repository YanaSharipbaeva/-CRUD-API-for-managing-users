var userTemplates = (function () {
	var userTpl = '<p><span class="usersName" data-toggle="modal" data-target="#myModal"><%= name %> <%= surname %></span> ' +
    '<span class="buttonsHolder">' +
    	'<button class=" editBtn" data-toggle="modal" data-target="#myModal">' +
            '<i class="glyphicon glyphicon-edit"></i>' +
        '</button> ' +
        ' <button class="deleteBtn" >' +
            '<i class="glyphicon glyphicon-remove-circle"></i>' +
        '</button>' +
    '</span></p>';

    var userListTpl = '<button class=" addBtn" data-toggle="modal" data-target="#myModal">' +
                          '<i class="glyphicon glyphicon-plus-sign"></i>' +
                      '</button>';	
    return {
        userTpl: userTpl,
        userListTpl: userListTpl

    }
})();
