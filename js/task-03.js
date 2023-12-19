document.getElementById('name-input').addEventListener('input', function () {
    
        let inputValue = this.value.trim();
        document.getElementById('name-output').textContent = inputValue === '' ? 'Anonymous' : inputValue;
    });