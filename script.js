function make() {
    const esc = (s) => s ? s.replace(/&/g, '&amp;') : "";
    const t = esc(document.getElementById('t').value || 'Premium');
    const p = esc(document.getElementById('p').value || '00');
    const d = esc(document.getElementById('d').value);
    const pf = esc(document.getElementById('pf').value);
    const w = esc(document.getElementById('w').value);

    // Image Logic: Multiple vs Single
    const rawImgs = document.getElementById('i').value.split(',').filter(x => x.trim());
    let imgHTML = "";
    
    if(rawImgs.length > 1) {
        imgHTML = `<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:12px; padding:12px; background:#000;">` +
            rawImgs.map(url => `<img src="${esc(url.trim())}" style="width:100%; height:450px; object-fit:cover; border-radius:15px; border:1px solid #1e293b;"/>`).join('') +
            `</div>`;
    } else {
        imgHTML = `<div style="position:relative; width:100%; height:550px; background:#000;">
            <span style="position:absolute; top:30px; left:30px; background:#00ffa3; color:#000; padding:8px 22px; border-radius:50px; font-size:12px; font-weight:800; z-index:5; box-shadow:0 10px 30px rgba(0,0,0,0.6);">${t}</span>
            <img src="${esc(rawImgs[0] || '')}" style="width:100%; height:100%; object-fit:cover; opacity:0.9;"/>
        </div>`;
    }

    const fHTML = document.getElementById('f').value.split(',').filter(x => x.trim()).map(x => 
        `<li style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.05); font-family:'Hind Siliguri'; display:flex; align-items:center; font-size:17px;"><span style="color:#00ffa3; font-size:22px; margin-right:15px;">✔</span> ${esc(x.trim())}</li>`
    ).join('');

    const sHTML = document.getElementById('s').value.split(',').filter(x => x.includes(':')).map(x => {
        const [k, v] = x.split(':');
        return `<tr><td style="padding:15px 10px; border-bottom:1px solid #1e293b; color:#94a3b8; font-size:15px;">${esc(k.trim())}</td><td style="padding:15px 10px; border-bottom:1px solid #1e293b; text-align:right; font-weight:bold; color:#fff; font-size:15px;">${esc(v.trim())}</td></tr>`;
    }).join('');

    // The Final Full-Screen Blogger Code
    const code = `
<div style="background:#05070a; margin:-25px -20px; padding:0; overflow:hidden; min-height:100vh;">
    <div style="max-width:1100px; margin:0 auto; background:#0b0f17; border-left:1px solid #1e293b; border-right:1px solid #1e293b; box-shadow:0 0 100px rgba(0,0,0,0.8);">
        
        ${imgHTML}

        <div style="padding:50px 60px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-end; border-bottom:1px solid #1e293b; padding-bottom:30px; margin-bottom:40px;">
                <div>
                   <h2 style="color:#00ffa3; font-size:55px; margin:0; font-weight:800; font-family:'Plus Jakarta Sans'; line-height:1;">৳ ${p}</h2>
                   <p style="color:#94a3b8; margin:15px 0 0 0; font-size:14px; text-transform:uppercase; letter-spacing:3px; font-weight:600;">Authentic Premium Content</p>
                </div>
                <div style="text-align:right; padding-bottom:10px;">
                   <span style="background:rgba(0,255,163,0.1); color:#00ffa3; padding:10px 25px; border-radius:12px; font-weight:800; font-size:14px; border:1px solid rgba(0,255,163,0.2); letter-spacing:1px;">STOCK READY</span>
                </div>
            </div>

            <p style="color:#e2e8f0; font-family:'Hind Siliguri'; line-height:1.9; font-size:20px; margin-bottom:50px;">${d}</p>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:40px;">
                <div style="background:rgba(255,255,255,0.02); padding:35px; border-radius:30px; border:1px solid #1e293b;">
                    <h3 style="color:#fff; font-size:24px; margin:0 0 25px 0; border-left:5px solid #00ffa3; padding-left:18px; font-weight:800;">Prime Features</h3>
                    <ul style="padding:0; list-style:none; margin:0;">${fHTML}</ul>
                </div>
                <div>
                    <h3 style="color:#fff; font-size:24px; margin:0 0 25px 0; border-left:5px solid #00ffa3; padding-left:18px; font-weight:800;">Technical Data</h3>
                    <table style="width:100%; border-collapse:collapse;">${sHTML}</table>
                </div>
            </div>

            <div style="margin-top:50px; display:grid; grid-template-columns:1fr 1fr; gap:25px;">
                <div style="background:#020408; padding:30px; border-radius:25px; border:1px solid #1e293b; text-align:center;">
                    <small style="color:#00ffa3; font-weight:800; display:block; margin-bottom:12px; font-size:11px; letter-spacing:2px; text-transform:uppercase;">Best Use For</small>
                    <span style="font-family:'Hind Siliguri'; font-size:18px; font-weight:600; color:#fff;">${pf}</span>
                </div>
                <div style="background:#020408; padding:30px; border-radius:25px; border:1px solid #1e293b; text-align:center;">
                    <small style="color:#00ffa3; font-weight:800; display:block; margin-bottom:12px; font-size:11px; letter-spacing:2px; text-transform:uppercase;">Warranty Cover</small>
                    <span style="font-family:'Hind Siliguri'; font-size:18px; font-weight:600; color:#fff;">${w}</span>
                </div>
            </div>
            
            <div style="margin-top:60px; text-align:center;">
                <a href="#" style="display:inline-block; background:#00ffa3; color:#000; padding:22px 65px; border-radius:18px; font-weight:800; text-decoration:none; font-size:20px; transition:0.3s; box-shadow:0 15px 35px rgba(0,255,163,0.2);">ORDER ON MESSENGER</a>
            </div>
        </div>
    </div>
</div>`.trim();

    document.getElementById('res').value = code;
}

function copyCode() {
    const res = document.getElementById('res');
    res.select();
    document.execCommand('copy');
    const btn = document.getElementById('copyBtn');
    btn.innerText = "COPIED!";
    btn.style.background = "#00ffa3";
    setTimeout(() => { btn.innerText = "Copy Code"; btn.style.background = "#fff"; }, 2000);
}
