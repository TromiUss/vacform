function createVacFormTemplate (vacName, conditions, address) {
    const {salary, expFrom, expTo} = conditions;
    const {map, under} = address;

    return (`
        <h1>Заявки на размещение вакансий</h1>
        <ul class="vac-form__list">
                    <li class="vac-form__item">
                        <div class="left-side__info">
                            <div class="vac-date__post">
                                <h3>Дата публикации: 23.01.2023</h3>
                            </div>
                            <h2 class="vac-name">Backend-разработчик</h2>
                            <div class="vac-address">
                                <img src="" alt="point-img">
                                <h3>Москва, Походный проезд, 3с1</h3>
                            </div>
                        </div>
                        <div class="right-side__info">
                            <div class="vac-salary">от 70 000 на руки</div>
                            <div class="vac-exp">Требуемый опыт: от 1 до 3 лет</div>
                            <div class="vac-address__under">
                                <img src="" alt="undeground-icon">
                                <h3>Сходненская, Трикотажная и Волоколамская</h3>
                            </div>
                        </div>
                        <button class="edit-form__button"></button>
                    </li>
                    <li class="vac-form__item">
                        <div class="left-side__info">
                            <div class="vac-date__post">
                                <h3>Дата публикации: 23.01.2023</h3>
                            </div>
                            <h2 class="vac-name">Backend-разработчик</h2>
                            <div class="vac-address">
                                <img src="" alt="point-img">
                                <h3>Москва, Походный проезд, 3с1</h3>
                            </div>
                        </div>
                        <div class="right-side__info">
                            <div class="vac-salary">от 70 000 на руки</div>
                            <div class="vac-exp">Требуемый опыт: от 1 до 3 лет</div>
                            <div class="vac-address__under">
                                <img src="" alt="undeground-icon">
                                <h3>Сходненская, Трикотажная и Волоколамская</h3>
                            </div>
                        </div>
                        <button class="edit-form__button"></button>
                    </li>
                    <li class="vac-form__item">
                        <div class="left-side__info">
                            <div class="vac-date__post">
                                <h3>Дата публикации: 23.01.2023</h3>
                            </div>
                            <h2 class="vac-name">Backend-разработчик</h2>
                            <div class="vac-address">
                                <img src="" alt="point-img">
                                <h3>Москва, Походный проезд, 3с1</h3>
                            </div>
                        </div>
                        <div class="right-side__info">
                            <div class="vac-salary">от 70 000 на руки</div>
                            <div class="vac-exp">Требуемый опыт: от 1 до 3 лет</div>
                            <div class="vac-address__under">
                                <img src="" alt="undeground-icon">
                                <h3>Сходненская, Трикотажная и Волоколамская</h3>
                            </div>
                        </div>
                        <button class="edit-form__button"></button>
                    </li>
                </ul>
        `);
}