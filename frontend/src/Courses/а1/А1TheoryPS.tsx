import '../Theory.css'

const A1PresentSimple = () => {
  return (
    <article className="theory-article">
      <header className="theory-header">
        <h1>Present Simple</h1>
        <p className="subtitle">Простий (неозначений) теперішній час</p>
      </header>

      <section className="theory-section">
        <h2>Формулювання речень</h2>

        <table className="grammar-table">
          <thead>
            <tr>
              <th></th>
              <th>Стверджувальне</th>
              <th>Заперечне</th>
              <th>Питальне</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I / You / We / They</td>
              <td><strong>V</strong> (work)</td>
              <td>do <strong>not</strong> V<br /><small>(don't work)</small></td>
              <td><strong>Do</strong> … V ?</td>
            </tr>
            <tr>
              <td>He / She / It</td>
              <td><strong>V-s/es</strong> (works)</td>
              <td>does <strong>not</strong> V<br /><small>(doesn't work)</small></td>
              <td><strong>Does</strong> … V ?</td>
            </tr>
          </tbody>
        </table>

        <div className="highlight-box">
          <p><strong>do not = don't</strong>  <strong>does not = doesn't</strong></p>
        </div>
      </section>

      <section className="theory-section">
        <h2>Стверджувальні речення</h2>
        <ul className="examples">
          <li>I <strong>study</strong> French. – Я вчу французьку.</li>
          <li>You <strong>speak</strong> English. – Ти розмовляєш англійською.</li>
          <li>We <strong>play</strong> the violins. – Ми граємо на скрипках.</li>
          <li>Cats <strong>like</strong> milk. – Коти люблять молоко.</li>
          <li>She <strong>speaks</strong> English. – Вона розмовляє англійською.</li>
          <li>He <strong>plays</strong> the violin. – Він грає на скрипці.</li>
          <li>My cat <strong>has</strong> green eyes. – Мій кіт має зелені очі.</li>
        </ul>
        <p className="note">
          <strong>-s / -es</strong> додається до дієслова в 3-й особі однини.<br />
          <strong>have → has</strong>, <strong>go → goes</strong>, <strong>watch → watches</strong>
        </p>
      </section>

      <section className="theory-section">
        <h2>Заперечні речення</h2>
        <ul className="examples">
          <li>I <strong>don’t</strong> speak German. – Я не розмовляю німецькою.</li>
          <li>They <strong>don’t</strong> play tennis. – Вони не грають у теніс.</li>
          <li>She <strong>doesn’t</strong> like coffee. – Вона не любить каву.</li>
          <li>The dog <strong>doesn’t</strong> eat vegetables. – Собака не їсть овочі.</li>
        </ul>
      </section>

      <section className="theory-section">
        <h2>Питальні речення</h2>
        <ul className="examples">
          <li><strong>Do</strong> you live in Kyiv? – Ти живеш у Києві?</li>
          <li><strong>Does</strong> he work every day? – Він працює щодня?</li>
          <li><strong>Why do</strong> they study English? – Чому вони вивчають англійську?</li>
          <li><strong>What time does</strong> the train leave? – О котрій відправляється потяг?</li>
        </ul>
      </section>

      <section className="theory-section">
        <h2>Дієслово to be в Present Simple</h2>
        <table className="grammar-table">
          <thead>
            <tr><th>I</th><th>He/She/It</th><th>We/You/They</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>am</strong></td><td><strong>is</strong></td><td><strong>are</strong></td></tr>
          </tbody>
        </table>
        <ul className="examples">
          <li>I <strong>am</strong> ready.</li>
          <li>She <strong>is</strong> not here.</li>
          <li>We <strong>are</strong> students.</li>
        </ul>
      </section>

      <section className="theory-section">
        <h2>Коли використовуємо Present Simple</h2>
        <div className="usage-grid">
          <div className="usage-card">
            <h3>Звички та регулярні дії</h3>
            <p>I wake up at 7 o’clock.</p>
          </div>
          <div className="usage-card">
            <h3>Факти та загальні істини</h3>
            <p>Water boils at 100°C.</p>
          </div>
          <div className="usage-card">
            <h3>Розклад (transport, TV)</h3>
            <p>The bus leaves at 8:30.</p>
          </div>
          <div className="usage-card">
            <h3>Стани (like, know, need…)</h3>
            <p>She likes chocolate.</p>
          </div>
          <div className="usage-card">
            <h3>Коментарі, інструкції, заголовки</h3>
            <p>Messi scores! · Open the window.</p>
          </div>
        </div>
      </section>

      <section className="theory-section">
        <h2>Маркери часу</h2>
        <div className="markers">
          <span>always</span> <span>usually</span> <span>often</span> <span>sometimes</span>
          <span>rarely</span> <span>never</span> <span>every day</span> <span>on Mondays</span>
          <span>twice a week</span> <span>once a month</span>
        </div>
      </section>

      <footer className="theory-footer">
        <p>Гарного вивчення! Ви точно опануєте Present Simple</p>
      </footer>
    </article>
  )
}

export default A1PresentSimple