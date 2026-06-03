import { ArrowRight, BarChart3, BriefcaseBusiness, LineChart, ShieldCheck } from "lucide-react";

const companies = ["HONEYWELL", "COATS", "HEPWORTH", "MIDAS", "HOUSE OF HABIB", "TPL"];
const services = [
  ["Finance Operations","Accounting, bookkeeping, payroll, AP/AR, reconciliations, month-end close, and management reporting.", BriefcaseBusiness],
  ["Financial Intelligence","KPI dashboards, forecasting, budgeting, cash-flow visibility, and performance analytics for better decisions.", BarChart3],
  ["Finance Leadership","Fractional CFO, controller services, board reporting, strategic planning, and finance function leadership.", ShieldCheck],
  ["Finance Transformation","ERP, SAP advisory, process improvement, controls, operating model design, and scalable finance modernization.", LineChart],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="brand">FIN<span>CRED</span>UM</div>
        <nav><a>Home</a><a>Services</a><a>Industries</a><a>About</a><a>Insights</a><a>Contact</a></nav>
        <a className="navCta" href="mailto:advisory@fincredum.com">Schedule Consultation</a>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">For businesses across the US, UK & Australia</p>
          <h1>Your Finance Function. Led by Experts.</h1>
          <p className="subhead">FinCredum helps growing businesses strengthen finance operations, improve decision-making, and scale with confidence through outsourced finance support, financial intelligence, and strategic CFO advisory.</p>
          <div className="buttons"><a className="primary" href="mailto:advisory@fincredum.com">Schedule a Consultation <ArrowRight size={18}/></a><a className="secondary" href="#services">Explore Services</a></div>
        </div>
        <div className="heroCard">
          <div className="cardTop"><span>Enterprise Finance Dashboard</span><strong>Q4</strong></div>
          <div className="metricGrid"><div><small>Cash Visibility</small><b>+38%</b></div><div><small>Close Cycle</small><b>-42%</b></div><div><small>EBIT Focus</small><b>↑</b></div><div><small>Forecast Accuracy</small><b>91%</b></div></div>
          <div className="chart"><span></span><span></span><span></span><span></span><span></span></div>
        </div>
      </section>

      <section className="marqueeSection"><p>Leadership experience across industry leaders</p><div className="marquee"><div className="track">{[...companies,...companies,...companies].map((c,i)=><span key={i}>{c}</span>)}</div></div></section>

      <section id="services" className="section">
        <div className="sectionHead"><p className="eyebrow">What we do</p><h2>End-to-end finance leadership</h2><p>From daily finance operations to board-level insight, FinCredum supports the full finance function.</p></div>
        <div className="services">{services.map(([title,text,Icon]: any)=><div className="serviceCard" key={title}><Icon size={30}/><h3>{title}</h3><p>{text}</p></div>)}</div>
      </section>

      <section className="split">
        <div><p className="eyebrow">Why FinCredum</p><h2>Beyond accounting. Beyond outsourcing.</h2></div>
        <div><p>Most providers focus on transactions. FinCredum focuses on outcomes—combining executive finance expertise with scalable delivery capability to help businesses improve visibility, strengthen controls, optimize performance, and create sustainable value.</p>
        <div className="proof"><div><b>20+</b><span>Years executive finance leadership</span></div><div><b>$200M+</b><span>Funding and financing exposure</span></div><div><b>SAP</b><span>ERP and transformation experience</span></div></div></div>
      </section>

      <section className="industries"><p className="eyebrow">Industries</p><h2>Built for complex, growing businesses</h2><div className="industryGrid">{["Manufacturing","Distribution & Wholesale","Healthcare","Professional Services","Family Businesses","Growth-Stage Companies"].map(x=><span key={x}>{x}</span>)}</div></section>

      <section className="leadership"><div className="portrait">SA</div><div><p className="eyebrow">Leadership</p><h2>Founded by finance leadership, not by a template.</h2><p>FinCredum is led by Syed Ali, CGMA, a finance transformation leader with over two decades of experience across multinational and family-owned enterprises, ERP implementation, treasury, funding, operational excellence, and strategic business partnering.</p></div></section>

      <section className="cta"><h2>Ready to build a stronger finance function?</h2><p>Partner with FinCredum to gain clarity, control, and strategic financial leadership.</p><a href="mailto:advisory@fincredum.com">Contact advisory@fincredum.com</a></section>

      <footer><div className="brand">FIN<span>CRED</span>UM</div><p>Strategic finance operations, intelligence, and leadership for growing businesses.</p><p>© 2026 FinCredum. All rights reserved.</p></footer>
    </main>
  );
}
