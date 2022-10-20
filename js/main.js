
// change theme

document.querySelector('.header .container .icon').addEventListener('click', _ => {
    document.querySelector('.app').classList.toggle('dark')
})

// clear all fields
function clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('desc').value = '';
}

// add todo
document.querySelector('.submit').addEventListener('click', event => {
    event.preventDefault();

    const title = document.getElementById('title').value,
          desc  = document.getElementById('desc').value;
    if( title === '' || desc === '' ) {
        swal({
            text: "Please fill in all fields",
            icon: "warning"
        });
    } else {

        swal({
            text: 'Done',
            icon: "success",
        });

        document.querySelector('.todo .container').innerHTML += `
        <div class="data">
            <h3 class="title">${title}</h3>
            <p class="desc">${desc}</p>
            <div class="actions">
                <i class='trash bx bxs-trash-alt'></i>
            </div>
        </div>
        `;
        
    
        clearFields(); // call the function => clearFields :D

        // delete todo
        document.querySelectorAll('.trash').forEach(icon => {
            icon.addEventListener('click', event => {
                swal({
                    text: "Are you sure, you want delete it!",
                    buttons: true,
                }).then((willDelete)=> { 
                    if(willDelete) {
                        event.target.parentElement.parentElement.remove();
                    }
                })
            })
        })

    }

})









