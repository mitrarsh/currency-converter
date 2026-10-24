import { useMemo } from "react"

type Currency = "rial" | "dollar"

type UseCurrencyConvertProps = {
    amount: string
    rate: number
    from: Currency
}

export const useCurrencyConvert = ({
    amount,
    rate,
    from,
}: UseCurrencyConvertProps) => {
    const convertedAmount = useMemo(() => {
        const numericAmount = Number(amount)

        if (
            amount.trim() === "" ||
            !Number.isFinite(numericAmount) ||
            numericAmount < 0 ||
            !Number.isFinite(rate) ||
            rate <= 0
        ) {
            return null
        }

        if (from === "dollar") {
            return numericAmount * rate
        }

        return numericAmount / rate
    }, [amount, rate, from])

    return convertedAmount
}