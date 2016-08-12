$(function () {
    $("#header").load("header.html");
});

$(window).scroll(function () {
    $(".slideanim").each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide");
        }
    });
});

$(function () {
    $(window).stellar();

});

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[4];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Get all images and insert the clicked image inside the modal
    // Get the content of the image description and insert it inside the modal image caption
    var images = document.getElementsByClassName("works-image");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var i;
    for (i = 0; i < images.length; i++) {
        images[i].onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            captionText.innerHTML = this.nextElementSibling.innerHTML;
        }
    }


//Add Google Map
var myCenter = new google.maps.LatLng(50.06465009999999, 19.94497990000002);

function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 12,
        scrollwheel: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var marker = new google.maps.Marker({
        position: myCenter,
    });

    marker.setMap(map);

    //Make map and marker responive
    google.maps.event.addDomListener(window, "resize", function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);




//Comment's forms
function getUserName() {
    var nameField = document.getElementById('nameField').value;
    var emailField = document.getElementById('emailField').value;
    var commentField = document.getElementById('commentField').value;
    var result = document.getElementById('result');

    if (nameField == "" || emailField == "" || commentField == "") {
        result.textContent = 'Please fill up all the forms';        
    } else {
        result.textContent = 'Thank you, ' + nameField + '.' + ' Your message has been successfully sent.';
    }
}
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getUserName, false);



//Overlayers
function buttonWindow() {
    var buttonModal = document.getElementById('buttonModal');
    var closespane = document.getElementsByClassName("close")[0];       
    closespane.onclick = function () {
        buttonModal.style.display = "none";
    }      
    buttonModal.style.display = "block";       
}

function buttonWindow2() {
    var buttonModal = document.getElementById('buttonModal2');
    var closespane = document.getElementsByClassName("close")[1];
    closespane.onclick = function () {
        buttonModal.style.display = "none";
    }
        buttonModal.style.display = "block";
}

function buttonWindow3() {
    var buttonModal = document.getElementById('buttonModal3');
    var closespane = document.getElementsByClassName("close")[2];
    closespane.onclick = function () {
        buttonModal.style.display = "none";
    }
    buttonModal.style.display = "block";
}

function buttonWindow4() {
    var buttonModal = document.getElementById('buttonModal4');
    var closespane = document.getElementsByClassName("close")[3];
    closespane.onclick = function () {
        buttonModal.style.display = "none";
    }
    buttonModal.style.display = "block";
}

function Registration() 
{
    var pressRegister = document.getElementById('sign-up-submit-btn');    
    pressRegister = alert("Thank you for registration!"); 
}

function Subscribe() {
    var pressSubscribe = document.getElementById('subscribe-btn');
    pressSubscribe = alert("Thank you for subscribing!");
}


