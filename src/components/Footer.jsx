import React from "react";

const Footer = () => {
  return (
    <div className="w-full px-4 py-4 flex justify-between max-[1040px]:flex-col">
      <div className="flex gap-16 max-[1040px]:gap-1 max-[1040px]:justify-between max-[615px]:flex-col">
        <div className="text-[#E4E5EA]">
          <h1 className="text-[#656566] mb-5">О компании</h1>
          <nav className="mb-2">Партнёрская программа</nav>
          <nav>Вакансии</nav>
        </div>
        <div className="max-[615px]:mt-10">
          <h1 className="text-[#656566] mb-5">Меню</h1>
          <div className="flex items-center gap-14 max-[580px]:gap-1 max-[580px]:justify-between max-[500px]:flex-col max-[615px]:items-start">
            <div className="text-[#E4E5EA] flex flex-col gap-2">
              <nav>Расчёт стоимости</nav>
              <nav>Услуги</nav>
              <nav>Виджеты</nav>
              <nav>Интеграции</nav>
              <nav>Наши клиенты</nav>
            </div>
            <div className="text-[#E4E5EA] flex flex-col gap-2">
              <nav>Кейсы</nav>
              <nav>Благодарственные письма</nav>
              <nav>Сертификаты</nav>
              <nav>Блог на Youtube</nav>
              <nav>Вопрос / Ответ</nav>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#E4E5EA] flex flex-col gap-2 text-right max-[1040px]:text-start max-[1040px]:mt-14">
        <h1 className="text-[#656566] mb-5">Контакты</h1>
        <p>+7 555 555-55-55</p>
        <div className="flex gap-3 justify-end max-[1040px]:justify-start">
          <img src="/images/telegram.svg" alt="tg" />
          <img src="/images/viber.svg" alt="viber" />
          <img src="/images/whatsapp.svg" alt="whatsapp"/>
        </div>
        <p>Москва, Путевой проезд 3с1, к 902</p>
        <div className="flex flex-col text-[14px] mt-10">
        <a href="#">©WELBEX 2022. Все права защищены.</a>
        <a href="#" className="text-right max-[1040px]:text-start">Политика конфиденциальности</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
