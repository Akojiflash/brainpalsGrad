 const button = document.getElementById('dropdownButton');
        const menu = document.getElementById('dropdownMenu');
        button.addEventListener('click', function() {
            menu.classList.toggle('hidden');
        });