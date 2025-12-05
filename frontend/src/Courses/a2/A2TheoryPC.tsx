import '../Theory.css' 

const A2PresentContinuous = () => {
  return (
    <article className="theory-article">
      <header className="theory-header">
        <h1>Present Continuous</h1>
        <p className="subtitle">Теперішній тривалий час</p>
      </header>

      {/* ТАБЛИЦЯ ФОРМУВАННЯ */}
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
              <td>I</td>
              <td><strong>am</strong> V-ing<br /><small>I'm working</small></td>
              <td>am <strong>not</strong> V-ing<br /><small>I'm not working</small></td>
              <td><strong>Am</strong> I V-ing?</td>
            </tr>
            <tr>
              <td>He / She / It</td>
              <td><strong>is</strong> V-ing<br /><small>She's reading</small></td>
              <td>is <strong>not</strong> V-ing<br /><small>isn't reading</small></td>
              <td><strong>Is</strong> … V-ing?</td>
            </tr>
            <tr>
              <td>You / We / They</td>
              <td><strong>are</strong> V-ing<br /><small>We're playing</small></td>
              <td>are <strong>not</strong> V-ing<br /><small>aren't playing</small></td>
              <td><strong>Are</strong> … V-ing?</td>
            </tr>
          </tbody>
        </table>

        <div className="highlight-box">
          <p>
            <strong>I'm</strong> = I am | <strong>He's / She's / It's</strong> = He is / She is / It is<br />
            <strong>You're / We're / They're</strong> = You are / We are / They are<br />
            <strong>isn't</strong> = is not | <strong>aren't</strong> = are not
          </p>
        </div>
      </section>

      {/* СТВЕРДЖУВАЛЬНІ + ЗАПЕРЕЧНІ */}
      <section className="theory-section">
        <h2>Приклади</h2>
        <ul className="examples">
          <li>I <strong>'m reading</strong> a book now. – Я зараз читаю книгу.</li>
          <li>She <strong>'s working</strong> at the moment. – Вона зараз працює.</li>
          <li>We <strong>'re not playing</strong> football today. – Ми сьогодні не граємо у футбол.</li>
          <li>He <strong>isn't watching</strong> TV. – Він не дивиться телевізор.</li>
          <li>They <strong>'re walking</strong> in the park right now. – Вони зараз гуляють у парку.</li>
        </ul>
      </section>

      {/* ПИТАЛЬНІ */}
      <section className="theory-section">
        <h2>Питальні речення</h2>
        <ul className="examples">
          <li><strong>Are</strong> you <strong>listening</strong> to me? – Ти мене слухаєш?</li>
          <li><strong>Is</strong> it <strong>raining</strong> outside? – Надворі дощить?</li>
          <li><strong>What are</strong> you <strong>doing</strong> right now? – Що ти зараз робиш?</li>
          <li><strong>Why is</strong> she <strong>crying</strong>? – Чому вона плаче?</li>
        </ul>
      </section>

      {/* ПРАВИЛА -ing */}
      <section className="theory-section">
        <h2>Додавання закінчення -ing</h2>
        <div className="note">
          <p><strong>work → working</strong> <strong>play → playing</strong> <strong>read → reading</strong><br />
             <strong>stop → stopping</strong> (подвоюємо останню літеру)<br />
             <strong>write → writing</strong> (e → випадає)<br />
             <strong>die → dying</strong> (ie → y)</p>
        </div>
      </section>

      {/* ВИКОРИСТАННЯ */}
      <section className="theory-section">
        <h2>Коли використовуємо Present Continuous</h2>
        <div className="usage-grid">
          <div className="usage-card">
            <h3>Дія прямо зараз</h3>
            <p>I <strong>'m talking</strong> to you now.</p>
          </div>
          <div className="usage-card">
            <h3>Тимчасова ситуація</h3>
            <p>She <strong>'s living</strong> in Lviv this year.</p>
          </div>
          <div className="usage-card">
            <h3>Заплановане майбутнє</h3>
            <p>We <strong>'re meeting</strong> at 7 PM.</p>
          </div>
          <div className="usage-card">
            <h3>Зміни, що відбуваються</h3>
            <p>The weather <strong>'s getting</strong> colder.</p>
          </div>
          <div className="usage-card">
            <h3>Дратівливі звички (з always)</h3>
            <p>He <strong>'s always losing</strong> his keys!</p>
          </div>
        </div>
      </section>

      {/* МАРКЕРИ ЧАСУ */}
      <section className="theory-section">
        <h2>Маркери часу</h2>
        <div className="markers">
          <span>now</span>
          <span>right now</span>
          <span>at the moment</span>
          <span>currently</span>
          <span>today</span>
          <span>tonight</span>
          <span>this week</span>
          <span>these days</span>
          <span>still</span>
          <span>at present</span>
        </div>
      </section>

      <footer className="theory-footer">
        <p>Ти вже опанував 4 ключові часи:<br />
           Present Simple • Past Simple • Future Simple • <strong>Present Continuous</strong><br />
           Ти — неймовірний. Продовжуй!</p>
      </footer>
    </article>
  )
}

export default A2PresentContinuous