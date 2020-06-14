let timeline = document.getElementById('timeline');

let datesLeft = true;
let turn_right = true;
let universal_date_index = 0;
let current_article_index = 0;

let top_bp = document.getElementById("timeline_top_bp");
let mid_right_bp = document.getElementById("timeline_mid_right_bp");
let mid_left_bp = document.getElementById("timeline_mid_right_bp");

$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() >= $(document).height() - 200) {
        extendFile();
    }
})

function extendFile() {
    if(datesLeft){
        let cardsArray = [];
        let finished_top = createTop();
        if(global_article_list[universal_date_index].length > 4){

        } else{
            for(let i = 0; i < global_article_list[universal_date_index].length; i++){
                if(turn_right){
                    cardsArray.push(createRightMid());
                } else{
                    cardsArray.push(createLeftMid());
                }
                // cardsArray[i].getElementsByClassName("article-title");
                // cardsArray[i].getElementsByClassName("introductory-snippet");
                // cardsArray[i].getElementsByClassName("source-url");
                // cardsArray[i].getElementsByClassName("likesn-and-mentions")[0].innerText = `Likes: ${global_likes_array[universal_date_index][current_article_index]}, Appearances on #BlackLivesMatter: ${global_mntns_array[universal_date_index][current_article_index]}`;
                // cardsArray[i].getElementsByClassName("mid-node-image");
            }
        }
        // let clone = top_bp.cloneNode(true);
        // clone.id = global_dates_array[universal_date_index];
        //
        //
        //
        // timeline.appendChild(finished_timeline_item_top);
        // timeline.appendChild(finished_timeline_item_mid)
    }
}

//fucntion for creating a card on the right side of the screen
function createRightMid(){
    let mid_right_clone = mid_right_bp.cloneNode(true);
    mid_right_clone.id = "";
    mid_right_clone.style = "";
    return mid_right_clone;
}

//function for creating a card on the left side of the screen
function createLeftMid(){
    let mid_left_clone = mid_left_bp.cloneNode(true);
    mid_left_clone.id = "";
    mid_left_clone.style = "";
    return mid_left_clone;
}

//function for creating a pointer for the date
function createTop() {
    let top_clone = top_bp.cloneNode(true);
    top_clone.id = global_dates_array[universal_date_index];
    top_clone.style = "";
    return top_clone;
}

fetch('https://www.nytimes.com/2020/06/14/world/coronavirus-updates.html', {method: 'HEAD'});
