function make() {
    const esc = (s) => s ? s.replace(/&/g, '&amp;') : "";
    const t = esc(document.getElementById('t').value || 'Premium');
    const p = esc(document.getElementById('p').value || '00');
    const d = esc(document.getElementById('d').value);
    const pf = esc(document.getElementById('pf').value);
    const w = esc(document.getElementById('w').value);
    const imgs = document.getElementById('i').value.split(',').filter(x => x.trim());
    
    // Multiple Photo Grid Feature
    let imgHTML = imgs.length > 1 
        ? `<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:10px; background:#000; padding:10px;">${imgs.map(u => `<img src="${esc(u.trim())}" style="width:100%; height:400px; object-fit:cover; border-radius:10px; border:1px solid #1e293b;"/>`).join('')}</div>`
        : `<div style="position:relative; width:100%; height:500px; background:#000;"><span style="position:absolute; top:25px; left:25px; background:#00ffa3; color:#000; padding:6px 18px; border-radius:50px; font-size:11px; font-weight:800; z-index:5;">${t}</span><img src="${esc(imgs[0] || '')}" style="width:100%; height:100%; object-fit:cover; opacity:0.9;"/></div>`;

    const fHTML = document.getElementById('f').value.split(',').filter(x => x.trim()).map(x => 
        `<li style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.05); font-family:'Hind Siliguri'; font-size:18px; display:flex; align-items:center;"><span style="color:#00ffa3; margin-right:15px; font-size:20px;">✔</span> ${esc(x.trim())}</li>`).join('');

    const sHTML = document.getElementById('s').value.split(',').filter(x => x.includes(':')).map(x => {
        const [k, v] = x.split(':');
        return `<tr><td style="padding:15px 10px; border-bottom:1px solid #1e293b; color:#94a3b8; font-size:15px;">${esc(k?.trim())}</td><td style="padding:15px 10px; border-bottom:1px solid #1e293b; text-align:right; font-weight:bold; color:#fff; font-size:15px;">${esc(v?.trim())}</td></tr>`;
    }).join('');

    // Full Screen Premium Post Template
    document.getElementById('res').value = `
<div class="kiwton-full-view" style="background:#05070a; color:#f8fafc; font-family:'Plus Jakarta Sans', sans-serif; margin:-25px -20px; padding:0; overflow:hidden; min-height:100vh;">
    <div style="max-width:1100px; margin:0 auto; background:#0b0f17; border-left:1px solid #1e293b; border-right:1px solid #1e293b; box-shadow:0 0 100px rgba(0,0,0,0.8);">
        ${imgHTML}
        <div style="padding:40px 50px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-end; border-bottom:1px solid #1e293b; padding-bottom:30px; margin-bottom:40px;">
                <div><h2 style="color:#00ffa3; font-size:50px; margin:0; font-weight:800; line-height:1;">৳ ${p}</h2><p style="color:#94a3b8; margin:12px 0 0 0; font-size:12px; text-transform:uppercase; letter-spacing:2px; font-weight:600;">Authentic Premium Content</p></div>
                <div style="background:rgba(0,255,163,0.1); color:#00ffa3; padding:8px 20px; border-radius:10px; font-weight:800; font-size:12px; border:1px solid rgba(0,255,163,0.2);">STOCK READY</div>
            </div>
            <p style="color:#e2e8f0; font-family:'Hind Siliguri'; line-height:1.8; font-size:19px; margin-bottom:45px;">${d}</p>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:40px;">
                <div style="background:rgba(255,255,255,0.02); padding:35px; border-radius:30px; border:1px solid #1e293b;">
                    <h3 style="color:#fff; font-size:22px; margin:0 0 20px 0; border-left:4px solid #00ffa3; padding-left:15px; font-weight:800;">Prime Features</h3>
                    <ul style="padding:0; list-style:none; margin:0;">${fHTML}</ul>
                </div>
                <div>
                    <h3 style="color:#fff; font-size:22px; margin:0 0 20px 0; border-left:4px solid #00ffa3; padding-left:15px; font-weight:800;">Technical Data</h3>
                    <table style="width:100%; border-collapse:collapse;">${sHTML}</table>
                </div>
            </div>
            <div style="margin-top:45px; display:grid; grid-template-columns:1fr 1fr; gap:20px;">
                <div style="background:#020408; padding:25px; border-radius:20px; border:1px solid #1e293b; text-align:center;"><small style="color:#00ffa3; font-weight:800; display:block; margin-bottom:10px; font-size:10px; letter-spacing:1px;">PERFECT FOR</small><span style="font-family:'Hind Siliguri'; font-size:16px; color:#fff;">${pf}</span></div>
                <div style="background:#020408; padding:25px; border-radius:20px; border:1px solid #1e293b; text-align:center;"><small style="color:#00ffa3; font-weight:800; display:block; margin-bottom:10px; font-size:10px; letter-spacing:1px;">WARRANTY</small><span style="font-family:'Hind Siliguri'; font-size:16px; color:#fff;">${w}</span></div>
            </div>
            <div style="margin-top:50px; text-align:center;"><a href="https://m.me/YOUR_ID" style="display:inline-block; background:#00ffa3; color:#000; padding:20px 60px; border-radius:15px; font-weight:800; text-decoration:none; font-size:18px; box-shadow:0 10px 30px rgba(0,255,163,0.2);">ORDER ON MESSENGER</a></div>
        </div>
    </div>
</div>`.trim();
}

function copyCode() {
    const res = document.getElementById('res');
    res.select();
    document.execCommand('copy');
    document.getElementById('copyBtn').innerText = "COPIED!";
    setTimeout(() => document.getElementById('copyBtn').innerText = "Copy Code", 2000);
}
