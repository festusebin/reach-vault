// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      2: [ctc0, ctc1, ctc1, ctc1],
      6: [ctc0, ctc0, ctc1, ctc1, ctc1],
      8: [ctc0, ctc0, ctc1, ctc1, ctc2, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v172 = stdlib.protect(ctc0, await interact.setDeadline(), {
    at: './index.rsh:31:53:application',
    fs: ['at ./index.rsh:30:9:application call to [unknown function] (defined at: ./index.rsh:30:13:function exp)'],
    msg: 'setDeadline',
    who: 'Alice'
    });
  const v173 = stdlib.protect(ctc0, await interact.getPrice(), {
    at: './index.rsh:32:47:application',
    fs: ['at ./index.rsh:30:9:application call to [unknown function] (defined at: ./index.rsh:30:13:function exp)'],
    msg: 'getPrice',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v173, v172],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:34:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v175, v176], secs: v178, time: v177, didSend: v29, from: v174 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v175, v176], secs: v178, time: v177, didSend: v29, from: v174 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v174, v175, v176],
    evt_cnt: 0,
    funcNum: 1,
    lct: v177,
    onlyIf: true,
    out_tys: [],
    pay: [v175, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v181, time: v180, didSend: v36, from: v179 } = txn2;
      
      sim_r.txns.push({
        amt: v175,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v181, time: v180, didSend: v36, from: v179 } = txn2;
  ;
  const v184 = stdlib.addressEq(v174, v179);
  stdlib.assert(v184, {
    at: './index.rsh:36:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v189], secs: v191, time: v190, didSend: v45, from: v188 } = txn3;
  ;
  stdlib.protect(ctc2, await interact.balanceAlice(v174), {
    at: './index.rsh:44:25:application',
    fs: ['at ./index.rsh:43:9:application call to [unknown function] (defined at: ./index.rsh:43:13:function exp)'],
    msg: 'balanceAlice',
    who: 'Alice'
    });
  
  const v195 = stdlib.add(v180, v176);
  let v196 = false;
  let v197 = v190;
  let v198 = v180;
  let v204 = v175;
  
  while (await (async () => {
    const v209 = stdlib.ge(v195, v198);
    
    return v209;})()) {
    const v216 = stdlib.add(v197, v195);
    const v220 = stdlib.protect(ctc1, await interact.getAttendance(), {
      at: './index.rsh:54:56:application',
      fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:15:function exp)'],
      msg: 'getAttendance',
      who: 'Alice'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v174, v188, v195, v204, v216, v220],
      evt_cnt: 1,
      funcNum: 4,
      lct: v197,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:56:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v222], secs: v224, time: v223, didSend: v68, from: v221 } = txn4;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v216],
      tys: [ctc3, ctc3, ctc0, ctc0, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v174, v188, v195, v204, v216],
        evt_cnt: 0,
        funcNum: 5,
        lct: v197,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v236, time: v235, didSend: v99, from: v234 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v188,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc3, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v236, time: v235, didSend: v99, from: v234 } = txn5;
      ;
      const v237 = stdlib.addressEq(v174, v234);
      const v238 = stdlib.addressEq(v188, v234);
      const v239 = v237 ? true : v238;
      stdlib.assert(v239, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:57:52:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc2, await interact.setTimeout(), {
        at: './index.rsh:26:26:application',
        fs: ['at ./index.rsh:25:9:application call to [unknown function] (defined at: ./index.rsh:25:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:24:25:function exp)', 'at ./index.rsh:57:52:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'setTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v222], secs: v224, time: v223, didSend: v68, from: v221 } = txn4;
      ;
      const v225 = stdlib.addressEq(v174, v221);
      stdlib.assert(v225, {
        at: './index.rsh:56:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      stdlib.protect(ctc2, await interact.seeChoice(v222), {
        at: './index.rsh:60:25:application',
        fs: ['at ./index.rsh:59:9:application call to [unknown function] (defined at: ./index.rsh:59:21:function exp)'],
        msg: 'seeChoice',
        who: 'Alice'
        });
      
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 6,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v232, time: v231, didSend: v79, from: v230 } = txn5;
      ;
      const v233 = stdlib.addressEq(v188, v230);
      stdlib.assert(v233, {
        at: './index.rsh:62:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const cv196 = v222;
      const cv197 = v231;
      const cv198 = v223;
      const cv204 = v204;
      
      v196 = cv196;
      v197 = cv197;
      v198 = cv198;
      v204 = cv204;
      
      continue;
      
      }
    
    }
  const v253 = stdlib.ge(v198, v195);
  const v254 = v253 ? v196 : false;
  if (v254) {
    ;
    stdlib.protect(ctc2, await interact.finalOutcome(true), {
      at: './index.rsh:69:28:application',
      fs: ['at ./index.rsh:68:9:application call to [unknown function] (defined at: ./index.rsh:68:21:function exp)'],
      msg: 'finalOutcome',
      who: 'Alice'
      });
    
    stdlib.protect(ctc2, await interact.balanceAlice(v174), {
      at: './index.rsh:73:28:application',
      fs: ['at ./index.rsh:72:11:application call to [unknown function] (defined at: ./index.rsh:72:15:function exp)'],
      msg: 'balanceAlice',
      who: 'Alice'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc2, await interact.finalOutcome(false), {
      at: './index.rsh:83:28:application',
      fs: ['at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:21:function exp)'],
      msg: 'finalOutcome',
      who: 'Alice'
      });
    
    stdlib.protect(ctc2, await interact.balanceAlice(v174), {
      at: './index.rsh:89:28:application',
      fs: ['at ./index.rsh:88:11:application call to [unknown function] (defined at: ./index.rsh:88:15:function exp)'],
      msg: 'balanceAlice',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v175, v176], secs: v178, time: v177, didSend: v29, from: v174 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v181, time: v180, didSend: v36, from: v179 } = txn2;
  ;
  const v184 = stdlib.addressEq(v174, v179);
  stdlib.assert(v184, {
    at: './index.rsh:36:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v187 = stdlib.protect(ctc1, await interact.acceptTerms(), {
    at: './index.rsh:40:50:application',
    fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:13:function exp)'],
    msg: 'acceptTerms',
    who: 'Bob'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v174, v175, v176, v180, v187],
    evt_cnt: 1,
    funcNum: 2,
    lct: v180,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v189], secs: v191, time: v190, didSend: v45, from: v188 } = txn3;
      
      ;
      const v195 = stdlib.add(v180, v176);
      const v196 = false;
      const v197 = v190;
      const v198 = v180;
      const v204 = v175;
      
      if (await (async () => {
        const v209 = stdlib.ge(v195, v198);
        
        return v209;})()) {
        const v216 = stdlib.add(v197, v195);
        sim_r.isHalt = false;
        }
      else {
        const v253 = stdlib.ge(v198, v195);
        const v254 = v253 ? v196 : false;
        if (v254) {
          sim_r.txns.push({
            kind: 'from',
            to: v174,
            tok: undefined /* Nothing */
            });
          
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v188,
            tok: undefined /* Nothing */
            });
          
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v189], secs: v191, time: v190, didSend: v45, from: v188 } = txn3;
  ;
  const v195 = stdlib.add(v180, v176);
  let v196 = false;
  let v197 = v190;
  let v198 = v180;
  let v204 = v175;
  
  while (await (async () => {
    const v209 = stdlib.ge(v195, v198);
    
    return v209;})()) {
    const v216 = stdlib.add(v197, v195);
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc1],
      timeoutAt: ['time', v216],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v174, v188, v195, v204, v216],
        evt_cnt: 0,
        funcNum: 5,
        lct: v197,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v236, time: v235, didSend: v99, from: v234 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v188,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc3, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v236, time: v235, didSend: v99, from: v234 } = txn5;
      ;
      const v237 = stdlib.addressEq(v174, v234);
      const v238 = stdlib.addressEq(v188, v234);
      const v239 = v237 ? true : v238;
      stdlib.assert(v239, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:57:52:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc2, await interact.setTimeout(), {
        at: './index.rsh:26:26:application',
        fs: ['at ./index.rsh:25:9:application call to [unknown function] (defined at: ./index.rsh:25:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:24:25:function exp)', 'at ./index.rsh:57:52:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'setTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v222], secs: v224, time: v223, didSend: v68, from: v221 } = txn4;
      ;
      const v225 = stdlib.addressEq(v174, v221);
      stdlib.assert(v225, {
        at: './index.rsh:56:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      stdlib.protect(ctc2, await interact.seeChoice(v222), {
        at: './index.rsh:60:25:application',
        fs: ['at ./index.rsh:59:9:application call to [unknown function] (defined at: ./index.rsh:59:21:function exp)'],
        msg: 'seeChoice',
        who: 'Bob'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v174, v188, v195, v204, v222, v223],
        evt_cnt: 0,
        funcNum: 6,
        lct: v223,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:62:7:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v232, time: v231, didSend: v79, from: v230 } = txn5;
          
          ;
          const cv196 = v222;
          const cv197 = v231;
          const cv198 = v223;
          const cv204 = v204;
          
          await (async () => {
            const v196 = cv196;
            const v197 = cv197;
            const v198 = cv198;
            const v204 = cv204;
            
            if (await (async () => {
              const v209 = stdlib.ge(v195, v198);
              
              return v209;})()) {
              const v216 = stdlib.add(v197, v195);
              sim_r.isHalt = false;
              }
            else {
              const v253 = stdlib.ge(v198, v195);
              const v254 = v253 ? v196 : false;
              if (v254) {
                sim_r.txns.push({
                  kind: 'from',
                  to: v174,
                  tok: undefined /* Nothing */
                  });
                
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v188,
                  tok: undefined /* Nothing */
                  });
                
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc3, ctc0, ctc0, ctc1, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v232, time: v231, didSend: v79, from: v230 } = txn5;
      ;
      const v233 = stdlib.addressEq(v188, v230);
      stdlib.assert(v233, {
        at: './index.rsh:62:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const cv196 = v222;
      const cv197 = v231;
      const cv198 = v223;
      const cv204 = v204;
      
      v196 = cv196;
      v197 = cv197;
      v198 = cv198;
      v204 = cv204;
      
      continue;
      
      }
    
    }
  const v253 = stdlib.ge(v198, v195);
  const v254 = v253 ? v196 : false;
  if (v254) {
    ;
    stdlib.protect(ctc2, await interact.finalOutcome(true), {
      at: './index.rsh:69:28:application',
      fs: ['at ./index.rsh:68:9:application call to [unknown function] (defined at: ./index.rsh:68:21:function exp)'],
      msg: 'finalOutcome',
      who: 'Bob'
      });
    
    stdlib.protect(ctc2, await interact.balanceBob(true), {
      at: './index.rsh:76:26:application',
      fs: ['at ./index.rsh:75:11:application call to [unknown function] (defined at: ./index.rsh:75:15:function exp)'],
      msg: 'balanceBob',
      who: 'Bob'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc2, await interact.finalOutcome(false), {
      at: './index.rsh:83:28:application',
      fs: ['at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:21:function exp)'],
      msg: 'finalOutcome',
      who: 'Bob'
      });
    
    stdlib.protect(ctc2, await interact.balanceBob(false), {
      at: './index.rsh:92:26:application',
      fs: ['at ./index.rsh:91:11:application call to [unknown function] (defined at: ./index.rsh:91:15:function exp)'],
      msg: 'balanceBob',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiALAAEGAghIBUBQKCAmAgEAACI1ADEYQQMVKWRJIls1ASEEWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBBAxAASNJIQYMQACiSSQMQABMJBJEIQQ0ARJENARJIhJMNAISEUQoZEk1A1cgIDX/gARhtKwMsDT/MQASRDQDVwAgNP80AyEHWzQDV1ABFzIGNAOBUVs0AyEFW0IBzEgkNAESRDQESSISTDQCEhFEKGRJNQNXICA1/4AEzJmSXLAyBjQDIQhbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMhBVuyCCOyEDT/sgezQgHtSCQ0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf9XICA1/iEHWzX9IQVbNfxJNQUXNfuABO7n6CI0+xZRBwhQsDIGNAMhCFsMRDT/MQASRDT/NP5QNP0WUDT8FlA0+xZRBwhQMgYWUChLAVcAWWdIIQQ1ATIGNQJCAY9JIwxAAKxJJQxAAE0lEkQlNAESRDQESSISTDQCEhFEKGRJNQOBMFs1/0k1BRc1/oAEahE6CDT+FlEHCFCwNANXACAxADT/NAMhCVsIIjIGNP80AyEKW0IAqUgjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQpbNf4hCVs1/YAEmouRdLA0/ogBVDT/MQASRDT/NP4WUDT9FlAyBhZQKEsBVwA4Z0glNQEyBjUCQgDdSIGgjQaIASYiNAESRDQESSISTDQCEhFESTUFSSJbNf8hBFs1/oAErNEfwzT/FlA0/hZQsDEANP8WUDT+FlAoSwFXADBnSCM1ATIGNQJCAI01/zX+Nf01/DX7Nfo1+TT7NP4PQQAqNP00+wg1+DT5NPpQNPsWUDT/FlA0+BZQKEsBVwBYZ0gkNQEyBjUCQgBNNP40+w80/BBBABOxIrIBNP+yCCOyEDT5sgezQgATsSKyATT/sggjshA0+rIHs0IAADEZIQYSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQlMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 89,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v175",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v176",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v175",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v176",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v189",
                "type": "bool"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v222",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v189",
                "type": "bool"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v222",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200146f3803806200146f83398101604081905262000026916200022e565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b3415600762000127565b620000b9604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200011e92600292019062000151565b505050620002cb565b816200014d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200015f906200028e565b90600052602060002090601f016020900481019282620001835760008555620001ce565b82601f106200019e57805160ff1916838001178555620001ce565b82800160010185558215620001ce579182015b82811115620001ce578251825591602001919060010190620001b1565b50620001dc929150620001e0565b5090565b5b80821115620001dc5760008155600101620001e1565b604080519081016001600160401b03811182821017156200022857634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024257600080fd5b6200024c620001f7565b835181526040601f19830112156200026357600080fd5b6200026d620001f7565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002a357607f821691505b60208210811415620002c557634e487b7160e01b600052602260045260246000fd5b50919050565b61119480620002db6000396000f3fe6080604052600436106100795760003560e01c80638e3147691161004b5780638e314769146100e1578063a98bf223146100f4578063ab53f2c614610107578063c79800371461012a57005b80631e93b0f1146100825780632c10a159146100a65780633e59bac4146100b957806383230757146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610dba565b61013d565b6100806100c7366004610dba565b61032b565b3480156100d857600080fd5b50600154610093565b6100806100ef366004610dba565b6104b9565b610080610102366004610dba565b61066f565b34801561011357600080fd5b5061011c610886565b60405161009d929190610ddd565b610080610138366004610dba565b610923565b61014d600160005414600a610abe565b6101678135158061016057506001548235145b600b610abe565b60008080556002805461017990610e3a565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610e3a565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610e8b565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161023d929190610f08565b60405180910390a1610256816020015134146008610abe565b805161026e906001600160a01b031633146009610abe565b6102a2604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b0316808252602080840151818401908152604080860151818601908152436060808801828152600260005560019290925583519586019690965292519184019190915251928201929092529051608082015260a0015b60405160208183030381529060405260029080519060200190610325929190610c71565b50505050565b61033b600260005414600d610abe565b6103558135158061034e57506001548235145b600e610abe565b60008080556002805461036790610e3a565b80601f016020809104026020016040519081016040528092919081815260200182805461039390610e3a565b80156103e05780601f106103b5576101008083540402835291602001916103e0565b820191906000526020600020905b8154815290600101906020018083116103c357829003601f168201915b50505050508060200190518101906103f89190610f40565b90507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd338360405161042b929190610fd8565b60405180910390a161043f3415600c610abe565b610447610cf5565b815181516001600160a01b039091169052805133602090910152604082015160608301516104759190610ff5565b8151604090810191909152602080830180516000905280514390830152606080860151825190940193909352908401519051909101526104b481610ae3565b505050565b6104c96006600054146016610abe565b6104e3813515806104dc57506001548235145b6017610abe565b6000808055600280546104f590610e3a565b80601f016020809104026020016040519081016040528092919081815260200182805461052190610e3a565b801561056e5780601f106105435761010080835404028352916020019161056e565b820191906000526020600020905b81548152906001019060200180831161055157829003601f168201915b5050505050806020019051810190610586919061101b565b905061059a81608001514310156018610abe565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516105cb929190610f08565b60405180910390a16105df34156014610abe565b8051610613906001600160a01b031633146106095760208201516001600160a01b0316331461060c565b60015b6015610abe565b80602001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f19350505050158015610654573d6000803e3d6000fd5b506000808055600181905561066b90600290610d50565b5050565b61067f6006600054146011610abe565b6106998135158061069257506001548235145b6012610abe565b6000808055600280546106ab90610e3a565b80601f01602080910402602001604051908101604052809291908181526020018280546106d790610e3a565b80156107245780601f106106f957610100808354040283529160200191610724565b820191906000526020600020905b81548152906001019060200180831161070757829003601f168201915b505050505080602001905181019061073c919061101b565b905061074f816080015143106013610abe565b7f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b943383604051610780929190610fd8565b60405180910390a16107943415600f610abe565b80516107ac906001600160a01b031633146010610abe565b6040805160c0810182526000808252602080830182815283850183815260608086018581526080870186905260a087019590955287516001600160a01b03908116875288850151169092528686015190528501519091529091610814919085019085016110a5565b151560808201524360a08201819052600860005560015560405161030190829060200181516001600160a01b03908116825260208084015190911690820152604080830151908201526060808301519082015260808083015115159082015260a0918201519181019190915260c00190565b60006060600054600280805461089b90610e3a565b80601f01602080910402602001604051908101604052809291908181526020018280546108c790610e3a565b80156109145780601f106108e957610100808354040283529160200191610914565b820191906000526020600020905b8154815290600101906020018083116108f757829003601f168201915b50505050509050915091509091565b610933600860005414601b610abe565b61094d8135158061094657506001548235145b601c610abe565b60008080556002805461095f90610e3a565b80601f016020809104026020016040519081016040528092919081815260200182805461098b90610e3a565b80156109d85780601f106109ad576101008083540402835291602001916109d8565b820191906000526020600020905b8154815290600101906020018083116109bb57829003601f168201915b50505050508060200190518101906109f091906110c2565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610a23929190610f08565b60405180910390a1610a3734156019610abe565b6020810151610a52906001600160a01b03163314601a610abe565b610a5a610cf5565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183518201526080840151828401805191151590915280514393019290925260a0840151825190910152606080840151915101526104b481610ae3565b8161066b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815281602001516040015182600001516040015110610bbb578151604001516020808401510151610b219190610ff5565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b03908116808c528e51890151821688528e518d015187528e89015186015185528d5183526006909955436001558b51978801989098529451909616988501989098529051908301529451918101919091529251908301529060c001610301565b8160000151604001518260200151604001511015610bda576000610be1565b6020820151515b15610c28578151516020830151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610654573d6000803e3d6000fd5b8160000151602001516001600160a01b03166108fc8360200151606001519081150290604051600060405180830381858888f19350505050158015610654573d6000803e3d6000fd5b828054610c7d90610e3a565b90600052602060002090601f016020900481019282610c9f5760008555610ce5565b82601f10610cb857805160ff1916838001178555610ce5565b82800160010185558215610ce5579182015b82811115610ce5578251825591602001919060010190610cca565b50610cf1929150610d8d565b5090565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610d4b60405180608001604052806000151581526020016000815260200160008152602001600081525090565b905290565b508054610d5c90610e3a565b6000825580601f10610d6c575050565b601f016020900490600052602060002090810190610d8a9190610d8d565b50565b5b80821115610cf15760008155600101610d8e565b600060408284031215610db457600080fd5b50919050565b600060408284031215610dcc57600080fd5b610dd68383610da2565b9392505050565b82815260006020604081840152835180604085015260005b81811015610e1157858101830151858201606001528201610df5565b81811115610e23576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610e4e57607f821691505b60208210811415610db457634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610e8657600080fd5b919050565b600060608284031215610e9d57600080fd5b6040516060810181811067ffffffffffffffff82111715610ece57634e487b7160e01b600052604160045260246000fd5b604052610eda83610e6f565b815260208301516020820152604083015160408201528091505092915050565b8015158114610d8a57600080fd5b6001600160a01b038316815281356020808301919091526060820190830135610f3081610efa565b8015156040840152509392505050565b600060808284031215610f5257600080fd5b6040516080810181811067ffffffffffffffff82111715610f8357634e487b7160e01b600052604160045260246000fd5b604052610f8f83610e6f565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b803582526020810135610fcb81610efa565b8015156020840152505050565b6001600160a01b038316815260608101610dd66020830184610fb9565b6000821982111561101657634e487b7160e01b600052601160045260246000fd5b500190565b600060a0828403121561102d57600080fd5b60405160a0810181811067ffffffffffffffff8211171561105e57634e487b7160e01b600052604160045260246000fd5b60405261106a83610e6f565b815261107860208401610e6f565b60208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b6000602082840312156110b757600080fd5b8135610dd681610efa565b600060c082840312156110d457600080fd5b60405160c0810181811067ffffffffffffffff8211171561110557634e487b7160e01b600052604160045260246000fd5b60405261111183610e6f565b815261111f60208401610e6f565b60208201526040830151604082015260608301516060820152608083015161114681610efa565b608082015260a092830151928101929092525091905056fea264697066735822122086054fa47695ba155225bf9fc51a34dc68daabbb73153759ec21da9f0381cc8b64736f6c634300080c0033`,
  BytecodeLen: 5231,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:35:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:37:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:96:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:96:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:52:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:57:52:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:58:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
