 function createVacAddTemplate () {

 return (`
    <h1>Форма размещения заявки</h1>
<div class="add-vac__wrapper">
    <form class="add-vac__form" action="">
        <fieldset>
            <label class="text-field__label" class="text-field__label" for="VacName">Наименование вакансии</label>
            <input class="text-field__input" type="text" id="VacName">
            <label class="text-field__label" for="Ot">Отдел</label>
            <input class="text-field__input" type="text" id="Ot">
        </fieldset>
        <fieldset>
            <label class="text-field__label" for="date">Дата открытия</label>
            <input class="text-field__input" type="date" id="date">
            <label class="text-field__label" for="PlanDate">Плановая дата закрытия</label>
            <input class="text-field__input" type="date" id="PlanDate">
        </fieldset>
        <fieldset>
            <legend>Пол</legend>
            <input type="radio" name="gender" id="male" value="male">
            <label class="text-field__label" for="male">Мужской</label>
            <input type="radio" name="gender" id="female" value="female">
            <label class="text-field__label" for="'female">Женский</label>
        </fieldset>
        <fieldset>
            <legend>Зарплата</legend>
            <input type="radio" name="salary" id="on" value="net">
            <label class="text-field__label" for="on">На руки</label>
            <input type="radio" name="salary" id="before" value="gross">
            <label class="text-field__label" for="before">До вычета налога</label>
            <br>
            <label class="text-field__label" for="form">От</label>
            <input class="text-field__input" type="text" id="form">
            <label class="text-field__label" for="to">До</label>
            <input class="text-field__input" type="text" id="to">
        </fieldset>
        <fieldset>
            <label class="text-field__label" for="address">Адрес</label>
            <input class="text-field__input" type="text" id="address">
            <label class="text-field__label" for="under">Станция метро, МЦД</label>
            <input class="text-field__input" type="text" id="under">
        </fieldset>
        <fieldset>
            <label class="text-field__label" for="skills">Опыт работы</label>
            <input class="text-field__input" type="text" id="skills">
            <label class="text-field__label" for="gr">График работы</label>
            <input class="text-field__input" type="text" id="gr">
        </fieldset>
        <fieldset>
            <legend>Тип занятости:</legend>
            <input type="radio" name="employment_type" id="full_time" value="full_time">
            <label class="text-field__label" for="full_time">Полная занятость</label>
            <input type="radio" name="employment_type" id="half-time" value="part_time">
            <label class="text-field__label" for="half-time">Частичная занятость</label>
            <input type="radio" name="employment_type" id="study" value="internship">
            <label class="text-field__label" for="study">Стажировка</label>
        </fieldset>
    </form>
</div>
<button class="add-vac-button send-vac__button">Отправить</button>
<button class="add-vac-button clean-vac__button">Очистить</button>`);
 }