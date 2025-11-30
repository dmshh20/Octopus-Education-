import '../Theory.css' 

const A1FutureSimple = () => {
  return (
    <article className="theory-article">
      <header className="theory-header">
        <h1>Future Simple</h1>
        <p className="subtitle">Простий (неозначений) майбутній час</p>
      </header>

      <section className="theory-section">
        <h2>Формулювання речень</h2>

        <table className="grammar-table">
          <thead>
            <tr>
              <th>Підмет</th>
              <th>Стверджувальне</th>
              <th>Заперечне</th>
              <th>Питальне</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I / We</td>
              <td><strong>will</strong> V<br /><small>I'll go</small></td>
              <td>will <strong>not</strong> V<br /><small>won't go</small></td>
              <td><strong>Will</strong> I/we V ?</td>
            </tr>
            <tr>
              <td>You / He / She / It / They</td>
              <td><strong>will</strong> V<br /><small>you'll go</small></td>
              <td>will <strong>not</strong> V<br /><small>won't go</small></td>
              <td><strong>Will</strong> … V ?</td>
            </tr>
          </tbody>
        </table>

        <div className="highlight-box">
          <p>
            <strong>Сучасна англійська</strong> → <strong>will</strong> для <u>всіх</u> осіб<br />
            <strong>will = 'll</strong> | <strong>will not = won't</strong><br />
            <strong>shall</strong> — застаріле, майже не використовується (тільки в дуже офіційних текстах)
          </p>
        </div>
      </section>

      <section className="theory-section">
        <h2>Стверджувальні речення</h2>
        <ul className="examples">
          <li>I <strong>’ll call</strong> you tomorrow. – Я зателефоную тобі завтра.</li>
          <li>She <strong>will help</strong> us. – Вона допоможе нам.</li>
          <li>We <strong>’ll go</strong> to the sea next summer. – Ми поїдемо на море наступного літа.</li>
          <li>The train <strong>will arrive</strong> at 9 PM. – Потяг прибуде о 21:00.</li>
          <li>He <strong>’ll be</strong> a doctor one day. – Одного дня він буде лікарем.</li>
        </ul>
      </section>

      <section className="theory-section">
        <h2>Заперечні речення</h2>
        <ul className="examples">
          <li>I <strong>won’t forget</strong> your birthday. – Я не забуду твій день народження.</li>
          <li>They <strong>won’t come</strong> to the party. – Вони не прийдуть на вечірку.</li>
          <li>She <strong>won’t be</strong> late. – Вона не спізниться.</li>
          <li>It <strong>won’t rain</strong> tomorrow. – Завтра не буде дощу.</li>
        </ul>
      </section>

      <section className="theory-section">
        <h2>Питальні речення</h2>
        <ul className="examples">
          <li><strong>Will</strong> you <strong>marry</strong> me? – Ти вийдеш за мене?</li>
          <li><strong>Will</strong> it <strong>rain</strong> tomorrow? – Завтра буде дощ?</li>
          <li><strong>Where will</strong> you <strong>go</strong> on vacation? – Куди ти поїдеш у відпустку?</li>
          <li><strong>When will</strong> the film <strong>start</strong>? – Коли почнеться фільм?</li>
        </ul>
      </section>

      <section className="theory-section">
        <h2>Коли використовуємо Future Simple</h2>
        <div className="usage-grid">
          <div className="usage-card">
            <h3>Плани та прогнози</h3>
            <p>I think it <strong>will rain</strong> later.</p>
          </div>
          <div className="usage-card">
            <h3>Обіцянки та пропозиції</h3>
            <p>I <strong>’ll help</strong> you with homework.</p>
          </div>
          <div className="usage-card">
            <h3>Спонтанні рішення</h3>
            <p>— It’s cold!<br />— I <strong>’ll close</strong> the window.</p>
          </div>
          <div className="usage-card">
            <h3>Факти про майбутнє</h3>
            <p>The sun <strong>will rise</strong> at 6:12 tomorrow.</p>
          </div>
          <div className="usage-card">
            <h3>Припущення</h3>
            <p>He’s late — he <strong>’ll be</strong> stuck in traffic.</p>
          </div>
        </div>
      </section>

      <section className="theory-section">
        <h2>Маркери часу</h2>
        <div className="markers">
          <span>tomorrow</span>
          <span>tonight</span>
          <span>soon</span>
          <span>next week</span>
          <span>next year</span>
          <span>in 2050</span>
          <span>in a month</span>
          <span>later</span>
          <span>one day</span>
          <span>someday</span>
          <span>this weekend</span>
          <span>the day after tomorrow</span>
        </div>
      </section>

      <footer className="theory-footer">
        <p>Ти вже знаєш три найважливіші часи:<br />
           Present Simple → Past Simple → <strong>Future Simple</strong><br />
           Ти — легенда. Продовжуй, ми з тобою!</p>
      </footer>
    </article>
  )
}

export default A1FutureSimple