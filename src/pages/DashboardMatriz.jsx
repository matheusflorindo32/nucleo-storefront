import { useEffect } from "react";
import { MATRIZ } from "../data/matrizDashboard.js";

const CORES = {
  bg: "#0B0F1A",
  panel: "#131A2A",
  grid: "#243044",
  fg: "#E6EDF7",
  muted: "#8AA0BF",
  gold: "#E8B84B",
  prim: "#4C8BF5",
  cyan: "#25D5C8",
  mag: "#C86BFF",
  red: "#EF4A6B",
  orng: "#F59E0B",
  green: "#2ECC71",
};

const CRIT_COLOR = {
  "CRÍTICA": CORES.red,
  "ALTA": CORES.orng,
  "MÉDIA": CORES.gold,
};

function Donut({ dados, total }) {
  const R = 62, C = 2 * Math.PI * R;
  const soma = dados.reduce((a, b) => a + b.valor, 0);
  let acc = 0;
  return (
    <svg viewBox="0 0 180 180" width="180" height="180" role="img" aria-label="Distribuição por criticidade">
      <circle cx="90" cy="90" r={R} fill="none" stroke={CORES.grid} strokeWidth="18" />
      {dados.map((d, i) => {
        const frac = d.valor / soma;
        const dash = frac * C;
        const off = C - acc;
        acc += dash;
        return (
          <circle key={i} cx="90" cy="90" r={R} fill="none"
            stroke={d.cor} strokeWidth="18" strokeDasharray={`${dash} ${C - dash}`}
            strokeDashoffset={off} transform="rotate(-90 90 90)" strokeLinecap="butt" />
        );
      })}
      <text x="90" y="88" textAnchor="middle" fill={CORES.fg}
        style={{ font: "bold 34px system-ui" }}>{total}</text>
      <text x="90" y="108" textAnchor="middle" fill={CORES.muted}
        style={{ font: "10px system-ui", letterSpacing: 1 }}>ENTRADAS</text>
    </svg>
  );
}

function BarrasH({ dados, corPadrao = CORES.prim, destaque = false }) {
  const max = Math.max(...dados.map((d) => d.valor));
  return (
    <div className="dash-barras">
      {dados.map((d, i) => {
        const pct = (d.valor / max) * 100;
        const cor = d.cor || (destaque && d.valor === max ? CORES.gold : corPadrao);
        return (
          <div key={i} className="dash-barra-linha">
            <span className="dash-barra-label" title={d.label}>{d.label}</span>
            <div className="dash-barra-track">
              <div className="dash-barra-fill" style={{ width: pct + "%", background: cor }} />
            </div>
            <span className="dash-barra-valor">{d.valor}</span>
          </div>
        );
      })}
    </div>
  );
}

