import React, { useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'

type ModalProps = {
    setModalOpen: (open: boolean) => void
    rate: number
    setRate: (rate: number) => void
}


const Modal = ({
    setModalOpen,
    rate,
    setRate,
}: ModalProps) => {


    const [newRate, setNewRate] = useState(rate)

    const handleSave = () => {
        const rate = Number(newRate)

        if ( rate <= 0) {
            return
        }

        setRate(rate)
        setModalOpen(false)
    }


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl flex flex-col gap-4">
                <h2 className=" text-xl font-bold text-text-h">
                    ویرایش نرخ دلار
                </h2>


                <Input label='نرخ دلار به ریال' value={newRate} onChange={(event) => setNewRate(event.target.value)} />

                <div className=" flex gap-3">
                    <Button type='secondary' handleClick={() => setModalOpen(false)}>
                        انصراف
                    </Button>

                    <Button handleClick={handleSave}>
                        ذخیره
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Modal
