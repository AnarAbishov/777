$(Document).ready(function(){
    $(".col-1 li").click(function(){
        $(this).addClassList("active");
        $(".col-11 p").toggle("Home Tab")
    })
})