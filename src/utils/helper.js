export async function calculateSavingsAndRound(transactionAmountInEth) {
    const transactionAmount =  await getEthToUsd(transactionAmountInEth)

    // Check if the transaction amount is less than $22
    if (transactionAmount < 22) {

        // Calculate the savings amount (5% of the actual amount)
        const savingsAmount = 0.05 * transactionAmount;
        // Add the savings amount to the original transaction amount
        const totalAmount = transactionAmount + savingsAmount;

        const roundedTotalAmount = Math.round(totalAmount / 1) * 1;

        const roundedInEth = await getUsdToEth(roundedTotalAmount)

        const saving = roundedTotalAmount - transactionAmount
    
        const savingInEth = await getUsdToEth(saving)
        return {
            transactionAmount: transactionAmount,
            savingsAmount: saving,
            roundedTotalAmount: roundedTotalAmount,
            transactionAmountInEth,
        savingInEth,
        roundedInEth
        };
    }

    // Calculate the savings amount (5% of the actual amount)
    const savingsAmount = 0.05 * transactionAmount;

    // Add the savings amount to the original transaction amount
    const totalAmount = transactionAmount + savingsAmount;

    // Round the total amount to the nearest 5 multiple
    const roundedTotalAmount = Math.round(totalAmount / 5) * 5;
    const roundedInEth = await getUsdToEth(roundedTotalAmount)

    const saving = roundedTotalAmount - transactionAmount

    const savingInEth = await getUsdToEth(saving)

    return {
        transactionAmount: transactionAmount,
        savingsAmount: saving,
        roundedTotalAmount: roundedTotalAmount,
        transactionAmountInEth,
        savingInEth,
        roundedInEth

    };
}


async function getEthToUsd(eth) {
    try {
        const response = await fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD");
        const data = await response.json();

        if (data && data.USD) {
            const rate = data.USD;
            const usdAmount = eth * rate;
            // Round to 2 decimal places
            const roundedUsdAmount = parseFloat(usdAmount.toFixed(2));
            return roundedUsdAmount;
        } else {
            throw new Error('Invalid API response');
        }
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        return null;
    }
}

async function getUsdToEth(usd) {
    try {
        const response = await fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD");
        const data = await response.json();

        if (data && data.USD) {
            const rate = data.USD;
            const ethAmount = usd / rate;
            // Round to 6 decimal places (standard for Ethereum)
            const roundedEthAmount = parseFloat(ethAmount.toFixed(6));
            return roundedEthAmount;
        } else {
            throw new Error('Invalid API response');
        }
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        return null;
    }
}




