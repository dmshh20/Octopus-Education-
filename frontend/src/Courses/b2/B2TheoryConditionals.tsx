import '../Theory.css'

const B2Conditionals = () => {
  return (
    <article className="theory-article">
      <header className="theory-header">
        <h1>Conditionals</h1>
        <p className="subtitle">Умовні речення в англійській мові</p>
      </header>

      <section className="theory-section">
        <h2>Zero Conditional — Загальні істини</h2>
        <p className="note">
          If / When + <strong>Present Simple</strong> → <strong>Present Simple</strong>
        </p>
        <ul className="examples">
          <li>If you heat water to 100°C, <strong>it boils</strong>.</li>
          <li>Plants <strong>die</strong> if you <strong>don’t water</strong> them.</li>
          <li>When I <strong>mix</strong> blue and yellow, I <strong>get</strong> green.</li>
        </ul>
      </section>

      <section className="theory-section">
        <h2>First Conditional — Реальне майбутнє</h2>
        <p className="note">
          If + <strong>Present Simple</strong> → <strong>will / can / may / might / should / імператив</strong>
        </p>
        <ul className="examples">
          <li>If it <strong>rains</strong> tomorrow, we <strong>’ll stay</strong> home.</li>
          <li>If you <strong>see</strong> Anna, <strong>tell</strong> her I called.</li>
          <li>You <strong>can go</strong> out if you <strong>finish</strong> your homework.</li>
          <li>Unless you <strong>hurry</strong>, we <strong>’ll miss</strong> the train.</li>
        </ul>
      </section>

      <section className="theory-section">
        <h2>Second Conditional — Нереальне теперішнє / майбутнє</h2>
        <p className="note">
          If + <strong>Past Simple</strong> → <strong>would / could / might</strong> + V
        </p>
        <ul className="examples">
          <li>If I <strong>won</strong> the lottery, I <strong>would travel</strong> the world.</li>
          <li>If she <strong>were</strong> here, she <strong>would help</strong> us. <em>(were для всіх!)</em></li>
          <li>We <strong>could live</strong> in Paris if we <strong>spoke</strong> French.</li>
        </ul>
      </section>

      <section className="theory-section">
        <h2>Third Conditional — Нереальне минуле</h2>
        <p className="note">
          If + <strong>Past Perfect</strong> → <strong>would / could / might have</strong> + V₃
        </p>
        <ul className="examples">
          <li>If you <strong>had studied</strong>, you <strong>would have passed</strong> the exam.</li>
          <li>We <strong>wouldn’t have got</strong> lost if we <strong>had taken</strong> a map.</li>
          <li>If he <strong>hadn’t been</strong> late, he <strong>might have caught</strong> the train.</li>
        </ul>
      </section>

      <section className="theory-section">
        <h2>Mixed Conditionals — Змішані типи</h2>

        <div className="usage-grid">
          <div className="usage-card">
            <h3>Минуле → наслідок зараз (3 + 2)</h3>
            <p>If I <strong>had won</strong> the lottery, I <strong>would be</strong> rich now.</p>
            <p>If we <strong>hadn’t missed</strong> the bus, we <strong>wouldn’t be</strong> walking.</p>
          </div>

          <div className="usage-card">
            <h3>Теперішнє → наслідок у минулому (2 + 3)</h3>
            <p>If I <strong>weren’t</strong> so shy, I <strong>would have asked</strong> her out.</p>
            <p>If she <strong>spoke</strong> English, she <strong>could have got</strong> that job.</p>
          </div>
        </div>
      </section>

      <section className="theory-section">
        <h2>Кома в умовних реченнях</h2>
        <div className="highlight-box">
          <p><strong>Якщо if-частина перша</strong> → кома потрібна:<br />
             <em>If you call me</em>, <strong>I’ll come</strong>.</p>
          <p><strong>Якщо if-частина друга</strong> → коми немає:<br />
             <strong>I’ll come</strong> <em>if you call me</em>.</p>
        </div>
      </section>

      <section className="theory-section">
        <h2>Підсумкова таблиця</h2>
        <table className="grammar-table">
          <thead>
            <tr>
              <th>Тип</th>
              <th>Умова (if)</th>
              <th>Результат</th>
              <th>Значення</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Zero</td><td>Present Simple</td><td>Present Simple</td><td>Факти, правила</td></tr>
            <tr><td>First</td><td>Present Simple</td><td>will/can/may + V</td><td>Реальне майбутнє</td></tr>
            <tr><td>Second</td><td>Past Simple</td><td>would/could + V</td><td>Нереальне зараз</td></tr>
            <tr><td>Third</td><td>Past Perfect</td><td>would have + V₃</td><td>Нереальне минуле</td></tr>
          </tbody>
        </table>
      </section>

      <footer className="theory-footer">
        <p>Ти щойно опанував один із найскладніших розділів англійської граматики<br />
           <strong>Conditionals — більше ніколи не будуть проблемою</strong><br />
           Ти — справжній B2 герой</p>
      </footer>
    </article>
  )
}

export default B2Conditionals