var xhr = new XMLHttpRequest();
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var responc = JSON.parse(xhr.response);
    console.log(responc);
    for (let i = 0; i < responc.length; i++) {
      console.log(`
          Flag : ${responc[i].flag}
        `);
    }
  } else {
    console.log(xhr.responseText);
  }
};
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();

// Output:
// Flag : https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg

// Flag : https://flagcdn.com/ax.svg

// Flag : https://flagcdn.com/al.svg

// Flag : https://flagcdn.com/dz.svg

// Flag : https://flagcdn.com/as.svg

// Flag : https://flagcdn.com/ad.svg

// Flag : https://flagcdn.com/ao.svg

// Flag : https://flagcdn.com/ai.svg

// Flag : https://flagcdn.com/aq.svg

// Flag : https://flagcdn.com/ag.svg

// Flag : https://flagcdn.com/ar.svg

// Flag : https://flagcdn.com/am.svg

// Flag : https://flagcdn.com/aw.svg

// Flag : https://flagcdn.com/au.svg

// Flag : https://flagcdn.com/at.svg

// Flag : https://flagcdn.com/az.svg

// Flag : https://flagcdn.com/bs.svg

// Flag : https://flagcdn.com/bh.svg

// Flag : https://flagcdn.com/bd.svg

// Flag : https://flagcdn.com/bb.svg

// Flag : https://flagcdn.com/by.svg

// Flag : https://flagcdn.com/be.svg

// Flag : https://flagcdn.com/bz.svg

// Flag : https://flagcdn.com/bj.svg

// Flag : https://flagcdn.com/bm.svg

// Flag : https://flagcdn.com/bt.svg

// Flag : https://flagcdn.com/bo.svg

// Flag : https://flagcdn.com/bq.svg

// Flag : https://flagcdn.com/ba.svg

// Flag : https://flagcdn.com/bw.svg

// Flag : https://flagcdn.com/bv.svg

// Flag : https://flagcdn.com/br.svg

// Flag : https://flagcdn.com/io.svg

// Flag : https://flagcdn.com/um.svg

// Flag : https://flagcdn.com/vg.svg

// Flag : https://flagcdn.com/vi.svg

// Flag : https://flagcdn.com/bn.svg

// Flag : https://flagcdn.com/bg.svg

// Flag : https://flagcdn.com/bf.svg

// Flag : https://flagcdn.com/bi.svg

// Flag : https://flagcdn.com/kh.svg

// Flag : https://flagcdn.com/cm.svg

// Flag : https://flagcdn.com/ca.svg

// Flag : https://flagcdn.com/cv.svg

// Flag : https://flagcdn.com/ky.svg

// Flag : https://flagcdn.com/cf.svg

// Flag : https://flagcdn.com/td.svg

// Flag : https://flagcdn.com/cl.svg

// Flag : https://flagcdn.com/cn.svg

// Flag : https://flagcdn.com/cx.svg

// Flag : https://flagcdn.com/cc.svg

// Flag : https://flagcdn.com/co.svg

// Flag : https://flagcdn.com/km.svg

// Flag : https://flagcdn.com/cg.svg

// Flag : https://flagcdn.com/cd.svg

// Flag : https://flagcdn.com/ck.svg

// Flag : https://flagcdn.com/cr.svg

// Flag : https://flagcdn.com/hr.svg

// Flag : https://flagcdn.com/cu.svg

// Flag : https://flagcdn.com/cw.svg

// Flag : https://flagcdn.com/cy.svg

// Flag : https://flagcdn.com/cz.svg

// Flag : https://flagcdn.com/dk.svg

// Flag : https://flagcdn.com/dj.svg

// Flag : https://flagcdn.com/dm.svg

// Flag : https://flagcdn.com/do.svg

// Flag : https://flagcdn.com/ec.svg

// Flag : https://flagcdn.com/eg.svg

// Flag : https://flagcdn.com/sv.svg

// Flag : https://flagcdn.com/gq.svg

// Flag : https://flagcdn.com/er.svg

// Flag : https://flagcdn.com/ee.svg

// Flag : https://flagcdn.com/et.svg

// Flag : https://flagcdn.com/fk.svg

// Flag : https://flagcdn.com/fo.svg

// Flag : https://flagcdn.com/fj.svg

// Flag : https://flagcdn.com/fi.svg

// Flag : https://flagcdn.com/fr.svg

// Flag : https://flagcdn.com/gf.svg

// Flag : https://flagcdn.com/pf.svg

