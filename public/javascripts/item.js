$(function() {
    let name = $('input[name="item_count"]');
    $(".submit_button").click(function(e){
        if((name.val()) <= 0){
            alert("正しい個数を入力してください");
            e.preventDefault();
        };
    });
});