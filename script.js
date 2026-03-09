function make() {
    const esc = (s) => s ? s.replace(/&/g, '&amp;') : "";
    const t = esc(document.getElementById('t').value || 'Premium');
    const i = esc(document.getElementById('i').value);
    const p = esc(document.getElementById('p').value);
    const d = esc(document.getElementById('d').value);
    const pf = esc(document.getElementById('pf').value);
    const w = esc(document.getElementById('w').value);

    const f = document.getElementById('f').value.split(',').filter(x => x.trim()).map(x => 
        `<li style="padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.05);"><span style="color:#00ffa3; margin-right:10px;">✔</span> ${esc(x.trim())}</li>`
    ).join('');

    const s = document.getElementById('s').value.split(',').filter(x => x.includes(':')).map(x => {
        const [k, v] = x.split(':');
        return `<tr><td style="padding:10px; border-bottom:1px solid #1e293b; color:#94a3b8;">${esc(k.trim())}</td><td style="padding:10px; border-bottom:1px solid #1e293b; text-align:right; font-weight:bold;">${esc(v.trim())}</td></tr>`;
    }).join('');

    const code = `<div style="background:#11141b; color:#e2e8f0; font-family:sans-serif; border-radius:30px; border:1px solid #1e293b; overflow:hidden; max-width:800px; margin:auto;">
    <div style="position:relative; width:100%; height:350px; background:#000;"><span style="position:absolute; top:20px; left:20px; background:#00ffa3; color:#000; padding:5px 15px; border-radius:50px; font-size:11px; font-weight:800;">${t}</span><img src="${i}" style="width:100%; height:100%; object-fit:cover; opacity:0.8;"/></div>
    <div style="padding:30px;"><h2 style="color:#00ffa3; font-size:32px; margin:0 0 10px 0;">Price: ৳ ${p}</h2><p style="color:#94a3b8; line-height:1.7;">${d}</p>
    <div style="margin-top:25px; background:rgba(255,255,255,0.03); padding:20px; border-radius:20px; border-left:4px solid #00ffa3;"><h3 style="margin:0 0 15px 0; color:#fff;">Key Features</h3><ul style="padding:0; list-style:none; margin:0;">${f}</ul></div>
    <div style="margin-top:25px;"><h3 style="color:#fff;">Specifications</h3><table style="width:100%; border-collapse:collapse;">${s}</table></div>
    <div style="margin-top:25px; display:grid; grid-template-columns:1fr 1fr; gap:15px;"><div style="background:#0a0f1a; padding:15px; border-radius:15px; border:1px solid #1e293b;"><small style="color:#00ffa3; display:block; font-weight:800; font-size:10px;">PERFECT FOR</small><span>${pf}</span></div><div style="background:#0a0f1a; padding:15px; border-radius:15px; border:1px solid #1e293b;"><small style="color:#00ffa3; display:block; font-weight:800; font-size:10px;">WARRANTY</small><span>${w}</span></div></div></div></div>`;
    
    document.getElementById('res').value = code;
}

function copyCode() {
    const res = document.getElementById('res');
    res.select();
    document.execCommand('copy');
    const btn = document.getElementById('copyBtn');
    btn.innerText = "Copied!";
    setTimeout(() => btn.innerText = "Copy", 2000);
}
