function make() {
    const esc = (s) => s ? s.replace(/&/g, '&amp;') : "";
    const t = esc(document.getElementById('t').value || 'Premium');
    const p = esc(document.getElementById('p').value || '00');
    const d = esc(document.getElementById('d').value);
    const pf = esc(document.getElementById('pf').value);
    const w = esc(document.getElementById('w').value);

    // Multiple Image Logic
    const rawImgs = document.getElementById('i').value.split(',').filter(x => x.trim());
    let imgSection = "";
    
    if(rawImgs.length > 1) {
        imgSection = `<div style="display:grid; grid-template-columns:repeat(2,1fr); gap:10px; padding:15px; background:#000;">` +
            rawImgs.map(url => `<img src="${esc(url.trim())}" style="width:100%; height:180px; object-fit:cover; border-radius:10px;"/>`).join('') +
            `</div>`;
    } else {
        imgSection = `<div style="position:relative; width:100%; height:380px; background:#000;">
            <span style="position:absolute; top:20px; left:20px; background:#00ffa3; color:#000; padding:6px 16px; border-radius:50px; font-size:11px; font-weight:800; z-index:5;">${t}</span>
            <img src="${esc(rawImgs[0] || '')}" style="width:100%; height:100%; object-fit:cover; opacity:0.8;"/>
        </div>`;
    }

    const f = document.getElementById('f').value.split(',').filter(x => x.trim()).map(x => 
        `<li style="padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.05); font-family:'Hind Siliguri', sans-serif;"><span style="color:#00ffa3; margin-right:12px;">✔</span> ${esc(x.trim())}</li>`
    ).join('');

    const s = document.getElementById('s').value.split(',').filter(x => x.includes(':')).map(x => {
        const [k, v] = x.split(':');
        return `<tr><td style="padding:12px 10px; border-bottom:1px solid #1e293b; color:#94a3b8; font-size:14px;">${esc(k.trim())}</td><td style="padding:12px 10px; border-bottom:1px solid #1e293b; text-align:right; font-weight:bold; color:#fff;">${esc(v.trim())}</td></tr>`;
    }).join('');

    const finalHTML = `<div class="kiwton-post" style="background:#0b0f17; color:#f8fafc; font-family:'Plus Jakarta Sans', sans-serif; border-radius:35px; border:1px solid #1e293b; overflow:hidden; max-width:800px; margin:20px auto; box-shadow:0 20px 40px rgba(0,0,0,0.4);">
    ${imgSection}
    <div style="padding:35px;">
        <h2 style="color:#00ffa3; font-size:36px; margin:0 0 15px 0; font-weight:800;">Price: ৳ ${p}</h2>
        <p style="color:#94a3b8; font-family:'Hind Siliguri', sans-serif; line-height:1.8; font-size:17px;">${d}</p>
        <div style="margin-top:30px; background:rgba(0,255,163,0.03); padding:25px; border-radius:25px; border:1px solid rgba(0,255,163,0.1);">
            <h3 style="margin:0 0 15px 0; color:#fff; font-size:19px;">Key Features</h3>
            <ul style="padding:0; list-style:none; margin:0;">${f}</ul>
        </div>
        <div style="margin-top:30px;">
            <table style="width:100%; border-collapse:collapse;">${s}</table>
        </div>
        <div style="margin-top:30px; display:grid; grid-template-columns:1fr 1fr; gap:20px;">
            <div style="background:#05070a; padding:20px; border-radius:20px; border:1px solid #1e293b;"><small style="color:#00ffa3; font-weight:800; display:block; margin-bottom:8px; font-size:10px; letter-spacing:1px;">PERFECT FOR</small><span style="font-family:'Hind Siliguri', sans-serif;">${pf}</span></div>
            <div style="background:#05070a; padding:20px; border-radius:20px; border:1px solid #1e293b;"><small style="color:#00ffa3; font-weight:800; display:block; margin-bottom:8px; font-size:10px; letter-spacing:1px;">WARRANTY</small><span style="font-family:'Hind Siliguri', sans-serif;">${w}</span></div>
        </div>
    </div>
</div>`;

    document.getElementById('res').value = finalHTML;
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
