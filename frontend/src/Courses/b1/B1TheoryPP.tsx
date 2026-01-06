import '../Theory.css' 

const B1PresentPerfect = () => {
  return (
    <article className="theory-article">
      <header className="theory-header">
        <h1>Present Perfect</h1>
        <p className="subtitle">Теперішній доконаний час</p>
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
              <td>I / You / We / They</td>
              <td><strong>have</strong> V₃<br /><small>I've worked</small></td>
              <td>have <strong>not</strong> V₃<br /><small>haven't worked</small></td>
              <td><strong>Have</strong> … V₃?</td>
            </tr>
            <tr>
              <td>He / She / It</td>
              <td><strong>has</strong> V₃<br /><small>She's gone</small></td>
              <td>has <strong>not</strong> V₃<br /><small>hasn't gone</small></td>
              <td><strong>Has</strong> … V₃?</td>
            </tr>
          </tbody>
        </table>

        <div className="highlight-box">
          <p>
            <strong>I've / You've / We've / They've</strong> = have<br />
            <strong>He's / She's / It's</strong> = has<br />
            <strong>haven't</strong> = have not | <strong>hasn't</strong> = has not
          </p>
        </div>
      </section>

      <section className="theory-section">
        <h2>Приклади</h2>
        <ul className="examples">
          <li>I <strong>'ve just finished</strong> my homework. – Я щойно закінчив домашку.</li>
          <li>She <strong>'s already been</strong> to Japan twice. – Вона вже двічі була в Японії.</li>
          <li>We <strong>haven't seen</strong> this film yet. – Ми ще не дивилися цей фільм.</li>
          <li>He <strong>hasn't called</strong> me today. – Він сьогодні мені не дзвонив.</li>
          <li>They <strong>'ve lived</strong> here for 10 years. – Вони живуть тут уже 10 років.</li>
        </ul>
      </section>

      <section className="theory-section">
        <h2>Питальні речення</h2>
        <ul className="examples">
          <li><strong>Have</strong> you <strong>ever been</strong> to London? – Ти коли-небудь був у Лондоні?</li>
          <li><strong>Has</strong> she <strong>finished</strong> the project yet? – Вона вже закінчила проєкт?</li>
          <li><strong>How many times have</strong> you <strong>visited</strong> Paris? – Скільки разів ти був у Парижі?</li>
        </ul>
      </section>

      <section className="theory-section">
        <h2>Коли використовуємо Present Perfect</h2>
        <div className="usage-grid">
          <div className="usage-card">
            <h3>Результат важливий зараз</h3>
            <p>I <strong>'ve lost</strong> my keys! (ключі втрачені зараз)</p>
          </div>
          <div className="usage-card">
            <h3>Досвід (ever/never)</h3>
            <p>She <strong>'s never flown</strong> on a plane.</p>
          </div>
          <div className="usage-card">
            <h3>Дія почалася в минулому → триває</h3>
            <p>We <strong>'ve known</strong> each other since 2015.</p>
          </div>
          <div className="usage-card">
            <h3>Нещодавно завершене (just/already)</h3>
            <p>He <strong>'s just left</strong>. You missed him.</p>
          </div>
          <div className="usage-card">
            <h3>Ще не сталося (yet)</h3>
            <p>I <strong>haven't eaten</strong> yet.</p>
          </div>
        </div>
      </section>

      <section className="theory-section">
        <h2>Маркери часу</h2>
        <div className="markers">
          <span>ever</span>
          <span>never</span>
          <span>already</span>
          <span>yet</span>
          <span>just</span>
          <span>lately</span>
          <span>recently</span>
          <span>so far</span>
          <span>today</span>
          <span>this week</span>
          <span>this year</span>
          <span>since 2020</span>
          <span>for 5 years</span>
          <span>how many times</span>
        </div>
      </section>

      <footer className="theory-footer">
        <p>Вітаю! Ти вже знаєш один з найскладніших часів — <strong>Present Perfect</strong><br />
           Тепер твої студенти точно не плутатимуть його з Past Simple</p>
      </footer>
    </article>
  )
}

export default B1PresentPerfect