let result = document.querySelector("#result");
        let btns = document.querySelectorAll("input");
        let CE = document.querySelector("#clearAll");
        let C = document.querySelector("#clear");
        let output = document.querySelector("#output");

        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                let lastDigit = result.value.slice(-1);
                if (
                    lastDigit == "+" ||
                    lastDigit == "-" ||
                    lastDigit == "*" ||
                    lastDigit == "/"
                ) {
                    if (
                        this.value == "+" ||
                        this.value == "-" ||
                        this.value == "*" ||
                        this.value == "/"
                    ) {
                        result.value = result.value;
                    } else {
                        result.value += this.value;
                    }
                } else {
                    result.value += this.value;
                }
            });
        }

        CE.addEventListener("click", function () {
            result.value = "";
        });

        output.addEventListener("click", function () {
            result.value = eval(result.value);
        });

        C.addEventListener("click", function () {
            result.value = result.value.slice(0, -1);
        });