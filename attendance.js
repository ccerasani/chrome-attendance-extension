console.log('hello!')


function addDropdown(){
    const dropdown = document.querySelector('#update-all-dropdown')



if ( dropdown ) {
    const added_option = document.querySelector('#added')
    if (added_option) {
        return;
    }

    const option = document.createElement('option');
    option.text = 'Update Empty Records to Absent, Excused';
    option.value = 'E';
    option.id = 'added'
    dropdown.add(option)
    console.log('the dropdown was found!')

}

}

window.setInterval(addDropdown, 2000);