// Flag : https://flagcdn.com/tf.svg

// Flag : https://flagcdn.com/ga.svg

// Flag : https://flagcdn.com/gm.svg

// Flag : https://flagcdn.com/ge.svg

// Flag : https://flagcdn.com/de.svg

// Flag : https://flagcdn.com/gh.svg

// Flag : https://flagcdn.com/gi.svg

// Flag : https://flagcdn.com/gr.svg

// Flag : https://flagcdn.com/gl.svg

// Flag : https://flagcdn.com/gd.svg

// Flag : https://flagcdn.com/gp.svg

// Flag : https://flagcdn.com/gu.svg

// Flag : https://flagcdn.com/gt.svg

// Flag : https://flagcdn.com/gg.svg

// Flag : https://flagcdn.com/gn.svg

// Flag : https://flagcdn.com/gw.svg

// Flag : https://flagcdn.com/gy.svg

// Flag : https://flagcdn.com/ht.svg

// Flag : https://flagcdn.com/hm.svg

// Flag : https://flagcdn.com/va.svg

// Flag : https://flagcdn.com/hn.svg

// Flag : https://flagcdn.com/hu.svg

// Flag : https://flagcdn.com/hk.svg

// Flag : https://flagcdn.com/is.svg

// Flag : https://flagcdn.com/in.svg

// Flag : https://flagcdn.com/id.svg

// Flag : https://flagcdn.com/ci.svg

// Flag : https://flagcdn.com/ir.svg

// Flag : https://flagcdn.com/iq.svg

// Flag : https://flagcdn.com/ie.svg

// Flag : https://flagcdn.com/im.svg

// Flag : https://flagcdn.com/il.svg

// Flag : https://flagcdn.com/it.svg

// Flag : https://flagcdn.com/jm.svg

// Flag : https://flagcdn.com/jp.svg

// Flag : https://flagcdn.com/je.svg

// Flag : https://flagcdn.com/jo.svg

// Flag : https://flagcdn.com/kz.svg

// Flag : https://flagcdn.com/ke.svg

// Flag : https://flagcdn.com/ki.svg

// Flag : https://flagcdn.com/kw.svg

// Flag : https://flagcdn.com/kg.svg

// Flag : https://flagcdn.com/la.svg

// Flag : https://flagcdn.com/lv.svg

// Flag : https://flagcdn.com/lb.svg

// Flag : https://flagcdn.com/ls.svg

// Flag : https://flagcdn.com/lr.svg

// Flag : https://flagcdn.com/ly.svg

// Flag : https://flagcdn.com/li.svg

// Flag : https://flagcdn.com/lt.svg

// Flag : https://flagcdn.com/lu.svg

// Flag : https://flagcdn.com/mo.svg

// Flag : https://flagcdn.com/mk.svg

// Flag : https://flagcdn.com/mg.svg

// Flag : https://flagcdn.com/mw.svg

// Flag : https://flagcdn.com/my.svg

// Flag : https://flagcdn.com/mv.svg

// Flag : https://flagcdn.com/ml.svg

// Flag : https://flagcdn.com/mt.svg

// Flag : https://flagcdn.com/mh.svg

// Flag : https://flagcdn.com/mq.svg

// Flag : https://flagcdn.com/mr.svg

// Flag : https://flagcdn.com/mu.svg

// Flag : https://flagcdn.com/yt.svg

// Flag : https://flagcdn.com/mx.svg

// Flag : https://flagcdn.com/fm.svg

// Flag : https://flagcdn.com/md.svg

// Flag : https://flagcdn.com/mc.svg

// Flag : https://flagcdn.com/mn.svg

// Flag : https://flagcdn.com/me.svg

// Flag : https://flagcdn.com/ms.svg

// Flag : https://flagcdn.com/ma.svg

// Flag : https://flagcdn.com/mz.svg

// Flag : https://flagcdn.com/mm.svg

// Flag : https://flagcdn.com/na.svg

// Flag : https://flagcdn.com/nr.svg

// Flag : https://flagcdn.com/np.svg

// Flag : https://flagcdn.com/nl.svg

// Flag : https://flagcdn.com/nc.svg

// Flag : https://flagcdn.com/nz.svg

// Flag : https://flagcdn.com/ni.svg

// Flag : https://flagcdn.com/ne.svg

// Flag : https://flagcdn.com/ng.svg

// Flag : https://flagcdn.com/nu.svg

// Flag : https://flagcdn.com/nf.svg

