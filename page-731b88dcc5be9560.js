try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}
      , t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {},
    e._sentryDebugIds[t] = "a24d646c-9a52-4e58-94b3-a1c2f33e2878",
    e._sentryDebugIdIdentifier = "sentry-dbid-a24d646c-9a52-4e58-94b3-a1c2f33e2878")
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4145], {
    17949: function(e, t, n) {
        Promise.resolve().then(n.bind(n, 42446)),
        Promise.resolve().then(n.bind(n, 27989))
    },
    79228: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return p
            }
        });
        var r = n(27573)
          , i = n(7653)
          , s = n(64070)
          , l = n(19369)
          , a = n(43390);
        let o = i.forwardRef( (e, t) => {
            let {className: n, ...i} = e;
            return (0,
            r.jsx)(a.fC, {
                ref: t,
                className: (0,
                l.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", n),
                ...i
            })
        }
        );
        o.displayName = a.fC.displayName;
        let c = i.forwardRef( (e, t) => {
            let {className: n, ...i} = e;
            return (0,
            r.jsx)(a.Ee, {
                ref: t,
                className: (0,
                l.cn)("aspect-square h-full w-full", n),
                ...i
            })
        }
        );
        c.displayName = a.Ee.displayName;
        let d = i.forwardRef( (e, t) => {
            let {className: n, ...i} = e;
            return (0,
            r.jsx)(a.NY, {
                ref: t,
                className: (0,
                l.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted", n),
                ...i
            })
        }
        );
        d.displayName = a.NY.displayName;
        let u = e => {
            var t, n, i, s;
            let {profile: a, className: u} = e;
            return (0,
            r.jsxs)(o, {
                className: (0,
                l.cn)("select-none text-xs", u),
                children: [(0,
                r.jsx)(c, {
                    src: null !== (t = null == a ? void 0 : a.avatar_url) && void 0 !== t ? t : "",
                    alt: null !== (n = null == a ? void 0 : a.username) && void 0 !== n ? n : ""
                }), (0,
                r.jsx)(d, {
                    children: (0,
                    l.NY)(null !== (s = null !== (i = null == a ? void 0 : a.full_name) && void 0 !== i ? i : null == a ? void 0 : a.username) && void 0 !== s ? s : "")
                })]
            })
        }
        ;
        var p = (0,
        s.default)( () => Promise.resolve(u), {
            ssr: !1
        })
    },
    81570: function(e, t, n) {
        "use strict";
        n.d(t, {
            QM: function() {
                return o
            },
            WI: function() {
                return l
            },
            jK: function() {
                return a
            },
            pS: function() {
                return i
            }
        });
        var r = n(7338);
        let i = "rgba(52, 138, 223, 0.8)"
          , s = e => {
            var t, n;
            return null !== (n = null === (t = e.content) || void 0 === t ? void 0 : t.reduce( (e, t) => {
                var n;
                return Array.isArray(t.content) ? e + s(t) : "hardBreak" === t.type ? "".concat(e, "\n") : "text" !== t.type ? e + t.text : (null === (n = t.marks) || void 0 === n ? void 0 : n.some(e => "highlight" === e.type)) ? "".concat(e, "***").concat(t.text, "***") : e + t.text
            }
            , "")) && void 0 !== n ? n : ""
        }
          , l = (e, t, n) => {
            let r = []
              , i = e.join("").indexOf(t, n);
            if (-1 !== i) {
                let n = 0;
                for (let s = 0; s < e.length && (!(n + e[s].length > i) || (r.push(s),
                !(n + e[s].length >= i + t.length))); s++)
                    n += e[s].length
            }
            return r
        }
          , a = (0,
        r.a)(s, e => {
            let t = e.split("***");
            return "".concat(t[0], "***").concat(t.slice(1, t.length - 1).join(""), "***").concat(t[t.length - 1])
        }
        )
          , o = (0,
        r.a)(e => (e || "").split("***").map( (e, t) => t % 2 == 1 ? '<mark data-color="'.concat(i, ';" class="text-slate-50">').concat(e, "</mark>") : e).join(""), e => e.split("\n").map(e => "".concat(e, "<br>")).join(""));
        (0,
        r.a)(s, e => e.replace("***", ""))
    },
    27989: function(e, t, n) {
        "use strict";
        let r, i;
        n.d(t, {
            default: function() {
                return sM
            }
        });
        var s, l, a = n(27573), o = n(7653), c = n(81695), d = n(17787), u = n(829), p = n(47478), m = n(62052), g = n(64452);
        function f(e, t, n) {
            if ("undefined" == typeof document)
                return;
            let r = document.getElementById("scroll-container");
            if (!n || !r)
                return;
            let i = r.clientWidth
              , s = r.scrollWidth
              , l = Math.max(0, r.scrollLeft / (s - i) * (t / e * s - i));
            requestAnimationFrame( () => {
                r.scrollLeft = l
            }
            )
        }
        var h = n(97010)
          , x = n(63917)
          , v = n(4354);
        function y(e) {
            let {song: t, position: n, groupId: r, duration: i} = e;
            return {
                id: t.id,
                sampleId: t.id,
                position: n,
                groupId: r,
                takes: [{
                    sampleId: t.id,
                    duration: i
                }],
                startTime: 0
            }
        }
        function S(e) {
            var t;
            let n = function(e) {
                let t = new Map;
                for (let n of e)
                    t.set(n.id, n);
                return t
            }(e)
              , r = function(e) {
                let t = new Map;
                for (let s of e) {
                    var n, r, i;
                    t.set(null !== (n = s.parent_id) && void 0 !== n ? n : "", [...null !== (i = t.get(null !== (r = s.parent_id) && void 0 !== r ? r : "")) && void 0 !== i ? i : [], s])
                }
                return t
            }(e)
              , i = function(e) {
                let t = e.find(e => null == e.parent_id);
                if (!t)
                    throw Error("No root found in song tree");
                return {
                    ...t,
                    position: 0
                }
            }(e)
              , s = (0,
            p.Z)()
              , l = (function e(t) {
                var n, r, i, s, l, a;
                let {root: o, clips: c, childMap: d, songMap: u, groupId: p, depth: m} = t
                  , g = e => {
                    var t;
                    let n = u.get(e.sampleId);
                    return null !== (t = null == n ? void 0 : n.parent_id) && void 0 !== t ? t : null
                }
                  , f = null !== (n = d.get(o.id)) && void 0 !== n ? n : [];
                if (0 === f.length)
                    return c;
                let h = Math.min(...c.map(e => e.position));
                for (let t of f) {
                    let n = "precede" === t.audio_conditioning_type ? h - 1 : "continuation" === t.audio_conditioning_type ? m + 1 : o.position;
                    if (n === o.position) {
                        let e = c.find(e => e.id === o.id || e.takes.some(e => e.sampleId === o.id));
                        if (!e)
                            throw Error("Root clip not found");
                        e.takes.push({
                            sampleId: t.id,
                            duration: null !== (r = t.duration) && void 0 !== r ? r : 0
                        })
                    } else {
                        let e = c.find(e => g(e) === t.parent_id && e.position === n);
                        e ? e.takes.push({
                            sampleId: t.id,
                            duration: (null !== (i = t.duration) && void 0 !== i ? i : 0) - (null !== (s = o.duration) && void 0 !== s ? s : 0)
                        }) : c.push(y({
                            song: t,
                            position: n,
                            groupId: p,
                            duration: (null !== (l = t.duration) && void 0 !== l ? l : 0) - (null !== (a = o.duration) && void 0 !== a ? a : 0)
                        }))
                    }
                    let f = "inpaint" === o.audio_conditioning_type || "variation" === o.audio_conditioning_type ? m : m + 1;
                    c = e({
                        root: {
                            ...t,
                            position: n
                        },
                        clips: c,
                        childMap: d,
                        songMap: u,
                        groupId: p,
                        depth: f
                    })
                }
                return c
            }
            )({
                root: i,
                clips: [y({
                    song: i,
                    position: 0,
                    groupId: s,
                    duration: null !== (t = i.duration) && void 0 !== t ? t : 0
                })],
                childMap: r,
                songMap: n,
                groupId: s,
                depth: 0
            }).sort( (e, t) => e.position - t.position)
              , a = function(e) {
                let t = {};
                return e.forEach(e => {
                    t[e.id] = []
                }
                ),
                e.forEach(e => {
                    if (e.parent_id) {
                        var n;
                        t[e.id].push(e.parent_id),
                        t[e.id] = [...t[e.id], ...null !== (n = t[e.parent_id]) && void 0 !== n ? n : []]
                    }
                }
                ),
                t
            }(e)
              , o = ( () => {
                if (0 === l.length)
                    throw Error("No clips found in song tree");
                let e = l[0]
                  , t = a[e.sampleId].length || 0;
                for (let r of l) {
                    let i = a[r.sampleId].length || 0
                      , s = n.get(r.sampleId);
                    (null == s ? void 0 : s.song_path) && i > t && (e = r,
                    t = i)
                }
                return e
            }
            )()
              , c = 0;
            l = (l = l.filter(e => e.takes.some(e => e.duration > 0)).map( (e, t) => {
                var n, r;
                let i = {
                    ...e,
                    position: t,
                    startTime: c
                };
                return c += null !== (r = null === (n = e.takes.find(t => t.sampleId === e.sampleId)) || void 0 === n ? void 0 : n.duration) && void 0 !== r ? r : 0,
                i
            }
            )).map(e => {
                if (e.id === o.id || e.takes.some(e => e.sampleId === o.id))
                    return e;
                let t = a[o.id]
                  , n = e.takes.find(e => t.includes(e.sampleId));
                return n ? {
                    ...e,
                    takes: [n, ...e.takes.filter(e => e.sampleId !== n.sampleId)],
                    sampleId: n.sampleId
                } : e
            }
            );
            let d = e.map(e => {
                var t, n, r;
                return {
                    id: e.id,
                    name: null !== (t = e.title) && void 0 !== t ? t : "",
                    lineage: a[e.id],
                    type: "song",
                    song: e,
                    duration: null !== (n = e.duration) && void 0 !== n ? n : 0,
                    startTrim: 0,
                    stopTrim: 0,
                    userId: null !== (r = e.user_id) && void 0 !== r ? r : ""
                }
            }
            );
            return {
                clipGroup: {
                    clips: l,
                    id: s,
                    positionInSeconds: 0,
                    trimStart: 0,
                    trimEnd: 0,
                    sessionId: (0,
                    p.Z)(),
                    latestSampleId: o.takes[0].sampleId
                },
                samples: d
            }
        }
        function b(e, t, n) {
            if ("upload" === e.type)
                return [e.id];
            let r = []
              , i = e;
            for (; i.song.parent_id; ) {
                let e = n(i.song.parent_id);
                if (!e)
                    throw Error("Parent sample not found");
                if (r.push(e.id),
                "upload" === e.type)
                    break;
                i = e
            }
            return [...r, ...function e(t, n, r) {
                let i = n.flatMap(e => e.takes.map(e => r(e.sampleId)).filter(e => !!e)).filter(e => "song" === e.type && e.song.parent_id === t.id);
                if (0 === i.length)
                    return [t.id];
                let s = i.map(t => e(t, n, r)).reduce( (e, t) => e.length > t.length ? e : t);
                return [t.id, ...s]
            }(e, t, n)]
        }
        function w(e, t, n) {
            let r = b(e, t, n);
            return t.map(e => {
                let t = e.takes.find(e => r.includes(e.sampleId));
                return t ? {
                    ...e,
                    sampleId: t.sampleId
                } : e
            }
            )
        }
        function j(e, t, n) {
            if ("upload" === e.type)
                return t.map( (e, t) => ({
                    ...e,
                    position: t
                }));
            let r = b(e, t, n)
              , i = 0;
            return w(e, t, n).filter(e => r.includes(e.sampleId)).map( (e, t) => {
                var n, r;
                let s = {
                    ...e,
                    startTime: i,
                    position: t
                };
                return i += null !== (r = null === (n = e.takes.find(t => t.sampleId === e.sampleId)) || void 0 === n ? void 0 : n.duration) && void 0 !== r ? r : 0,
                s
            }
            )
        }
        let k = (e, t) => ({
            checkpoints: [],
            currentCheckpointId: null,
            getStateToSave: () => {
                let {clipGroups: e, samples: n, pastStates: r, futureStates: i, action: s, actionTimestamp: l} = t();
                return {
                    clipGroups: e,
                    samples: n,
                    pastStates: r,
                    futureStates: i,
                    action: s,
                    actionTimestamp: l
                }
            }
            ,
            saveCurrentCheckpointState: () => {
                if (!t().currentCheckpointId)
                    return;
                let n = t().getStateToSave();
                e(e => ({
                    checkpoints: e.checkpoints.map(t => t.id === e.currentCheckpointId ? {
                        ...t,
                        state: n
                    } : t)
                }))
            }
            ,
            createCheckpoint: () => {
                t().saveCurrentCheckpointState();
                let n = (0,
                p.Z)()
                  , r = {
                    id: n,
                    name: "Version " + (t().checkpoints.length + 1),
                    state: {
                        ...t().getStateToSave(),
                        pastStates: [],
                        futureStates: []
                    }
                };
                return e({
                    checkpoints: [...t().checkpoints, r],
                    currentCheckpointId: n,
                    pastStates: [],
                    futureStates: [],
                    action: "Created checkpoint",
                    actionTimestamp: new Date().toISOString()
                }),
                n
            }
            ,
            updateCheckpointName: (t, n) => {
                e(e => ({
                    checkpoints: e.checkpoints.map(e => e.id === t ? {
                        ...e,
                        name: n
                    } : e)
                }))
            }
            ,
            loadCheckpoint: n => {
                t().saveCurrentCheckpointState();
                let r = t().checkpoints.find(e => e.id === n);
                if (!r) {
                    console.error("Checkpoint with id ".concat(n, " not found"));
                    return
                }
                let i = t().folderId;
                e( () => ({
                    ...tS,
                    ...r.state,
                    currentCheckpointId: n,
                    folderId: i
                }))
            }
            ,
            loadInitialCheckpoints: (t, n) => {
                if (!t.length)
                    return;
                let r = t.filter(e => "song" === e.type && !!e.song.liked);
                if (!r.length)
                    return;
                let i = r.map( (e, r) => {
                    let i, s;
                    try {
                        i = b(e, [], e => t.find(t => t.id === e))
                    } catch (t) {
                        return console.warn("Error loading checkpoints for sample", e.id, t),
                        null
                    }
                    let l = n.filter(t => i.includes(t.id) || t.parent_id === e.song.parent_id);
                    try {
                        s = S(l).clipGroup
                    } catch (t) {
                        return console.warn("Error loading checkpoints for sample", e.id, t),
                        null
                    }
                    let a = {
                        clipGroups: [{
                            ...s,
                            latestSampleId: e.id
                        }],
                        pastStates: [],
                        futureStates: [],
                        action: "Created session",
                        actionTimestamp: new Date().toISOString()
                    };
                    return {
                        id: e.id,
                        name: e.name || "Version ".concat(r + 1),
                        state: a
                    }
                }
                ).filter(e => null !== e);
                e(e => {
                    var t;
                    return {
                        checkpoints: i,
                        currentCheckpointId: null !== (t = e.currentCheckpointId) && void 0 !== t ? t : r[0].id
                    }
                }
                )
            }
            ,
            removeCheckpoint: t => {
                e(e => ({
                    checkpoints: e.checkpoints.filter(e => e.id !== t)
                }))
            }
        });
        var M = n(99361)
          , N = n(64111)
          , C = n(78153)
          , I = n(40840)
          , T = n(61703)
          , E = n(29152)
          , L = n(78709)
          , R = n(36383)
          , P = n(3374)
          , G = n(97975)
          , _ = n.n(G);
        function A(e) {
            return e ? Math.max(0, e.duration - e.startTrim - e.stopTrim) : 0
        }
        function D(e) {
            return "song" === e.type ? {
                source_type: "song",
                song_id: e.song.id
            } : {
                source_type: "file",
                path: e.url
            }
        }
        function z(e, t) {
            return Array.from(new Set([...e, ...t]))
        }
        function F(e, t) {
            return e.clips.some(e => e.sampleId === t || B(t, e))
        }
        function H(e) {
            let t = e.takes.find(t => t.sampleId === e.sampleId);
            if (!t)
                throw Error("No take found for provided sample id");
            return t
        }
        let Z = null;
        function V(e, t, n, r) {
            let i = n(t);
            if (!i)
                throw Error("Attempting to load a sample that does not exist");
            let s = w(i, e.clips, n)
              , l = "load-longest-descendant" === r ? j(i, s, n).reduce( (e, r) => {
                let i = n(e.sampleId)
                  , s = n(r.sampleId);
                if (!i || !s)
                    return e;
                let l = A(i)
                  , a = A(s);
                return l === a ? e.sampleId === t || r.sampleId === t ? e.sampleId === t ? e : r : e : l > a ? e : r
            }
            ).sampleId : t
              , a = n(l);
            if (!a)
                throw Error("Sample not found");
            return O(a),
            {
                ...e,
                clips: s,
                latestSampleId: a.id
            }
        }
        function O(e) {
            var t;
            let n = "song" === e.type ? e.song.song_path : null
              , r = (0,
            x.N)(null != n ? n : "");
            t = r ? "/session?songId=".concat(e.id, "&version=").concat(r) : "/session?songId=".concat(e.id),
            window.location.pathname + window.location.search !== t && (Z && clearTimeout(Z),
            Z = setTimeout( () => {
                try {
                    window.history.replaceState(null, "", t)
                } catch (e) {
                    console.warn("Failed to update URL:", e)
                }
            }
            , 100))
        }
        function B(e, t) {
            return t.takes.some(t => t.sampleId === e)
        }
        function U(e, t, n, r) {
            var i, s;
            let l = e => {
                let r = n(e.sampleId);
                return (null == r ? void 0 : r.type) === "song" && r.song.id === t
            }
              , a = null === (s = e.clips.find(e => e.takes.some(l))) || void 0 === s ? void 0 : null === (i = s.takes.find(l)) || void 0 === i ? void 0 : i.sampleId;
            return a ? V(e, a, n, r) : (console.warn("Unable to find song in clip group", t),
            e)
        }
        function W(e, t) {
            return e.clips.some(e => {
                let n = t(e.sampleId);
                return (null == n ? void 0 : n.type) === "upload"
            }
            )
        }
        let q = null;
        var K = n(80567)
          , X = n(46832)
          , Q = n(36564);
        let Y = e => e.replace(/(?:ext|edit) v\d+.*/, "").trim()
          , J = e => {
            let t = (null == e ? void 0 : e.type) === "song" ? e.song : null;
            return (null == t ? void 0 : t.lyrics) && t.lyrics.trim().length > 0 ? t.id : void 0
        }
          , $ = e => {
            var t;
            let n = (null == e ? void 0 : e.type) === "song" ? e.song : null;
            return null !== (t = null == n ? void 0 : n.song_path) && void 0 !== t ? t : void 0
        }
        ;
        var ee = n(41724)
          , et = n(22726);
        let en = (0,
        m.Ue)()((0,
        g.tJ)((0,
        g.mW)( (e, t) => ({
            songIdToSessionId: {},
            addSession: async (n, r) => {
                let i = {
                    ...t().songIdToSessionId
                };
                r.forEach(e => {
                    i[e] = n.id
                }
                ),
                e({
                    songIdToSessionId: i
                }),
                await (0,
                ee.t8)(n.id, n)
            }
            ,
            getSessionForSongId: async (e, n) => {
                if (!e)
                    return;
                e.length > 0 && e.length < 36 && (e = (0,
                et.xK)(e));
                let r = (0,
                x.N)(e + n)
                  , i = t().songIdToSessionId
                  , s = await (async () => {
                    let t = i[r];
                    if (t)
                        try {
                            var n, s, l;
                            let r = await (0,
                            ee.U2)(t);
                            if (r && (n = r.clipGroups,
                            s = e,
                            l = r.samples,
                            !n.some(e => e.clips.some(e => e.takes.some(e => {
                                let t = l[e.sampleId];
                                return !!t && (!!(t.id === s || t.lineage.includes(s)) || "song" === t.type && t.song.id === s)
                            }
                            )))))
                                return;
                            return r
                        } catch (e) {
                            console.error("Error getting session from indexed db", t, e);
                            return
                        }
                }
                )()
                  , l = (null == s ? void 0 : s.schemaVersion) === 2;
                if (!s || !l || 0 === s.clipGroups.length)
                    return;
                let a = U(s.clipGroups[0], e, e => s.samples[e], "load-provided-sample");
                return {
                    ...s,
                    clipGroups: [a]
                }
            }
        }), {
            name: "SessionLibraryStore",
            enabled: !1
        }), {
            name: "session-library"
        }))
          , er = {}
          , ei = e => {
            if (er[e])
                return er[e];
            (0,
            ee.U2)("waveform-".concat(e)).then(t => {
                t ? er[e] = t : console.warn("No waveform data found for ".concat(e))
            }
            ).catch(t => {
                console.error("Error getting waveform data for ".concat(e, ":"), t)
            }
            )
        }
          , es = async (e, t) => {
            er[e] = t,
            await (0,
            ee.t8)("waveform-".concat(e), t)
        }
          , el = () => tw(e => e.getSelectionArea())
          , ea = () => {
            let e = tw(e => e.clipGroups);
            return 0 === e.length ? null : e[0]
        }
          , eo = () => {
            let e = eS()
              , t = eT();
            return "inpaint" === e && null === t || "precede" === e || "continuation" === e
        }
          , ec = e => {
            let t = ea()
              , n = tw(e => e.getSample);
            return (0,
            o.useMemo)( () => t ? t.clips.filter(t => !e || t.id === e).flatMap(e => e.takes).map( (e, t) => {
                let r = n(e.sampleId);
                return r ? {
                    ...r,
                    initialPosition: t
                } : null
            }
            ).filter(e => !!e && "song" === e.type) : [], [t, n, e])
        }
          , ed = e => {
            var t;
            return null !== (t = tw.getState().getSample(e.latestSampleId)) && void 0 !== t ? t : null
        }
          , eu = () => {
            let e = tw(e => e.clipGroups)
              , t = tw(e => e.samples);
            if (e.length > 0) {
                var n;
                return null !== (n = t[e[0].latestSampleId]) && void 0 !== n ? n : null
            }
            return null
        }
          , ep = e => {
            let t = tw(t => e ? t.getSample(e) : null)
              , n = ea();
            if ((null == t ? void 0 : t.type) === "upload")
                return !0;
            let r = null == n ? void 0 : n.clips.find(t => t.takes.some(t => t.sampleId === e));
            return (null == r || !r.takes.length || !(r.takes.length > 1)) && (null == t ? void 0 : t.type) === "song" && 0 === t.lineage.length
        }
          , em = () => {
            let e = tw(e => e.clipGroups);
            return 0 === e.length ? 0 : e[0].trimStart
        }
          , eg = () => {
            let e = tw(e => e.clipGroups);
            return 0 === e.length ? 0 : e[0].trimEnd
        }
          , ef = e => {
            let t = tw(e => e.activeGenerations)
              , n = tw(e => e.pendingGenerationType);
            if (t.some(e => "completed" === e.type))
                return "hidden";
            if (0 === t.length)
                switch (n) {
                case null:
                case "inpaint":
                    return "hidden";
                case "section-left":
                case "intro":
                    return "left" === e ? "pending-user-input" : "hidden";
                case "section-right":
                case "outro":
                    return "right" === e ? "pending-user-input" : "hidden"
                }
            return t[0].generationType === ("left" === e ? "precede" : "continuation") ? "generating" : "hidden"
        }
          , eh = () => {
            let e = eu()
              , t = em()
              , n = eg();
            return A(null != e ? e : null) - t - n
        }
          , ex = e => tw(t => {
            if (0 === t.activeGenerations.length)
                return null;
            let n = t.activeGenerations[0];
            return e && n.generationType !== e ? "Generation in progress" : n.sourceSampleId === t.pendingGenerationSourceSampleId && n.targetClipId === t.pendingGenerationTargetClipId ? null : e && n.generationType === e ? "Generation in progress" : "Source sample or target clip does not match pending generation"
        }
        )
          , ev = () => {
            let e = eu()
              , t = tw((0,
            K.N)(e => e.clipGroups))
              , n = tw(e => e.getSampleFromSongId)
              , r = tw(e => e.getSample)
              , i = (0,
            o.useCallback)(e => {
                var t, i;
                return null !== (i = null !== (t = n(e)) && void 0 !== t ? t : r(e)) && void 0 !== i ? i : null
            }
            , [n, r]);
            return (0,
            o.useMemo)( () => 0 !== t.length && e ? j(e, t[0].clips, i).filter(e => e.takes.some(e => e.duration > 0)) : [], [e, t, i])
        }
          , ey = e => {
            var t;
            return null !== (t = tw.getState().getSample(e.sampleId)) && void 0 !== t ? t : null
        }
          , eS = () => {
            let e = ej()
              , t = tw(e => e.activeGenerations);
            return 0 === t.length ? null : e ? "regeneration" : "inpaint" === t[0].generationType ? "inpaint" : "precede" === t[0].generationType ? "precede" : "continuation"
        }
          , eb = () => tw(e => e.activeGenerations.length > 0)
          , ew = async () => {
            let {id: e, userId: t, name: n, clipGroups: r, playbackState: i, globalTempo: s, loopBounds: l, loopingEnabled: a, samples: o, getAllSongIds: c, globalVolume: d, globalMute: u, zoomMultiplier: p, pastStates: m, futureStates: g, action: f, actionTimestamp: h, checkpoints: x, currentCheckpointId: v, sectionMap: y, lastInpaintRegions: S, showSongSections: b, samplesWithCachedWaveformData: w, sectionColors: j} = tw.getState()
              , k = c();
            await en.getState().addSession({
                id: e,
                userId: t,
                name: n,
                clipGroups: r,
                playbackState: i,
                globalTempo: s,
                loopBounds: l,
                loopingEnabled: a,
                samples: o,
                globalVolume: d,
                globalMute: u,
                zoomMultiplier: p,
                schemaVersion: 2,
                pastStates: m,
                futureStates: g,
                action: f,
                actionTimestamp: h,
                checkpoints: x,
                currentCheckpointId: v,
                sectionMap: y,
                lastInpaintRegions: S,
                showSongSections: b,
                samplesWithCachedWaveformData: w,
                sectionColors: j
            }, k)
        }
          , ej = () => tw(e => e.activeGenerations.some(e => "generating" === e.type && null !== e.targetClipId && "inpaint" !== e.generationType));
        function ek(e) {
            return "completed" === e.type ? 1 : Math.min(.9, Math.min(1, (Date.now() - e.startTime) / 3e4))
        }
        let eM = () => {
            let e = tw(e => e.activeGenerations);
            return 0 === e.length || null !== e[0].targetClipId ? null : e.some(e => "completed" === e.type) ? 1 : ek(e.sort( (e, t) => e.startTime - t.startTime)[0])
        }
          , eN = e => tw(e => e.activeGenerations).filter(t => "generating" === t.type && t.targetClipId === e).map(e => ek(e))
          , eC = () => {
            let e = tw(e => e.playbackContainerWidth)
              , t = tw(e => e.zoomMultiplier);
            return e / v.aF * t
        }
          , eI = () => eC() * h.GY
          , eT = () => tw(e => 0 === e.activeGenerations.length ? null : e.activeGenerations[0].targetClipId)
          , eE = () => tw(e => e.zoomMultiplier) < v.aC.max
          , eL = () => tw(e => e.zoomMultiplier) > v.aC.min
          , eR = () => {
            var e;
            let t = tw(e => "extend" === e.contextMenu)
              , n = eC()
              , r = em()
              , i = eg()
              , s = null === (e = eu()) || void 0 === e ? void 0 : e.duration;
            return s ? (s - i - r + (t ? h.GY : 0)) * n : 0
        }
          , eP = () => {
            let e = eb();
            return tw(e => e.pastStates).length > 0 && !e
        }
          , eG = () => {
            let e = eb();
            return tw(e => e.futureStates).length > 0 && !e
        }
          , e_ = () => {
            let e = tw(e => e.replaceSelectionAreas);
            return !(e.length >= 1) && (0 === e.length || e.reduce( (e, t) => e + (t.end - t.start), 0) <= v.qh)
        }
          , eA = () => {
            let e = tw(e => e.addSample);
            return (t, n) => {
                let r = tw.getState().getSample(t);
                r && "song" === r.type && e({
                    ...r,
                    song: {
                        ...r.song,
                        ...n
                    }
                })
            }
        }
          , eD = () => {
            let {likeSongMutation: e} = (0,
            X.eg)(R.US)
              , t = eA()
              , n = tw(e => e.createCheckpoint);
            return async r => {
                let i = tw.getState().getSample(r);
                if (!i || "song" !== i.type) {
                    console.warn("Unable to create checkpoint for sample ".concat(r, "."));
                    return
                }
                return await e.mutateAsync(i.song),
                t(r, {
                    liked: !0
                }),
                n()
            }
        }
          , ez = () => {
            let e = eu()
              , t = tw(e => e.samplesWithCachedWaveformData)
              , n = tw(e => e.populateWaveformDataForSample);
            return e ? t instanceof Set && !t.has(e.id) ? (n(e),
            null) : ei(e.id) : null
        }
          , eF = () => {
            let e = eu()
              , {data: t, error: n} = (0,
            Q.BT)(R.US, {
                id: J(e),
                songPath: $(e)
            });
            return n || t && t.failureRate > .4
        }
          , eH = () => {
            let e = eu()
              , {isLoading: t} = (0,
            Q.BT)(R.US, {
                id: J(e),
                songPath: $(e)
            });
            return t
        }
          , eZ = () => {
            let e = tw(e => e.contextMenu)
              , t = eF();
            return "false" === localStorage.getItem(v.f3) && "replace" === e && t
        }
          , eV = () => {
            let e = tw(e => e.samples)
              , t = ev();
            return t.slice(1).reduce( (t, n) => {
                let r = t => t.takes.map(t => e[t.sampleId]).filter(e => !!e && "song" === e.type).sort( (e, t) => e.song.created_at > t.song.created_at ? -1 : 1)
                  , i = r(n)
                  , s = r(t);
                return 0 === i.length ? t : 0 === s.length ? n : i[0].song.created_at > s[0].song.created_at ? n : t
            }
            , t[0]).id
        }
          , eO = []
          , eB = e => {
            var t, n;
            return null !== (n = null === (t = tw(e => e.sectionMap)[e]) || void 0 === t ? void 0 : t.sections) && void 0 !== n ? n : eO
        }
          , eU = () => {
            var e, t, n;
            let r = eu()
              , i = tw(e => e.sectionMap)
              , s = null !== (e = null == r ? void 0 : r.id) && void 0 !== e ? e : ""
              , {sections: l, isLoading: a} = function(e) {
                var t;
                let n = (null == e ? void 0 : e.lyrics) && e.lyrics.trim().length > 0 ? e.id : void 0
                  , {data: r, isLoading: i} = (0,
                Q.BT)(R.US, {
                    id: n,
                    songPath: null !== (t = null == e ? void 0 : e.song_path) && void 0 !== t ? t : void 0
                })
                  , s = (0,
                o.useMemo)( () => {
                    let t;
                    if (!(null == r ? void 0 : r.wordsFormatted) || 0 === r.wordsFormatted.length)
                        return [];
                    let n = []
                      , i = /^\[.*\]$/;
                    for (let e = 0; e < r.wordsFormatted.length; e++)
                        if (r.wordsFormatted[e].split("\n").find(e => i.test(e))) {
                            let t = r.startTimes[e]
                              , n = -1;
                            for (let t = e + 1; t < r.wordsFormatted.length; t++)
                                if (r.wordsFormatted[t].split("\n").some(e => i.test(e))) {
                                    n = r.startTimes[t];
                                    break
                                }
                            if (-1 === n && (n = r.endTimes[r.endTimes.length - 1]),
                            n - t > .1)
                                break
                        }
                    if (r.wordsFormatted.forEach( (e, s) => {
                        e.split("\n").forEach(e => {
                            i.test(e) && (t && (t.endTime = r.startTimes[s],
                            t.endTime - t.startTime > .1 && n.push(t)),
                            t = {
                                name: e.slice(1, -1).replace(/\d+$/, "").trim(),
                                startTime: r.startTimes[s],
                                endTime: 0
                            })
                        }
                        )
                    }
                    ),
                    t) {
                        var s;
                        let r = null !== (s = null == e ? void 0 : e.duration) && void 0 !== s ? s : 0;
                        "number" == typeof r && (t.endTime = r,
                        t.endTime - t.startTime > .1 && n.push({
                            ...t
                        }))
                    }
                    return n.filter(e => e.endTime - e.startTime > .1)
                }
                , [r, e])
                  , l = (0,
                o.useMemo)( () => (null == r ? void 0 : r.wordsFormatted) ? r.wordsFormatted.reduce( (e, t, n) => (t.split("\n").forEach( (t, i) => {
                    if (i > 0 && e.push({
                        words: [],
                        indices: [],
                        isSection: [],
                        sectionName: void 0
                    }),
                    t.trim()) {
                        let i = e[e.length - 1];
                        if (t.startsWith("[") && t.endsWith("]")) {
                            let e = t.slice(1, -1)
                              , l = s.find(t => {
                                let i = t.name.toLowerCase().startsWith(e.toLowerCase())
                                  , s = t.startTime === r.startTimes[n]
                                  , l = t.endTime - t.startTime > .1;
                                return i && s && l
                            }
                            );
                            l && (i.words.push("[".concat(l.name, "]")),
                            i.indices.push(n),
                            i.isSection.push(!0),
                            i.sectionName = l.name)
                        } else
                            i.words.push(t),
                            i.indices.push(n),
                            i.isSection.push(!1)
                    }
                }
                ),
                t.endsWith("\n") && e.push({
                    words: [],
                    indices: [],
                    isSection: [],
                    sectionName: void 0
                }),
                e), [{
                    words: [],
                    indices: [],
                    isSection: [],
                    sectionName: void 0
                }]) : [], [r, s]);
                return {
                    sections: s,
                    lines: l,
                    lyricAlignmentData: r,
                    isLoading: i
                }
            }(( () => {
                var e;
                if (null === (e = i[s]) || void 0 === e || !e.sections)
                    return (null == r ? void 0 : r.type) === "song" ? r.song : void 0
            }
            )())
              , c = i[null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : ""]
              , d = null !== (n = null == c ? void 0 : c.wasModified) && void 0 !== n && n
              , u = tw(e => e.updateSectionsFromSong);
            return ((0,
            o.useEffect)( () => {
                (null == r ? void 0 : r.type) === "song" && l.length > 0 && !d && u(r.id, l)
            }
            , [r, l, u, d]),
            c) ? {
                sections: c.sections,
                isLoading: !1
            } : {
                sections: l,
                isLoading: a
            }
        }
          , eW = () => {
            var e, t;
            let n = tw(e => e.highlightedSectionId)
              , r = eB(null !== (t = null === (e = eu()) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : "")
              , i = em()
              , s = eh();
            if (!n)
                return null;
            let l = r.find(e => e.id === n);
            return l ? {
                start: Math.max(0, l.start - i),
                end: Math.min(s, l.start + l.duration - i)
            } : null
        }
          , eq = () => {
            var e, t;
            let n = tw(e => e.activeGenerations).find(e => "inpaint" === e.generationType);
            return eT() ? null : null !== (t = null == n ? void 0 : null === (e = n.inpaintRegions) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : null
        }
          , eK = () => tw(e => e.activeGenerations).some(e => "inpaint" === e.generationType)
          , eX = () => {
            let e = tw(e => e.activeGenerations)
              , t = e.filter(e => "generating" === e.type).length;
            return {
                numCompleted: e.length - t,
                total: e.length
            }
        }
        ;
        var eQ = n(19369)
          , eY = n(6608)
          , eJ = n(78430);
        let e$ = async (e, t) => {
            if ("song" !== e.type)
                return;
            let n = await (0,
            eJ.$u)(e.song.id);
            if (!n)
                return;
            let r = E.Zt.getState().model_type
              , i = E.Zt.getState().setSamplerOptions
              , s = E.Zt.getState().applyOldOptions
              , l = L.w.getState().setSourceSongData
              , a = L.w.getState().resetStyleSettings
              , o = E.Zt.getState().setSamplerOptionsItem
              , c = n.samplerOptions.lyrics_type;
            if ((0,
            eY.ji)(n.samplerOptions))
                s(n.samplerOptions),
                i({
                    seed: -1,
                    prompt: n.generationSettings.prompt,
                    lyrics: null != t ? t : void 0,
                    lyrics_type: c,
                    model_type: r,
                    style: void 0,
                    use_style: !1,
                    bpm_enabled: !1,
                    bpm_conditioning: void 0
                });
            else if (i({
                ...n.samplerOptions,
                lyrics_type: c,
                lyrics: null != t ? t : void 0,
                model_type: r,
                use_style: !!n.samplerOptions.style,
                bpm_enabled: !1,
                bpm_conditioning: void 0,
                seed: -1
            }),
            n.samplerOptions.style) {
                let t = "song" === n.samplerOptions.style.source.source_type ? n.samplerOptions.style.source.song_id : e.song.id
                  , r = "song" === n.samplerOptions.style.source.source_type ? n.samplerOptions.style.crop_start : 0;
                L.w.getState().setStyleSettings({
                    ...n.samplerOptions.style,
                    crop_start: r,
                    source: {
                        source_type: "song",
                        song_id: t
                    }
                }),
                l(await R.US.getSongById(t))
            } else
                a(),
                o("use_style", !1);
            return n
        }
          , e0 = (0,
        N.g0)((0,
        P.v)())
          , e1 = (e, t) => ({
            pendingGenerationSourceSampleId: null,
            pendingGenerationTargetClipId: null,
            activeGenerations: [],
            lastInpaintRegions: null,
            completedSongsBeingHandled: [],
            errorTracksBeingHandled: [],
            appliedGenerations: new Set,
            cropRangeForRegeneration: null,
            requestGeneration: () => {
                let n = t().pendingGenerationSourceSampleId;
                if (!n)
                    throw Error("No source sample id found");
                let r = t().pendingGenerationTargetClipId
                  , i = null !== r
                  , s = t().getPendingGenerationType();
                if (null === s)
                    throw Error("Generation type is null");
                let l = t().getSample(n);
                if (!l)
                    throw Error("Source sample not found");
                let a = function(e) {
                    switch (e) {
                    case "intro":
                    case "section-left":
                        return "precede";
                    case "section-right":
                    case "outro":
                        return "continuation";
                    case "inpaint":
                        return "inpaint"
                    }
                }(s)
                  , o = ( () => {
                    switch (a) {
                    case "inpaint":
                        {
                            let n = ( () => {
                                if (i) {
                                    let e = t().getClipGroup()
                                      , n = t().pendingGenerationTargetClipId ? null == e ? void 0 : e.clips.find(e => e.id === t().pendingGenerationTargetClipId) : null;
                                    if (null == n ? void 0 : n.inpaintRegions)
                                        return n.inpaintRegions.map(e => [e.start, e.end])
                                }
                                return t().replaceSelectionAreas.map(e => [e.start, e.end])
                            }
                            )();
                            if (0 === n.length)
                                throw Error("Cannot inpaint with no selection(s)");
                            return e(e => ({
                                ...e,
                                lastInpaintRegions: n.map(e => {
                                    let[t,n] = e;
                                    return {
                                        start: t,
                                        end: n
                                    }
                                }
                                )
                            })),
                            ew(),
                            function(e) {
                                let {sourceSample: t, inpaintRegions: n} = e
                                  , {workingRegion: r, inpaintRegions: i} = function(e) {
                                    if (0 === e.length)
                                        throw Error("Inpaint regions are empty");
                                    let t = Math.min(...e.map(e => e[0]))
                                      , n = Math.max(...e.map(e => e[1]));
                                    if (n - t > v.s7)
                                        throw Error("Inpaint regions over 28 seconds");
                                    let r = (v.s7 - (n - t)) / 2
                                      , i = Math.max(t - r, 0);
                                    return {
                                        workingRegion: [i, i + v.s7],
                                        inpaintRegions: e
                                    }
                                }(n);
                                return {
                                    mode: "inpaint",
                                    source: D(t),
                                    crop_ranges: i.flat(),
                                    working_region: r,
                                    edit_selection: "inpaint"
                                }
                            }({
                                sourceSample: l,
                                inpaintRegions: n
                            })
                        }
                    case "precede":
                    case "continuation":
                        {
                            let e = function(e) {
                                let {sourceSample: t, trimStart: n, trimEnd: r} = e
                                  , i = t.startTrim
                                  , s = t.duration - t.stopTrim - r;
                                return {
                                    ...C.hB.getState().getExtensionSettings(),
                                    crop_range: [n + i, s]
                                }
                            }({
                                sourceSample: l,
                                trimStart: t().getTrimStart(),
                                trimEnd: t().getTrimEnd()
                            });
                            if (i) {
                                var n;
                                e.crop_range = null !== (n = t().cropRangeForRegeneration) && void 0 !== n ? n : e.crop_range
                            }
                            return e
                        }
                    }
                }
                )()
                  , c = E.Zt.getState().getSamplerOptions();
                if ("inpaint" === a && (c = {
                    prompt: c.prompt,
                    lyrics: c.lyrics,
                    lyrics_type: "user",
                    bypass_prompt_optimization: !1,
                    seed: c.seed,
                    song_section_start: I.$k.song_section_start,
                    prompt_strength: .5,
                    clarity_strength: I.$k.clarity_strength,
                    lyrics_strength: .5,
                    generation_quality: .75,
                    negative_prompt: I.$k.negative_prompt,
                    model_type: c.model_type,
                    use_allegro: c.use_allegro,
                    bpm_enabled: !1,
                    mode: a,
                    use_style: c.use_style
                }),
                c.use_style) {
                    let e = L.w.getState().getStyleSettings();
                    if ("use_style"in (c = {
                        ...c,
                        bypass_prompt_optimization: !0,
                        style: e,
                        prompt: ""
                    })) {
                        let {use_style: e, ...t} = c;
                        c = t
                    }
                } else
                    c = {
                        ...c,
                        style: void 0,
                        use_style: !1
                    };
                T.Q.getState().generateTrack({
                    ...c,
                    config: o
                }, function() {
                    if (!q)
                        throw Error("Captcha not mounted");
                    return q
                }(), "session-editor", !1, t().folderId, e => {
                    let n = t().folderId;
                    n && e0.moveToFolder({
                        moveToFolderId: n,
                        songIds: e,
                        folderIds: []
                    })
                }
                , e => {
                    console.warn("Generation failed", e),
                    t().reportPendingSongIdsError()
                }
                );
                let d = {
                    id: (0,
                    p.Z)(),
                    type: "generating",
                    generationId: (0,
                    p.Z)(),
                    isPlaceholder: !0,
                    generationType: a,
                    sourceSampleId: n,
                    songId: null,
                    targetClipId: r,
                    startTime: Date.now(),
                    inpaintRegions: "inpaint" === a ? t().lastInpaintRegions : null
                }
                  , u = {
                    ...d,
                    id: (0,
                    p.Z)()
                };
                e(e => ({
                    ...e,
                    activeGenerations: [...e.activeGenerations, d, u]
                }))
            }
            ,
            reportSongGenerationCompletion: n => {
                var r, i, s, l;
                let a;
                let o = t().getClipGroup();
                if (t().completedSongsBeingHandled.includes(n.id) || o && F(o, n.id))
                    return !0;
                if ("inpaint" !== n.audio_conditioning_type && !(o && W(o, t().getSample)) && (!o || !F(o, null !== (r = n.parent_id) && void 0 !== r ? r : "") && (s = null !== (i = n.parent_id) && void 0 !== i ? i : "",
                l = t().getSample,
                !o.clips.some(e => e.takes.some(e => {
                    let t = l(e.sampleId);
                    return (null == t ? void 0 : t.type) === "song" && t.song.parent_id === s
                }
                )))))
                    return !1;
                let c = t().getGenerationForTrackId(n.id, n.audio_conditioning_type);
                if ((null == c ? void 0 : c.type) === "completed")
                    return console.warn("Generation already completed", c),
                    !0;
                let d = !c || !t().appliedGenerations.has(c.generationId)
                  , u = new Set(t().appliedGenerations);
                c && u.add(c.generationId),
                e(e => ({
                    ...e,
                    completedSongsBeingHandled: [...e.completedSongsBeingHandled, n.id],
                    appliedGenerations: u
                }));
                let m = ( () => {
                    var e;
                    let r = (null == c ? void 0 : c.sourceSampleId) ? t().getSample(c.sourceSampleId) : null;
                    if (!n.parent_id && (null == r ? void 0 : r.type) === "upload") {
                        let e = ( () => {
                            var e, i, s;
                            if (!c)
                                return n.title;
                            let l = t().activeGenerations.findIndex(e => e === c);
                            return e = r.file.name,
                            i = c.generationType,
                            s = l >= 0 ? l : 0,
                            "".concat((0,
                            eQ.Ho)(e), " ").concat("inpaint" === i ? "edit" : "ext", " v").concat(s + 1)
                        }
                        )();
                        try {
                            R.US.updateSong(n.id, {
                                title: e
                            })
                        } catch (e) {
                            console.error("Failed to update song title", e)
                        }
                        return n = {
                            ...n,
                            parent_id: r.id,
                            title: e
                        },
                        r
                    }
                    return t().getSampleFromSongId(null !== (e = n.parent_id) && void 0 !== e ? e : "")
                }
                )()
                  , g = function(e, t) {
                    var n, r, i;
                    let s = "inpaint" === e.audio_conditioning_type ? [] : t ? [...t.lineage, t.id] : [];
                    return {
                        id: e.id,
                        name: null !== (n = e.title) && void 0 !== n ? n : "",
                        type: "song",
                        song: e,
                        duration: null !== (r = e.duration) && void 0 !== r ? r : 0,
                        userId: null !== (i = e.user_id) && void 0 !== i ? i : "",
                        lineage: s,
                        startTrim: 0,
                        stopTrim: 0
                    }
                }(n, null != m ? m : null);
                t().addSample(g);
                let f = t().activeGenerations.every(e => "generating" === e.type)
                  , x = ( () => {
                    if (!o)
                        return null;
                    let e = t().getSample(o.latestSampleId);
                    if (!e)
                        throw Error("Current sample not found");
                    return {
                        ...o,
                        clips: j(e, o.clips, t().getSample)
                    }
                }
                )()
                  , v = function(e, t) {
                    var n, r, i, s, l;
                    let a = ( () => {
                        if (null == e ? void 0 : e.generationType)
                            return e.generationType;
                        switch (t.audio_conditioning_type) {
                        case "continuation":
                            return "continuation";
                        case "precede":
                            return "precede";
                        case "inpaint":
                            return "inpaint";
                        default:
                            throw Error("Unsupported extension type: ".concat(t.audio_conditioning_type))
                        }
                    }
                    )()
                      , o = (null == e ? void 0 : e.sourceSampleId) ? e.sourceSampleId : null !== (l = t.parent_id) && void 0 !== l ? l : "";
                    return {
                        type: "completed",
                        songId: t.id,
                        generationType: a,
                        id: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "",
                        sourceSampleId: o,
                        targetClipId: null !== (r = null == e ? void 0 : e.targetClipId) && void 0 !== r ? r : null,
                        generationId: null !== (i = null == e ? void 0 : e.generationId) && void 0 !== i ? i : "",
                        inpaintRegions: null !== (s = null == e ? void 0 : e.inpaintRegions) && void 0 !== s ? s : null
                    }
                }(c, n)
                  , y = function(e) {
                    let {generation: t, clipGroup: n, samples: r, applyTrims: i, loadNewSample: s} = e;
                    if (!n)
                        return {
                            clipGroup: null,
                            destinationClipId: null,
                            samples: r
                        };
                    if ("completed" === t.type)
                        switch (t.generationType) {
                        case "continuation":
                        case "precede":
                            return function(e) {
                                let {clipGroup: t, newSampleIds: n, generationType: r, sourceSampleId: i, targetClipId: s, samples: l, applyTrims: a, loadNewSample: o} = e;
                                if (0 === n.length)
                                    return {
                                        clipGroup: null,
                                        destinationClipId: null,
                                        samples: l
                                    };
                                let c = n.map(e => l[e])
                                  , d = W(t, e => l[e]) && c.some(e => (null == e ? void 0 : e.type) === "song" && !e.song.parent_id)
                                  , u = e => e.takes.some(e => {
                                    let t = l[e.sampleId];
                                    return (null == t ? void 0 : t.type) === "upload"
                                }
                                );
                                if (-1 === t.clips.findIndex(e => d && u(e) || e.sampleId === i || e.takes.some(e => e.sampleId === i) || e.takes.some(e => {
                                    let t = l[e.sampleId];
                                    return (null == t ? void 0 : t.type) === "song" && t.song.parent_id === i
                                }
                                )))
                                    throw Error("Source clip not found");
                                let m = o ? n[0] : t.latestSampleId;
                                if (s) {
                                    let e = t.clips.map(e => e.id === s ? {
                                        ...e,
                                        takes: z(e.takes, n.map(e => ({
                                            sampleId: e,
                                            duration: h.Uf
                                        })))
                                    } : e);
                                    return {
                                        clipGroup: {
                                            ...t,
                                            clips: e,
                                            latestSampleId: m
                                        },
                                        destinationClipId: s,
                                        samples: l
                                    }
                                }
                                {
                                    let e = a ? function(e, t, n, r) {
                                        let i = -1 * t
                                          , s = _()(r)
                                          , l = e.map( (e, n) => {
                                            let r = H(e)
                                              , l = r.duration;
                                            i < 0 && (l += i);
                                            let a = {
                                                ...e,
                                                position: n,
                                                startTime: Math.max(0, i),
                                                takes: e.takes.map(e => ({
                                                    ...e,
                                                    duration: l
                                                }))
                                            };
                                            return e.takes.forEach(e => {
                                                if (i < 0) {
                                                    let n = s[e.sampleId];
                                                    n && (n.startTrim += t)
                                                }
                                            }
                                            ),
                                            i += r.duration,
                                            a
                                        }
                                        ).filter(e => H(e).duration > 0)
                                          , a = -1 * n;
                                        return {
                                            clips: l = l.reverse().map(e => {
                                                let t = H(e)
                                                  , n = t.duration;
                                                return a < 0 && (n += a,
                                                e.takes.forEach(e => {
                                                    if (a < 0) {
                                                        let t = s[e.sampleId];
                                                        t && (t.duration += a)
                                                    }
                                                }
                                                )),
                                                a += t.duration,
                                                {
                                                    ...e,
                                                    takes: e.takes.map(e => e.sampleId === t.sampleId ? {
                                                        ...e,
                                                        duration: n
                                                    } : e)
                                                }
                                            }
                                            ).filter(e => H(e).duration > 0).reverse(),
                                            samples: s
                                        }
                                    }(t.clips, t.trimStart, t.trimEnd, l) : {
                                        clips: t.clips,
                                        samples: l
                                    }
                                      , s = e.clips
                                      , o = e.samples
                                      , c = l[i];
                                    if (s.length && (null == c ? void 0 : c.type) === "song" && "inpaint" === c.song.audio_conditioning_type) {
                                        let e = s.reduce( (e, t) => t.takes.length > 0 ? e + H(t).duration : e, 0);
                                        s = [{
                                            id: (0,
                                            p.Z)(),
                                            sampleId: i,
                                            takes: [{
                                                sampleId: i,
                                                duration: e
                                            }],
                                            position: 0,
                                            groupId: t.id,
                                            startTime: s[0].startTime
                                        }]
                                    }
                                    let {clips: d, modifiedClipId: u} = function(e) {
                                        let {extensionSampleIds: t, parentSampleId: n, clips: r, generationType: i, getSample: s, clipGroupId: l} = e
                                          , a = function(e, t, n, r) {
                                            if (!e.find(e => B(t, e)))
                                                return -1;
                                            let i = "precede" === n ? 0 : e.length - 1;
                                            if (i >= e.length)
                                                return -1;
                                            let s = r(e[i].sampleId);
                                            if (!s)
                                                throw Error("Sample not found");
                                            return "song" === s.type && s.song.parent_id === t ? i : -1
                                        }(r, n, i, s);
                                        if (-1 === a) {
                                            let e = {
                                                id: (0,
                                                p.Z)(),
                                                sampleId: t[0],
                                                takes: t.map(e => ({
                                                    sampleId: e,
                                                    duration: h.Uf
                                                })),
                                                position: -1,
                                                groupId: l,
                                                startTime: -1
                                            }
                                              , s = 0
                                              , a = 0
                                              , o = r.reduce( (e, t) => {
                                                let r = H(t);
                                                return e.id ? (a += r.duration,
                                                e.takes = [{
                                                    sampleId: n,
                                                    duration: a
                                                }],
                                                e.sampleId = n,
                                                e) : (a = r.duration,
                                                t)
                                            }
                                            , {
                                                id: "",
                                                sampleId: "",
                                                takes: [],
                                                groupId: l,
                                                position: 0,
                                                startTime: 0
                                            });
                                            return {
                                                clips: ("precede" === i ? [e, o] : [o, e]).map( (e, t) => {
                                                    let n = {
                                                        ...e,
                                                        position: t,
                                                        startTime: s
                                                    };
                                                    return s += H(e).duration,
                                                    n
                                                }
                                                ),
                                                modifiedClipId: e.id
                                            }
                                        }
                                        let o = r.map( (e, n) => n === a ? {
                                            ...e,
                                            takes: z(e.takes, t.map(e => ({
                                                sampleId: e,
                                                duration: h.Uf
                                            })))
                                        } : e);
                                        return {
                                            clips: o,
                                            modifiedClipId: o[a].id
                                        }
                                    }({
                                        extensionSampleIds: n,
                                        parentSampleId: i,
                                        clips: s,
                                        generationType: r,
                                        getSample: e => o[e],
                                        clipGroupId: t.id
                                    });
                                    return tw.getState().setActiveTakesMenu(u),
                                    {
                                        clipGroup: {
                                            ...t,
                                            trimStart: 0,
                                            trimEnd: 0,
                                            latestSampleId: m,
                                            clips: d
                                        },
                                        destinationClipId: u,
                                        samples: o
                                    }
                                }
                            }({
                                clipGroup: n,
                                newSampleIds: [t.songId],
                                generationType: t.generationType,
                                sourceSampleId: t.sourceSampleId,
                                targetClipId: t.targetClipId,
                                samples: r,
                                applyTrims: i,
                                loadNewSample: s
                            });
                        case "inpaint":
                            {
                                if (!r[t.songId])
                                    throw Error("Sample ".concat(t.songId, " not found"));
                                if (!t.inpaintRegions || 0 === t.inpaintRegions.length)
                                    throw Error("No inpaint regions provided");
                                let e = t.inpaintRegions.reduce( (e, t) => ({
                                    start: Math.min(e.start, t.start),
                                    end: Math.max(e.end, t.end)
                                }), {
                                    start: t.inpaintRegions[0].start,
                                    end: t.inpaintRegions[0].end
                                })
                                  , i = e.start
                                  , l = e.end - e.start
                                  , a = (0,
                                p.Z)()
                                  , o = r[t.sourceSampleId];
                                if (!o)
                                    throw Error("Source sample not found");
                                let c = []
                                  , d = null
                                  , u = n.clips.find(e => {
                                    let t = r[e.sampleId];
                                    return !!t && "song" === t.type && t.song.parent_id === o.id
                                }
                                );
                                u ? (c.push(...n.clips.map(e => e.id === u.id ? {
                                    ...e,
                                    takes: z(e.takes, [{
                                        sampleId: t.songId,
                                        duration: l
                                    }])
                                } : e)),
                                d = u.id) : (i > 0 && c.push({
                                    id: (0,
                                    p.Z)(),
                                    sampleId: t.sourceSampleId,
                                    takes: [{
                                        sampleId: t.sourceSampleId,
                                        duration: i
                                    }],
                                    position: 0,
                                    groupId: a,
                                    startTime: 0
                                }),
                                c.push({
                                    id: d = (0,
                                    p.Z)(),
                                    sampleId: t.songId,
                                    takes: [{
                                        sampleId: t.songId,
                                        duration: l
                                    }],
                                    position: i,
                                    groupId: a,
                                    startTime: i,
                                    inpaintRegions: t.inpaintRegions
                                }),
                                i + l < o.duration && c.push({
                                    id: (0,
                                    p.Z)(),
                                    sampleId: t.sourceSampleId,
                                    takes: [{
                                        sampleId: t.sourceSampleId,
                                        duration: o.duration - i - l
                                    }],
                                    position: i + l,
                                    groupId: a,
                                    startTime: i + l
                                }));
                                let m = s ? t.songId : n.latestSampleId;
                                return {
                                    clipGroup: {
                                        id: a,
                                        clips: c,
                                        positionInSeconds: 0,
                                        trimStart: n.trimStart,
                                        trimEnd: n.trimEnd,
                                        latestSampleId: m,
                                        sessionId: n.sessionId
                                    },
                                    destinationClipId: d,
                                    samples: r
                                }
                            }
                        }
                    return {
                        clipGroup: n,
                        destinationClipId: null,
                        samples: r
                    }
                }({
                    generation: v,
                    clipGroup: x,
                    samples: t().samples,
                    applyTrims: d,
                    loadNewSample: f
                })
                  , {destinationClipId: S, samples: b} = y
                  , w = y.clipGroup;
                if (!w)
                    return !1;
                w.latestSampleId === (null == o ? void 0 : o.latestSampleId) && F(w, w.latestSampleId) || (w = V(w, g.id, e => b[e], "load-provided-sample"));
                let k = t().completedSongsBeingHandled.filter(e => e !== n.id);
                (a = null === c ? [...t().activeGenerations, v] : t().activeGenerations.map(e => e.id === c.id ? {
                    ...v,
                    targetClipId: S
                } : {
                    ...e,
                    targetClipId: S
                })).every(e => "completed" === e.type) && (a = []);
                let M = 0 === a.length
                  , N = "inpaint" === v.generationType;
                return e(e => ({
                    ...e,
                    completedSongsBeingHandled: k,
                    activeGenerations: a,
                    clipGroups: [w],
                    contextMenu: M ? null : e.contextMenu,
                    visuallySelectedSampleId: null,
                    contextMenuSource: null,
                    samples: b,
                    appliedGenerations: new Set(e.appliedGenerations.add(v.generationId)),
                    replaceSelectionAreas: N ? [] : e.replaceSelectionAreas
                })),
                !0
            }
            ,
            reportSongGenerationFailure: n => {
                let r = t().getGenerationForTrackId(n.id);
                if (r) {
                    if ("completed" === r.type) {
                        console.warn("Generation already completed", r);
                        return
                    }
                    e(e => ({
                        ...e,
                        activeGenerations: e.activeGenerations.filter(e => e.id !== r.id)
                    }))
                }
            }
            ,
            reportPendingSong: n => {
                let {songId: r, parentId: i, generationType: s} = n
                  , l = t().getClipGroup();
                if (!l || t().activeGenerations.some(e => e.songId === r))
                    return;
                let a = t().samples;
                if (!W(l, e => a[e]) && !F(l, i)) {
                    console.warn("Parent id not found in clip group in reportPendingSong", i);
                    return
                }
                W(l, t().getSample) && "inpaint" === s && 1 === l.clips.length && (i = l.latestSampleId);
                let o = function(e, t, n, r, i) {
                    var s;
                    let l = r.find(e => e.sourceSampleId === t);
                    if (l)
                        return l.targetClipId;
                    let a = i(t);
                    if (!a || "song" !== a.type)
                        return null;
                    let o = function(e, t, n) {
                        let r = t => {
                            if (!t || "song" !== t.type)
                                return !1;
                            let r = t.song;
                            for (; r.parent_id; ) {
                                if (r.parent_id === e.id)
                                    return !0;
                                let t = n(r.parent_id);
                                if (!t || "song" !== t.type)
                                    throw Error("Parent sample not found");
                                r = t.song
                            }
                            return !1
                        }
                        ;
                        return t.filter(e => e.takes.every(e => !r(n(e.sampleId))))
                    }(a.song, e.clips, i)
                      , c = "precede" === n ? o[0].position : o[o.length - 1].position
                      , d = e.clips.find(e => {
                        if ("precede" === n ? e.position < c : e.position > c) {
                            let n = i(e.sampleId);
                            return !!n && "song" === n.type && n.song.parent_id === t
                        }
                        return !1
                    }
                    );
                    return null !== (s = null == d ? void 0 : d.id) && void 0 !== s ? s : null
                }(l, i, s, t().activeGenerations, t().getSample)
                  , c = {
                    id: (0,
                    p.Z)(),
                    type: "generating",
                    generationId: (0,
                    p.Z)(),
                    generationType: s,
                    sourceSampleId: i,
                    songId: r,
                    targetClipId: o,
                    startTime: Date.now(),
                    isPlaceholder: !1,
                    inpaintRegions: "inpaint" === s ? t().lastInpaintRegions : null
                };
                e(e => {
                    var t, n;
                    let r = e.activeGenerations.find(e => "generating" === e.type && e.isPlaceholder && e.sourceSampleId === i && e.generationType === s)
                      , l = null !== (t = null == r ? void 0 : r.generationId) && void 0 !== t ? t : c.generationId
                      , a = null !== (n = null == r ? void 0 : r.startTime) && void 0 !== n ? n : Date.now()
                      , o = e.activeGenerations.filter(e => e !== r)
                      , d = r ? r.inpaintRegions : c.inpaintRegions;
                    return {
                        ...e,
                        activeGenerations: [...o, {
                            ...c,
                            startTime: a,
                            generationId: l,
                            isPlaceholder: !1,
                            inpaintRegions: d
                        }]
                    }
                }
                )
            }
            ,
            reportPendingSongIdsError: () => {
                let n = 0
                  , r = t().activeGenerations.reduce( (e, t) => n < 2 && "generating" === t.type && t.isPlaceholder ? (n++,
                e) : [...e, t], []);
                e(e => ({
                    ...e,
                    activeGenerations: r
                }))
            }
            ,
            getGenerationStatusType: () => t().activeGenerations.some(e => "generating" === e.type) ? "generating" : "idle",
            prepareForExtension: n => {
                let r = t().getLoadedSample();
                if (!r)
                    throw Error("No sample loaded to extend");
                let i = {
                    mode: "intro" === n || "section-left" === n ? "precede" : "continuation",
                    source: D(r)
                };
                C.hB.getState().setExtensionSettings({
                    ...i
                });
                let s = t().contextMenuSource
                  , l = {
                    sampleId: r.id,
                    generationType: "extend"
                };
                e(e => ({
                    ...e,
                    loadingParametersFromSample: !0,
                    contextMenu: "extend",
                    pendingGenerationType: n,
                    pendingGenerationSourceSampleId: r.id,
                    pendingGenerationTargetClipId: null,
                    visuallySelectedSampleId: null,
                    contextMenuSource: l
                })),
                (0,
                E.Zt.getState().setSamplerOptions)({
                    ...E.Zt.getState().getSamplerOptions(),
                    lyrics_type: "generate",
                    lyrics: void 0,
                    ...i
                }),
                (0,
                M.w)(s, l) ? e(e => ({
                    ...e,
                    loadingParametersFromSample: !1
                })) : e$(r, null).finally( () => {
                    e(e => ({
                        ...e,
                        loadingParametersFromSample: !1
                    }))
                }
                )
            }
            ,
            prepareForRegeneration: () => {
                let n = ( () => {
                    if (t().visuallySelectedSampleId) {
                        var e;
                        return t().getSample(null !== (e = t().visuallySelectedSampleId) && void 0 !== e ? e : "")
                    }
                    let n = t().getClipGroup();
                    if (!n)
                        throw Error("No clip group found");
                    if (!n.clips.find(e => e.takes.some(e => e.sampleId === n.latestSampleId)))
                        throw Error("No active clip found");
                    return t().getSample(n.latestSampleId)
                }
                )();
                if (!(null == n ? void 0 : n.lineage))
                    throw Error("Unable to determine source sample for regenerate");
                let r = "song" === n.type && "inpaint" === n.song.audio_conditioning_type
                  , i = ( () => {
                    if (r || 0 === n.lineage.length)
                        return null;
                    {
                        let e = n.lineage[n.lineage.length - 1]
                          , r = t().getSample(e);
                        if (r)
                            C.hB.getState().setSource(D(r));
                        else
                            throw Error("Parent sample not found for extension regeneration");
                        return r
                    }
                }
                )()
                  , s = t().getClipGroup();
                if (!s)
                    throw Error("No clip group found");
                let l = s.clips.find(e => e.takes.some(e => e.sampleId === n.id))
                  , a = r ? "inpaint" : "song" !== n.type ? null : null === n.song.audio_conditioning_type ? null : "continuation" === n.song.audio_conditioning_type ? "section-right" : "section-left"
                  , o = t().contextMenuSource
                  , c = {
                    sampleId: n.id,
                    generationType: "regenerate"
                };
                if (e(e => {
                    var t, s, o;
                    return {
                        ...e,
                        loadingParametersFromSample: !0,
                        contextMenu: "regenerate",
                        pendingGenerationSourceSampleId: r ? null !== (t = n.song.parent_id) && void 0 !== t ? t : n.id : null !== (s = null == i ? void 0 : i.id) && void 0 !== s ? s : n.id,
                        pendingGenerationTargetClipId: null !== (o = null == l ? void 0 : l.id) && void 0 !== o ? o : null,
                        visuallySelectedSampleId: n.id,
                        pendingGenerationType: a,
                        contextMenuSource: c
                    }
                }
                ),
                (0,
                M.w)(o, c))
                    e(e => ({
                        ...e,
                        loadingParametersFromSample: !1
                    }));
                else {
                    let t = ( () => {
                        var e, t, r, s;
                        if ("song" !== n.type)
                            return null;
                        if ("continuation" === n.song.audio_conditioning_type || "precede" === n.song.audio_conditioning_type) {
                            let s = (null == i ? void 0 : i.type) === "song" && null !== (t = null === (e = i.song.lyrics) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0;
                            return (null !== (r = n.song.lyrics) && void 0 !== r ? r : "").slice(s)
                        }
                        return (null == i ? void 0 : i.type) === "song" && null !== (s = i.song.lyrics) && void 0 !== s ? s : n.song.lyrics
                    }
                    )();
                    e$(n, t).then(t => {
                        let n = null == t ? void 0 : t.samplerOptions.config
                          , r = null == n ? void 0 : n.crop_range;
                        e(e => ({
                            ...e,
                            cropRangeForRegeneration: null != r ? r : null
                        }))
                    }
                    ).finally( () => {
                        e(e => ({
                            ...e,
                            loadingParametersFromSample: !1
                        }))
                    }
                    )
                }
            }
            ,
            prepareForReplace: () => {
                let n = t().getLoadedSample();
                if (!n)
                    throw Error("No sample loaded to replace");
                let r = t().contextMenuSource
                  , i = {
                    sampleId: n.id,
                    generationType: "inpaint"
                }
                  , s = t().getClipGroup();
                if (!s)
                    throw Error("No clip group found");
                if (!s.clips.find(e => e.takes.some(e => e.sampleId === n.id)))
                    throw Error("No generation target clip found");
                let l = E.Zt.getState().setSamplerOptions;
                if (l({
                    ...E.Zt.getState().getSamplerOptions(),
                    lyrics_placement_start: 0,
                    lyrics_placement_end: 1,
                    song_section_start: 0,
                    song_section_end: 1,
                    bpm_enabled: !1
                }),
                e(e => ({
                    ...e,
                    loadingParametersFromSample: !0,
                    contextMenu: "replace",
                    contextMenuSource: i,
                    pendingGenerationType: "inpaint",
                    pendingGenerationSourceSampleId: n.id,
                    pendingGenerationTargetClipId: null,
                    visuallySelectedSampleId: null
                })),
                (0,
                M.w)(r, i))
                    e(e => ({
                        ...e,
                        loadingParametersFromSample: !1
                    }));
                else {
                    var a;
                    let t = "song" !== n.type ? null : null !== (a = n.song.lyrics) && void 0 !== a ? a : "";
                    e$(n, t).finally( () => {
                        let t = E.Zt.getState().getSamplerOptions();
                        l({
                            ...E.Zt.getState().getSamplerOptions(),
                            lyrics_type: "generate" === t.lyrics_type ? "user" : t.lyrics_type
                        }),
                        e(e => ({
                            ...e,
                            loadingParametersFromSample: !1
                        }))
                    }
                    )
                }
            }
            ,
            getGenerationForTrackId: (e, n) => {
                let r = t().activeGenerations.filter(e => "generating" === e.type)
                  , i = r.find(t => t.songId === e);
                if (i)
                    return i;
                if (!n)
                    return null;
                let s = r.find(e => e.generationType === n);
                return null != s ? s : null
            }
            ,
            activeGenerationsIncludeCompletedTrack: e => {
                let n = t().getGenerationForTrackId(e);
                return !!n && "completed" === n.type
            }
            ,
            generationsIncludesTrack: e => t().activeGenerations.some(t => "generating" === t.type && t.songId === e || "completed" === t.type && t.songId === e),
            activeGenerationsIncludeFailedTrack: e => {
                let n = t().getGenerationForTrackId(e);
                return !!n && void 0 !== n.error
            }
            ,
            clearTimedOutGenerations: n => {
                let r = t().activeGenerations.filter(e => "generating" === e.type)
                  , i = r.filter(e => (n - e.startTime) / 1e3 > v.zs);
                r.length > 0 && r.length === i.length && e( () => ({
                    activeGenerations: [],
                    completedSongsBeingHandled: [],
                    contextMenu: null
                }))
            }
        })
          , e2 = (e, t) => ({
            pastStates: [],
            futureStates: [],
            action: "Loaded session",
            actionTimestamp: new Date().toISOString(),
            undo: function() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                if (n > t().pastStates.length)
                    return;
                let {pastStates: r, futureStates: i, clipGroups: s, samples: l, action: a, actionTimestamp: o} = t()
                  , c = r[r.length - n];
                e({
                    clipGroups: c.clipGroups,
                    samples: c.samples,
                    action: c.action,
                    actionTimestamp: c.actionTimestamp,
                    pastStates: r.slice(0, r.length - n),
                    futureStates: [...r.slice(r.length - n + 1), {
                        clipGroups: s,
                        samples: l,
                        action: a,
                        actionTimestamp: o
                    }, ...i]
                })
            },
            redo: function() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                if (n > t().futureStates.length)
                    return;
                let {futureStates: r, pastStates: i, clipGroups: s, samples: l, action: a, actionTimestamp: o} = t()
                  , c = r[n - 1];
                e({
                    clipGroups: c.clipGroups,
                    samples: c.samples,
                    action: c.action,
                    actionTimestamp: c.actionTimestamp,
                    pastStates: [...i, {
                        clipGroups: s,
                        samples: l,
                        action: a,
                        actionTimestamp: o
                    }, ...r.slice(0, n - 1)],
                    futureStates: r.slice(n)
                })
            },
            pushStateToHistory: n => {
                let {pastStates: r, action: i, actionTimestamp: s} = t();
                e({
                    pastStates: [...r, {
                        clipGroups: t().clipGroups,
                        samples: t().samples,
                        action: i,
                        actionTimestamp: s
                    }],
                    action: n,
                    actionTimestamp: new Date().toISOString(),
                    futureStates: []
                })
            }
        });
        var e3 = n(39108)
          , e5 = n(54167)
          , e4 = n(14314)
          , e6 = n(5325);
        let e9 = new e5.Z
          , e7 = 0
          , e8 = !1
          , te = !1
          , tt = new Map;
        async function tn(e, t) {
            e8 || await td(),
            await e9.setCurrentTimeMs(1e3 * e / t),
            e7 = e
        }
        async function tr() {
            e8 && (await td(),
            await e9.pruneVirtualFileSystem())
        }
        async function ti() {
            e8 || await td(),
            await e9.gc(),
            await e9.render(0, 0)
        }
        async function ts(e, t) {
            te = e.isPlaying,
            await td();
            let n = tw.getState().getSample(e.sampleId);
            if (!n) {
                console.error("No sample found with id", e.sampleId);
                return
            }
            await tl(n.id) || await ta(n),
            (e.playbackRate !== t.playbackRate || e.isPlaying && !t.isPlaying) && await tn(e7, e.playbackRate),
            e.trimStart > e7 && await tn(e.trimStart, e.playbackRate),
            r = e.loopBounds,
            await to({
                isPlaying: e.isPlaying,
                duration: n.duration,
                sampleId: n.id,
                shift: 0,
                playbackRate: e.playbackRate,
                trimStart: e.trimStart + n.startTrim,
                trimEnd: e.trimEnd + n.stopTrim,
                globalVolume: e.globalVolume
            })
        }
        async function tl(e) {
            return await td(),
            (await e9.listVirtualFileSystem()).includes(e)
        }
        async function ta(e) {
            if (tt.has(e.id))
                return await tt.get(e.id);
            let t = (async () => {
                if (await td(),
                await tl(e.id))
                    return;
                let t = null;
                if ("song" === e.type) {
                    if (!e.song.song_path) {
                        console.error("Song has no song path", e.id);
                        return
                    }
                    t = await (0,
                    e6.qj)(e.song.song_path)
                } else {
                    let n = URL.createObjectURL(e.file);
                    t = await (0,
                    e6.qj)(n),
                    URL.revokeObjectURL(n)
                }
                if (!t) {
                    console.error("Failed to decode audio for sample", e.id);
                    return
                }
                await e9.updateVirtualFileSystem({
                    [e.id]: [t.getChannelData(0), t.getChannelData(1 % t.numberOfChannels)]
                })
            }
            )();
            tt.set(e.id, t);
            try {
                await t
            } finally {
                tt.delete(e.id)
            }
        }
        async function to(e) {
            let {isPlaying: t, duration: n, sampleId: r, trimStart: i, trimEnd: s, globalVolume: l} = e;
            if (await td(),
            await e9.gc(),
            !t) {
                await e9.render(0, 0);
                return
            }
            let a = e3.el.div(e3.el.time(), e3.el.sr())
              , o = e3.el.meter({
                name: "positionInSeconds"
            }, a)
              , [c,d] = e3.el.mc.sampleseq({
                key: r,
                channels: 2,
                path: r,
                seq: [{
                    time: 0,
                    value: 1
                }],
                duration: n
            }, o)
              , u = e3.el.const({
                key: "trimStart",
                value: i
            })
              , p = e3.el.const({
                key: "trimEnd",
                value: n - s
            })
              , m = e3.el.sm(e3.el.and(e3.el.ge(a, u), e3.el.le(a, p)))
              , g = e3.el.sm(e3.el.const({
                key: "globalVolume",
                value: l
            }))
              , f = e3.el.mul(m, g);
            await e9.render(e3.el.mul(c, f), e3.el.mul(d, f))
        }
        async function tc() {
            e8 || ((await e9.initialize((0,
            e4.k)(), {
                numberOfInputs: 0,
                numberOfOutputs: 1,
                outputChannelCount: [2]
            })).connect((0,
            e4.k)().destination),
            await e9.setCurrentTimeMs(0),
            e8 = !0,
            e9.on("meter", e => {
                "positionInSeconds" === e.source && te && (e7 = e.max,
                r && e.max >= r.end && e9.setCurrentTimeMs(1e3 * r.start))
            }
            ))
        }
        async function td() {
            return i || (i = tc()),
            i
        }
        let tu = (e, t) => ({
            play: () => {
                e(e => ({
                    ...e,
                    playbackState: "playing"
                }))
            }
            ,
            pause: () => {
                e(e => ({
                    ...e,
                    playbackState: "paused"
                }))
            }
            ,
            togglePlayPause: () => {
                e(e => ({
                    ...e,
                    playbackState: "playing" === e.playbackState ? "paused" : "playing"
                }))
            }
            ,
            stop: () => {
                e(e => ({
                    ...e,
                    playbackState: "stopped"
                }))
            }
            ,
            playFromBeginning: () => {
                t().setPlayheadPositionInSeconds(0),
                t().play()
            }
            ,
            playFromStartPoint: () => {
                let e = t().getPlayheadStartPosition();
                null !== e && t().setPlayheadPositionInSeconds(e),
                t().play()
            }
            ,
            seekToStart: () => {
                t().setPlayheadPositionInSeconds(0)
            }
            ,
            resetPlayhead: () => {
                t().seekToStart();
                let e = document.getElementById("scroll-container");
                e && e.scrollTo({
                    left: 0,
                    behavior: "smooth"
                })
            }
            ,
            getSampleTrimStart: () => {
                let e = t().getLoadedSample();
                return e ? e.startTrim : 0
            }
            ,
            setPlayheadPositionInSeconds: e => {
                tn(e + (t().getTrimStart() + t().getSampleTrimStart()), t().getPlaybackRate())
            }
            ,
            setPlayheadStartPosition: n => {
                let r = t().getTrimStart() + t().getSampleTrimStart();
                e(e => ({
                    ...e,
                    playheadStartPosition: n + r
                }))
            }
            ,
            getPlayheadPositionInSeconds: () => {
                let e = t().getLoadedSampleDuration() - t().getTotalTrimmedDuration();
                return Math.min(e7 - t().getTrimStart() - t().getSampleTrimStart(), e)
            }
            ,
            getPlayheadStartPosition: () => {
                let e = t().playheadStartPosition;
                return Math.max(0, Math.min(e - (t().getTrimStart() + t().getSampleTrimStart()), t().getLoadedSampleDuration() - t().getTotalTrimmedDuration()))
            }
            ,
            getPlaybackRate: () => {
                var e;
                let n = t().getLoadedSample()
                  , r = null !== (e = null == n ? void 0 : n.bpm) && void 0 !== e ? e : t().globalTempo;
                return t().globalTempo / r
            }
            ,
            setLoopBounds: (t, n) => {
                e(e => ({
                    ...e,
                    loopBounds: {
                        start: t,
                        end: n
                    }
                }))
            }
            ,
            enableLooping: () => {
                e(e => ({
                    ...e,
                    loopingEnabled: !0
                }))
            }
            ,
            disableLooping: () => {
                e(e => ({
                    ...e,
                    loopingEnabled: !1
                }))
            }
            ,
            toggleLooping: () => {
                e(e => ({
                    ...e,
                    loopingEnabled: !e.loopingEnabled
                }))
            }
            ,
            setGlobalTempo: t => {
                e(e => ({
                    ...e,
                    globalTempo: t
                }))
            }
            ,
            setGlobalVolume: t => {
                e(e => ({
                    ...e,
                    globalVolume: t
                }))
            }
            ,
            setGlobalMute: t => {
                e(e => ({
                    ...e,
                    globalMute: t
                }))
            }
            ,
            toggleGlobalMute: () => {
                e(e => ({
                    ...e,
                    globalMute: !e.globalMute
                }))
            }
        })
          , tp = e => ({
            replaceSelectionAreas: [],
            replaceSelectionAreaBounds: {
                start: 0,
                width: 0
            },
            selectedReplaceSelectionArea: null,
            replaceLyricsSelections: [],
            initializeReplaceSelectionAreas: () => {
                e(e => {
                    let t = e.getTrimStart();
                    return {
                        ...e,
                        replaceSelectionAreas: [{
                            start: t,
                            end: t + 10
                        }],
                        selectedReplaceSelectionArea: 0
                    }
                }
                )
            }
            ,
            addReplaceSelectionArea: t => {
                e(e => ({
                    ...e,
                    replaceSelectionAreas: [{
                        id: (0,
                        p.Z)(),
                        ...t
                    }],
                    selectedReplaceSelectionArea: 0
                }))
            }
            ,
            removeReplaceSelectionArea: t => {
                e(e => ({
                    ...e,
                    replaceSelectionAreas: e.replaceSelectionAreas.filter( (e, n) => n !== t)
                }))
            }
            ,
            clearReplaceSelectionAreas: () => {
                e(e => ({
                    ...e,
                    replaceSelectionAreas: []
                }))
            }
            ,
            updateReplaceSelectionArea: (t, n) => {
                e(e => ({
                    ...e,
                    replaceSelectionAreas: e.replaceSelectionAreas.map( (e, r) => r === t ? {
                        ...n,
                        id: e.id
                    } : e)
                }))
            }
            ,
            setReplaceSelectionAreaBounds: (t, n) => {
                e(e => ({
                    ...e,
                    replaceSelectionAreaBounds: {
                        start: t,
                        width: n
                    }
                }))
            }
            ,
            clearReplaceSelectionAreaBounds: () => {
                e(e => ({
                    ...e,
                    replaceSelectionAreaBounds: {
                        start: 0,
                        width: 0
                    }
                }))
            }
            ,
            setSelectedReplaceSelectionArea: t => {
                e(e => ({
                    ...e,
                    selectedReplaceSelectionArea: t
                }))
            }
            ,
            addReplaceLyricsSelection: t => {
                e(e => ({
                    ...e,
                    replaceLyricsSelections: [...e.replaceLyricsSelections, t]
                }))
            }
            ,
            removeReplaceLyricsSelection: t => {
                e(e => ({
                    ...e,
                    replaceLyricsSelections: e.replaceLyricsSelections.filter( (e, n) => n !== t)
                }))
            }
        })
          , tm = (e, t) => ({
            samples: {},
            samplesWithCachedWaveformData: new Set,
            addSample: t => {
                e(e => {
                    if ("song" === t.type && "inpaint" !== t.song.audio_conditioning_type && t.song.parent_id) {
                        let n = Object.values(e.samples).find(e => (null == e ? void 0 : e.type) === "song" && e.song.id === t.song.parent_id);
                        n && (t = {
                            ...t,
                            lineage: [...n.lineage, n.id]
                        })
                    }
                    return {
                        samples: {
                            ...e.samples,
                            [t.id]: t
                        }
                    }
                }
                )
            }
            ,
            removeSample: t => {
                e(e => {
                    let {[t]: n, ...r} = e.samples;
                    return {
                        samples: r
                    }
                }
                )
            }
            ,
            getSample: e => t().samples[e],
            getSampleFromSongId: e => Object.values(t().samples).find(t => t && "song" === t.type && t.song.id === e),
            prepareWaveformDataForClip: async e => {
                let n = t().getClipGroup();
                if (!n)
                    return;
                let r = n.clips.find(t => t.id === e);
                r && await Promise.all(r.takes.map(async e => {
                    let n = t().getSample(e.sampleId);
                    n && await t().populateWaveformDataForSample(n)
                }
                ))
            }
            ,
            prepareWaveformDataForSong: async e => {
                let n = t().getSampleFromSongId(e);
                n && await t().populateWaveformDataForSample(n)
            }
            ,
            addSampleWithCachedWaveformData: t => {
                e(e => {
                    let n = new Set(e.samplesWithCachedWaveformData);
                    return n.add(t),
                    {
                        samplesWithCachedWaveformData: n
                    }
                }
                )
            }
        })
          , tg = ["session-salmon", "session-red-orange", "session-magenta", "session-lavender", "session-blue-violet"]
          , tf = (e, t) => ({
            sectionMap: {},
            sectionColors: {},
            addSection: (t, n) => {
                e(e => {
                    var r, i;
                    let s = null !== (i = null === (r = e.sectionMap[t]) || void 0 === r ? void 0 : r.sections) && void 0 !== i ? i : []
                      , l = [...s, {
                        id: (0,
                        p.Z)(),
                        name: "SECTION",
                        start: s.length > 0 ? s[s.length - 1].start + s[s.length - 1].duration : 0,
                        duration: n
                    }];
                    return {
                        sectionMap: {
                            ...e.sectionMap,
                            [t]: {
                                sections: l,
                                wasModified: !0
                            }
                        }
                    }
                }
                )
            }
            ,
            removeSection: (t, n) => {
                e(e => {
                    var r, i, s, l;
                    let a = null !== (s = null === (r = e.sectionMap[t]) || void 0 === r ? void 0 : r.sections) && void 0 !== s ? s : []
                      , o = null !== (l = null === (i = a[0]) || void 0 === i ? void 0 : i.start) && void 0 !== l ? l : 0
                      , c = a.reduce( (e, t, r) => {
                        if (r === n)
                            return 0 === r && (o = t.start + t.duration),
                            e;
                        let i = {
                            ...t,
                            start: o
                        };
                        return o += t.duration,
                        [...e, i]
                    }
                    , []);
                    return {
                        sectionMap: {
                            ...e.sectionMap,
                            [t]: {
                                sections: c,
                                wasModified: !0
                            }
                        }
                    }
                }
                )
            }
            ,
            swapSections: (t, n, r) => {
                e(e => {
                    var i, s;
                    let l = [...null !== (s = null === (i = e.sectionMap[t]) || void 0 === i ? void 0 : i.sections) && void 0 !== s ? s : []]
                      , [a] = l.splice(n, 1);
                    l.splice(r, 0, a);
                    let o = 0;
                    return l.forEach(e => {
                        e.start = o,
                        o += e.duration
                    }
                    ),
                    {
                        sectionMap: {
                            ...e.sectionMap,
                            [t]: {
                                sections: l,
                                wasModified: !0
                            }
                        }
                    }
                }
                )
            }
            ,
            renameSection: (t, n, r) => {
                e(e => {
                    var i, s;
                    let l = [...null !== (s = null === (i = e.sectionMap[t]) || void 0 === i ? void 0 : i.sections) && void 0 !== s ? s : []];
                    return l[n] = {
                        ...l[n],
                        name: r
                    },
                    {
                        sectionMap: {
                            ...e.sectionMap,
                            [t]: {
                                sections: l,
                                wasModified: !0
                            }
                        }
                    }
                }
                )
            }
            ,
            updateSections: (t, n) => {
                e(e => ({
                    sectionMap: {
                        ...e.sectionMap,
                        [t]: {
                            sections: n.map(e => ({
                                ...e
                            })),
                            wasModified: !0
                        }
                    }
                }))
            }
            ,
            updateSectionsFromSong: (t, n) => {
                e(e => {
                    var r;
                    if (null === (r = e.sectionMap[t]) || void 0 === r ? void 0 : r.wasModified)
                        return e;
                    let i = n.map(e => ({
                        id: (0,
                        p.Z)(),
                        name: e.name,
                        start: e.startTime,
                        duration: e.endTime - e.startTime
                    }));
                    return {
                        sectionMap: {
                            ...e.sectionMap,
                            [t]: {
                                sections: i,
                                wasModified: !1
                            }
                        }
                    }
                }
                )
            }
            ,
            setHighlightedSection: t => {
                e({
                    highlightedSectionId: null != t ? t : void 0
                })
            }
            ,
            getSectionColor: e => {
                var n;
                let r = t().sectionColors
                  , i = (null === (n = /^[A-Za-z-]+/.exec(e)) || void 0 === n ? void 0 : n[0]) || e;
                if (!r[i]) {
                    let e = Object.keys(r).length % tg.length;
                    r[i] = tg[e]
                }
                return r[i]
            }
        })
          , th = new Set;
        async function tx(e) {
            if (!e)
                return null;
            let t = ei(e.id);
            if (t)
                return t;
            if (th.has(e.id))
                return null;
            th.add(e.id);
            try {
                let t = "";
                if ("song" === e.type) {
                    var n;
                    t = null !== (n = e.song.song_path) && void 0 !== n ? n : ""
                } else
                    t = URL.createObjectURL(e.file);
                let r = await (0,
                e6.M)(t);
                return await es(e.id, r),
                r
            } finally {
                th.delete(e.id)
            }
        }
        async function tv(e) {
            try {
                return (await R.bL.post("/api/songs/tree", {
                    trackId: e,
                    excludeSongsOutsideOfHierarchy: !0
                })).data.tree
            } catch (e) {
                return console.error("Error fetching song tree", e),
                []
            }
        }
        let ty = {
            clipGroups: [],
            removedSamplesMap: new Map,
            activeTakesMenuId: null,
            playbackState: "stopped",
            globalTempo: 120,
            globalVolume: 1,
            globalMute: !1,
            loopingEnabled: !1,
            showSongSections: !1,
            playheadStartPosition: 0,
            trimInitialStart: null,
            selectionArea: null,
            replaceSelectionAreas: [],
            replaceSelectionAreaBounds: {
                start: 0,
                width: 0
            },
            selectedClipPosition: null,
            contextMenu: null,
            lyricsMenuOpen: !1,
            historyMenuOpen: !1,
            contextMenuAdvancedOptions: !1,
            isDraggingTimelineElement: !1,
            zoomMultiplier: 1,
            pendingGenerationType: null,
            pendingGenerationSourceSampleId: null,
            pendingGenerationTargetClipId: null,
            cropRangeForRegeneration: null,
            lastInpaintRegions: null,
            folderId: void 0,
            activeGenerations: [],
            completedSongsBeingHandled: [],
            loadingParametersFromSample: !1,
            visuallySelectedSampleId: null,
            contextMenuSource: null,
            playbackContainerWidth: 0,
            id: (0,
            p.Z)(),
            userId: "1",
            name: "New Session",
            samples: {},
            samplesWithCachedWaveformData: new Set,
            sectionMap: {},
            sectionColors: {},
            schemaVersion: 2,
            appliedGenerations: new Set,
            pastStates: [],
            futureStates: [],
            action: "Created session",
            actionTimestamp: new Date().toISOString(),
            checkpoints: [],
            currentCheckpointId: null,
            selectedReplaceSelectionArea: null,
            replaceLyricsSelections: []
        }
          , tS = {
            playbackState: "stopped",
            globalTempo: 120,
            loopingEnabled: !1,
            playheadStartPosition: 0,
            trimInitialStart: null,
            selectionArea: null,
            selectedClipPosition: null,
            contextMenu: null,
            contextMenuAdvancedOptions: !1,
            isDraggingTimelineElement: !1,
            zoomMultiplier: 1,
            pendingGenerationType: null,
            pendingGenerationSourceSampleId: null,
            pendingGenerationTargetClipId: null,
            folderId: void 0,
            activeGenerations: [],
            completedSongsBeingHandled: [],
            loadingParametersFromSample: !1,
            appliedGenerations: new Set
        };
        function tb(e, t) {
            return {
                ...t,
                id: (0,
                p.Z)(),
                clipGroups: [e],
                playbackState: "stopped",
                globalTempo: 120,
                loopingEnabled: !1
            }
        }
        let tw = (0,
        m.Ue)()((0,
        g.XR)((0,
        g.mW)( (e, t, n) => ({
            ...ty,
            ...tu(e, t, n),
            ...tm(e, t, n),
            ...tf(e, t, n),
            ...tp(e, t, n),
            ...e1(e, t, n),
            ...e2(e, t, n),
            ...k(e, t, n),
            setActiveTakesMenu: t => e({
                activeTakesMenuId: t
            }),
            setFatalErrorHandler: t => {
                e(e => ({
                    ...e,
                    fatalErrorHandler: t
                }))
            }
            ,
            setLoadingParametersFromSample: t => {
                e(e => ({
                    ...e,
                    loadingParametersFromSample: t
                }))
            }
            ,
            setFolderId: t => {
                e(e => ({
                    ...e,
                    folderId: null != t ? t : void 0
                }))
            }
            ,
            loadSession: (n, r) => {
                (n.id !== t().id || "force-load" === r) && e( () => ({
                    ...n,
                    ...tS
                }))
            }
            ,
            unloadSession: () => {
                e( () => ({
                    ...ty
                }))
            }
            ,
            initializeFromSample: async n => {
                let r = t().getSample(n);
                if (!r)
                    throw Error("Sample ".concat(n, " not found"));
                if ("song" === r.type) {
                    let n = await (async () => {
                        let e = await tv(r.song.id);
                        return e.length > 0 && e.some(e => e.id === r.song.id) ? e : (console.warn("Song tree did not contain the requested song. Falling back to using a single song.", r.song.id),
                        [{
                            ...r.song,
                            parent_id: null
                        }])
                    }
                    )();
                    try {
                        var i, s, l;
                        let a = ( () => {
                            let e = S(n);
                            if (F(e.clipGroup, r.id))
                                return e;
                            console.warn("Clip group did not contain the requested song. Falling back to using a single song.", r.id);
                            let t = [{
                                ...r.song,
                                parent_id: null
                            }];
                            return S(t)
                        }
                        )()
                          , o = a.clipGroup
                          , c = a.samples;
                        c.forEach(e => {
                            t().addSample(e)
                        }
                        ),
                        o = U(o, r.song.id, e => c.find(t => t.id === e), "load-longest-descendant");
                        let d = c.find(e => e.id === o.latestSampleId);
                        (null !== (l = null === (i = o.clips.find(e => e.sampleId === (null == d ? void 0 : d.id))) || void 0 === i ? void 0 : i.takes.filter(e => e.sampleId !== (null == d ? void 0 : d.id))) && void 0 !== l ? l : []).forEach(e => {
                            let n = t().getSample(e.sampleId);
                            n && t().populateWaveformDataForSample(n)
                        }
                        ),
                        d && (await t().populateWaveformDataForSample(d),
                        t().addSample(d));
                        let u = (null == d ? void 0 : d.type) === "song" && (null === (s = d.song.lyrics) || void 0 === s ? void 0 : s.trim()) !== ""
                          , p = tb(o, t());
                        e(e => ({
                            ...e,
                            ...p,
                            showSongSections: u
                        }));
                        try {
                            t().loadInitialCheckpoints(c, n)
                        } catch (e) {
                            console.warn("Error loading checkpoints for session", e)
                        }
                    } catch (n) {
                        console.error(n);
                        let e = t().fatalErrorHandler;
                        e && e("Unable to create session");
                        return
                    }
                } else {
                    let n = {
                        id: (0,
                        p.Z)(),
                        sampleId: r.id,
                        takes: [{
                            sampleId: r.id,
                            duration: r.duration
                        }],
                        position: 0,
                        groupId: (0,
                        p.Z)(),
                        startTime: 0
                    }
                      , i = {
                        id: n.groupId,
                        clips: [n],
                        positionInSeconds: 0,
                        trimStart: 0,
                        trimEnd: 0,
                        sessionId: t().id,
                        latestSampleId: r.id
                    };
                    e(e => ({
                        ...e,
                        ...tb(i, e)
                    }))
                }
            }
            ,
            setName: t => {
                e(e => ({
                    ...e,
                    name: t
                }))
            }
            ,
            getLoadedSample: () => {
                var e;
                let n = t().getClipGroupValue("latestSampleId", "");
                return n && null !== (e = t().getSample(n)) && void 0 !== e ? e : null
            }
            ,
            getLyricsEditor: () => null,
            setLyricsEditorGetter: t => {
                e(e => ({
                    ...e,
                    getLyricsEditor: t
                }))
            }
            ,
            getLoadedSampleDuration: () => {
                var e;
                let n = t().getLoadedSample();
                return null !== (e = null == n ? void 0 : n.duration) && void 0 !== e ? e : 0
            }
            ,
            loadTake: n => {
                let r = t().getClipGroup();
                if (!r)
                    return;
                let i = t().getSample(n);
                if (!i) {
                    d.Am.error("Failed to load sample");
                    return
                }
                if (t().populateWaveformDataForSample(i),
                "song" === i.type && "inpaint" === i.song.audio_conditioning_type) {
                    let t = r.clips.map(e => e.takes.some(e => e.sampleId === n) ? {
                        ...e,
                        sampleId: n
                    } : e);
                    O(i),
                    e(e => ({
                        ...e,
                        clipGroups: [{
                            ...r,
                            clips: t,
                            latestSampleId: n
                        }]
                    }))
                } else
                    e(e => ({
                        ...e,
                        clipGroups: [V(r, n, t().getSample, "load-provided-sample")]
                    }))
            }
            ,
            visuallySelectedSampleId: null,
            setVisuallySelectedSampleId: t => {
                e(e => ({
                    ...e,
                    visuallySelectedSampleId: t
                }))
            }
            ,
            getVisuallySelectedSampleId: () => {
                var e, n;
                if (t().visuallySelectedSampleId)
                    return t().visuallySelectedSampleId;
                let r = null === (n = t().getClipGroup()) || void 0 === n ? void 0 : null === (e = n.clips.sort( (e, t) => e.position - t.position)[0]) || void 0 === e ? void 0 : e.sampleId;
                return null != r ? r : null
            }
            ,
            setSelectedClipPosition: t => {
                e(e => ({
                    ...e,
                    selectedClipPosition: t
                }))
            }
            ,
            setClipSample: (n, r) => {
                let i = t().getClipGroup();
                i && i.clips.find(e => e.id === n) && e(e => ({
                    ...e,
                    clipGroups: [{
                        ...i,
                        clips: i.clips.map(e => e.id === n ? {
                            ...e,
                            sampleId: r
                        } : e)
                    }]
                }))
            }
            ,
            setTrimInitialStart: t => {
                e(e => ({
                    ...e,
                    trimInitialStart: t
                }))
            }
            ,
            getTrimInitialStart: () => t().trimInitialStart,
            getTrimStart: () => t().getClipGroupValue("trimStart", 0),
            getTrimEnd: () => t().getClipGroupValue("trimEnd", 0),
            getTotalTrimmedDuration: () => {
                var e, n;
                let r = t().getLoadedSample()
                  , i = null !== (e = null == r ? void 0 : r.startTrim) && void 0 !== e ? e : 0
                  , s = null !== (n = null == r ? void 0 : r.stopTrim) && void 0 !== n ? n : 0;
                return t().getTrimStart() + t().getTrimEnd() + i + s
            }
            ,
            setContextMenu: (n, r) => {
                switch (n) {
                case "extend":
                    t().prepareForExtension(null != r ? r : "section-right");
                    break;
                case "regenerate":
                    t().prepareForRegeneration();
                    break;
                case "replace":
                    t().prepareForReplace(),
                    t().setSelectionArea(null);
                    break;
                case null:
                    e(e => ({
                        ...e,
                        contextMenu: n,
                        pendingGenerationSourceSampleId: null,
                        visuallySelectedSampleId: null,
                        selectionArea: null
                    }))
                }
            }
            ,
            setIsDraggingTimelineElement: t => {
                e(e => ({
                    ...e,
                    isDraggingTimelineElement: t
                }))
            }
            ,
            setLyricsMenuOpen: t => {
                e(e => ({
                    ...e,
                    lyricsMenuOpen: t
                }))
            }
            ,
            setHistoryMenuOpen: t => {
                e(e => ({
                    ...e,
                    historyMenuOpen: t
                }))
            }
            ,
            setSongSectionsVisible: t => {
                e(e => ({
                    ...e,
                    showSongSections: t
                }))
            }
            ,
            setContextMenuAdvancedOptions: t => {
                e(e => e.contextMenu ? {
                    ...e,
                    contextMenuAdvancedOptions: t
                } : e)
            }
            ,
            getSelectionArea: () => {
                let e = t().selectionArea;
                if (!e)
                    return null;
                let n = t().getLoadedSampleDuration() - t().getTotalTrimmedDuration();
                return {
                    start: Math.min(n, Math.max(0, e.start - t().getTrimStart())),
                    end: Math.min(n, Math.max(0, e.end - t().getTrimStart()))
                }
            }
            ,
            zoomIn: () => {
                let n = t().zoomMultiplier
                  , r = Math.min(v.aC.max, n * v.KE);
                f(n, r, t().getLoadedSampleDuration()),
                e(e => ({
                    ...e,
                    zoomMultiplier: r
                }))
            }
            ,
            zoomOut: () => {
                let n = t().zoomMultiplier
                  , r = Math.max(v.aC.min, n * v.SY);
                f(n, r, t().getLoadedSampleDuration()),
                e(e => ({
                    ...e,
                    zoomMultiplier: r
                }))
            }
            ,
            zoomBy: n => {
                let r = Math.max(v.aC.min, Math.min(v.aC.max, t().zoomMultiplier * n));
                e(e => ({
                    ...e,
                    zoomMultiplier: r
                }))
            }
            ,
            zoomTo: n => {
                let r = t().lyricsMenuOpen;
                if (!t().getClipGroup())
                    return;
                let i = "extend" === t().contextMenu
                  , s = t().getLoadedSampleDuration()
                  , l = t().playbackContainerWidth
                  , a = t().getTrimStart()
                  , o = s - t().getTrimEnd() - a + (i ? h.GY : 0)
                  , c = (window.innerWidth - 104 - (r ? 340 : 0) - 48) / o * n / (l / v.aF);
                e(e => ({
                    ...e,
                    zoomMultiplier: c
                }))
            }
            ,
            zoomToFit: () => {
                t().zoomTo(1)
            }
            ,
            playbackContainerWidth: 1200,
            setPlaybackContainerWidth: t => {
                e(e => ({
                    ...e,
                    playbackContainerWidth: t
                }))
            }
            ,
            setPlayheadStartPosition: n => {
                var r;
                let i = t().getLoadedSample()
                  , s = null !== (r = null == i ? void 0 : i.startTrim) && void 0 !== r ? r : 0;
                e(e => ({
                    ...e,
                    playheadStartPosition: n + t().getTrimStart() + s
                }))
            }
            ,
            setSelectionArea: n => {
                let r = null === n ? null : {
                    start: n.start + t().getTrimStart(),
                    end: n.end + t().getTrimStart()
                };
                e(e => ({
                    ...e,
                    selectionArea: r,
                    loopBounds: null != r ? r : void 0
                }))
            }
            ,
            lyricsEditor: null,
            setLyricsEditor: t => {
                e(e => ({
                    ...e,
                    lyricsEditor: t
                }))
            }
            ,
            getClipGroup: () => {
                let e = t().clipGroups;
                return 0 === e.length ? null : e[0]
            }
            ,
            getClipGroupValue: (e, n) => {
                let r = t().getClipGroup();
                return r ? r[e] : n
            }
            ,
            trimToSelection: () => {
                let n = t().getSelectionArea();
                if (!n)
                    return;
                let r = t().getTrimStart()
                  , i = t().getLoadedSampleDuration()
                  , s = r + n.start
                  , l = i - (r + n.end)
                  , a = t().getClipGroup();
                a && (e(e => ({
                    ...e,
                    clipGroups: [{
                        ...a,
                        trimStart: s,
                        trimEnd: l
                    }]
                })),
                t().setSelectionArea(null),
                t().setPlayheadStartPosition(0))
            }
            ,
            removeSampleFromSession: (n, r) => {
                let i = t().getClipGroup();
                if (!i)
                    return;
                let s = i.clips.find(e => B(n, e));
                s && (e(e => ({
                    ...e,
                    removedSamplesMap: new Map(e.removedSamplesMap).set(n, {
                        clipId: s.id
                    })
                })),
                (null == r ? void 0 : r.preservePlaybackState) || (t().stop(),
                t().setPlayheadStartPosition(0),
                t().setPlayheadPositionInSeconds(0),
                t().setSelectionArea(null)),
                e( () => ({
                    clipGroups: [function(e, t) {
                        let n = ( () => {
                            let n = e.latestSampleId;
                            if (n !== t)
                                return n;
                            {
                                let n = e.clips.find(e => e.sampleId === t)
                                  , r = null == n ? void 0 : n.takes.filter(e => e.sampleId !== t);
                                if (r && r.length > 0)
                                    return r[0].sampleId;
                                for (let n of e.clips)
                                    if (n.sampleId !== t)
                                        return n.sampleId;
                                return ""
                            }
                        }
                        )()
                          , r = e.clips.map(e => B(t, e) ? {
                            ...e,
                            takes: e.takes.filter(e => e.sampleId !== t),
                            sampleId: n
                        } : e);
                        return {
                            ...e,
                            clips: r,
                            latestSampleId: n
                        }
                    }(i, n)]
                })))
            }
            ,
            undoRemoveSample: (n, r) => {
                let i = t().getClipGroup()
                  , s = t().removedSamplesMap.get(n);
                if (!i || !(null == s ? void 0 : s.clipId))
                    return;
                let l = i.clips.findIndex(e => e.id === s.clipId);
                if (-1 === l)
                    return;
                let a = [...i.clips]
                  , o = a[l]
                  , c = o.takes;
                c.splice(r, 0, {
                    sampleId: n,
                    duration: h.Uf
                }),
                a[l] = {
                    ...o,
                    takes: c
                },
                e(e => {
                    let t = new Map(e.removedSamplesMap);
                    return t.delete(n),
                    {
                        ...e,
                        clipGroups: [{
                            ...i,
                            clips: a,
                            latestSampleId: n
                        }],
                        removedSamplesMap: t
                    }
                }
                )
            }
            ,
            getPendingGenerationType: () => t().pendingGenerationType,
            setPendingGenerationType: t => {
                e(e => ({
                    ...e,
                    pendingGenerationType: t
                }))
            }
            ,
            setTrimStart: n => {
                let r = t().getClipGroup();
                r && e(e => ({
                    ...e,
                    clipGroups: [{
                        ...r,
                        trimStart: n
                    }]
                }))
            }
            ,
            setTrimEnd: n => {
                let r = t().getClipGroup();
                r && e(e => ({
                    ...e,
                    clipGroups: [{
                        ...r,
                        trimEnd: n
                    }]
                }))
            }
            ,
            getAllSongIds: () => t().clipGroups.flatMap(e => e.clips.flatMap(e => e.takes).flatMap(e => t().getSample(e.sampleId)).flatMap(e => {
                if ((null == e ? void 0 : e.type) === "song") {
                    var t;
                    return [(0,
                    x.N)(e.song.id + (0,
                    x.N)(null !== (t = e.song.song_path) && void 0 !== t ? t : ""))]
                }
                return []
            }
            )),
            toggleShowSongSections: () => {
                e(e => ({
                    ...e,
                    showSongSections: !e.showSongSections
                }))
            }
            ,
            populateWaveformDataForSample: async e => {
                await tx(e) && t().addSampleWithCachedWaveformData(e.id)
            }
        }), {
            name: "AudioSessionStore",
            enabled: !1
        })))
          , tj = () => {
            let e = tw(e => e.zoomIn)
              , t = tw(e => e.zoomOut)
              , n = tw(e => e.zoomToFit)
              , r = tw(e => e.resetPlayhead)
              , i = tw(e => e.togglePlayPause)
              , s = tw(e => e.toggleGlobalMute)
              , l = eP()
              , a = eG()
              , c = tw(e => e.undo)
              , d = tw(e => e.redo)
              , p = tw(e => e.setContextMenu)
              , m = tw(e => e.setLyricsMenuOpen)
              , g = tw(e => e.contextMenu)
              , f = tw(e => e.setHistoryMenuOpen)
              , h = tw(e => e.historyMenuOpen)
              , x = tw(e => e.lyricsMenuOpen)
              , v = tw(e => e.setSongSectionsVisible)
              , y = tw(e => e.showSongSections)
              , S = (0,
            o.useCallback)(e => {
                g === e ? p(null) : p(e)
            }
            , [g, p]);
            (0,
            o.useEffect)( () => {
                let o = o => {
                    if (function(e) {
                        if (!(e.target instanceof HTMLElement))
                            return !1;
                        let t = e.target.tagName.toLowerCase()
                          , n = e.target.isContentEditable;
                        return "input" === t || "textarea" === t || n
                    }(o) || o.repeat)
                        return;
                    if ("z" === o.key) {
                        if (!u.t4.isModifierKeyPressed(o))
                            return;
                        o.shiftKey ? a && d() : l && c(),
                        o.preventDefault();
                        return
                    }
                    if (u.t4.isModifierKeyPressed(o))
                        return;
                    let g = !0;
                    switch (o.key) {
                    case " ":
                        i();
                        break;
                    case "=":
                        e();
                        break;
                    case "-":
                        t();
                        break;
                    case "0":
                        n();
                        break;
                    case "Enter":
                        o.shiftKey ? r() : g = !1;
                        break;
                    case "r":
                        S("replace");
                        break;
                    case "t":
                        S("regenerate");
                        break;
                    case "e":
                        S("extend");
                        break;
                    case "l":
                        m(!x);
                        break;
                    case "h":
                        f(!h);
                        break;
                    case "s":
                        v(!y);
                        break;
                    case "m":
                        s();
                        break;
                    case "Escape":
                        p(null),
                        m(!1),
                        f(!1);
                        break;
                    default:
                        g = !1
                    }
                    g && o.preventDefault()
                }
                ;
                return document.addEventListener("keydown", o, {
                    capture: !0
                }),
                () => {
                    document.removeEventListener("keydown", o, {
                        capture: !0
                    })
                }
            }
            , [e, t, r, i, s, n, l, a, c, d, x, h, m, f, S, g, p, v, y])
        }
        ;
        var tk = n(65549)
          , tM = n(7583)
          , tN = e => (0,
        a.jsx)("svg", {
            width: "21",
            height: "20",
            viewBox: "0 0 21 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0,
            a.jsx)("path", {
                d: "M5.74993 15.0007L4.08326 15.0007L4.08326 5.00068L5.74993 5.00068L5.74993 15.0007ZM7.4166 10.834L14.5716 10.834L10.9941 14.4115L12.1724 15.5898L17.7616 10.0007L12.1724 4.41151L10.9941 5.58984L14.5716 9.16734L7.4166 9.16734L7.4166 10.834Z",
                fill: "currentColor"
            })
        });
        function tC(e) {
            let {direction: t} = e
              , n = tw(e => e.setContextMenu)
              , r = tw(e => e.setVisuallySelectedSampleId)
              , i = eb();
            return (0,
            a.jsx)("button", {
                type: "button",
                onClick: e => {
                    e.stopPropagation(),
                    n("extend", "left" === t ? "section-left" : "section-right"),
                    r(null)
                }
                ,
                onMouseDown: e => {
                    e.stopPropagation()
                }
                ,
                className: (0,
                eQ.cn)("flex size-9 items-center justify-center rounded-full bg-session-gray-8 text-session-text transition-colors duration-150", i ? "opacity-50" : "cursor-pointer hover:bg-session-gray-6/50"),
                disabled: i,
                children: "left" === t ? (0,
                a.jsx)(tN, {
                    className: "rotate-180"
                }) : (0,
                a.jsx)(tN, {})
            })
        }
        let tI = e => {
            let {digit: t, previousDigit: n, size: r} = e
              , i = t !== n;
            return (0,
            a.jsx)("div", {
                className: (0,
                eQ.cn)("relative flex h-16 w-4 items-center justify-center overflow-hidden", "small" === r ? "w-2" : "w-3"),
                children: i ? (0,
                a.jsx)(tM.M, {
                    mode: "popLayout",
                    children: (0,
                    a.jsx)(tk.E.span, {
                        initial: {
                            y: 8,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        exit: {
                            y: -8,
                            opacity: 0
                        },
                        transition: {
                            duration: .2,
                            ease: "easeInOut"
                        },
                        className: "absolute",
                        children: t
                    }, t)
                }) : (0,
                a.jsx)(tk.E.span, {
                    className: "absolute",
                    children: t
                })
            })
        }
        ;
        var tT = e => {
            var t;
            let {showCompletionCount: n, size: r="large", initialValue: i=0, targetValue: s=100} = e
              , [l,c] = (0,
            o.useState)([])
              , [d,u] = (0,
            o.useState)([])
              , [p,m] = (0,
            o.useState)(35)
              , g = (0,
            E.ad)()
              , f = null !== (t = (0,
            E.Ax)()) && void 0 !== t && t
              , {numCompleted: h, total: x} = eX();
            (0,
            o.useEffect)( () => {
                "v1" === g ? m(65) : f ? m(35) : m(60)
            }
            , [g, f]),
            (0,
            o.useEffect)( () => {
                let e, t;
                let n = i
                  , r = p * (1 - i / s)
                  , l = a => {
                    e || (e = a);
                    let o = Math.min((a - e) / (1e3 * r), 1)
                      , d = Math.round(i + (s - i) * (1 === o ? 1 : o * (2 - o)));
                    d !== n && (u(v(d)),
                    c(v(n)),
                    n = d),
                    o < 1 && (t = requestAnimationFrame(l))
                }
                ;
                return t = requestAnimationFrame(l),
                () => {
                    cancelAnimationFrame(t)
                }
            }
            , [i, s, p]);
            let v = e => 0 === e ? ["0"] : e.toString().split("")
              , y = Math.max(d.length, l.length)
              , S = d.slice().reverse()
              , b = l.slice().reverse()
              , w = []
              , j = [];
            for (let e = 0; e < y; e++)
                w.unshift(S[e] || ""),
                j.unshift(b[e] || "");
            return (0,
            a.jsx)(a.Fragment, {
                children: (0,
                a.jsxs)("div", {
                    className: (0,
                    eQ.cn)("flex  text-brand-accent", "small" === r ? "text-xs font-medium" : "text-lg font-bold"),
                    children: [n && (0,
                    a.jsxs)("div", {
                        className: "absolute right-4 top-3 select-none text-xs",
                        children: [h, " / ", x]
                    }), w.map( (e, t) => "" !== e && (0,
                    a.jsx)(tI, {
                        size: r,
                        digit: e,
                        previousDigit: j[t] || ""
                    })), (0,
                    a.jsx)("span", {
                        className: (0,
                        eQ.cn)("flex h-16 w-5 items-center justify-center overflow-hidden", "small" === r ? "w-3" : "w-4"),
                        children: "%"
                    })]
                })
            })
        }
          , tE = n(75440)
          , tL = n(54883)
          , tR = n(82889)
          , tP = e => {
            let {children: t, radius: n=16, spread: r=14, direction: i, status: s, className: l} = e
              , c = (0,
            tE.c)("left" === i ? 0 : Math.PI)
              , d = (0,
            tL.H)(c, e => "".concat(50 - 50 * Math.cos(e), "% ").concat(50 - 50 * Math.sin(e), "%"));
            return (0,
            o.useEffect)( () => {
                let e = "left" === i ? 1 : -1;
                if ("generating" === s)
                    return (0,
                    tR.j)(c, c.get() - 2 * Math.PI * e, {
                        duration: 3,
                        ease: "linear",
                        repeat: 1 / 0
                    }).stop;
                c.set("left" === i ? 0 : Math.PI)
            }
            , [c, s, i]),
            (0,
            a.jsx)(tk.E.div, {
                className: (0,
                eQ.cn)("flex size-full cursor-auto flex-col self-center p-0.5", l),
                style: {
                    borderRadius: "".concat(n, "px"),
                    background: "hidden" === s ? "transparent" : "radial-gradient(ellipse at 50% 50%, rgba(227, 11, 94, 1) ".concat(r, "%, rgba(227, 11, 94, 0.2) ").concat(4 * r, "%)"),
                    backgroundSize: "200% 200%",
                    backgroundPosition: d
                },
                onClick: e => {
                    e.stopPropagation()
                }
                ,
                role: "button",
                tabIndex: 0,
                "aria-label": "".concat(i, " extension area"),
                onKeyDown: e => {
                    ("Enter" === e.key || " " === e.key) && (e.preventDefault(),
                    e.stopPropagation())
                }
                ,
                children: (0,
                a.jsx)("div", {
                    className: "flex size-full flex-col overflow-hidden bg-black",
                    style: {
                        borderRadius: "".concat(n - 2, "px")
                    },
                    children: (0,
                    a.jsx)("div", {
                        className: "relative flex size-full flex-col items-center justify-center bg-brand-accent/10",
                        children: t
                    })
                })
            })
        }
          , tG = e => {
            let {direction: t} = e
              , n = ef(t)
              , r = ej()
              , i = tw(e => e.contextMenu)
              , s = eI()
              , l = null === eM() ? "idle" : "generating"
              , c = "extend" === i && "pending-user-input" === n || !r && "generating" === n
              , [d,u] = (0,
            o.useState)(!1);
            return (0,
            o.useEffect)( () => {
                u(!0)
            }
            , [c]),
            (0,
            a.jsx)("div", {
                className: (0,
                eQ.cn)("relative flex h-[220px] min-w-[68px] items-center justify-center transition-all ease-in-out"),
                style: {
                    transitionDuration: "".concat(v.NS, "ms")
                },
                children: (0,
                a.jsxs)(tM.M, {
                    children: [c && (0,
                    a.jsx)(tk.E.div, {
                        className: (0,
                        eQ.cn)("z-10 flex"),
                        variants: {
                            initial: {
                                width: "36px",
                                height: "36px",
                                opacity: 0
                            },
                            animate: {
                                width: "".concat(s, "px"),
                                height: "220px",
                                opacity: 1,
                                transition: {
                                    width: d ? {
                                        duration: .3,
                                        ease: "easeInOut"
                                    } : {
                                        duration: 0
                                    },
                                    height: {
                                        duration: .3,
                                        ease: "easeInOut"
                                    },
                                    opacity: {
                                        duration: .2,
                                        ease: "easeInOut"
                                    }
                                }
                            },
                            exit: {
                                width: "36px",
                                height: "36px",
                                opacity: 0,
                                transition: {
                                    width: {
                                        duration: .3,
                                        ease: "easeInOut"
                                    },
                                    height: {
                                        duration: .3,
                                        ease: "easeInOut"
                                    },
                                    opacity: {
                                        duration: .2,
                                        ease: "easeInOut",
                                        delay: .1
                                    }
                                }
                            }
                        },
                        onAnimationComplete: () => {
                            d && u(!1)
                        }
                        ,
                        initial: "initial",
                        animate: "animate",
                        exit: "exit",
                        children: (0,
                        a.jsx)(tP, {
                            direction: t,
                            status: l,
                            children: "generating" === l ? (0,
                            a.jsx)(tT, {
                                showCompletionCount: !0
                            }) : (0,
                            a.jsx)(a.Fragment, {
                                children: "left" === t ? (0,
                                a.jsx)(tN, {
                                    className: "rotate-180 text-brand-accent"
                                }) : (0,
                                a.jsx)(tN, {
                                    className: "text-brand-accent"
                                })
                            })
                        })
                    }), (0,
                    a.jsx)(tk.E.div, {
                        className: "absolute flex size-full items-center justify-center",
                        children: (0,
                        a.jsx)(tC, {
                            direction: t
                        })
                    }, "clip-extension-button")]
                })
            })
        }
          , t_ = n(75721);
        (s = l || (l = {}))[s.HIDDEN = 0] = "HIDDEN",
        s[s.XS = 1] = "XS",
        s[s.SM = 2] = "SM",
        s[s.MD = 3] = "MD",
        s[s.LG = 4] = "LG";
        let tA = {
            0: 0,
            1: 8,
            2: 44,
            3: 66,
            4: 96
        };
        var tD = n(34965)
          , tz = n(38983)
          , tF = n(23607)
          , tH = n(61990)
          , tZ = n(85653)
          , tV = n(53362);
        function tO(e) {
            let {clipId: t} = e
              , n = eN(t);
            return (0,
            a.jsx)(a.Fragment, {
                children: n.map(e => (0,
                a.jsx)(tB, {
                    progress: e
                }))
            })
        }
        function tB(e) {
            let {progress: t} = e;
            return (0,
            a.jsx)("div", {
                className: "relative flex h-[38px] w-full items-center overflow-hidden",
                children: (0,
                a.jsx)(tP, {
                    direction: "right",
                    status: "generating",
                    radius: 19,
                    spread: 12,
                    children: (0,
                    a.jsx)("div", {
                        className: "flex size-full items-center px-4",
                        children: (0,
                        a.jsx)(tT, {
                            size: "small",
                            showCompletionCount: !1,
                            initialValue: Math.round(100 * t),
                            targetValue: 100
                        })
                    })
                })
            })
        }
        var tU = e => {
            let {clipId: t, availableTakes: n, clipRelativeStartPosition: r, loadedSample: i, setSelectedTakeIndex: s, playbackContainerRef: l, scrollContainerRef: c} = e
              , u = (0,
            tF.J)()
              , [p,m] = (0,
            o.useState)(9)
              , [g,f] = (0,
            o.useState)([])
              , h = eb()
              , x = tw(e => e.visuallySelectedSampleId)
              , v = (0,
            o.useRef)(null);
            (0,
            o.useEffect)( () => {
                let e = n.findIndex(e => e.id === i.id);
                -1 !== e && s(e)
            }
            , [n, i, s]);
            let y = n.length > p;
            (0,
            o.useLayoutEffect)( () => {
                let e = c.current
                  , t = l.current;
                if (!e || !t || !v.current)
                    return;
                let n = v.current
                  , r = () => {
                    n.style.top = "",
                    n.style.left = "",
                    n.style.right = "",
                    n.style.transform = "";
                    let t = n.getBoundingClientRect()
                      , r = t.top
                      , i = t.height
                      , s = e.getBoundingClientRect();
                    r < 60 ? n.style.top = "".concat(i + 65, "px") : n.style.top = "2px";
                    let l = 0;
                    t.left < s.left ? l = s.left - t.left : t.right > s.right && (l = s.right - t.right);
                    let a = new DOMMatrix(getComputedStyle(n).transform).f;
                    n.style.transform = "translateX(".concat(l, "px) translateY(").concat(a, "px)")
                }
                ;
                r();
                let i = new ResizeObserver(e => {
                    for (let n of e)
                        n.target === t && r()
                }
                );
                return i.observe(t),
                e.addEventListener("scroll", r, {
                    passive: !0
                }),
                () => {
                    i.disconnect(),
                    e.removeEventListener("scroll", r)
                }
            }
            , [v, y, l, c]);
            let S = tw(e => e.setClipSample)
              , b = tw(e => e.loadTake)
              , w = tw(e => e.setPlayheadStartPosition)
              , j = tw(e => e.playFromStartPoint)
              , k = tw(e => e.setActiveTakesMenu)
              , M = (0,
            C.u4)(e => e.isTrackLikedByUser)
              , N = (0,
            C.u4)(e => e.isTrackDislikedByUser)
              , I = tw(e => e.prepareWaveformDataForSong)
              , T = eN(t)
              , {likeSongMutation: E, removeLikeSongMutation: L, dislikeSongMutation: P, removeDislikeSongMutation: G} = (0,
            X.eg)(R.US)
              , _ = eA()
              , A = tw(e => e.removeSampleFromSession)
              , D = tw(e => e.visuallySelectedSampleId)
              , z = tw(e => e.setVisuallySelectedSampleId)
              , F = (e, n) => {
                I(e.song.id).then( () => {
                    b(e.id),
                    s(e.initialPosition),
                    t && (S(t, e.id),
                    n && (w(r),
                    j()),
                    D && z(e.id))
                }
                )
            }
              , H = tw(e => e.undoRemoveSample)
              , Z = (e, t) => {
                if (0 !== e.length) {
                    if (t < e.length)
                        F(e[t]);
                    else {
                        let t = e.length - 1;
                        F(e[t])
                    }
                }
            }
              , V = e => {
                1 === e && k(null)
            }
              , O = (e, t) => ({
                label: "Undo",
                onClick: () => {
                    (async () => {
                        try {
                            H(e.id, e.initialPosition),
                            await G.mutateAsync(e.song),
                            _(e.id, {
                                disliked: !1
                            });
                            let r = n.findIndex(t => t.id === e.id);
                            -1 !== r && (F(e),
                            k(null != t ? t : null))
                        } catch (e) {
                            d.Am.error("Error restoring take")
                        }
                    }
                    )()
                }
            })
              , [B,U] = (0,
            o.useState)({})
              , W = async e => {
                let t = !M(e.song);
                try {
                    t ? (U(t => ({
                        ...t,
                        [e.song.id]: !0
                    })),
                    await E.mutateAsync(e.song),
                    _(e.id, {
                        liked: !0
                    })) : (U(t => ({
                        ...t,
                        [e.song.id]: !1
                    })),
                    await L.mutateAsync(e.song),
                    _(e.id, {
                        liked: !1
                    }))
                } catch (e) {
                    d.Am.error("Failed to update like status")
                }
            }
              , q = async e => {
                f(t => [...t, e.id]);
                try {
                    M(e.song) && U(t => ({
                        ...t,
                        [e.song.id]: !1
                    })),
                    await P.mutateAsync(e.song),
                    _(e.id, {
                        disliked: !0
                    }),
                    A(e.id, {
                        preservePlaybackState: !0
                    });
                    let r = n.filter(t => t.id !== e.id);
                    x === e.id && Z(r, e.initialPosition),
                    V(r.length),
                    d.Am.success("Take archived successfully", {
                        action: O(e, t)
                    })
                } catch (e) {
                    console.error(e),
                    d.Am.error("Error archiving take")
                } finally {
                    f(t => t.filter(t => t !== e.id))
                }
            }
              , K = (0,
            o.useMemo)( () => [...n].sort( (e, t) => {
                var n, r;
                let i = null !== (n = B[e.song.id]) && void 0 !== n ? n : M(e.song);
                return i === (null !== (r = B[t.song.id]) && void 0 !== r ? r : M(t.song)) ? 0 : i ? -1 : 1
            }
            ), [n, B, M])
              , Q = (0,
            o.useMemo)( () => Math.min(Math.min(K.length + T.length, p), 3), [K.length, p, T])
              , Y = (0,
            o.useMemo)( () => {
                switch (Q) {
                case 1:
                    return "grid-cols-1";
                case 2:
                    return "grid-cols-2";
                default:
                    return "grid-cols-3"
                }
            }
            , [Q])
              , J = (0,
            o.useMemo)( () => 1 === Q ? "w-[144px]" : 2 === Q ? "w-[296px]" : "w-[450px]", [Q]);
            return (0,
            a.jsxs)(tk.E.div, {
                ref: v,
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: u ? 0 : .15
                },
                className: (0,
                eQ.cn)("pointer-events-auto absolute left-0 top-[2px] z-10 translate-y-[-115%] rounded-2xl bg-session-gray-8 p-3", g.length > 0 && "pointer-events-none"),
                children: [(0,
                a.jsx)("div", {
                    className: "minimal-scrollbar max-h-36 overflow-y-auto  border-session-border-light shadow-lg",
                    children: (0,
                    a.jsxs)("div", {
                        className: (0,
                        eQ.cn)("grid h-full gap-2", J, Y),
                        children: [K.slice(0, p).map(e => {
                            let t = e.id === i.id;
                            return (0,
                            a.jsx)("button", {
                                onClick: t => {
                                    t.stopPropagation(),
                                    F(e),
                                    t.currentTarget.blur()
                                }
                                ,
                                onMouseEnter: () => {
                                    I(e.song.id)
                                }
                                ,
                                "aria-label": "Select take ".concat(e.name),
                                className: (0,
                                eQ.cn)("group flex h-[38px] w-[144px] items-center justify-between rounded-full bg-black p-4 hover:bg-session-gray-6", t && "bg-session-gray-5 hover:bg-session-gray-5", !t && "hover:text-[#FDFDFD]", g.includes(e.id) && "animate-pulse-subtle"),
                                children: (0,
                                a.jsxs)("div", {
                                    className: "flex w-full items-center justify-between gap-2",
                                    children: [(0,
                                    a.jsxs)("button", {
                                        className: "cursor-sound flex items-center gap-2 text-black",
                                        onClick: t => {
                                            t.stopPropagation(),
                                            F(e, !0),
                                            t.currentTarget.blur()
                                        }
                                        ,
                                        "aria-label": "Play take from start",
                                        children: [(0,
                                        a.jsx)(tH.Z, {
                                            size: 12,
                                            fill: t ? "black" : "#898989",
                                            className: (0,
                                            eQ.cn)("transition-colors duration-150 hover:scale-110", t ? "" : "group-hover:fill-[#FDFDFD]")
                                        }), (0,
                                        a.jsx)("span", {
                                            title: e.name,
                                            className: (0,
                                            eQ.cn)("text-sm uppercase text-[#898989] transition-colors duration-150", t && "text-black", !t && "group-hover:text-[#FDFDFD]"),
                                            children: e.initialPosition + 1
                                        })]
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: (0,
                                        eQ.cn)("flex items-center gap-2"),
                                        children: [(0,
                                        a.jsx)(tk.E.button, {
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: .98
                                            },
                                            className: (0,
                                            eQ.cn)("group/like text-session-text group-hover:text-session-text-light", t && "text-black", g.includes(e.id) && "pointer-events-none opacity-50"),
                                            onClick: t => {
                                                t.stopPropagation(),
                                                W(e)
                                            }
                                            ,
                                            "aria-label": "Like take",
                                            children: (0,
                                            a.jsx)(tZ.Z, {
                                                size: 12,
                                                fill: M(e.song) ? "currentColor" : "transparent",
                                                stroke: "currentColor",
                                                className: "group-hover/like:fill-current"
                                            })
                                        }), (0,
                                        a.jsx)(tk.E.button, {
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: .98
                                            },
                                            className: (0,
                                            eQ.cn)("group/like text-session-text group-hover:text-session-text-light", t && "text-black", (g.includes(e.id) || h) && "pointer-events-none opacity-50", g.includes(e.id) && "animate-pulse"),
                                            onClick: t => {
                                                t.stopPropagation(),
                                                q(e)
                                            }
                                            ,
                                            "aria-label": "Dislike take",
                                            children: (0,
                                            a.jsx)(tV.Z, {
                                                size: 12,
                                                fill: N(e.song) ? "currentColor" : "transparent",
                                                stroke: "currentColor",
                                                className: "group-hover/like:fill-current"
                                            })
                                        })]
                                    })]
                                })
                            }, e.id)
                        }
                        ), (0,
                        a.jsx)(tO, {
                            clipId: t
                        })]
                    })
                }), y && (0,
                a.jsx)("div", {
                    className: "flex items-center justify-center pt-2",
                    children: (0,
                    a.jsxs)("button", {
                        className: "text-center text-[10px] uppercase text-[#898989]",
                        onClick: e => {
                            e.stopPropagation(),
                            m(n.length)
                        }
                        ,
                        children: ["View all (", n.length, ")"]
                    })
                })]
            })
        }
        ;
        function tW(e) {
            let {loadedSample: t, clipId: n, clipRelativeStartPosition: r=0, breakpoint: i=l.LG, playbackContainerRef: s, scrollContainerRef: c, isGenerating: d} = e
              , [u,p] = (0,
            o.useState)(0)
              , m = ec(n)
              , g = tw(e => e.prepareWaveformDataForClip)
              , [f,h] = (0,
            o.useState)(!1)
              , x = tw(e => e.activeTakesMenuId)
              , v = tw(e => e.setActiveTakesMenu)
              , y = x === n
              , S = () => {
                n && (y ? v(null) : v(n))
            }
              , b = async () => {
                n && !f && (h(!0),
                await g(n),
                h(!1))
            }
              , w = i >= l.SM
              , j = i >= l.MD
              , k = i >= l.LG;
            if ((0,
            o.useEffect)( () => {
                if (!t)
                    return;
                let e = m.findIndex(e => e.song.id === t.id);
                -1 !== e && p(e)
            }
            , [m, t]),
            0 === m.length || !t)
                return null;
            let M = m.length > 1
              , N = (0,
            a.jsx)("div", {
                className: (0,
                eQ.cn)("pointer-events-auto flex h-[22px] shrink-0 items-center justify-center rounded-xl bg-session-black text-session-gray-5", w ? "border border-session-gray-5" : "translate-x-px", d && "border-none", y && "bg-session-gray-7"),
                children: (0,
                a.jsx)(a.Fragment, {
                    children: M ? (0,
                    a.jsxs)("button", {
                        onClick: async e => {
                            e.stopPropagation(),
                            await b(),
                            S()
                        }
                        ,
                        onMouseEnter: async () => {
                            await b()
                        }
                        ,
                        className: (0,
                        eQ.cn)("flex h-8 items-center justify-center gap-1.5", w ? "px-3.5" : "px-1"),
                        children: [j && (0,
                        a.jsx)("span", {
                            className: (0,
                            eQ.cn)("whitespace-nowrap text-[10px] uppercase"),
                            children: k ? "Take ".concat(u + 1) : "".concat(u + 1)
                        }), y ? (0,
                        a.jsx)(tD.Z, {
                            size: 12,
                            color: "currentColor"
                        }) : (0,
                        a.jsx)(tz.Z, {
                            size: 12,
                            color: "currentColor"
                        })]
                    }) : (0,
                    a.jsx)("div", {
                        className: (0,
                        eQ.cn)("flex h-8 items-center justify-center gap-1 px-2"),
                        children: (0,
                        a.jsx)("span", {
                            className: (0,
                            eQ.cn)("whitespace-nowrap text-[10px] uppercase"),
                            children: k ? "Take ".concat(u + 1) : "".concat(u + 1)
                        })
                    })
                })
            });
            return (0,
            a.jsxs)(a.Fragment, {
                children: [d ? (0,
                a.jsx)(tP, {
                    direction: "right",
                    status: "generating",
                    className: "w-min -translate-x-px -translate-y-0.5",
                    children: N
                }) : N, (0,
                a.jsx)(tM.M, {
                    children: y && (0,
                    a.jsx)(tU, {
                        clipId: n,
                        availableTakes: m,
                        clipRelativeStartPosition: r,
                        loadedSample: t,
                        setSelectedTakeIndex: p,
                        playbackContainerRef: s,
                        scrollContainerRef: c
                    })
                })]
            })
        }
        function tq(e) {
            let t, {breakpoint: n, clipSelected: r, clipPos: i, handleSelectClip: s, playbackContainerRef: c, scrollContainerRef: d, clipCount: u} = e, p = ey(i.clip), m = eV(), g = eo(), [f,h] = (0,
            o.useState)(!1), x = !g && i.clip.id === m, v = eT(), y = n >= l.XS;
            return i.width <= 0 ? null : (0,
            a.jsx)("div", {
                className: (0,
                eQ.cn)("pointer-events-none relative h-[220px] rounded-2xl bg-session-black", r && "border-session-gray-6"),
                style: {
                    width: i.width
                },
                children: x && (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)("div", {
                        className: (0,
                        eQ.cn)("absolute left-0 top-0 z-20 h-full w-full rounded-2xl border border-transparent transition-colors duration-200 ", f && "border-session-gray-5 ", r && "border-2 border-brand-accent bg-brand-accent/10")
                    }), (0,
                    a.jsxs)("div", {
                        className: (0,
                        eQ.cn)("pointer-events-auto relative flex h-10 items-center text-xs font-medium text-session-gray-5", "z-20 border-session-gray-4", r && "pointer-events-none"),
                        children: [y && (0,
                        a.jsx)("div", {
                            className: (0,
                            eQ.cn)("pointer-events-none z-10 flex h-full overflow-hidden px-3.5 pt-3.5 text-xs font-medium text-session-gray-5"),
                            style: {
                                width: i.width
                            },
                            children: u > 1 && (0,
                            a.jsx)(tW, {
                                loadedSample: p,
                                clipId: i.clip.id,
                                clipRelativeStartPosition: i.relativeStart,
                                breakpoint: n,
                                playbackContainerRef: c,
                                scrollContainerRef: d,
                                isGenerating: (t = i.clip.id,
                                !!v && v === t)
                            })
                        }, i.clip.id), (0,
                        a.jsx)("div", {
                            tabIndex: 0,
                            role: "button",
                            className: (0,
                            eQ.cn)("pointer-events-auto absolute inset-0 flex items-center rounded-t-2xl text-xs font-medium text-session-gray-5"),
                            style: {
                                width: i.width - 1
                            },
                            onClick: e => {
                                e.stopPropagation(),
                                s(i.clip.sampleId)
                            }
                            ,
                            onMouseOver: () => {
                                h(!0)
                            }
                            ,
                            onFocus: () => {
                                h(!0)
                            }
                            ,
                            onMouseLeave: () => {
                                h(!1)
                            }
                            ,
                            onKeyDown: e => {
                                "Enter" === e.key && s(i.clip.sampleId)
                            }
                        })]
                    })]
                })
            })
        }
        function tK(e) {
            let {clipPositions: t, pixelsPerSecond: n, playbackContainerRef: r, scrollContainerRef: i} = e
              , s = tw(e => e.setContextMenu)
              , l = tw(e => e.setSelectedClipPosition)
              , c = tw(e => e.setActiveTakesMenu)
              , d = tw(e => e.setVisuallySelectedSampleId)
              , u = tw(e => e.visuallySelectedSampleId)
              , p = e => {
                e && d(e),
                c(null),
                s("regenerate")
            }
              , m = em();
            return (0,
            o.useEffect)( () => {
                for (let e of t)
                    if (e.clip.sampleId === u) {
                        l({
                            start: e.startPosition / n,
                            duration: (e.width + m * n) / n
                        });
                        break
                    }
            }
            , [u, t, n, l, m]),
            (0,
            a.jsx)("div", {
                className: "relative flex w-full",
                children: t.map(e => {
                    var n;
                    let s = e.clip.sampleId === u
                      , l = (n = e.width) >= tA[4] ? 4 : n >= tA[3] ? 3 : n >= tA[2] ? 2 : n >= tA[1] ? 1 : 0;
                    return (0,
                    a.jsx)(tq, {
                        clipPos: e,
                        clipSelected: s,
                        breakpoint: l,
                        handleSelectClip: p,
                        playbackContainerRef: r,
                        scrollContainerRef: i,
                        clipCount: t.length
                    })
                }
                )
            })
        }
        function tX(e) {
            let {svgPaths: t, clip: n} = e
              , r = eC()
              , i = tw(e => "playing" === e.playbackState)
              , s = (0,
            o.useRef)(null)
              , l = em()
              , c = eg()
              , d = i ? 154 : 136
              , u = tw(e => e.getPlayheadPositionInSeconds)
              , p = (0,
            o.useRef)(null);
            (0,
            o.useEffect)( () => {
                if (!i) {
                    p.current && cancelAnimationFrame(p.current);
                    return
                }
                let e = () => {
                    if (s.current) {
                        let e = n.originalDuration - l - c
                          , t = Math.max(0, u());
                        s.current.style.clipPath = "inset(0 ".concat((1 - t / e) * 100, "% 0 0)")
                    }
                    p.current = requestAnimationFrame(e)
                }
                ;
                return e(),
                () => {
                    p.current && cancelAnimationFrame(p.current)
                }
            }
            , [u, r, i, n.originalDuration, l, c]);
            let m = (0,
            e6.s)(t, r)
              , g = n.originalDuration
              , f = n.audioStartOffset / n.originalDuration * g
              , h = (n.audioEndOffset - n.audioStartOffset) / n.originalDuration * g
              , x = d / 154;
            return (0,
            a.jsxs)("div", {
                className: "pointer-events-none inset-0 z-0 flex size-full flex-col items-center justify-center",
                children: [(0,
                a.jsx)("svg", {
                    width: "0",
                    height: "0",
                    style: {
                        position: "absolute",
                        visibility: "hidden"
                    },
                    children: (0,
                    a.jsx)("defs", {
                        children: (0,
                        a.jsx)("path", {
                            id: "waveform",
                            d: m,
                            strokeWidth: "1",
                            vectorEffect: "non-scaling-stroke"
                        })
                    })
                }), (0,
                a.jsxs)("div", {
                    className: "relative w-full",
                    style: {
                        height: "".concat(154, "px")
                    },
                    children: [(0,
                    a.jsxs)("svg", {
                        width: "100%",
                        height: "100%",
                        viewBox: "".concat(f, " 0 ").concat(h, " ").concat(154),
                        preserveAspectRatio: "none",
                        className: "w-full ease-in-out",
                        style: {
                            transform: "scaleY(".concat(x, ")"),
                            transformOrigin: "center",
                            transition: "transform ".concat(.3, "s ease-in-out")
                        },
                        children: [(0,
                        a.jsx)("defs", {
                            children: (0,
                            a.jsxs)("linearGradient", {
                                id: "waveGradient",
                                x1: "0%",
                                y1: "0%",
                                x2: "0",
                                y2: "100%",
                                children: [(0,
                                a.jsx)("stop", {
                                    offset: "25%",
                                    stopColor: "#747474"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "100%",
                                    stopColor: "#BF4364"
                                })]
                            })
                        }), (0,
                        a.jsx)("defs", {
                            children: (0,
                            a.jsxs)("linearGradient", {
                                id: "waveGradientSelected",
                                x1: "0%",
                                y1: "0%",
                                x2: "0",
                                y2: "100%",
                                children: [(0,
                                a.jsx)("stop", {
                                    offset: "35%",
                                    stopColor: "#232323"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "60%",
                                    stopColor: "#2b2426"
                                }), (0,
                                a.jsx)("stop", {
                                    offset: "100%",
                                    stopColor: "#40262c"
                                })]
                            })
                        }), (0,
                        a.jsx)("use", {
                            href: "#waveform",
                            stroke: "url(#waveGradient)",
                            style: {
                                fill: "url(#waveGradient)",
                                opacity: 1
                            }
                        }), (0,
                        a.jsx)("use", {
                            href: "#waveform",
                            stroke: "rgb(var(--session-gray-6))",
                            style: {
                                fill: "rgb(var(--session-black))",
                                opacity: i ? 1 : 0,
                                transition: "opacity ".concat(.15, "s ease-in-out")
                            }
                        })]
                    }), (0,
                    a.jsx)("div", {
                        ref: s,
                        className: "absolute left-0 top-0 w-full overflow-hidden ease-in-out",
                        children: (0,
                        a.jsx)("svg", {
                            viewBox: "".concat(f, " 0 ").concat(h, " ").concat(154),
                            preserveAspectRatio: "none",
                            className: "w-full",
                            style: {
                                height: "".concat(154, "px"),
                                transform: "scaleY(".concat(x, ")"),
                                transformOrigin: "center",
                                transition: "transform ".concat(.3, "s ease-in-out")
                            },
                            children: (0,
                            a.jsx)("use", {
                                href: "#waveform",
                                fill: "url(#waveGradient)",
                                stroke: "url(#waveGradient)"
                            })
                        })
                    })]
                })]
            })
        }
        var tQ = e => {
            let {lastInpaintRegions: t, trimWidth: n} = e
              , r = eC()
              , i = em()
              , s = (0,
            o.useMemo)( () => {
                if (0 === t.length)
                    return {
                        start: 0,
                        width: 0
                    };
                let {minStart: e, maxEnd: s} = t.reduce( (e, t) => ({
                    minStart: Math.min(e.minStart, t.start),
                    maxEnd: Math.max(e.maxEnd, t.end)
                }), {
                    minStart: 1 / 0,
                    maxEnd: -1 / 0
                });
                if (e < i)
                    return {
                        start: 0,
                        width: Math.min((s - i) * r, n)
                    };
                {
                    let t = (e - i) * r;
                    return {
                        start: t,
                        width: Math.min((s - e) * r, n - t)
                    }
                }
            }
            , [t, r, i, n]);
            return (0,
            a.jsx)("div", {
                className: "pointer-events-none absolute inset-y-0 z-[15]",
                style: {
                    left: "".concat(s.start, "px"),
                    width: "".concat(s.width, "px")
                },
                children: (0,
                a.jsx)(tP, {
                    direction: "right",
                    status: "generating",
                    children: (0,
                    a.jsx)(tT, {
                        showCompletionCount: !0
                    })
                })
            })
        }
        ;
        let tY = e => "".concat(Math.floor(e / 60), ":").concat(Math.round(e % 60).toString().padStart(2, "0"))
          , tJ = e => e > 12 ? 4 : e > 6 ? 8 : e > 3 ? 16 : 32;
        function t$(e) {
            let {pixelsPerSecond: t} = e
              , n = (0,
            o.useRef)(null)
              , [r,i] = (0,
            o.useState)({
                width: 0,
                height: 0
            });
            (0,
            o.useEffect)( () => {
                let e = n.current;
                if (!e)
                    return;
                let t = new ResizeObserver( () => {
                    let t = e.getBoundingClientRect();
                    i({
                        width: t.width,
                        height: t.height
                    })
                }
                );
                t.observe(e);
                let r = e.getBoundingClientRect();
                return i({
                    width: r.width,
                    height: r.height
                }),
                () => {
                    t.disconnect()
                }
            }
            , []);
            let {width: s, height: l} = r
              , c = t > 16 ? 2 : 4
              , d = s / t
              , u = Math.ceil(0 / c) * c
              , p = [];
            for (let e = u; e < d; e += c) {
                let n = e * t;
                n >= 0 && n <= s && (e > 0 && e % tJ(t) == 0 ? p.push((0,
                a.jsxs)("div", {
                    children: [(0,
                    a.jsx)("div", {
                        className: "absolute top-0 w-px bg-session-gray-7",
                        style: {
                            left: n,
                            height: l - 27
                        }
                    }), (0,
                    a.jsx)("div", {
                        className: "absolute bottom-0 w-px bg-session-gray-7",
                        style: {
                            left: n,
                            top: l - 8
                        }
                    }), (0,
                    a.jsx)("div", {
                        className: (0,
                        eQ.cn)("font-innovator absolute bottom-[10px] z-20 -translate-x-1/2 bg-session-black text-center text-[10px]"),
                        style: {
                            left: n,
                            color: "#747474"
                        },
                        children: tY(e)
                    })]
                }, "line-".concat(e))) : p.push((0,
                a.jsx)("div", {
                    className: "absolute inset-y-0 w-px bg-session-gray-7",
                    style: {
                        left: n
                    }
                }, "line-".concat(e))))
            }
            return (0,
            a.jsx)("div", {
                ref: n,
                className: "pointer-events-none absolute inset-0 z-0 size-full overflow-hidden",
                children: p
            })
        }
        function t0(e) {
            let {startPosition: t, sampleWidth: n, duration: r, trimStart: i} = e;
            return Math.max(t / n * r, i)
        }
        function t1(e) {
            let {startPosition: t, clipWidth: n, sampleWidth: r, duration: i, trimEnd: s} = e;
            return Math.min((t + n) / r * i, i - s)
        }
        function t2(e) {
            let {inpaintEnd: t, sampleWidth: n, duration: r, trimStart: i, trimEnd: s, pixelsPerSecond: l, clipWidth: a, currentMergedClip: o} = e
              , c = t0({
                startPosition: t,
                sampleWidth: n,
                duration: r,
                trimStart: i
            })
              , d = t1({
                startPosition: t,
                clipWidth: a,
                sampleWidth: n,
                duration: r,
                trimEnd: s
            });
            return {
                ...o,
                startPosition: t,
                relativeStart: c,
                relativeEnd: d,
                width: Math.floor((d - c) * l)
            }
        }
        function t3(e) {
            let {sampleWidth: t, duration: n, trimStart: r, trimEnd: i, pixelsPerSecond: s, currentMergedClip: l, clipWidth: a} = e
              , o = t0({
                startPosition: 0,
                sampleWidth: t,
                duration: n,
                trimStart: r
            })
              , c = t1({
                startPosition: 0,
                clipWidth: a,
                sampleWidth: t,
                duration: n,
                trimEnd: i
            });
            return {
                ...l,
                relativeStart: o,
                relativeEnd: c,
                width: Math.floor((c - o) * s),
                startPosition: 0
            }
        }
        function t5(e) {
            let {sample: t, clips: n, className: r, playbackContainerRef: i, scrollContainerRef: s} = e
              , l = A(t)
              , c = em()
              , d = eg()
              , u = eC()
              , p = l * u
              , m = A(t)
              , g = (l - c - d) * u
              , f = ez()
              , h = eS()
              , x = eo()
              , v = eq()
              , y = tw(e => e.activeGenerations)
              , S = tw(e => e.lastInpaintRegions)
              , b = (0,
            o.useMemo)( () => {
                if (0 === n.length)
                    return [];
                let e = e => y.some(t => "generating" === t.type && (t.songId === e.sampleId || t.targetClipId === e.id) && !t.isPlaceholder)
                  , t = [...n].sort( (e, t) => e.position - t.position)
                  , r = []
                  , i = null;
                for (let n of t) {
                    let t = H(n).duration * u
                      , s = n.startTime * u
                      , a = Math.max(s / p * l, c)
                      , o = Math.min((s + t) / p * l, l - d);
                    x && !e(n) ? i ? (i.relativeEnd = o,
                    i.width = Math.floor((o - i.relativeStart) * u)) : i = {
                        clip: n,
                        startPosition: Math.floor(s),
                        relativeStart: a,
                        relativeEnd: o,
                        width: Math.floor((o - a) * u)
                    } : r.push({
                        clip: n,
                        startPosition: Math.floor(s),
                        relativeStart: a,
                        relativeEnd: o,
                        width: Math.floor((o - a) * u)
                    })
                }
                if (v && i) {
                    let e = v.start * u
                      , t = v.end * u
                      , n = {
                        id: "inpaint-region",
                        sampleId: "inpaint-region",
                        takes: [{
                            sampleId: "inpaint-region",
                            duration: v.end - v.start
                        }],
                        groupId: "",
                        position: 0,
                        startTime: v.start
                    }
                      , r = Math.max(e / p * l, c)
                      , s = Math.min(t / p * l, l - d)
                      , a = {
                        clip: n,
                        startPosition: Math.floor(e),
                        relativeStart: r,
                        relativeEnd: s,
                        width: Math.floor((s - r) * u)
                    };
                    return ( () => {
                        if (r <= i.relativeStart) {
                            let e = t2({
                                inpaintEnd: t,
                                sampleWidth: p,
                                duration: l,
                                trimStart: c,
                                trimEnd: d,
                                pixelsPerSecond: u,
                                clipWidth: p - a.width,
                                currentMergedClip: i
                            });
                            return [a, e]
                        }
                        if (s >= i.relativeEnd)
                            return [t3({
                                sampleWidth: p,
                                duration: l,
                                trimStart: c,
                                trimEnd: d,
                                pixelsPerSecond: u,
                                clipWidth: p - a.width,
                                currentMergedClip: i
                            }), a];
                        {
                            let e = t3({
                                sampleWidth: p,
                                duration: l,
                                trimStart: c,
                                trimEnd: d,
                                pixelsPerSecond: u,
                                clipWidth: a.startPosition,
                                currentMergedClip: i
                            })
                              , t = a.startPosition + a.width
                              , n = p - t;
                            return [e, a, t2({
                                inpaintEnd: t,
                                sampleWidth: p,
                                duration: l,
                                trimStart: c,
                                trimEnd: d,
                                pixelsPerSecond: u,
                                clipWidth: n,
                                currentMergedClip: i
                            })]
                        }
                    }
                    )()
                }
                return i && r.push(i),
                r
            }
            , [n, p, l, u, c, d, x, v, y])
              , w = (0,
            o.useMemo)( () => ({
                id: t.id,
                audioStartOffset: c,
                audioEndOffset: m - d,
                originalDuration: m
            }), [t, c, d, m]);
            return (0,
            a.jsx)(a.Fragment, {
                children: (0,
                a.jsxs)("div", {
                    className: (0,
                    eQ.cn)("group/clip pointer-events-none flex select-none flex-col", r),
                    children: ["inpaint" === h && v && S && (0,
                    a.jsx)(tQ, {
                        lastInpaintRegions: S,
                        trimWidth: g
                    }), (0,
                    a.jsxs)("div", {
                        className: "relative h-full",
                        style: {
                            width: g
                        },
                        children: [(0,
                        a.jsx)(tK, {
                            clipPositions: b,
                            pixelsPerSecond: u,
                            playbackContainerRef: i,
                            scrollContainerRef: s
                        }), (0,
                        a.jsx)(t$, {
                            pixelsPerSecond: u
                        }), f && (0,
                        a.jsx)("div", {
                            className: "absolute inset-0 z-10",
                            children: (0,
                            a.jsx)(tX, {
                                svgPaths: f,
                                clip: w
                            })
                        })]
                    })]
                })
            })
        }
        let t4 = e => {
            let {onMouseDown: t, direction: n} = e;
            return (0,
            a.jsxs)("button", {
                onMouseDown: e => {
                    t(n, e.clientX)
                }
                ,
                onClick: e => {
                    e.stopPropagation()
                }
                ,
                className: (0,
                eQ.cn)("group pointer-events-auto absolute inset-y-px isolate z-10 w-2 cursor-ew-resize opacity-0 transition-opacity active:opacity-100 hover:opacity-100", "left" === n ? "-left-1 " : "-right-1"),
                children: [(0,
                a.jsx)("div", {
                    className: (0,
                    eQ.cn)("absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-white transition-colors group-active:bg-brand-accent")
                }), (0,
                a.jsx)("div", {
                    className: (0,
                    eQ.cn)("absolute left-1/2 top-1/2 h-20 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-colors group-active:bg-brand-accent")
                }), (0,
                a.jsx)("div", {
                    className: "absolute left-1/2 top-1/2 h-8 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
                })]
            })
        }
        ;
        function t6(e) {
            let {pixelsPerSecond: t, scrollContainerRef: n} = e
              , r = (0,
            o.useRef)(null)
              , {handleMouseDown: i} = function(e, t) {
                let n = (0,
                o.useRef)(1)
                  , r = tw(e => e.setTrimStart)
                  , i = tw(e => e.getTrimStart)
                  , s = tw(e => e.setTrimEnd)
                  , l = tw(e => e.getTrimEnd)
                  , a = tw(e => e.setTrimInitialStart)
                  , c = tw(e => e.pushStateToHistory)
                  , d = eu()
                  , u = A(null != d ? d : null)
                  , p = (0,
                o.useRef)(null)
                  , m = (0,
                o.useMemo)( () => u * e, [u, e])
                  , g = e => {
                    if (!p.current)
                        return;
                    let a = ("left" === p.current ? e.movementX : -e.movementX) * n.current / m * u;
                    if ("left" === p.current) {
                        let e = i() + a;
                        r(Math.max(0, Math.min(u - l() - 3, e)))
                    } else {
                        let e = l() + a;
                        s(Math.max(0, Math.min(u - i() - 3, e)));
                        let n = t.current;
                        if (!n)
                            return;
                        let r = n.scrollWidth - n.clientWidth;
                        r > 0 && n.scrollTo({
                            left: r
                        })
                    }
                }
                  , f = () => {
                    a(null),
                    p.current = null,
                    document.exitPointerLock(),
                    document.removeEventListener("mousemove", g),
                    document.removeEventListener("mouseup", f)
                }
                  , h = () => {
                    n.current = 1
                }
                  , x = () => {
                    n.current = .15
                }
                ;
                return (0,
                o.useEffect)( () => {
                    let e = e => {
                        ("Control" === e.key || "Meta" === e.key) && x()
                    }
                      , t = e => {
                        ("Control" === e.key || "Meta" === e.key) && h()
                    }
                    ;
                    return document.addEventListener("keydown", e),
                    document.addEventListener("keyup", t),
                    window.addEventListener("blur", h),
                    window.addEventListener("focus", h),
                    () => {
                        document.removeEventListener("keydown", e),
                        document.removeEventListener("keyup", t),
                        window.removeEventListener("blur", h),
                        window.removeEventListener("focus", h)
                    }
                }
                , []),
                {
                    handleMouseDown: e => {
                        a(i()),
                        c("Adjusted trim"),
                        p.current = e,
                        document.body.requestPointerLock(),
                        document.addEventListener("mousemove", g),
                        document.addEventListener("mouseup", f)
                    }
                }
            }(t, n)
              , s = tw(e => e.seekToStart);
            return "generating" === tw(e => e.getGenerationStatusType()) ? null : (0,
            a.jsxs)("div", {
                "aria-label": "Trim start",
                role: "slider",
                "aria-valuenow": 0,
                tabIndex: 0,
                ref: r,
                className: (0,
                eQ.cn)("pointer-events-none absolute inset-0 z-20 opacity-100 transition-opacity duration-300 ease-in-out"),
                children: [(0,
                a.jsx)(t4, {
                    direction: "left",
                    onMouseDown: e => {
                        i(e),
                        s()
                    }
                }), (0,
                a.jsx)(t4, {
                    direction: "right",
                    onMouseDown: i
                })]
            })
        }
        var t9 = n(70548)
          , t7 = n(3776)
          , t8 = e => {
            let {message: t, position: n, handleClick: r, offset: i=8} = e
              , {containerRef: s, width: l, height: c} = (0,
            t7.Z)()
              , [d,u] = (0,
            o.useState)({
                top: "auto",
                bottom: "auto",
                left: "auto",
                right: "auto"
            });
            return (0,
            o.useEffect)( () => {
                switch (n) {
                case "bottom":
                    u({
                        top: "auto",
                        bottom: "-".concat(c + i, "px"),
                        left: "calc(50% - ".concat(l / 2, "px)"),
                        right: "auto"
                    });
                    break;
                case "left":
                    u({
                        top: "calc(50% - ".concat(c / 2, "px)"),
                        bottom: "auto",
                        left: "-".concat(l + i, "px"),
                        right: "auto"
                    })
                }
            }
            , [n, l, c, i]),
            (0,
            a.jsxs)("div", {
                tabIndex: 0,
                role: "button",
                ref: s,
                className: "absolute z-50 flex w-[320px] flex-col items-start justify-center gap-2 rounded-2xl bg-session-gray-4 p-4 text-[14px] font-normal",
                style: {
                    top: d.top,
                    left: d.left,
                    bottom: d.bottom,
                    right: d.right
                },
                onClick: e => {
                    e.stopPropagation()
                }
                ,
                onKeyDown: e => {
                    "Enter" === e.key && e.stopPropagation()
                }
                ,
                children: [(0,
                a.jsx)(t9.Z, {
                    size: 16,
                    className: "text-session-off-black"
                }), (0,
                a.jsx)("span", {
                    className: " text-session-off-black",
                    children: t
                }), (0,
                a.jsx)("button", {
                    className: "text-session-gray-6 transition-colors hover:text-session-gray-5",
                    onClick: r,
                    children: "Don't show again"
                })]
            })
        }
          , ne = e => {
            let {position: t, message: n, localStorageKey: r, onClose: i} = e
              , s = tw(e => e.contextMenu)
              , l = eF()
              , [c,d] = (0,
            o.useState)(null == localStorage.getItem(r) && l);
            return "replace" === s && c ? (0,
            a.jsx)(t8, {
                position: t,
                message: n,
                handleClick: () => {
                    d(!1),
                    null == i || i(),
                    localStorage.setItem(r, "false")
                }
            }) : null
        }
        ;
        function nt() {
            let e = eC()
              , t = (0,
            o.useRef)(null)
              , n = (0,
            o.useRef)(null)
              , r = (0,
            o.useRef)(0)
              , i = tw(e => "playing" === e.playbackState)
              , s = tw(e => e.isDraggingTimelineElement)
              , l = tw(e => e.getPlayheadPositionInSeconds)
              , c = tw(e => e.setPlayheadPositionInSeconds)
              , d = tw(e => e.seekToStart)
              , u = tw(e => e.getLoadedSampleDuration)
              , p = tw(e => e.getTotalTrimmedDuration)
              , m = (0,
            o.useCallback)(n => {
                t.current && (t.current.style.transform = "translateX(".concat(n * e, "px)"))
            }
            , [e])
              , g = (0,
            o.useCallback)(e => {
                if (!t.current)
                    return;
                let n = t.current.querySelector(".time-indicator");
                n && (n.textContent = e.toFixed(1) + "s")
            }
            , []);
            return (0,
            o.useEffect)( () => {
                let t = document.getElementById("selection-areas-container");
                if (!t)
                    return;
                let n = n => {
                    if (s)
                        return;
                    let r = t.getBoundingClientRect()
                      , i = (n.clientX - r.left) / e;
                    m(i),
                    c(i),
                    g(i)
                }
                ;
                return t.addEventListener("click", n),
                () => {
                    t.removeEventListener("click", n)
                }
            }
            , [e, i, s, m, c, g]),
            (0,
            o.useEffect)( () => {
                let e = tw.subscribe(e => e.getTrimStart(), () => {
                    t.current && !i && (d(),
                    m(0),
                    g(0))
                }
                );
                return () => e()
            }
            , [e, d, i, m, g]),
            (0,
            o.useEffect)( () => {
                if (!t.current)
                    return;
                let e = Math.max(0, l());
                m(e),
                g(e)
            }
            , [e, l, m, g]),
            (0,
            o.useEffect)( () => {
                let e = tw.subscribe(e => e.getTrimEnd(), e => {
                    if (!t.current || i)
                        return;
                    let n = u() - e
                      , r = Math.min(l(), n);
                    m(r),
                    g(r)
                }
                );
                return () => e()
            }
            , [e, i, u, p, c, l, m, g]),
            (0,
            o.useEffect)( () => {
                let e = () => {
                    let i = Math.max(0, l());
                    t.current && i !== r.current && (r.current = i,
                    m(i),
                    g(i)),
                    n.current = requestAnimationFrame(e)
                }
                ;
                return e(),
                () => {
                    n.current && cancelAnimationFrame(n.current)
                }
            }
            , [e, i, l, m, g]),
            (0,
            a.jsx)("div", {
                className: "pointer-events-none absolute bottom-3 top-3 z-20 w-full select-none",
                children: (0,
                a.jsxs)("div", {
                    ref: t,
                    className: "absolute h-full w-0.5 bg-brand-accent",
                    children: [(0,
                    a.jsx)("div", {
                        className: "absolute bottom-[15px] translate-x-[-5px]",
                        style: {
                            width: 0,
                            height: 0,
                            borderLeft: "6px solid transparent",
                            borderRight: "6px solid transparent",
                            borderBottom: "8px solid #E30B5D"
                        }
                    }), (0,
                    a.jsx)("div", {
                        className: "time-indicator absolute -bottom-1 -translate-x-1/2  rounded-sm bg-brand-accent px-1.5 py-0.5 text-[10px] text-white",
                        children: "0:00"
                    })]
                })
            })
        }
        var nn = e => {
            let {onMouseDown: t, direction: n, handleBgColor: r="bg-brand-accent"} = e;
            return (0,
            a.jsxs)("button", {
                onMouseDown: e => {
                    t(e, n)
                }
                ,
                onClick: e => {
                    e.stopPropagation()
                }
                ,
                className: (0,
                eQ.cn)("group pointer-events-auto absolute inset-y-px isolate z-10 w-2 cursor-ew-resize opacity-0 transition-opacity hover:opacity-100", "left" === n ? "-left-[5px] " : "-right-[5px]"),
                children: [(0,
                a.jsx)("div", {
                    className: (0,
                    eQ.cn)("absolute left-1/2 top-1/2 h-20 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full", r)
                }), (0,
                a.jsx)("div", {
                    className: "absolute left-1/2 top-1/2 h-8 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
                })]
            })
        }
          , nr = n(29860)
          , ni = n.n(nr);
        let ns = (e, t, n) => {
            if (0 === e.length)
                return -1;
            let r = 0
              , i = Math.abs(e[0] - t)
              , s = "start" === n ? (e, t) => e < t : (e, t) => e <= t;
            for (let n = 1; n < e.length; n++) {
                let l = Math.abs(e[n] - t);
                s(l, i) && (i = l,
                r = n)
            }
            return r
        }
          , nl = (e, t) => {
            let n = t.state.doc.textContent.indexOf(e);
            return -1 === n ? e.length : n + e.length
        }
          , na = (e, t) => {
            let n = [...t].sort( (e, t) => e.start - t.start)
              , r = n.findIndex(n => n === t[e]);
            return {
                previousRegion: r > 0 ? n[r - 1] : null,
                nextRegion: r < n.length - 1 ? n[r + 1] : null
            }
        }
          , no = e => ({
            start: Math.min(...e.map(e => e.start)),
            end: Math.max(...e.map(e => e.end))
        })
          , nc = (e, t, n, r) => {
            try {
                if (!r || !n)
                    return {
                        lyricsStart: void 0,
                        lyricsEnd: void 0
                    };
                let i = ns(n.startTimes, e, "start")
                  , s = ns(n.startTimes, t, "end")
                  , l = n.wordsFormatted.slice(0, i).join("")
                  , a = n.wordsFormatted.slice(0, s + 1).join("")
                  , o = nl(l, r)
                  , c = nl(a, r);
                for (; o > 0; ) {
                    let e = r.state.doc.textBetween(o - 1, o);
                    if (!e || /\s/.test(e))
                        break;
                    o--
                }
                for (; c < r.state.doc.content.size; ) {
                    let e = r.state.doc.textBetween(c, c + 1);
                    if (!e || /\s/.test(e))
                        break;
                    c++
                }
                return {
                    lyricsStart: o,
                    lyricsEnd: c
                }
            } catch (e) {
                return console.error("Error finding lyrics positions:", e),
                {
                    lyricsStart: void 0,
                    lyricsEnd: void 0
                }
            }
        }
        ;
        var nd = () => {
            let e = eu()
              , t = tw(e => e.getLyricsEditor)()
              , n = tw(e => e.replaceSelectionAreas)
              , r = tw(e => e.updateReplaceSelectionArea)
              , i = tw(e => e.contextMenu)
              , s = eF()
              , {data: l} = (0,
            Q.BT)(R.US, {
                id: J(e),
                songPath: $(e)
            })
              , a = tw(e => e.selectedReplaceSelectionArea)
              , c = tw(e => e.replaceLyricsSelections)
              , d = tw(e => e.lyricsMenuOpen)
              , u = (0,
            o.useCallback)( () => {
                if (t) {
                    if ("replace" !== i) {
                        t.chain().selectAll().unsetHighlight().run();
                        return
                    }
                    if (s) {
                        c.forEach( (e, n) => {
                            t.commands.setTextSelection({
                                from: e.from,
                                to: e.to
                            }),
                            t.chain().setHighlight({
                                color: n === a ? v.qk : v.z2
                            }).blur().run()
                        }
                        );
                        return
                    }
                    try {
                        t.chain().selectAll().unsetHighlight().run(),
                        n.forEach( (e, n) => {
                            let r = e.lyricsStart
                              , i = e.lyricsEnd;
                            if (void 0 === r || void 0 === i) {
                                let n = nc(e.start, e.end, l, t);
                                r = n.lyricsStart,
                                i = n.lyricsEnd
                            }
                            "number" != typeof r || "number" != typeof i || r >= i || (t.commands.setTextSelection({
                                from: r,
                                to: i
                            }),
                            t.chain().setHighlight({
                                color: n === a ? v.qk : v.z2
                            }).blur().run())
                        }
                        )
                    } catch (e) {
                        console.error("Error refreshing highlights:", e)
                    }
                }
            }
            , [t, n, a, c, s, l, i])
              , p = (0,
            o.useMemo)( () => ni()(u, 25), [u]);
            return (0,
            o.useEffect)( () => (d && p(),
            () => {
                p.cancel()
            }
            ), [t, s, i, d, p]),
            {
                syncLyricsFromTimeSelection: (e, n) => {
                    let {lyricsStart: i, lyricsEnd: s} = nc(e.start, e.end, l, t);
                    r(n, {
                        ...e,
                        lyricsStart: i,
                        lyricsEnd: s
                    })
                }
                ,
                refreshLyricsHighlights: u,
                findLyricsPositions: nc
            }
        }
          , nu = e => {
            let {index: t, containerRef: n} = e
              , r = (0,
            o.useRef)(0)
              , i = (0,
            o.useRef)(null)
              , s = (0,
            o.useRef)(!1)
              , l = tw(e => e.isDraggingTimelineElement)
              , a = tw(e => e.setIsDraggingTimelineElement)
              , c = tw(e => e.replaceSelectionAreas)
              , d = tw(e => e.updateReplaceSelectionArea)
              , u = tw(e => e.replaceSelectionAreaBounds)
              , p = tw(e => e.setSelectedReplaceSelectionArea)
              , {syncLyricsFromTimeSelection: m} = nd()
              , g = eF()
              , f = eC()
              , h = em()
              , x = (0,
            o.useMemo)( () => c[t], [t, c])
              , v = e => {
                let l;
                if (!i.current)
                    return;
                e.stopPropagation();
                let a = n.current;
                if (!a || !c.length)
                    return;
                let o = e.clientX - a.getBoundingClientRect().left;
                Math.abs(o - i.current) > 2 && (s.current = !0);
                let {previousRegion: p, nextRegion: v} = na(t, c)
                  , y = f > 0 ? 10 / f : 0
                  , S = (x.end - x.start) / 2
                  , b = (o - r.current) / f + h;
                if (p || v)
                    l = Math.min(Math.max(b, ((null == p ? void 0 : p.end) ? p.end + y : u.start) + S), ((null == v ? void 0 : v.start) ? v.start - y : u.start + u.width) - S);
                else {
                    let e = a.getBoundingClientRect().width / f - S + h;
                    l = Math.min(Math.max(b, S + h), e)
                }
                let w = l - S - x.start;
                if (g) {
                    d(t, {
                        start: x.start + w,
                        end: x.end + w
                    });
                    return
                }
                m({
                    start: x.start + w,
                    end: x.end + w
                }, t)
            }
              , y = () => {
                r.current = 0,
                document.removeEventListener("mousemove", v),
                document.removeEventListener("mouseup", y),
                s.current ? setTimeout( () => {
                    a(!1)
                }
                , 0) : a(!1),
                s.current = !1,
                i.current = null
            }
            ;
            return {
                handleMoveMouseDown: e => {
                    if (l || 0 !== r.current)
                        return;
                    p(t),
                    e.stopPropagation(),
                    e.preventDefault(),
                    document.addEventListener("mousemove", v),
                    document.addEventListener("mouseup", y),
                    a(!0);
                    let o = n.current;
                    if (!o)
                        return;
                    let c = o.getBoundingClientRect().left
                      , d = e.clientX - c;
                    i.current = d,
                    s.current = !1;
                    let u = ((x.start + x.end) / 2 - h) * f;
                    r.current = d - u
                }
            }
        }
          , np = e => {
            let {containerRef: t, index: n} = e
              , r = tw(e => e.replaceSelectionAreas)
              , i = tw(e => e.replaceSelectionAreaBounds)
              , s = tw(e => e.updateReplaceSelectionArea)
              , l = tw(e => e.setIsDraggingTimelineElement)
              , {syncLyricsFromTimeSelection: a} = nd()
              , c = eF()
              , d = eC()
              , u = (0,
            o.useRef)(null)
              , p = em()
              , m = (0,
            o.useMemo)( () => r[n], [n, r])
              , g = e => {
                e.stopPropagation();
                let l = t.current;
                if (!u.current || !l || !r.length)
                    return;
                let o = e.clientX - l.getBoundingClientRect().left
                  , {previousRegion: g, nextRegion: f} = na(n, r)
                  , h = d > 0 ? 10 / d : 0
                  , x = (null == g ? void 0 : g.end) ? g.end + h : i.start
                  , y = (null == f ? void 0 : f.start) ? f.start - h : m.start + v.s7
                  , S = o / d + p;
                if ("left" === u.current) {
                    let e = Math.min(Math.max(S, x), m.end - h);
                    if (c) {
                        s(n, {
                            start: e,
                            end: m.end
                        });
                        return
                    }
                    a({
                        start: e,
                        end: m.end
                    }, n)
                } else {
                    let e = Math.max(Math.min(S, y), m.start + h);
                    if (c) {
                        s(n, {
                            start: m.start,
                            end: e
                        });
                        return
                    }
                    a({
                        start: m.start,
                        end: e
                    }, n)
                }
            }
              , f = () => {
                u.current = null,
                document.removeEventListener("mousemove", g),
                document.removeEventListener("mouseup", f),
                setTimeout( () => {
                    l(!1)
                }
                , 0)
            }
            ;
            return {
                handleMouseDown: (e, t) => {
                    l(!0),
                    e.stopPropagation(),
                    u.current = t,
                    document.addEventListener("mousemove", g),
                    document.addEventListener("mouseup", f)
                }
            }
        }
          , nm = e => {
            let {containerRef: t, index: n} = e
              , r = eC()
              , i = tw(e => e.replaceSelectionAreas)
              , s = tw(e => e.selectedReplaceSelectionArea)
              , l = tw(e => e.setSelectedReplaceSelectionArea)
              , {handleMoveMouseDown: o} = nu({
                containerRef: t,
                index: n
            })
              , {handleMouseDown: c} = np({
                containerRef: t,
                index: n
            })
              , d = em()
              , {start: u, end: p} = i[n];
            return (0,
            a.jsxs)("div", {
                className: (0,
                eQ.cn)("absolute h-full cursor-grab rounded-2xl border-2 border-session-gray-4 bg-[#bcbcbc]/20 active:cursor-grabbing", s === n && "border-brand-accent bg-brand-accent/20"),
                onMouseDown: o,
                style: {
                    left: (u - d) * r,
                    width: (p - u) * r
                },
                children: [(0,
                a.jsx)(nn, {
                    direction: "left",
                    onMouseDown: e => {
                        c(e, "left"),
                        l(n)
                    }
                    ,
                    handleBgColor: s === n ? "bg-brand-accent" : "bg-session-gray-4"
                }), (0,
                a.jsx)(nn, {
                    direction: "right",
                    onMouseDown: e => {
                        c(e, "right"),
                        l(n)
                    }
                    ,
                    handleBgColor: s === n ? "bg-brand-accent" : "bg-session-gray-4"
                })]
            })
        }
          , ng = () => {
            let e = (0,
            o.useRef)(0)
              , t = (0,
            o.useRef)(0)
              , n = tw(e => e.replaceSelectionAreas)
              , r = tw(e => e.getLoadedSampleDuration)
              , i = em()
              , s = eg()
              , l = tw(e => e.updateReplaceSelectionArea)
              , a = tw(e => e.removeReplaceSelectionArea)
              , c = tw(e => e.setReplaceSelectionAreaBounds)
              , d = tw(e => e.clearReplaceSelectionAreaBounds)
              , {syncLyricsFromTimeSelection: u} = nd()
              , p = eF();
            return (0,
            o.useEffect)( () => {
                if (0 === n.length) {
                    d();
                    return
                }
                let o = r()
                  , {start: m, end: g} = no(n);
                e.current = Math.max(g - v.s7, i),
                t.current = Math.min(m + v.s7, o - s);
                let f = []
                  , h = [];
                n.forEach( (n, r) => {
                    let i = {
                        ...n
                    }
                      , s = !1;
                    n.end > t.current && (i.end = t.current,
                    s = !0),
                    n.start < e.current && (i.start = e.current,
                    s = !0),
                    i.end - i.start <= 0 ? f.push(r) : s && h.push({
                        index: r,
                        updatedArea: i
                    })
                }
                ),
                h.length > 0 && h.forEach(e => {
                    let {index: t, updatedArea: n} = e;
                    l(t, n),
                    p || u({
                        start: n.start,
                        end: n.end
                    }, t)
                }
                ),
                f.length > 0 && f.sort( (e, t) => t - e).forEach(e => {
                    a(e)
                }
                );
                let x = t.current - e.current;
                c(e.current, x)
            }
            , [n, r, i, s, l, a, u, c, p, d]),
            {
                startBoundRef: e,
                widthBoundRef: t
            }
        }
          , nf = e => {
            let {containerRef: t} = e
              , n = eC()
              , r = tw(e => e.setSelectionArea)
              , i = tw(e => e.replaceSelectionAreas)
              , s = tw(e => e.addReplaceSelectionArea)
              , l = e_()
              , c = tw(e => e.lyricsMenuOpen)
              , d = tw(e => e.setLyricsMenuOpen)
              , u = (0,
            o.useRef)(null)
              , p = (0,
            o.useRef)(!1)
              , m = (0,
            o.useRef)(null)
              , g = em()
              , {syncLyricsFromTimeSelection: f} = nd()
              , {startBoundRef: h, widthBoundRef: x} = ng()
              , y = eF()
              , S = tw(e => e.updateReplaceSelectionArea)
              , b = tw(e => e.setSelectedReplaceSelectionArea)
              , w = tw(e => e.replaceLyricsSelections)
              , j = tw(e => e.setIsDraggingTimelineElement)
              , k = e => {
                if (!t.current || !u.current || !l && !y || y && (i.length === w.length + 1 || 3 === i.length))
                    return;
                let r = t.current.getBoundingClientRect()
                  , a = e.clientX - r.left;
                if (Math.abs(a - u.current) > 2) {
                    let e = u.current / n + g;
                    if (i.length > 0)
                        return;
                    if (!p.current) {
                        p.current = !0;
                        let t = i.length;
                        s({
                            start: e,
                            end: e
                        }),
                        m.current = t,
                        b(t)
                    }
                    if (null !== m.current) {
                        let {previousRegion: t, nextRegion: r} = na(m.current, [...i, {
                            start: e,
                            end: e
                        }])
                          , s = h.current
                          , l = x.current
                          , o = (null == t ? void 0 : t.end) ? Math.max(t.end + v.oU, s) : s
                          , c = (null == r ? void 0 : r.start) ? Math.min(r.start - v.oU, l) : l
                          , d = a / n + g
                          , u = Math.max(Math.min(e, d), o)
                          , p = Math.max(Math.min(Math.max(e, d), c), u + v.oU);
                        u < p && !y ? f({
                            start: u,
                            end: p
                        }, m.current) : u < p && y && S(m.current, {
                            start: u,
                            end: p
                        })
                    }
                }
            }
              , M = () => {
                u.current && (p.current ? (c || d(!0),
                setTimeout( () => {
                    j(!1)
                }
                , 0)) : (r(null),
                j(!1)),
                p.current = !1,
                u.current = null,
                m.current = null),
                document.removeEventListener("mousemove", k),
                document.removeEventListener("mouseup", M)
            }
            ;
            return (0,
            a.jsx)("div", {
                ref: t,
                tabIndex: 0,
                role: "button",
                className: "absolute inset-0 select-none focus:outline-none",
                onMouseDown: e => {
                    if (e.stopPropagation(),
                    !t.current)
                        return;
                    j(!0);
                    let n = t.current.getBoundingClientRect()
                      , r = e.clientX - n.left;
                    u.current = r,
                    p.current = !1,
                    m.current = null,
                    document.addEventListener("mousemove", k),
                    document.addEventListener("mouseup", M)
                }
                ,
                children: i.map( (e, n) => (0,
                a.jsx)(nm, {
                    selectionArea: e,
                    containerRef: t,
                    index: n
                }, n))
            })
        }
          , nh = e => {
            let {onMouseDown: t, direction: n} = e
              , r = tw(e => e.loopingEnabled)
              , i = (0,
            eQ.cn)("bg-brand-accent", r && "bg-teal-500");
            return (0,
            a.jsx)(nn, {
                onMouseDown: t,
                direction: n,
                handleBgColor: i
            })
        }
          , nx = n(95782)
          , nv = n(16273)
          , ny = () => {
            let e = tw(e => e.contextMenu)
              , t = tw(e => e.setContextMenu)
              , n = tw(e => e.addReplaceSelectionArea)
              , r = tw(e => e.clearReplaceSelectionAreas)
              , i = tw(e => e.setSelectionArea)
              , s = el()
              , {syncLyricsFromTimeSelection: l} = nd()
              , o = eu()
              , {data: c, isLoading: d} = (0,
            Q.BT)(R.US, {
                id: J(o),
                songPath: $(o)
            })
              , u = tw(e => e.setLyricsMenuOpen)
              , p = em();
            return (0,
            a.jsx)("div", {
                className: "absolute -top-3 left-1/2 z-50 -translate-x-1/2 -translate-y-full rounded-lg bg-session-gray-8 p-3",
                children: (0,
                a.jsx)("div", {
                    className: "flex flex-col",
                    children: "replace" !== e && (0,
                    a.jsx)(nv.z, {
                        onMouseDown: e => {
                            e.stopPropagation()
                        }
                        ,
                        onClick: e => {
                            e.stopPropagation(),
                            s && (t("replace"),
                            setTimeout( () => {
                                u(!0)
                            }
                            , 0),
                            r(),
                            n({
                                start: s.start + p,
                                end: s.end + p
                            }),
                            c && l({
                                start: s.start + p,
                                end: s.end + p
                            }, 0),
                            i(null))
                        }
                        ,
                        className: (0,
                        eQ.cn)("w-full justify-start bg-session-gray-8 text-session-gray-4 hover:bg-session-off-black"),
                        disabled: d,
                        children: (0,
                        a.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0,
                            a.jsx)(nx.Z, {
                                width: 16
                            }), " Replace", d && (0,
                            a.jsx)("span", {
                                className: "ml-auto",
                                children: (0,
                                a.jsx)(t_.Z, {
                                    className: "size-4 animate-spin"
                                })
                            })]
                        })
                    })
                })
            })
        }
          , nS = e => {
            let {containerRef: t} = e
              , n = el()
              , r = tw(e => e.setSelectionArea)
              , i = tw(e => e.setIsDraggingTimelineElement)
              , s = eC()
              , l = (0,
            o.useRef)(null);
            (0,
            o.useEffect)( () => () => {
                document.removeEventListener("mousemove", a),
                document.removeEventListener("mouseup", c)
            }
            , []);
            let a = e => {
                e.stopPropagation();
                let i = t.current;
                if (!l.current || !i || !n)
                    return;
                let a = e.clientX - i.getBoundingClientRect().left;
                if ("left" === l.current)
                    r({
                        start: Math.min(Math.max(a / s, Math.max(n.end - v.EW, 0)), n.end - 1),
                        end: n.end
                    });
                else {
                    let e = Math.max(Math.min(a / s, Math.min(i.clientWidth / s, n.start + v.EW)), n.start + 1);
                    r({
                        start: n.start,
                        end: e
                    })
                }
            }
              , c = () => {
                setTimeout( () => {
                    i(!1)
                }
                , 0),
                l.current = null,
                document.removeEventListener("mousemove", a),
                document.removeEventListener("mouseup", c)
            }
            ;
            return {
                handleMouseDown: (e, t) => {
                    e.stopPropagation(),
                    i(!0),
                    l.current = t,
                    document.addEventListener("mousemove", a),
                    document.addEventListener("mouseup", c)
                }
            }
        }
          , nb = e => {
            let {containerRef: t, hasMenu: n=!0} = e
              , r = el()
              , i = eC()
              , {handleMouseDown: s} = nS({
                containerRef: t
            });
            return r ? (0,
            a.jsxs)("div", {
                className: (0,
                eQ.cn)("absolute h-full rounded-2xl border-2 border-brand-accent bg-brand-accent/20"),
                style: {
                    left: r.start * i,
                    width: (r.end - r.start) * i
                },
                children: [n && (0,
                a.jsx)(ny, {}), (0,
                a.jsx)(nh, {
                    direction: "left",
                    onMouseDown: e => {
                        s(e, "left")
                    }
                }), (0,
                a.jsx)(nh, {
                    direction: "right",
                    onMouseDown: e => {
                        s(e, "right")
                    }
                })]
            }) : null
        }
          , nw = e => {
            let {containerRef: t} = e
              , n = eC()
              , r = tw(e => e.setSelectionArea)
              , i = tw(e => e.setPlayheadStartPosition)
              , s = tw(e => e.setIsDraggingTimelineElement)
              , l = tw(e => e.setActiveTakesMenu)
              , c = el()
              , d = (0,
            o.useRef)(null)
              , u = (0,
            o.useRef)(!1)
              , p = e => {
                if (!t.current || !d.current)
                    return;
                i(0);
                let s = t.current.getBoundingClientRect()
                  , a = e.clientX - s.left
                  , o = v.EW * n
                  , c = Math.max(Math.min(a, d.current + o), d.current - o);
                Math.abs(c - d.current) > 2 && (u.current = !0,
                r({
                    start: Math.max(Math.min(d.current, c) / n, 0),
                    end: Math.min(Math.max(d.current, c) / n, t.current.clientWidth / n)
                }),
                l(null))
            }
              , m = () => {
                d.current && (u.current ? setTimeout( () => {
                    s(!1)
                }
                , 0) : (r(null),
                s(!1)),
                u.current = !1,
                d.current = null),
                document.removeEventListener("mousemove", p),
                document.removeEventListener("mouseup", m)
            }
            ;
            return (0,
            a.jsx)("div", {
                ref: t,
                tabIndex: 0,
                role: "button",
                className: "absolute inset-0 cursor-default select-none focus:outline-none",
                onMouseDown: e => {
                    if (e.stopPropagation(),
                    !t.current)
                        return;
                    s(!0);
                    let n = t.current.getBoundingClientRect()
                      , r = e.clientX - n.left;
                    d.current = r,
                    document.addEventListener("mousemove", p),
                    document.addEventListener("mouseup", m)
                }
                ,
                onClick: e => e.stopPropagation(),
                onKeyDown: e => {
                    "Enter" === e.key && e.stopPropagation()
                }
                ,
                children: !!c && (0,
                a.jsx)(nb, {
                    containerRef: t
                })
            })
        }
          , nj = e => {
            let {selectionArea: t} = e
              , n = eC()
              , {start: r, end: i} = t;
            return (0,
            a.jsx)("div", {
                className: (0,
                eQ.cn)("absolute h-full rounded-xl bg-brand-accent/10"),
                style: {
                    left: r * n,
                    width: (i - r) * n
                }
            })
        }
          , nk = () => {
            let e = tw(e => e.contextMenu)
              , t = (0,
            o.useRef)(null)
              , n = eW()
              , r = eK();
            return (0,
            a.jsx)(a.Fragment, {
                children: (0,
                a.jsxs)("div", {
                    id: "selection-areas-container",
                    ref: t,
                    tabIndex: 0,
                    role: "button",
                    className: "absolute inset-0 z-20 select-none focus:outline-none",
                    onClick: e => e.stopPropagation(),
                    onKeyDown: e => {
                        "Enter" === e.key && e.stopPropagation()
                    }
                    ,
                    children: ["replace" !== e || r ? (0,
                    a.jsx)(nw, {
                        containerRef: t
                    }) : (0,
                    a.jsx)(nf, {
                        containerRef: t
                    }), n && (0,
                    a.jsx)(nj, {
                        selectionArea: n
                    })]
                })
            })
        }
          , nM = n(30048)
          , nN = e => {
            let {text: t, keyboardShortcut: n, children: r, side: i="bottom", delayDuration: s=150, className: l} = e;
            return (0,
            a.jsx)(nM.pn, {
                children: (0,
                a.jsxs)(nM.u, {
                    delayDuration: s,
                    children: [(0,
                    a.jsx)(nM.aJ, {
                        asChild: !0,
                        children: r
                    }), (0,
                    a.jsxs)(nM._v, {
                        side: i,
                        className: (0,
                        eQ.cn)("flex max-w-xs items-center gap-2 whitespace-normal rounded-lg border-0 bg-session-off-black leading-normal text-session-gray-3", l),
                        children: [(0,
                        a.jsx)("span", {
                            className: "",
                            children: t
                        }), n && (0,
                        a.jsx)("span", {
                            className: "text-[10px] uppercase text-session-gray-5",
                            children: n
                        })]
                    })]
                })
            })
        }
          , nC = e => {
            var t, n, r;
            let {name: i, id: s, index: l, start: c, duration: d, sections: u, color: p} = e
              , m = (0,
            o.useRef)(null)
              , g = null === (t = eu()) || void 0 === t ? void 0 : t.id
              , f = tw(e => e.addReplaceSelectionArea)
              , h = tw(e => e.setContextMenu)
              , x = tw(e => e.setHighlightedSection)
              , {syncLyricsFromTimeSelection: y} = nd()
              , S = em()
              , b = S * eC()
              , w = null !== (r = null === (n = eu()) || void 0 === n ? void 0 : n.duration) && void 0 !== r ? r : 0
              , j = () => {
                h("replace");
                let e = Math.max(S, u[l].start)
                  , t = e - u[l].start
                  , n = Math.min(w, e + u[l].duration - t);
                if (n - e > v.s7) {
                    let t = (n - e - v.s7) / 2;
                    e += t,
                    n -= t
                }
                f({
                    start: e,
                    end: n
                }),
                y({
                    start: e,
                    end: n
                }, 0)
            }
              , k = "replace" !== tw(e => e.contextMenu);
            if (!g)
                return null;
            let M = c - b;
            return (0,
            a.jsx)(nN, {
                text: i.toUpperCase(),
                delayDuration: 400,
                children: (0,
                a.jsx)("div", {
                    ref: m,
                    className: (0,
                    eQ.cn)("group pointer-events-auto absolute flex h-5 shrink-0 items-center justify-between overflow-hidden text-ellipsis whitespace-nowrap rounded-xl pl-3 pr-2 text-[10px] uppercase text-session-white opacity-90 transition-opacity hover:text-session-off-white hover:opacity-100", k && "pointer-events-none"),
                    style: {
                        left: "".concat(M, "px"),
                        width: "".concat(d - 2, "px"),
                        backgroundColor: "rgb(var(--".concat(p, ")")
                    },
                    onMouseDown: e => {
                        k || (e.preventDefault(),
                        j())
                    }
                    ,
                    onKeyDown: e => {
                        k || "Enter" !== e.key && " " !== e.key || (e.preventDefault(),
                        j())
                    }
                    ,
                    tabIndex: 0,
                    role: "button",
                    "aria-label": "Select ".concat(i, " section"),
                    onMouseEnter: () => {
                        k || x(s)
                    }
                    ,
                    onMouseLeave: () => {
                        k || x(null)
                    }
                    ,
                    children: (0,
                    a.jsx)("div", {
                        style: {
                            transform: M < 0 ? "translateX(".concat(-M, "px)") : ""
                        },
                        children: i
                    })
                })
            })
        }
          , nI = e => {
            var t;
            let {pixelsPerSecond: n} = e
              , r = (0,
            o.useRef)(null)
              , i = null === (t = eu()) || void 0 === t ? void 0 : t.id
              , s = eB(null != i ? i : "")
              , l = eh();
            return (0,
            a.jsx)("div", {
                ref: r,
                className: "absolute -top-7 flex h-7 select-none gap-1 overflow-hidden",
                style: {
                    width: "".concat(l * n, "px")
                },
                children: s.map( (e, t) => {
                    let r = tw.getState().getSectionColor;
                    return (0,
                    a.jsx)(nC, {
                        index: t,
                        id: e.id,
                        name: e.name,
                        start: e.start * n,
                        duration: e.duration * n,
                        sections: s,
                        color: r(e.name)
                    }, e.id)
                }
                )
            })
        }
          , nT = e => {
            let {sample: t, scrollContainerRef: n, playbackContainerRef: r} = e
              , i = (0,
            o.useRef)(null)
              , s = tw(e => e.showSongSections)
              , l = ev()
              , c = eC()
              , d = tw(e => e.replaceSelectionAreas)
              , u = tw(e => e.activeGenerations)
              , p = tw(e => e.replaceLyricsSelections)
              , m = eh()
              , {isLoading: g} = eU();
            return (0,
            o.useEffect)( () => {
                if (i.current) {
                    let e = m * c;
                    i.current.style.width = "".concat(e, "px")
                }
            }
            , [m, c]),
            (0,
            a.jsxs)("div", {
                ref: i,
                className: "relative flex h-[220px] text-session-gray-5",
                children: [s && !g && (0,
                a.jsx)(nI, {
                    pixelsPerSecond: c
                }), s && g && (0,
                a.jsxs)("div", {
                    className: "group absolute -top-7 flex h-7 w-full select-none",
                    children: [(0,
                    a.jsx)(t_.Z, {
                        className: "m-2 flex size-3 animate-spin items-center justify-center text-session-gray-5"
                    }), (0,
                    a.jsx)("p", {
                        className: "mt-1.5 text-xs text-session-gray-5",
                        children: "Loading sections..."
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: (0,
                    eQ.cn)("absolute inset-0 flex flex-col items-center justify-center gap-2"),
                    children: [d.length < 3 && d.length !== p.length + 1 && 0 === u.length && (0,
                    a.jsx)(ne, {
                        position: "bottom",
                        message: "Select the waveform region you want to replace.",
                        localStorageKey: v.NP
                    }), (0,
                    a.jsx)(nt, {}), (0,
                    a.jsx)(t6, {
                        pixelsPerSecond: c,
                        scrollContainerRef: n
                    }), (0,
                    a.jsx)(nk, {})]
                }), (0,
                a.jsx)(t5, {
                    sample: t,
                    clips: l,
                    scrollContainerRef: n,
                    playbackContainerRef: r
                })]
            })
        }
        ;
        let nE = e => {
            let {mode: t, status: n} = e
              , r = ( () => {
                switch (t) {
                case "extend-left":
                case "extend-right":
                    if ("idle" === n)
                        return "bg-session-accent";
                    return "bg-session-border-light";
                default:
                    return "bg-session-border-light"
                }
            }
            )()
              , i = Array.from({
                length: 5
            }, (e, t) => t);
            return (0,
            a.jsx)("div", {
                className: "flex h-full w-full items-center justify-center",
                children: (0,
                a.jsx)("div", {
                    className: "flex items-center justify-center space-x-2",
                    children: i.map( (e, t) => (0,
                    a.jsx)(tk.E.div, {
                        className: (0,
                        eQ.cn)("h-2 w-2 rounded-full", r),
                        animate: {
                            scale: [1, 1.5, 1],
                            opacity: [.4, 1, .4]
                        },
                        transition: {
                            duration: 1.5,
                            repeat: 1 / 0,
                            delay: .2 * t,
                            ease: "easeInOut"
                        }
                    }, t))
                })
            })
        }
        ;
        var nL = e => {
            let {contextMenu: t, containerHeight: n, scrollContainerRef: r} = e
              , i = tw(e => e.setIsDraggingTimelineElement)
              , [s,l] = (0,
            o.useState)(0)
              , c = eR()
              , [d,u] = (0,
            o.useState)(0)
              , [p,m] = (0,
            o.useState)(0)
              , [g,f] = (0,
            o.useState)(!1)
              , h = (0,
            o.useRef)(c)
              , x = (0,
            o.useRef)(p)
              , y = (0,
            o.useRef)(null)
              , S = (0,
            o.useRef)(0)
              , b = (0,
            o.useRef)(0)
              , w = (0,
            o.useRef)(0)
              , j = (0,
            o.useRef)()
              , {containerRef: k, width: M} = (0,
            t7.Z)()
              , N = (0,
            o.useRef)(M)
              , C = tw(e => e.zoomTo)
              , I = e => {
                j.current && cancelAnimationFrame(j.current),
                j.current = requestAnimationFrame( () => {
                    e(),
                    j.current = void 0
                }
                )
            }
            ;
            (0,
            o.useEffect)( () => {
                let e = Math.min(s / c, 1)
                  , t = s * e;
                m(t),
                x.current = t
            }
            , [s, c]),
            (0,
            o.useEffect)( () => {
                l(M),
                N.current = M
            }
            , [M]),
            (0,
            o.useEffect)( () => {
                h.current = c
            }
            , [c]),
            (0,
            o.useEffect)( () => () => {
                document.removeEventListener("mousemove", R),
                document.removeEventListener("mouseup", P)
            }
            , []);
            let T = (e, t) => {
                if (r.current) {
                    let n = e / (N.current - t);
                    r.current.scrollLeft = (h.current - N.current) * n
                }
            }
              , E = (e, t, n) => {
                u(Math.min(1, Math.max(0, e / (t - n - 1))) * (N.current - x.current))
            }
            ;
            (0,
            o.useEffect)( () => {
                if (g)
                    return;
                let e = e => {
                    let t = e.target;
                    E(t.scrollLeft, t.scrollWidth, t.clientWidth)
                }
                  , t = r.current;
                return t && t.addEventListener("scroll", e),
                () => {
                    t && t.removeEventListener("scroll", e)
                }
            }
            , [r, g]);
            let L = (e, t) => {
                e.preventDefault(),
                e.stopPropagation(),
                y.current = t,
                S.current = e.clientX,
                b.current = d,
                w.current = p,
                i(!0),
                f(!0),
                document.addEventListener("mousemove", R),
                document.addEventListener("mouseup", P),
                document.body.style.cursor = "grabbing"
            }
              , R = e => {
                if (r.current && M > 0) {
                    let t = e.clientX - S.current;
                    switch (y.current) {
                    case "left":
                        {
                            let e = Math.max(0, Math.min(b.current + t, s - 100))
                              , n = Math.max(100, Math.min(w.current + (e > 0 ? -(2 * t) : b.current - t), s - e))
                              , r = M / n;
                            r < v.aC.max && r > v.aC.min && (C(r),
                            I( () => {
                                u(e),
                                T(e, n)
                            }
                            ));
                            break
                        }
                    case "right":
                        {
                            let e = Math.max(0, Math.min(b.current - t, s - 100))
                              , n = Math.max(100, Math.min(w.current + (e > 0 ? 2 * t : b.current + t), s - e))
                              , r = M / n;
                            r < v.aC.max && r > v.aC.min && (C(r),
                            I( () => {
                                u(e),
                                T(e, n)
                            }
                            ));
                            break
                        }
                    default:
                        {
                            let e = s - w.current
                              , n = Math.max(0, Math.min(b.current + t, e));
                            I( () => {
                                u(n),
                                T(n, w.current)
                            }
                            )
                        }
                    }
                }
            }
              , P = e => {
                e.preventDefault(),
                e.stopPropagation(),
                j.current && (cancelAnimationFrame(j.current),
                j.current = void 0),
                document.removeEventListener("mousemove", R),
                document.removeEventListener("mouseup", P),
                document.body.style.cursor = "",
                setTimeout( () => {
                    i(!1)
                }
                , 0),
                f(!1),
                y.current = null
            }
            ;
            return (0,
            a.jsx)("div", {
                ref: k,
                className: "absolute left-[68px] right-[72px] z-10 flex h-4 gap-2 transition-all duration-300",
                style: {
                    bottom: t ? 328 : n / 2 - 134
                },
                children: (0,
                a.jsxs)(tk.E.div, {
                    className: (0,
                    eQ.cn)("absolute top-0 flex h-4 select-none justify-between rounded-full bg-session-gray-6", g ? "cursor-grabbing" : "cursor-grab", p < M || g ? "opacity-100" : "pointer-events-none opacity-0"),
                    style: {
                        x: "".concat(d, "px"),
                        width: "".concat(p, "px")
                    },
                    onMouseDown: e => L(e, null),
                    onClick: e => {
                        e.preventDefault(),
                        e.stopPropagation()
                    }
                    ,
                    children: [(0,
                    a.jsx)("div", {
                        className: "size-4 rounded-full bg-session-gray-5",
                        onMouseDown: e => L(e, "left")
                    }), (0,
                    a.jsx)("div", {
                        className: "size-4 rounded-full bg-session-gray-5",
                        onMouseDown: e => L(e, "right")
                    })]
                })
            })
        }
          , nR = () => {
            let e = (0,
            o.useRef)(null)
              , t = (0,
            o.useRef)(null)
              , [n,r] = (0,
            o.useState)(!1)
              , i = tw(e => e.contextMenu)
              , {containerRef: s, height: l} = (0,
            t7.Z)()
              , c = tw(e => e.setPlaybackContainerWidth)
              , d = tw(e => e.isDraggingTimelineElement)
              , u = tw(e => e.zoomBy)
              , p = tw(e => e.zoomMultiplier)
              , m = eu()
              , g = tw(e => e.setSelectionArea)
              , f = tw(e => e.setActiveTakesMenu)
              , h = tw(e => e.getTrimInitialStart)
              , x = () => {
                n || null !== h() || d || (f(null),
                g(null)),
                r(!1)
            }
            ;
            (0,
            o.useEffect)( () => {
                let e = e => {
                    (e.ctrlKey || e.metaKey) && e.preventDefault()
                }
                ;
                return window.addEventListener("wheel", e, {
                    passive: !1
                }),
                () => window.removeEventListener("wheel", e)
            }
            , []);
            let y = tw(e => e.pendingGenerationType);
            return (0,
            o.useEffect)( () => {
                if ("extend" === i && t.current) {
                    let e = setTimeout( () => {
                        t.current && t.current.scrollTo({
                            left: "section-left" === y || "intro" === y ? 0 : t.current.scrollWidth - t.current.clientWidth
                        })
                    }
                    , v.NS + 50);
                    return () => clearTimeout(e)
                }
            }
            , [i, y]),
            (0,
            o.useEffect)( () => {
                let t = () => {
                    e.current && c(e.current.clientWidth)
                }
                ;
                t();
                let n = e.current;
                if (!n)
                    return;
                let r = new ResizeObserver(e => {
                    for (let r of e)
                        r.target === n && t()
                }
                );
                return r.observe(n),
                () => {
                    r.disconnect()
                }
            }
            , [c, e]),
            (0,
            a.jsx)("div", {
                ref: s,
                className: "flex size-full flex-col items-center justify-center",
                onMouseDown: () => {
                    r(null !== h())
                }
                ,
                onClick: x,
                onKeyDown: e => {
                    "Escape" === e.key && x()
                }
                ,
                children: (0,
                a.jsx)("div", {
                    ref: e,
                    className: "relative flex size-full flex-col items-center justify-center",
                    children: (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)(nL, {
                            contextMenu: !!i,
                            containerHeight: l,
                            scrollContainerRef: t
                        }), (0,
                        a.jsxs)("div", {
                            id: "scroll-container",
                            ref: t,
                            className: "scrollbar-hide relative flex size-full flex-col overflow-x-auto overflow-y-hidden",
                            onWheel: e => {
                                if (!t.current || !e.ctrlKey && !e.metaKey)
                                    return;
                                e.preventDefault();
                                let n = t.current
                                  , r = n.getBoundingClientRect()
                                  , i = n.scrollLeft
                                  , s = e.clientX - r.left
                                  , l = 1 + .05 * Math.min(Math.abs(e.deltaY), 3)
                                  , a = e.deltaY > 0 ? 1 / l : l
                                  , o = Math.max(v.aC.min, Math.min(v.aC.max, p * a));
                                if (o === p)
                                    return;
                                let c = o / p * (i + s - 52) - (s - 52);
                                u(a),
                                requestAnimationFrame( () => {
                                    t.current && (t.current.scrollLeft = c)
                                }
                                )
                            }
                            ,
                            children: [(0,
                            a.jsx)("div", {
                                className: "flex h-full min-w-fit flex-col items-center justify-end",
                                children: m ? (0,
                                a.jsxs)("div", {
                                    className: "flex gap-[2px] py-10",
                                    children: [(0,
                                    a.jsx)(tG, {
                                        direction: "left"
                                    }), (0,
                                    a.jsx)(nT, {
                                        sample: m,
                                        scrollContainerRef: t,
                                        playbackContainerRef: e
                                    }), (0,
                                    a.jsx)(tG, {
                                        direction: "right"
                                    })]
                                }) : (0,
                                a.jsx)("div", {
                                    className: "flex h-[50px] w-[300px]",
                                    children: (0,
                                    a.jsx)(nE, {
                                        mode: "variation",
                                        status: "idle"
                                    })
                                })
                            }), (0,
                            a.jsx)(tk.E.div, {
                                className: "w-full shrink-0",
                                style: {
                                    minHeight: l / 2 - 134
                                },
                                animate: {
                                    height: i ? 328 : l / 2 - 134,
                                    transition: {
                                        duration: .3,
                                        ease: "easeInOut",
                                        delay: 0
                                    }
                                }
                            })]
                        })]
                    })
                })
            })
        }
          , nP = n(80914)
          , nG = n(1732)
          , n_ = n(37908);
        let nA = (0,
        N.g0)((0,
        P.v)())
          , nD = e => {
            let t = (0,
            o.useRef)(!1)
              , {mutateAsync: n} = (0,
            nG.Z)()
              , r = tw(e => e.setFolderId)
              , i = (null == e ? void 0 : e.title) ? Y(e.title) : "";
            (0,
            o.useEffect)( () => {
                (async () => {
                    if ("New Session" !== i && !t.current && i) {
                        t.current = !0;
                        let e = 0
                          , s = !1;
                        for (; !s && e < 3; )
                            try {
                                (await nA.listFolders({
                                    filter: new N.HD({
                                        searchQuery: n_.J,
                                        depth: {
                                            start: 1,
                                            end: 1
                                        }
                                    })
                                })).folders.find(e => e.name === n_.J) || await n({
                                    name: n_.J,
                                    parentId: ""
                                });
                                let e = await nA.listFolders({
                                    filter: new N.HD({
                                        searchQuery: i,
                                        depth: {
                                            start: 2,
                                            end: 2
                                        }
                                    })
                                });
                                e.folders.length > 0 && e.folders[0].parentName === n_.J && r(e.folders[0].id),
                                s = !0
                            } catch (t) {
                                e++,
                                console.error("Folder list/creation error (attempt ".concat(e, "/").concat(3, "):"), t),
                                e >= 3 ? d.Am.error("Failed to create session folder") : await new Promise(t => setTimeout(t, 1e3 * Math.pow(2, e - 1)))
                            }
                    }
                }
                )()
            }
            )
        }
          , nz = (e, t, n) => {
            let r = tw(e => e.addSample)
              , i = tw(e => e.initializeFromSample)
              , s = tw(e => e.loadSession)
              , l = en(e => e.getSessionForSongId)
              , a = tw(e => e.setName)
              , u = (0,
            c.useSearchParams)().get("uploadId")
              , p = (0,
            o.useRef)(!1)
              , m = (0,
            o.useRef)(!1)
              , g = (0,
            o.useRef)(!1)
              , f = (0,
            o.useRef)(!1)
              , {data: x, error: v} = (0,
            Q.Uw)(R.US, {
                id: null != e ? e : void 0
            })
              , y = (0,
            c.useRouter)();
            nD(null != x ? x : null);
            let S = (0,
            o.useCallback)(async e => {
                var t, n, s;
                let l = {
                    id: e.id,
                    type: "song",
                    song: e,
                    duration: null !== (t = e.duration) && void 0 !== t ? t : 0,
                    bpm: 120,
                    name: null !== (n = e.title) && void 0 !== n ? n : "Untitled Song",
                    userId: null !== (s = e.user_id) && void 0 !== s ? s : "",
                    lineage: [],
                    startTrim: 0,
                    stopTrim: 0
                };
                r(l),
                await i(l.id),
                p.current = !0
            }
            , [r, i]);
            return (0,
            o.useEffect)( () => {
                (e && t || u) && !p.current && !g.current && (g.current = !0,
                (async () => {
                    let a;
                    if (null == n ? void 0 : n.id) {
                        let e = await (0,
                        e6.EN)(n.file)
                          , t = {
                            type: "upload",
                            file: n.file,
                            url: n.url,
                            id: n.id,
                            duration: e,
                            startTrim: 0,
                            stopTrim: 0,
                            lineage: []
                        };
                        try {
                            r(t),
                            await i(t.id),
                            p.current = !0
                        } catch (e) {
                            p.current = !1,
                            y.push("/create"),
                            console.error("Failed to load session", e),
                            d.Am.error("Failed to load session", h.TQ)
                        }
                        return
                    }
                    !f.current && e && t && (a = await l(e, t),
                    f.current = !0,
                    !a && x && await S(x));
                    try {
                        a ? (s(a),
                        p.current = !0) : x && await S(x)
                    } finally {
                        g.current = !1
                    }
                }
                )())
            }
            , [r, i, s, e, t, x, l, n, u, S]),
            (0,
            o.useEffect)( () => {
                null !== v && (d.Am.error("Unable to load session", h.TQ),
                setTimeout( () => void y.push("/library"), 2e3))
            }
            , [v, y]),
            (0,
            o.useEffect)( () => {
                if (!u) {
                    if (null === e && !m.current) {
                        m.current = !0,
                        y.push("/library"),
                        d.Am.error("Song ID required to load session", h.TQ);
                        return
                    }
                    (null == x ? void 0 : x.song_path) && x.title && !p.current && a(Y(x.title))
                }
            }
            , [x, e, a, y, m, u]),
            {
                title: null == x ? void 0 : x.title
            }
        }
        ;
        function nF(e) {
            var t, n, r;
            let i = ( () => {
                let t = e.clipGroups;
                return 0 === t.length ? null : ed(t[0])
            }
            )()
              , s = null !== (t = null == i ? void 0 : i.duration) && void 0 !== t ? t : 0
              , l = e.clipGroups.length > 0 ? e.clipGroups[0].trimStart : 0
              , a = e.clipGroups.length > 0 ? e.clipGroups[0].trimEnd : 0
              , o = ( () => {
                if (e.loopingEnabled && e.loopBounds)
                    return {
                        start: Math.max(l, e.loopBounds.start),
                        end: Math.min(s - a, e.loopBounds.end)
                    }
            }
            )()
              , c = e.globalTempo / (null !== (n = null == i ? void 0 : i.bpm) && void 0 !== n ? n : 120);
            return {
                isPlaying: !!i && "playing" === e.playbackState,
                duration: s,
                sampleId: null !== (r = null == i ? void 0 : i.id) && void 0 !== r ? r : "",
                shift: 0,
                playbackRate: c,
                loopBounds: o,
                trimStart: l,
                trimEnd: a,
                globalVolume: e.globalMute ? 0 : e.globalVolume
            }
        }
        function nH(e) {
            let t = e => e.reduce( (e, t) => e + t.takes.length, 0);
            return e.reduce( (e, n) => e + t(n.clips), 0)
        }
        let nZ = () => {
            (0,
            o.useEffect)( () => {
                let e = tw.subscribe(async (e, t) => {
                    if (nH(e.clipGroups) !== nH(t.clipGroups) && tr(),
                    e.id !== t.id && e.clipGroups.length > 0 && e.clipGroups[0].latestSampleId) {
                        let t = e.samples[e.clipGroups[0].latestSampleId];
                        t && ta(t)
                    }
                    0 === e.clipGroups.length ? await ti() : await ts(nF(e), nF(t))
                }
                );
                return () => {
                    e(),
                    tw.getState().stop(),
                    ti()
                }
            }
            , [tw])
        }
        ;
        var nV = n(22942)
          , nO = n.n(nV)
          , nB = n(89660)
          , nU = n(15021)
          , nW = n(59325)
          , nq = n(27126)
          , nK = e => {
            let {size: t=16, className: n, contentClassName: r, children: i, ariaLabel: s="More info", title: l} = e
              , [c,d] = (0,
            o.useState)(!1)
              , u = (0,
            o.useCallback)( () => {
                d(!c)
            }
            , [c]);
            return (0,
            a.jsx)(nM.pn, {
                delayDuration: 300,
                children: (0,
                a.jsxs)(nM.u, {
                    open: c,
                    onOpenChange: d,
                    title: l,
                    children: [(0,
                    a.jsx)(nM.aJ, {
                        onClick: u,
                        children: (0,
                        a.jsx)(nq.Z, {
                            "aria-label": s,
                            className: n,
                            size: t
                        })
                    }), (0,
                    a.jsx)(nW.NM, {
                        children: (0,
                        a.jsx)(nM._v, {
                            className: (0,
                            eQ.cn)("max-w-[280px]", r),
                            children: i
                        })
                    })]
                })
            })
        }
          , nX = e => {
            let {title: t, children: n, className: r, tooltip: i} = e;
            return (0,
            a.jsxs)("div", {
                className: (0,
                eQ.cn)("group/submenu relative flex h-full max-h-[240px] flex-col gap-2 rounded-2xl bg-session-black p-4 text-session-gray-5 transition-all duration-300 hover:scale-[1.015]", r),
                children: [(0,
                a.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [(0,
                    a.jsx)("h3", {
                        className: "select-none text-[14px] font-medium transition-colors group-hover/submenu:text-session-gray-3",
                        children: t
                    }), i && (0,
                    a.jsx)(nK, {
                        className: "opacity-0 transition-opacity group-hover/submenu:opacity-100",
                        children: i
                    })]
                }), n]
            })
        }
          , nQ = n(81108)
          , nY = e => {
            let {name: t, id: n, ariaLabel: r, onValueChange: i, value: s, options: l, className: o} = e;
            return (0,
            a.jsx)(nQ.E, {
                name: t,
                id: n,
                "aria-label": r,
                onValueChange: i,
                value: s,
                className: (0,
                eQ.cn)("flex items-center gap-x-2 rounded-full bg-session-gray-8 p-2", o),
                children: l.map(e => (0,
                a.jsxs)("div", {
                    className: "relative w-full",
                    children: [(0,
                    a.jsx)(nQ.m, {
                        id: "".concat(n, "-").concat(e.value),
                        value: e.value,
                        className: "peer sr-only",
                        disabled: e.disabled,
                        onClick: () => {
                            if (!e.disabled) {
                                var t;
                                null === (t = e.onClick) || void 0 === t || t.call(e)
                            }
                        }
                    }), (0,
                    a.jsx)("label", {
                        htmlFor: "".concat(n, "-").concat(e.value),
                        className: (0,
                        eQ.cn)("flex w-full select-none items-center justify-center whitespace-nowrap rounded-full border border-session-gray-5 px-2 py-1 text-[10px] font-medium transition-colors", e.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer text-session-gray-5", e.disabled || s !== e.value ? !e.disabled && "hover:border-session-gray-3 hover:text-session-gray-3" : "border-transparent bg-session-gray-5 text-session-background group-hover/submenu:bg-session-gray-3"),
                        children: (0,
                        a.jsx)("span", {
                            children: e.title
                        })
                    })]
                }, "".concat(n, "-").concat(e.value)))
            }, n)
        }
        ;
        let nJ = {
            STANDARD: "w-[240px]",
            WIDE: "w-[360px]",
            POPOVER: "w-[300px]",
            RESPONSIVE: "w-full min-w-[240px] max-w-[360px]"
        };
        var n$ = e => {
            let {className: t} = e
              , n = tw(e => e.getLoadedSample())
              , r = tw(e => e.pendingGenerationType)
              , i = tw(e => e.setPendingGenerationType)
              , s = tw(e => e.activeGenerations)
              , l = (0,
            nB.c)(e => e.audioFile)
              , {setSamplerOptions: c} = (0,
            E.oo)("setSamplerOptions", "song_section_start")
              , d = C.hB.use.setMode()
              , u = (0,
            o.useMemo)( () => {
                switch (r) {
                case "intro":
                    return "intro";
                case "section-left":
                case "section-right":
                    return "middle";
                case "outro":
                    return "outro"
                }
            }
            , [r]);
            if (!n && !l)
                return null;
            let p = e => {
                switch (e) {
                case "intro":
                    c({
                        mode: "precede",
                        song_section_start: 0
                    }),
                    d("precede"),
                    (0,
                    nU.L9)("Select Extension Type", {
                        extensionType: "intro",
                        placement: "Pre-extension"
                    }),
                    i("intro");
                    break;
                case "middle":
                    {
                        let e = "intro" === r || "section-left" === r ? "precede" : "continuation";
                        c({
                            mode: e,
                            song_section_start: .4
                        }),
                        d(e),
                        (0,
                        nU.L9)("Select Extension Type", {
                            extensionType: "middle",
                            placement: e
                        }),
                        i("precede" === e ? "section-left" : "section-right");
                        break
                    }
                case "outro":
                    c({
                        mode: "continuation",
                        song_section_start: .9
                    }),
                    d("continuation"),
                    (0,
                    nU.L9)("Select Extension Type", {
                        extensionType: "outro",
                        placement: "Continuation"
                    }),
                    i("outro")
                }
            }
              , m = s.length > 0
              , g = m ? s[0].generationType : null
              , f = [{
                title: "INTRO",
                value: "intro",
                disabled: m && "continuation" === g
            }, {
                title: "SECTION",
                value: "middle"
            }, {
                title: "OUTRO",
                value: "outro",
                disabled: m && "precede" === g
            }];
            return (0,
            a.jsx)(a.Fragment, {
                children: u && (0,
                a.jsx)(nX, {
                    title: "Extension Placement",
                    className: (0,
                    eQ.cn)(nJ.RESPONSIVE, t),
                    tooltip: v.Gm,
                    children: (0,
                    a.jsx)(nY, {
                        options: f,
                        value: u,
                        onValueChange: e => {
                            let t = f.find(t => t.value === e);
                            if (null == t ? void 0 : t.disabled)
                                return;
                            let n = document.getElementById("scroll-container");
                            "intro" === e ? null == n || n.scrollTo({
                                left: 0,
                                behavior: "smooth"
                            }) : "outro" === e && (null == n || n.scrollTo({
                                left: n.scrollWidth,
                                behavior: "smooth"
                            })),
                            p(e)
                        }
                        ,
                        ariaLabel: "Extension placement",
                        name: "extension-placement"
                    })
                })
            })
        }
          , n0 = () => {
            let[e,t] = (0,
            o.useState)(0)
              , n = (0,
            o.useMemo)( () => ["Select a section and click Replace to quickly create a new one.", "You can find your songs in the Sessions folder in your Library.", "Hold the command/windows button and scroll for quick zooming.", "Press escape to close the panels and reset your view.", "Don’t worry—liked and disliked takes are still available in your library.", "Save a Version to revisit or branch out from this point in your workflow.", "Press spacebar to play and enter/return to go to the start.", "Zoom in and out with -/= for fine-tuning.", "Be specific—vivid prompts like “dreamy ambient piano with ocean waves” lead to better results."].sort( () => Math.random() - .5), []);
            return (0,
            a.jsxs)(nX, {
                title: "Tips",
                className: "relative h-full",
                children: [(0,
                a.jsx)("p", {
                    className: "text-session-gray-5 transition-colors group-hover/submenu:text-session-gray-3",
                    children: n[e]
                }), (0,
                a.jsx)("button", {
                    className: "absolute right-4 top-4 rounded-full border border-session-gray-4 px-2 text-[10px] text-session-gray-4 opacity-0 transition-all hover:border-transparent hover:bg-session-gray-4 hover:text-session-black group-hover/submenu:opacity-100",
                    onClick: () => {
                        e < n.length - 1 ? t(e + 1) : t(0)
                    }
                    ,
                    children: "NEXT"
                })]
            })
        }
          , n1 = e => (0,
        a.jsx)("svg", {
            width: 16,
            height: 17,
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0,
            a.jsx)("path", {
                id: "Vector",
                d: "M3.33333 8.5H2V14.5H8V13.1667H3.33333V8.5ZM8 3.83333H12.6667V8.5H14V2.5H8V3.83333Z",
                fill: "currentColor"
            })
        })
          , n2 = e => {
            let {showTips: t=!0} = e
              , {setSamplerOptionsItem: n, lyrics_type: r} = (0,
            E.oo)("setSamplerOptionsItem", "lyrics_type")
              , i = tw(e => e.contextMenu)
              , s = [{
                title: "AUTO GENERATE",
                value: "generate",
                hide: ["replace", "inpaint"].includes(null != i ? i : ""),
                onClick: () => {
                    c(!1)
                }
            }, {
                title: "CUSTOM",
                value: "user",
                onClick: () => {
                    c(!0)
                }
            }, {
                title: "INSTRUMENTAL",
                value: "instrumental",
                onClick: () => {
                    c(!1)
                }
            }]
              , l = tw(e => e.lyricsMenuOpen)
              , c = tw(e => e.setLyricsMenuOpen)
              , d = (0,
            o.useRef)(!1);
            return (0,
            o.useEffect)( () => {
                l || "user" !== r || d.current || (c(!0),
                d.current = !0)
            }
            , [r, l, c]),
            (0,
            a.jsxs)("div", {
                className: (0,
                eQ.cn)("flex h-full ".concat(nJ.WIDE, " grow-0 flex-col gap-y-4"), t && "row-span-2"),
                children: [(0,
                a.jsxs)(nX, {
                    title: "Lyrics",
                    className: "relative h-full gap-2",
                    tooltip: v.xs,
                    children: ["user" === r && (0,
                    a.jsx)("div", {
                        className: "absolute right-4 top-4 flex items-center justify-center opacity-0 transition-opacity group-hover/submenu:opacity-100",
                        children: (0,
                        a.jsx)("button", {
                            onClick: () => c(!0),
                            children: (0,
                            a.jsx)(n1, {
                                className: "size-4 text-session-gray-5 hover:text-session-gray-3 "
                            })
                        })
                    }), (0,
                    a.jsx)(nY, {
                        options: s.filter(e => !e.hide),
                        value: r,
                        onValueChange: e => {
                            n("lyrics_type", e),
                            (0,
                            nU.L9)("Select Lyric Type", {
                                lyricType: e
                            })
                        }
                        ,
                        ariaLabel: "Choose lyrics mode",
                        name: "lyrics-group"
                    })]
                }), t && (0,
                a.jsx)(n0, {})]
            })
        }
          , n3 = n(75406)
          , n5 = e => {
            let {value: t, onChange: n, title: r, min: i, max: s, step: l, className: o, trackingEvent: c, getTrackingData: d, minLabel: u, maxLabel: p, onBlur: m, disabled: g=!1} = e;
            return (0,
            a.jsxs)("div", {
                className: "mt-1 flex w-full grow flex-col gap-2",
                children: [(0,
                a.jsx)(n3.i, {
                    valuePercent: !0,
                    title: r,
                    min: i,
                    max: s,
                    value: [t],
                    onValueChange: e => {
                        n(e[0])
                    }
                    ,
                    disabled: g,
                    step: l,
                    className: (0,
                    eQ.cn)("z-10 w-full", o),
                    color: "bg-brand-accent",
                    trackingEvent: c,
                    getTrackingData: d,
                    variant: "session",
                    showValueLabel: !0,
                    onBlur: m
                }), (0,
                a.jsxs)("div", {
                    className: "flex select-none items-center justify-between text-[10px] text-session-gray-5 opacity-0 transition-opacity duration-300 group-hover/submenu:opacity-100",
                    children: [(0,
                    a.jsx)("span", {
                        className: "",
                        children: u
                    }), (0,
                    a.jsx)("span", {
                        className: "",
                        children: p
                    })]
                })]
            })
        }
          , n4 = () => {
            let[e,t] = (0,
            E.GG)("lyrics_strength");
            return (0,
            a.jsx)(nX, {
                title: "Lyrics Strength",
                className: nJ.STANDARD,
                tooltip: v.fc,
                children: (0,
                a.jsx)(n5, {
                    title: "Lyrics strength slider",
                    min: 0,
                    max: 1,
                    step: .01,
                    value: e || 0,
                    onChange: e => {
                        t(e)
                    }
                    ,
                    trackingEvent: "Adjust Lyrics Strength",
                    getTrackingData: e => ({
                        strength: e
                    }),
                    minLabel: "LOW",
                    maxLabel: "HIGH"
                })
            })
        }
          , n6 = () => {
            let e = nB.c.use.setModelVersion()
              , t = nB.c.use.setUseAllegro()
              , n = (0,
            E.ad)()
              , r = (0,
            E.Ax)()
              , i = (0,
            E.Zt)(e => e.use_style)
              , s = (0,
            o.useMemo)( () => r ? "".concat(n, "-allegro") : n, [n, r]);
            return (0,
            a.jsx)(nX, {
                title: "Model",
                className: nJ.STANDARD,
                tooltip: v.v5,
                children: (0,
                a.jsx)(nY, {
                    options: [{
                        value: "v1",
                        title: "V1",
                        disabled: i
                    }, {
                        value: "v1.5",
                        title: "V1.5"
                    }, {
                        value: "v1.5-allegro",
                        title: "V1.5 ALLEGRO",
                        disabled: i
                    }],
                    value: s,
                    onValueChange: n => {
                        if ("v1.5-allegro" === n) {
                            e("v1.5"),
                            t(!0),
                            (0,
                            nU.L9)("Select Model Version", {
                                modelVersion: "v1.5"
                            });
                            return
                        }
                        (0,
                        eY.HV)(n) && (e(n),
                        (0,
                        nU.L9)("Select Model Version", {
                            modelVersion: n
                        })),
                        t(!1)
                    }
                    ,
                    name: "model-version-selection",
                    ariaLabel: "Select model version"
                })
            })
        }
          , n9 = n(18803)
          , n7 = n(15872)
          , n8 = n(74741)
          , re = n(88599)
          , rt = n(3971)
          , rn = n(87001)
          , rr = n(91263)
          , ri = n(40416);
        let rs = n7.oG.slice(0, 25).map(e => ({
            label: e,
            value: e
        }));
        var rl = e => {
            var t;
            let {onEnter: n, refOverride: r} = e
              , i = (0,
            o.useRef)(null)
              , [s,l] = (0,
            o.useState)(!1)
              , [c,d] = (0,
            o.useState)([])
              , [u,p] = (0,
            E.GG)("prompt")
              , m = (0,
            E.Zt)(e => e.use_style)
              , {setInputCursorLocation: g, tagSuggestionData: f, addSuggestedTags: x, promptSuggestion: y} = (0,
            rt.Z)();
            (0,
            re.S)();
            let {setShowTagCompletions: S} = (0,
            rn.F)()
              , b = (null == f ? void 0 : f.completions.length) && u.length ? f.completions : rs;
            return (0,
            o.useEffect)( () => {
                (s && JSON.stringify(b) !== JSON.stringify(c) && b.length || !c.length && b.length) && d(b)
            }
            , [s, c, b]),
            (0,
            a.jsxs)(nX, {
                title: "Prompt",
                className: "row-span-2 ".concat(nJ.WIDE),
                tooltip: v.Gj,
                children: [(0,
                a.jsx)("textarea", {
                    ref: null != r ? r : i,
                    value: m ? "" : u,
                    enterKeyHint: n ? "go" : void 0,
                    onChange: e => {
                        p(e.target.value),
                        g(e.target.selectionStart)
                    }
                    ,
                    disabled: m,
                    onKeyDown: e => {
                        var t, s;
                        if ("Tab" === e.key) {
                            if (null == f ? void 0 : f.completions.length) {
                                e.preventDefault(),
                                x([f.completions[0].value]),
                                S(!1);
                                return
                            }
                            if ("" !== u)
                                return;
                            e.preventDefault(),
                            p(null !== (t = null == y ? void 0 : y.prompt) && void 0 !== t ? t : rr.H8)
                        }
                        /[a-zA-Z0-9-_ ]/.test(e.key) && l(!0),
                        "Enter" === e.key && (null == n || n()),
                        " " === e.key && e.stopPropagation(),
                        "Escape" === e.key && (null === (s = (null != r ? r : i).current) || void 0 === s || s.blur())
                    }
                    ,
                    className: (0,
                    eQ.cn)(["h-full w-full resize-none overflow-auto border-none bg-transparent pr-7 text-[14px] font-normal text-session-gray-3 placeholder-gray-4 outline-none focus:ring-0", c.length ? "mb-6" : ""]),
                    style: {
                        caretColor: h.DM.brandAccent
                    },
                    placeholder: m ? "Prompting disabled when using a style reference." : null !== (t = null == y ? void 0 : y.prompt) && void 0 !== t ? t : "A country song about two robots falling in love..."
                }), !m && (0,
                a.jsxs)("div", {
                    className: (0,
                    eQ.cn)("absolute bottom-4 left-0 mx-4 flex w-[calc(100%-32px)] items-center gap-2 opacity-0 transition-opacity", !!c.length && "group-hover/submenu:opacity-100"),
                    children: [(0,
                    a.jsx)("button", {
                        title: "Randomize prompt",
                        className: "pointer-events-none h-min transition ease-in-out hover:rotate-45 hover:scale-105 group-hover/submenu:pointer-events-auto md:block",
                        onClick: e => {
                            e.preventDefault();
                            let {prompt: t} = (0,
                            n8.O)();
                            p(t),
                            (0,
                            nU.L9)("Randomize Prompt", {})
                        }
                        ,
                        children: (0,
                        a.jsx)(n9.Z, {
                            className: "size-6 md:size-5"
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: "w-full overflow-hidden",
                        children: (0,
                        a.jsx)(ri.Z, {
                            variant: "session",
                            tagType: "Prediction",
                            tagList: c,
                            addSuggestedTags: e => {
                                l(!1),
                                x(e)
                            }
                            ,
                            gradientColor: "dark-gray"
                        })
                    })]
                })]
            })
        }
          , ra = () => {
            let[e,t] = (0,
            E.GG)("prompt_strength");
            return (0,
            a.jsx)(nX, {
                title: "Prompt Strength",
                className: nJ.STANDARD,
                tooltip: v.Ik,
                children: (0,
                a.jsx)(n5, {
                    title: "Prompt strength slider",
                    min: 0,
                    max: 1,
                    step: .01,
                    value: e || 0,
                    onChange: e => {
                        t(e)
                    }
                    ,
                    trackingEvent: "Adjust Prompt Strength",
                    getTrackingData: e => ({
                        strength: e
                    }),
                    minLabel: "LOW",
                    maxLabel: "HIGH"
                })
            })
        }
          , ro = n(20088)
          , rc = () => {
            var e;
            let[t,n] = (0,
            E.GG)("seed")
              , r = e => {
                n(e)
            }
            ;
            return (0,
            a.jsx)(nX, {
                title: "Seed",
                className: nJ.STANDARD,
                tooltip: v.z3,
                children: (0,
                a.jsx)(ro.Z, {
                    variant: "session",
                    value: null !== (e = null == t ? void 0 : t.toString()) && void 0 !== e ? e : "0",
                    title: "Set Seed",
                    className: "rounded-full text-sm text-muted-foreground",
                    copyEvent: "Copy Seed",
                    resetEvent: "Reset Seed",
                    randomizeEvent: "Randomize Seed",
                    trackingEvent: "Adjust Seed",
                    getTrackingData: e => ({
                        seed: e
                    }),
                    onChange: e => {
                        r(isNaN(Number(e)) ? 1 : Number(e))
                    }
                    ,
                    reset: () => {
                        r(-1)
                    }
                    ,
                    randomize: () => {
                        r(Math.floor(1e5 * Math.random()))
                    }
                })
            })
        }
          , rd = n(78031)
          , ru = n(10997)
          , rp = n(3172)
          , rm = n(10269)
          , rg = n(62587)
          , rf = n(62665)
          , rh = n(98521)
          , rx = n(90851)
          , rv = n(95333)
          , ry = () => {
            var e, t, n;
            let {data: r} = (0,
            Q.Y0)(R.US)
              , {preferences: i, refetch: s} = (0,
            Q.Gn)(R.US)
              , l = (0,
            X.WI)(R.US)
              , c = null !== (n = null == r ? void 0 : r.paidPlan) && void 0 !== n && n
              , {openSubscriptionModal: u} = (0,
            rg.We)()
              , [p,m] = (0,
            o.useState)("")
              , [g,f] = (0,
            o.useState)([])
              , [h,x] = (0,
            o.useState)(!1)
              , [y,S] = (0,
            o.useState)(null)
              , [b,w] = (0,
            o.useState)(!1)
              , [j,k] = (0,
            E.GG)("negative_prompt")
              , M = (0,
            o.useRef)("")
              , N = (0,
            o.useRef)(!1)
              , C = async e => (await R.bL.post("/api/searchtags", {
                partialTag: e,
                currentTags: []
            })).data.completions
              , I = () => {
                c || (d.Am.error("Please subscribe to unlock this feature"),
                u("Click Negative Prompt"))
            }
              , T = (0,
            o.useCallback)( () => {
                if (N.current)
                    return;
                let e = [...g.map(e => e.value), p.trim()].filter(Boolean).join(",");
                e !== j && (k(e),
                M.current = e,
                (0,
                nU.L9)("Adjust Negative Prompt", {
                    negativePrompt: e
                }))
            }
            , [g, p, k, j])
              , L = (0,
            o.useCallback)( () => {
                f([]),
                m(""),
                k("")
            }
            , [k])
              , P = e => {
                f(e.split(",").map(e => e.trim()).map(e => ({
                    label: e,
                    value: e
                }))),
                x(!1)
            }
              , G = (0,
            o.useCallback)( () => {
                if (c) {
                    let n = [...g.map(e => e.value), p.trim()].filter(Boolean).join(",");
                    if (n) {
                        var e, t;
                        let r = Array.from(new Set([...null !== (t = null == i ? void 0 : null === (e = i.presets) || void 0 === e ? void 0 : e.negativePromptPresets) && void 0 !== t ? t : [], n]));
                        w(!0),
                        l.mutate({
                            preferences: {
                                ...i,
                                presets: {
                                    negativePromptPresets: r
                                }
                            }
                        }, {
                            onSuccess: () => {
                                d.Am.success("New preset added successfully!"),
                                s(),
                                w(!1)
                            }
                            ,
                            onError: e => {
                                d.Am.error("Failed to add new preset"),
                                console.error("Error adding new preset:", e),
                                w(!1)
                            }
                        })
                    }
                }
            }
            , [c, g, p, i, l, s])
              , _ = (0,
            o.useCallback)(e => {
                if (c) {
                    var t, n, r;
                    let a = null !== (r = null == i ? void 0 : null === (n = i.presets) || void 0 === n ? void 0 : null === (t = n.negativePromptPresets) || void 0 === t ? void 0 : t.filter(t => t !== e)) && void 0 !== r ? r : [];
                    S(null),
                    l.mutate({
                        preferences: {
                            ...i,
                            presets: {
                                negativePromptPresets: a
                            }
                        }
                    }, {
                        onSuccess: () => {
                            d.Am.success("Preset removed successfully!"),
                            s()
                        }
                        ,
                        onError: e => {
                            d.Am.error("Failed to remove preset"),
                            console.error("Error removing preset:", e)
                        }
                    })
                }
            }
            , [c, i, l, s]);
            return (0,
            o.useEffect)( () => {
                T()
            }
            , [g, p, T]),
            (0,
            o.useLayoutEffect)( () => {
                if (j !== M.current) {
                    let e = null != j ? j : "";
                    N.current = !0,
                    f(e.split(",").map(e => e.trim()).filter(e => "" !== e).map(e => ({
                        label: e,
                        value: e
                    }))),
                    m(""),
                    M.current = e,
                    N.current = !1
                }
            }
            , [j]),
            (0,
            a.jsxs)(nX, {
                title: "Style Reduction",
                className: "relative row-span-2 ".concat(nJ.WIDE, " shrink-0"),
                tooltip: v.ef,
                children: [(0,
                a.jsx)("div", {
                    className: "w-full space-y-2",
                    children: (0,
                    a.jsxs)("div", {
                        className: "",
                        children: [(0,
                        a.jsx)(rx.Z, {
                            onFocusCallback: I,
                            value: g,
                            onChange: e => {
                                f(e),
                                m("")
                            }
                            ,
                            tagInputValue: p,
                            onInputValueChange: m,
                            onSearch: C,
                            placeholder: "What genres, styles, or concepts to avoid?",
                            className: "max-h-24 overflow-y-auto",
                            commandListClassName: "max-h-24 overflow-y-auto",
                            delay: 200,
                            clearOnSelect: !0,
                            stopSpacePropagation: !0
                        }), (0,
                        a.jsxs)("div", {
                            className: "absolute right-4 top-3 flex items-center space-x-1",
                            children: [(0,
                            a.jsxs)(rv.J2, {
                                open: h,
                                onOpenChange: x,
                                children: [(0,
                                a.jsx)(rv.xo, {
                                    asChild: !0,
                                    children: (0,
                                    a.jsx)(nv.z, {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "size-6",
                                        onClick: I,
                                        disabled: !c,
                                        title: "Select or add preset",
                                        children: (0,
                                        a.jsx)(rd.Z, {
                                            className: "size-4"
                                        })
                                    })
                                }), (0,
                                a.jsx)(rv.yk, {
                                    className: "".concat(nJ.POPOVER, " p-0"),
                                    children: (0,
                                    a.jsxs)(rf.mY, {
                                        children: [(0,
                                        a.jsx)(rf.sZ, {
                                            placeholder: "Search presets..."
                                        }), (0,
                                        a.jsx)(rf.rb, {
                                            children: "No preset found."
                                        }), (0,
                                        a.jsxs)(rf.e8, {
                                            children: [(0,
                                            a.jsx)(rf.fu, {
                                                children: null == i ? void 0 : null === (t = i.presets) || void 0 === t ? void 0 : null === (e = t.negativePromptPresets) || void 0 === e ? void 0 : e.map(e => (0,
                                                a.jsx)(rf.di, {
                                                    className: "flex cursor-pointer items-center justify-between",
                                                    onSelect: () => P(e),
                                                    children: (0,
                                                    a.jsxs)("div", {
                                                        className: "flex w-full items-center",
                                                        children: [(0,
                                                        a.jsx)(nv.z, {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            className: "ml-0 mr-2 size-4 shrink-0 px-0",
                                                            onClick: t => {
                                                                t.stopPropagation(),
                                                                S(e)
                                                            }
                                                            ,
                                                            title: "Remove preset",
                                                            children: (0,
                                                            a.jsx)(ru.Z, {
                                                                className: "size-4"
                                                            })
                                                        }), (0,
                                                        a.jsx)(nM.pn, {
                                                            children: (0,
                                                            a.jsxs)(nM.u, {
                                                                title: "Negative Prompt",
                                                                children: [(0,
                                                                a.jsx)(nM.aJ, {
                                                                    asChild: !0,
                                                                    children: (0,
                                                                    a.jsx)("span", {
                                                                        className: "truncate",
                                                                        children: e.split(",").join(", ")
                                                                    })
                                                                }), (0,
                                                                a.jsx)(nM._v, {
                                                                    children: (0,
                                                                    a.jsx)("p", {
                                                                        children: e
                                                                    })
                                                                })]
                                                            })
                                                        })]
                                                    })
                                                }, e))
                                            }), (0,
                                            a.jsx)(rf.fu, {
                                                children: (0,
                                                a.jsxs)(rf.di, {
                                                    onSelect: G,
                                                    className: "cursor-pointer",
                                                    children: [b ? (0,
                                                    a.jsx)(t_.Z, {
                                                        className: "mr-2 size-4 animate-spin"
                                                    }) : (0,
                                                    a.jsx)(rp.Z, {
                                                        className: "mr-2 size-4"
                                                    }), "Add current as preset"]
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            }), g.length > 0 && (0,
                            a.jsx)(nv.z, {
                                variant: "ghost",
                                size: "icon",
                                className: "size-6",
                                title: "Clear Style Reduction",
                                onClick: L,
                                disabled: !c || 0 === g.length && !p,
                                children: (0,
                                a.jsx)(rm.Z, {
                                    className: "size-4"
                                })
                            })]
                        })]
                    })
                }), (0,
                a.jsx)(rh.Vq, {
                    open: !!y,
                    onOpenChange: () => S(null),
                    children: (0,
                    a.jsxs)(rh.cZ, {
                        children: [(0,
                        a.jsxs)(rh.fK, {
                            children: [(0,
                            a.jsx)(rh.$N, {
                                children: "Confirm Deletion"
                            }), (0,
                            a.jsx)(rh.Be, {
                                children: "Are you sure you want to delete this preset? This action cannot be undone."
                            })]
                        }), (0,
                        a.jsxs)(rh.cN, {
                            className: "sm:justify-start",
                            children: [(0,
                            a.jsx)(nv.z, {
                                type: "button",
                                variant: "secondary",
                                onClick: () => S(null),
                                children: "Cancel"
                            }), (0,
                            a.jsx)(nv.z, {
                                type: "button",
                                variant: "destructive",
                                onClick: () => {
                                    y && _(y)
                                }
                                ,
                                children: "Delete"
                            })]
                        })]
                    })
                })]
            })
        }
          , rS = n(58410)
          , rb = n(2966)
          , rw = e => {
            let {children: t, onClick: n, disabled: r, tooltipText: i} = e
              , s = (0,
            a.jsxs)("button", {
                className: "group relative flex h-9 items-center justify-center overflow-hidden rounded-full px-7 py-2 text-md text-session-white disabled:cursor-default disabled:opacity-50",
                onClick: n,
                disabled: r,
                children: [(0,
                a.jsx)("span", {
                    className: "absolute inset-0 bg-gradient-to-tr from-[#E30B5D] via-[#A03E81] to-[#E30B5D] bg-[length:200%_200%] bg-[50%_50%] transition-all duration-500 ease-in-out group-hover:bg-[100%_0%]"
                }), (0,
                a.jsx)("div", {
                    className: "relative z-10 flex items-center justify-center gap-2",
                    children: t
                })]
            });
            return i ? (0,
            a.jsx)(nN, {
                text: i,
                className: "bg-session-gray-5 text-session-white",
                children: s
            }) : s
        }
        ;
        let rj = (0,
        N.g0)((0,
        P.v)())
          , rk = () => {
            let {mutateAsync: e} = (0,
            nG.Z)()
              , t = tw(e => e.setFolderId)
              , n = tw(e => e.folderId)
              , r = tw(e => e.name);
            return (0,
            o.useCallback)(async () => {
                if (n)
                    return n;
                let[i,s] = await Promise.all([rj.listFolders({
                    filter: new N.HD({
                        searchQuery: n_.J,
                        depth: {
                            start: 1,
                            end: 1
                        }
                    })
                }), rj.listFolders({
                    filter: new N.HD({
                        searchQuery: r,
                        depth: {
                            start: 2,
                            end: 2
                        }
                    })
                })])
                  , l = i.folders.find(e => e.name === n_.J);
                if (s.folders.length > 0) {
                    let e = s.folders.find(e => e.name === r);
                    if (e)
                        return t(e.id),
                        e.id
                }
                if (l) {
                    let {folder: n} = await e({
                        name: r,
                        parentId: l.id
                    });
                    n && t(n.id)
                }
            }
            , [e, t, n, r])
        }
        ;
        var rM = e => {
            let {children: t, disableCTA: n, ctaText: r, ctaIcon: i, showAdvancedOptionsToggle: s=!0, ctaTooltipText: l} = e
              , c = tw(e => e.requestGeneration)
              , d = rk()
              , u = tw(e => e.contextMenuAdvancedOptions)
              , p = tw(e => e.setContextMenuAdvancedOptions)
              , m = tw(e => e.loadingParametersFromSample)
              , g = (0,
            o.useRef)(null)
              , [f,h] = (0,
            o.useState)("start");
            return (0,
            a.jsxs)("div", {
                className: "flex h-full max-w-full flex-col overflow-hidden rounded-[26px] bg-session-gray-8 pb-4 text-session-text",
                children: [(0,
                a.jsx)("div", {
                    ref: g,
                    className: "scrollbar-hide grid h-full max-h-[268px] max-w-full grid-flow-col grid-rows-2 gap-4 overflow-x-auto p-4",
                    onScroll: () => {
                        g.current && (0 === g.current.scrollLeft ? h("start") : g.current.scrollLeft === g.current.scrollWidth - g.current.clientWidth ? h("end") : h(null))
                    }
                    ,
                    children: t
                }), (0,
                a.jsxs)("div", {
                    className: "relative flex items-center justify-center font-medium",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "flex items-center justify-center gap-6",
                        children: [s && (0,
                        a.jsxs)("button", {
                            onClick: () => p(!u),
                            className: "group flex items-center gap-2 text-session-gray-5 transition-colors hover:text-session-gray-4",
                            children: [(0,
                            a.jsx)("span", {
                                children: "Advanced Mode"
                            }), (0,
                            a.jsx)("span", {
                                className: (0,
                                eQ.cn)("rounded-full border border-session-gray-5 px-1 text-[10px] transition-colors", u ? "border-transparent bg-session-gray-5 text-session-gray-8 group-hover:bg-session-gray-4 " : "transition-[border-color] group-hover:border-session-gray-4"),
                                children: u ? "ON" : "OFF"
                            })]
                        }), (0,
                        a.jsxs)(rw, {
                            onClick: () => {
                                c();
                                try {
                                    d()
                                } catch (e) {
                                    console.warn("Failed to create song session folder", e)
                                }
                            }
                            ,
                            disabled: n,
                            tooltipText: l,
                            children: [(0,
                            a.jsx)("div", {
                                children: i
                            }), (0,
                            a.jsx)("span", {
                                children: r
                            })]
                        }), m && (0,
                        a.jsx)("div", {
                            className: (0,
                            eQ.cn)("absolute right-0 z-10 flex size-full w-[100px] items-center justify-center", u && "right-20"),
                            children: (0,
                            a.jsx)(nE, {
                                mode: "extend-left",
                                status: "generating"
                            })
                        })]
                    }), u && (0,
                    a.jsxs)("div", {
                        className: "absolute right-4 flex size-full w-min items-center justify-center gap-2",
                        children: [(0,
                        a.jsx)("button", {
                            onClick: () => {
                                g.current && g.current.scrollTo({
                                    left: 0,
                                    behavior: "smooth"
                                })
                            }
                            ,
                            className: (0,
                            eQ.cn)("flex size-[38px] items-center justify-center rounded-full bg-session-off-black transition-colors", "start" !== f && "bg-session-black hover:bg-session-gray-7"),
                            disabled: "start" === f,
                            children: (0,
                            a.jsx)(rS.Z, {
                                className: (0,
                                eQ.cn)("size-4 text-session-gray-4 transition-colors", "start" === f && "text-session-gray-6")
                            })
                        }), (0,
                        a.jsx)("button", {
                            onClick: () => {
                                g.current && g.current.scrollTo({
                                    left: g.current.scrollWidth,
                                    behavior: "smooth"
                                })
                            }
                            ,
                            className: (0,
                            eQ.cn)("flex size-[38px] items-center justify-center rounded-full bg-session-off-black transition-colors", "end" !== f && "bg-session-black hover:bg-session-gray-7"),
                            disabled: "end" === f,
                            children: (0,
                            a.jsx)(rb.Z, {
                                className: (0,
                                eQ.cn)("size-4 text-session-gray-4 transition-colors", "end" === f && "text-session-gray-6")
                            })
                        })]
                    })]
                })]
            })
        }
          , rN = () => {
            let[e,t] = (0,
            E.GG)("clarity_strength");
            return (0,
            a.jsx)(nX, {
                title: "Clarity",
                className: nJ.STANDARD,
                tooltip: v.Y$,
                children: (0,
                a.jsx)(n5, {
                    title: "Clarity strength slider",
                    min: 0,
                    max: 1,
                    step: .01,
                    value: e || 0,
                    onChange: e => {
                        t(e)
                    }
                    ,
                    trackingEvent: "Adjust Clarity Strength",
                    getTrackingData: e => ({
                        clarityStrength: e
                    }),
                    minLabel: "LOW",
                    maxLabel: "HIGH",
                    className: ""
                })
            })
        }
          , rC = () => {
            let[e,t] = (0,
            E.GG)("generation_quality");
            return (0,
            a.jsx)(nX, {
                title: "Generation Quality",
                className: nJ.STANDARD,
                tooltip: v.Ms,
                children: (0,
                a.jsx)(n5, {
                    title: "Generation quality slider",
                    min: .25,
                    max: 1,
                    step: .05,
                    value: e || 0,
                    onChange: e => {
                        t(e)
                    }
                    ,
                    trackingEvent: "Select Generation Quality",
                    getTrackingData: e => ({
                        quality: e
                    }),
                    minLabel: "LOW/FAST",
                    maxLabel: "HIGH/SLOW"
                })
            })
        }
          , rI = n(36120)
          , rT = n(45492)
          , rE = n(38514)
          , rL = n(23850);
        function rR(e) {
            let {file: t, onDurationLoad: n, preload: r="auto"} = e
              , i = (0,
            o.useRef)(null);
            return (0,
            o.useEffect)( () => {
                let e = i.current;
                if (!e)
                    return;
                let t = () => {
                    n(e.duration)
                }
                ;
                return e.addEventListener("loadedmetadata", t),
                () => {
                    e.removeEventListener("loadedmetadata", t)
                }
            }
            , [n]),
            (0,
            a.jsx)("audio", {
                ref: i,
                src: URL.createObjectURL(t),
                preload: r,
                className: "hidden"
            })
        }
        var rP = n(21099)
          , rG = e => {
            let {isOpen: t, onClose: n} = e;
            return (0,
            a.jsx)(rh.Vq, {
                open: t,
                onOpenChange: e => !e && n(),
                children: (0,
                a.jsxs)(rh.cZ, {
                    className: "border-zinc-800 bg-zinc-900 text-white sm:max-w-md",
                    children: [(0,
                    a.jsx)(rh.fK, {
                        children: (0,
                        a.jsx)(rh.$N, {
                            className: "text-white",
                            children: "Select Style Region"
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: "py-4",
                        children: (0,
                        a.jsx)(rP.Z, {
                            inDialog: !0
                        })
                    }), (0,
                    a.jsx)(rh.cN, {
                        children: (0,
                        a.jsx)(nv.z, {
                            onClick: n,
                            className: "bg-brand-accent text-white hover:bg-brand-accent/80",
                            children: "Save"
                        })
                    })]
                })
            })
        }
          , r_ = n(50294)
          , rA = n(34915)
          , rD = n(13043)
          , rz = n(80100);
        function rF(e) {
            let {sourceType: t, sourceData: n, isHovered: r, onMouseEnter: i, onMouseLeave: s, children: l} = e;
            return (0,
            a.jsx)("div", {
                className: "relative rounded-2xl bg-session-gray-8 p-3",
                onMouseEnter: i,
                onMouseLeave: s,
                children: (0,
                a.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [n.image_path && (0,
                    a.jsx)("div", {
                        className: "shrink-0",
                        children: (0,
                        a.jsx)("div", {
                            className: "h-10 w-10 overflow-hidden rounded-lg ".concat(r ? "opacity-50 blur-sm" : "opacity-80", " transition-all duration-100"),
                            children: (0,
                            a.jsx)(r_.default, {
                                src: n.image_path,
                                alt: n.title,
                                height: 40,
                                width: 40,
                                className: "h-full w-full rounded-lg object-cover transition-all duration-100 ".concat(r ? "opacity-50 blur-sm" : "")
                            })
                        })
                    }), (0,
                    a.jsxs)("div", {
                        className: "truncate text-session-gray-3 transition-all duration-100 ".concat(r ? "opacity-50 blur-sm" : ""),
                        children: [(0,
                        a.jsx)("div", {
                            className: "text-session-gray-5",
                            children: "song" === t ? "Song" : "Upload"
                        }), (0,
                        a.jsx)("div", {
                            className: "truncate text-sm font-medium text-session-gray-3",
                            children: n.title
                        })]
                    }), l]
                })
            })
        }
        function rH(e) {
            let {label: t, icon: n, onClick: r} = e;
            return (0,
            a.jsxs)(nv.z, {
                variant: "secondary",
                size: "sm",
                className: (0,
                eQ.cn)("flex w-full select-none items-center justify-center whitespace-nowrap rounded-full border-none px-3 py-0.5 text-[10px] font-medium transition-colors", "w-50 h-7 hover:border-session-gray-3 hover:text-session-gray-3", "gap-1 bg-session-gray-6 text-session-gray-4"),
                onClick: r,
                children: [(0,
                a.jsx)("span", {
                    children: t
                }), " ", n]
            })
        }
        function rZ(e) {
            var t, n;
            let {sourceSongData: r, setIsCropDialogOpen: i, isPlaceholder: s=!1, onAddClick: l} = e
              , c = (0,
            E.Zt)(e => e.setSamplerOptionsItem)
              , d = (0,
            o.useMemo)( () => (0,
            rD.I)(), [])
              , u = (0,
            L.w)(e => e.resetStyleSettings)
              , p = (0,
            L.w)(e => e.getStyleSettings())
              , m = (0,
            L.w)(e => e.sourceAudioFile)
              , g = nB.c.use.setModelVersion()
              , f = nB.c.use.setUseAllegro()
              , [x,v] = (0,
            o.useState)(!1)
              , y = () => {
                c("use_style", !1),
                c("use_allegro", !0),
                f(!0),
                g("v1.5"),
                u()
            }
              , [S,b] = (0,
            o.useState)(null)
              , w = m ? S && S > h.Uf : (null == r ? void 0 : r.duration) && r.duration > h.Uf
              , j = () => {
                i(!0)
            }
            ;
            return s && r ? (0,
            a.jsx)("div", {
                className: "flex flex-col gap-4 pb-6",
                children: (0,
                a.jsx)(rF, {
                    sourceType: "song",
                    sourceData: {
                        id: r.id,
                        title: null !== (t = r.title) && void 0 !== t ? t : "",
                        image_path: r.image_path,
                        duration: r.duration
                    },
                    isHovered: !1,
                    children: (0,
                    a.jsx)(nv.z, {
                        variant: "secondary",
                        size: "sm",
                        className: (0,
                        eQ.cn)("flex rounded-full font-medium transition-colors", "size-6 p-1 hover:border-session-gray-3 hover:text-session-gray-3", "bg-session-gray-6 text-session-gray-4"),
                        onClick: l,
                        children: (0,
                        a.jsx)(rp.Z, {
                            className: "size-4"
                        })
                    })
                })
            }) : (0,
            a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-6 pt-2",
                children: [m && (0,
                a.jsx)(rR, {
                    file: m.file,
                    onDurationLoad: b
                }), "song" === p.source.source_type && r && (0,
                a.jsx)(rF, {
                    sourceType: "song",
                    sourceData: {
                        id: r.id,
                        title: null !== (n = r.title) && void 0 !== n ? n : "",
                        image_path: r.image_path,
                        duration: r.duration
                    },
                    isHovered: x,
                    onMouseEnter: () => v(!0),
                    onMouseLeave: () => v(!1),
                    children: x && (0,
                    a.jsxs)("div", {
                        className: "absolute inset-0 z-10 flex items-center justify-center gap-2",
                        children: [(0,
                        a.jsx)(rH, {
                            label: "REMOVE",
                            icon: (0,
                            a.jsx)(rm.Z, {
                                className: "h-3 w-3"
                            }),
                            onClick: y
                        }), w && (0,
                        a.jsx)(rH, {
                            label: "EDIT",
                            icon: (0,
                            a.jsx)(rA.Z, {
                                className: "h-3 w-3"
                            }),
                            onClick: j
                        })]
                    })
                }), "file" === p.source.source_type && m && (0,
                a.jsx)(rF, {
                    sourceType: "file",
                    sourceData: {
                        id: m.file.name,
                        title: m.file.name,
                        image_path: d,
                        duration: S
                    },
                    isHovered: x,
                    onMouseEnter: () => v(!0),
                    onMouseLeave: () => v(!1),
                    children: x && (0,
                    a.jsxs)("div", {
                        className: "absolute inset-0 z-10 flex items-center justify-center gap-2 pr-3",
                        children: [(0,
                        a.jsx)(rH, {
                            label: "REMOVE",
                            icon: (0,
                            a.jsx)(rm.Z, {
                                className: "h-3 w-3"
                            }),
                            onClick: y
                        }), w && (0,
                        a.jsx)(rH, {
                            label: "EDIT",
                            icon: (0,
                            a.jsx)(rA.Z, {
                                className: "h-3 w-3"
                            }),
                            onClick: j
                        })]
                    })
                }), (0,
                a.jsx)(rz.Z, {
                    color: "#666666"
                })]
            })
        }
        var rV = () => {
            var e, t, n, r;
            let {openFileUpload: i, handleConfirmStyleUpload: s} = (0,
            rE.Z)()
              , {uploadConfirmationOpen: l, setUploadConfirmationOpen: c} = (0,
            rn.F)()
              , u = tw(e => e.loadingParametersFromSample)
              , p = (0,
            L.w)(e => e.sourceAudioFile)
              , m = (0,
            E.Zt)(e => e.use_style)
              , {handleConfirmAttestation: g, acceptedFiles: f} = (0,
            rT.Z)()
              , x = (0,
            E.Zt)(e => e)
              , y = (0,
            E.Zt)(e => e.setSamplerOptionsItem)
              , [S,b] = (0,
            o.useState)(!1)
              , w = (0,
            o.useRef)(new Set)
              , j = tw(e => e.getLoadedSample())
              , k = L.w.use.setSource()
              , M = L.w.use.setSourceSongData()
              , N = L.w.use.setSourceAudioFile()
              , C = L.w.use.setCropStart()
              , [I,T] = (0,
            o.useState)(!1)
              , {data: P} = (0,
            Q.Y0)(R.US)
              , {openSubscriptionModal: G} = (0,
            rg.We)()
              , {data: _, isLoading: A} = (0,
            Q.Uw)(R.US, (null === (e = x.style) || void 0 === e ? void 0 : e.source) ? {
                id: "song" === x.style.source.source_type ? x.style.source.song_id : null == j ? void 0 : j.id
            } : {
                id: ""
            })
              , D = (0,
            o.useCallback)(e => {
                setTimeout( () => {
                    let t = (null == p ? void 0 : p.file.name) || "";
                    I && e > h.Uf && t && !w.current.has(t) && (w.current.add(t),
                    b(!0))
                }
                , 200)
            }
            , [null == p ? void 0 : p.file.name]);
            return (0,
            a.jsx)(nX, {
                title: "Style Reference",
                className: "row-span-2 ".concat(nJ.STANDARD),
                tooltip: v._X,
                children: (0,
                a.jsxs)("div", {
                    className: "flex w-full max-w-xs flex-col gap-4",
                    children: [u || A ? (0,
                    a.jsx)("div", {
                        className: "mt-16",
                        children: (0,
                        a.jsx)(nE, {
                            mode: "variation",
                            status: "generating"
                        })
                    }) : (0,
                    a.jsxs)(a.Fragment, {
                        children: [!m && (0,
                        a.jsxs)("div", {
                            className: "mt-1 flex flex-col gap-4",
                            children: [!(null === (t = x.style) || void 0 === t ? void 0 : t.source) && (0,
                            a.jsx)("p", {
                                className: "text-sm text-session-gray-5",
                                children: "Upload an audio file to use it as a reference track."
                            }), (0,
                            a.jsxs)(nv.z, {
                                className: "flex w-fit items-center justify-center gap-2 rounded-full bg-session-gray-8 py-3 text-session-gray-5 transition-colors hover:bg-session-gray-7",
                                onClick: () => {
                                    if (!(null == P ? void 0 : P.proPlan)) {
                                        d.Am.error("Style feature is only available for Pro subscribers."),
                                        G("Click Upload Style Audio");
                                        return
                                    }
                                    i()
                                }
                                ,
                                children: [(0,
                                a.jsx)(rI.Z, {
                                    className: "size-4 text-session-gray-5"
                                }), (0,
                                a.jsx)("span", {
                                    className: "text-session-gray-5",
                                    children: "Upload File"
                                })]
                            }), (null === (n = x.style) || void 0 === n ? void 0 : n.source) && (0,
                            a.jsxs)("div", {
                                className: "flex flex-col gap-2 pt-3",
                                children: [(0,
                                a.jsx)("p", {
                                    className: "text-sm text-session-gray-5",
                                    children: "Previously Used Style"
                                }), (0,
                                a.jsx)(rZ, {
                                    sourceSongData: _,
                                    setIsCropDialogOpen: b,
                                    isPlaceholder: !0,
                                    onAddClick: () => {
                                        var e, t, n;
                                        y("use_style", !0),
                                        k({
                                            source_type: "song",
                                            song_id: null !== (t = null == _ ? void 0 : _.id) && void 0 !== t ? t : ""
                                        }),
                                        C(null !== (n = null === (e = x.style) || void 0 === e ? void 0 : e.crop_start) && void 0 !== n ? n : 0),
                                        N(void 0),
                                        M(_)
                                    }
                                })]
                            })]
                        }), m && (0,
                        a.jsx)(rZ, {
                            sourceSongData: _,
                            setIsCropDialogOpen: b
                        }), p && (0,
                        a.jsx)(rR, {
                            file: p.file,
                            onDurationLoad: D
                        }), (0,
                        a.jsx)(rL.Z, {
                            isOpen: l,
                            setIsOpen: c,
                            handleConfirmAttestation: m ? () => g("style") : g,
                            handleConfirmStyleUpload: () => (T(!0),
                            s()),
                            fileName: null === (r = f[0]) || void 0 === r ? void 0 : r.name
                        })]
                    }), (0,
                    a.jsx)(rG, {
                        isOpen: S,
                        onClose: () => b(!1)
                    })]
                })
            })
        }
          , rO = e => (0,
        a.jsxs)("svg", {
            width: "30",
            height: "25",
            viewBox: "0 0 30 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [(0,
            a.jsx)("path", {
                d: "M14.3219 4.65332H16.1703V19.7441H14.3219V4.65332ZM18.0188 13.1229H25.9542L21.9865 17.0907L23.2934 18.3975L29.4922 12.1987L23.2934 5.99989L21.9865 7.30675L25.9542 11.2745H18.0188V13.1229Z",
                fill: "currentColor"
            }), (0,
            a.jsx)("path", {
                d: "M12.473 11.2746H4.53755L8.50528 7.30686L7.19841 6L0.999596 12.1988L7.19841 18.3976L8.50528 17.0908L4.53755 13.123H12.473V11.2746Z",
                fill: "currentColor"
            })]
        })
          , rB = () => {
            let e = tw(e => e.pendingGenerationType)
              , t = ex(( () => {
                switch (e) {
                case "intro":
                case "section-left":
                    return "precede";
                case "section-right":
                case "outro":
                    return "continuation";
                case "inpaint":
                    return "inpaint";
                default:
                    return
                }
            }
            )())
              , n = tw(e => e.contextMenuAdvancedOptions);
            return (0,
            a.jsxs)(rM, {
                disableCTA: null !== t,
                ctaText: "Extend",
                ctaIcon: (0,
                a.jsx)(rO, {
                    className: "h-6"
                }),
                ctaTooltipText: null != t ? t : void 0,
                children: [(0,
                a.jsx)(rl, {}), (0,
                a.jsx)(rV, {}), (0,
                a.jsxs)("div", {
                    className: "row-span-2 grid h-full shrink-0 grid-rows-2 gap-4",
                    children: [(0,
                    a.jsx)(n2, {
                        showTips: !1
                    }), (0,
                    a.jsx)(n$, {
                        className: "row-span-1"
                    })]
                }), n && (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)(ry, {}), (0,
                    a.jsx)(ra, {}), (0,
                    a.jsx)(n4, {}), (0,
                    a.jsx)(rC, {}), (0,
                    a.jsx)(rN, {}), (0,
                    a.jsx)(n6, {}), (0,
                    a.jsx)(rc, {})]
                })]
            })
        }
          , rU = e => (0,
        a.jsxs)("svg", {
            width: "21",
            height: "24",
            viewBox: "0 0 21 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [(0,
            a.jsx)("path", {
                d: "M9.59874 10.992H11.869V17.8028H9.59874V10.992ZM14.1392 7.58665H16.4095V21.2081H14.1392V7.58665ZM5.05825 5.31641H7.3285V23.4784H5.05825V5.31641ZM18.6797 13.2623H20.95V15.5325H18.6797V13.2623ZM0.517761 12.1271H2.78801V16.6676H0.517761V12.1271Z",
                fill: "currentColor"
            }), (0,
            a.jsx)("path", {
                d: "M9.59874 6.65999H11.869V8.98636H9.59874V6.65999ZM14.1392 3.25462H16.4095V5.58643H14.1392V3.25462ZM5.05825 0.984375H7.3285V3.30908H5.05825V0.984375ZM18.6797 8.93023H20.95V11.2622H18.6797V8.93023ZM0.517761 7.79511H2.78801V10.1255H0.517761V7.79511Z",
                fill: "currentColor"
            })]
        })
          , rW = () => {
            let e = tw(e => e.pendingGenerationType)
              , t = ex(( () => {
                switch (e) {
                case "intro":
                case "section-left":
                    return "precede";
                case "section-right":
                case "outro":
                    return "continuation";
                case "inpaint":
                    return "inpaint";
                default:
                    return
                }
            }
            )())
              , n = tw(e => e.contextMenuAdvancedOptions)
              , r = tw(e => e.visuallySelectedSampleId)
              , i = ep(null != r ? r : void 0);
            return (0,
            a.jsxs)(rM, {
                disableCTA: null !== t || i,
                ctaText: "Generate Takes",
                ctaIcon: (0,
                a.jsx)(rU, {
                    className: "size-5"
                }),
                ctaTooltipText: null != t ? t : void 0,
                children: [(0,
                a.jsx)(rl, {}), (0,
                a.jsx)(rV, {}), (0,
                a.jsx)(n2, {}), n && (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)(ry, {}), (0,
                    a.jsx)(ra, {}), (0,
                    a.jsx)(n4, {}), (0,
                    a.jsx)(rC, {}), (0,
                    a.jsx)(rN, {}), (0,
                    a.jsx)(n6, {}), (0,
                    a.jsx)(rc, {})]
                })]
            })
        }
          , rq = () => {
            let e = ex("inpaint")
              , t = tw(e => e.visuallySelectedSampleId)
              , n = tw(e => e.replaceSelectionAreas)
              , r = ep(null != t ? t : void 0)
              , i = eH()
              , s = (0,
            o.useMemo)( () => i ? "Lyric alignment in progress" : 0 === n.length ? "Select a region on the timeline to replace" : null !== e ? e : void 0, [e, i, n])
              , l = tw(e => e.contextMenuAdvancedOptions);
            return (0,
            a.jsxs)(rM, {
                disableCTA: null !== e || r || 0 === n.length || i,
                ctaText: "Replace",
                ctaIcon: (0,
                a.jsx)(nx.Z, {
                    className: "size-5"
                }),
                ctaTooltipText: s,
                children: [(0,
                a.jsx)(rl, {}), (0,
                a.jsx)(rV, {}), (0,
                a.jsx)(n2, {}), l && (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)(ry, {}), (0,
                    a.jsx)(ra, {}), (0,
                    a.jsx)(n4, {}), (0,
                    a.jsx)(rC, {}), (0,
                    a.jsx)(rN, {}), (0,
                    a.jsx)(n6, {}), (0,
                    a.jsx)(rc, {})]
                })]
            })
        }
          , rK = e => {
            let {name: t, menu: n, setMenu: r, className: i, text: s, icon: l, disabled: o=!1, tooltipText: c, keyboardShortcut: d} = e
              , u = tw(e => e.setVisuallySelectedSampleId)
              , p = n === t;
            return (0,
            a.jsx)(nN, {
                text: c,
                keyboardShortcut: d,
                children: (0,
                a.jsxs)("button", {
                    className: (0,
                    eQ.cn)("group flex aspect-square h-full select-none flex-col items-center justify-between font-medium transition-colors duration-150 active:translate-y-px", i, p ? "session-off-white" : "text-session-text", !o && !p && "hover:text-session-text-light", o ? "opacity-30" : "group-active:translate-y-px"),
                    disabled: o,
                    onClick: () => {
                        p ? (r(null),
                        u(null)) : r(t)
                    }
                    ,
                    children: [l, (0,
                    a.jsx)("span", {
                        className: "leading-none",
                        children: s
                    })]
                })
            })
        }
          , rX = n(88146)
          , rQ = n(31001)
          , rY = n(79228)
          , rJ = () => {
            let {user: e} = (0,
            Q.aF)(R.US)
              , {data: t} = (0,
            Q.cO)(R.US, !!(null == e ? void 0 : e.id))
              , n = (0,
            o.useMemo)( () => (null == t ? void 0 : t.tier) === "free" || (null == t ? void 0 : t.subscription_status) === "trialing", [t])
              , {data: r} = (0,
            Q.Gr)(R.US, {
                id: null == e ? void 0 : e.id
            })
              , i = (0,
            o.useMemo)( () => {
                var e, r, i;
                return t && n ? Number(t.monthly_discretionary || 0) + (t.daily_throttle_limit - Number(t.daily_used || 0)) + Number(t.discretionary || 0) : Number(null !== (e = null == t ? void 0 : t.monthly_limit) && void 0 !== e ? e : 0) - Number(null !== (r = null == t ? void 0 : t.monthly_used) && void 0 !== r ? r : 0) + Number(null !== (i = null == t ? void 0 : t.discretionary) && void 0 !== i ? i : 0)
            }
            , [n, t]);
            return (0,
            a.jsxs)(rX.default, {
                href: "/account",
                className: "flex cursor-pointer items-center justify-start gap-4 self-start rounded-full bg-session-gray-8 p-2 pr-4 transition-colors hover:bg-session-gray-6",
                children: [(0,
                a.jsx)(rY.Z, {
                    profile: r,
                    className: "size-6"
                }), i ? (0,
                a.jsx)("span", {
                    className: "text-xs font-medium text-session-gray-5",
                    children: i
                }) : (0,
                a.jsx)(rQ.O, {
                    className: "size-4 w-8"
                })]
            })
        }
          , r$ = () => {
            let e = tw(e => e.contextMenu)
              , t = tw(e => e.setContextMenu)
              , [n,r] = (0,
            o.useState)(null)
              , [i,s] = (0,
            o.useState)(0)
              , l = tw(e => e.replaceSelectionAreas)
              , c = tw(e => e.initializeReplaceSelectionAreas)
              , d = tw(e => e.activeGenerations.some(e => "generating" === e.type && "inpaint" === e.generationType))
              , u = {
                regenerate: {
                    id: 0,
                    title: "regenerate"
                },
                extend: {
                    id: 1,
                    title: "extend"
                },
                replace: {
                    id: 2,
                    title: "replace"
                }
            }
              , p = e => {
                null === e ? (s(0),
                r(null)) : (null === n ? s(0) : s(e.id > n.id ? 1 : -1),
                r(e))
            }
            ;
            (0,
            o.useEffect)( () => {
                if (e)
                    switch (e) {
                    case "regenerate":
                        p(u.regenerate);
                        break;
                    case "extend":
                        p(u.extend);
                        break;
                    case "replace":
                        l.length || d || c(),
                        p(u.replace)
                    }
                else
                    p(null)
            }
            , [e, l, c, d]);
            let[m,g] = (0,
            o.useState)("context-menu");
            return (0,
            o.useEffect)( () => {
                null === e && g(nO()("context-menu"))
            }
            , [e]),
            (0,
            a.jsxs)("div", {
                id: "context-menu",
                className: (0,
                eQ.cn)("pointer-events-none relative flex h-[68px] w-full shrink-0 flex-col items-center justify-end text-sm transition-[height]"),
                style: {
                    transitionDuration: "300ms",
                    animationDuration: "300ms"
                },
                children: [(0,
                a.jsx)(tM.M, {
                    mode: "wait",
                    children: !!e && (0,
                    a.jsx)(tk.E.div, {
                        className: "absolute z-20 h-[320px] w-full min-w-[300px] max-w-full",
                        initial: "enter",
                        animate: "open",
                        exit: "exit",
                        variants: {
                            enter: {
                                opacity: 0,
                                bottom: 36
                            },
                            open: {
                                opacity: 1,
                                bottom: 68
                            },
                            exit: {
                                opacity: 0,
                                bottom: 36
                            }
                        },
                        transition: {
                            type: "spring",
                            damping: 32,
                            mass: 1,
                            stiffness: 400
                        },
                        children: (0,
                        a.jsx)(tM.M, {
                            initial: !1,
                            custom: i,
                            mode: "popLayout",
                            children: (0,
                            a.jsx)(tk.E.div, {
                                custom: i,
                                variants: {
                                    enter: e => ({
                                        x: 0 === e ? 0 : e > 0 ? "10px" : "-10px",
                                        opacity: 0,
                                        zIndex: 0
                                    }),
                                    center: {
                                        x: 0,
                                        opacity: 1,
                                        zIndex: 1,
                                        transition: {
                                            type: "easeInOut",
                                            duration: .3,
                                            delay: .2
                                        }
                                    },
                                    exit: e => ({
                                        x: 0 === e ? 0 : e < 0 ? "10px" : "-10px",
                                        opacity: 0,
                                        zIndex: 0,
                                        transition: {
                                            type: "easeInOut",
                                            duration: .15
                                        }
                                    })
                                },
                                initial: "enter",
                                animate: "center",
                                exit: "exit",
                                className: "pointer-events-auto mx-auto flex h-full max-w-min grow-0 flex-col",
                                children: null !== n && (0,
                                a.jsxs)(a.Fragment, {
                                    children: ["regenerate" === u[n.title].title && (0,
                                    a.jsx)(rW, {}), "extend" === u[n.title].title && (0,
                                    a.jsx)(rB, {}), "replace" === u[n.title].title && (0,
                                    a.jsx)(rq, {})]
                                })
                            }, null == n ? void 0 : n.title)
                        })
                    }, m)
                }), (0,
                a.jsxs)("div", {
                    className: "pointer-events-auto z-30",
                    children: [(0,
                    a.jsx)("div", {
                        className: "absolute bottom-0 left-0 flex items-center justify-center",
                        children: (0,
                        a.jsx)(rJ, {})
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex flex h-11 w-full items-center  items-center justify-center justify-center gap-4",
                        children: [(0,
                        a.jsx)(rK, {
                            name: "regenerate",
                            menu: e,
                            setMenu: t,
                            text: "Takes",
                            tooltipText: "Takes",
                            keyboardShortcut: "T",
                            icon: (0,
                            a.jsx)(rU, {})
                        }), (0,
                        a.jsx)(rK, {
                            name: "extend",
                            menu: e,
                            setMenu: t,
                            text: "Extend",
                            tooltipText: "Extend",
                            keyboardShortcut: "E",
                            icon: (0,
                            a.jsx)(rO, {})
                        }), (0,
                        a.jsx)(rK, {
                            name: "replace",
                            menu: e,
                            setMenu: t,
                            text: "Replace",
                            tooltipText: "Replace",
                            keyboardShortcut: "R",
                            icon: (0,
                            a.jsx)(nx.Z, {})
                        })]
                    })]
                })]
            })
        }
          , r0 = n(67488);
        async function r1(e, t, n) {
            if (0 === e.length)
                return [];
            try {
                let r = await R.US.getSongs(e, !0)
                  , i = e => e.parent_id && ("continuation" === e.audio_conditioning_type || "precede" === e.audio_conditioning_type) && function(e, t, n) {
                    for (let r of e.clips)
                        for (let e of r.takes) {
                            let r = n[e.sampleId];
                            if ((null == r ? void 0 : r.type) === "song" && r.song.id === t)
                                return !0
                        }
                    return !1
                }(t, e.parent_id, n);
                return r.filter(e => "inpaint" === e.audio_conditioning_type || i(e)).map(e => {
                    var t;
                    return {
                        songId: e.id,
                        parentId: null !== (t = e.parent_id) && void 0 !== t ? t : "",
                        generationType: e.audio_conditioning_type
                    }
                }
                )
            } catch (e) {
                return console.error("Error fetching pending songs:", e),
                []
            }
        }
        let r2 = () => {
            let {user: e} = (0,
            Q.aF)(R.US)
              , {results: t} = (0,
            Q.Xe)(R.US, {
                filters: {
                    likedOnly: !1,
                    publishedOnly: !1,
                    onlyTrees: !1,
                    searchTerm: "",
                    inFolder: ""
                },
                enabled: !!(null == e ? void 0 : e.id),
                limit: 10,
                page: 0
            })
              , [n,r] = (0,
            o.useState)(!1)
              , i = (0,
            T.Q)(e => e.isPolling)
              , s = (0,
            T.Q)(e => e.addGenerationItem)
              , l = (0,
            T.Q)(e => e.pollSupabaseForTrack);
            (0,
            o.useEffect)( () => {
                if (n && !i)
                    return;
                let e = t.data.filter(e => !e.song_path && !e.error_id && !e.error_type && e.generation_id);
                e.length > 0 && (Object.entries(e.reduce( (e, t) => {
                    if (t.generation_id) {
                        var n;
                        let r = t.generation_id;
                        e[r] = [...null !== (n = e[r]) && void 0 !== n ? n : [], t]
                    }
                    return e
                }
                , {})).forEach(e => {
                    let[t,n] = e;
                    if (null == n ? void 0 : n.length) {
                        var r;
                        s(null !== (r = n[0].prompt) && void 0 !== r ? r : "", "", t, n.map(e => e.id))
                    }
                }
                ),
                (async () => {
                    await l()
                }
                )(),
                r(!0))
            }
            , [t.data.length])
        }
          , r3 = ni()( () => {
            ew()
        }
        , 200)
          , r5 = () => {
            let e = tw((0,
            K.N)(e => e.clipGroups))
              , t = tw((0,
            K.N)(e => e.samples))
              , n = tw((0,
            K.N)(e => e.sectionMap))
              , r = tw((0,
            K.N)(e => e.checkpoints));
            (0,
            o.useEffect)( () => {
                if (0 !== e.length)
                    return r3(),
                    () => {
                        r3.cancel()
                    }
            }
            , [e, t, n, r])
        }
          , r4 = () => {
            let e = eu()
              , t = ( () => {
                let t = (null == e ? void 0 : e.type) === "song" ? e.song : null;
                return (null == t ? void 0 : t.lyrics) && t.lyrics.trim().length > 0 ? t.id : void 0
            }
            )()
              , n = ( () => {
                var t;
                let n = (null == e ? void 0 : e.type) === "song" ? e.song : null;
                return null !== (t = null == n ? void 0 : n.song_path) && void 0 !== t ? t : void 0
            }
            )()
              , {error: r} = (0,
            Q.BT)(R.US, {
                id: t,
                songPath: n
            });
            (0,
            o.useEffect)( () => {
                r && console.warn("Failed to fetch lyric alignment data for sample ".concat(null == e ? void 0 : e.id), (0,
                et.n)(r))
            }
            , [r, null == e ? void 0 : e.id])
        }
          , r6 = e => {
            let[t,n] = (0,
            o.useState)(null)
              , r = tw(e => e.setName)
              , i = (0,
            nB.c)(e => e.audioFile)
              , s = (0,
            c.useRouter)();
            return (0,
            o.useEffect)( () => {
                e && (async () => {
                    try {
                        let t = await (async () => {
                            let t = await (0,
                            e6.ce)(e);
                            if (t)
                                return t;
                            if (!i)
                                return null;
                            let n = {
                                id: e,
                                file: i.file,
                                url: i.url
                            };
                            return await (0,
                            e6.rH)(e, n),
                            n
                        }
                        )();
                        if (!t)
                            throw Error("No file found");
                        n(t),
                        r(Y((0,
                        eQ.Ho)(t.file.name)))
                    } catch (e) {
                        console.error("Failed to load audio file:", e),
                        s.push("/create")
                    }
                }
                )()
            }
            , [r, s, e, i]),
            t
        }
        ;
        var r9 = {
            src: "/_next/static/media/session-logo.2cd83823.svg",
            height: 20,
            width: 19,
            blurWidth: 0,
            blurHeight: 0
        }
          , r7 = n(12370)
          , r8 = e => {
            let {isEditable: t=!1, disabled: n=!1} = e
              , r = tw(e => e.globalTempo)
              , i = tw(e => e.setGlobalTempo)
              , [s,l] = (0,
            o.useState)(r);
            return (0,
            a.jsx)("div", {
                className: (0,
                eQ.cn)("flex h-[38px] items-center gap-2 rounded-full bg-session-gray-8 px-4 py-[2px]", n && "opacity-50"),
                children: (0,
                a.jsx)("span", {
                    className: "rounded-full border border-session-gray-5 px-2 py-[2px] text-[10px] text-session-gray-5",
                    children: t ? (0,
                    a.jsx)("input", {
                        id: "bpm-input",
                        type: "number",
                        min: 20,
                        max: 200,
                        className: "w-6 text-center [-moz-appearance:_textfield] focus-visible:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none",
                        value: s,
                        onChange: e => {
                            l(Number(parseFloat(e.target.value).toString()))
                        }
                        ,
                        onBlur: () => {
                            switch (!0) {
                            case !s:
                                l(120);
                                break;
                            case s > 200:
                                l(200);
                                break;
                            case s < 20:
                                l(20);
                                break;
                            default:
                                i(s)
                            }
                        }
                    }) : (0,
                    a.jsx)("span", {
                        children: r
                    })
                })
            })
        }
          , ie = n(39937);
        let it = e => {
            let {children: t, className: n="", gradientBorder: r=!1, selected: i=!1, disabled: s=!1, tooltipText: l, keyboardShortcut: o, ...c} = e
              , d = (0,
            eQ.cn)("flex h-[38px] min-w-[38px] items-center justify-center rounded-full border border-2 border-[transparent] bg-session-gray-8 p-px text-session-gray-5 transition-colors duration-100 ease-in-out hover:text-session-white", i && "border border-2 border-session-gray-6 text-session-white")
              , u = (0,
            eQ.cn)(n, d);
            if ("href"in c) {
                let e = (0,
                a.jsx)(rX.default, {
                    href: c.href,
                    className: u,
                    children: t
                });
                return l ? (0,
                a.jsx)(nN, {
                    text: l,
                    keyboardShortcut: o,
                    children: e
                }) : e
            }
            let p = (0,
            a.jsx)("button", {
                disabled: s,
                className: u,
                ...c,
                children: (0,
                a.jsx)("div", {
                    className: (0,
                    eQ.cn)("flex size-full items-center justify-center rounded-full", r && "bg-[#121111]"),
                    children: t
                })
            });
            return l ? (0,
            a.jsx)(nN, {
                text: l,
                keyboardShortcut: o,
                children: p
            }) : p
        }
        ;
        it.displayName = "NavToggleButton";
        var ir = () => (0,
        a.jsx)(it, {
            href: "/library",
            tooltipText: "Library",
            "aria-label": "Library",
            children: (0,
            a.jsx)(ie.Z, {
                size: 18
            })
        })
          , ii = n(12439)
          , is = n(58248)
          , il = n(5025)
          , ia = n(64466)
          , io = () => {
            let[e,t] = (0,
            o.useState)({
                fps: 60,
                memoryUsage: 0,
                memoryLimit: 0,
                audioLatency: 0,
                cpuUsage: 0
            })
              , [n,r] = (0,
            o.useState)(!1)
              , [i,s] = (0,
            o.useState)([])
              , [l,c] = (0,
            o.useState)([])
              , d = (0,
            o.useRef)(0)
              , u = (0,
            o.useRef)(performance.now())
              , p = (0,
            o.useCallback)( () => {
                let e = performance.now()
                  , n = e - u.current;
                if (n >= 1e3) {
                    let r = Math.round(1e3 * d.current / n);
                    t(e => ({
                        ...e,
                        fps: r
                    })),
                    s(e => [...e.slice(-9), r]),
                    d.current = 0,
                    u.current = e
                } else
                    d.current += 1
            }
            , [])
              , m = (0,
            o.useCallback)( () => {
                if ("memory"in performance) {
                    let e = performance;
                    if (e.memory) {
                        let n = e.memory
                          , r = Math.round(n.usedJSHeapSize / 1024 / 1024)
                          , i = Math.round(n.jsHeapSizeLimit / 1024 / 1024);
                        t(e => ({
                            ...e,
                            memoryUsage: r,
                            memoryLimit: i
                        })),
                        c(e => [...e.slice(-9), r])
                    }
                }
                try {
                    let e = window.audioContext;
                    if (e && "number" == typeof e.baseLatency) {
                        let n = Math.round(1e3 * e.baseLatency);
                        t(e => ({
                            ...e,
                            audioLatency: n
                        }))
                    }
                } catch (e) {}
                let e = performance.getEntriesByType("measure");
                if (e.length > 0) {
                    let n = performance.now()
                      , r = e.filter(e => n - e.startTime < 5e3)
                      , i = 0;
                    if (r.length > 0) {
                        let e = r.length / 5;
                        i = e < 2 ? 10 : e < 5 ? 25 : e < 10 ? 50 : e < 20 ? 75 : 90;
                        let t = r.reduce( (e, t) => e + t.duration, 0) / r.length;
                        t > 100 ? i = Math.min(i + 15, 100) : t > 50 && (i = Math.min(i + 10, 100))
                    }
                    t(e => ({
                        ...e,
                        cpuUsage: i
                    }))
                }
            }
            , []);
            (0,
            o.useEffect)( () => {
                let e;
                let t = () => {
                    p(),
                    e = requestAnimationFrame(t)
                }
                ;
                return e = requestAnimationFrame(t),
                () => {
                    cancelAnimationFrame(e)
                }
            }
            , [p]),
            (0,
            o.useEffect)( () => {
                let e = setInterval(m, 1e3);
                return () => clearInterval(e)
            }
            , [m]);
            let g = e => {
                if (e.length < 2)
                    return "stable";
                let t = e[e.length - 1]
                  , n = e[e.length - 2];
                return 2 > Math.abs(t - n) ? "stable" : t > n ? "up" : "down"
            }
              , f = (t, n) => {
                switch (n) {
                case "fps":
                    if (t >= 55)
                        return "text-green-400";
                    if (t >= 30)
                        return "text-yellow-400";
                    return "text-red-400";
                case "memory":
                    {
                        let n = t / e.memoryLimit * 100;
                        if (n < 70)
                            return "text-green-400";
                        if (n < 85)
                            return "text-yellow-400";
                        return "text-red-400"
                    }
                case "cpu":
                    if (t < 50)
                        return "text-green-400";
                    if (t < 75)
                        return "text-yellow-400";
                    return "text-red-400";
                default:
                    return "text-session-text"
                }
            }
              , h = e => {
                let {trend: t} = e;
                switch (t) {
                case "up":
                    return (0,
                    a.jsx)(ii.Z, {
                        size: 12,
                        className: "text-green-400"
                    });
                case "down":
                    return (0,
                    a.jsx)(is.Z, {
                        size: 12,
                        className: "text-red-400"
                    });
                default:
                    return (0,
                    a.jsx)(il.Z, {
                        size: 12,
                        className: "text-gray-400"
                    })
                }
            }
            ;
            return (0,
            a.jsxs)("div", {
                className: "relative",
                children: [(0,
                a.jsxs)("button", {
                    onClick: () => r(!n),
                    className: "flex items-center gap-2 rounded px-2 py-1 text-xs text-session-text transition-colors hover:bg-session-gray-7",
                    title: "Performance Monitor",
                    children: [(0,
                    a.jsx)(ia.Z, {
                        size: 14
                    }), (0,
                    a.jsxs)("span", {
                        className: f(e.fps, "fps"),
                        children: [e.fps, "fps"]
                    })]
                }), n && (0,
                a.jsx)("div", {
                    className: "absolute right-0 top-full z-50 mt-2 w-64 rounded-[16px] border border-session-gray-6 bg-session-gray-8 p-3 shadow-lg",
                    children: (0,
                    a.jsxs)("div", {
                        className: "space-y-3",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0,
                            a.jsx)("h3", {
                                className: "text-sm font-medium text-session-text",
                                children: "Performance"
                            }), (0,
                            a.jsx)("button", {
                                onClick: () => r(!1),
                                className: "text-session-text hover:text-white",
                                children: "\xd7"
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "space-y-2 text-xs",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0,
                                a.jsx)("span", {
                                    className: "text-session-gray-5",
                                    children: "FPS"
                                }), (0,
                                a.jsxs)("div", {
                                    className: "flex items-center gap-1",
                                    children: [(0,
                                    a.jsx)("span", {
                                        className: f(e.fps, "fps"),
                                        children: e.fps
                                    }), (0,
                                    a.jsx)(h, {
                                        trend: g(i)
                                    })]
                                })]
                            }), e.memoryLimit > 0 && (0,
                            a.jsxs)(a.Fragment, {
                                children: [(0,
                                a.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [(0,
                                    a.jsx)("span", {
                                        className: "text-session-gray-5",
                                        children: "Memory"
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "flex items-center gap-1",
                                        children: [(0,
                                        a.jsxs)("span", {
                                            className: f(e.memoryUsage, "memory"),
                                            children: [e.memoryUsage, "MB"]
                                        }), (0,
                                        a.jsx)(h, {
                                            trend: g(l)
                                        })]
                                    })]
                                }), (0,
                                a.jsx)("div", {
                                    className: "h-1 overflow-hidden rounded-full bg-session-gray-6",
                                    children: (0,
                                    a.jsx)("div", {
                                        className: "h-full transition-all duration-300 ".concat(e.memoryUsage / e.memoryLimit * 100 > 85 ? "bg-red-400" : e.memoryUsage / e.memoryLimit * 100 > 70 ? "bg-yellow-400" : "bg-green-400"),
                                        style: {
                                            width: "".concat(Math.min(e.memoryUsage / e.memoryLimit * 100, 100), "%")
                                        }
                                    })
                                })]
                            }), e.cpuUsage > 0 && (0,
                            a.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0,
                                a.jsx)("span", {
                                    className: "text-session-gray-5",
                                    children: "CPU Usage"
                                }), (0,
                                a.jsxs)("span", {
                                    className: f(e.cpuUsage, "cpu"),
                                    children: [e.cpuUsage, "%"]
                                })]
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "border-t border-session-gray-6 pt-2",
                            children: (0,
                            a.jsxs)("div", {
                                className: "space-y-1 text-xs text-session-gray-5",
                                children: [e.fps < 30 && (0,
                                a.jsx)("div", {
                                    className: "text-yellow-400",
                                    children: "⚠ Low FPS detected"
                                }), e.memoryUsage / e.memoryLimit * 100 > 85 && (0,
                                a.jsx)("div", {
                                    className: "text-red-400",
                                    children: "⚠ High memory usage"
                                }), e.cpuUsage > 75 && (0,
                                a.jsx)("div", {
                                    className: "text-red-400",
                                    children: "⚠ High CPU usage"
                                }), e.fps >= 55 && e.memoryUsage / e.memoryLimit * 100 < 70 && e.cpuUsage < 50 && (0,
                                a.jsx)("div", {
                                    className: "text-green-400",
                                    children: "✓ Performance looks good"
                                })]
                            })
                        })]
                    })
                })]
            })
        }
          , ic = n(72870)
          , id = () => {
            let e = tw(e => e.showSongSections)
              , t = tw(e => e.toggleShowSongSections);
            return (0,
            a.jsx)(it, {
                selected: e,
                onClick: t,
                tooltipText: "Song Sections",
                "aria-label": "Song Sections",
                "aria-selected": e,
                keyboardShortcut: "S",
                children: (0,
                a.jsx)(ic.Z, {
                    size: 16
                })
            })
        }
          , iu = n(52377)
          , ip = e => (0,
        a.jsxs)("svg", {
            width: "25",
            height: "26",
            viewBox: "0 0 25 26",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [(0,
            a.jsx)("path", {
                d: "M12.0717 13.0006V7.98828L5.05443 13.0006L12.0717 18.0129V13.0006ZM19.089 7.98828L12.0717 13.0006L19.089 18.0129V7.98828Z",
                fill: "currentColor"
            }), (0,
            a.jsx)("path", {
                d: "M3.20166 7.98828H5.04689V18.0137H3.20166V7.98828Z",
                fill: "currentColor"
            })]
        })
          , im = e => (0,
        a.jsxs)("svg", {
            width: "17",
            height: "17",
            viewBox: "0 0 17 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [(0,
            a.jsx)("path", {
                d: "M11.125 14.6992C13.4763 13.6679 15.1243 11.4266 15.1243 8.69922C15.1243 5.97189 13.4763 3.73055 11.125 2.69922V4.03255C12.7163 4.95655 13.791 6.73055 13.791 8.69922C13.791 10.6679 12.7163 12.4419 11.125 13.3659V14.6992Z",
                fill: "currentColor"
            }), (0,
            a.jsx)("path", {
                d: "M11.1224 5.36589V12.0326C11.9391 11.2992 12.4557 9.87989 12.4557 8.69922C12.4557 7.51855 11.9391 6.09922 11.1224 5.36589ZM3.1224 12.0326H4.9204L8.7524 14.5872C8.85292 14.654 8.96961 14.6923 9.09014 14.6982C9.21066 14.7041 9.33053 14.6772 9.43706 14.6206C9.54347 14.5636 9.63241 14.4788 9.6944 14.3752C9.75639 14.2717 9.78911 14.1532 9.78906 14.0326V3.36589C9.789 3.2453 9.75623 3.12698 9.69424 3.02354C9.63226 2.92011 9.54337 2.83542 9.43706 2.7785C9.33075 2.72158 9.21099 2.69456 9.09054 2.70033C8.97009 2.70609 8.85346 2.74441 8.75306 2.81122L4.9204 5.36589H3.1224C2.38706 5.36589 1.78906 5.96389 1.78906 6.69922V10.6992C1.78906 11.4346 2.38706 12.0326 3.1224 12.0326ZM3.1224 6.69922H5.1224C5.1444 6.69922 5.16306 6.68855 5.1844 6.68655C5.27307 6.67751 5.35912 6.65124 5.43773 6.60922C5.45506 6.59922 5.47573 6.59789 5.4924 6.58722L8.45573 4.61122V12.7872L5.4924 10.8112C5.47573 10.7999 5.45506 10.7979 5.43773 10.7892C5.359 10.7463 5.27234 10.72 5.18306 10.7119C5.16173 10.7099 5.14373 10.6992 5.1224 10.6992H3.1224V6.69922Z",
                fill: "currentColor"
            })]
        })
          , ig = e => (0,
        a.jsx)("svg", {
            width: "17",
            height: "17",
            viewBox: "0 0 17 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0,
            a.jsx)("path", {
                d: "M15.3758 14.3742L13.9429 12.9412C15.0057 11.7062 15.5878 10.1294 15.5826 8.5C15.5826 5.60221 13.8316 3.22079 11.3334 2.125V3.54166C13.0241 4.52341 14.166 6.40829 14.166 8.5C14.1629 9.75839 13.7468 10.981 12.9816 11.98L12.0714 11.0698C12.4979 10.2963 12.75 9.34291 12.75 8.5C12.75 7.24554 12.2011 5.7375 11.3334 4.95833V10.3317L9.91669 8.91508V2.83333C9.91662 2.70521 9.8818 2.5795 9.81594 2.46959C9.75008 2.35969 9.65564 2.26971 9.54269 2.20923C9.42973 2.14876 9.30249 2.12005 9.17451 2.12617C9.04653 2.1323 8.9226 2.17302 8.81594 2.244L5.47331 4.47171L2.62581 1.62421L1.62423 2.62579L14.3742 15.3758L15.3758 14.3742ZM8.50002 4.1565V7.49841L6.49473 5.49312L8.50002 4.1565ZM2.83335 12.0417H4.74373L8.81523 14.756C8.92203 14.8269 9.04602 14.8677 9.17408 14.8739C9.30214 14.8801 9.4295 14.8516 9.54269 14.7914C9.65574 14.7309 9.75024 14.6408 9.81611 14.5308C9.88198 14.4207 9.91674 14.2949 9.91669 14.1667V12.8357L8.50002 11.419V12.8435L5.35148 10.744C5.33377 10.732 5.31181 10.7298 5.2934 10.7206C5.20975 10.6751 5.11767 10.6471 5.02281 10.6385C5.00015 10.6363 4.98102 10.625 4.95835 10.625H2.83335V6.375H3.45598L2.19727 5.11629C1.96344 5.23333 1.76667 5.41296 1.62886 5.63519C1.49105 5.85741 1.4176 6.11351 1.41669 6.375V10.625C1.41669 11.4063 2.05206 12.0417 2.83335 12.0417Z",
                fill: "currentColor"
            })
        })
          , ih = e => {
            let {onBlur: t} = e
              , n = tw(e => e.globalMute)
              , r = tw(e => e.globalVolume)
              , i = tw(e => e.setGlobalVolume);
            return (0,
            a.jsx)(tM.M, {
                children: (0,
                a.jsx)(tk.E.div, {
                    initial: {
                        opacity: 0,
                        x: "-50%",
                        y: 2
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .15
                    },
                    className: "absolute left-1/2 top-11 z-50 w-[125px] origin-center translate-x-[calc(-50%)] rounded-full bg-session-gray-8 px-2 pt-1 opacity-100 transition-opacity delay-0 duration-300 group-hover/volume:opacity-100 group-hover/volume:delay-150 sm:block",
                    children: (0,
                    a.jsx)(n5, {
                        value: n ? 0 : r,
                        disabled: n,
                        onChange: e => {
                            i(e)
                        }
                        ,
                        onBlur: t,
                        title: "Global Volume",
                        min: 0,
                        max: 1,
                        step: .01
                    })
                })
            })
        }
        ;
        let ix = (0,
        o.forwardRef)( (e, t) => {
            let {children: n, className: r="", gradientBorder: i=!1, selected: s=!1, disabled: l=!1, tooltipText: o, keyboardShortcut: c, ...d} = e
              , u = (0,
            a.jsx)("button", {
                ref: t,
                disabled: l,
                className: (0,
                eQ.cn)("flex aspect-square h-9 w-9 items-center justify-center rounded-full p-px text-session-gray-5 transition-colors duration-100 ease-in-out", r, !s && !l && "hover:text-white", s && "text-white", i && "bg-gradient-to-b from-[hsla(0,0%,100%,0.06)] to-[hsla(0,0%,100%,0.04)]"),
                ...d,
                children: (0,
                a.jsx)("div", {
                    className: (0,
                    eQ.cn)("flex size-full items-center justify-center rounded-full", i && "bg-[#121111]"),
                    children: n
                })
            });
            return o ? (0,
            a.jsx)(nN, {
                text: o,
                keyboardShortcut: c,
                children: u
            }) : u
        }
        );
        ix.displayName = "NavButton";
        var iv = () => {
            let[e,t] = (0,
            o.useState)(!1)
              , n = tw(e => e.globalMute)
              , r = tw(e => e.setGlobalMute)
              , i = () => {
                t(!0)
            }
              , s = () => {
                t(!1)
            }
            ;
            return (0,
            a.jsxs)("div", {
                className: "relative",
                role: "button",
                tabIndex: 0,
                "aria-label": "Global volume controls",
                "aria-expanded": e,
                onMouseEnter: i,
                onMouseLeave: s,
                onFocus: i,
                onBlur: s,
                children: [(0,
                a.jsx)(ix, {
                    tabIndex: -1,
                    "aria-label": "Toggle mute",
                    className: (0,
                    eQ.cn)("relative z-20 w-7", e && "before:absolute before:bottom-0 before:left-1/2 before:top-7 before:z-10 before:h-0 before:w-0 before:-translate-x-1/2 before:rotate-180 before:content-[''] before:[border-left:38px_solid_transparent] before:[border-right:38px_solid_transparent] before:[border-top:18px_solid_transparent]"),
                    selected: e,
                    onClick: () => {
                        r(!n)
                    }
                    ,
                    children: n ? (0,
                    a.jsx)(ig, {}) : (0,
                    a.jsx)(im, {})
                }), e && (0,
                a.jsx)(ih, {
                    onBlur: s
                })]
            })
        }
          , iy = () => {
            let e = tw(e => e.play)
              , t = tw(e => e.pause)
              , n = tw(e => "playing" === e.playbackState)
              , r = tw(e => e.resetPlayhead)
              , i = () => {
                n ? t() : e()
            }
            ;
            return (0,
            a.jsxs)("div", {
                className: "flex h-[38px] items-center justify-center gap-1 rounded-full bg-session-gray-8 px-4 py-1",
                children: [(0,
                a.jsx)(ix, {
                    className: "w-7",
                    "aria-label": "Reset playhead position to beginning",
                    onClick: r,
                    tooltipText: "Go to Start",
                    keyboardShortcut: "Shift+Return/Enter",
                    children: (0,
                    a.jsx)(ip, {})
                }), (0,
                a.jsx)(ix, {
                    className: "w-7",
                    "aria-label": "Play/Pause",
                    onClick: e => {
                        e.currentTarget.blur(),
                        i()
                    }
                    ,
                    tooltipText: "Play",
                    keyboardShortcut: "Space Bar",
                    children: n ? (0,
                    a.jsx)(iu.Z, {
                        size: 12,
                        fill: "currentColor"
                    }) : (0,
                    a.jsx)(tH.Z, {
                        size: 12,
                        fill: "currentColor"
                    })
                }), (0,
                a.jsx)(iv, {})]
            })
        }
          , iS = n(59622)
          , ib = n(71759)
          , iw = e => {
            let {icon: t, content: n} = e;
            return (0,
            a.jsxs)("div", {
                className: "flex h-[38px] items-center justify-center gap-2 rounded-full bg-session-gray-8 px-4 py-1 text-xs text-session-gray-5 group-hover:text-session-off-white",
                children: [t, n]
            })
        }
        ;
        function ij() {
            let e = tw(e => e.undo)
              , t = tw(e => e.redo)
              , n = tw(e => e.setContextMenu)
              , r = eP()
              , i = eG();
            return (0,
            a.jsx)(iw, {
                content: (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)(ix, {
                        tooltipText: "Undo",
                        keyboardShortcut: "".concat(u.t4.getModifierKey(), "Z"),
                        className: (0,
                        eQ.cn)("w-6", !r && "opacity-50"),
                        onClick: () => {
                            e(),
                            n(null)
                        }
                        ,
                        disabled: !r,
                        children: (0,
                        a.jsx)(iS.Z, {
                            size: 19
                        })
                    }), (0,
                    a.jsx)(ix, {
                        tooltipText: "Redo",
                        keyboardShortcut: "".concat(u.t4.getModifierKey(), "Shift Z"),
                        className: (0,
                        eQ.cn)("w-6", !i && "opacity-50"),
                        onClick: () => {
                            t(),
                            n(null)
                        }
                        ,
                        disabled: !i,
                        children: (0,
                        a.jsx)(ib.Z, {
                            size: 19
                        })
                    })]
                })
            })
        }
        var ik = n(94303)
          , iM = n(36666)
          , iN = n(42587)
          , iC = () => {
            let e = eE()
              , t = eL()
              , n = tw(e => e.zoomIn)
              , r = tw(e => e.zoomOut)
              , i = tw(e => e.zoomToFit);
            return (0,
            a.jsx)("div", {
                className: "flex items-center gap-1",
                children: (0,
                a.jsx)(iw, {
                    content: (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)(ix, {
                            className: "w-6",
                            "aria-label": "Zoom out",
                            onClick: () => r(),
                            disabled: !t,
                            tooltipText: "Zoom Out",
                            keyboardShortcut: "-",
                            children: (0,
                            a.jsx)(ik.Z, {
                                className: (0,
                                eQ.cn)(!t && "opacity-50"),
                                size: 19
                            })
                        }), (0,
                        a.jsx)(ix, {
                            className: "w-6",
                            "aria-label": "Zoom to fit",
                            onClick: () => i(),
                            tooltipText: "Zoom To Fit",
                            keyboardShortcut: "0",
                            children: (0,
                            a.jsx)(iM.Z, {
                                size: 17
                            })
                        }), (0,
                        a.jsx)(ix, {
                            className: "w-6",
                            "aria-label": "Zoom in",
                            onClick: () => n(),
                            disabled: !e,
                            tooltipText: "Zoom In",
                            keyboardShortcut: "=",
                            children: (0,
                            a.jsx)(iN.Z, {
                                className: (0,
                                eQ.cn)(!e && "opacity-50"),
                                size: 19
                            })
                        })]
                    })
                })
            })
        }
          , iI = n(65789)
          , iT = n(51733)
          , iE = () => {
            let {open: e} = (0,
            rg.t5)()
              , t = eu();
            return (0,
            a.jsx)(it, {
                selected: !1,
                onClick: () => {
                    let n = (null == t ? void 0 : t.type) === "song" ? t.song : null
                      , r = null == n ? void 0 : n.id;
                    r && e(r, "wav")
                }
                ,
                tooltipText: "Download",
                "aria-label": "Download",
                "aria-selected": !1,
                children: (0,
                a.jsx)(iT.Z, {
                    size: 16
                })
            })
        }
          , iL = n(41755)
          , iR = e => {
            let {trigger: t, children: n, open: r=!1, setOpen: i, align: s="right", tooltipText: l, keyboardShortcut: c} = e
              , d = tw(e => e.contextMenu)
              , [u,p] = (0,
            o.useState)("side-menu");
            return (0,
            o.useEffect)( () => {
                !1 === r && p(nO()("side-menu"))
            }
            , [r]),
            (0,
            a.jsxs)("div", {
                id: "side-menu",
                className: (0,
                eQ.cn)("pointer-events-none h-full shrink-0"),
                children: [(0,
                a.jsx)(tM.M, {
                    mode: "wait",
                    children: r && (0,
                    a.jsx)(tk.E.div, {
                        className: (0,
                        eQ.cn)("absolute z-30", "right" === s ? "right-0" : "left-0", null === d ? "h-[calc(100vh-102px)]" : "h-[calc(100vh-506px)]"),
                        initial: "enter",
                        animate: "open",
                        exit: "exit",
                        variants: {
                            enter: {
                                opacity: 0,
                                top: 36
                            },
                            open: {
                                opacity: 1,
                                top: 54
                            },
                            exit: {
                                opacity: 0,
                                top: 36
                            }
                        },
                        transition: {
                            type: "spring",
                            damping: 32,
                            mass: 1,
                            stiffness: 400
                        },
                        children: (0,
                        a.jsx)("div", {
                            className: "pointer-events-auto flex max-h-full w-[340px] flex-col gap-3 rounded-[26px] bg-session-gray-8 p-4 text-session-gray-5",
                            children: n
                        })
                    }, u)
                }), (0,
                a.jsx)("button", {
                    className: "pointer-events-auto",
                    onClick: () => {
                        null == i || i(!r)
                    }
                    ,
                    children: (0,
                    a.jsx)(it, {
                        selected: r,
                        tooltipText: l,
                        "aria-label": l,
                        "aria-selected": r,
                        keyboardShortcut: c,
                        children: t
                    })
                })]
            })
        }
          , iP = n(87354)
          , iG = e => (0,
        a.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0,
            a.jsx)("path", {
                d: "M19.045 7.40088C19.423 7.02288 19.631 6.52088 19.631 5.98688C19.631 5.45288 19.423 4.95088 19.045 4.57288L17.459 2.98688C17.081 2.60888 16.579 2.40088 16.045 2.40088C15.511 2.40088 15.009 2.60888 14.632 2.98588L4 13.5849V17.9999H8.413L19.045 7.40088ZM16.045 4.40088L17.632 5.98588L16.042 7.56988L14.456 5.98488L16.045 4.40088ZM6 15.9999V14.4149L13.04 7.39688L14.626 8.98288L7.587 15.9999H6ZM4 19.9999H20V21.9999H4V19.9999Z",
                fill: "currentColor"
            })
        })
          , i_ = e => (0,
        a.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [(0,
            a.jsx)("path", {
                d: "M3.33333 13.334C3.33333 13.6876 3.47381 14.0267 3.72386 14.2768C3.97391 14.5268 4.31304 14.6673 4.66667 14.6673H11.3333C11.687 14.6673 12.0261 14.5268 12.2761 14.2768C12.5262 14.0267 12.6667 13.6876 12.6667 13.334V5.33398H14V4.00065H11.3333V2.66732C11.3333 2.3137 11.1929 1.97456 10.9428 1.72451C10.6928 1.47446 10.3536 1.33398 10 1.33398H6C5.64638 1.33398 5.30724 1.47446 5.05719 1.72451C4.80714 1.97456 4.66667 2.3137 4.66667 2.66732V4.00065H2V5.33398H3.33333V13.334ZM6 2.66732H10V4.00065H6V2.66732ZM5.33333 5.33398H11.3333V13.334H4.66667V5.33398H5.33333Z",
                fill: "currentColor"
            }), (0,
            a.jsx)("path", {
                d: "M6 6.66602H7.33333V11.9993H6V6.66602ZM8.66667 6.66602H10V11.9993H8.66667V6.66602Z",
                fill: "currentColor"
            })]
        });
        let iA = e => {
            let {id: t} = e
              , n = tw(e => e.removeCheckpoint);
            return (0,
            a.jsx)("button", {
                className: "ml-3 text-session-gray-5 opacity-0 group-focus-within:opacity-100 hover:text-session-white group-hover:opacity-100 focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-session-white",
                onClick: () => n(t),
                "aria-label": "Remove song version",
                children: (0,
                a.jsx)(i_, {
                    className: "size-4"
                })
            })
        }
        ;
        function iD(e) {
            let {id: t, name: n} = e
              , [r,i] = (0,
            o.useState)(!1)
              , [s,l] = (0,
            o.useState)(n)
              , c = (0,
            o.useRef)(null)
              , d = tw(e => e.currentCheckpointId)
              , u = eb()
              , p = tw(e => e.loadCheckpoint)
              , m = tw(e => e.updateCheckpointName);
            (0,
            o.useEffect)( () => {
                r && c.current && (c.current.focus(),
                c.current.select())
            }
            , [r]);
            let g = () => {
                s.trim() && (m(t, s),
                i(!1))
            }
            ;
            return (0,
            a.jsx)("li", {
                children: (0,
                a.jsx)("div", {
                    className: (0,
                    eQ.cn)("group flex h-[34px] w-full select-none items-center justify-between gap-1 rounded-full bg-session-black pr-4 text-[12px] hover:text-session-gray-4", t === d && "border border-session-gray-6 text-session-gray-4", u && "opacity-50"),
                    children: r ? (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)("input", {
                            ref: c,
                            className: "size-full rounded-full bg-transparent p-4 text-[12px] focus-visible:outline-1 focus-visible:outline-white",
                            value: s,
                            onChange: e => l(e.target.value),
                            onKeyDown: e => {
                                "Enter" === e.key ? g() : "Escape" === e.key && (l(n),
                                i(!1))
                            }
                            ,
                            onBlur: g,
                            "aria-label": "Song version name"
                        }), (0,
                        a.jsx)("button", {
                            className: (0,
                            eQ.cn)("ml-1 text-session-gray-5 hover:text-session-white group-hover:opacity-100 focus-visible:text-session-white focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-session-white"),
                            onClick: g,
                            "aria-label": "Save song version name",
                            children: (0,
                            a.jsx)(iP.Z, {
                                size: 12
                            })
                        }), (0,
                        a.jsx)(iA, {
                            id: t
                        })]
                    }) : (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)("button", {
                            onClick: () => {
                                p(t)
                            }
                            ,
                            className: "size-full truncate p-2 px-4 text-left focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-session-white",
                            disabled: u,
                            onDoubleClick: () => {
                                i(!0)
                            }
                            ,
                            "aria-label": "Load song version",
                            title: n,
                            children: n
                        }), (0,
                        a.jsx)("button", {
                            className: "ml-1 text-session-gray-5 opacity-0 group-focus-within:opacity-100 hover:text-session-white group-hover:opacity-100 focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-session-white",
                            onClick: e => {
                                e.stopPropagation(),
                                i(!0)
                            }
                            ,
                            "aria-label": "Edit song version name",
                            children: (0,
                            a.jsx)(iG, {
                                className: "size-4"
                            })
                        }), (0,
                        a.jsx)(iA, {
                            id: t
                        })]
                    })
                })
            }, t)
        }
        var iz = e => {
            let {eventType: t, stepIndex: n, createdAt: r, title: i} = e
              , s = eP()
              , l = eG()
              , c = tw(e => e.setContextMenu)
              , d = tw(e => e.undo)
              , u = tw(e => e.redo)
              , [p,m] = (0,
            o.useState)(!1)
              , g = p && "current" !== t && ("past" === t && s || "future" === t && l)
              , f = "past" === t && !s || "future" === t && !l
              , h = (e, t) => {
                "past" === e && s ? (c(null),
                d(t)) : "future" === e && l && (c(null),
                u(t))
            }
            ;
            return (0,
            a.jsxs)("button", {
                onClick: () => h(t, n),
                className: (0,
                eQ.cn)("group flex h-8 w-full select-none items-center justify-between gap-2 rounded-lg bg-session-black p-2 text-[12px] font-thin", "current" === t ? "text-session-gray-4" : "text-session-gray-6 hover:bg-session-black hover:text-session-gray-4", f && "opacity-50 hover:scale-[1] hover:text-session-gray-4"),
                disabled: f || "current" === t,
                onMouseEnter: () => m(!0),
                onMouseLeave: () => m(!1),
                children: [(0,
                a.jsx)("div", {
                    className: "flex items-center gap-2",
                    children: (0,
                    a.jsx)("span", {
                        className: "select-none text-xs",
                        children: i
                    })
                }), !g && r && (0,
                a.jsx)("span", {
                    className: "text-[10px] text-session-gray-6",
                    children: function(e) {
                        let t = new Date().getTime() - e.getTime()
                          , n = Math.floor(t / 6e4);
                        if (n < 60)
                            return "".concat(n, " ").concat((0,
                            et._6)(n, "minute"), " ago");
                        let r = Math.floor(t / 36e5);
                        if (r < 24)
                            return "".concat(r, " ").concat((0,
                            et._6)(r, "hour"), " ago");
                        let i = Math.floor(t / 864e5);
                        if (i < 365)
                            return "".concat(i, " ").concat((0,
                            et._6)(i, "day"), " ago");
                        let s = Math.floor(t / 31536e6);
                        return "".concat(s, " ").concat((0,
                        et._6)(s, "year"), " ago")
                    }(r)
                }), g && (0,
                a.jsxs)("div", {
                    className: "flex items-center gap-1 rounded-full border border-session-gray-5 bg-session-gray-5 px-2 text-[10px] uppercase text-session-gray-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    children: [(0,
                    a.jsx)(iS.Z, {
                        size: 12
                    }), (0,
                    a.jsx)("span", {
                        children: "Restore"
                    })]
                })]
            })
        }
        ;
        function iF(e) {
            return {
                title: e.action,
                createdAt: new Date(e.actionTimestamp)
            }
        }
        let iH = () => (0,
        a.jsx)("div", {
            className: "h-px w-full rounded-xl bg-session-gray-6"
        })
          , iZ = e => {
            let {songTitle: t} = e;
            return (0,
            a.jsxs)("div", {
                className: "flex items-center gap-3 px-4",
                children: [(0,
                a.jsx)("span", {
                    className: "select-none text-ellipsis text-xs",
                    children: t
                }), (0,
                a.jsx)(iL.Z, {
                    className: "",
                    size: 16
                })]
            })
        }
        ;
        var iV = e => {
            var t;
            let {songTitle: n} = e
              , r = tw(e => e.historyMenuOpen)
              , i = tw(e => e.setHistoryMenuOpen)
              , s = eD()
              , l = tw(e => e.pastStates)
              , c = tw(e => e.futureStates)
              , d = ea()
              , u = tw(e => e.actionTimestamp)
              , p = tw(e => e.getSample)
              , m = (0,
            C.u4)(e => e.localLikes)
              , g = (0,
            C.u4)(e => e.isTrackLikedByUser)
              , f = tw(e => e.checkpoints)
              , h = tw(e => e.action)
              , x = (0,
            o.useMemo)( () => {
                let e = l.length + c.length + 1
                  , t = l.length;
                return Array.from({
                    length: e
                }).map( (e, n) => {
                    let {eventType: r, stepIndex: i, createdAt: s, title: o} = function(e) {
                        let {itemIndex: t, currentHistoryIndex: n, pastStates: r, futureStates: i, currentSessionAction: s, currentSessionActionTimestamp: l} = e;
                        if (t < n) {
                            let {title: e, createdAt: i} = iF(r[t]);
                            return {
                                eventType: "past",
                                stepIndex: n - t,
                                title: e,
                                createdAt: i
                            }
                        }
                        if (t === n)
                            return {
                                eventType: "current",
                                title: s,
                                stepIndex: 0,
                                createdAt: new Date(l)
                            };
                        {
                            let {title: e, createdAt: r} = iF(i[t - n - 1]);
                            return {
                                eventType: "future",
                                stepIndex: t - n,
                                title: e,
                                createdAt: r
                            }
                        }
                    }({
                        itemIndex: n,
                        currentHistoryIndex: t,
                        pastStates: l,
                        futureStates: c,
                        currentSessionAction: h,
                        currentSessionActionTimestamp: u
                    });
                    return (0,
                    a.jsx)("li", {
                        children: (0,
                        a.jsx)(iz, {
                            eventType: r,
                            stepIndex: i,
                            createdAt: s,
                            title: o
                        })
                    }, "slot-".concat(n))
                }
                ).reverse()
            }
            , [l, c, d, p, g, m, h])
              , v = (0,
            o.useMemo)( () => f.map(e => (0,
            a.jsx)(iD, {
                id: e.id,
                name: e.name
            }, e.id)), [f])
              , [y,S] = (0,
            o.useState)(!1)
              , b = null === (t = eu()) || void 0 === t ? void 0 : t.id;
            return (0,
            a.jsxs)(iR, {
                trigger: (0,
                a.jsx)(iZ, {
                    songTitle: n
                }),
                open: r,
                setOpen: i,
                align: "left",
                tooltipText: "History",
                keyboardShortcut: "H",
                children: [(0,
                a.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "flex select-none items-center gap-2",
                        children: [(0,
                        a.jsx)("h2", {
                            className: "text-[14px] font-medium",
                            children: "Song Versions"
                        }), (0,
                        a.jsx)(nN, {
                            text: "Save a New Version to revisit or branch out from this point in your workflow — versions are accessed directly within each Session.",
                            children: (0,
                            a.jsx)(nq.Z, {
                                className: "size-4"
                            })
                        })]
                    }), (0,
                    a.jsx)("button", {
                        onClick: async () => {
                            if (!y && b) {
                                S(!0);
                                try {
                                    await s(b)
                                } finally {
                                    S(!1)
                                }
                            }
                        }
                        ,
                        className: "flex h-[22px] items-center gap-2 rounded-full border border-session-gray-5 bg-session-gray-5 px-2 text-[10px] text-session-gray-8 transition-colors enabled:hover:bg-session-gray-4 disabled:opacity-50",
                        disabled: y,
                        children: y ? "SAVING..." : "SAVE NEW VERSION"
                    })]
                }), (0,
                a.jsx)(iH, {}), f.length > 0 && (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)("ol", {
                        className: (0,
                        eQ.cn)("minimal-scrollbar flex shrink-0 flex-col gap-2", f.length <= 5 ? "h-fit" : "max-h-[200px] overflow-y-auto pr-2"),
                        children: v
                    }), (0,
                    a.jsx)(iH, {})]
                }), (0,
                a.jsx)("h2", {
                    className: "select-none text-[14px] font-medium",
                    children: "Change History"
                }), (0,
                a.jsx)("ol", {
                    className: "minimal-scrollbar flex flex-col overflow-y-auto rounded-xl bg-session-black p-2",
                    children: x
                })]
            })
        }
          , iO = e => {
            let {navTrigger: t=!1} = e
              , n = tw(e => e.setLyricsMenuOpen)
              , r = tw(e => e.lyricsMenuOpen);
            return (0,
            a.jsx)("div", {
                className: (0,
                eQ.cn)("flex justify-end", t ? r ? "pointer-events-none w-0 opacity-0 [transition:width_0.3s,opacity_0.1s]" : "pointer-events-auto w-[58px] opacity-100 [transition:width_0.3s,opacity_0.2s_0.1s]" : "w-[38px]"),
                children: (0,
                a.jsx)("div", {
                    className: (0,
                    eQ.cn)("", t ? "pr-2" : "pr-0"),
                    children: (0,
                    a.jsx)(it, {
                        selected: r,
                        tooltipText: "Lyrics",
                        "aria-label": "Lyrics",
                        "aria-selected": r,
                        keyboardShortcut: "L",
                        onClick: () => {
                            n(!r)
                        }
                        ,
                        children: (0,
                        a.jsx)(t9.Z, {
                            size: 16
                        })
                    })
                })
            })
        }
          , iB = e => {
            let {songTitle: t} = e
              , n = tw(e => e.getLoadedSample())
              , r = (0,
            iI.x)()
              , i = (0,
            r7.cC)("session-bpm-button")
              , s = (0,
            r7.cC)("session-library-button")
              , l = (0,
            r7.cC)("sessions-performance-monitor");
            return (0,
            a.jsxs)("nav", {
                className: "flex w-full text-sm font-medium",
                children: [(0,
                a.jsxs)("div", {
                    className: "relative flex flex-1 items-center gap-4 justify-self-center text-session-text",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "group relative size-[18px] cursor-pointer overflow-hidden",
                        children: [(0,
                        a.jsx)("div", {
                            className: "absolute inset-0 grid place-items-center transition-transform duration-200 group-hover:-translate-y-full",
                            children: (0,
                            a.jsx)(r_.default, {
                                src: r9,
                                alt: "logo",
                                width: 18,
                                height: 18
                            })
                        }), (0,
                        a.jsx)(rX.default, {
                            href: n ? "/songs/".concat(n.id) : "/library",
                            className: "absolute inset-0 grid translate-y-full place-items-center transition-transform duration-200 group-hover:translate-y-0",
                            onClick: () => {
                                r.activeTrack && r.reset()
                            }
                            ,
                            children: (0,
                            a.jsx)(rS.Z, {
                                className: "text-session-text",
                                size: 18
                            })
                        })]
                    }), s && (0,
                    a.jsx)(ir, {}), (0,
                    a.jsx)(iV, {
                        songTitle: null != t ? t : "Untitled Song"
                    }), (0,
                    a.jsx)(ij, {}), (0,
                    a.jsx)(iE, {})]
                }), (0,
                a.jsx)(iy, {}), (0,
                a.jsxs)("div", {
                    className: "relative flex flex-1 justify-end",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [l && (0,
                        a.jsx)(io, {}), i && (0,
                        a.jsx)(r8, {
                            disabled: !0
                        }), (0,
                        a.jsx)(iC, {}), (0,
                        a.jsx)(id, {})]
                    }), (0,
                    a.jsx)(iO, {
                        navTrigger: !0
                    })]
                })]
            })
        }
          , iU = n(52551)
          , iW = n(50348)
          , iq = n(44913)
          , iK = n(57307)
          , iX = n(55513)
          , iQ = n(81570)
          , iY = e => {
            let {className: t, children: n} = e;
            return (0,
            a.jsx)("div", {
                className: (0,
                eQ.cn)("flex flex-col overflow-hidden rounded-2xl bg-session-black p-4", t),
                children: n
            })
        }
          , iJ = e => {
            let {contextMenu: t, editorRef: n, onFocus: r, onBlur: i} = e
              , s = tw(e => e.pendingGenerationType)
              , l = tw(e => e.pendingGenerationSourceSampleId)
              , c = tw(e => e.getSample(null != l ? l : ""))
              , [d,u] = (0,
            E.GG)("lyrics")
              , p = (0,
            o.useMemo)( () => {
                if ("extend" === t && s && c && "song" === c.type) {
                    let e = "intro" === s || "section-left" === s ? "end" : "start";
                    return {
                        lyrics: c.song.lyrics,
                        position: e
                    }
                }
                return {
                    lyrics: "",
                    type: ""
                }
            }
            , [s, c, t]);
            (0,
            o.useEffect)( () => {
                n.current && ("start" === p.position ? n.current.scrollTop = n.current.scrollHeight : "end" === p.position && (n.current.scrollTop = 0))
            }
            , [p.position, n]);
            let m = (0,
            E.Zt)(e => e.lyrics_type)
              , g = (0,
            o.useMemo)( () => {
                if (p.lyrics)
                    return p.lyrics.split("\n").map(e => {
                        if (e.startsWith("[") && e.endsWith("]")) {
                            let t = e.slice(1, -1);
                            return (0,
                            a.jsx)(i$, {
                                sectionTitle: t
                            })
                        }
                        return (0,
                        a.jsx)("p", {
                            className: "m-0 !cursor-default",
                            children: e
                        })
                    }
                    )
            }
            , [p.lyrics])
              , f = "Write your own lyrics, about 6 lines for every 30 seconds works best.";
            return (0,
            a.jsx)(a.Fragment, {
                children: (0,
                a.jsxs)(a.Fragment, {
                    children: ["user" === m && ("intro" === s || "section-left" === s) && (0,
                    a.jsx)(i0, {
                        value: d,
                        placeholder: f,
                        onChange: e => u(e.target.value),
                        onFocus: r,
                        onBlur: i
                    }), (0,
                    a.jsx)("span", {
                        className: "prose prose-lg min-h-[150px] max-w-full overflow-y-auto whitespace-pre-line text-sm text-session-gray-5 dark:prose-invert focus:outline-none",
                        children: g
                    }), "user" === m && ("outro" === s || "section-right" === s) && (0,
                    a.jsx)(i0, {
                        value: d,
                        placeholder: f,
                        onChange: e => u(e.target.value),
                        onFocus: r,
                        onBlur: i
                    })]
                })
            })
        }
        ;
        let i$ = e => {
            let {sectionTitle: t} = e
              , n = tw(e => e.getSectionColor(t));
            return (0,
            a.jsx)("div", {
                className: "my-2 flex h-[22px] w-min select-none items-center justify-center whitespace-nowrap rounded-xl px-2 text-[10px] uppercase leading-none text-session-white",
                contentEditable: !1,
                style: {
                    backgroundColor: "rgb(var(--".concat(n, "))")
                },
                children: t
            })
        }
          , i0 = e => {
            let {value: t, onChange: n, onFocus: r, onBlur: i, placeholder: s} = e;
            return (0,
            a.jsx)("textarea", {
                className: "minimal-scrollbar prose prose-lg mt-1 min-h-[150px] w-full max-w-full cursor-text resize-none whitespace-pre-line rounded-md bg-transparent text-sm text-session-gray-3 placeholder:text-session-gray-6 focus:outline-none",
                value: null != t ? t : "",
                placeholder: s,
                onFocus: r,
                onBlur: i,
                onChange: n
            })
        }
        ;
        var i1 = e => {
            var t, n, r, i, s, l;
            let {times: c, lyricsStart: d, lyricsEnd: u} = e
              , p = tw(e => e.getLyricsEditor)()
              , m = tw(e => e.addReplaceSelectionArea)
              , g = tw(e => e.removeReplaceSelectionArea)
              , f = e_()
              , h = tw(e => e.replaceSelectionAreaBounds)
              , x = tw(e => e.replaceSelectionAreas)
              , y = tw(e => e.replaceLyricsSelections)
              , S = tw(e => e.addReplaceLyricsSelection)
              , b = eF()
              , w = (0,
            o.useCallback)(e => {
                if (!f && !b || !p)
                    return;
                let {from: t, to: n} = p.state.selection
                  , r = t
                  , i = n;
                for (; r > 0; ) {
                    let e = p.state.doc.textBetween(r - 1, r);
                    if (!e || /\s/.test(e))
                        break;
                    r--
                }
                for (; i < p.state.doc.content.size; ) {
                    let e = p.state.doc.textBetween(i, i + 1);
                    if (!e || /\s/.test(e))
                        break;
                    i++
                }
                if (p.chain().focus().setHighlight({
                    color: v.qk
                }).blur().run(),
                b) {
                    S({
                        from: t,
                        to: n,
                        times: e
                    });
                    return
                }
                let s = x.findIndex(t => Math.max(t.start, e[0]) < Math.min(t.end, e[1]));
                -1 !== s && g(s),
                m({
                    start: e[0],
                    end: e[1],
                    lyricsStart: r,
                    lyricsEnd: i
                })
            }
            , [p, m, f, g, x, b, S])
              , j = e => "".concat(Math.floor(e / 60), ":").concat(Math.floor(e % 60).toString().padStart(2, "0"))
              , k = f && !b || b && x.length === y.length + 1;
            return (0,
            a.jsx)("div", {
                children: (0,
                a.jsx)(iU.NM, {
                    updateDelay: 50,
                    editor: p,
                    tippyOptions: {
                        followCursor: !0
                    },
                    className: (0,
                    eQ.cn)("select-none rounded-full bg-session-gray-7 p-2", !b && (i = null !== (t = null == p ? void 0 : p.state.selection.from) && void 0 !== t ? t : 0,
                    s = null !== (n = null == p ? void 0 : p.state.selection.to) && void 0 !== n ? n : 0,
                    l = null !== (r = null == p ? void 0 : p.state.selection.empty) && void 0 !== r && r,
                    !!h.width && (!!l || !(i >= d) || !(s <= u))) && "opacity-0"),
                    children: (0,
                    a.jsxs)("div", {
                        className: "flex h-[22px] items-center justify-center",
                        children: [(0,
                        a.jsxs)("span", {
                            className: "flex h-full items-center justify-center rounded-full border border-brand-accent px-2 text-[10px] text-brand-accent",
                            children: [j(c[0]), " - ", j(c[1])]
                        }), k && (0,
                        a.jsx)("button", {
                            className: "h-full px-2 text-[12px] text-session-gray-5 transition-colors hover:text-session-gray-4",
                            onClick: () => w(c),
                            children: "Select this section"
                        })]
                    })
                })
            })
        }
          , i2 = () => {
            let e = tw(e => e.getLyricsEditor)()
              , t = eu()
              , {data: n} = (0,
            Q.BT)(R.US, {
                id: J(t),
                songPath: $(t)
            })
              , r = eF()
              , i = tw(e => e.replaceSelectionAreas)
              , [s,l] = (0,
            o.useState)([0, 0])
              , a = (0,
            o.useCallback)( (e, t) => {
                if (r || !n) {
                    var s, a;
                    l([null === (s = i[i.length - 1]) || void 0 === s ? void 0 : s.start, null === (a = i[i.length - 1]) || void 0 === a ? void 0 : a.end]);
                    return
                }
                let o = n.wordsFormatted.join("").slice(e - 1, t - 1)
                  , c = (0,
                iQ.WI)(n.wordsFormatted, o, e - 2);
                if (c.length > 0) {
                    let e = [n.startTimes[c[0]], n.endTimes[c[c.length - 1]]];
                    e[1] - e[0] > v.s7 && (e[1] = e[0] + v.s7),
                    l(e)
                }
            }
            , [n, r, i]);
            return (0,
            o.useEffect)( () => {
                if (!e)
                    return;
                let t = e => {
                    let {editor: t} = e
                      , {empty: n, from: r, to: i} = t.state.selection;
                    n || a(r, i)
                }
                ;
                return e.on("selectionUpdate", t),
                () => {
                    e.off("selectionUpdate", t)
                }
            }
            , [e, a, r, n]),
            {
                times: s
            }
        }
          , i3 = n(34861)
          , i5 = n(31004)
          , i4 = n(10761)
          , i6 = n(19021);
        let i9 = new i4.H$("karaokeHighlight")
          , i7 = i5.hj.create({
            name: "karaokeHighlight",
            addProseMirrorPlugins: () => [new i4.Sy({
                key: i9,
                state: {
                    init: () => i6.EH.empty,
                    apply: (e, t) => e.getMeta("updateDecorations") || t.map(e.mapping, e.doc)
                },
                props: {
                    decorations(e) {
                        return this.getState(e)
                    }
                }
            })],
            addCommands: () => ({
                setKaraokeHighlight: (e, t) => n => {
                    let {tr: r, dispatch: i} = n;
                    if (i) {
                        let n = i6.p.inline(e, t, {
                            class: "bg-[#3F1E27] text-white py-1 m-0 rounded-[2px]"
                        });
                        r.setMeta("updateDecorations", i6.EH.create(r.doc, [n])),
                        i(r)
                    }
                    return !0
                }
            })
        })
          , i8 = i5.hj.create({
            name: "wordHover",
            addExtensions: () => [i5.vc.create({
                name: "wordHover",
                parseHTML: () => [{
                    tag: "span.word-hover"
                }],
                renderHTML: () => ["span", {
                    class: "word-hover"
                }, 0]
            })]
        })
          , se = new i4.H$("nonEditableExceptHighlights");
        function st(e, t) {
            let n = !1;
            return e.descendants(e => !e.marks.some(e => e.type === t) || (n = !0,
            !1)),
            n
        }
        function sn(e, t) {
            let n = e.state
              , r = n.schema.marks.highlight
              , {doc: i} = n
              , s = i.resolve(t);
            if (s.marks().some(e => e.type === r))
                return !0;
            let l = s.nodeAfter;
            return null != l && !!l.marks.some(e => e.type === r)
        }
        let sr = i5.hj.create({
            name: "nonEditableExceptHighlights",
            addExtensions: () => [i8],
            addProseMirrorPlugins: () => [new i4.Sy({
                key: se,
                state: {
                    init: () => ({
                        enabled: !0,
                        insertingContent: !1
                    }),
                    apply(e, t) {
                        let n = e.getMeta("nonEditableExceptHighlights");
                        return {
                            ...t,
                            ...n
                        }
                    }
                },
                props: {
                    handleKeyDown: (e, t) => {
                        if (se.getState(e.state).insertingContent || "ArrowLeft" === t.key || "ArrowRight" === t.key || "ArrowUp" === t.key || "ArrowDown" === t.key || "Home" === t.key || "End" === t.key || "PageUp" === t.key || "PageDown" === t.key || "a" === t.key && (t.metaKey || t.ctrlKey))
                            return !1;
                        let {selection: n, doc: r} = e.state
                          , i = e.state.schema.marks.highlight;
                        if (!st(r, i))
                            return !1;
                        let s = [];
                        r.descendants( (e, t) => (e.marks.length > 0 && s.push({
                            from: t,
                            to: t + e.nodeSize
                        }),
                        !0));
                        let l = s[0]
                          , a = s[s.length - 1];
                        if (n.anchor >= l.from && n.anchor <= a.to) {
                            let t = e.state.tr.addMark(l.from, a.to, i.create());
                            e.dispatch(t)
                        }
                        return !1
                    }
                    ,
                    handlePaste: e => {
                        let {selection: t} = e.state
                          , n = e.state.schema.marks.highlight
                          , {doc: r} = e.state;
                        return !!st(r, n) && !sn(e, t.from)
                    }
                    ,
                    handleDrop: (e, t) => {
                        let n = e.posAtCoords({
                            left: t.clientX,
                            top: t.clientY
                        });
                        if (!n)
                            return !0;
                        let r = e.state.schema.marks.highlight
                          , {doc: i} = e.state;
                        return !!st(i, r) && !sn(e, n.pos)
                    }
                }
            })],
            addCommands: () => ({
                setInsertingContent: e => t => {
                    let {tr: n, dispatch: r} = t;
                    return r && (n.setMeta("nonEditableExceptHighlights", {
                        insertingContent: e
                    }),
                    r(n)),
                    !0
                }
            })
        })
          , si = (e, t, n) => {
            if (0 === n.length)
                return !0;
            let r = n.some(t => e >= t.from && e <= t.to)
              , i = n.some(e => t >= e.from && t <= e.to);
            return r && i
        }
          , ss = (e, t) => {
            if (0 === t.length)
                return e;
            let n = 1 / 0
              , r = e;
            return t.forEach(t => {
                if (e >= t.from && e <= t.to)
                    r = e,
                    n = 0;
                else {
                    let i = Math.abs(e - t.from)
                      , s = Math.abs(e - t.to)
                      , l = Math.min(i, s);
                    l < n && (n = l,
                    r = i < s ? t.from : t.to)
                }
            }
            ),
            r
        }
          , sl = i5.hj.create({
            name: "restrictedSelection",
            addOptions: () => ({
                selectableRegions: [],
                enabled: !0
            }),
            addProseMirrorPlugins() {
                let e = new i4.H$("restrictedSelection")
                  , t = this
                  , n = e => {
                    if (!t.options.enabled)
                        return !1;
                    let {state: n} = e
                      , {selection: r} = n
                      , {from: i, to: s} = r;
                    if (!si(i, s, t.options.selectableRegions)) {
                        let r = ss(i, t.options.selectableRegions)
                          , s = n.tr.setSelection(i4.Bs.create(n.doc, r, r));
                        return e.dispatch(s),
                        !0
                    }
                    return !1
                }
                ;
                return [{
                    key: "restrictedSelection",
                    props: {
                        handleDOMEvents: {
                            mouseleave(e) {
                                n(e)
                            },
                            click(e) {
                                n(e)
                            }
                        },
                        handleKeyDown(e, n) {
                            if (!t.options.enabled)
                                return !1;
                            if ("a" === n.key && (n.metaKey || n.ctrlKey)) {
                                if (0 === t.options.selectableRegions.length)
                                    return !1;
                                let {doc: n} = e.state
                                  , r = [];
                                if (n.descendants( (e, n) => (e.marks.length > 0 && t.options.selectableRegions.some(t => n >= t.from && n + e.nodeSize <= t.to) && r.push({
                                    from: n,
                                    to: n + e.nodeSize
                                }),
                                !0)),
                                r.length > 0) {
                                    let t = r[0]
                                      , n = r[r.length - 1]
                                      , i = e.state.tr.setSelection(i4.Bs.create(e.state.doc, t.from, n.to));
                                    e.dispatch(i)
                                }
                                return !0
                            }
                            return n.shiftKey && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(n.key),
                            !1
                        },
                        decorations(e) {
                            if (!t.options.enabled || 0 === t.options.selectableRegions.length)
                                return null;
                            let {doc: n} = e
                              , r = [];
                            return n.descendants( (e, n) => {
                                if (e.isText) {
                                    let i = e.textContent.length;
                                    for (let e = 0; e < i; e++) {
                                        let i = n + e;
                                        t.options.selectableRegions.some(e => i >= e.from && i + 1 <= e.to) || r.push(i6.p.inline(i, i + 1, {
                                            class: "non-selectable-text"
                                        }))
                                    }
                                } else
                                    "songSectionsHeader" !== e.type.name || t.options.selectableRegions.some(t => n >= t.from && n + e.nodeSize <= t.to) || r.push(i6.p.node(n, n + e.nodeSize, {
                                        class: "non-selectable-text"
                                    }));
                                return !0
                            }
                            ),
                            i6.EH.create(n, r)
                        }
                    },
                    spec: {
                        key: e
                    },
                    getState: () => null
                }]
            },
            addCommands() {
                let e = this;
                return {
                    setSelectableRegions: t => () => (e.options.selectableRegions = t,
                    !0),
                    setSelectionRestrictionEnabled: t => () => (e.options.enabled = t,
                    !0)
                }
            }
        });
        var sa = n(78291)
          , so = n(44526)
          , sc = n(1565)
          , sd = n(92472)
          , su = n(58754)
          , sp = n(26987)
          , sm = n(20565)
          , sg = n(23332);
        let sf = ["Verse", "Chorus", "Bridge", "Intro", "Outro", "Hook", "Pre-Chorus", "Post-Chorus"]
          , sh = null
          , sx = e => {
            switch (e) {
            case "Verse":
                return (0,
                a.jsx)(sa.Z, {
                    className: "size-4"
                });
            case "Chorus":
                return (0,
                a.jsx)(so.Z, {
                    className: "size-4"
                });
            case "Intro":
                return (0,
                a.jsx)(sc.Z, {
                    className: "size-4"
                });
            case "Outro":
                return (0,
                a.jsx)(sd.Z, {
                    className: "size-4"
                });
            case "Bridge":
                return (0,
                a.jsx)(su.Z, {
                    className: "size-4"
                });
            case "Hook":
                return (0,
                a.jsx)(sp.Z, {
                    className: "size-4"
                });
            case "Pre-Chorus":
                return (0,
                a.jsx)(sm.Z, {
                    className: "size-4"
                });
            case "Post-Chorus":
                return (0,
                a.jsx)(sg.Z, {
                    className: "size-4"
                })
            }
        }
          , sv = e => {
            let {node: t, updateAttributes: n} = e
              , r = t.attrs.type
              , i = (0,
            o.useRef)((0,
            p.Z)()).current
              , s = (0,
            o.useRef)(null)
              , [l,c] = (0,
            o.useState)(!1)
              , [d,u] = (0,
            o.useState)({
                top: 0,
                left: 0
            })
              , m = tw.getState().getSectionColor(r)
              , g = tw(e => e.contextMenu)
              , f = null !== g
              , h = (0,
            o.useCallback)( () => {
                c(sh === i)
            }
            , [i]);
            (0,
            o.useEffect)( () => {
                if (s.current && l) {
                    let e = s.current.getBoundingClientRect();
                    u({
                        top: e.bottom + 10,
                        left: e.left
                    })
                }
            }
            , [l, g]);
            let x = () => {
                let e = document.querySelector(".lyrics-editor-content");
                sh === i ? (sh = null,
                e.style.overflow = "auto") : (sh = i,
                e.style.overflow = "hidden"),
                document.dispatchEvent(new CustomEvent("lyricsMenuStateChanged"))
            }
            ;
            return (0,
            o.useEffect)( () => (document.addEventListener("lyricsMenuStateChanged", h),
            () => {
                document.removeEventListener("lyricsMenuStateChanged", h)
            }
            ), [i, h]),
            (0,
            a.jsx)(iU.T5, {
                as: "span",
                children: (0,
                a.jsxs)("span", {
                    className: "relative select-none",
                    children: [(0,
                    a.jsx)("button", {
                        ref: s,
                        className: "my-2 h-[22px] select-none rounded-xl px-2 text-[10px] uppercase leading-none text-session-white",
                        style: {
                            backgroundColor: "rgb(var(--".concat(m, "))")
                        },
                        "data-section": r,
                        contentEditable: !1,
                        onClick: x,
                        disabled: !f,
                        children: r
                    }), l && (0,
                    a.jsx)(tM.M, {
                        children: (0,
                        a.jsx)(tk.E.div, {
                            initial: {
                                opacity: 0,
                                y: -4
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -4
                            },
                            transition: {
                                duration: .3
                            },
                            style: {
                                top: "".concat(d.top, "px"),
                                left: "".concat(d.left, "px")
                            },
                            className: " fixed z-20 h-max w-[165px] rounded-xl bg-session-gray-8",
                            children: (0,
                            a.jsx)("div", {
                                className: "flex flex-col items-start gap-1 p-2 pl-4",
                                children: sf.map(e => (0,
                                a.jsxs)("button", {
                                    className: (0,
                                    eQ.cn)("flex h-[38px] items-center gap-2 rounded-xl px-4 text-xs text-session-gray-5 hover:bg-session-off-black", r === e && "bg-session-off-black text-session-gray-4"),
                                    onClick: () => {
                                        n({
                                            type: e
                                        }),
                                        x()
                                    }
                                    ,
                                    children: [sx(e), e]
                                }, e))
                            })
                        })
                    })]
                })
            })
        }
          , sy = i5.NB.create({
            name: "songSectionsHeader",
            group: "inline",
            inline: !0,
            selectable: !1,
            atom: !1,
            isolating: !0,
            draggable: !1,
            allowGapCursor: !1,
            content: "text*",
            addAttributes: () => ({
                type: {
                    default: "Verse",
                    parseHTML: e => e.getAttribute("data-section-type"),
                    renderHTML: e => ({
                        "data-section-type": e.type
                    })
                }
            }),
            parseHTML: () => [{
                tag: "span[data-section-header]"
            }],
            renderHTML(e) {
                let {HTMLAttributes: t} = e;
                return ["span", (0,
                i5.P1)(t, {
                    "data-section-header": ""
                }), 0]
            },
            addNodeView: () => (0,
            iU.fW)(sv)
        })
          , sS = i5.hj.create({
            name: "SongSectionsHeaderTransformer",
            addProseMirrorPlugins: () => [new i4.Sy({
                key: new i4.H$("songSectionsHeaderTransformer"),
                appendTransaction: (e, t, n) => {
                    if (!e.some(e => e.docChanged))
                        return null;
                    let r = RegExp("\\[(".concat(sf.map(e => e.replace(/-/g, "\\-")).join("|"), ")(?:\\s+\\d+)?\\]"), "gi")
                      , {tr: i} = n;
                    return n.doc.descendants( (e, t) => {
                        if (!e.isText)
                            return !0;
                        let s = e.text || "";
                        r.lastIndex = 0;
                        let l = r.exec(s);
                        if ((null == l ? void 0 : l[0]) && l[1]) {
                            var a;
                            let e = t + l.index
                              , r = e + l[0].length;
                            if ((null === (a = n.doc.nodeAt(e)) || void 0 === a ? void 0 : a.type.name) === "songSectionsHeader")
                                return !0;
                            let s = n.schema.nodes.songSectionsHeader.create({
                                type: l[1]
                            });
                            i.replaceWith(e, r, s)
                        }
                        return !0
                    }
                    ),
                    i
                }
            })]
        })
          , sb = () => [sy, sS];
        var sw = n(5681)
          , sj = () => {
            var e;
            let t = tw(e => e.setLyricsEditorGetter)
              , n = eu()
              , {data: r, isLoading: i} = (0,
            Q.BT)(R.US, {
                id: J(n),
                songPath: $(n)
            })
              , [s,l] = (0,
            E.GG)("lyrics")
              , a = (0,
            o.useRef)(!1)
              , {setMode: c, completion: d} = (0,
            iK.k)({})
              , u = tw(e => e.contextMenu)
              , p = "replace" === u
              , m = eF()
              , g = tw(e => e.replaceSelectionAreaBounds)
              , f = null === (e = eu()) || void 0 === e ? void 0 : e.duration
              , h = tw(e => e.replaceSelectionAreas)
              , x = (0,
            o.useCallback)(e => {
                let t = (0,
                sw.uT)(e);
                if (a.current = !0,
                !t.trim()) {
                    c("generate"),
                    l(t);
                    return
                }
                c("edit");
                let {start: n, width: i} = g;
                if (m) {
                    if (r) {
                        let t = 0 === h.length ? (console.warn("No replace selection areas found, using fallback working region"),
                        20) : h[0].end - h[0].start
                          , n = (0,
                        sw.$M)(e);
                        l((0,
                        sw.gH)({
                            highlightDelimitedLyrics: n,
                            numWordsInSong: r.wordsFormatted.length,
                            totalDuration: null != f ? f : 32,
                            highlightDuration: t
                        }))
                    }
                } else {
                    let {lyricsStart: e, lyricsEnd: s} = nc(n, n + i, r, b);
                    l((0,
                    sw.IZ)(t, e, s) || t)
                }
            }
            , [l, c, sw.IZ, g, r, m, f, h])
              , v = eF()
              , y = [...i3.AI, ...sb(), iX.H, sr, sl, i7]
              , S = (0,
            o.useMemo)( () => {
                let e = "";
                if (null == r ? void 0 : r.lyrics)
                    e = r.lyrics;
                else if (n && "song" === n.type) {
                    var t;
                    e = null !== (t = n.song.lyrics) && void 0 !== t ? t : ""
                }
                return e.trim() ? {
                    type: "doc",
                    content: e.split("\n").map(e => ({
                        type: "paragraph",
                        content: [{
                            type: "text",
                            text: e
                        }]
                    }))
                } : {
                    type: "doc",
                    content: [{
                        type: "paragraph",
                        content: [{
                            type: "text",
                            text: ""
                        }]
                    }]
                }
            }
            , [n, r])
              , b = (0,
            iU.jE)({
                extensions: y,
                content: {
                    ...S,
                    ...S.content.length > 1 ? {
                        content: [{
                            type: "songSectionsHeader",
                            attrs: {
                                type: "Verse"
                            }
                        }, {
                            type: "paragraph",
                            content: [{
                                type: "text",
                                text: ""
                            }]
                        }]
                    } : {}
                },
                editable: p,
                onUpdate: e => {
                    let {editor: t} = e;
                    x(t.getJSON())
                }
                ,
                onCreate: e => {
                    let {editor: n} = e;
                    t( () => n)
                }
                ,
                editorProps: {
                    handleDOMEvents: {
                        keydown: (e, t) => !!("Enter" === t.key && document.querySelector("#slash-command")) || "Tab" === t.key
                    },
                    handleKeyDown: (e, t) => {
                        "Escape" === t.key && (null == b || b.commands.blur())
                    }
                    ,
                    attributes: {
                        class: "prose-headings:font-title font-default prose prose-lg min-h-[150px] max-w-full overflow-y-auto text-sm dark:prose-invert focus:outline-none"
                    }
                },
                parseOptions: {
                    preserveWhitespace: "full"
                }
            })
              , w = (0,
            o.useCallback)(e => {
                if (b) {
                    let t = [];
                    e.length > 0 && e.some(e => "" !== e.trim()) && e.forEach(e => {
                        if (e.startsWith("[") && e.endsWith("]")) {
                            let n = e.substring(1, e.length - 1);
                            t.push({
                                type: "songSectionsHeader",
                                attrs: {
                                    type: n
                                }
                            })
                        } else
                            t.push({
                                type: "paragraph",
                                content: [{
                                    type: "text",
                                    text: e
                                }]
                            })
                    }
                    );
                    let n = b.chain().setInsertingContent(!0);
                    n.clearContent(),
                    t.length > 0 && n.insertContent(t),
                    n.setInsertingContent(!1);
                    let {doc: r} = b.state
                      , i = Math.min(4, r.content.size);
                    n.setTextSelection(i),
                    n.run()
                }
            }
            , [b]);
            (0,
            o.useEffect)( () => {
                if (p) {
                    var e;
                    s !== (0,
                    sw.uT)(null !== (e = null == b ? void 0 : b.getJSON()) && void 0 !== e ? e : S) && c("edit")
                } else
                    w((0,
                    sw.uT)(S).split("\n").filter(e => "" !== e.trim()))
            }
            , [s, b, w, c, S, p, u]),
            (0,
            o.useEffect)( () => {
                b && d && b.commands.setAutocompletion(d)
            }
            , [d, b]);
            let j = em()
              , k = eg()
              , {lyricsStart: M, lyricsEnd: N} = nc(g.start, g.start + g.width, r, b)
              , C = tw(e => e.activeGenerations)
              , I = (0,
            o.useMemo)( () => {
                if (b)
                    return ni()(e => {
                        b.isDestroyed || b.commands.setSelectableRegions(e)
                    }
                    , 16)
            }
            , [b]);
            return (0,
            o.useEffect)( () => {
                if (b && v) {
                    0 === h.length ? (b.commands.setSelectableRegions([{
                        from: 0,
                        to: 0
                    }]),
                    b.commands.setSelectionRestrictionEnabled(!0)) : b.commands.setSelectionRestrictionEnabled(!1);
                    return
                }
            }
            , [b, v, h]),
            (0,
            o.useEffect)( () => {
                if (!b || v)
                    return;
                if ((!h.length || "regenerate" === u || !u) && (null == r ? void 0 : r.endTimes.at(-1))) {
                    let e = r.endTimes.at(-1);
                    if (void 0 === e)
                        return;
                    let {lyricsStart: t, lyricsEnd: n} = nc(j, e - k, r, b);
                    if (!t || !n) {
                        b.commands.setSelectionRestrictionEnabled(!1);
                        return
                    }
                    null == I || I([{
                        from: t,
                        to: n
                    }]),
                    b.commands.setSelectionRestrictionEnabled(!0);
                    return
                }
                if (!M && !N) {
                    b.commands.setSelectionRestrictionEnabled(!1);
                    return
                }
                let e = [{
                    from: M,
                    to: N
                }];
                null == I || I(e),
                b.commands.setSelectionRestrictionEnabled(!0)
            }
            , [u, r, j, k, I, b, M, N, v, h, i, C]),
            {
                editor: b,
                insertLines: w,
                lyricsStart: M,
                lyricsEnd: N
            }
        }
          , sk = () => {
            let {editor: e, lyricsStart: t, lyricsEnd: n} = sj()
              , r = (0,
            o.useRef)(null)
              , {times: i} = i2()
              , [s,l] = (0,
            o.useState)(!1)
              , [c,d] = (0,
            o.useState)(!1)
              , u = (0,
            o.useRef)(0)
              , p = tw(e => e.contextMenu)
              , m = eu()
              , g = $(m)
              , {data: f} = (0,
            Q.BT)(R.US, {
                id: J(m),
                songPath: g
            })
              , h = eH()
              , x = em()
              , y = tw(e => e.setPlayheadPositionInSeconds)
              , S = tw(e => e.play)
              , b = tw(e => e.getPlayheadPositionInSeconds)
              , w = tw(e => "playing" === e.playbackState)
              , j = (0,
            o.useCallback)( (t, n) => {
                if (!f)
                    return;
                let r = null == e ? void 0 : e.state.doc.textBetween(t, n, " ");
                if (!r)
                    return;
                let i = (0,
                iQ.WI)(f.wordsFormatted, r, t - 1);
                i.length > 0 && (y(f.startTimes[i[0]] - x),
                S())
            }
            , [f, e, y, S, x])
              , {isLoading: k} = (0,
            iK.k)({})
              , M = tw(e => e.replaceSelectionAreas)
              , N = eZ()
              , C = tw(e => e.activeGenerations)
              , I = C.length > 0;
            (0,
            o.useEffect)( () => {
                let e = r.current;
                if (e && k) {
                    let t = new MutationObserver( () => {
                        e.scrollTop = e.scrollHeight
                    }
                    );
                    return t.observe(e, {
                        childList: !0,
                        subtree: !0
                    }),
                    () => t.disconnect()
                }
            }
            , [k]);
            let T = tw(e => e.lyricsMenuOpen)
              , E = tw(e => e.replaceLyricsSelections)
              , L = eF();
            return (0,
            o.useEffect)( () => {
                if (!e || !(null == f ? void 0 : f.startTimes) || L)
                    return;
                if ("replace" === p || "regenerate" === p || !w || !T) {
                    e.commands.setKaraokeHighlight(0, 0),
                    u.current && cancelAnimationFrame(u.current);
                    return
                }
                let t = -1
                  , n = new Map
                  , r = 0;
                e.state.doc.descendants( (e, t) => {
                    if ("paragraph" === e.type.name) {
                        let i = e.textContent
                          , s = i.split(/\s+/)
                          , l = 0;
                        s.forEach(e => {
                            if (e) {
                                let s = t + i.indexOf(e, l)
                                  , a = s + e.length;
                                n.set(r, {
                                    start: s,
                                    end: a
                                }),
                                r++,
                                l = i.indexOf(e, l) + e.length
                            }
                        }
                        )
                    }
                    return !0
                }
                );
                let i = () => {
                    let r = b()
                      , l = f.startTimes.findIndex(e => e > r + x)
                      , a = -1 === l ? f.startTimes.length - 1 : l - 1;
                    if (a < 0) {
                        u.current = requestAnimationFrame(i);
                        return
                    }
                    if (a !== t) {
                        t = a;
                        let r = n.get(a);
                        r && !s && e.chain().setKaraokeHighlight(r.start + 1, r.end + 1).run()
                    }
                    u.current = requestAnimationFrame(i)
                }
                ;
                return i(),
                () => {
                    u.current && cancelAnimationFrame(u.current)
                }
            }
            , [e, f, b, w, p, T, L, s, x]),
            (0,
            a.jsx)(a.Fragment, {
                children: (0,
                a.jsx)("div", {
                    className: (0,
                    eQ.cn)("relative ml-4 h-full shrink-0 bg-session-gray-8 text-sm text-session-gray-5 transition-[width] duration-300", T ? "w-[340px]" : "w-0"),
                    children: (0,
                    a.jsx)("div", {
                        className: (0,
                        eQ.cn)("absolute left-0 top-0 h-full w-[340px] shrink-0 bg-session-gray-8 text-sm text-session-gray-5"),
                        children: T && (0,
                        a.jsxs)("div", {
                            className: (0,
                            eQ.cn)("h-full w-[340px] flex-col items-start justify-start"),
                            children: [M.length > 0 && M.length === E.length + 1 && 0 === C.length && (0,
                            a.jsx)(ne, {
                                position: "left",
                                message: "Select the lyrics matching the waveform region you want to replace.",
                                localStorageKey: v.f3,
                                onClose: () => d(!0)
                            }), (0,
                            a.jsxs)("div", {
                                className: "flex size-full flex-col items-start justify-start gap-4 p-4",
                                children: [(0,
                                a.jsx)("div", {
                                    className: "flex w-full items-center justify-between px-0 pt-2",
                                    children: (0,
                                    a.jsxs)("div", {
                                        className: "flex select-none items-center gap-3",
                                        children: [(0,
                                        a.jsx)(iO, {}), (0,
                                        a.jsx)("h2", {
                                            className: "text-[14px] font-medium",
                                            children: "Lyrics"
                                        })]
                                    })
                                }), (0,
                                a.jsx)(iY, {
                                    className: (0,
                                    eQ.cn)("relative flex w-full grow rounded-[16px] border border-transparent bg-session-black p-0 transition-all", s && "border-session-gray-6", (h || I) && "pointer-events-none select-none opacity-70"),
                                    children: (0,
                                    a.jsx)(iW.fm, {
                                        children: (0,
                                        a.jsxs)("div", {
                                            ref: r,
                                            className: (0,
                                            eQ.cn)("lyrics-editor-content relative h-full overflow-y-auto p-4 text-sm", k ? "scrollbar-hide" : "minimal-scrollbar"),
                                            children: [(0,
                                            a.jsx)(iJ, {
                                                contextMenu: p,
                                                editorRef: r,
                                                onFocus: () => l(!0),
                                                onBlur: () => l(!1)
                                            }), "extend" !== p && (0,
                                            a.jsxs)(iU.kg, {
                                                editor: e,
                                                onFocus: () => l(!0),
                                                onBlur: () => l(!1),
                                                onClick: () => {
                                                    var t;
                                                    if ("replace" === p || L)
                                                        return;
                                                    let {from: n} = (null == e ? void 0 : e.state.selection) || {};
                                                    if (void 0 === n || !(null == e ? void 0 : e.state.doc.resolve(n)))
                                                        return;
                                                    let r = n
                                                      , i = n;
                                                    for (; r > 0; ) {
                                                        let t = null == e ? void 0 : e.state.doc.textBetween(r - 1, r);
                                                        if (!t || /\s/.test(t))
                                                            break;
                                                        r--
                                                    }
                                                    for (; i < (null !== (t = null == e ? void 0 : e.state.doc.content.size) && void 0 !== t ? t : 0); ) {
                                                        let t = null == e ? void 0 : e.state.doc.textBetween(i, i + 1);
                                                        if (!t || /\s/.test(t))
                                                            break;
                                                        i++
                                                    }
                                                    j(r, i)
                                                }
                                                ,
                                                className: (0,
                                                eQ.cn)("cursor-initial prose prose-invert max-w-none", "replace" === p && "lyrics-editor-replace-mode"),
                                                children: [(0,
                                                a.jsxs)(iq.e, {
                                                    className: "z-50 h-auto max-h-[500px] overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all",
                                                    children: [(0,
                                                    a.jsx)(iW.tv, {
                                                        className: "px-2 text-muted-foreground",
                                                        children: "No results"
                                                    }), (0,
                                                    a.jsx)(iq.f, {
                                                        children: iX.L.map(e => (0,
                                                        a.jsxs)(iW.te, {
                                                            value: e.title,
                                                            onCommand: t => {
                                                                var n;
                                                                return null === (n = e.command) || void 0 === n ? void 0 : n.call(e, t)
                                                            }
                                                            ,
                                                            className: "flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm aria-selected:bg-accent hover:bg-accent ",
                                                            children: [(0,
                                                            a.jsx)("div", {
                                                                className: "flex size-10 shrink-0 items-center justify-center rounded-md border border-muted bg-background",
                                                                children: e.icon
                                                            }), (0,
                                                            a.jsxs)("div", {
                                                                children: [(0,
                                                                a.jsx)("p", {
                                                                    className: "font-medium",
                                                                    children: e.title
                                                                }), (0,
                                                                a.jsx)("p", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: e.description
                                                                })]
                                                            })]
                                                        }, e.title))
                                                    })]
                                                }), e && void 0 != t && void 0 != n && (0,
                                                a.jsx)(i1, {
                                                    times: [i[0], i[1]],
                                                    lyricsStart: t,
                                                    lyricsEnd: n
                                                })]
                                            })]
                                        })
                                    })
                                }), h && (0,
                                a.jsxs)("span", {
                                    className: "flex items-center gap-2 text-center text-xs text-session-gray-5",
                                    children: [(0,
                                    a.jsx)(t_.Z, {
                                        className: "inline animate-spin",
                                        size: 20
                                    }), "Auto aligning lyrics ..."]
                                }), (N || c) && (0,
                                a.jsxs)("span", {
                                    className: "flex items-center gap-2 text-center text-xs text-session-gray-5",
                                    children: [(0,
                                    a.jsx)(nq.Z, {
                                        size: 16
                                    }), " Lyrics could not be aligned with audio."]
                                })]
                            })]
                        })
                    })
                })
            })
        }
          , sM = () => {
            let e = (0,
            o.useRef)(null)
              , t = (0,
            c.useSearchParams)()
              , n = t.get("songId")
              , r = t.get("version")
              , i = t.get("uploadId")
              , s = tw(e => e.name)
              , l = r6(null != i ? i : null)
              , u = (0,
            c.useRouter)();
            tj();
            let p = tw(e => e.pause);
            (0,
            o.useEffect)( () => () => {
                "playing" === tw.getState().playbackState && p()
            }
            , [p]),
            nz(n, r, l),
            nZ(),
            function() {
                let {refetch: e} = (0,
                Q.cO)(R.US);
                r2(),
                function() {
                    let e = tw(e => e.clipGroups)
                      , t = (0,
                    T.Q)(e => e.generationQueue)
                      , n = tw(e => e.reportPendingSong)
                      , r = tw(e => e.samples);
                    (0,
                    o.useEffect)( () => {
                        if (0 === e.length)
                            return;
                        let i = e[0];
                        r1(t.flatMap(e => {
                            var t;
                            return null !== (t = e.track_ids) && void 0 !== t ? t : []
                        }
                        ), i, r).then(e => {
                            e.forEach(e => {
                                n(e)
                            }
                            )
                        }
                        )
                    }
                    , [t, e, n, r])
                }();
                let {data: t} = (0,
                r0.Z)()
                  , n = tw(e => e.reportSongGenerationCompletion)
                  , r = tw(e => e.reportSongGenerationFailure)
                  , i = tw(e => e.activeGenerationsIncludeCompletedTrack)
                  , s = tw(e => e.activeGenerationsIncludeFailedTrack)
                  , l = (0,
                T.Q)((0,
                K.N)(e => e.completedTracks))
                  , a = (0,
                T.Q)((0,
                K.N)(e => e.errorTracks))
                  , c = tw(e => e.name);
                (0,
                o.useEffect)( () => {
                    ( () => {
                        let i = Array.from(l.keys())
                          , o = new Set
                          , c = i.filter(e => {
                            let n = null == t ? void 0 : t.find(t => t.id === e);
                            return !!(null == n ? void 0 : n.song_path)
                        }
                        ).map(e => null == t ? void 0 : t.find(t => t.id === e)).filter(e => !!e);
                        c.length > 0 && (e(),
                        c.forEach(e => {
                            o.has(e.generation_id) || (o.add(e.generation_id),
                            tw.getState().pushStateToHistory("Generated takes")),
                            n(e) && T.Q.getState().removeCompletedTrack(e.id)
                        }
                        ));
                        let u = Array.from(a.keys()).filter(e => !s(e)).map(e => null == t ? void 0 : t.find(t => t.id === e)).filter(e => !!e);
                        u.length > 0 && (u.forEach(e => {
                            var t, n;
                            let i = null !== (n = null === (t = a.get(e.id)) || void 0 === t ? void 0 : t.error) && void 0 !== n ? n : "Failed to generate audio";
                            d.Am.error("".concat(i), h.TQ),
                            r(e)
                        }
                        ),
                        T.Q.getState().errorTracks.clear())
                    }
                    )()
                }
                , [i, s, l, n, t, a, r, c])
            }(),
            r5(),
            r4();
            let m = tw(e => e.name);
            return (0,
            o.useEffect)( () => {
                let e = setInterval( () => {
                    tw.getState().clearTimedOutGenerations(Date.now())
                }
                , 1e3);
                return () => clearInterval(e)
            }
            , []),
            (0,
            o.useEffect)( () => (tw.getState().setFatalErrorHandler(e => {
                d.Am.error(e, h.TQ),
                setTimeout( () => void u.push("/library"), 2e3)
            }
            ),
            () => {
                tw.getState().setFatalErrorHandler(null)
            }
            ), [u]),
            (0,
            o.useEffect)( () => (e.current && (q = e.current),
            () => {
                q = null
            }
            ), [e]),
            (0,
            a.jsxs)("div", {
                className: "flex size-full overflow-hidden bg-session-gray-7 ",
                children: [(0,
                a.jsxs)("div", {
                    className: "flex size-full flex-col items-center overflow-hidden p-6 pr-0",
                    children: [(0,
                    a.jsx)(nP.g, {
                        ref: e
                    }), (0,
                    a.jsx)(iB, {
                        songTitle: m ? Y(m) : s
                    }), (0,
                    a.jsx)(nR, {}), (0,
                    a.jsx)(r$, {})]
                }), (0,
                a.jsx)(sk, {})]
            })
        }
    },
    42446: function(e, t, n) {
        "use strict";
        n.d(t, {
            AudioContextProvider: function() {
                return l
            }
        });
        var r = n(27573)
          , i = n(7653)
          , s = n(14314);
        let l = e => {
            let {children: t} = e;
            return (0,
            i.useEffect)( () => {
                let e = (0,
                s.k)()
                  , t = () => {
                    "suspended" === e.state && e.resume()
                }
                ;
                return document.addEventListener("click", t),
                document.addEventListener("touchstart", t),
                document.addEventListener("keydown", t),
                () => {
                    document.removeEventListener("click", t),
                    document.removeEventListener("touchstart", t),
                    document.removeEventListener("keydown", t)
                }
            }
            , []),
            (0,
            r.jsx)(r.Fragment, {
                children: t
            })
        }
    },
    95782: function(e, t, n) {
        "use strict";
        var r = n(27573);
        t.Z = e => (0,
        r.jsxs)("svg", {
            width: "31",
            height: "26",
            viewBox: "0 0 31 26",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [(0,
            r.jsx)("path", {
                d: "M18.8949 10.6281H21.1652V15.3721H18.8949V10.6281ZM23.4354 6.28388H25.7057V19.7164H23.4354V6.28388ZM14.3545 5.03125H16.6247V20.969H14.3545V5.03125ZM27.9759 11.8808H30.2462V14.1195H27.9759V11.8808ZM9.81396 10.7614H12.0842V15.2389H9.81396V10.7614Z",
                fill: "currentColor"
            }), (0,
            r.jsx)("path", {
                d: "M9.83245 8.65373H12.1027V17.3422H9.83245V8.65373ZM14.3729 6.28172H16.6432V19.7142H14.3729V6.28172ZM5.29195 4.04297H7.5622V21.953H5.29195V4.04297ZM18.9134 11.8786H21.1837V14.1174H18.9134V11.8786ZM0.751465 10.7592H3.02171V15.2367H0.751465V10.7592Z",
                fill: "currentColor"
            }), (0,
            r.jsx)("path", {
                d: "M27.9702 8.78906H30.2405V17.2111H27.9702V8.78906Z",
                fill: "currentColor"
            }), (0,
            r.jsx)("path", {
                d: "M9.36084 2.09961H21.6772C23.2789 2.09961 24.5776 3.39837 24.5776 5V21.3662C24.5774 22.9676 23.2787 24.2656 21.6772 24.2656H9.36084C7.75938 24.2656 6.46071 22.9676 6.46045 21.3662V5C6.46045 3.39837 7.75921 2.09961 9.36084 2.09961Z",
                stroke: "currentColor",
                strokeWidth: "2.2"
            })]
        })
    },
    829: function(e, t, n) {
        "use strict";
        n.d(t, {
            gT: function() {
                return r
            },
            t4: function() {
                return i
            }
        }),
        n(69693);
        var r = n(13721)
          , i = n(74249);
        n(79300),
        n(44844)
    }
}, function(e) {
    e.O(0, [7495, 724, 4310, 9527, 3910, 5458, 8287, 7611, 5431, 5329, 7374, 6340, 6646, 3950, 7787, 4297, 5669, 6438, 7551, 8797, 639, 833, 4731, 9497, 6659, 1270, 7562, 1540, 700, 5346, 1433, 9531, 7008, 3420, 3693, 1331, 4267, 5816, 4641, 6116, 9660, 6564, 1951, 8740, 5766, 1679, 1301, 130, 8376, 98, 9308, 1293, 7922, 1744], function() {
        return e(e.s = 17949)
    }),
    _N_E = e.O()
}
]);
