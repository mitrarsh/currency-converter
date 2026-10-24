import './App.css'

function App() {

  return (
    <>
      <main className="flex flex-col min-h-screen items-center justify-center bg-bg p-6" dir='rtl'>
          <h1 className="text-text-h">مبدل واحد پول</h1>
        <div className="rounded-xl border-2 border-border bg-white p-8">

          <p className="text-text">برای شروع مبدل مورد نظر خود را وارد کنید. </p>

          <button className="mt-4 rounded-lg bg-brand px-6 py-3 text-white hover:bg-brand-hover transition ">
            Convert
          </button>
        </div>
      </main>
    </>
  )
}

export default App
