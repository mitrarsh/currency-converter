import { useEffect, useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { CurrencyCard } from './components/CurrencyCard'
import { ConvertIcon, EditIcon } from './components/icons'
import { Input } from './components/Input'
import { usePersianNumber } from './hooks.tsx/toPersianNumber'
import Modal from './components/Modal'
import { useCurrencyConvert } from './hooks.tsx/useCurrencyConvert'

function App() {
  const [rate, setRate] = useState<number>(0)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [from, setFrom] = useState<"rial" | "dollar">("rial")
  const [amount, setAmount] = useState("")


  const fetchRate = async () => {
    try {
      const response = await fetch(
        'https://api.sarmayex.com/api/v1/usdt-price'
      )

      if (!response.ok) {
        throw new Error('Failed to fetch exchange rate')
      }

      const data: {
        cost: string
        sellPrice: string
        buyPrice: string
      } = await response.json()

      const rateInRials = Number(data.cost) * 10

      if (Number.isFinite(rateInRials) && rateInRials > 0) {
        setRate(rateInRials)
      }
    } catch (error) {
      console.error('Failed to fetch exchange rate:', error)
    }
  }

  useEffect(() => {
    fetchRate()
  }, [])

  const toPersianNumber = usePersianNumber()
  const convertedAmount = useCurrencyConvert({
    amount: amount,
    rate,
    from,
  })


  return (
    <>
      <main className="flex flex-col min-h-screen items-center justify-center bg-bg md:p-6" dir='rtl'>
        <h1 className="text-text-h">مبدل واحد پول</h1>

        <div className="rounded-xl min-w-[100%] md:min-w-[80%] lg:min-w-[60%]  md:border-2 border-border md:bg-white p-8 flex flex-col gap-6">


          <div className='flex items-center gap-3'>
            <p className='text-brand'>{toPersianNumber(1)} دلار = {toPersianNumber(rate)} ریال</p>
            <Button type='secondary' handleClick={() => setModalOpen(true)}><EditIcon /></Button>
            <Button type='primary' styles='text-xs' handleClick={fetchRate}>دریافت انلاین قیمت</Button>
          </div>

          <Input label='برای شروع مبدل مورد نظر خود را وارد کنید' value={amount} onChange={(event) => setAmount(event.target.value)} />

          <div className='flex flex-col sm:flex-row gap-4 relative mt-8 items-center'>
            <CurrencyCard currency={from} label='از' />
            <Button
              styles='w-fit'
              handleClick={() =>
                setFrom(prev => (prev === "rial" ? "dollar" : "rial"))
              }>
              <ConvertIcon />
            </Button>
            <CurrencyCard currency={from === "rial" ? "dollar" : "rial"} label='به' />

          </div>

          {convertedAmount !== null && (
            <div className="mt-4 rounded-xl p-4">
              <p className="text-text-h">
                نتیجه تبدیل:
              </p>

              <p className="text-brand text-xl font-bold">
                {toPersianNumber(
                  Number(convertedAmount.toFixed(2))
                )}{" "}
                {from === "rial" ? "دلار" : "ریال"}
              </p>
            </div>
          )}
        </div>
        {modalOpen &&
          <Modal
            setModalOpen={setModalOpen}
            rate={rate}
            setRate={setRate}
          />}

      </main>
    </>
  )
}

export default App
