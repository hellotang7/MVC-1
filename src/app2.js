import './app2.css'
import  $ from "jquery"

const $bar = $("#app2 .tab-bar")
const $content = $("#app2 .tab-content")

$bar.on("click","li",(e)=>{
    const $li = $(e.currentTarget);

    const index = $li.index();


    $content
        .children()
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active')

})