function createVacFormTemplate (vacName, conditions, address) {
    const {salary, exp} = conditions;
    const {map, under} = address;

    return (`
        <h1>Заявки на размещение вакансий</h1>
        <ul class="vac-form__list">
                    <li class="vac-form__item">
                        <div class="left-side__info">
                            <div class="vac-date__post">
                                <h3>Дата публикации: 23.01.2023</h3>
                            </div>
                            <h2 class="vac-name">${vacName}</h2>
                            <div class="vac-address">
                                <img src="" alt="point-img">
                                <h3>${map}</h3>
                            </div>
                        </div>
                        <div class="right-side__info">
                            <div class="vac-salary">${salary}</div>
                            <div class="vac-exp">Требуемый опыт: ${exp}</div>
                            <div class="vac-address__under">
                                <img src="" alt="undeground-icon">
                                <h3>${under}</h3>
                            </div>
                        </div>
                        <button class="edit-form__button"></button>
                    </li>
                    <!-- Repeat for other items as needed -->
                </ul>
        `);
}
