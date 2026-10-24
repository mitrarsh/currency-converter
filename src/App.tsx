import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { CurrencyCard } from './components/CurrencyCard'
import { ConvertIcon, EditIcon } from './components/icons'
import { Input } from './components/Input'
import { usePersianNumber } from './hooks.tsx/toPersianNumber'
import Modal from './components/Modal'

function App() {
  const [rate, setRate] = useState<number>(1832375)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [from, setFrom] = useState<"rial" | "dollar">("rial")
  const [inputRate, setInputRate]= useState<number>(null)


  const toPersianNumber = usePersianNumber()


  return (
    <>
      <main className="flex flex-col min-h-screen items-center justify-center bg-bg p-6" dir='rtl'>
        <h1 className="text-text-h">مبدل واحد پول</h1>

        <div className="rounded-xl border-2 border-border bg-white p-8 flex flex-col gap-6">


          <div className='flex items-center gap-3'>
            <p className='text-brand'>{toPersianNumber(1)} دلار = {toPersianNumber(rate)} ریال</p>
            <Button type='secondary' handleClick={() => setModalOpen(true)}><EditIcon /></Button>
          </div>

          <Input label='برای شروع مبدل مورد نظر خود را وارد کنید' value={inputRate} onChange={(event) => setInputRate(event.target.value)}/>

          <div className='flex gap-4 relative mt-8'>
            <CurrencyCard currency={from} label='از' />
            <Button
              handleClick={() =>
                setFrom(prev => (prev === "rial" ? "dollar" : "rial"))
              }>
              <ConvertIcon />
            </Button>
            <CurrencyCard currency={from === "rial" ? "dollar" : "rial"} label='به' />

          </div>

          {/* <Button>convert</Button> */}
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
