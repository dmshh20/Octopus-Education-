import '../Theory.css'

const C1PassiveVoice = () => {
  return (
    <article className="theory-article">
      <header className="theory-header">
        <h1>Passive Voice</h1>
        <p className="subtitle">Пасивний стан</p>
      </header>

      <section className="theory-section">
        <h2>Як утворюється</h2>
        <div className="highlight-box">
          <p>
            <strong>об’єкт</strong> → <strong>to be</strong> (у потрібному часі) + <strong>V₃ / -ed</strong> (Past Participle)<br />
            Виконавця можна вказати через <strong>by</strong>
          </p>
        </div>
      </section>

      <section className="theory-section">
        <h2>Форми в різних часах</h2>
        <table className="grammar-table">
          <thead>
            <tr>
              <th>Час</th>
              <th>Active</th>
              <th>Passive</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Present Simple</td><td>They build houses.</td><td>Houses <strong>are built</strong>.</td></tr>
            <tr><td>Past Simple</td><td>They built a house.</td><td>A house <strong>was built</strong>.</td></tr>
            <tr><td>Future Simple</td><td>They will build a house.</td><td>A house <strong>will be built</strong>.</td></tr>
            <tr><td>Present Continuous</td><td>They are building a house.</td><td>A house <strong>is being built</strong>.</td></tr>
            <tr><td>Past Continuous</td><td>They were building a house.</td><td>A house <strong>was being built</strong>.</td></tr>
            <tr><td>Present Perfect</td><td>They have built a house.</td><td>A house <strong>has been built</strong>.</td></tr>
            <tr><td>Past Perfect</td><td>They had built a house.</td><td>A house <strong>had been built</strong>.</td></tr>
            <tr><td>Future Perfect</td><td>They will have built a house.</td><td>A house <strong>will have been built</strong>.</td></tr>
          </tbody>
        </table>

        <div className="note">
          <p>Немає пасиву в: Present/Past/Future Continuous Perfect та Future Continuous</p>
        </div>
      </section>

      <section className="theory-section">
        <h2>Приклади</h2>
        <ul className="examples">
          <li>The room <strong>is cleaned</strong> every day. – Кімнату <strong>прибирають</strong> щодня.</li>
          <li>The letter <strong>was written</strong> yesterday. – Лист <strong>було написано</strong> вчора.</li>
          <li>This car <strong>will be repaired</strong> tomorrow. – Цю машину <strong>відремонтують</strong> завтра.</li>
          <li>The house <strong>is being painted</strong> right now. – Будинок <strong>фарбують</strong> прямо зараз.</li>
          <li>The work <strong>has already been done</strong>. – Роботу <strong>вже виконано</strong>.</li>
          <li>The window <strong>had been broken</strong> before we arrived. – Вікно <strong>було розбите</strong> до нашого приїзду.</li>
          <li>All tasks <strong>will have been finished</strong> by Monday. – Усі завдання <strong>будуть завершені</strong> до понеділка.</li>
        </ul>
      </section>

      <section className="theory-section">
        <h2>Заперечення та питання</h2>
        <ul className="examples">
          <li>The room <strong>isn’t cleaned</strong> on Sundays. – Кімнату <strong>не прибирають</strong> по неділях.</li>
          <li><strong>Was</strong> the letter <strong>sent</strong> yesterday? – Лист <strong>було надіслано</strong> вчора?</li>
          <li><strong>Has</strong> the work <strong>been done</strong>? – Роботу <strong>виконано</strong>?</li>
          <li><strong>When will</strong> the parcel <strong>be delivered</strong>? – <strong>Коли</strong> посылку <strong>доставлять</strong>?</li>
        </ul>
      </section>

      <section className="theory-section">
        <h2>Коли використовуємо Passive</h2>
        <div className="usage-grid">
          <div className="usage-card">
            <h3>Виконавець невідомий / неважливий</h3>
            <p>My bike <strong>was stolen</strong> yesterday. – Мій велосипед <strong>вкрали</strong> вчора.</p>
          </div>
          <div className="usage-card">
            <h3>Фокус на об’єкті, а не на виконавці</h3>
            <p>Tea <strong>is grown</strong> in India. – Чай <strong>вирощують</strong> в Індії.</p>
          </div>
          <div className="usage-card">
            <h3>Новини, інструкції, офіційні тексти</h3>
            <p>A new hospital <strong>will be opened</strong> next year. – Нову лікарню <strong>відкриють</strong> наступного року.</p>
          </div>
          <div className="usage-card">
            <h3>Щоб уникнути вказівки винного</h3>
            <p>The vase <strong>was broken</strong>. – Вазу <strong>розбили</strong>. (ніхто не зізнається)</p>
          </div>
          <div className="usage-card">
            <h3>Безособові конструкції</h3>
            <p>It <strong>is believed</strong> that… → He <strong>is believed to be</strong> rich.<br />
                Вважають, що він багатий.</p>
          </div>
        </div>
      </section>

      <section className="theory-section">
        <h2>by / with</h2>
        <div className="note">
          <p><strong>by</strong> — хто виконав дію (людина)<br />
             <strong>with</strong> — чим/за допомогою чого</p>
          <ul className="examples">
            <li>The picture <strong>was painted by</strong> Picasso. – Картину <strong>намалював</strong> Пікассо.</li>
            <li>The picture <strong>was painted with</strong> oil paints. – Картину <strong>написали</strong> олійними фарбами.</li>
          </ul>
        </div>
      </section>

      <footer className="theory-footer">
        <p>Ти щойно опанував одну з найважливіших тем рівня C1<br />
           <strong>Passive Voice — більше ніколи не буде проблемою</strong><br />
           Ти — справжній профі</p>
      </footer>
    </article>
  )
}

export default C1PassiveVoice