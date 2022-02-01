function Drop_down() {
    let Drop_down_list = document.getElementById('drop');
    if (Drop_down_list.style.display == "none") {

        Drop_down_list.style.display = 'block';
    } else {
        Drop_down_list.style.display = 'none';
    }
}
let i = 0;

function hide() {
    i++;
    if (i == 2) {
        let Drop_down_list = document.getElementById('drop');
        Drop_down_list.style.display = 'none';
        i = 0;
    }
}