import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    <div className='w-full h-fit min-h-screen bg-[#0E1014] pt-12'>
      <div className="w-[80%] m-auto max-[400px]:w-[90%] max-[325px]:w-[95%] max-[300px]:w-[100%]">
      <Header /> 
      <img src="/images/purple-ball.svg" alt="ball" className="absolute top-0 right-[500px] max-[660px]:hidden" />
      <img src="/images/purple-light.svg" alt="ball" className="hidden absolute top-[150px] right-0 max-[660px]:block" />
      <img src="/images/purple-ball2.svg" alt="ball" className="w-[100px] hidden absolute top-[350px] right-0 max-[660px]:block" />
      <img src="/images/red-ball.svg" alt="ball" className="absolute top-16 left-[540px] max-[660px]:top-[660px] max-[660px]:left-1" />
      <img src="/images/red-light.svg" alt="ball" className="w-[250px] absolute top-[120px] left-0" />
      <section className="mt-24 flex justify-between max-[760px]:flex-col mb-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-[#E4E5EA] text-5xl leading-[55px] max-[820px]:text-4xl max-[760px]:text-6xl max-[500px]:text-5xl max-[400px]:text-4xl">Зарабатывайте <br /> больше <br /> <span className="grdt">с WELBEX</span></h1>
        <p className="text-[#E4E5EA] text-xl max-[870px]:mb-4">Развиваем и контролируем <br /> продажи за вас</p>
        </div>
        <div>
          <h1 className="text-[#E4E5EA] text-xl mb-8 max-[760px]:text-2xl">Вместе с <span className="grdt">БЕСПЛАТНОЙ</span> <br /> <span className="grdt ">КОНСУЛЬТАЦИЕЙ</span> мы дарим:</h1>
          <div className="flex justify-between max-[870px]:hidden">
          <div className="text-[#E4E5EA] flex  flex-col mb-8 gap-8">
            <div className="">
              <h1 className="text-2xl text-right">Виджеты</h1>
              <p className="float-right">30 готовых <br /> <span className="float-right">решений</span></p>
            </div>
            <div>
              <h1 className="text-2xl text-right">Skype Аудит</h1>
              <p className="float-right">отдела продаж <br /> <span className="float-right">и CRM системы</span></p>
            </div>
          </div>
          <div className="text-[#E4E5EA] flex  flex-col gap-8 float-right">
          <div>
              <h1 className="text-2xl text-right">Dashboard</h1>
              <p className="float-right">с показателями <br /> вашего бизнеса</p>
            </div>
            <div>
              <h1 className="text-2xl text-right">Dashboard</h1>
              <p className="float-right">использования <br /> <span className="float-right">CRM</span></p>
            </div>
          </div>
          </div>
          <div className="hidden max-[870px]:block ">
            <div className="flex items-center gap-6 mb-3">
              <div className="flex items-center gap-2">
                <img src="/images/line.svg" alt="line" />
                <p className="text-[#E4E5EA]">Skype аудит</p>
              </div>
              <div className="flex items-center gap-2">
                <img src="/images/line.svg" alt="line" />
                <p className="text-[#E4E5EA]">30 виджетов</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <img src="/images/line.svg" alt="line" />
                <p className="text-[#E4E5EA]">Dashboard</p>
              </div>
              <div className="flex items-center gap-2">
                <img src="/images/line.svg" alt="line" />
                <p className="text-[#E4E5EA]">Месяц AMOCRM</p>
              </div>
            </div>
          </div>
          <div className="float-right max-[870px]:float-none max-[870px]:mt-4 relative z-10">
          <button className="py-4 px-8 bg-[#4077F3] text-[#E4E5EA]">Получить консультацию</button>
          </div>
        </div>
      </section>
      <Footer />
      </div>
    </div>
  );
}
export default App;
