$(document).ready(function(){

    function showModal(){
        $('#modal-container').show();
        $('html body').css('overflow','hidden');
    }

    function closeModal(){
        $('#modal-container').hide();
        $('html body').css('overflow', 'visible');
    }

    setTimeout(showModal,3000);

    document.getElementById("subscribe").addEventListener("click", closeModal());

    $('#close').click(function(){
        closeModal()
    })
    $('#subcribe').click(function(){
        closeModal()
    })
})