function Heatmap() {
  const max = Math.max(...MATRIZ.heat.flat());
  return (
    <div className="dash-heatmap" role="table" aria-label="Capítulo por Criticidade">
      <div className="dash-heatmap-header">
        <div />
        {MATRIZ.CRIT_ORDER.map((c) => (
          <div key={c} className="dash-heatmap-th">{c}</div>
        ))}
      </div>
      {MATRIZ.CAP_ORDER.map((cap, i) => (
        <div key={cap} className="dash-heatmap-linha">
          <div className="dash-heatmap-rowlabel">{cap}</div>
          {MATRIZ.heat[i].map((v, j) => {
            const intens = max ? v / max : 0;
            const bg = `rgba(232, 184, 75, ${0.08 + intens * 0.92})`;
            return (
              <div key={j} className="dash-heatmap-cell" style={{ background: v ? bg : "transparent", color: intens > 0.55 ? CORES.bg : CORES.fg }}>
                {v || ""}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function StackedCS() {
  return (
    <div className="dash-stacked">
      {MATRIZ.CRIT_ORDER.map((c) => {
        const dat = MATRIZ.cs[c] || { APLICADA: 0, PENDENTE: 0 };
        const total = dat.APLICADA + dat.PENDENTE;
        const maxTot = Math.max(...MATRIZ.CRIT_ORDER.map((k) => (MATRIZ.cs[k].APLICADA + MATRIZ.cs[k].PENDENTE)));
        const alt = (total / maxTot) * 100;
        const aplPct = total ? (dat.APLICADA / total) * 100 : 0;
        return (
          <div key={c} className="dash-stacked-col">
            <div className="dash-stacked-total">{total}</div>
            <div className="dash-stacked-bar" style={{ height: alt + "%" }}>
              <div className="dash-stacked-pen" style={{ height: 100 - aplPct + "%" }} />
              <div className="dash-stacked-apl" style={{ height: aplPct + "%" }} />
            </div>
            <div className="dash-stacked-label" style={{ color: CRIT_COLOR[c] }}>{c}</div>
          </div>
        );
      })}
    </div>
  );
}

function DashboardMatriz() {
  useEffect(() => {
    document.title = "Dashboard Matriz Científica · Núcleo TADS Store";
  }, []);

  const critDados = ["CRÍTICA", "ALTA", "MÉDIA"].map((k) => ({
    label: k, valor: MATRIZ.crit[k] || 0, cor: CRIT_COLOR[k],
  }));

  const capDados = MATRIZ.cap.map(([label, valor]) => ({ label, valor }));
  const tipoPalette = [CORES.cyan, CORES.mag, CORES.prim, CORES.gold, CORES.orng, CORES.red, CORES.green, "#7EE787"];
  const tipoDados = MATRIZ.tipo.map(([label, valor], i) => ({ label, valor, cor: tipoPalette[i % tipoPalette.length] }));
  const refDados = MATRIZ.refs.map(([label, valor]) => ({ label, valor }));

  const totalCritAlta = (MATRIZ.crit["CRÍTICA"] || 0) + (MATRIZ.crit["ALTA"] || 0);

  const kpis = [
    { label: "Entradas auditadas", valor: MATRIZ.N, cor: CORES.prim },
    { label: "Críticas + Altas", valor: totalCritAlta, cor: CORES.red },
    { label: "Aplicadas", valor: `${MATRIZ.stat.APLICADA} (${Math.round(MATRIZ.stat.APLICADA / MATRIZ.N * 100)}%)`, cor: CORES.green },
    { label: "Pendentes", valor: MATRIZ.stat.PENDENTE || 0, cor: CORES.orng },
    { label: "Capítulos afetados", valor: MATRIZ.cap.length, cor: CORES.cyan },
    { label: "Referências novas", valor: MATRIZ.refs.length, cor: CORES.gold },
  ];

  return (
    <div className="dash-root">
      <header className="dash-header">
        <span className="dash-eyebrow">MATRIZ CIENTÍFICA · DASHBOARD EDITORIAL</span>
        <h1>Auditoria de Citações, Vereditos e Correções</h1>
        <p>Guia Básico de Preparação Física para Agentes de Segurança Pública — Revisão 15/06/2026</p>
      </header>

      <section className="dash-kpis">
        {kpis.map((k) => (
          <article key={k.label} className="dash-kpi" style={{ "--kpi-cor": k.cor }}>
            <div className="dash-kpi-bar" />
            <div className="dash-kpi-valor">{k.valor}</div>
            <div className="dash-kpi-label">{k.label}</div>
          </article>
        ))}
      </section>

      <section className="dash-score">
        <h2>Score Científico — Evolução</h2>
        <div className="dash-score-track">
          <div className="dash-score-antes" />
          <div className="dash-score-depois" />
          <div className="dash-score-marker" />
        </div>
        <div className="dash-score-legenda">
          <span style={{ color: CORES.red }}>Inicial: 4.5/10</span>
          <span style={{ color: CORES.muted }}>→</span>
          <span style={{ color: CORES.green }}>Alcançado: 7.5–8.0/10</span>
        </div>
        <p className="dash-score-nota">Ganho de +3.0 a +3.5 pontos após {MATRIZ.stat.APLICADA} correções aplicadas e {MATRIZ.stat.PENDENTE} verificações pendentes.</p>
      </section>

      <section className="dash-grid-3">
        <article className="dash-card">
          <h3>Distribuição por Criticidade</h3>
          <div className="dash-donut-wrap">
            <Donut dados={critDados} total={MATRIZ.N} />
            <ul className="dash-donut-leg">
              {critDados.map((d) => (
                <li key={d.label}>
                  <span className="dash-dot" style={{ background: d.cor }} />
                  <span className="dash-leg-nome" style={{ color: d.cor }}>{d.label}</span>
                  <span className="dash-leg-val">{d.valor} ({Math.round(d.valor / MATRIZ.N * 100)}%)</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="dash-card">
          <h3>Status das Correções</h3>
          <div className="dash-status">
            <div className="dash-status-col">
              <div className="dash-status-num" style={{ color: CORES.green }}>{MATRIZ.stat.APLICADA}</div>
              <div className="dash-status-bar" style={{ background: CORES.green, height: "100%" }} />
              <div className="dash-status-lab">Aplicada</div>
            </div>
            <div className="dash-status-col">
              <div className="dash-status-num" style={{ color: CORES.orng }}>{MATRIZ.stat.PENDENTE}</div>
              <div className="dash-status-bar" style={{ background: CORES.orng, height: `${(MATRIZ.stat.PENDENTE / MATRIZ.stat.APLICADA) * 100}%` }} />
              <div className="dash-status-lab">Pendente</div>
            </div>
          </div>
        </article>

        <article className="dash-card">
          <h3>Criticidade × Status</h3>
          <StackedCS />
          <div className="dash-stacked-leg">
            <span><i style={{ background: CORES.green }} /> Aplicada</span>
            <span><i style={{ background: CORES.orng }} /> Pendente</span>
          </div>
        </article>
      </section>

      <section className="dash-grid-2">
        <article className="dash-card">
          <h3>Ocorrências por Capítulo</h3>
          <BarrasH dados={capDados} corPadrao={CORES.prim} destaque />
        </article>
        <article className="dash-card">
          <h3>Natureza do Problema (categorizado)</h3>
          <BarrasH dados={tipoDados} />
        </article>
      </section>

      <section className="dash-grid-2">
        <article className="dash-card dash-card-wide">
          <h3>Heatmap · Capítulo × Criticidade</h3>
          <Heatmap />
        </article>
        <article className="dash-card">
          <h3>Top 10 · Referências utilizadas</h3>
          <BarrasH dados={refDados} corPadrao={CORES.prim} destaque />
        </article>
      </section>

      <section className="dash-card dash-card-tabela">
        <h3>Ocorrências Críticas &amp; Alta Prioridade</h3>
        <div className="dash-tabela-wrap">
          <table className="dash-tabela">
            <thead>
              <tr>
                <th>ID</th><th>Capítulo</th><th>Trecho original</th>
                <th>Correção proposta</th><th>Crit.</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {MATRIZ.top.map((r) => (
                <tr key={r.id}>
                  <td className="dash-mono">{r.id}</td>
                  <td>{r.cap}</td>
                  <td className="dash-trecho">{r.trecho}</td>
                  <td className="dash-correcao">{r.correcao}</td>
                  <td><span className="dash-pill" style={{ background: CRIT_COLOR[r.crit] + "22", color: CRIT_COLOR[r.crit] }}>{r.crit}</span></td>
                  <td><span className="dash-pill" style={{ background: (r.status === "APLICADA" ? CORES.green : CORES.orng) + "22", color: r.status === "APLICADA" ? CORES.green : CORES.orng }}>{r.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="dash-footer">
        <p>Fonte: MATRIZ_CITACAO_TRECHO_VEREDITO_CORRECAO · 32 entradas · Score 4.5 → 7.5–8.0/10</p>
      </footer>
    </div>
  );
}

export default DashboardMatriz;
