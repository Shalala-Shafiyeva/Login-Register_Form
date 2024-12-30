import React from "react";

function OurMission() {
  return (
    <div className="our-mission" id="our-mission">
      <div className="container">
        <div className="left">
          <div className="subtitle">наша миссия</div>
          <div className="title">
            Произвести, сохранить и донести до каждого натуральные продукты в их
            первозданном виде
          </div>
          <div className="content">
            АПХ «Залесье» - один из крупнейших агропромышленных холдингов
            Калининградской области. По объемам производства продукции занимает
            лидирующие позиции на российском рынке, объединяя производителей
            сельскохозяйственной продукции и перерабатывающие предприятия
            пищевой отрасли.
          </div>
          <img src="/images/home_our_mission_image.png" alt="" />
        </div>
        <div className="right">
          <div className="cards">
            <div className="cards-item">
              <div className="card">
                <div className="num">
                  <span>20 </span>
                  <span>лет</span>
                </div>
                <div className="content">Опыт в агропромышленной отрасли</div>
              </div>
              <div className="card">
                <div className="num">
                  <span>18</span>
                </div>
                <div className="content">Компаний в холдинге</div>
              </div>
            </div>
            <div className="cards-item">
              <div className="card">
                <div className="num">
                  <span>1200 </span>
                  <span>сотрудников</span>
                </div>
                <div className="content">
                  Общая численность людей, работающих в компании
                </div>
              </div>
              <div className="card">
                <div className="num">
                  <span>6</span>
                </div>
                <div className="content">
                  Направлений деятельности полного цикла
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
