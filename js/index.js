/**
 * After closing the modal it will reset all changes that were done
 */
$('#signModal').on("hide.bs.modal", function () {
    $('#login-email').val("");
    $('#login-pwd').val("");
    $('.invalid-email').css('visibility', 'hidden');
    $('#login-error').css('visibility', 'hidden');
});

const accountEmail = "admin@gmail.com";
const accountPwd = "admin123";

/**
 * Logs in user:
 * Checks if the email address was correctly typed and if not throws an error message,
 * after that checks if the password and email address correspond to the correct one
 * If they don't match an error message is shown, and if it not the user is logged in
 */
$('#btn-login').click(function () {
    $('.invalid-email').css('visibility', 'hidden');
    $('#login-error').css('visibility', 'hidden');

    let email = $('#login-email').val();
    let pwd = $('#login-pwd').val();

    if (email.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === -1) {
        $('.invalid-email').css('visibility', 'visible');
        return false;
    }
    if (email !== accountEmail) {
        $('#login-error').css('visibility', 'visible');
        return false;
    }

    if (pwd !== accountPwd) {
        $('#login-error').css('visibility', 'visible');
        return false;
    }

    location.replace("html/index-login.html");
});

/**
 * After closing the modal it will reset all changes that were done
 */
$('#new-user').on("hide.bs.modal", function () {
    $('#register-email').val("");
    $('#register-pwd').val("");
    $('#pwd-confirm').val("");
    $('#user-name').val("");
    $('#username').val("");
    $('#status').val("");
    $('.invalid-email').css('visibility', 'hidden');
    $('#pwd-error').css('visibility', 'hidden');
});

/**
 * Checks if the typed password in the "password" field is the same as the "Verify password" field
 */
$('#pwd-confirm').keyup(function () {
    if ($('#register-pwd').val() !== $('#pwd-confirm').val())
        $('#pwd-error').css('visibility', 'visible');
    else
        $('#pwd-error').css('visibility', 'hidden');
});

/**
 * Register user:
 * Checks if the email address was correctly typed and if not throws an error message,
 * after that checks if the username is unique, and if it is creates a new account with
 * the typed information
 */
$('#btn-register').click(function () {
    $('.invalid-email').css('visibility', 'hidden');

    let email = $('#register-email').val();
    let name = $('#user-name').val();
    let username = $('#username').val();
    let status = $('#status').val();
    let pwd = $('#register-pwd').val();

    if (email.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === -1) {
        $('.invalid-email').css('visibility', 'visible');
        return false;
    }

    //TODO make request to server to check if username is unique and then create the user account

    location.replace("html/index-login.html");
});

/*
After selecting a file, it will save its name into the variable filename
 */
function getFileData(myFile) {
    let file = myFile.files[0];
    filename = file.name;
}

// activates the event listener of the element with the id "imageInput"
function chooseFile() {
    document.getElementById("imageInput").click();
}

/*
Loads a new file, selected by the user and presents it
 */
function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            $('#photo-preview').attr('src', e.target.result);
            $('#photo-preview').hide();
            $('#photo-preview').fadeIn(650);
        };
        reader.readAsDataURL(input.files[0]);
    }
}