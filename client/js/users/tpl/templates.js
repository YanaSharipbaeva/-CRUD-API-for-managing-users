'use strict';

var tmp = (function () {

    //template of an edit-form
    var editForm = '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
      '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
            '<p class="formTitle">User Information</p>' + 
            '<p class="userField">Fistname:</p><input value= "<%= name %>" name="name" class="name">' +
            '<p class="userField">Lastname:</p><input value= "<%= surname %>" name="surname" class="surname"></br>' +
            '<p class="userField">Age:</p><input value= "<%= age %>" name="age" class="age">' +
            '<p class="userField">Location:</p><input value= "<%= location %>" name="location" class="location"></br>' +
            '<input type="button" class="saveEditedInfo btn btn-success" value="Save" data-dismiss="modal" aria-label="Close">' +
            '<input type="button" class="cancelButton btn btn-danger" data-dismiss="modal" aria-label="Close" value="Cancel">' 
        '</div>' +
      '</div>' +
    '</div>';


    //template of an create-form
    var createForm = '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
      '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
            '<p class="formTitle">User Information</p>' + 
            '<p class="userField">Fistname:</p><input  name="name" class="name">' +
            '<p class="userField">Lastname:</p><input value="" name="surname" class="surname"></br>' +
            '<p class="userField">Age:</p><input value= "" name="age" class="age">' +
            '<p class="userField">Location:</p><input value= "" name="location" class="location"></br>' +
            '<input type="button" class="saveButton btn btn-success" data-dismiss="modal" aria-label="Close" value="Save">' +
            '<input type="button" class="cancelButton btn btn-danger" data-dismiss="modal" aria-label="Close" value="Cancel">' 
        '</div>' +
      '</div>' +
    '</div>';

    var userInfo = '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                      '<div class="modal-dialog" role="document">' +
                        '<div class="modal-content">' +
                            '<button type="button" class="close closeInfo" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                            '<div class="photo"><img src="<%= photo %>"</div>' +
                            '<p class="formTitle">User Information:</p>' + 
                            '<p class="userField">Fistname: <%= name %></p>' +
                            '<p class="userField">Lastname: <%= surname %></p>' +
                            '<p class="userField">Age: <%= age %></p>' +
                            '<p class="userField">Location: <%= location %></p></br>' 
                        '</div>' +
                      '</div>' +
                    '</div>';
    var paginator = 
        '<nav>' +
            '<ul class="pagination">' +
                '<li class="previous"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>' +
                '<li class="next"><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>' +
            '</ul>' +
        '</nav>';

    return {
        createForm: createForm,
        editForm: editForm,
        userInfo: userInfo,
        paginator: paginator
    }
    
})();


