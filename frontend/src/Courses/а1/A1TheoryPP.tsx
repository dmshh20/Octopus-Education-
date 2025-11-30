import '../Theory.css'

const A1PastSimple = () => {
  return (
    <article className="theory-article">
      <header className="theory-header">
        <h1>Past Simple</h1>
        <p className="subtitle">Простий (неозначений) минулий час</p>
      </header>

      {/* ТАБЛИЦЯ ФОРМУВАННЯ */}
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
              <td>I / You / He / She / It / We / They</td>
              <td><strong>V₂</strong> або <strong>V-ed</strong><br /><small>worked · went</small></td>
              <td>did <strong>not</strong> V<br /><small>didn't work</small></td>
              <td><strong>Did</strong> … V ?</td>
            </tr>
          </tbody>
        </table>

        <div className="highlight-box">
          <p><strong>did not = допоміжне дієслово для всіх осіб</strong><br />
             <strong>did not = didn't</strong></p>
        </div>
      </section>

      {/* СТВЕРДЖУВАЛЬНІ */}
      <section className="theory-section">
        <h2>Стверджувальні речення</h2>
        <ul className="examples">
          <li>She <strong>worked</strong> abroad last year. – Вона працювала за кордоном минулого року.</li>
          <li>My uncle <strong>lived</strong> in London in the 90s. – Мій дядько жив у Лондоні в 90-х.</li>
          <li>Harry <strong>wrote</strong> 7 books. – Гаррі написав 7 книг.</li>
          <li>I <strong>saw</strong> a great movie yesterday. – Я подивився крутий фільм вчора.</li>
          <li>We <strong>were</strong> happy children. – Ми були щасливими дітьми.</li>
          <li>They <strong>were</strong> at the concert. – Вони були на концерті.</li>
        </ul>

        <div className="note">
          <p><strong>Правильні дієслова</strong> → +<strong>-ed</strong>: work → worked, play → played<br />
             <strong>Особливі випадки</strong>: study → studied, stop → stopped<br />
             <strong>Неправильні дієслова</strong> → 2-га форма: go → went, see → saw, buy → bought</p>
        </div>
      </section>

      {/* ЗАПЕРЕЧНІ */}
      <section className="theory-section">
        <h2>Заперечні речення</h2>
        <ul className="examples">
          <li>She <strong>didn’t work</strong> abroad. – Вона не працювала за кордоном.</li>
          <li>Harry <strong>didn’t write</strong> letters. – Гаррі не писав листи.</li>
          <li>I <strong>wasn’t</strong> angry yesterday. – Я не був злий вчора.</li>
          <li>They <strong>weren’t</strong> at home. – Їх не було вдома.</li>
        </ul>
      </section>

      {/* ПИТАЛЬНІ */}
      <section className="theory-section">
        <h2>Питальні речення</h2>
        <ul className="examples">
          <li><strong>Did</strong> you <strong>visit</strong> Paris? – Ти відвідував Париж?</li>
          <li><strong>Did</strong> she <strong>call</strong> you? – Вона тобі дзвонила?</li>
          <li><strong>Where did</strong> you <strong>go</strong> last summer? – Куди ти їздив минулого літа?</li>
          <li><strong>Was</strong> he at school yesterday? – Він був у школі вчора?</li>
          <li><strong>Were</strong> they happy? – Вони були щасливі?</li>
        </ul>
      </section>

      {/* TO BE В PAST SIMPLE */}
      <section className="theory-section">
        <h2>Дієслово to be в Past Simple</h2>
        <table className="grammar-table">
          <thead>
            <tr><th>I / He / She / It</th><th>You / We / They</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>was</strong></td><td><strong>were</strong></td></tr>
          </tbody>
        </table>
        <ul className="examples">
          <li>I <strong>was</strong> tired after work.</li>
          <li>You <strong>were</strong> my best friend.</li>
          <li>They <strong>weren’t</strong> ready.</li>
        </ul>
      </section>

      {/* ВИКОРИСТАННЯ */}
      <section className="theory-section">
        <h2>Коли використовуємо Past Simple</h2>
        <div className="usage-grid">
          <div className="usage-card">
            <h3>Завершені дії в минулого</h3>
            <p>I visited Rome in 2020.</p>
          </div>
          <div className="usage-card">
            <h3>Послідовність дій</h3>
            <p>She woke up, had breakfast and left.</p>
          </div>
          <div className="usage-card">
            <h3>Факти біографії</h3>
            <p>Shakespeare wrote 37 plays.</p>
          </div>
          <div className="usage-card">
            <h3>Дії, що більше не повторюються</h3>
            <p>My grandma lived in a village.</p>
          </div>
        </div>
      </section>

      {/* МАРКЕРИ ЧАСУ */}
      <section className="theory-section">
        <h2>Маркери часу</h2>
        <div className="markers">
          <span>yesterday</span>
          <span>last week</span>
          <span>last year</span>
          <span>two days ago</span>
          <span>in 1999</span>
          <span>the day before yesterday</span>
          <span>when I was a child</span>
          <span>once</span>
          <span>in the 90s</span>
          <span>a long time ago</span>
        </div>
      </section>

      <footer className="theory-footer">
        <p>Тепер ти точно знаєш Past Simple на 100%!<br />Йдемо далі — ти молодець!</p>
      </footer>
    </article>
  )
}

export default A1PastSimple