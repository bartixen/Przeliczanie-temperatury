const input_value = document.getElementById("input_value");
const select_value = document.getElementById("select_value");
const select_result = document.getElementById("select_result");
const result = document.getElementById("result");
const button = document.getElementById("execute");

button.onclick = function() {
    let value = 0.0;
    let input_value_get = input_value.value;
    let select_value_get = select_value.value;
    let select_result_get = select_result.value;

    switch(select_result_get) {
        case "k":
            switch(select_value_get) {
                case "k":
                    value = input_value_get;
                    break;
                case "c":
                    value = input_value_get + 273.15;
                    break;
                case "f":
                    value = (input_value_get + 459.67) * 5 / 9;
                    break;
            }
            break;
        case "c":
            switch(select_value_get) {
                case "k":
                    value = input_value_get - 273.15;
                    break;
                case "c":
                    value = input_value_get;
                    break;
                case "f":
                    value = (input_value_get - 32) / 1.8;
                    break;
            }
            break;
        case "f":
            switch(select_value_get) {
                case "k":
                    value = (input_value_get - 273.15) * 1.8 + 32;
                    break;
                case "c":
                    value = (input_value_get * 9/5) + 32;
                    break;
                case "f":
                    value = input_value_get;
                    break;
            }
            break;
    }

    value = Number(value).toFixed(2);
    
    switch(select_result_get) {
        case "k":
            value += " K"
            break;
        case "c":
            value += " °C"
            break;
        case "f":
            value += " °F"
            break;
    }

    result.value = value;
}