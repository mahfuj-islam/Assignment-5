document.getElementById("blog").addEventListener("click", function () {
    window.location.href = "home.html";
})


const donation = document.getElementById("donation")
donation.addEventListener("click", function (event) {
    event.stopPropagation()
    document.getElementById("amount-history").classList.add("hidden")
    document.getElementById("history").classList.remove("bg-lime-300")
    donation.classList.add("bg-lime-300")
    document.getElementById("donation-section").classList.remove("hidden")
})


const history = document.getElementById("history")
history.addEventListener("click", function (event) {
    event.stopPropagation()
    donation.classList.remove("bg-lime-300")
    history.classList.add("bg-lime-300")
    document.getElementById("donation-section").classList.add("hidden")
    document.getElementById("amount-history").classList.remove("hidden")
})


document.getElementById("noakhali-btn").addEventListener("click", function (event) {
    event.stopPropagation()
    const mainBlance = getInnerTextById("main-blance")
    const noakhaliBlance = getInnerTextById("noakhali-blance")
    const noakhaliAmountInput = getInputValueById("noakhali-amount-input")

    if (typeof noakhaliAmountInput === "number" && noakhaliAmountInput > 0 && mainBlance > noakhaliAmountInput) {
        const total = noakhaliAmountInput + noakhaliBlance
        const result = mainBlance - total

        document.getElementById("main-blance").innerText = result

        document.getElementById("noakhali-blance").innerText = total

        const inputValue = document.getElementById("noakhali-amount-input").value

        const date = new Date()

        const p = document.createElement("p")
        p.innerText = `
        ${inputValue} Taka is Donate for Flood at Noakhali, Bangladesh
        ${date}
        `

        document.getElementById("amount-history").appendChild(p)

            alert("Money is Donated")

        document.getElementById("noakhali-amount-input").value = " "
    }
    else {
        alert("invalid please try again..")
    }

})


document.getElementById("feni-btn").addEventListener("click", function (event) {
    event.stopPropagation()
    const mainBlance = getInnerTextById("main-blance")
    const feniBlance = getInnerTextById("feni-blance")
    const feniAmountInput = getInputValueById("feni-amount-input")

    if (typeof feniAmountInput === "number" && feniAmountInput > 0 && mainBlance > feniAmountInput) {
        const total = feniAmountInput + feniBlance
        const result = mainBlance - total

        document.getElementById("main-blance").innerText = result

        document.getElementById("feni-blance").innerText = total

        const inputValue = document.getElementById("feni-amount-input").value

        const date = new Date()

        const p = document.createElement("p")
        p.innerText = `
        ${inputValue} Taka is Donate for Flood Relief in Feni,Bangladesh
        ${date}
        `

        document.getElementById("amount-history").appendChild(p)

            alert("Money is Donated")

        document.getElementById("feni-amount-input").value = " "
    }
    else {
        alert("invalid please try again..")
    }

})


document.getElementById("quata-btn").addEventListener("click", function (event) {
    event.stopPropagation()
    const mainBlance = getInnerTextById("main-blance")
    const quataBlance = getInnerTextById("quata-blance")
    const quataAmountInput = getInputValueById("quata-amount-input")

    if (typeof quataAmountInput === "number" && quataAmountInput > 0 && mainBlance > quataAmountInput) {
        const total = quataAmountInput + quataBlance
        const result = mainBlance - total

        document.getElementById("main-blance").innerText = result

        document.getElementById("quata-blance").innerText = total

        const inputValue = document.getElementById("quata-amount-input").value

        const date = new Date()

        const p = document.createElement("p")
        p.innerText = `
        ${inputValue} Taka is Donate for Aid for Injured in the Quota Movement
        ${date}
        `

        document.getElementById("amount-history").appendChild(p)

            alert("Money is Donated")

        document.getElementById("quata-amount-input").value = " "
    }
    else {
        alert("invalid please try again..")
    }

})