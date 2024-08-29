function replaceName() {
    let nameInput = document.getElementById('name-input').value;
    document.getElementById("name").textContent = nameInput;
}

document.getElementById('tombol').addEventListener("click", function(event) {
    event.preventDefault(); 
    replaceName();
});

let counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 5000); 

document.querySelector('nav ul li a[href="#"]').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.querySelector('.form-output-container').scrollIntoView({ behavior: 'smooth' });
});



function submitForm() {
    const nama = document.getElementById('nama').value;
    const tanggal = document.getElementById('tanggal').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : 'Belum dipilih';
    const pesan = document.getElementById('pesan').value;

    if (!nama || !tanggal || !gender || !pesan) {
        alert("Semua field harus diisi.");
        return;
    }

    const currentDate = new Date();
    const currentTime = currentDate.toUTCString();
    const output = `
        <p>Current time: ${currentTime}</p>
        <p>Nama: ${nama}</p>
        <p>Tanggal Lahir: ${new Date(tanggal).toLocaleDateString()}</p>
        <p>Jenis Kelamin: ${gender}</p>
        <p>Pesan: ${pesan}</p>
    `;
    const outputContainer = document.querySelector('.output-container');
    outputContainer.innerHTML = output;
}
