import React from "react";

const Header = () => {
  return (
    <div className="w-full text-[#E4E5EA] flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="flex gap-12 max-[1060px]:w-full max-[1060px]:justify-between">
          <img src="/images/logo_welbex.svg" alt="logo" className="w-[180px] max-[675px]:hidden" />
          <div className="flex gap-7 max-[675px]:w-full max-[595px]:gap-2 max-[675px]:justify-between">
            <nav>Услуги</nav>
            <nav>Виджеты</nav>
            <nav>Интеграции</nav>
            <nav>Кейсы</nav>
            <nav className="max-[825px]:hidden max-[675px]:block max-[520px]:hidden">Сертфикаты</nav>
          </div>
        </div>
        <div className="flex items-center gap-12 max-[1060px]:hidden">
          <p>+7 555 555-55-55</p>
          <div className="flex gap-7 max-[1282px]:hidden">
            <img src="/images/telegram.svg" alt="tg" />
            <img src="/images/viber.svg" alt="viber" />
            <img src="/images/whatsapp.svg" alt="whatsapp" />
          </div>
        </div>
      </div>
      <p className="leading-tight text-sm max-[675px]:hidden">
        крупный интегратор CRM <br /> в Росcии и ещё 8 странах
      </p>
    </div>
  );
};

export default Header;