// Flag : https://flagcdn.com/kp.svg

// Flag : https://flagcdn.com/mp.svg

// Flag : https://flagcdn.com/no.svg

// Flag : https://flagcdn.com/om.svg

// Flag : https://flagcdn.com/pk.svg

// Flag : https://flagcdn.com/pw.svg

// Flag : https://flagcdn.com/ps.svg

// Flag : https://flagcdn.com/pa.svg

// Flag : https://flagcdn.com/pg.svg

// Flag : https://flagcdn.com/py.svg

// Flag : https://flagcdn.com/pe.svg

// Flag : https://flagcdn.com/ph.svg

// Flag : https://flagcdn.com/pn.svg

// Flag : https://flagcdn.com/pl.svg

// Flag : https://flagcdn.com/pt.svg

// Flag : https://flagcdn.com/pr.svg

// Flag : https://flagcdn.com/qa.svg

// Flag : https://flagcdn.com/xk.svg

// Flag : https://flagcdn.com/re.svg

// Flag : https://flagcdn.com/ro.svg

// Flag : https://flagcdn.com/ru.svg

// Flag : https://flagcdn.com/rw.svg

// Flag : https://flagcdn.com/bl.svg

// Flag : https://flagcdn.com/sh.svg

// Flag : https://flagcdn.com/kn.svg

// Flag : https://flagcdn.com/lc.svg

// Flag : https://flagcdn.com/mf.svg

// Flag : https://flagcdn.com/pm.svg

// Flag : https://flagcdn.com/vc.svg

// Flag : https://flagcdn.com/ws.svg

// Flag : https://flagcdn.com/sm.svg

// Flag : https://flagcdn.com/st.svg

// Flag : https://flagcdn.com/sa.svg

// Flag : https://flagcdn.com/sn.svg

// Flag : https://flagcdn.com/rs.svg

// Flag : https://flagcdn.com/sc.svg

// Flag : https://flagcdn.com/sl.svg

// Flag : https://flagcdn.com/sg.svg

// Flag : https://flagcdn.com/sx.svg

// Flag : https://flagcdn.com/sk.svg

// Flag : https://flagcdn.com/si.svg

// Flag : https://flagcdn.com/sb.svg

// Flag : https://flagcdn.com/so.svg

// Flag : https://flagcdn.com/za.svg

// Flag : https://flagcdn.com/gs.svg

// Flag : https://flagcdn.com/kr.svg

// Flag : https://flagcdn.com/es.svg

// Flag : https://flagcdn.com/lk.svg

// Flag : https://flagcdn.com/sd.svg

// Flag : https://flagcdn.com/ss.svg

// Flag : https://flagcdn.com/sr.svg

// Flag : https://flagcdn.com/sj.svg

// Flag : https://flagcdn.com/sz.svg

// Flag : https://flagcdn.com/se.svg

// Flag : https://flagcdn.com/ch.svg

// Flag : https://flagcdn.com/sy.svg

// Flag : https://flagcdn.com/tw.svg

// Flag : https://flagcdn.com/tj.svg

// Flag : https://flagcdn.com/tz.svg

// Flag : https://flagcdn.com/th.svg

// Flag : https://flagcdn.com/tl.svg

// Flag : https://flagcdn.com/tg.svg

// Flag : https://flagcdn.com/tk.svg

// Flag : https://flagcdn.com/to.svg

// Flag : https://flagcdn.com/tt.svg

// Flag : https://flagcdn.com/tn.svg

// Flag : https://flagcdn.com/tr.svg

// Flag : https://flagcdn.com/tm.svg

// Flag : https://flagcdn.com/tc.svg

// Flag : https://flagcdn.com/tv.svg

// Flag : https://flagcdn.com/ug.svg

// Flag : https://flagcdn.com/ua.svg

// Flag : https://flagcdn.com/ae.svg

// Flag : https://flagcdn.com/gb.svg

// Flag : https://flagcdn.com/us.svg

// Flag : https://flagcdn.com/uy.svg

// Flag : https://flagcdn.com/uz.svg

// Flag : https://flagcdn.com/vu.svg

// Flag : https://flagcdn.com/ve.svg

// Flag : https://flagcdn.com/vn.svg

// Flag : https://flagcdn.com/wf.svg

// Flag : https://flagcdn.com/eh.svg

// Flag : https://flagcdn.com/ye.svg

// Flag : https://flagcdn.com/zm.svg

// Flag : https://flagcdn.com/zw.svg
