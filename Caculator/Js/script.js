  let display = document.getElementById('display');

        function input(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = '';
        }

        function toggleSign() {
            if (display.value.startsWith('-')) {
                display.value = display.value.slice(1);
            } else {
                display.value = '-' + display.value;
            }
        }

        function calculate() {
            try {
                display.value = eval(display.value.replace('x', '*').replace('%', '/100'));
            } catch (e) {
                display.value = 'Error';
            }
        }
