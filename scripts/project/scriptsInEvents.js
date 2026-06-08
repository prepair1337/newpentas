


const scriptsInEvents = {

	async Tetris_Event1_Act29(runtime, localVars)
	{
		window.ysdk.multiplayer.sessions.init()
	},

	async Tetris_Event2_Act29(runtime, localVars)
	{
		window.ysdk.multiplayer.sessions.init()
	},

	async Tetris_Event118_Act12(runtime, localVars)
	{
		
	},

	async Tetris_Event120_Act1(runtime, localVars)
	{
		window.ysdk.features.GameplayAPI?.start();
	},

	async Tetris3_Event153_Act1(runtime, localVars)
	{
(function() {
  const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
  
  // Просто отправляем запрос!
  fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${runtime.globalVars.myPlayerId}`, {
    method: "PATCH",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      status: "vihappizd",
      last_ping: new Date().toISOString()
    })
  })
  .then(() => console.log("✅ Игрок вышел отправлено"))
  .catch(() => console.log("💥 Ошибка"));
})();
	},

	async Tetrismultiplayer_Event43_Act2(runtime, localVars)
	{
// ==================== ВЫКЛЮЧЕНИЕ ТРАНСЛЯЦИИ ПРИ ВЫХОДЕ ====================
const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";

function getAuthHeaders() {
    const baseHeaders = {
        "apikey": SUPABASE_KEY,
        "Content-Type": "application/json"
    };
    if (window.supabaseAuthToken) {
        baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
        baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
}

const viewerId = runtime.globalVars.ViewerPlayer || "";
const lobbyId = runtime.globalVars.currentLobby || runtime.globalVars.LobbyID || "";

if (viewerId && lobbyId) {
    console.log(`👋 Выход из макета. Выключаю трансляцию для игрока: ${viewerId}`);
    
    fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${viewerId}&lobby_id=eq.${lobbyId}`, {
        method: "PATCH",
        headers: getAuthHeaders(),
 credentials: "omit",
        body: JSON.stringify({ has_viewers: false }) 
    })
    .then(response => {
        if (response.ok) {
            console.log("✅ Трансляция успешно выключена");
        } else {
            console.error("❌ Ошибка при выключении трансляции:", response.status);
        }
    })
    .catch(err => {
        console.error("❌ Ошибка сети при выключении трансляции:", err);
    });
} else {
    console.log("ℹ️ Нет активной цели для выключения или нет лобби");
}
	},

	async Tetrismultiplayer_Event44_Act2(runtime, localVars)
	{
// ==================== ВЫКЛЮЧЕНИЕ ТРАНСЛЯЦИИ ПРИ ВЫХОДЕ ====================
const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";

function getAuthHeaders() {
    const baseHeaders = {
        "apikey": SUPABASE_KEY,
        "Content-Type": "application/json"
    };
    if (window.supabaseAuthToken) {
        baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
        baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
}

const viewerId = runtime.globalVars.ViewerPlayer || "";
const lobbyId = runtime.globalVars.currentLobby || runtime.globalVars.LobbyID || "";

if (viewerId && lobbyId) {
    console.log(`👋 Выход из макета. Выключаю трансляцию для игрока: ${viewerId}`);
    
    fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${viewerId}&lobby_id=eq.${lobbyId}`, {
        method: "PATCH",
        headers: getAuthHeaders(),
 credentials: "omit",
        body: JSON.stringify({ has_viewers: false }) 
    })
    .then(response => {
        if (response.ok) {
            console.log("✅ Трансляция успешно выключена");
        } else {
            console.error("❌ Ошибка при выключении трансляции:", response.status);
        }
    })
    .catch(err => {
        console.error("❌ Ошибка сети при выключении трансляции:", err);
    });
} else {
    console.log("ℹ️ Нет активной цели для выключения или нет лобби");
}
	},

	async Tetrismultiplayer_Event50_Act1(runtime, localVars)
	{
// ==================== ОЧИСТКА ПАМЯТИ ====================
try {
    const bricks = runtime.objects.Fall_Bricks.getAllInstances();
    for (const brick of bricks) brick.destroy();
    console.log("🧹 Очищены все старые кирпичи");
} catch(e) {}

// ==================== ФУНКЦИЯ ДЛЯ ЗАГОЛОВКОВ С AUTH ====================
function getAuthHeaders() {
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
    const baseHeaders = {
        "apikey": SUPABASE_KEY,
        "Content-Type": "application/json"
    };
    if (window.supabaseAuthToken) {
        baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
        baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
}

// ==================== ГЛОБАЛЬНАЯ ФУНКЦИЯ ПЕРЕКЛЮЧЕНИЯ ====================
window.switchToNextAlivePlayer = async function() {
    const currentLobby = runtime.globalVars.currentLobby;
    const currentViewerId = runtime.globalVars.ViewerPlayer;
    const myId = runtime.globalVars.myPlayerId;
    window.isAlreadyLeaving = false;

    if (!currentLobby) return;

    console.log("🔄 Авто-переключение: ищу замену...");

    try {
        const r = await fetch(`${SUPABASE_URL}/rest/v1/players?lobby_id=eq.${currentLobby}&status=eq.naserve&order=score.desc`, {
            headers: getAuthHeaders()
        });
        const players = await r.json();
        const alive = players.filter(p => p.player_id !== currentViewerId && p.player_id !== myId);
        
        if (alive.length > 0) {
            const target = alive[0];
            console.log(`🚀 Переключаюсь на: ${target.nickname}`);
            
            const rpcRes = await fetch(`${SUPABASE_URL}/rest/v1/rpc/switch_viewer`, {
                method: "POST",
                headers: getAuthHeaders(),
                body: JSON.stringify({
                    p_new_target_id: target.player_id,
                    p_viewer_id: myId
                })
            });
            
            const rpcData = await rpcRes.json();
            if (rpcRes.ok && rpcData.success) {
                startWatching(target);
            } else {
                console.error("RPC switch_viewer failed:", rpcData);
                if (currentViewerId) {
                    await fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${currentViewerId}`, {
                        method: "PATCH", headers: getAuthHeaders(),
                        body: JSON.stringify({ has_viewers: false })
                    }).catch(() => {});
                }
                await fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${target.player_id}`, {
                    method: "PATCH", headers: getAuthHeaders(),
                    body: JSON.stringify({ has_viewers: true })
                }).catch(() => {});
                startWatching(target);
            }
        } else {
            console.log("👁️ Живых нет, выходим...");
            if (currentViewerId) {
                await fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${currentViewerId}`, {
                    method: "PATCH", headers: getAuthHeaders(),
                    body: JSON.stringify({ has_viewers: false })
                }).catch(() => {});
            }
            runtime.globalVars.ViewerPlayer = "";
            if (runtime.layout.name.includes("Mobilya")) {
                runtime.goToLayout("Obshiy3Mobilya");
            } else {
                runtime.goToLayout("Obshiy3");
            }
        }
    } catch (err) {
        console.error("Ошибка переключения:", err);
    }
};

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";

const currentLobby = runtime.globalVars.currentLobby || "";
const myPlayerId = runtime.globalVars.myPlayerId || "";

window.lastFrameTime = Date.now();

// ==================== ПУЛ ОБЪЕКТОВ ====================
window.brickPool = {
    pool: [],
    maxPoolSize: 300,
    
    getBrick: function() {
        if (this.pool.length > 0) {
            const brick = this.pool.pop();
            brick.isVisible = true;
            return brick;
        }
        return runtime.objects.Fall_Bricks.createInstance(0, 0, 0);
    },
    
    returnBrick: function(brick) {
        if (this.pool.length < this.maxPoolSize) {
            brick.isVisible = false;
            brick.x = -100;
            brick.y = -100;
            this.pool.push(brick);
        } else {
            brick.destroy();
        }
    },
    
    clearAll: function() {
        const instances = runtime.objects.Fall_Bricks.getAllInstances();
        instances.forEach(inst => {
            if (this.pool.length < this.maxPoolSize) {
                inst.isVisible = false;
                inst.x = -100;
                inst.y = -100;
                this.pool.push(inst);
            } else {
                inst.destroy();
            }
        });
    }
};

// СБРОС ПРИ ВХОДЕ
if (window.vSync) {
    window.vSync.q = [];
    window.vSync.isP = false;
    if (window.vSync.knownFrames) window.vSync.knownFrames.clear();
    window.vSync.lastVId = "";
    console.log("🧼 Память наблюдения очищена");
}

if (window.scoreUpdater) {
    clearInterval(window.scoreUpdater);
    window.scoreUpdater = null;
}

// ФУНКЦИИ
const showNetworkError = (isError) => {
    const o1 = runtime.objects["hostvishel"];
    const o2 = runtime.objects["hostvishel2"];
    if (o1 && o2) {
        const inst1 = o1.getFirstInstance();
        const inst2 = o2.getFirstInstance();
        if (inst1 && inst2) {
            inst1.opacity = isError ? 100 : 0;
            inst2.opacity = isError ? 100 : 0;
            if (isError) {
                window.forceUpdateText("hostvishel", "ОШИБКА СЕТИ");
                window.forceUpdateText("hostvishel2", "Проверьте интернет-соединение...");
            }
        }
    }
};

window.forceUpdateText = (objName, value) => {
    const obj = runtime.objects[objName];
    if (!obj) return;
    const inst = obj.getFirstInstance ? obj.getFirstInstance() : (obj.instances ? obj.instances[0] : null);
    if (!inst) return;
    const valStr = value.toString();
    try {
        if (typeof inst.setText === "function") inst.setText(valStr);
        inst.text = valStr;
        if (inst.textString !== undefined) inst.textString = valStr;
        inst.runtime.redraw = true; 
    } catch(e) {}
};

window.startScoreTicker = function(targetId) {
    if (window.scoreUpdater) clearInterval(window.scoreUpdater);
    
    window.scoreUpdater = setInterval(() => {
        if (runtime.globalVars.ViewerPlayer !== targetId) {
            clearInterval(window.scoreUpdater);
            return;
        }

        fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${targetId}&select=score,status,lobby_id`, {
            headers: getAuthHeaders()
        })
        .then(r => r.json())
        .then(data => {
            showNetworkError(false);
            if (data && data[0]) {
                const p = data[0];
                window.forceUpdateText("txtcount2", p.score || 0);

                if (p.status === "dasdoh" || p.status === "vixapizd" || p.lobby_id !== currentLobby) {
                    console.log(`💀 Игрок ${targetId} закончил. Ищу следующего...`);
                    clearInterval(window.scoreUpdater);
                    setTimeout(() => { window.switchToNextAlivePlayer(); }, 2000);
                } 
            } else {
                clearInterval(window.scoreUpdater);
                window.findFirstPlayer();
            }
        })
        .catch(() => showNetworkError(true));
    }, 2000);
};

function startWatching(target) {
    if (!target) return;
    
    runtime.globalVars.ViewerPlayer = target.player_id;
    window.targetDevice = target.device_type || "pc";
    
    window.forceUpdateText("txtlabel5", "Загрузка...");
window.forceUpdateText("txtcount2", target.score || 0);
    
    if (window.vSync) {
        window.vSync.q = [];
        window.vSync.knownFrames = window.vSync.knownFrames || new Set();
        window.vSync.knownFrames.clear();
        window.vSync.isP = false;
        window.vSync.lastFrameTimestamp = Date.now();
        window.vSync.lastVId = target.player_id;
        window.vSync.playerNickname = target.nickname;
        window.vSync.waitingFirstFrame = true; // ← ВОТ ЭТО ДОБАВЬ
    }
    
    window.startScoreTicker(target.player_id);
    if (window.brickPool) window.brickPool.clearAll();
    console.log(`⚡ Принудительно запрашиваю данные для ${target.nickname}`);
    fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${target.player_id}&select=game_data`, {
        headers: getAuthHeaders()
    })
    .then(r => r.json())
    .then(p => {
        if (p && p[0] && p[0].game_data) {
            console.log(`📦 Получил данные сразу после старта`);
            try {
                const data = JSON.parse(p[0].game_data);
                if (Array.isArray(data) && window.vSync) {
                                        data.forEach(f => {
                        if(!window.vSync.knownFrames.has(f)) {
                            try {
                                JSON.parse(f);
                                window.vSync.q.push(f);
                                window.vSync.knownFrames.add(f);
                            } catch(e) {}
                        }
                    });
                }
            } catch(e) {}
        }
    })
    .catch(err => console.log("Не удалось принудительно загрузить:", err));
    
    console.log(`✅ Наблюдаю за: ${target.nickname} (${window.targetDevice})`);
}

window.findFirstPlayer = function() {
    if (window.gameEndingInProgress) {
        console.log("🚫 Игра завершается, поиск отменен");
        return;
    }
    
    console.log("👁️ Ищу живого игрока...");
    
    const lobby = runtime.globalVars.currentLobby || runtime.globalVars.LobbyID;
    const myId = runtime.globalVars.myPlayerId;

    if (!lobby) {
        console.warn("⚠️ Нет лобби!");
        return; 
    }

    let url = `${SUPABASE_URL}/rest/v1/players?lobby_id=eq.${lobby}&status=eq.naserve&order=score.desc&limit=1`;
    if (myId) url += `&player_id=neq.${myId}`;

    fetch(url, { headers: getAuthHeaders() })
    .then(r => r.json())
    .then(async players => {
        if (players && players.length > 0) {
            const target = players[0];
            
            try {
                const rpcRes = await fetch(`${SUPABASE_URL}/rest/v1/rpc/switch_viewer`, {
                    method: "POST",
                    headers: getAuthHeaders(),
                    body: JSON.stringify({
                        p_new_target_id: target.player_id,
                        p_viewer_id: myId
                    })
                });
                
                const rpcData = await rpcRes.json();
                
                if (rpcRes.ok && rpcData.success) {
                    console.log(`✅ RPC успешен, запускаю показ ${target.nickname}`);
                    startWatching(target);
                } else {
                    console.error("❌ RPC вернул ошибку:", rpcData);
                    await fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${target.player_id}`, {
                        method: "PATCH",
                        headers: getAuthHeaders(),
                        body: JSON.stringify({ has_viewers: true })
                    });
                    startWatching(target);
                }
            } catch (err) {
                console.error("❌ Сеть или RPC упал:", err);
                setTimeout(() => window.findFirstPlayer(), 500);
            }
            
        } else {
            if (window.isAlreadyLeaving) return;
            window.isAlreadyLeaving = true;
            
            console.log("👁️ Живых нет. Выходим...");
            try { runtime.callAction("GamePush", "gameplay-start"); } catch(e) {}
            
            if (runtime.layout.name.includes("Mobilya")) {
                runtime.goToLayout("Obshiy3Mobilya");
            } else {
                runtime.goToLayout("Obshiy3");
            }
        }
    })
    .catch(err => console.error("❌ Ошибка:", err));
};

// СТАРТ
window.findFirstPlayer();

// ФОРСИРОВАННЫЙ ОПРОС
window.forcePolling = setTimeout(() => {
    console.log("⏱️ Завершаю форсированный опрос");
    window.forcePolling = null;
}, 5000);

if (!window.acceleratedPoll) {
    window.acceleratedPoll = setInterval(() => {
        if (!window.forcePolling) {
            clearInterval(window.acceleratedPoll);
            window.acceleratedPoll = null;
            return;
        }
        if (window.vSync) window.vSync.lastUpdate = 0;
    }, 500);
}

window.debugViewer = setInterval(() => {
    if (runtime.globalVars.ViewerPlayer) {
        console.log(`📊 Статус: плеер=${window.vSync?.isP}, кадров=${window.vSync?.q.length}, knownFrames=${window.vSync?.knownFrames?.size || 0}`);
    }
}, 2000);
	},

	async Tetrismultiplayer_Event50_Act2(runtime, localVars)
	{
		
	},

	async Tetrismultiplayer_Event51_Act1(runtime, localVars)
	{
// ==================== EVERY TICK (ИСПРАВЛЕННЫЙ) ====================

function getAuthHeaders() {
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
    const baseHeaders = {
        "apikey": SUPABASE_KEY,
        "Content-Type": "application/json"
    };
    if (window.supabaseAuthToken) {
        baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
        baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
}

// 1. Проверка макета
const currentLayout = runtime.layout.name;
if (!currentLayout.includes("TetrisViewer") && !currentLayout.includes("TetrisMultiplayerMobilya2")) {
    if (window.vSync) {
        window.vSync.isP = false;
        window.vSync.q = [];
    }
    if (window.brickPool) window.brickPool.clearAll();
    return;
}

// ==================== ИНИЦИАЛИЗАЦИЯ (один раз) ====================
if (!window.isSpectatorInitialized) {
    window.phoneDebug = [];
    window.logToPhone = function(msg) {
        const logEntry = `${new Date().toLocaleTimeString()}: ${msg}`;
        window.phoneDebug.push(logEntry);
        if (window.phoneDebug.length > 30) window.phoneDebug.shift();
        console.log("[PHONE]", msg);
    };

    window.brickPool = {
        pool: [],
        maxPoolSize: 300,
        getBrick: function() {
            while (this.pool.length > 0) {
                const b = this.pool.pop();
                if (b) {
                    try { b.isVisible = true; return b; } catch(e) {}
                }
            }
            try { return runtime.objects.Fall_Bricks.createInstance(0, 0, 0); } 
            catch(e) { return null; }
        },
        clearAll: function() {
            try {
                const instances = runtime.objects.Fall_Bricks.getAllInstances();
                for (const inst of instances) {
                    try { inst.destroy(); } catch(e) {}
                }
                this.pool = [];
            } catch(e) {}
        }
    };

    window.isSpectatorInitialized = true;
    window.logToPhone("✅ Система запущена");
}

// ==================== НАБЛЮДАТЕЛЬ ====================
const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";

const vId = runtime.globalVars.ViewerPlayer || "";
const myId = runtime.globalVars.myPlayerId || "";

if (!vId) return;

if (!window.vSync) {
    window.vSync = { 
        q: [], isP: false, lastUpdate: 0, knownFrames: new Set(), 
        lastVId: "", targetDevice: "pc", baseTimeOffset: null,
        isSwitching: false, waitingFirstFrame: true 
    };
}
const vs = window.vSync;

// СБРОС ПРИ СМЕНЕ ИГРОКА
if (vs.lastVId !== vId) {
    window.logToPhone(`🔄 СМЕНА ИГРОКА: ${vId}`);
    vs.lastUpdate = 0; vs.lastVId = vId; vs.q = []; vs.knownFrames.clear(); 
    vs.isP = false; vs.baseTimeOffset = null; vs.isSwitching = false; vs.waitingFirstFrame = true;
    if (window.brickPool) window.brickPool.clearAll();
    if (window.startScoreTicker) window.startScoreTicker(vId);
}

const NOW = Date.now();

// ЗАГРУЗКА КАДРОВ
if (NOW - vs.lastUpdate > 1000) {
    vs.lastUpdate = NOW;
    
    fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${vId}&select=game_data,device_type,status,nickname,score`, {
        headers: getAuthHeaders()
    })
    .then(r => r.json())
    .then(async p => {
        if (window.showNetworkError) window.showNetworkError(false);
        if (!p || !p[0]) return;
        
        const playerData = p[0];
        vs.targetDevice = playerData.device_type || "pc";
        window.targetDevice = vs.targetDevice;
        
        if ((playerData.status === "dasdoh" || playerData.status === "vihappizd" || playerData.status === "vixapizd") && !vs.isSwitching) {
            vs.isSwitching = true;
            window.logToPhone("💀 Игрок умер, ищу следующего...");
            window.switchToNextAlivePlayer();
            return;
        }

        const rawData = playerData.game_data;
        if (!rawData || rawData === "[]") return; 
        
        try {
            const data = JSON.parse(rawData);
            if (!Array.isArray(data) || data.length === 0) return;
            
            if (vs.waitingFirstFrame) {
                vs.q = []; vs.knownFrames.clear(); vs.waitingFirstFrame = false;
                window.logToPhone("📥 Получены первые кадры нового игрока");
                if (window.forceUpdateText) {
                    window.forceUpdateText("txtlabel5", vs.playerNickname || playerData.nickname || "Игрок");
                }
            }

            data.forEach(f => {
                if (!vs.knownFrames.has(f)) { 
                    try {
                        JSON.parse(f);
                        vs.q.push(f);
                        vs.knownFrames.add(f);
                    } catch(e) {}
                }
            });
            
            if (!vs.isP && vs.q.length >= 5) play();
        } catch(e) {}
    })
    .catch(err => {
        if (window.showNetworkError) window.showNetworkError(true);
    });
}

if (vs.q.length > 20 && vs.baseTimeOffset === null) {
    vs.q = vs.q.slice(-15);
    window.logToPhone(`📦 Обрезал историю до последних 15 кадров`);
}

// ========== ФУНКЦИЯ ОТРИСОВКИ ==========
function play() {
    if (vs.isP) return;
    vs.isP = true;
    let playbackOffset = 1300;

    function drawBricks(frameObj) {
        if (!window.brickPool || !frameObj || !frameObj.b) return;
        
        try {
            const instances = runtime.objects.Fall_Bricks.getAllInstances();
            for (const inst of instances) {
                try { inst.destroy(); } catch(e) {}
            }
        } catch(e) {}
        
        const bricksArray = frameObj.b;
        let iAmMobile = false;
        try { iAmMobile = runtime.layout.name.includes("Mobilya"); } catch(e) {}
        const targetMob = (vs.targetDevice === "mob");
        
        for (let i = 0; i < bricksArray.length; i++) {
            const brick = bricksArray[i];
            if (!brick || brick.length < 3) continue;
            
            let x = brick[0] - 2.5;
            let y = brick[1];
            let frame = brick[2] || 0;
            
            if (targetMob) {
                if (!iAmMobile) { x += 4.0; y += 2.0; } 
                else { x += 2.5; y += 2.0; }
            } else if (iAmMobile) { 
                x -= 1.5; if (y < 2) y += 0.5; 
            }
            
            try {
                const inst = runtime.objects.Fall_Bricks.createInstance(0, x * 32, y * 32);
                if (inst) {
                    inst.animationFrame = frame;
                }
            } catch(e) {}
        }
    }
    
    function step() {
        try {
            if (!runtime.layout || (!runtime.layout.name.includes("TetrisViewer") && !runtime.layout.name.includes("TetrisMultiplayerMobilya2"))) {
                vs.isP = false; return;
            }
        } catch(e) { vs.isP = false; return; }

        if (vs.q.length > 80) {
            vs.q = vs.q.slice(-10); vs.baseTimeOffset = null;
            window.logToPhone("🚀 Сброс очереди");
        }
        
        if (vs.lastVId !== (runtime.globalVars.ViewerPlayer || "") || vs.q.length === 0) {
            vs.isP = false; return;
        }

        const now = Date.now();
        
        let frameObj;
        try {
            frameObj = JSON.parse(vs.q[0]);
            if (!frameObj || typeof frameObj.t !== 'number' || !Array.isArray(frameObj.b)) {
                throw new Error("Не JSON формат");
            }
        } catch(e) {
            try {
                const parts = vs.q[0].split('|');
                if (parts.length < 2) {
                    vs.q.shift();
                    requestAnimationFrame(step);
                    return;
                }
                const t = parseInt(parts[0]);
                const bricksStr = parts[1];
                const bricks = [];
                if (bricksStr && bricksStr.length > 0) {
                    const brickParts = bricksStr.split(';');
                    for (const bp of brickParts) {
                        const xyz = bp.split(',');
                        if (xyz.length >= 3) {
                            bricks.push([parseFloat(xyz[0]), parseFloat(xyz[1]), parseInt(xyz[2])]);
                        }
                    }
                }
                frameObj = { t: t, b: bricks };
            } catch(e2) {
                vs.q.shift();
                requestAnimationFrame(step);
                return;
            }
        }
        
        if (!frameObj || frameObj.b.length === 0) {
            vs.q.shift();
            requestAnimationFrame(step);
            return;
        }

        const frameTime = frameObj.t;

        if (vs.baseTimeOffset === null) {
            vs.baseTimeOffset = now - frameTime;
            window.logToPhone(`🕐 Новый сдвиг: ${vs.baseTimeOffset}ms`);
        }

        const normalizedTime = frameTime + vs.baseTimeOffset;
        
        if (vs.q.length > 35) playbackOffset -= 15;
        if (vs.q.length < 10) playbackOffset += 10;
        playbackOffset = Math.max(800, Math.min(2500, playbackOffset));

        if (normalizedTime < now - 5000) { vs.q.shift(); requestAnimationFrame(step); return; }
        if (normalizedTime > now - playbackOffset) { requestAnimationFrame(step); return; }

        vs.q.shift();
        drawBricks(frameObj);
        requestAnimationFrame(step);
    }
    
    requestAnimationFrame(step);
}
	},

	async Tetrismultiplayer_Event52_Act1(runtime, localVars)
	{
// ==================== КНОПКА: СЛЕДУЮЩИЙ ====================
const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";

function getAuthHeaders() {
    const baseHeaders = {
        "apikey": SUPABASE_KEY,
        "Content-Type": "application/json"
    };
    if (window.supabaseAuthToken) {
        baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
        baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
}

const currentLobby = runtime.globalVars.currentLobby || "";
const currentViewerId = runtime.globalVars.ViewerPlayer || "";
const myId = runtime.globalVars.myPlayerId;

if (!currentLobby) return;

// ОЧИСТКА
if (window.scoreUpdater) {
    clearInterval(window.scoreUpdater);
    window.scoreUpdater = null;
}

// Уничтожаем все кирпичи
try {
    runtime.objects.Fall_Bricks.getAllInstances().forEach(i => i.destroy());
} catch(e) {}

// Сбрасываем vSync
if (window.vSync) {
    window.vSync.q = [];
    if (window.vSync.knownFrames) window.vSync.knownFrames.clear();
    window.vSync.isP = false;
    window.vSync.lastUpdate = 0;
}

// Ищем всех живых
fetch(`${SUPABASE_URL}/rest/v1/players?lobby_id=eq.${currentLobby}&status=eq.naserve&order=score.desc`, {
    headers: getAuthHeaders()
})
.then(r => r.json())
.then(async players => {
    const alivePlayers = players.filter(p => p.player_id !== myId);
    
    if (alivePlayers.length > 0) {
        let nextIndex = 0;
        const currentIndex = alivePlayers.findIndex(p => p.player_id === currentViewerId);
        if (currentIndex !== -1) nextIndex = (currentIndex + 1) % alivePlayers.length;
        
        const target = alivePlayers[nextIndex];
        
        try {
            const rpcRes = await fetch(`${SUPABASE_URL}/rest/v1/rpc/switch_viewer`, {
                method: "POST",
                headers: getAuthHeaders(),
                body: JSON.stringify({
                    p_new_target_id: target.player_id,
                    p_viewer_id: myId
                })
            });
            
            const rpcData = await rpcRes.json();
            
            if (rpcRes.ok && rpcData.success) {
                console.log(`🚀 RPC переключил на: ${target.nickname}`);
                runtime.globalVars.ViewerPlayer = target.player_id;
                
                if (window.forceUpdateText) {
                    window.forceUpdateText("txtlabel5", "Загрузка...");
                    window.forceUpdateText("txtcount2", target.score || 0);
                }
                
                if (window.vSync) {
                    window.vSync.lastUpdate = 0;
                    window.vSync.lastVId = target.player_id;
                    window.vSync.waitingFirstFrame = true;
                    window.vSync.baseTimeOffset = null;
window.vSync.playerNickname = target.nickname;
                }
                
                if (window.startScoreTicker) window.startScoreTicker(target.player_id);
                
            } else {
                console.error("RPC error on button click:", rpcData);
                if (currentViewerId) {
                    await fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${currentViewerId}`, {
                        method: "PATCH", headers: getAuthHeaders(),
                        body: JSON.stringify({ has_viewers: false })
                    }).catch(()=>{});
                }
                await fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${target.player_id}`, {
                    method: "PATCH", headers: getAuthHeaders(),
                    body: JSON.stringify({ has_viewers: true })
                });
                
                runtime.globalVars.ViewerPlayer = target.player_id;
                
                if (window.forceUpdateText) {
window.forceUpdateText("txtlabel5", "Загрузка...");
                    window.forceUpdateText("txtcount2", target.score || 0);
                }
                
                if (window.vSync) {
                    window.vSync.lastUpdate = 0;
                    window.vSync.lastVId = target.player_id;
                    window.vSync.waitingFirstFrame = true;
                    window.vSync.baseTimeOffset = null;
window.vSync.playerNickname = target.nickname;
                }
                
                if (window.startScoreTicker) window.startScoreTicker(target.player_id);
            }
        } catch (e) {
            console.error("Fetch error on button click:", e);
        }
        
    } else {
        console.log("👁️ Живых нет, выходим...");
        
        if (currentViewerId) {
            fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${currentViewerId}`, {
                method: "PATCH",
                headers: getAuthHeaders(),
                body: JSON.stringify({ has_viewers: false })
            }).catch(() => {});
        }
        
        setTimeout(() => {
            runtime.globalVars.ViewerPlayer = "";
            if (runtime.layout.name.includes("Mobilya")) {
                runtime.goToLayout("Obshiy3Mobilya");
            } else {
                runtime.goToLayout("Obshiy3");
            }
        }, 200);
    }
})
.catch(err => console.error("Ошибка:", err));
	},

	async Tetrismultiplayer_Event53_Act1(runtime, localVars)
	{
// ==================== ЧАТ + УВЕДЫ ДЛЯ МАКЕТА НАБЛЮДЕНИЯ (ОПТИМИЗИРОВАННЫЙ) ====================
(function() {
    const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";

    function getAuthHeaders() {
        const h = { "apikey": SUPABASE_KEY, "Content-Type": "application/json" };
        h["Authorization"] = window.supabaseAuthToken
            ? `Bearer ${window.supabaseAuthToken}`
            : `Bearer ${SUPABASE_KEY}`;
        return h;
    }

    // ✅ УБИВАЕМ СТАРЫЕ ИНТЕРВАЛЫ
    if (window.viewerChatInterval) { clearInterval(window.viewerChatInterval); window.viewerChatInterval = null; }
    if (window.viewerStatusInterval) { clearInterval(window.viewerStatusInterval); window.viewerStatusInterval = null; }
    console.log("🧹 Старые интервалы чата наблюдателя очищены");

    const currentLobby = runtime.globalVars.currentLobby || "";
    const myPlayerId   = runtime.globalVars.myPlayerId   || "";
    const myNickname   = runtime.globalVars.myNickname   || "Игрок";
    const lang         = runtime.globalVars.language     || 0;
    
    // 🔥 НАСТРОЙКИ ЧАТА
    const MAX_MESSAGE_LENGTH = 280;  // Максимальная длина одного сообщения
    const MAX_NICK_LENGTH = 15;     // Максимальная длина ника
    const MAX_LINES = 15;            // Сколько строк хранить в чате

    if (!currentLobby) {
        console.log("⚠️ Нет лобби — чат наблюдателя не запущен");
        return;
    }

    if (!runtime.globalVars.lastChatMessageId) runtime.globalVars.lastChatMessageId = 0;

    let lastKnownStatuses = {};

    // ==================== ОБРЕЗКА ТЕКСТА ====================
    function truncateNick(nick) {
        if (!nick) return "???";
        return nick.length > MAX_NICK_LENGTH ? nick.substring(0, MAX_NICK_LENGTH) + ".." : nick;
    }

    function truncateMessage(msg) {
        if (!msg) return "";
        return msg.length > MAX_MESSAGE_LENGTH ? msg.substring(0, MAX_MESSAGE_LENGTH) + ".." : msg;
    }

    // ==================== ВЫВОД В ОБЪЕКТ ====================
    function updateChatText(text) {
        try {
            const obj = runtime.objects.soobshastatusa2;
            if (!obj) return;
            const inst = obj.getFirstInstance ? obj.getFirstInstance() : null;
            if (!inst) return;
            
            // Добавляем новую строку
            inst.text += text;
            
            // Оставляем только последние MAX_LINES строк
            const lines = inst.text.split('\n').filter(line => line.trim() !== '');
            if (lines.length > MAX_LINES) {
                inst.text = lines.slice(-MAX_LINES).join('\n') + '\n';
            }
        } catch(e) {}
    }

    function displayMessage(msg) {
    try {
        if (msg.is_system || msg.player_id === "system") {
            updateChatText(`⚙️ ${msg.clean_message}\n`);
        } else {
            const shortNick = truncateNick(msg.nickname);
            updateChatText(`[${shortNick}]: ${msg.clean_message}\n`);
        }
    } catch(e) {}
}
    function displaySystemNotif(text) {
    updateChatText(`⚙️ ${text}\n`);
}
    // ==================== ЗАЩИТА: ПРОВЕРКА МАКЕТА ====================
    function isOnViewerLayout() {
        try {
            const name = runtime.layout ? runtime.layout.name : "";
            return name.includes("TetrisViewer") || name.includes("TetrisMultiplayerMobilya2");
        } catch(e) { return false; }
    }

    function stopAll() {
        if (window.viewerChatInterval)   { clearInterval(window.viewerChatInterval);   window.viewerChatInterval = null; }
        if (window.viewerStatusInterval) { clearInterval(window.viewerStatusInterval); window.viewerStatusInterval = null; }
        window.SendChatMessageFromViewer = null;
        console.log("🛑 Чат наблюдателя остановлен");
    }

    // ==================== ЗАГРУЗКА ИСТОРИИ ЧАТА ====================
    async function loadLastChatMessages() {
        try {
            const r = await fetch(
                `${SUPABASE_URL}/rest/v1/chat_messages?lobby_id=eq.${currentLobby}&order=timestamp.desc&limit=${MAX_LINES}`,
                { headers: getAuthHeaders() }
            );
            if (!r.ok) return;
            const msgs = (await r.json()).reverse();
            for (const msg of msgs) {
                if (msg.id > (runtime.globalVars.lastChatMessageId || 0))
                    runtime.globalVars.lastChatMessageId = msg.id;
                displayMessage(msg);
            }
        } catch(e) { console.log("💥 Ошибка истории чата:", e.message); }
    }

    // ==================== ОПРОС ЧАТА ====================
    async function pollChat() {
        if (!isOnViewerLayout()) { stopAll(); return; }
        const lobby = runtime.globalVars.currentLobby;
        if (!lobby) return;
        try {
            const lastId = runtime.globalVars.lastChatMessageId || 0;
            const r = await fetch(
                `${SUPABASE_URL}/rest/v1/chat_messages?lobby_id=eq.${lobby}&id=gt.${lastId}&order=id.asc`,
                { headers: getAuthHeaders() }
            );
            if (!r.ok) return;
            const msgs = await r.json();
            for (const msg of msgs) {
                if (msg.lobby_id !== lobby) continue;
                if (msg.id > runtime.globalVars.lastChatMessageId)
                    runtime.globalVars.lastChatMessageId = msg.id;
                displayMessage(msg);
            }
        } catch(e) {}
    }

    // ==================== ОПРОС СТАТУСОВ ИГРОКОВ (УВЕДЫ) ====================
    async function pollStatuses() {
        if (!isOnViewerLayout()) { stopAll(); return; }
        const lobby = runtime.globalVars.currentLobby;
        if (!lobby) return;
        try {
            const r = await fetch(
                `${SUPABASE_URL}/rest/v1/players?lobby_id=eq.${lobby}&select=player_id,nickname,status`,
                { headers: getAuthHeaders() }
            );
            if (!r.ok) return;
            const players = await r.json();

            for (const player of players) {
                const pid = player.player_id;
                const newStatus = player.status;
                const oldStatus = lastKnownStatuses[pid];

                if (oldStatus === undefined) {
                    lastKnownStatuses[pid] = newStatus;
                    continue;
                }

                if (oldStatus !== newStatus) {
                    const shortNick = truncateNick(player.nickname);
                    
                    if (oldStatus === "naserve" && newStatus === "dasdoh") {
                        const msg = lang === 0
                            ? `${shortNick} закончил играть `
                            : `${shortNick} finished playing `;
                        displaySystemNotif(msg);
                    } else if (oldStatus === "naserve" && newStatus === "vihappizd") {
                        const msg = lang === 0
                            ? `${shortNick} покинул игру `
                            : `${shortNick} left the game `;
                        displaySystemNotif(msg);
                    }
                    lastKnownStatuses[pid] = newStatus;
                }
            }
        } catch(e) {}
    }

    // ==================== ОТПРАВКА ====================
    window.SendChatMessageFromViewer = function(message) {
        if (!message || !message.trim() || !myPlayerId || !currentLobby) return;
        const clean = message.trim();
        const shortMsg = truncateMessage(clean);
        const shortNick = truncateNick(myNickname);
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        // Вместо всей той длинной херни:
updateChatText(`[${truncateNick(myNickname)}]: ${shortMsg}\n`);
        
        fetch(`${SUPABASE_URL}/rest/v1/chat_messages`, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify({
                lobby_id:      currentLobby,
                player_id:     myPlayerId,
                nickname:      myNickname,
                clean_message: clean,
                timestamp:     new Date().toISOString(),
                is_system:     false,
                user_id:       window.supabaseUserId || null
            })
        }).catch(err => console.log("💥 Чат: ошибка отправки", err));
    };

    // ==================== СТАРТ ====================
    loadLastChatMessages();

    window.viewerChatInterval = setInterval(pollChat, 2000);
    window.viewerStatusInterval = setInterval(pollStatuses, 4000);
    pollStatuses();

    console.log("✅ Чат + уведы наблюдателя запущены! (Ники обрезаны до " + MAX_NICK_LENGTH + ", сообщения до " + MAX_MESSAGE_LENGTH + ", строк: " + MAX_LINES + ")");
})();
	},

	async Tetrismultiplayer_Event66_Act7(runtime, localVars)
	{
		const text = runtime.objects.chatpisa.getFirstInstance().text;
		const url = "https://functions.yandexcloud.net/d4e4d3k1996t2mtjjb8j?endpoint=" + encodeURIComponent("https://parseapi.back4app.com/functions/checkMessage") + "&_method=POST&_body=" + encodeURIComponent('{"text":"' + text + '"}');
		
		fetch(url, { method: 'GET' })
		  .then(r => r.json())
		  .then(async data => {
		    console.log('📥 Back4App ответ:', data);
		    const cleanText = data.result.cleanText;
		    runtime.globalVars.lastCleanText = cleanText;
		    
		    if (!cleanText) { console.log('❌ Нет текста для отправки'); return; }
		    
		    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
		    const headers = {
		      "apikey": SUPABASE_KEY,
		      "Authorization": "Bearer " + (window.supabaseAuthToken || SUPABASE_KEY),
		      "Content-Type": "application/json",
		      "Prefer": "return=minimal"
		    };
		    
		    try {
		      const response = await fetch("https://lebmkbapqahnahjeycvd.supabase.co/rest/v1/chat_messages", {
		        method: "POST", headers: headers,
		        body: JSON.stringify({
		          lobby_id: runtime.globalVars.currentLobby,
		          player_id: runtime.globalVars.myPlayerId,
		          nickname: runtime.globalVars.myNickname,
		          clean_message: cleanText,
		          timestamp: new Date().toISOString(),
		          user_id: window.supabaseUserId || null
		        })
		      });
		      
		      if (response.ok) {
		        console.log('✅ Сообщение отправлено в Supabase');
		        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		        runtime.callFunction("ShowChatMessage", "[" + time + "] [" + runtime.globalVars.myNickname + "] " + cleanText);
		      } else {
		        const error = await response.text();
		        console.log('❌ Ошибка Supabase:', error);
		        runtime.callFunction("ShowChatMessage", "[System] Ошибка отправки сообщения");
		      }
		    } catch(err) {
		      console.log('💥 Ошибка сети:', err);
		      runtime.callFunction("ShowChatMessage", "[System] Ошибка сети");
		    }
		  })
		  .catch(err => console.log('❌ Ошибка Back4App:', err));
	},

	async Tetrismultiplayer_Event67_Act7(runtime, localVars)
	{
// ==================== ОТПРАВКА СООБЩЕНИЯ В ЧАТ (с Auth) ====================

async function getAuthHeaders() {
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
    const baseHeaders = {
        "apikey": SUPABASE_KEY,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    };
    if (window.supabaseAuthToken) {
        baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
        baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
}

async function sendCheckedMessageToSupabase() {
  try {
    const cleanText = runtime.globalVars.lastCleanText;
    
    if (!cleanText) {
      console.log('❌ Нет текста для отправки');
      return;
    }
    
    const headers = await getAuthHeaders();
    
    const response = await fetch("https://lebmkbapqahnahjeycvd.supabase.co/rest/v1/chat_messages", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        lobby_id: runtime.globalVars.currentLobby,
        player_id: runtime.globalVars.myPlayerId,
        nickname: runtime.globalVars.myNickname,
        clean_message: cleanText,
        timestamp: new Date().toISOString(),
        user_id: window.supabaseUserId || null
      })
    });
    
    if (response.ok) {
      console.log('✅ Сообщение отправлено в чат Supabase');
      
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const displayText = `[${time}] [${runtime.globalVars.myNickname}] ${cleanText}`;
      
      runtime.callFunction("ShowChatMessage", displayText);
      
    } else {
      const error = await response.text();
      console.log('❌ Ошибка отправки в Supabase:', error);
      runtime.callFunction("ShowChatMessage", "[System] Ошибка отправки сообщения");
    }
    
  } catch (err) {
    console.log('💥 Ошибка сети:', err);
    runtime.callFunction("ShowChatMessage", "[System] Ошибка сети");
  }
}

sendCheckedMessageToSupabase();
	},

	async Tetrismultiplayer_Event68_Act9(runtime, localVars)
	{
// ==================== ОТПРАВКА СООБЩЕНИЯ В ЧАТ (с Auth) ====================

async function getAuthHeaders() {
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
    const baseHeaders = {
        "apikey": SUPABASE_KEY,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    };
    if (window.supabaseAuthToken) {
        baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
        baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
}

async function sendCheckedMessageToSupabase() {
  try {
    const cleanText = runtime.globalVars.lastCleanText;
    
    if (!cleanText) {
      console.log('❌ Нет текста для отправки');
      return;
    }
    
    const headers = await getAuthHeaders();
    
    const response = await fetch("https://lebmkbapqahnahjeycvd.supabase.co/rest/v1/chat_messages", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        lobby_id: runtime.globalVars.currentLobby,
        player_id: runtime.globalVars.myPlayerId,
        nickname: runtime.globalVars.myNickname,
        clean_message: cleanText,
        timestamp: new Date().toISOString(),
        user_id: window.supabaseUserId || null
      })
    });
    
    if (response.ok) {
      console.log('✅ Сообщение отправлено в чат Supabase');
      
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const displayText = `[${time}] [${runtime.globalVars.myNickname}] ${cleanText}`;
      
      runtime.callFunction("ShowChatMessage", displayText);
      
    } else {
      const error = await response.text();
      console.log('❌ Ошибка отправки в Supabase:', error);
      runtime.callFunction("ShowChatMessage", "[System] Ошибка отправки сообщения");
    }
    
  } catch (err) {
    console.log('💥 Ошибка сети:', err);
    runtime.callFunction("ShowChatMessage", "[System] Ошибка сети");
  }
}

sendCheckedMessageToSupabase();
	},

	async Menu_Event1_Act1(runtime, localVars)
	{
		// Генерация ID один раз и сохранение в локалку
		if (!localStorage.getItem("playerNumericId")) {
		    const newId = Math.floor(Math.random() * 6000) + 1;
		    localStorage.setItem("playerNumericId", newId);
		    runtime.globalVars.playerNumericId = newId;
		    log("✅ Сгенерирован новый playerNumericId: " + newId);
		} else {
		    const savedId = parseInt(localStorage.getItem("playerNumericId"));
		    runtime.globalVars.playerNumericId = savedId;
		    log("✅ Загружен playerNumericId из локалки: " + savedId);
		}
		
		
		// Инициализация SDK (если не было)
		if (!window.ysdk) {
		    YaGames.init().then(ysdk => {
		        window.ysdk = ysdk;
		        console.log("✅ SDK готов");
		    });
		}
	},

	async Menu_Event1_Act2(runtime, localVars)
	{
// 🔥 ЯДЕРНЫЙ СБРОС ТЕТРИСА - ОСТАНОВКА ВСЕХ СИСТЕМ (БЕЗ УДАЛЕНИЯ ИГРОКА!)
(function() {
  console.log("💣 ЗАПУСКАЮ ЯДЕРНЫЙ СБРОС ТЕТРИСА...");
  console.log("🔥 Останавливаю ВСЕ системы...");
  
  const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
  
  // 🔥 1. СОЗДАЕМ ФЛАГ ЯДЕРНОГО СБРОСА
  window.__TETRIS_NUKED__ = true;
  
  // 🔥 2. ОСТАНАВЛИВАЕМ ВСЕ ИНТЕРВАЛЫ И ТАЙМЕРЫ
  console.log("🛑 Убиваю ВСЕ интервалы и таймеры...");
  
  // Метод агрессивной очистки
  const maxIntervalId = 20000;
  for (let i = 1; i <= maxIntervalId; i++) {
    try {
      clearInterval(i);
      clearTimeout(i);
    } catch(e) {}
  }
  
  // Очищаем по именам все возможные интервалы из всех макетов
  const allPossibleIntervals = [
    // Из макета игры (Tetris)
    'updateInterval', 'tetrisUpdateInterval', 'scoreMonitorInterval', 
    'notificationTimer', 'autoScoreInterval',
    // Из макета умерших (GameOver)
    'chatPollInterval', 'gameEndCheckInterval', 'leaderboardInterval',
    // Из макета лобби
    'pingInterval', 'refreshInterval', 'dataInterval', 'lobbyInterval',
    'chatUpdateInterval',
    // Общие
    'intervalId', 'timerId', 'timeoutId', 'anyInterval'
  ];
  
  allPossibleIntervals.forEach(name => {
    try {
      if (window[name]) {
        if (typeof window[name] === 'number') {
          clearInterval(window[name]);
          clearTimeout(window[name]);
        }
        window[name] = null;
      }
    } catch(e) {}
  });
  
  // 🔥 3. ОСТАНАВЛИВАЕМ ВСЕ СИСТЕМЫ
  console.log("🛑 Останавливаю ВСЕ системы...");
  
  // Система тетриса (макет игры)
  if (window.TetrisSystem && window.TetrisSystem.stopAllSystems) {
    console.log("   🛑 Останавливаю TetrisSystem...");
    try {
      window.TetrisSystem.stopAllSystems();
    } catch(e) {}
  }
  
  // Система game over (макет умерших)
  if (window.GameOverSystem && window.GameOverSystem.stop) {
    console.log("   🛑 Останавливаю GameOverSystem...");
    try {
      window.GameOverSystem.stop();
    } catch(e) {}
  }
  
  // 🔥 4. ЗАМЕНЯЕМ КОНФЛИКТУЮЩИЕ ФУНКЦИИ НА ЗАГЛУШКИ
  console.log("🔄 Заменяю функции на заглушки...");
  
  // Эти функции МОГУТ конфликтовать при переходе между макетами
  const conflictingFunctions = [
    'SendTetrisScore', 'SendPlayerDead', 'SendPlayerLeft',
    'updatePlayersData', 'updateAllUI', 'startUpdateSystem',
    'SendChatMessage', 'SendChatMessageFromGameOver', 'SendChatMessageFromLobby'
  ];
  
  conflictingFunctions.forEach(funcName => {
    try {
      window[funcName] = function() { 
        console.log(`⚠️ ${funcName} отключена (ядерный сброс)`); 
      };
    } catch(e) {}
  });
  
  // 🔥 5. ОБНОВЛЯЕМ СТАТУС ИГРОКА (ТОЛЬКО СТАТУС, НЕ УДАЛЯЕМ!)
  console.log("📡 Обновляю статус игрока на 'vihappizd'...");
  
  try {
    const playerId = runtime && runtime.globalVars ? runtime.globalVars.myPlayerId : null;
    
    if (playerId) {
      // 🔥 ВАЖНО: ТОЛЬКО МЕНЯЕМ СТАТУС, НЕ УДАЛЯЕМ ИГРОКА!
      fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${playerId}`, {
        method: "PATCH",
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          status: "vihappizd", // Серый цвет
          last_ping: new Date().toISOString()
        })
      })
      .then(() => console.log("✅ Статус игрока изменен на 'vihappizd'"))
      .catch(() => console.log("⚠️ Не удалось обновить статус"));
    }
  } catch (e) {
    console.log("⚠️ Ошибка обновления статуса игрока");
  }
  
  // 🔥 6. ОЧИЩАЕМ ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ДЛЯ БЕЗОПАСНОСТИ
  console.log("🧹 Очищаю глобальные переменные...");
  
  const varsToClear = [
    // Данные игрока
    'myPlayerId', 'myNickname', 'currentLobby',
    // Интервалы
    'updateInterval', 'tetrisUpdateInterval', 'scoreMonitorInterval',
    'chatPollInterval', 'gameEndCheckInterval', 'notificationTimer'
  ];
  
  varsToClear.forEach(varName => {
    try {
      window[varName] = null;
    } catch(e) {}
  });
  
  // 🔥 7. ОЧИЩАЕМ ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ CONSTRUCT
  console.log("🧹 Очищаю глобальные переменные Construct...");
  
  if (window.runtime && window.runtime.globalVars) {
    try {
      // Очищаем только системные переменные, не трогаем настройки игрока
      window.runtime.globalVars.currentLobby = "";
      window.runtime.globalVars.shishzanyat = 0;
      window.runtime.globalVars.supabaseChatBuffer = "";
      window.runtime.globalVars.lastChatMessageId = 0;
      
      console.log("✅ Переменные Construct очищены");
    } catch(e) {
      console.log("⚠️ Не удалось очистить переменные Construct");
    }
  }
  
  // 🔥 8. ОЧИЩАЕМ ЛОКАЛЬНЫЙ UI (ТОЛЬКО ЕСЛИ ЕСТЬ ОБЪЕКТЫ)
  console.log("🎨 Очищаю UI...");
  
  if (typeof runtime !== 'undefined' && runtime.objects) {
    try {
      // Очищаем таблицу лидеров
      for (let i = 1; i <= 7; i++) {
        // Имена игроков
        const nameObj = runtime.objects[`txtPlayer${i}Name`];
        if (nameObj) {
          let instance = nameObj;
          if (nameObj.getFirstInstance) instance = nameObj.getFirstInstance();
          if (instance && instance.text !== undefined) instance.text = "";
        }
        
        // Очки игроков
        const scoreObj = runtime.objects[`txtPlayer${i}Score`];
        if (scoreObj) {
          let instance = scoreObj;
          if (scoreObj.getFirstInstance) instance = scoreObj.getFirstInstance();
          if (instance && instance.text !== undefined) instance.text = "";
        }
      }
      
      // Очищаем уведомления
      const statusObj = runtime.objects.soobshastatusa;
      if (statusObj) {
        let instance = statusObj;
        if (statusObj.getFirstInstance) instance = statusObj.getFirstInstance();
        if (instance && instance.text !== undefined) instance.text = "";
      }
      
      // Очищаем чат
      const chatObj = runtime.objects.chatText;
      if (chatObj) {
        let instance = chatObj;
        if (chatObj.getFirstInstance) instance = chatObj.getFirstInstance();
        if (instance && instance.text !== undefined) instance.text = "";
      }
      
      console.log("✅ UI очищен");
    } catch(e) {
      console.log("⚠️ Ошибка очистки UI");
    }
  }
  
  // 🔥 9. УДАЛЯЕМ ФЛАГ ЧЕРЕЗ 10 СЕКУНД
  setTimeout(() => {
    try {
      delete window.__TETRIS_NUKED__;
      console.log("✅ Флаг ядерного сброса удален");
    } catch(e) {}
  }, 10000);
  
  console.log("=".repeat(80));
  console.log("💀 ЯДЕРНЫЙ СБРОС ВЫПОЛНЕН!");
  console.log("🔥 Все системы тетриса остановлены");
  console.log("📊 Игрок помечен как 'vihappizd' (серый цвет)");
  console.log("🔄 Теперь можно запускать игру заново");
  console.log("=".repeat(80));
  
})();
	},

	async Menu_Event54_Act1(runtime, localVars)
	{
		// Определяем язык
		var userLang = 'ru';
		try {
		  if (typeof ysdk !== 'undefined' && ysdk.environment && ysdk.environment.i18n) {
		    userLang = ysdk.environment.i18n.lang;
		  }
		} catch (e) {}
		
		// Логика: показывать подсказку если язык НЕ русский
		var showHint = userLang !== 'ru' ? 1 : 0;
		
		console.log('Яндекс определил язык как:', userLang);
		// Возвращаем команду для выполнения в Construct
		return 'c3runtime.setGlobalVarValue("pokazatpodskazulang", ' + showHint + ');';
	},

	async Menu_Event86_Act1(runtime, localVars)
	{
async function refreshLeaderboard() {
    const BAZA_ID = localStorage.getItem("rapintas_bazaid");
    if (!BAZA_ID) return;

    const allInstances = runtime.objects.txtPlayer1Name.getAllInstances();
    if (allInstances.length === 0) return;

    // --- 1. ПЕРВЫМ ДЕЛОМ ДОСТАЕМ ЗАНАЧКУ ---
    const cachedNames = localStorage.getItem("cache_names") || "\nИщем игры...";
    const cachedScores = localStorage.getItem("cache_scores") || "\n...";

    // Сразу выводим старые данные, чтобы экран не был пустым
    for (const inst of allInstances) {
        if (inst.instVars.playername === "yes1") inst.text = cachedNames;
        if (inst.instVars.scores === "yes1") inst.text = cachedScores;
    }

    // --- 2. ПРОВЕРЯЕМ КУЛДАУН ---
    const now = Date.now();
    const lastCheck = Number(localStorage.getItem("last_leaderboard_check") || 0);
    
    if (now - lastCheck < 45000) {
        console.log("⏳ База спит, показываю старые данные из кеша.");
        return;
    }

    // --- 3. ИДЕМ В БАЗУ ЗА СВЕЖАКОМ ---
    try {
        const url = `https://parseapi.back4app.com/classes/win?where={"ID":"${BAZA_ID}"}&order=-createdAt&limit=10`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Parse-Application-Id': "rtQswehi1m8cJJPZlYCkclrAkgVghX0LaXsbkfMh",
                'X-Parse-REST-API-Key': "bVWT6XAwval1vPAdMgPyqRFEcWqFWYpRuw62mB85",
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        const results = data.results || [];

        let namesText = "\n";
        let scoresText = "\n";

        results.forEach(game => {
            namesText += (game.name || "---") + "\n";
            scoresText += (game.scores || "0") + "\n";
        });

        // --- 4. ОБНОВЛЯЕМ ЭКРАН И КЕШ ---
        for (const inst of allInstances) {
            if (inst.instVars.playername === "yes1") inst.text = namesText;
            if (inst.instVars.scores === "yes1") inst.text = scoresText;
        }

        localStorage.setItem("cache_names", namesText);
        localStorage.setItem("cache_scores", scoresText);
        localStorage.setItem("last_leaderboard_check", now.toString());

        console.log("🚀 База проснулась и выдала свежак!");

    } catch (err) {
        console.error("💥 Ошибка обновления:", err);
    }
}

// Погнали!
refreshLeaderboard();
	},

	async Lichniy2_Event26_Act1(runtime, localVars)
	{
		// 🔥 ВЫХОД В МЕНЮ (работает везде: прямой/прокси/realtime/поллинг)
		console.log("🚪 Нажата кнопка Меню");
		
		// 🔥 ПЕРВОЕ: УБИВАЕМ REALTIME МГНОВЕННО (ставим onclose=null чтобы не реконнектился)
		if (window._realtimeInstance) {
		    if (window._realtimeInstance.ws) {
		        window._realtimeInstance.ws.onclose = null;
		        window._realtimeInstance.ws.onerror = null;
		        window._realtimeInstance.ws.close();
		    }
		    if (window._realtimeInstance.heartbeatInterval) {
		        clearInterval(window._realtimeInstance.heartbeatInterval);
		    }
		    window._realtimeInstance.channels = {};
		    window._realtimeInstance.connected = false;
		    window._realtimeInstance.pendingMessages = [];
		    window._realtimeInstance = null;
		    console.log('🔌 [RT] Инстанс Realtime убит ДО выхода');
		}
		
		// Сбрасываем флаги Realtime сразу
		window._useRealtime = false;
		window._realtimeCheckDone = false;
		runtime.globalVars.realtimeMode = false;
		
		// Отписываемся от канала (если ещё жив)
		if (runtime.globalVars.currentLobby && window.supabaseRealtime) {
		    const topic = "realtime:public:lobby_" + runtime.globalVars.currentLobby;
		    const channel = window.supabaseRealtime.getChannel(topic);
		    if (channel) channel.unsubscribe();
		}
		
		const playerId = runtime.globalVars.myPlayerId;
		
		if (playerId) {
		    fetch("https://lebmkbapqahnahjeycvd.supabase.co/rest/v1/players?player_id=eq." + playerId, {
		        method: 'DELETE',
		        headers: {
		            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU",
		            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU"
		        }
		    }).then(() => console.log("✅ Игрок удален"))
		        .catch(() => console.log("⚠️ Не удалось удалить"));
		}
		
		// Очищаем
		if (runtime.globalVars.chatPollInterval) {
		    clearInterval(runtime.globalVars.chatPollInterval);
		    runtime.globalVars.chatPollInterval = null;
		}
		
		// Сбрасываем
		runtime.globalVars.currentLobby = "";
		runtime.globalVars.gameStatus = "menu";
		runtime.globalVars.odnahaza = 0;
		runtime.globalVars.voteActive = false;
		runtime.globalVars.systemsRunning = false;
		
		// Переход в меню
		if (runtime.callFunction) {
		    try { runtime.callFunction("GoToObshiy2"); } catch(e) {}
		}
	},

	async Lichniy2_Event27_Act1(runtime, localVars)
	{
		// 🔥 ВЫХОД В МЕНЮ (работает везде: прямой/прокси/realtime/поллинг)
		console.log("🚪 Нажата кнопка Меню");
		
		// 🔥 ПЕРВОЕ: УБИВАЕМ REALTIME МГНОВЕННО (ставим onclose=null чтобы не реконнектился)
		if (window._realtimeInstance) {
		    if (window._realtimeInstance.ws) {
		        window._realtimeInstance.ws.onclose = null;
		        window._realtimeInstance.ws.onerror = null;
		        window._realtimeInstance.ws.close();
		    }
		    if (window._realtimeInstance.heartbeatInterval) {
		        clearInterval(window._realtimeInstance.heartbeatInterval);
		    }
		    window._realtimeInstance.channels = {};
		    window._realtimeInstance.connected = false;
		    window._realtimeInstance.pendingMessages = [];
		    window._realtimeInstance = null;
		    console.log('🔌 [RT] Инстанс Realtime убит ДО выхода');
		}
		
		// Сбрасываем флаги Realtime сразу
		window._useRealtime = false;
		window._realtimeCheckDone = false;
		runtime.globalVars.realtimeMode = false;
		
		// Отписываемся от канала (если ещё жив)
		if (runtime.globalVars.currentLobby && window.supabaseRealtime) {
		    const topic = "realtime:public:lobby_" + runtime.globalVars.currentLobby;
		    const channel = window.supabaseRealtime.getChannel(topic);
		    if (channel) channel.unsubscribe();
		}
		
		const playerId = runtime.globalVars.myPlayerId;
		
		if (playerId) {
		    fetch("https://lebmkbapqahnahjeycvd.supabase.co/rest/v1/players?player_id=eq." + playerId, {
		        method: 'DELETE',
		        headers: {
		            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU",
		            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU"
		        }
		    }).then(() => console.log("✅ Игрок удален"))
		        .catch(() => console.log("⚠️ Не удалось удалить"));
		}
		
		// Очищаем
		if (runtime.globalVars.chatPollInterval) {
		    clearInterval(runtime.globalVars.chatPollInterval);
		    runtime.globalVars.chatPollInterval = null;
		}
		
		// Сбрасываем
		runtime.globalVars.currentLobby = "";
		runtime.globalVars.gameStatus = "menu";
		runtime.globalVars.odnahaza = 0;
		runtime.globalVars.voteActive = false;
		runtime.globalVars.systemsRunning = false;
		
		// Переход в меню
		if (runtime.callFunction) {
		    try { runtime.callFunction("GoToObshiy2"); } catch(e) {}
		}
	},

	async Lichniy2_Event45_Act7(runtime, localVars)
	{
		const text = runtime.objects.chatpisa.getFirstInstance().text;
		const url = "https://functions.yandexcloud.net/d4e4d3k1996t2mtjjb8j?endpoint=" + encodeURIComponent("https://parseapi.back4app.com/functions/checkMessage") + "&_method=POST&_body=" + encodeURIComponent('{"text":"' + text + '"}');
		
		fetch(url, { method: 'GET' })
		  .then(r => r.json())
		  .then(async data => {
		    console.log('📥 Back4App ответ:', data);
		    const cleanText = data.result.cleanText;
		    runtime.globalVars.lastCleanText = cleanText;
		    
		    if (!cleanText) { console.log('❌ Нет текста для отправки'); return; }
		    
		    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
		    const headers = {
		      "apikey": SUPABASE_KEY,
		      "Authorization": "Bearer " + (window.supabaseAuthToken || SUPABASE_KEY),
		      "Content-Type": "application/json",
		      "Prefer": "return=minimal"
		    };
		    
		    try {
		      const response = await fetch("https://lebmkbapqahnahjeycvd.supabase.co/rest/v1/chat_messages", {
		        method: "POST", headers: headers,
		        body: JSON.stringify({
		          lobby_id: runtime.globalVars.currentLobby,
		          player_id: runtime.globalVars.myPlayerId,
		          nickname: runtime.globalVars.myNickname,
		          clean_message: cleanText,
		          timestamp: new Date().toISOString(),
		          user_id: window.supabaseUserId || null
		        })
		      });
		      
		      if (response.ok) {
		        console.log('✅ Сообщение отправлено в Supabase');
		        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		        runtime.callFunction("ShowChatMessage", "[" + time + "] [" + runtime.globalVars.myNickname + "] " + cleanText);
		      } else {
		        const error = await response.text();
		        console.log('❌ Ошибка Supabase:', error);
		        runtime.callFunction("ShowChatMessage", "[System] Ошибка отправки сообщения");
		      }
		    } catch(err) {
		      console.log('💥 Ошибка сети:', err);
		      runtime.callFunction("ShowChatMessage", "[System] Ошибка сети");
		    }
		  })
		  .catch(err => console.log('❌ Ошибка Back4App:', err));
	},

	async Lichniy2_Event46_Act6(runtime, localVars)
	{
// 🔥 ОТПРАВКА ПРОВЕРЕННОГО СООБЩЕНИЯ В SUPABASE (С AUTH)

async function getAuthHeaders() {
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
    const baseHeaders = {
        "apikey": SUPABASE_KEY,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    };
    if (window.supabaseAuthToken) {
        baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
        baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
}

async function sendCheckedMessageToSupabase() {
  try {
    const cleanText = runtime.globalVars.lastCleanText;
    
    if (!cleanText) {
      console.log('❌ Нет текста для отправки');
      return;
    }
    
    const headers = await getAuthHeaders();
    
    const response = await fetch("https://lebmkbapqahnahjeycvd.supabase.co/rest/v1/chat_messages", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        lobby_id: runtime.globalVars.currentLobby,
        player_id: runtime.globalVars.myPlayerId,
        nickname: runtime.globalVars.myNickname,
        clean_message: cleanText,
        timestamp: new Date().toISOString(),
        user_id: window.supabaseUserId || null  // 🔥 ДОБАВЛЯЕМ user_id для RLS
      })
    });
    
    if (response.ok) {
      console.log('✅ Сообщение отправлено в чат Supabase');
      
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const displayText = `[${time}] [${runtime.globalVars.myNickname}] ${cleanText}`;
      
      runtime.callFunction("ShowChatMessage", displayText);
      
    } else {
      const error = await response.text();
      console.log('❌ Ошибка отправки в Supabase:', error);
      runtime.callFunction("ShowChatMessage", "[System] Ошибка отправки сообщения");
    }
    
  } catch (err) {
    console.log('💥 Ошибка сети:', err);
    runtime.callFunction("ShowChatMessage", "[System] Ошибка сети");
  }
}

// 🔥 ВЫЗЫВАЕМ ФУНКЦИЮ
sendCheckedMessageToSupabase();
	},

	async Lichniy2_Event47_Act9(runtime, localVars)
	{
// 🔥 ОТПРАВКА ПРОВЕРЕННОГО СООБЩЕНИЯ В SUPABASE (С AUTH)

async function getAuthHeaders() {
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
    const baseHeaders = {
        "apikey": SUPABASE_KEY,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    };
    if (window.supabaseAuthToken) {
        baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
        baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
}

async function sendCheckedMessageToSupabase() {
  try {
    const cleanText = runtime.globalVars.lastCleanText;
    
    if (!cleanText) {
      console.log('❌ Нет текста для отправки');
      return;
    }
    
    const headers = await getAuthHeaders();
    
    const response = await fetch("https://lebmkbapqahnahjeycvd.supabase.co/rest/v1/chat_messages", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        lobby_id: runtime.globalVars.currentLobby,
        player_id: runtime.globalVars.myPlayerId,
        nickname: runtime.globalVars.myNickname,
        clean_message: cleanText,
        timestamp: new Date().toISOString(),
        user_id: window.supabaseUserId || null  // 🔥 ДОБАВЛЯЕМ user_id для RLS
      })
    });
    
    if (response.ok) {
      console.log('✅ Сообщение отправлено в чат Supabase');
      
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const displayText = `[${time}] [${runtime.globalVars.myNickname}] ${cleanText}`;
      
      runtime.callFunction("ShowChatMessage", displayText);
      
    } else {
      const error = await response.text();
      console.log('❌ Ошибка отправки в Supabase:', error);
      runtime.callFunction("ShowChatMessage", "[System] Ошибка отправки сообщения");
    }
    
  } catch (err) {
    console.log('💥 Ошибка сети:', err);
    runtime.callFunction("ShowChatMessage", "[System] Ошибка сети");
  }
}

// 🔥 ВЫЗЫВАЕМ ФУНКЦИЮ
sendCheckedMessageToSupabase();
	},

	async Lichniy2_Event99_Act2(runtime, localVars)
	{
		window.handleManualReconnect();
	},

	async Lichniy2_Event139_Act1(runtime, localVars)
	{
// ==================== 🔥 МИНИ-REALTIME v3 (ФИКС ВСЕХ БАГОВ) ====================
(function() {
    const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";

    class MiniSupabaseRealtime {
        constructor(url, key) {
            this.url = url;
            this.key = key;
            this.ws = null;
            this.channels = {};
            this.connected = false;
            this.ref = 0;
            this.pendingMessages = [];
            this.heartbeatInterval = null;
        }

        connect() {
            return new Promise((resolve, reject) => {
                const wsUrl = `${this.url.replace('https://', 'wss://')}/realtime/v1/websocket?apikey=${this.key}&vsn=1.0.0`;
                console.log('🔌 [RT] Подключаюсь к Realtime...');

                this.ws = new WebSocket(wsUrl);
                const timeout = setTimeout(() => {
                    this.ws.close();
                    reject(new Error('Таймаут подключения'));
                }, 5000);

                this.ws.onopen = () => {
    clearTimeout(timeout);
    this.connected = true;
    console.log('✅ [RT] WebSocket подключён');

    this.pendingMessages.forEach(msg => this.ws.send(JSON.stringify(msg)));
    this.pendingMessages = [];

    this.heartbeatInterval = setInterval(() => {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({
                topic: 'phoenix', event: 'heartbeat', payload: {}, ref: this.ref++
            }));
        }
    }, 30000);

    // 🔥 НЕ джойним каналы здесь — они джойнятся через subscribe()
    // (иначе тестовый канал джойнится дважды и ломает WS при unsub)

    resolve();
};

                this.ws.onmessage = (event) => {
                    try {
                        const msg = JSON.parse(event.data);
                        this._handleMessage(msg);
                    } catch(e) {
                        console.error('❌ [RT] Ошибка парсинга:', e);
                    }
                };

                this.ws.onerror = (err) => {
                    clearTimeout(timeout);
                    console.error('❌ [RT] WebSocket ошибка подключения');
                    this.connected = false;
                    reject(err);
                };

                this.ws.onclose = (event) => {
                    console.log('🔌 [RT] WebSocket закрыт, код:', event.code);
                    this.connected = false;

                    // ✅ БАГ 4 ФИКС: сбрасываем realtimeMode при дисконнекте
                    // иначе фоллбэк-поллинг никогда не включится
                    if (typeof runtime !== 'undefined' && runtime.globalVars) {
                        runtime.globalVars.realtimeMode = false;
                        console.log('⚠️ [RT] realtimeMode = false (WebSocket закрыт)');
                    }

                    if (this.heartbeatInterval) {
                        clearInterval(this.heartbeatInterval);
                        this.heartbeatInterval = null;
                    }

                    Object.values(this.channels).forEach(ch => {
                        ch.joined = false;
                        ch.joinSent = false;
                    });

                    if (event.code !== 1005) {
                        setTimeout(() => {
                            if (!this.connected) {
                                console.log('🔄 [RT] Переподключаюсь...');
                                this.connect().catch(e => console.log('❌ [RT] Реконнект провалился:', e.message));
                            }
                        }, 2000);
                    }
                };
            });
        }

        channel(topic) {
            if (!this.channels[topic]) {
                this.channels[topic] = {
                    topic, subscriptions: [], joined: false, joinSent: false, subscribeCallbacks: []
                };
            }

            const self = this;
            // ✅ БАГ 5 ФИКС: сохраняем channelApi в переменную и возвращаем её из on()
            // раньше было "return this" что возвращало инстанс MiniSupabaseRealtime
            const channelApi = {
                on: (event, table, filter, callback) => {
                    self.channels[topic].subscriptions.push({ event, table, filter, callback });
                    return channelApi; // ✅ ФИКС: возвращаем channelApi, а не this
                },
                subscribe: (callback) => {
                    const ch = self.channels[topic];
                    if (callback) ch.subscribeCallbacks.push(callback);
                    if (!ch.joinSent && self.connected) {
                        self._sendJoin(topic);
                    }
                    if (ch.joined) {
                        ch.subscribeCallbacks.forEach(cb => cb('SUBSCRIBED'));
                    }
                },
                unsubscribe: () => {
                    if (self.ws && self.ws.readyState === WebSocket.OPEN) {
                        self.ws.send(JSON.stringify({
                            topic, event: 'phx_leave', payload: {}, ref: self.ref++
                        }));
                    }
                    delete self.channels[topic];
                    console.log('🔕 [RT] Отписались от канала:', topic);
                }
            };

            return channelApi;
        }

        _sendJoin(topic) {
            const channel = this.channels[topic];
            if (!channel) return;

            // ✅ БАГ 6 ФИКС: ставим joinSent здесь, а не только в subscribe
            // иначе при reconnect возможны дублирующие join-ы
            channel.joinSent = true;

            const postgresChanges = channel.subscriptions.map(sub => ({
                event: sub.event,
                schema: 'public',
                table: sub.table,
                filter: sub.filter
            }));

            const msg = {
                topic,
                event: 'phx_join',
                payload: {
                    config: {
                        broadcast: { self: true },
                        presence: { key: '' },
                        postgres_changes: postgresChanges
                    }
                },
                ref: this.ref++
            };

            console.log('📤 [RT] Join канала:', topic);
            console.log('📤 [RT] postgres_changes конфиг:', JSON.stringify(postgresChanges));
            this._send(msg);
        }

        _send(msg) {
            if (this.ws && this.ws.readyState === WebSocket.OPEN) {
                this.ws.send(JSON.stringify(msg));
            } else {
                console.log('📥 [RT] Добавляю в pending (WS не готов):', msg.event);
                this.pendingMessages.push(msg);
            }
        }

        _handleMessage(msg) {
            const topic = msg.topic;
            const channel = this.channels[topic];

            if (msg.event === 'phx_reply') {
                if (msg.payload?.status === 'ok') {
                    console.log('✅ [RT] Канал подтверждён:', topic);
                    if (channel) {
                        channel.joined = true;
                        channel.subscribeCallbacks.forEach(cb => cb('SUBSCRIBED'));
                    }
                } else if (msg.payload?.status === 'error') {
                    // ОТЛАДКА: если канал не подтвердился — нужно видеть причину
                    console.error('❌ [RT] Ошибка join канала:', topic, JSON.stringify(msg.payload));
                }
                return;
            }

            if (msg.event === 'phx_error') {
                console.error('❌ [RT] Ошибка канала:', topic, JSON.stringify(msg.payload));
                return;
            }

            if (msg.event === 'phx_close') {
                console.log('🔒 [RT] Канал закрыт сервером:', topic);
                if (channel) channel.joined = false;
                return;
            }

            if (msg.event === 'postgres_changes' || msg.event === 'broadcast') {
                const payload = msg.payload;
                const realData = payload.data || payload;

                // ОТЛАДКА: полный лог каждого события
                console.log('🔥 [RT] СОБЫТИЕ:', realData.type, realData.table,
                    '| record id:', realData.record?.id || realData.new?.id || '?',
                    '| old id:', realData.old_record?.id || realData.old?.id || '?');

                if (channel) {
                    const data = {
                        eventType: realData.type,
                        schema: realData.schema || 'public',
                        table: realData.table,
                        record: realData.record || realData.new || realData,
                        old_record: realData.old_record || realData.old
                    };

                    let handledCount = 0;
                    channel.subscriptions.forEach(sub => {
                        const eventMatch = sub.event === data.eventType || sub.event === '*';
                        const tableMatch = sub.table === data.table || sub.table === '*';

                        if (eventMatch && tableMatch) {
                            handledCount++;
                            try {
                                sub.callback(data);
                            } catch(e) {
                                console.error('❌ [RT] Ошибка в обработчике события:', e);
                            }
                        }
                    });

                    // ОТЛАДКА: если событие пришло но никто его не обработал
                    if (handledCount === 0) {
                        console.warn('⚠️ [RT] Событие не обработано ни одной подпиской!',
                            'eventType:', data.eventType, 'table:', data.table,
                            '| подписки:', channel.subscriptions.map(s => s.event + ':' + s.table).join(', '));
                    }
                } else {
    // Тестовый канал уже удалён, это нормально
    if (topic !== 'realtime:public:lobbies') {
        console.warn('⚠️ [RT] Событие для неизвестного канала:', topic);
    }
}
                return;
            }

            if (msg.event === 'system') {
                console.log('ℹ️ [RT] Системное:', msg.payload?.message || JSON.stringify(msg.payload));
            }
        }
    }

    window.MiniSupabaseRealtime = MiniSupabaseRealtime;
    window._realtimeInstance = null;
    window._useRealtime = false;
    window._realtimeCheckDone = false;

    async function initRealtime() {
        try {
            const realtime = new MiniSupabaseRealtime(SUPABASE_URL, SUPABASE_KEY);
            await realtime.connect();

            // ✅ БАГ 9 ФИКС: тестируем реальный канал с postgres_changes
            // realtime:test без postgres_changes мог не подтверждаться корректно
            let subscribeOk = false;
            const testTopic = 'realtime:public:lobbies';
            const testChannel = realtime.channel(testTopic);

            // Добавляем пустую подписку чтобы канал был валидным
            testChannel.on('UPDATE', 'lobbies', undefined, () => {});

            await new Promise((resolve) => {
    testChannel.subscribe((status) => {
        console.log('🧪 [RT] Тест-канал статус:', status);
        if (status === 'SUBSCRIBED') {
            subscribeOk = true;
            // 🔥 НЕ ШЛЁМ phx_leave — просто удаляем из списка каналов молча
            delete realtime.channels['realtime:public:lobbies'];
            resolve(true);
        }
    });
    setTimeout(() => {
        if (!subscribeOk) {
            console.log('⚠️ [RT] Тест-канал: таймаут ожидания SUBSCRIBED');
            delete realtime.channels['realtime:public:lobbies'];
        }
        resolve(subscribeOk);
    }, 4000);
});

            if (!subscribeOk) {
                throw new Error('Тест-канал не подтвердился за 4 секунды');
            }

            window._realtimeInstance = realtime;
            window._useRealtime = true;
            console.log('🚀 [RT] REALTIME РАБОТАЕТ (v3)!');
        } catch(e) {
            console.log('⚠️ [RT] Realtime не работает:', e.message, '→ переход на поллинг');
            window._useRealtime = false;
        }
        window._realtimeCheckDone = true;
    }

    window.supabaseRealtime = {
        isAvailable: () => window._useRealtime,
        // ✅ БАГ 7 ФИКС: getChannel теперь требует topic
        // раньше в lobbyExitFunction вызывалось getChannel() без аргумента → channels[undefined]
        getChannel: (topic) => {
            if (!window._realtimeInstance) {
                console.warn('⚠️ [RT] getChannel: нет инстанса');
                return null;
            }
            if (!topic) {
                console.warn('⚠️ [RT] getChannel: topic не передан!');
                return null;
            }
            return window._realtimeInstance.channel(topic);
        },
        init: initRealtime,
        isCheckDone: () => window._realtimeCheckDone
    };

    console.log('✅ [RT] Мини-Realtime клиент v3 готов');
})();

// ==================== 🔥 YANDEX PROXY FALLBACK ====================
(function() {
    const YANDEX_PROXY_URL = "https://functions.yandexcloud.net/d4e4d3k1996t2mtjjb8j";
    const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";

    const originalFetch = window.fetch;
    window._useProxy = true;
    window._proxyChecked = true;
    console.log('🔄 [Proxy] Режим: ПРОКСИ (Яндекс) - проверяю прямой в фоне...');

    async function checkDirectAccess() {
        try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 3000);
            const response = await originalFetch(`${SUPABASE_URL}/rest/v1/lobbies?limit=1`, {
                signal: controller.signal,
                headers: { "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}` }
            });
            clearTimeout(timeout);
                        if (response.ok) {
                console.log('✅ [Proxy] Прямой доступ работает! Переключаюсь на прямой.');
                window._useProxy = false;
                if (window.supabaseRealtime && !window._realtimeCheckDone) {
                    window.supabaseRealtime.init();
                }
                return;
            }
        } catch(e) {}
                console.log('⚠️ [Proxy] Прямой доступ недоступен, остаюсь на прокси');
        window._useProxy = true;
        window._realtimeCheckDone = true; // realtime не работает через прокси
    }

    checkDirectAccess();

    window.fetch = async function(url, options = {}) {
        if (typeof url === 'string' && url.includes('functions.yandexcloud.net')) {
            return originalFetch(url, options);
        }
        if (typeof url === 'string' && url.includes('parseapi.back4app.com')) {
            const method = options?.method || 'GET';
            let proxyUrl = `${YANDEX_PROXY_URL}?endpoint=${encodeURIComponent(url)}&_method=${method}`;
            if (options?.body && method !== 'GET') proxyUrl += `&_body=${encodeURIComponent(options.body)}`;
            return originalFetch(proxyUrl, { method: 'GET' });
        }
        if (typeof url !== 'string' || !url.includes('lebmkbapqahnahjeycvd.supabase.co')) {
            return originalFetch(url, options);
        }
        if (window._useProxy) {
            const endpoint = url.replace(SUPABASE_URL, '');
            const method = options?.method || 'GET';
            let proxyUrl = `${YANDEX_PROXY_URL}?endpoint=${encodeURIComponent(endpoint)}&_method=${method}`;
            if (options?.body && method !== 'GET') proxyUrl += `&_body=${encodeURIComponent(options.body)}`;
            return originalFetch(proxyUrl, { method: 'GET' });
        }
        try {
            return await originalFetch(url, options);
        } catch(e) {
            window._useProxy = true;
            const endpoint = url.replace(SUPABASE_URL, '');
            const method = options?.method || 'GET';
            let proxyUrl = `${YANDEX_PROXY_URL}?endpoint=${encodeURIComponent(endpoint)}&_method=${method}`;
            if (options?.body && method !== 'GET') proxyUrl += `&_body=${encodeURIComponent(options.body)}`;
            return originalFetch(proxyUrl, { method: 'GET' });
        }
    };

    const OriginalXHR = window.XMLHttpRequest;
    window.XMLHttpRequest = function() {
        const xhr = new OriginalXHR();
        const originalOpen = xhr.open;
        const originalSend = xhr.send;
        let requestUrl = '';
        let requestMethod = 'GET';
        xhr.open = function(method, url, ...args) {
            requestUrl = url;
            requestMethod = method;
            return originalOpen.call(this, method, url, ...args);
        };
        xhr.send = function(body) {
            if (typeof requestUrl === 'string' && requestUrl.includes('parseapi.back4app.com')) {
                let proxyUrl = `${YANDEX_PROXY_URL}?endpoint=${encodeURIComponent(requestUrl)}&_method=${requestMethod}`;
                if (body && requestMethod !== 'GET') proxyUrl += `&_body=${encodeURIComponent(body)}`;
                requestUrl = proxyUrl;
                requestMethod = 'GET';
                body = null;
            }
            return originalSend.call(this, body);
        };
        return xhr;
    };
    for (const key in OriginalXHR) {
        if (OriginalXHR.hasOwnProperty(key)) window.XMLHttpRequest[key] = OriginalXHR[key];
    }
    window.XMLHttpRequest.prototype = OriginalXHR.prototype;
    console.log('✅ [Proxy] Прокси-система готова');
})();

// ==================== AUTH ====================
(function() {
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
    window.supabaseAuthToken = SUPABASE_KEY;
    window.supabaseUserId = "anon_" + Date.now();
    if (runtime?.globalVars) {
        runtime.globalVars.supabaseAuthToken = window.supabaseAuthToken;
        runtime.globalVars.supabaseUserId = window.supabaseUserId;
    }
    console.log('✅ Auth готов! User:', window.supabaseUserId);
})();

// ==================== AUTH ЗАГОЛОВКИ ====================
function getAuthHeaders() {
    return {
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU",
        "Authorization": `Bearer ${window.supabaseAuthToken || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU"}`,
        "Content-Type": "application/json"
    };
}

// ==================== СБРОС ПЕРЕМЕННЫХ ====================
runtime.globalVars.myPlayerId = "";
runtime.globalVars.myNickname = "";
runtime.globalVars.currentLobby = "";
runtime.globalVars.gameStatus = "loading";
runtime.globalVars.playerListText = "";
runtime.globalVars.voteActive = false;
runtime.globalVars.voteTimeLeft = 0;
runtime.globalVars.systemsRunning = false;
runtime.globalVars.lastVoteStatus = "";
runtime.globalVars.voteCooldown = false;
runtime.globalVars.kolvovkome = 0;
runtime.globalVars.vseti = 1;
runtime.globalVars.odnahaza = 0;
runtime.globalVars.kolvogolosovza2 = 0;
runtime.globalVars.kolvogolosovprotiv2 = 0;
runtime.globalVars.vlobbyzashel = 0;
runtime.globalVars.lastPlayerCount = 0;
runtime.globalVars.lastPlayerIds = [];
runtime.globalVars.lastPlayerNames = [];
runtime.globalVars.lastChatMessageId = 0;
runtime.globalVars.chatPollInterval = null;
runtime.globalVars.supabaseChatBuffer = "";
runtime.globalVars.isFirstChatLoad = true;
runtime.globalVars.lastReconnectTime = 0;
runtime.globalVars.hasReconnected = false;
runtime.globalVars.reconnectAttempts = 0;
runtime.globalVars.processedIds = new Set();
runtime.globalVars.vrublenopodhuuba = 0;
runtime.globalVars.bestRoomName = "";
runtime.globalVars.supabaseAuthToken = "";
runtime.globalVars.supabaseUserId = "";
runtime.globalVars.realtimeMode = false;

const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";

// ==================== ПЕРЕХОДЫ ====================

function goToGame() {
    console.log("🎮 Переход в игру...");
    window.removeEventListener('beforeunload', lobbyExitFunction);
    window.removeEventListener('pagehide', lobbyExitFunction);
    runtime.globalVars.gameStatus = "playing";
    runtime.globalVars.kolvogolosovprotiv2 = 0;
    runtime.globalVars.kolvogolosovza2 = 0;
    runtime.globalVars.odnahaza = 0;
    runtime.globalVars.vlobbyzashel = 0;

    // ✅ БАГ 7 ФИКС: передаём topic в getChannel
    if (runtime.globalVars.currentLobby && window.supabaseRealtime) {
        const topic = `realtime:public:lobby_${runtime.globalVars.currentLobby}`;
        const channel = window.supabaseRealtime.getChannel(topic);
        if (channel) channel.unsubscribe();
    }

    if (runtime.globalVars.chatPollInterval) {
        clearInterval(runtime.globalVars.chatPollInterval);
        runtime.globalVars.chatPollInterval = null;
    }
    runtime.globalVars.systemsRunning = false;
    if (runtime.callFunction) {
        try { runtime.callFunction("GoToTetrisMultiHeal"); } catch(e) {
            try { runtime.callFunction("GoToObshiy5"); } catch(e2) {}
        }
    }
}

function goToMenu(reason) {
    console.log(`🚪 Переход в меню: ${reason}`);
    
    // 🔥 ПЕРВОЕ: УБИВАЕМ REALTIME МГНОВЕННО
    if (window._realtimeInstance) {
        if (window._realtimeInstance.ws) {
            window._realtimeInstance.ws.onclose = null;
            window._realtimeInstance.ws.onerror = null;
            window._realtimeInstance.ws.close();
        }
        if (window._realtimeInstance.heartbeatInterval) {
            clearInterval(window._realtimeInstance.heartbeatInterval);
        }
        window._realtimeInstance.channels = {};
        window._realtimeInstance.connected = false;
        window._realtimeInstance.pendingMessages = [];
        window._realtimeInstance = null;
        console.log('🔌 [RT] Инстанс Realtime убит ДО выхода');
    }
    window._useRealtime = false;
    window._realtimeCheckDone = false;
    runtime.globalVars.realtimeMode = false;

    if (runtime.globalVars.chatPollInterval) clearInterval(runtime.globalVars.chatPollInterval);

    // Отписываемся от канала
    if (runtime.globalVars.currentLobby && window.supabaseRealtime) {
        const topic = `realtime:public:lobby_${runtime.globalVars.currentLobby}`;
        const channel = window.supabaseRealtime.getChannel(topic);
        if (channel) channel.unsubscribe();
    }

    runtime.globalVars.systemsRunning = false;
    
    const playerId = runtime.globalVars.myPlayerId;
    if (playerId) {
        fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${playerId}`, {
            method: 'DELETE', headers: getAuthHeaders()
        }).catch(() => {});
    }
    if (runtime.callFunction) {
        try { runtime.callFunction("GoToObshiy2"); } catch(e) {}
    }
}

// ==================== СИСТЕМА ЧАТА ====================

function addMessageToBuffer(messageText, msgId) {
    if (!runtime || !runtime.globalVars) return;
    if (msgId) {
        if (runtime.globalVars.processedIds.has(msgId)) return;
        runtime.globalVars.processedIds.add(msgId);
    }
    runtime.globalVars.supabaseChatBuffer += messageText;
    if (runtime.callFunction) {
        try { runtime.callFunction("ProcessSupabaseChat"); } catch(err) {
            try { runtime.callFunction("ShowChatMessage", messageText); } catch(err2) {}
        }
    }
}

// ==================== 🔥 REALTIME ПОДПИСКИ ====================

function setupRealtimeSubscriptions() {
    if (!window.supabaseRealtime?.isAvailable()) {
        console.log('❌ [RT] Realtime недоступен');
        return false;
    }
    if (!runtime.globalVars.currentLobby) {
        console.log('❌ [RT] Нет лобби для подписки');
        return false;
    }

    console.log('🚀 [RT] Настраиваю подписки для лобби:', runtime.globalVars.currentLobby);

    const topic = `realtime:public:lobby_${runtime.globalVars.currentLobby}`;
    const channel = window.supabaseRealtime.getChannel(topic);

    if (!channel) {
        console.log('❌ [RT] Не удалось создать канал');
        return false;
    }

    // Подписка: новые сообщения чата
    channel.on('INSERT', 'chat_messages', `lobby_id=eq.${runtime.globalVars.currentLobby}`, (data) => {
        const record = data.record || data;
        console.log('💬 [RT] Новое сообщение:', record.id, record.clean_message?.substring(0, 30));
        if (record.id && record.id > runtime.globalVars.lastChatMessageId) {
            runtime.globalVars.lastChatMessageId = record.id;
            const time = new Date(record.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const prefix = record.player_id === "system" ? "[Система]" : `[${record.nickname}]`;
            addMessageToBuffer(`[${time}] ${prefix} ${record.clean_message}\n`, record.id);
        }
    });

    // Подписка: игрок присоединился
    channel.on('INSERT', 'players', `lobby_id=eq.${runtime.globalVars.currentLobby}`, (data) => {
        console.log('👤 [RT] Игрок присоединился:', data.record?.nickname);
        updateLobbyStateRealtime();
    });

    // Подписка: игрок вышел
    channel.on('DELETE', 'players', `lobby_id=eq.${runtime.globalVars.currentLobby}`, (data) => {
        console.log('👤 [RT] Игрок вышел:', data.old_record?.nickname || '?');
        updateLobbyStateRealtime();
    });

    // Подписка: изменения лобби (голосование, статус)
    channel.on('UPDATE', 'lobbies', `lobby_id=eq.${runtime.globalVars.currentLobby}`, async (data) => {
    const record = data.record || data;
    console.log('🔄 [RT] Лобби обновилось:', 'status=', record.status, 'vote_status=', record.vote_status,
        'yes=', record.yes_votes, 'no=', record.no_votes);

    if (record.status === 'playing') {
        console.log('🎮 [RT] Игра началась! Переход...');
        goToGame();
        return;
    }

    // 🔥 ЗАЩИТА: если я один, а кто-то прислал counting — сбрасываем и выходим
    if (runtime.globalVars.kolvovkome < 2 && (record.vote_status === 'counting' || runtime.globalVars.voteActive)) {
        console.warn('⚠️ [RT] Попытка показать голосование при <2 игроках — игнорирую');
        runtime.globalVars.voteActive = false;
        runtime.globalVars.odnahaza = 0;
        runtime.globalVars.kolvogolosovza2 = 0;
        runtime.globalVars.kolvogolosovprotiv2 = 0;
        if (runtime.callFunction) { 
            try { runtime.callFunction("HideVoteUI"); } catch(e) {}
            try { runtime.callFunction("UpdateVotesText"); } catch(e) {}
        }
        // Сбрасываем на сервере (на всякий случай)
        try {
            await fetch(`${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${runtime.globalVars.currentLobby}`, {
                method: "PATCH", headers: getAuthHeaders(),
                body: JSON.stringify({ vote_status: 'idle', yes_votes: 0, no_votes: 0 })
            });
        } catch(e) {}
        return;
    }

    runtime.globalVars.kolvogolosovza2 = record.yes_votes || 0;
    runtime.globalVars.kolvogolosovprotiv2 = record.no_votes || 0;

    if (runtime.callFunction) {
        try { runtime.callFunction("UpdateVotesText"); } catch(err) {}
    }

    updateVoteUI(runtime.globalVars.currentLobby, record.vote_status || 'idle');
});

    channel.subscribe((status) => {
    console.log('📡 [RT] Статус подписки:', status);
    if (status === 'SUBSCRIBED') {
        console.log('✅ [RT] Подписки активны!');
        runtime.globalVars.realtimeMode = true;
        
        // 🔥 ФИКС: после подписки сразу обновляем список игроков
        updateLobbyStateRealtime();
        
        loadLast5Messages();
        
        // 🔥 ПОДСТРАХОВКА: через 2 секунды делаем ещё один полный поллинг
        // на случай если realtime ещё не разогнался
        setTimeout(async () => {
            if (runtime.globalVars.gameStatus === "lobby" && runtime.globalVars.currentLobby) {
                console.log('🔄 [RT] Подстраховочный поллинг...');
                // делаем полный цикл как в старом коде
                try {
                    const lobbyId = runtime.globalVars.currentLobby;
                    const [lobbyRes, playersRes] = await Promise.all([
                        fetch(`${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${lobbyId}`, { headers: getAuthHeaders() }),
                        fetch(`${SUPABASE_URL}/rest/v1/players?lobby_id=eq.${lobbyId}`, { headers: getAuthHeaders() })
                    ]);
                    if (lobbyRes.ok && playersRes.ok) {
                        const lobbyData = await lobbyRes.json();
                        const players = await playersRes.json();
                        if (lobbyData.length > 0) {
                            const lobby = lobbyData[0];
                            if (runtime.callFunction) {
                                runtime.callFunction("UpdatePlayerCountText", players.length);
                                runtime.callFunction("UpdateVotesText");
                            }
                            runtime.globalVars.kolvovkome = players.length;
                            runtime.globalVars.kolvogolosovza2 = lobby.yes_votes || 0;
                            runtime.globalVars.kolvogolosovprotiv2 = lobby.no_votes || 0;
                            await updateVoteUI(lobbyId, lobby.vote_status || 'idle');
                        }
                    }
                } catch(e) {
                    console.error('❌ [RT] Ошибка подстраховочного поллинга:', e);
                }
            }
        }, 2000);
    }
});
    return true;
}

// ==================== ОБНОВЛЕНИЕ СОСТОЯНИЯ ЛОББИ (REALTIME) ====================

async function updateLobbyStateRealtime() {
    const lobbyId = runtime.globalVars.currentLobby;
    if (!lobbyId) {
        console.log('❌ [RT] updateLobbyStateRealtime: нет лобби');
        return;
    }
    if (runtime.globalVars.gameStatus !== "lobby") {
        console.log('❌ [RT] updateLobbyStateRealtime: статус не lobby:', runtime.globalVars.gameStatus);
        return;
    }

    console.log('🔄 [RT] Обновляю список игроков...');

    try {
        const playersRes = await fetch(
            `${SUPABASE_URL}/rest/v1/players?lobby_id=eq.${lobbyId}`,
            { headers: getAuthHeaders() }
        );
        if (!playersRes.ok) {
            console.error('❌ [RT] Ошибка получения игроков:', playersRes.status);
            return;
        }

        const players = await playersRes.json();
        const newCount = players.length;
        const prevCount = runtime.globalVars.kolvovkome;

        console.log(`👥 [RT] Игроков: ${prevCount} → ${newCount}`);
        runtime.globalVars.kolvovkome = newCount;

        // Всегда обновляем UI счёта игроков
        if (runtime.callFunction) {
            try {
                runtime.callFunction("UpdatePlayerCountText", newCount);
                console.log('✅ [RT] UpdatePlayerCountText вызван с', newCount);
            } catch(err) {
                console.error('❌ [RT] Ошибка UpdatePlayerCountText:', err);
            }
        }

        await checkPlayerChanges(players);

        // Если игроков стало меньше 2 — скрываем голосование И сбрасываем на сервере + клиент
        if (newCount < 2) {
            console.log('👤 [RT] Игроков < 2, сбрасываю голосование полностью');
            
            // Клиентские переменные
            runtime.globalVars.voteActive = false;
            runtime.globalVars.odnahaza = 0;
            runtime.globalVars.kolvogolosovza2 = 0;
            runtime.globalVars.kolvogolosovprotiv2 = 0;
            
            if (runtime.callFunction) {
                try { runtime.callFunction("HideVoteUI"); } catch(e) {}
                try { runtime.callFunction("UpdateVotesText"); } catch(e) {} // чтобы обнулить отображение голосов
            }

            // Сброс на сервере (как в старом поллинг-коде)
            try {
                await fetch(`${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${lobbyId}`, {
                    method: "PATCH",
                    headers: getAuthHeaders(),
                    body: JSON.stringify({ vote_status: 'idle', yes_votes: 0, no_votes: 0 })
                });
                console.log('✅ [RT] Голосование сброшено на сервере');
            } catch(e) {
                console.error('❌ [RT] Ошибка сброса голосования:', e);
            }
            return; // всё, не идём дальше
        }

        // Если игроков >= 2, возможно нужно показать/обновить голосование
        // Но здесь мы полагаемся на события UPDATE lobbies, которые вызовут updateVoteUI
        // Чтобы избежать рассинхрона, можно запросить текущий статус лобби
        const lobbyRes = await fetch(
            `${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${lobbyId}`,
            { headers: getAuthHeaders() }
        );
        if (lobbyRes.ok) {
            const lobbyData = await lobbyRes.json();
            if (lobbyData.length > 0) {
                const lobby = lobbyData[0];
                runtime.globalVars.kolvogolosovza2 = lobby.yes_votes || 0;
                runtime.globalVars.kolvogolosovprotiv2 = lobby.no_votes || 0;
                if (runtime.callFunction) {
                    try { runtime.callFunction("UpdateVotesText"); } catch(e) {}
                }
                await updateVoteUI(lobbyId, lobby.vote_status || 'idle');
            }
        }

    } catch(err) {
        console.error('❌ [RT] Ошибка updateLobbyStateRealtime:', err);
    }
}
// ==================== СООБЩЕНИЯ ЧАТА ====================

async function loadLast5Messages() {
    if (!runtime.globalVars.currentLobby) return;
    try {
        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/chat_messages?lobby_id=eq.${runtime.globalVars.currentLobby}&order=id.desc&limit=5`,
            { headers: getAuthHeaders() }
        );
        if (!response.ok) return;
        const messages = (await response.json()).reverse();
        for (const msg of messages) {
            if (msg.id > runtime.globalVars.lastChatMessageId) runtime.globalVars.lastChatMessageId = msg.id;
            const time = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const prefix = msg.player_id === "system" ? "[Система]" : `[${msg.nickname}]`;
            addMessageToBuffer(`[${time}] ${prefix} ${msg.clean_message}\n`, msg.id);
        }
        runtime.globalVars.isFirstChatLoad = false;
    } catch(err) {}
}

async function loadNewChatMessages() {
    if (!runtime.globalVars.currentLobby || runtime.globalVars.gameStatus !== "lobby") return;
    try {
        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/chat_messages?lobby_id=eq.${runtime.globalVars.currentLobby}&id=gt.${runtime.globalVars.lastChatMessageId}&order=id.asc&limit=10`,
            { headers: getAuthHeaders() }
        );
        if (!response.ok) return;
        const messages = await response.json();
        for (const msg of messages) {
            if (msg.id > runtime.globalVars.lastChatMessageId) runtime.globalVars.lastChatMessageId = msg.id;
            const time = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const prefix = msg.player_id === "system" ? "[Система]" : `[${msg.nickname}]`;
            addMessageToBuffer(`[${time}] ${prefix} ${msg.clean_message}\n`, msg.id);
        }
    } catch(err) {}
}

// ==================== УМНЫЙ ЗАПУСК ЧАТА ====================

function startChatPolling() {
    if (runtime.globalVars.chatPollInterval) clearInterval(runtime.globalVars.chatPollInterval);
    loadLast5Messages();
    runtime.globalVars.chatPollInterval = setInterval(() => { loadNewChatMessages(); }, 1500);
    console.log('🔁 [Chat] Поллинг чата запущен (1500ms)');
}

function startChatSystem() {
    let attempts = 0;
    const waitForCheck = setInterval(async () => {
        attempts++;

        if (window.supabaseRealtime?.isCheckDone() || attempts > 25) {
            clearInterval(waitForCheck);

            // 🔥 ФИКС: если инстанс не создался (прокси был при загрузке)
            if (!window._realtimeInstance && !window._useProxy && window.supabaseRealtime) {
                console.log('🔄 [Chat] Realtime инстанс не создан, запускаю initRealtime...');
                await window.supabaseRealtime.init();
            }

            const rtAvailable = window.supabaseRealtime?.isAvailable();
            console.log('🔍 [Chat] Проверка завершена. Realtime доступен:', rtAvailable);

            if (rtAvailable && setupRealtimeSubscriptions()) {
                console.log('🚀 [Chat] Используем REALTIME');

                runtime.globalVars.chatPollInterval = setInterval(() => {
                    if (!runtime.globalVars.realtimeMode) {
                        console.log('⚠️ [Chat] Realtime отвалился → переключаюсь на поллинг');
                        clearInterval(runtime.globalVars.chatPollInterval);
                        runtime.globalVars.chatPollInterval = null;
                        startChatPolling();
                    }
                }, 3000);
            } else {
                console.log('⚠️ [Chat] Realtime недоступен → запускаю ПОЛЛИНГ');
                startChatPolling();
            }
        }
    }, 200);
}

async function sendSystemMessage(messageText) {
    try {
        await fetch(`${SUPABASE_URL}/rest/v1/chat_messages`, {
            method: "POST", headers: getAuthHeaders(),
            body: JSON.stringify({
                lobby_id: runtime.globalVars.currentLobby,
                player_id: "system",
                nickname: "Система",
                clean_message: messageText,
                timestamp: new Date().toISOString()
            })
        });
    } catch(err) {}
}

async function sendPlayerChatMessage(message) {
    if (!message || message.trim() === "") return;
    const cleanMessage = message.trim();
    try {
        await fetch(`${SUPABASE_URL}/rest/v1/chat_messages`, {
            method: "POST", headers: getAuthHeaders(),
            body: JSON.stringify({
                lobby_id: runtime.globalVars.currentLobby,
                player_id: runtime.globalVars.myPlayerId,
                nickname: runtime.globalVars.myNickname || "Player",
                clean_message: cleanMessage,
                timestamp: new Date().toISOString()
            })
        });
    } catch(err) {}
}

// ==================== СИСТЕМА ИГРОКОВ ====================

function isMainPlayer(players) {
    if (players.length === 0) return false;
    const sorted = [...players].sort((a, b) => {
        const tA = parseInt(a.player_id.split('_')[1]) || 0;
        const tB = parseInt(b.player_id.split('_')[1]) || 0;
        return tA - tB;
    });
    return sorted[0].player_id === runtime.globalVars.myPlayerId;
}

async function reconnectPlayer() {
    const now = Date.now();
    if (runtime.globalVars.reconnectAttempts >= 3) {
        goToMenu("Не удалось переподключиться");
        return false;
    }
    if (now - runtime.globalVars.lastReconnectTime < 10000) return false;
    runtime.globalVars.lastReconnectTime = now;
    runtime.globalVars.reconnectAttempts++;
    try {
        const addResponse = await fetch(`${SUPABASE_URL}/rest/v1/rpc/add_player_to_lobby`, {
            method: "POST", headers: getAuthHeaders(),
            body: JSON.stringify({
                p_player_id: runtime.globalVars.myPlayerId,
                p_lobby_id: runtime.globalVars.currentLobby,
                p_nickname: runtime.globalVars.myNickname,
                p_user_id: runtime.globalVars.supabaseUserId
            })
        });
        if (addResponse.ok) {
            runtime.globalVars.hasReconnected = true;
            runtime.globalVars.reconnectAttempts = 0;
            return true;
        }
        return false;
    } catch(err) { return false; }
}

async function checkIfPlayerExists() {
    try {
        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/players?player_id=eq.${runtime.globalVars.myPlayerId}`,
            { headers: getAuthHeaders() }
        );
        if (response.ok) {
            const data = await response.json();
            return data.length > 0;
        }
        return false;
    } catch(err) { return false; }
}

async function checkPlayerChanges(players) {
    const currentCount = players.length;
    const previousCount = runtime.globalVars.lastPlayerCount || 0;
    const currentPlayerIds = players.map(p => p.player_id);
    const currentPlayerNames = players.map(p => p.nickname);

    if (previousCount === 0) {
        runtime.globalVars.lastPlayerCount = currentCount;
        runtime.globalVars.lastPlayerIds = currentPlayerIds;
        runtime.globalVars.lastPlayerNames = currentPlayerNames;
        return;
    }

    const iAmMainPlayer = isMainPlayer(players);
    if (!iAmMainPlayer) {
        runtime.globalVars.lastPlayerCount = currentCount;
        runtime.globalVars.lastPlayerIds = currentPlayerIds;
        runtime.globalVars.lastPlayerNames = currentPlayerNames;
        return;
    }

    if (currentCount > previousCount) {
        for (const player of players) {
            if (!runtime.globalVars.lastPlayerIds.includes(player.player_id)) {
                if (player.player_id !== runtime.globalVars.myPlayerId) {
                    await sendSystemMessage(`🎮 ${player.nickname} присоединился!`);
                }
                break;
            }
        }
    } else if (currentCount < previousCount) {
        for (let i = 0; i < runtime.globalVars.lastPlayerIds.length; i++) {
            const oldId = runtime.globalVars.lastPlayerIds[i];
            const oldName = runtime.globalVars.lastPlayerNames[i];
            if (!currentPlayerIds.includes(oldId)) {
                if (oldId !== runtime.globalVars.myPlayerId) {
                    await sendSystemMessage(`🚪 ${oldName} покинул игру`);
                }
                break;
            }
        }
    }

    runtime.globalVars.lastPlayerCount = currentCount;
    runtime.globalVars.lastPlayerIds = currentPlayerIds;
    runtime.globalVars.lastPlayerNames = currentPlayerNames;
}

// ==================== СИСТЕМА ГОЛОСОВАНИЯ ====================

function setupVoteButtons() {
    if (runtime.objects && runtime.objects.гала) {
        runtime.objects.гала.addEventListener("click", async function() {
            if (runtime.globalVars.odnahaza === 0 && !runtime.globalVars.voteCooldown) {
                runtime.globalVars.odnahaza = 1;
                runtime.globalVars.voteCooldown = true;
                console.log('🗳️ Голосую ЗА...');
                try {
                    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/player_vote`, {
                        method: "POST", headers: getAuthHeaders(),
                        body: JSON.stringify({ player_id_param: runtime.globalVars.myPlayerId, vote_value: true })
                    });
                    console.log('✅ Голос ЗА отправлен, статус:', res.status);
                    setTimeout(() => { runtime.globalVars.voteCooldown = false; }, 2000);
                } catch(err) {
                    console.error('❌ Ошибка голоса ЗА:', err);
                    runtime.globalVars.voteCooldown = false;
                }
            } else {
                console.log('⚠️ Голос уже подан или cooldown. odnahaza=', runtime.globalVars.odnahaza, 'cooldown=', runtime.globalVars.voteCooldown);
            }
        });
    }

    if (runtime.objects && runtime.objects.ждатьеще) {
        runtime.objects.ждатьеще.addEventListener("click", async function() {
            if (runtime.globalVars.odnahaza === 0 && !runtime.globalVars.voteCooldown) {
                runtime.globalVars.odnahaza = 1;
                runtime.globalVars.voteCooldown = true;
                console.log('🗳️ Голосую ПРОТИВ...');
                try {
                    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/player_vote`, {
                        method: "POST", headers: getAuthHeaders(),
                        body: JSON.stringify({ player_id_param: runtime.globalVars.myPlayerId, vote_value: false })
                    });
                    console.log('✅ Голос ПРОТИВ отправлен, статус:', res.status);
                    setTimeout(() => { runtime.globalVars.voteCooldown = false; }, 2000);
                } catch(err) {
                    console.error('❌ Ошибка голоса ПРОТИВ:', err);
                    runtime.globalVars.voteCooldown = false;
                }
            }
        });
    }
}

async function getVoteTimeLeft(lobbyId) {
    try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_vote_time_left`, {
            method: "POST", headers: getAuthHeaders(),
            body: JSON.stringify({ lobby_id_param: lobbyId })
        });
        const val = await res.json();
        console.log('⏱️ Времени осталось:', val, 'сек');
        return val;
    } catch(err) { return 0; }
}

// ✅ БАГ 2 ФИКС: updateVoteUI идентична polling-версии
// ✅ НОВЫЙ ФИКС: race condition — если status='counting', сервер УЖЕ решил что игроков >= 2.
// Не блокируем ShowVoteUI по kolvovkome когда counting:
// лобби UPDATE с 'counting' может прийти раньше чем players INSERT обновит kolvovkome
async function updateVoteUI(lobbyId, voteStatus) {
    console.log('🎯 updateVoteUI: status=', voteStatus, '| voteActive=', runtime.globalVars.voteActive, '| kolvovkome=', runtime.globalVars.kolvovkome);

    // Проверяем кол-во игроков ТОЛЬКО если статус не counting.
    // При counting сервер уже запустил голосование — значит игроков точно >= 2.
    if (voteStatus !== 'counting' && runtime.globalVars.kolvovkome < 2) {
        if (runtime.globalVars.voteActive) {
            runtime.globalVars.voteActive = false;
            runtime.globalVars.odnahaza = 0;
            if (runtime.callFunction) { try { runtime.callFunction("HideVoteUI"); } catch(e) {} }
        }
        return;
    }

    if (voteStatus === 'counting') {
        const timeLeft = await getVoteTimeLeft(lobbyId);
        if (timeLeft > 0) {
            if (!runtime.globalVars.voteActive) {
                console.log('✅ ShowVoteUI (counting, timeLeft=', timeLeft, ')');
                runtime.globalVars.voteActive = true;
                runtime.globalVars.odnahaza = 0;
                if (runtime.callFunction) { try { runtime.callFunction("ShowVoteUI"); } catch(e) {} }
            }
        } else {
            // Таймер истёк — скрываем и подводим итог
            console.log('⏰ Таймер истёк (timeLeft=0), финализирую голосование');
            if (runtime.globalVars.voteActive) {
                runtime.globalVars.voteActive = false;
                if (runtime.callFunction) { try { runtime.callFunction("HideVoteUI"); } catch(e) {} }
            }
            await finishVoteOnServer(lobbyId);
        }
    } else {
        // idle — скрываем UI
        if (runtime.globalVars.voteActive) {
            console.log('🔕 HideVoteUI (status=idle)');
            runtime.globalVars.voteActive = false;
            runtime.globalVars.odnahaza = 0;
            if (runtime.callFunction) { try { runtime.callFunction("HideVoteUI"); } catch(e) {} }
        }
    }
}

async function finishVoteOnServer(lobbyId) {
    try {
        const resultRes = await fetch(`${SUPABASE_URL}/rest/v1/rpc/check_vote_result`, {
            method: "POST", headers: getAuthHeaders(),
            body: JSON.stringify({ lobby_id_param: lobbyId })
        });
        const gameStarts = await resultRes.json();
        console.log('🏁 Результат голосования, игра стартует:', gameStarts);

        if (gameStarts) {
            await fetch(`${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${lobbyId}`, {
                method: "PATCH", headers: getAuthHeaders(),
                body: JSON.stringify({ status: 'playing', vote_status: 'idle', yes_votes: 0, no_votes: 0 })
            });
            goToGame();
        } else {
            await fetch(`${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${lobbyId}`, {
                method: "PATCH", headers: getAuthHeaders(),
                body: JSON.stringify({ vote_status: 'idle', yes_votes: 0, no_votes: 0 })
            });
        }
        runtime.globalVars.odnahaza = 0;
    } catch(err) {
        console.error('❌ finishVoteOnServer ошибка:', err);
    }
}

// ==================== УМНЫЙ ПОИСК ЛОББИ ====================

async function findBetterLobby() {
    if (runtime.globalVars.gameStatus !== "lobby") {
        const btn = runtime.objects?.pererzaitivkomu2?.getFirstInstance();
        if (btn) btn.opacity = 0;
        return;
    }
    try {
        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/lobbies?status=eq.waiting&select=lobby_id,player_count`,
            { headers: getAuthHeaders() }
        );
        if (!response.ok) return;

        const lobbies = await response.json();
        let bestId = "";
        let bestCount = 0;
        const myCount = runtime.globalVars.kolvovkome;
        const myLobbyId = runtime.globalVars.currentLobby;

        for (const lobby of lobbies) {
            if (lobby.lobby_id === myLobbyId) continue;
            const targetCount = lobby.player_count;
            if ((targetCount + myCount) <= 7) {
                let worthIt = false;
                if (targetCount > myCount) worthIt = true;
                else if (targetCount === myCount && lobby.lobby_id < myLobbyId) worthIt = true;
                if (worthIt && targetCount >= bestCount) {
                    bestCount = targetCount;
                    bestId = lobby.lobby_id;
                }
            }
        }

        const btn = runtime.objects?.pererzaitivkomu2?.getFirstInstance();
        if (bestId !== "") {
            if (bestId !== runtime.globalVars.bestRoomName) {
                runtime.globalVars.bestRoomName = bestId;
                runtime.globalVars.vrublenopodhuuba = 1;
                addMessageToBuffer(`[Server] Найдена комната, где уже есть ${bestCount} чел. Присоединяйтесь!\n`);
            }
            if (btn) btn.opacity = 100;
        } else {
            runtime.globalVars.bestRoomName = "";
            runtime.globalVars.vrublenopodhuuba = 0;
            if (btn) btn.opacity = 0;
        }
    } catch(e) {}
}

// ==================== ОСНОВНОЙ ЦИКЛ ====================

async function sendPing() {
    if (runtime.globalVars.gameStatus !== "lobby") return;
    try {
        await fetch(`${SUPABASE_URL}/rest/v1/rpc/update_player_ping`, {
            method: "POST", headers: getAuthHeaders(),
            body: JSON.stringify({ player_id_param: runtime.globalVars.myPlayerId })
        });
    } catch(err) {}
}

async function cleanupInactivePlayers() {
    if (runtime.globalVars.gameStatus !== "lobby") return;
    try {
        await fetch(`${SUPABASE_URL}/rest/v1/rpc/cleanup_old_players`, {
            method: "POST", headers: getAuthHeaders(), body: JSON.stringify({})
        });
    } catch(err) {}
}

// ✅ БАГ 1 ФИКС: start_vote теперь вызывается и в realtime-режиме
// + НОВЫЙ ФИКС: если vote уже counting — проверяем таймер (иначе UI висел бесконечно)
async function checkAndStartVoteIfNeeded(lobbyId) {
    if (runtime.globalVars.kolvovkome < 2) return;
    try {
        const res = await fetch(
            `${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${lobbyId}&select=vote_status,status`,
            { headers: getAuthHeaders() }
        );
        if (!res.ok) return;
        const data = await res.json();
        if (data.length === 0) { goToMenu("Лобби удалено"); return; }

        const lobby = data[0];
        console.log('🗳️ [RT] Проверка: vote_status=', lobby.vote_status, 'status=', lobby.status, 'voteActive=', runtime.globalVars.voteActive);

        if (lobby.status === 'playing') { goToGame(); return; }

        if (lobby.vote_status === 'counting') {
            // ✅ ФИКС: проверяем таймер — иначе после 15 сек UI висел навсегда
            // В realtime режиме некому было вызвать finishVoteOnServer по таймеру
            await updateVoteUI(lobbyId, 'counting');
        } else if (!runtime.globalVars.voteActive) {
            console.log('🗳️ [RT] Запускаю start_vote для', lobbyId);
            const startRes = await fetch(`${SUPABASE_URL}/rest/v1/rpc/start_vote`, {
                method: "POST", headers: getAuthHeaders(),
                body: JSON.stringify({ lobby_id_param: lobbyId })
            });
            console.log('✅ [RT] start_vote статус:', startRes.status);
        }
    } catch(e) {
        console.error('❌ checkAndStartVoteIfNeeded ошибка:', e);
    }
}

async function updateLobbyState() {
    const lobbyId = runtime.globalVars.currentLobby;
    if (!lobbyId || runtime.globalVars.gameStatus !== "lobby") return;

    try {
        runtime.globalVars.vseti = 1;
        const playerExists = await checkIfPlayerExists();
        if (!playerExists) await reconnectPlayer();
        await sendPing();
        await cleanupInactivePlayers();

        // ✅ БАГ 1 ФИКС: в realtime-режиме всё равно запускаем голосование если нужно
        if (runtime.globalVars.realtimeMode) {
    await findBetterLobby();
    await checkAndStartVoteIfNeeded(lobbyId);
    // 🔥 НЕ ВЫХОДИМ если realtimeMode сбросился во время выполнения
    if (runtime.globalVars.realtimeMode) return;
    console.log('⚠️ [MainLoop] realtimeMode сброшен, продолжаю полный поллинг');
}

        // --- POLLING РЕЖИМ (без изменений) ---
        const [lobbyRes, playersRes] = await Promise.all([
            fetch(`${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${lobbyId}`, { headers: getAuthHeaders() }),
            fetch(`${SUPABASE_URL}/rest/v1/players?lobby_id=eq.${lobbyId}`, { headers: getAuthHeaders() })
        ]);

        const lobbyData = await lobbyRes.json();
        if (lobbyData.length === 0) { goToMenu("Лобби удалено"); return; }

        const lobby = lobbyData[0];
        if (lobby.status === 'playing') { goToGame(); return; }

        const players = await playersRes.json();
        const voteStatus = lobby.vote_status || 'idle';
        await checkPlayerChanges(players);

        runtime.globalVars.kolvovkome = players.length;
        runtime.globalVars.kolvogolosovza2 = lobby.yes_votes || 0;
        runtime.globalVars.kolvogolosovprotiv2 = lobby.no_votes || 0;

        if (runtime.callFunction) {
            try {
                runtime.callFunction("UpdatePlayerCountText", runtime.globalVars.kolvovkome);
                runtime.callFunction("UpdateVotesText");
            } catch(err) {}
        }

        if (players.length < 2) {
            if (runtime.globalVars.voteActive) {
                runtime.globalVars.voteActive = false;
                runtime.globalVars.odnahaza = 0;
                if (runtime.callFunction) { try { runtime.callFunction("HideVoteUI"); } catch(e) {} }
                try {
                    await fetch(`${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${lobbyId}`, {
                        method: "PATCH", headers: getAuthHeaders(),
                        body: JSON.stringify({ vote_status: 'idle', yes_votes: 0, no_votes: 0 })
                    });
                } catch(e) {}
            }
            await findBetterLobby();
            return;
        }

        await findBetterLobby();
        await updateVoteUI(lobbyId, voteStatus);

        if (voteStatus !== 'counting' && players.length >= 2 && !runtime.globalVars.voteActive) {
            runtime.globalVars.odnahaza = 0;
            await fetch(`${SUPABASE_URL}/rest/v1/rpc/start_vote`, {
                method: "POST", headers: getAuthHeaders(),
                body: JSON.stringify({ lobby_id_param: lobbyId })
            });
        }

    } catch(err) {
        console.error('❌ updateLobbyState ошибка:', err);
        runtime.globalVars.vseti = 0;
    }
}

async function startLobbySystems() {
    if (!runtime.globalVars.systemsRunning) return;
    
    try { 
        await updateLobbyState(); 
    } catch (err) {
        console.error('❌ [MainLoop] Ошибка:', err);
    }

    if (runtime.globalVars.systemsRunning && runtime.globalVars.gameStatus === "lobby") {
        // 🔥 ВАЖНО: если realtime отвалился, переключаемся на частый поллинг
        const interval = runtime.globalVars.realtimeMode ? 3000 : 1500;
        
        // 🔥 Если только что переключились с realtime на поллинг — принудительно делаем полный цикл
        if (!runtime.globalVars.realtimeMode && runtime.globalVars._lastRealtimeMode !== false) {
            console.log('⚠️ [MainLoop] Realtime пропал, форсирую полный поллинг');
        }
        runtime.globalVars._lastRealtimeMode = runtime.globalVars.realtimeMode;
        
        setTimeout(startLobbySystems, interval);
    }
}

// ==================== ВЫХОД ====================

function lobbyExitFunction() {
    const playerId = runtime.globalVars.myPlayerId;
    if (!playerId || runtime.globalVars.gameStatus === "playing") return;
    runtime.globalVars.odnahaza = 0;

    if (runtime.globalVars.chatPollInterval) clearInterval(runtime.globalVars.chatPollInterval);

    // ✅ БАГ 7 ФИКС: передаём topic в getChannel
    if (runtime.globalVars.currentLobby && window.supabaseRealtime) {
        const topic = `realtime:public:lobby_${runtime.globalVars.currentLobby}`;
        const channel = window.supabaseRealtime.getChannel(topic);
        if (channel) channel.unsubscribe();
    }

    if (navigator.sendBeacon) {
        navigator.sendBeacon(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${playerId}`, new Blob([]));
    }
    fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${playerId}`, {
        method: 'DELETE', headers: getAuthHeaders(), keepalive: true
    }).catch(() => {});
}

function setupInstantExit() {
    window.removeEventListener('beforeunload', lobbyExitFunction);
    window.removeEventListener('pagehide', lobbyExitFunction);
    window.addEventListener('beforeunload', lobbyExitFunction);
    window.addEventListener('pagehide', lobbyExitFunction);
}

// ==================== ВХОД ====================

async function enterLobby() {
    try {
        if (runtime.globalVars.INSTRUKCIUNADO === 1) {
            console.log("🛑 Стоп! Сначала нужно пройти инструкцию.");
            return;
        }

        let myId = localStorage.getItem("rapintas_bazaid");
        if (!myId) {
            myId = "player_" + Date.now() + "_" + Math.floor(Math.random() * 1000);
            localStorage.setItem("rapintas_bazaid", myId);
        }

        runtime.globalVars.myPlayerId = myId;
        runtime.globalVars.bazaid = myId;
        runtime.globalVars.myNickname = runtime.globalVars.nick || "Player_" + Math.floor(Math.random() * 1000);

        setupInstantExit();

        const findResponse = await fetch(`${SUPABASE_URL}/rest/v1/rpc/find_available_lobby`, {
            method: "POST", headers: getAuthHeaders()
        });
        let lobbyId = (await findResponse.text()).replace(/\"/g, '');

        if (!lobbyId || lobbyId === "null" || lobbyId === "") {
            lobbyId = "lobby_" + Date.now();
            await fetch(`${SUPABASE_URL}/rest/v1/lobbies`, {
                method: "POST", headers: getAuthHeaders(),
                body: JSON.stringify({
                    lobby_id: lobbyId, status: 'waiting', player_count: 1,
                    max_players: 7, created_at: new Date().toISOString(), vote_status: 'idle'
                })
            });
        } else {
            const lobbyCheck = await fetch(
                `${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${lobbyId}`,
                { headers: getAuthHeaders() }
            );
            const lobbyData = await lobbyCheck.json();
            if (lobbyData.length > 0 && lobbyData[0].status === 'full') {
                lobbyId = "lobby_" + Date.now();
                await fetch(`${SUPABASE_URL}/rest/v1/lobbies`, {
                    method: "POST", headers: getAuthHeaders(),
                    body: JSON.stringify({
                        lobby_id: lobbyId, status: 'waiting', player_count: 1,
                        max_players: 7, created_at: new Date().toISOString(), vote_status: 'idle'
                    })
                });
            }
        }

        await fetch(`${SUPABASE_URL}/rest/v1/rpc/add_player_to_lobby`, {
            method: "POST", headers: getAuthHeaders(),
            body: JSON.stringify({
                p_player_id: runtime.globalVars.myPlayerId,
                p_lobby_id: lobbyId,
                p_nickname: runtime.globalVars.myNickname,
                p_user_id: runtime.globalVars.supabaseUserId
            })
        });

        runtime.globalVars.currentLobby = lobbyId;
        runtime.globalVars.gameStatus = "lobby";

        setTimeout(() => startChatSystem(), 200);
        setTimeout(setupVoteButtons, 1000);

        await sendSystemMessage(`🎮 ${runtime.globalVars.myNickname} присоединился к игре!`);

        runtime.callFunction("LobbyReady");
        runtime.globalVars.systemsRunning = true;
        startLobbySystems();

    } catch(err) {
        console.error('❌ enterLobby ошибка:', err);
        goToMenu("Ошибка входа");
    }
}

// ==================== РУЧНОЕ ПЕРЕПОДКЛЮЧЕНИЕ ====================

window.handleManualReconnect = async function() {
    const playerId = runtime.globalVars.myPlayerId;
    if (playerId) {
        try {
            fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${playerId}`, {
                method: 'DELETE', headers: getAuthHeaders()
            }).catch(() => {});
        } catch(err) {}
    }

    runtime.globalVars.systemsRunning = false;
    runtime.globalVars.realtimeMode = false;
    runtime.globalVars.vrublenopodhuuba = 0;

    if (runtime.globalVars.chatPollInterval) {
        clearInterval(runtime.globalVars.chatPollInterval);
        runtime.globalVars.chatPollInterval = null;
    }

    // ✅ БАГ 7 ФИКС: передаём topic в getChannel
    if (runtime.globalVars.currentLobby && window.supabaseRealtime) {
        const topic = `realtime:public:lobby_${runtime.globalVars.currentLobby}`;
        const channel = window.supabaseRealtime.getChannel(topic);
        if (channel) channel.unsubscribe();
    }

    setTimeout(() => enterLobby(), 800);
};

// ==================== ПРИНУДИТЕЛЬНЫЙ ЗАПУСК ====================
setTimeout(function() {
    if (runtime.globalVars.supabaseUserId || window.supabaseUserId) {
        if (!runtime.globalVars.supabaseUserId) {
            runtime.globalVars.supabaseUserId = window.supabaseUserId;
        }
        enterLobby();
    } else {
        setTimeout(() => {
            if (window.supabaseUserId) {
                runtime.globalVars.supabaseUserId = window.supabaseUserId;
                enterLobby();
            } else {
                console.error('❌ supabaseUserId так и не появился — enterLobby не запущен');
            }
        }, 1000);
    }
}, 500);
	},

	async Lichniy2_Event140_Act2(runtime, localVars)
	{
// 🔥 КНОПКА "ЗА" С ЗАЩИТОЙ ОТ СПАМА И AUTH

// Функция для получения заголовков с токеном
function getAuthHeaders() {
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
    const baseHeaders = {
        "apikey": SUPABASE_KEY,
        "Content-Type": "application/json"
    };
    // Если есть токен из Auth — используем его
    if (window.supabaseAuthToken) {
        baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
        baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
}

if (!runtime.globalVars.voteCooldown) {
  runtime.globalVars.voteCooldown = true;
  
  fetch("https://lebmkbapqahnahjeycvd.supabase.co/rest/v1/rpc/player_vote",{
    method:"POST",
    headers: getAuthHeaders(),
    body:JSON.stringify({
      player_id_param: runtime.globalVars.myPlayerId,
      vote_value: true
    })
  }).then(()=>{
    console.log("✅ Голос ЗА отправлен!");
    setTimeout(() => {
      runtime.globalVars.voteCooldown = false;
    }, 2000);
  }).catch(err=>{
    console.log("❌ Ошибка:", err);
    runtime.globalVars.voteCooldown = false;
  });
} else {
  console.log("⏳ Подожди, голос уже отправляется...");
}
	},

	async Lichniy2_Event141_Act2(runtime, localVars)
	{
// 🔥 КНОПКА "ПРОТИВ" С ЗАЩИТОЙ ОТ СПАМА И AUTH

function getAuthHeaders() {
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
    const baseHeaders = {
        "apikey": SUPABASE_KEY,
        "Content-Type": "application/json"
    };
    if (window.supabaseAuthToken) {
        baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
        baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
}

if (!runtime.globalVars.voteCooldown) {
  runtime.globalVars.voteCooldown = true;
  
  fetch("https://lebmkbapqahnahjeycvd.supabase.co/rest/v1/rpc/player_vote",{
    method:"POST",
    headers: getAuthHeaders(),
    body:JSON.stringify({
      player_id_param: runtime.globalVars.myPlayerId,
      vote_value: false
    })
  }).then(()=>{
    console.log("✅ Голос ПРОТИВ отправлен!");
    setTimeout(() => {
      runtime.globalVars.voteCooldown = false;
    }, 2000);
  }).catch(err=>{
    console.log("❌ Ошибка:", err);
    runtime.globalVars.voteCooldown = false;
  });
} else {
  console.log("⏳ Подожди, голос уже отправляется...");
}
	},

	async Lichniy2_Event142_Act1(runtime, localVars)
	{
		// 🔥 ВЫХОД С МАКЕТА (работает везде)
		console.log("🔚 Выход с макета");
		
		const playerId = runtime.globalVars.myPlayerId;
		
		// Удаляем только если не переходим в игру
		if (playerId && runtime.globalVars.gameStatus !== "playing" && !runtime.globalVars.isTransitioningToGame) {
		  fetch("https://lebmkbapqahnahjeycvd.supabase.co/rest/v1/players?player_id=eq." + playerId, {
		    method: 'DELETE',
		    keepalive: true,
		    headers: {
		      "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU",
		      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU"
		    }
		  }).catch(() => {});
		} else {
		  console.log("🎮 Игрок НЕ удален (переход в игру)");
		}
		
		runtime.globalVars.systemsRunning = false;
		runtime.globalVars.vlobbyzashel = 0;
	},

	async Lichniy2_Event145_Act1(runtime, localVars)
	{
// 🔥 ПОДПИСКА ТОЛЬКО КОГДА ВСЁ ГОТОВО
if (window.supabase && runtime.globalVars.currentLobby && !window.chatSubscribed) {
  
  window.chatSubscribed = true;
  const lobbyId = runtime.globalVars.currentLobby;
  
  console.log('🎯 Пробуем подписаться на чат лобби:', lobbyId);
  
  window.chatChannel = window.supabase
    .channel('chat-' + lobbyId)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'chat_messages',
        filter: `lobby_id=eq.${lobbyId}`
      },
      (payload) => {
        console.log('📨 Получили сообщение из Supabase:', payload.new);
        
        const msg = payload.new;
        const time = new Date(msg.timestamp).toLocaleTimeString([], { 
          hour: '2-digit', minute: '2-digit' 
        });
        
        let displayText;
        if (msg.is_system) {
          displayText = "[" + time + "] [Server] " + msg.message;
        } else {
          displayText = "[" + time + "] [" + msg.nickname + "] " + (msg.clean_message || msg.message);
        }
        
        try {
          // 🔥 ПРОБУЕМ РАЗНЫЕ ВАРИАНТЫ ДОСТУПА К ОБЪЕКТУ
          let textObj = null;
          
          // Вариант 1: через getAllInstances
          if (runtime.objects.ВводТекста6) {
            const instances = runtime.objects.ВводТекста6.getAllInstances();
            if (instances && instances.length > 0) {
              textObj = instances[0];
            }
          }
          
          // Вариант 2: через getFirstInstance (если есть)
          if (!textObj && runtime.objects.ВводТекста6 && runtime.objects.ВводТекста6.getFirstInstance) {
            textObj = runtime.objects.ВводТекста6.getFirstInstance();
          }
          
          // Вариант 3: попробуем найти по имени класса
          if (!textObj) {
            const allTexts = document.querySelectorAll('[class*="ВводТекста6"], [id*="ВводТекста6"]');
            if (allTexts.length > 0) {
              console.log('🔍 Нашли текстовый объект через DOM');
            }
          }
          
          if (textObj) {
            textObj.text = textObj.text + "\n" + displayText;
            console.log('✅ Добавили сообщение:', displayText);
          } else {
            console.log('❌ Не могу найти текстовый объект ВводТекста6');
            alert('Сообщение: ' + displayText);
          }
          
        } catch (err) {
          console.log('💥 Ошибка добавления текста:', err);
        }
      }
    )
    .subscribe((status) => {
      console.log('📡 Статус подписки:', status);
    });
    
  console.log('✅ Подписались на чат лобби:', lobbyId);
}
	},

	async Tetris3_Event14_Act1(runtime, localVars)
	{
		const ysdk = await YaGames.init();
		
		// Сообщаем о старте геймплея.
		ysdk.features.GameplayAPI?.start()
		
		// Игровой процесс активен.
	},

	async Tetris3_Event126_Act1(runtime, localVars)
	{
// ==================== GAMEOVER (dasdoh) ====================
// 🔥 ВСТАВЬ ЭТО КОГДА gameover4 = 1

(function() {
  const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
  
  function getAuthHeaders() {
    const baseHeaders = { "apikey": SUPABASE_KEY, "Content-Type": "application/json" };
    if (window.supabaseAuthToken) {
      baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
      baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
  }
  
  const nowPing = new Date(Date.now() + (window.serverTimeOffset || 0)).toISOString();
  
  fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${runtime.globalVars.myPlayerId}`, {
    method: "PATCH",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      status: "dasdoh",
      last_ping: nowPing
    })
  })
  .then(() => console.log("✅ Игрок умер отправлено"))
  .catch(() => console.log("💥 Ошибка"));
})();
	},

	async Tetris3_Event146_Act1(runtime, localVars)
	{
// ==================== КНОПКА ВЫХОДА (vihappizd) ====================
// 🔥 ВСТАВЬ ЭТО НА КНОПКУ ВЫХОДА ИЗ ИГРЫ

(function() {
  const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
  
  function getAuthHeaders() {
    const baseHeaders = { "apikey": SUPABASE_KEY, "Content-Type": "application/json" };
    if (window.supabaseAuthToken) {
      baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
      baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
  }
  
  const playerId = runtime.globalVars.myPlayerId;
  if (!playerId) {
    console.log("⚠️ Нет playerId для выхода");
    return;
  }
  
  const nowPing = new Date(Date.now() + (window.serverTimeOffset || 0)).toISOString();
  
  console.log(`🚪 Выход игрока ${playerId.substring(0, 8)}... (статус: vihappizd)`);
  
  fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${playerId}`, {
    method: "PATCH",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      status: "vihappizd",
      last_ping: nowPing
    })
  })
  .then(() => console.log("✅ Статус изменен на 'vihappizd'"))
  .catch(() => {});
})();
	},

	async Tetris3_Event147_Act1(runtime, localVars)
	{
// ==================== КНОПКА ВЫХОДА (vihappizd) ====================
// 🔥 ВСТАВЬ ЭТО НА КНОПКУ ВЫХОДА ИЗ ИГРЫ

(function() {
  const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
  
  function getAuthHeaders() {
    const baseHeaders = { "apikey": SUPABASE_KEY, "Content-Type": "application/json" };
    if (window.supabaseAuthToken) {
      baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
      baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
  }
  
  const playerId = runtime.globalVars.myPlayerId;
  if (!playerId) {
    console.log("⚠️ Нет playerId для выхода");
    return;
  }
  
  const nowPing = new Date(Date.now() + (window.serverTimeOffset || 0)).toISOString();
  
  console.log(`🚪 Выход игрока ${playerId.substring(0, 8)}... (статус: vihappizd)`);
  
  fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${playerId}`, {
    method: "PATCH",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      status: "vihappizd",
      last_ping: nowPing
    })
  })
  .then(() => console.log("✅ Статус изменен на 'vihappizd'"))
  .catch(() => {});
})();
	},

	async Tetris3_Event152_Act1(runtime, localVars)
	{
// ==================== ПЛЕЕР ДЕД (dasdoh) ====================
// 🔥 ВСТАВЬ ЭТО КОГДА ИГРОК УМИРАЕТ (GAME OVER)

(function() {
  const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
  
  function getAuthHeaders() {
    const baseHeaders = { "apikey": SUPABASE_KEY, "Content-Type": "application/json" };
    if (window.supabaseAuthToken) {
      baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
      baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
  }
  
  const nowPing = new Date(Date.now() + (window.serverTimeOffset || 0)).toISOString();
  
  fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${runtime.globalVars.myPlayerId}`, {
    method: "PATCH",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      status: "dasdoh",
      last_ping: nowPing
    })
  })
  .then(() => console.log("✅ Игрок умер отправлено"))
  .catch(() => console.log("💥 Ошибка"));
})();
	},

	async Tetris3_Event165_Act1(runtime, localVars)
	{
// ==================== АВТООБНОВЛЕНИЕ ОЧКОВ ТЕТРИСА ====================
// 🔥 ВСТАВЬ ЭТО В "On start of layout" В МАКЕТЕ ТЕТРИСА
// 🔥 ИСПРАВЛЕНО: пинг свежий, статус naserve, Auth, всё сохранено

(function() {
  console.log("🎮 Запускаю систему автообновления очков...");
  
  const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
  
  // 🔥 ФУНКЦИЯ ДЛЯ ЗАГОЛОВКОВ С AUTH
  function getAuthHeaders() {
    const baseHeaders = {
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json"
    };
    if (window.supabaseAuthToken) {
      baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
      baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
  }
  
  // 🔥 ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ ДЛЯ ПИНГА (свежий каждый раз)
  function getCorrectedPing() {
    return new Date(Date.now() + (window.serverTimeOffset || 0)).toISOString();
  }
  
  // 🔥 ПЕРЕМЕННЫЕ ДЛЯ КОНТРОЛЯ
  let lastSentScore = 0;
  let lastSendTime = 0;
  let playerId = "";
  let isInitialized = false;
  
  const MIN_SEND_INTERVAL = 1000;
  const MIN_SCORE_CHANGE = 1;
  
  function initScoreSystem() {
    try {
      if (runtime && runtime.globalVars) {
        playerId = runtime.globalVars.myPlayerId || "";
        
        if (!playerId) {
          console.log("❌ Не могу получить playerId, попробую позже...");
          setTimeout(initScoreSystem, 2000);
          return;
        }
        
        console.log(`✅ Система очков инициализирована для игрока: ${playerId.substring(0, 8)}...`);
        isInitialized = true;
        startScoreMonitoring();
      }
    } catch (err) {
      console.log("⚠️ Ошибка инициализации:", err);
      setTimeout(initScoreSystem, 3000);
    }
  }
  
  function sendScoreToServer(score) {
    if (!playerId || !isInitialized) {
      console.log("⚠️ Не могу отправить: система не инициализирована");
      return false;
    }
    
    const now = Date.now();
    const timeSinceLastSend = now - lastSendTime;
    
    if (timeSinceLastSend < MIN_SEND_INTERVAL) {
      console.log(`⏳ Слишком рано для отправки (ждать еще ${MIN_SEND_INTERVAL - timeSinceLastSend}мс)`);
      return false;
    }
    
    const scoreChange = Math.abs(score - lastSentScore);
    if (scoreChange < MIN_SCORE_CHANGE && lastSentScore !== 0) {
      console.log(`📊 Изменение слишком мало (${scoreChange} < ${MIN_SCORE_CHANGE}), пропускаю`);
      return false;
    }
    
    console.log(`📤 Отправляю очки: ${score} (изменение: +${score - lastSentScore})`);
    
    // 🔥 ГЛАВНОЕ: свежий пинг + статус naserve при каждой отправке
    const nowPing = getCorrectedPing();
    
    fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${playerId}`, {
      method: "PATCH",
      headers: getAuthHeaders(),
      body: JSON.stringify({
        score: score,
        last_ping: nowPing,
        status: "naserve"  // 🔥 ВОТ ЭТО ДОБАВЛЕНО! Воскрешает vihappizd
      })
    })
    .then(response => {
      if (response.ok) {
        lastSentScore = score;
        lastSendTime = Date.now();
        console.log(`✅ Очки отправлены: ${score} | Статус → naserve`);
        updateScoreInArray(score);
      } else {
        console.log("❌ Ошибка сервера");
      }
    })
    .catch(err => {
      console.log("💥 Ошибка сети:", err.message);
    });
    
    return true;
  }
  
  function updateScoreInArray(score) {
    try {
      if (runtime && runtime.objects && runtime.objects.Массив) {
        const arrayObj = runtime.objects.Массив;
        arrayObj.setAt(2, 0, score);
        console.log(`📊 Массив обновлен: ${score} очков`);
      }
    } catch (e) {}
  }
  
  function startScoreMonitoring() {
    console.log("🔍 Запускаю мониторинг очков...");
    let lastCheckedScore = 0;
    
    const checkInterval = setInterval(() => {
      try {
        const currentScore = getCurrentScore();
        if (currentScore !== lastCheckedScore) {
          console.log(`📈 Очки изменились: ${lastCheckedScore} → ${currentScore}`);
          sendScoreToServer(currentScore);
          lastCheckedScore = currentScore;
        }
      } catch (err) {
        console.log("⚠️ Ошибка проверки очков:", err.message);
      }
    }, 500);
    
    window.tetrisScoreMonitorInterval = checkInterval;  // 🔥 СОХРАНЯЕМ ИНТЕРВАЛ
  }
  
  function getCurrentScore() {
    try {
      if (runtime.globalVars.очкиТетрис !== undefined) {
        return parseInt(runtime.globalVars.очкиТетрис) || 0;
      }
      if (runtime.objects.txtcount2) {
        const instance = runtime.objects.txtcount2.getFirstInstance ? 
                        runtime.objects.txtcount2.getFirstInstance() : 
                        runtime.objects.txtcount2;
        if (instance && instance.text) {
          return parseInt(instance.text) || 0;
        }
      }
      return 0;
    } catch (err) {
      return 0;
    }
  }
  
  window.ForceSendTetrisScore = function() {
    if (!isInitialized) {
      console.log("❌ Система не инициализирована");
      return;
    }
    const currentScore = getCurrentScore();
    console.log(`🚀 Принудительная отправка очков: ${currentScore}`);
    lastSendTime = 0;
    lastSentScore = currentScore - MIN_SCORE_CHANGE - 1;
    sendScoreToServer(currentScore);
  };
  
  window.StopScoreMonitoring = function() {
    if (window.tetrisScoreMonitorInterval) {
      clearInterval(window.tetrisScoreMonitorInterval);
      window.tetrisScoreMonitorInterval = null;
      console.log("🛑 Мониторинг очков остановлен");
    }
  };
  
  window.SendTetrisScore = function(score) {
    const scoreNum = parseInt(score) || getCurrentScore();
    console.log(`📤 Ручная отправка: ${scoreNum}`);
    sendScoreToServer(scoreNum);
  };
  
  setTimeout(initScoreSystem, 1000);
  console.log("✅ Система автообновления очков запущена!");
  console.log("🔄 При отправке очков статус автоматически становится naserve (воскрешает vihappizd)");
})();
	},

	async Tetris3_Event196_Act1(runtime, localVars)
	{
// 🔥 ГЛОБАЛЬНЫЙ ОФСЕТ (должен быть установлен из другого скрипта)
window.serverTimeOffset = window.serverTimeOffset || 0;

// Включаем систему лидерборда
if (runtime && runtime.globalVars) {
    runtime.globalVars.leaderboardActive = 1;
}

// ==================== ТЕТРИС МУЛЬТИПЛЕЕР ====================
(function() {
    // ==================== НАСТРОЙКИ ====================
    const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
    
    // 🔥 ФУНКЦИЯ ДЛЯ ЗАГОЛОВКОВ С AUTH
    function getAuthHeaders() {
        const baseHeaders = {
            "apikey": SUPABASE_KEY,
            "Content-Type": "application/json"
        };
        if (window.supabaseAuthToken) {
            baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
        } else {
            baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
        }
        return baseHeaders;
    }
    
    // ==================== СИНХРОНИЗАЦИЯ ВРЕМЕНИ С СЕРВЕРОМ ====================
    // ==================== СИНХРОНИЗАЦИЯ ВРЕМЕНИ С СЕРВЕРОМ ====================
    async function syncTimeWithServer() {
        try {
            const start = Date.now();
            // Делаем легкий запрос к таблице players, чтобы гарантированно получить заголовок Date
            const response = await fetch(`${SUPABASE_URL}/rest/v1/players?limit=1`, { 
                method: 'GET', 
                headers: getAuthHeaders() 
            });
            
            const serverDateStr = response.headers.get('date');
            
            if (serverDateStr) {
                const serverDate = new Date(serverDateStr);
                const end = Date.now();
                const latency = (end - start) / 2;
                window.serverTimeOffset = (serverDate.getTime() + latency) - end;
                console.log(`⏱️ [ТЕТРИС] Офсет времени: ${Math.round(window.serverTimeOffset / 1000)}с`);
            } else {
                throw new Error("Заголовок Date пустой");
            }
        } catch(e) {
            console.log("⚠️ [ТЕТРИС] Не удалось синхронизировать время, офсет = 0. Ошибка:", e.message);
            window.serverTimeOffset = 0;
        }
    }
    
    // ==================== ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ ДЛЯ ПИНГА ====================
    function getCorrectedPing() {
        return new Date(Date.now() + (window.serverTimeOffset || 0)).toISOString();
    }
    
    // ==================== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ====================
    let myPlayerId = "";
    let myNickname = "";
    let currentLobby = "";
    let updateInterval = null;
    let notificationTimer = null;
    let debugMode = true;
    let playerStatusHistory = {};
    
    // ==================== УБИВАЕМ ФУНКЦИИ ЛОББИ ====================
    console.log("💣 ТЕТРИС: УБИВАЮ ВСЕ ФУНКЦИИ ЛОББИ...");
    try {
        window.removeEventListener('beforeunload', instantPlayerExit);
        window.removeEventListener('pagehide', instantPlayerExit);
        window.removeEventListener('unload', instantPlayerExit);
    } catch(e) {}
    
    window.instantPlayerExit = function() {
        console.log("🚫 instantPlayerExit заблокирован");
    };
    window.CURRENT_MAP = "tetris";
    console.log("✅ Все функции лобби убиты");
    
    // ==================== ДИАГНОСТИКА ====================
    function superDebug(message, data = null) {
        if (debugMode) console.log(`🔍 ${message}`, data || '');
    }
    
    // ==================== ИНИЦИАЛИЗАЦИЯ ====================
    async function initTetris() {
        console.log("🚀 ТЕТРИС МУЛЬТИПЛЕЕР ЗАПУСКАЕТСЯ...");
        
        // 🔥 СИНХРОНИЗИРУЕМ ВРЕМЯ ПЕРЕД ВСЕМИ ЗАПРОСАМИ
        await syncTimeWithServer();
        
        // Проверяем runtime
        if (!runtime) {
            console.log("❌ НЕТ RUNTIME!");
            return;
        }
        
        // Получаем данные игрока
        try {
            if (runtime.globalVars) {
                myPlayerId = runtime.globalVars.myPlayerId || "";
                myNickname = runtime.globalVars.myNickname || "Player";
                currentLobby = runtime.globalVars.currentLobby || "";
            }
        } catch (err) {
            console.log("⚠️ Ошибка получения переменных:", err);
        }
        
        if (!myPlayerId || !currentLobby) {
            console.log("❌ Нет данных игрока или лобби!");
            return;
        }
        
        console.log(`🎮 Игрок: ${myNickname} (${myPlayerId}) | Лобби: ${currentLobby}`);
        console.log(`⏱️ Офсет времени: ${window.serverTimeOffset}мс`);
        
        // 🔥 ОБНОВЛЯЕМ ИГРОКА В БАЗЕ (с корректным пингом)
        updatePlayerInDatabase({
            nickname: myNickname,
            status: "naserve",
            score: 0
        });
        
        // Запускаем системы
        startUpdateSystem();
        setupExitHandlers();
        
        console.log("✅ ВСЁ ЗАПУЩЕНО!");
    }
    
    // ==================== ОБНОВЛЕНИЕ ИГРОКА В БАЗЕ ====================
    function updatePlayerInDatabase(data) {
        if (!myPlayerId) return;
        
        const nowPing = getCorrectedPing();
        const updateData = {
            ...data,
            lobby_id: currentLobby,
            last_ping: nowPing
        };
        
        superDebug("📤 Обновляю игрока:", updateData);
        
        fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${myPlayerId}`, {
            method: "PATCH",
            headers: getAuthHeaders(),
            body: JSON.stringify(updateData)
        }).catch(err => console.log("💥 Ошибка обновления:", err.message));
    }
    
    // ==================== ОТПРАВКА ОЧКОВ (с воскрешением vihappizd) ====================
    window.SendTetrisScore = function(score) {
        if (!myPlayerId) {
            console.log("❌ Не могу отправить очки: myPlayerId пустой");
            return;
        }
        
        const scoreNum = parseInt(score) || 0;
        
        // Используем updatePlayerInDatabase, которая сама поставит статус naserve
        updatePlayerInDatabase({
            score: scoreNum,
            status: "naserve"
        });
        
        console.log(`🚀 [ТЕТРИС] Очки: ${scoreNum} | Статус → naserve`);
    };
    
    // ==================== СИСТЕМА ОБНОВЛЕНИЯ ====================
    function startUpdateSystem() {
        console.log("🔄 Запускаю систему обновлений...");
        updatePlayersData();
        updateInterval = setInterval(updatePlayersData, 3000);
    }
    
    async function updatePlayersData() {
        if (!currentLobby) return;
        
        try {
            const response = await fetch(
                `${SUPABASE_URL}/rest/v1/players?` +
                `and=(lobby_id.eq.${currentLobby},status.in.(naserve,dasdoh,vihappizd))&` +
                `select=player_id,nickname,score,status,lobby_id&` +
                `order=score.desc.nullslast`,
                { headers: getAuthHeaders() }
            );
            
            if (!response.ok) return;
            
            const players = await response.json();
            const ourPlayers = players.filter(p => 
                p.lobby_id && p.lobby_id.toString() === currentLobby.toString() &&
                (p.status === "naserve" || p.status === "dasdoh" || p.status === "vihappizd")
            );
            
            updateAllUI(ourPlayers);
            
        } catch (err) {
            console.log("💥 Ошибка загрузки:", err.message);
        }
    }
    
    // ==================== UI (без изменений) ====================
    function updateAllUI(players) {
        if (!players || players.length === 0) {
            for (let i = 1; i <= 7; i++) {
                updateField(`txtPlayer${i}Name`, "");
                updateField(`txtPlayer${i}Score`, "");
            }
            return;
        }
        
        const sorted = [...players].sort((a, b) => {
            if (a.status === "vihappizd" && b.status !== "vihappizd") return 1;
            if (b.status === "vihappizd" && a.status !== "vihappizd") return -1;
            return (b.score || 0) - (a.score || 0);
        });
        
        checkAndShowStatusNotifications(players);
        updateTextFields(sorted.slice(0, 7));
        updateArray(sorted.slice(0, 8));
    }
    
    function checkAndShowStatusNotifications(players) {
        try {
            if (!playerStatusHistory) playerStatusHistory = {};
            
            players.forEach(player => {
                const key = player.player_id;
                const oldStatus = playerStatusHistory[key];
                const newStatus = player.status;
                
                if (oldStatus !== newStatus) {
                    playerStatusHistory[key] = newStatus;
                    
                    let msg = "";
                    if ((oldStatus === "naserve" || oldStatus === "dasdoh") && newStatus === "vihappizd") {
                        msg = `${player.nickname} отключился от сервера`;
                    } else if (oldStatus === "naserve" && newStatus === "dasdoh") {
                        msg = `${player.nickname} закончил игру`;
                    } else if (!oldStatus && newStatus === "naserve" && player.player_id !== myPlayerId) {
                        msg = `${player.nickname} присоединился к игре`;
                    }
                    
                    if (msg) showStatusNotification(msg);
                }
            });
        } catch(e) {}
    }
    
    function showStatusNotification(message) {
        try {
            const statusObj = runtime.objects.soobshastatusa;
            if (!statusObj) return;
            
            let instance = statusObj.getFirstInstance ? statusObj.getFirstInstance() : 
                           (statusObj.instances?.[0] || statusObj);
            
            if (instance) {
                if (instance.setText) instance.setText(message);
                else if (instance.text !== undefined) instance.text = message;
                
                if (notificationTimer) clearTimeout(notificationTimer);
                notificationTimer = setTimeout(() => {
                    if (instance.setText) instance.setText("");
                    else if (instance.text !== undefined) instance.text = "";
                    if (runtime.globalVars) runtime.globalVars.shishzanyat = 0;
                }, 3000);
                
                if (runtime.globalVars) runtime.globalVars.shishzanyat = 1;
            }
        } catch(e) {}
    }
    
    function updateTextFields(allPlayers) {
        for (let i = 0; i < 7; i++) {
            const player = allPlayers[i];
            const pos = i + 1;
            if (player) {
                updateNameWithColor(`txtPlayer${pos}Name`, player, pos);
                updateField(`txtPlayer${pos}Score`, (player.score || 0).toString());
            } else {
                clearPlayerField(`txtPlayer${pos}Name`, pos);
                updateField(`txtPlayer${pos}Score`, "");
            }
        }
    }
    
    function updateNameWithColor(objName, player, pos) {
        try {
            const obj = runtime.objects[objName];
            if (!obj) return;
            let inst = obj.getFirstInstance ? obj.getFirstInstance() : (obj.instances?.[0] || obj);
            if (!inst) return;
            
            const nick = player.nickname || `Игрок ${pos}`;
            if (inst.setText) inst.setText(nick);
            else if (inst.text !== undefined) inst.text = nick;
            
            if (player.player_id === myPlayerId) setTextColor(inst, 173, 216, 230);
            else if (player.status === "naserve") setTextColor(inst, 0, 235, 47);
            else if (player.status === "dasdoh") setTextColor(inst, 255, 0, 0);
            else if (player.status === "vihappizd") setTextColor(inst, 128, 128, 128);
        } catch(e) {}
    }
    
    function updateField(objName, text) {
        try {
            const obj = runtime.objects[objName];
            if (!obj) return;
            let inst = obj.getFirstInstance ? obj.getFirstInstance() : (obj.instances?.[0] || obj);
            if (!inst) return;
            if (inst.setText) inst.setText(text);
            else if (inst.text !== undefined) inst.text = text;
        } catch(e) {}
    }
    
    function clearPlayerField(objName, pos) {
        try {
            const obj = runtime.objects[objName];
            if (!obj) return;
            let inst = obj.getFirstInstance ? obj.getFirstInstance() : (obj.instances?.[0] || obj);
            if (!inst) return;
            if (inst.setText) inst.setText("");
            else if (inst.text !== undefined) inst.text = "";
            if (inst.fontColor) inst.fontColor = [1, 1, 1];
        } catch(e) {}
    }
    
    function setTextColor(obj, r, g, b) {
        try {
            if (obj.fontColor) obj.fontColor = [r/255, g/255, b/255];
        } catch(e) {}
    }
    
    function updateArray(players) {
        try {
            const arr = runtime.objects.Массив;
            if (!arr) return;
            for (let y = 0; y < 8; y++) {
                for (let x = 0; x < 5; x++) arr.setAt(x, y, "");
            }
            for (let i = 0; i < players.length && i < 8; i++) {
                const p = players[i];
                arr.setAt(0, i, (p.nickname || `Игрок ${i+1}`).substring(0, 10));
                let statusText = "???";
                if (p.status === "naserve") statusText = "В игре";
                else if (p.status === "dasdoh") statusText = "Зконч.";
                else if (p.status === "vihappizd") statusText = "Вышел";
                arr.setAt(1, i, statusText);
                arr.setAt(2, i, p.score || 0);
                arr.setAt(3, i, currentLobby.substring(0, 6));
                arr.setAt(4, i, (p.player_id || "").substring(0, 4));
            }
        } catch(e) {}
    }
    
    // ==================== ЗАВЕРШЕНИЕ ИГРЫ ====================
    function stopAllSystems() {
        if (updateInterval) clearInterval(updateInterval);
        if (notificationTimer) clearTimeout(notificationTimer);
        
        if (myPlayerId) {
            const nowPing = getCorrectedPing();
            const data = JSON.stringify({ status: "vihappizd", last_ping: nowPing });
            
            if (navigator.sendBeacon) {
                navigator.sendBeacon(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${myPlayerId}`, 
                    new Blob([data], {type: 'application/json'}));
            }
            fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${myPlayerId}`, {
                method: "PATCH", headers: getAuthHeaders(), body: data, keepalive: true
            }).catch(() => {});
        }
    }
    
    function setupExitHandlers() {
        window.addEventListener('beforeunload', () => stopAllSystems());
        window.addEventListener('pagehide', () => stopAllSystems());
    }
    
    // ==================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ====================
    window.TetrisSystem = {
        sendScore: (score) => window.SendTetrisScore(score),
        refresh: () => updatePlayersData(),
        markAsFinished: () => {
            if (!myPlayerId) return;
            fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${myPlayerId}`, {
                method: "PATCH", headers: getAuthHeaders(),
                body: JSON.stringify({ status: "dasdoh", last_ping: getCorrectedPing() })
            }).catch(() => {});
        },
        markAsLeft: () => {
            if (!myPlayerId) return;
            fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${myPlayerId}`, {
                method: "PATCH", headers: getAuthHeaders(), keepalive: true,
                body: JSON.stringify({ status: "vihappizd", last_ping: getCorrectedPing() })
            }).catch(() => {});
        },
        rejoinGame: () => updatePlayerInDatabase({ status: "naserve", score: 0 }),
        stopAllSystems: () => stopAllSystems()
    };
    
    // ==================== АВТОЗАПУСК ====================
    setTimeout(initTetris, 1500);
    
    console.log("✅ ТЕТРИС СИСТЕМА ГОТОВА!");
})();
	},

	async Tetris3_Event203_Act1(runtime, localVars)
	{
		// 🔥 НАЙТИ И УБИТЬ ВСЕ ИНТЕРВАЛЫ
		(function() {
		  console.log("🔪 ИЩУ И УБИВАЮ ВСЕ ИНТЕРВАЛЫ...");
		  const allProps = Object.getOwnPropertyNames(window);
		  allProps.forEach(prop => {
		    try {
		      if (prop.includes('Interval') || prop.includes('Timer') || 
		          prop.includes('Timeout') || prop.includes('interval') || 
		          prop.includes('timer')) {
		        const value = window[prop];
		        if (typeof value === 'number' && value > 0) {
		          clearInterval(value);
		          clearTimeout(value);
		          window[prop] = null;
		        }
		      }
		    } catch(e) {}
		  });
		  for (let i = 1; i < 99999; i++) {
		    try { clearInterval(i); clearTimeout(i); } catch(e) {}
		  }
		  console.log("✅ Все интервалы уничтожены!");
		})();
	},

	async Tetris3_Event204_Act1(runtime, localVars)
	{
// ==================== НАБЛЮДАТЕЛЬ (ОТПРАВКА КАДРОВ) ====================

const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
const YANDEX_PROXY_URL = "https://functions.yandexcloud.net/d4e4d3k1996t2mtjjb8j";

function getAuthHeaders() {
  const baseHeaders = { "apikey": SUPABASE_KEY, "Content-Type": "application/json" };
  if (window.supabaseAuthToken) {
    baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
  } else {
    baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
  }
  return baseHeaders;
}

const myId = runtime.globalVars.myPlayerId || "";

// ==================== ПУЛ ОБЪЕКТОВ ====================
window.brickPool = {
    pool: [],
    maxPoolSize: 300,
    
    returnAllToPool: function() {
        const instances = runtime.objects.Fall_Bricks.getAllInstances();
        instances.forEach(inst => {
            if (this.pool.length < this.maxPoolSize) {
                inst.isVisible = false;
                inst.x = -100;
                inst.y = -100;
                this.pool.push(inst);
            } else {
                inst.destroy();
            }
        });
    }
};

setInterval(() => {
    if (window.brickPool.pool.length > 0) {
        window.brickPool.returnAllToPool();
    }
}, 10000);

if (!window.ultraT) window.ultraT = { frames: [], lastT: 0, lastS: 0, lastF: "", isWatched: false, lastCheck: 0, useProxyForFrames: false };
const s = window.ultraT;

// 🔥 ПРОВЕРКА ЗРИТЕЛЕЙ
let checkInterval = s.isWatched ? 3000 : 1000;

if (Date.now() - s.lastCheck > checkInterval) {
    s.lastCheck = Date.now();
    fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${myId}&select=has_viewers`, {
        headers: getAuthHeaders()
    })
    .then(r => r.json())
    .then(data => {
        if (data && data[0]) {
            const newWatched = !!data[0].has_viewers;
            if (newWatched && !s.isWatched) {
                console.log("🎥 Появился зритель! Ускоряю отправку...");
                s.lastS = 0;
            }
            s.isWatched = newWatched;
        }
    })
    .catch(err => console.error("❌ Ошибка проверки зрителей:", err));
}

// 🔥 1. КОМПАКТНАЯ ЗАПИСЬ КАДРА (30 FPS)
if (s.isWatched && Date.now() - s.lastT >= 33) {
    s.lastT = Date.now();
    const bricks = runtime.objects.Fall_Bricks.getAllInstances();
    
    if (bricks.length > 0) {
        const frame = {
            t: Date.now(),
            b: bricks.map(inst => [
                Math.round(inst.x / 32),
                Math.round(inst.y / 32),
                inst.animationFrame
            ])
        };
        
        const frameStr = JSON.stringify(frame);
        
        if (frameStr !== s.lastF) {
            s.frames.push(frameStr);
            s.lastF = frameStr;
        }
        
        if (s.frames.length > 100) s.frames.shift();
    }
}

// 🔥 2. ОТПРАВКА НА СЕРВЕР (Раз в 1 сек)
if (s.isWatched && s.frames.length > 0 && Date.now() - s.lastS > 1000) {
    s.lastS = Date.now();
    const isMobile = runtime.layout.name.includes("Mobilya") || /Mobi|Android/i.test(navigator.userAgent);
    
    const body = JSON.stringify({ 
        game_data: JSON.stringify(s.frames),
        device_type: isMobile ? "mob" : "pc"
    });
    
    if (!s.useProxyForFrames) {
        fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${myId}`, {
            method: "PATCH",
            headers: getAuthHeaders(),
            body: body
        })
        .then(() => {
            s.frames = s.frames.slice(-10);
        })
        .catch(() => {
            s.useProxyForFrames = true;
            sendViaProxy();
        });
    } else {
        sendViaProxy();
    }
    
    function sendViaProxy() {
        const endpoint = "/rest/v1/players?player_id=eq." + myId;
        const proxyUrl = `${YANDEX_PROXY_URL}?endpoint=${encodeURIComponent(endpoint)}&_method=PATCH`;
        fetch(proxyUrl, { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: body 
        })
        .then(() => {
            s.frames = s.frames.slice(-10);
        })
        .catch(err => console.error("❌ Ошибка отправки кадров:", err));
    }
}
	},

	async Gameover_Event1_Act1(runtime, localVars)
	{
try {
    const log = (msg) => {
        const textObj = runtime.objects["среднерога16отладка"].getFirstInstance();
        if (textObj) textObj.text += "\n" + msg;
        else console.log("[Log]", msg);
    };

    const score = parseInt(runtime.globalVars.score) || 0;
    const playerId = parseInt(runtime.globalVars.playerNumericId) || 0;
    const matchCode = 1104; // ← Обновлённый режим
    const meta1 = matchCode * 1_000_000 + score;

    log(`📤 Пуш сессии: score=${score}, playerId=${playerId}, matchCode=${matchCode}, meta1=${meta1}`);

    window.ysdk.multiplayer.sessions.push({
        meta1: meta1,
        meta2: playerId
    });

    log("✅ Сессия запушена!");
} catch (err) {
    const log = (msg) => console.log("[Log]", msg);
    log("💥 Ошибка при пуше: " + (err?.message || err));
}
	},

	async Gameover_Event1_Act2(runtime, localVars)
	{
		// ==================== УБИЙЦА СИСТЕМЫ ТЕТРИСА (V2) ====================
		// 🔥 ЭТОТ СКРИПТ САМ УСТАНАВЛИВАЕТ ПЕРЕМЕННУЮ ДЛЯ CONSTRUCT
		
		(function() {
		  console.log("💀 УБИВАЮ СИСТЕМУ ТЕТРИСА И СТАВЛЮ ФЛАГ...");
		  
		  // 🔥 ШАГ 0: СРАЗУ УСТАНАВЛИВАЕМ ПЕРЕМЕННУЮ ДЛЯ CONSTRUCT
		  if (runtime && runtime.globalVars) {
		    runtime.globalVars.LeaderboardActive = 0;
		    console.log("✅ Установлен LeaderboardActive = 0 (Construct видит эту переменную)");
		    
		    // Можно также использовать существующие переменные
		    runtime.globalVars.gameStatus = "finished";
		    runtime.globalVars.inTetrisGame = 0;
		  }
		  
		  // 🔥 ОСТАЛЬНОЙ КОД ОСТАНОВКИ...
		  if (window.updateInterval) {
		    clearInterval(window.updateInterval);
		    window.updateInterval = null;
		    console.log("✅ Остановлен updateInterval");
		  }
		  
		  // Очищаем поля лидерборда...
		  // ... остальной код из предыдущего скрипта
		  
		  console.log("✅ Система тетриса отключена");
		})();
	},

	async Gameover_Event1_Act3(runtime, localVars)
	{
		const ysdk = await YaGames.init();
		
		
		ysdk.features.GameplayAPI?.stop()
	},

	async Gameover_Event21_Act7(runtime, localVars)
	{
		const text = runtime.objects.chatpisa.getFirstInstance().text;
		const url = "https://functions.yandexcloud.net/d4e4d3k1996t2mtjjb8j?endpoint=" + encodeURIComponent("https://parseapi.back4app.com/functions/checkMessage") + "&_method=POST&_body=" + encodeURIComponent('{"text":"' + text + '"}');
		
		fetch(url, { method: 'GET' })
		  .then(r => r.json())
		  .then(async data => {
		    console.log('📥 Back4App ответ:', data);
		    const cleanText = data.result.cleanText;
		    runtime.globalVars.lastCleanText = cleanText;
		    
		    if (!cleanText) { console.log('❌ Нет текста для отправки'); return; }
		    
		    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
		    const headers = {
		      "apikey": SUPABASE_KEY,
		      "Authorization": "Bearer " + (window.supabaseAuthToken || SUPABASE_KEY),
		      "Content-Type": "application/json",
		      "Prefer": "return=minimal"
		    };
		    
		    try {
		      const response = await fetch("https://lebmkbapqahnahjeycvd.supabase.co/rest/v1/chat_messages", {
		        method: "POST", headers: headers,
		        body: JSON.stringify({
		          lobby_id: runtime.globalVars.currentLobby,
		          player_id: runtime.globalVars.myPlayerId,
		          nickname: runtime.globalVars.myNickname,
		          clean_message: cleanText,
		          timestamp: new Date().toISOString(),
		          user_id: window.supabaseUserId || null
		        })
		      });
		      
		      if (response.ok) {
		        console.log('✅ Сообщение отправлено в Supabase');
		        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		        runtime.callFunction("ShowChatMessage", "[" + time + "] [" + runtime.globalVars.myNickname + "] " + cleanText);
		      } else {
		        const error = await response.text();
		        console.log('❌ Ошибка Supabase:', error);
		        runtime.callFunction("ShowChatMessage", "[System] Ошибка отправки сообщения");
		      }
		    } catch(err) {
		      console.log('💥 Ошибка сети:', err);
		      runtime.callFunction("ShowChatMessage", "[System] Ошибка сети");
		    }
		  })
		  .catch(err => console.log('❌ Ошибка Back4App:', err));
	},

	async Gameover_Event22_Act7(runtime, localVars)
	{
// ==================== ОТПРАВКА СООБЩЕНИЯ В ЧАТ (с Auth) ====================

async function getAuthHeaders() {
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
    const baseHeaders = {
        "apikey": SUPABASE_KEY,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    };
    if (window.supabaseAuthToken) {
        baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
        baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
}

async function sendCheckedMessageToSupabase() {
  try {
    const cleanText = runtime.globalVars.lastCleanText;
    
    if (!cleanText) {
      console.log('❌ Нет текста для отправки');
      return;
    }
    
    const headers = await getAuthHeaders();
    
    const response = await fetch("https://lebmkbapqahnahjeycvd.supabase.co/rest/v1/chat_messages", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        lobby_id: runtime.globalVars.currentLobby,
        player_id: runtime.globalVars.myPlayerId,
        nickname: runtime.globalVars.myNickname,
        clean_message: cleanText,
        timestamp: new Date().toISOString(),
        user_id: window.supabaseUserId || null
      })
    });
    
    if (response.ok) {
      console.log('✅ Сообщение отправлено в чат Supabase');
      
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const displayText = `[${time}] [${runtime.globalVars.myNickname}] ${cleanText}`;
      
      runtime.callFunction("ShowChatMessage", displayText);
      
    } else {
      const error = await response.text();
      console.log('❌ Ошибка отправки в Supabase:', error);
      runtime.callFunction("ShowChatMessage", "[System] Ошибка отправки сообщения");
    }
    
  } catch (err) {
    console.log('💥 Ошибка сети:', err);
    runtime.callFunction("ShowChatMessage", "[System] Ошибка сети");
  }
}

sendCheckedMessageToSupabase();
	},

	async Gameover_Event23_Act9(runtime, localVars)
	{
// ==================== ОТПРАВКА СООБЩЕНИЯ В ЧАТ (с Auth) ====================

async function getAuthHeaders() {
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
    const baseHeaders = {
        "apikey": SUPABASE_KEY,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    };
    if (window.supabaseAuthToken) {
        baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
        baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
}

async function sendCheckedMessageToSupabase() {
  try {
    const cleanText = runtime.globalVars.lastCleanText;
    
    if (!cleanText) {
      console.log('❌ Нет текста для отправки');
      return;
    }
    
    const headers = await getAuthHeaders();
    
    const response = await fetch("https://lebmkbapqahnahjeycvd.supabase.co/rest/v1/chat_messages", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        lobby_id: runtime.globalVars.currentLobby,
        player_id: runtime.globalVars.myPlayerId,
        nickname: runtime.globalVars.myNickname,
        clean_message: cleanText,
        timestamp: new Date().toISOString(),
        user_id: window.supabaseUserId || null
      })
    });
    
    if (response.ok) {
      console.log('✅ Сообщение отправлено в чат Supabase');
      
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const displayText = `[${time}] [${runtime.globalVars.myNickname}] ${cleanText}`;
      
      runtime.callFunction("ShowChatMessage", displayText);
      
    } else {
      const error = await response.text();
      console.log('❌ Ошибка отправки в Supabase:', error);
      runtime.callFunction("ShowChatMessage", "[System] Ошибка отправки сообщения");
    }
    
  } catch (err) {
    console.log('💥 Ошибка сети:', err);
    runtime.callFunction("ShowChatMessage", "[System] Ошибка сети");
  }
}

sendCheckedMessageToSupabase();
	},

	async Gameover_Event55_Act7(runtime, localVars)
	{
// ==================== ОТПРАВКА СТАТУСА "ВЫШЕЛ" ====================
// 🔥 ВСТАВЬ ЭТО В Execute JavaScript КОГДА ИГРОК ВЫХОДИТ ИЗ ЛОББИ

(function() {
  // ==================== НАСТРОЙКИ ====================
  const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
  
  // 🔥 ФУНКЦИЯ ДЛЯ ЗАГОЛОВКОВ С AUTH
  function getAuthHeaders() {
    const baseHeaders = {
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json"
    };
    if (window.supabaseAuthToken) {
      baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
      baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
  }
  
  // 🔥 ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ ДЛЯ ПИНГА
  function getCorrectedPing() {
    return new Date(Date.now() + (window.serverTimeOffset || 0)).toISOString();
  }
  
  // ==================== ГЛАВНАЯ ФУНКЦИЯ ====================
  window.SendPlayerLeft = function() {
    console.log("🚪 Отправляю статус 'вышел' на сервер...");
    
    try {
      const myPlayerId = runtime.globalVars.myPlayerId || "";
      
      if (!myPlayerId) {
        console.log("❌ Нет playerId!");
        return;
      }
      
      const nowPing = getCorrectedPing();
      
      fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${myPlayerId}`, {
        method: "PATCH",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          status: "vihappizd",
          last_ping: nowPing
        })
      })
      .then(response => {
        if (response.ok) {
          console.log("✅ Статус 'вышел' успешно отправлен!");
        } else {
          console.log("❌ Ошибка отправки статуса");
        }
      })
      .catch(error => {
        console.log("💥 Ошибка сети:", error.message);
      });
      
    } catch (err) {
      console.log("💥 Ошибка в SendPlayerLeft:", err.message);
    }
  };
  
  console.log("✅ Функция SendPlayerLeft() готова!");
  console.log("🚪 Использование: SendPlayerLeft() - когда игрок выходит из лобби");
  
})();
	},

	async Gameover_Event56_Act7(runtime, localVars)
	{
// ==================== ОТПРАВКА СТАТУСА "ВЫШЕЛ" ====================
// 🔥 ВСТАВЬ ЭТО В Execute JavaScript КОГДА ИГРОК ВЫХОДИТ ИЗ ЛОББИ

(function() {
  // ==================== НАСТРОЙКИ ====================
  const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
  
  // 🔥 ФУНКЦИЯ ДЛЯ ЗАГОЛОВКОВ С AUTH
  function getAuthHeaders() {
    const baseHeaders = {
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json"
    };
    if (window.supabaseAuthToken) {
      baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
      baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
  }
  
  // 🔥 ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ ДЛЯ ПИНГА
  function getCorrectedPing() {
    return new Date(Date.now() + (window.serverTimeOffset || 0)).toISOString();
  }
  
  // ==================== ГЛАВНАЯ ФУНКЦИЯ ====================
  window.SendPlayerLeft = function() {
    console.log("🚪 Отправляю статус 'вышел' на сервер...");
    
    try {
      const myPlayerId = runtime.globalVars.myPlayerId || "";
      
      if (!myPlayerId) {
        console.log("❌ Нет playerId!");
        return;
      }
      
      const nowPing = getCorrectedPing();
      
      fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${myPlayerId}`, {
        method: "PATCH",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          status: "vihappizd",
          last_ping: nowPing
        })
      })
      .then(response => {
        if (response.ok) {
          console.log("✅ Статус 'вышел' успешно отправлен!");
        } else {
          console.log("❌ Ошибка отправки статуса");
        }
      })
      .catch(error => {
        console.log("💥 Ошибка сети:", error.message);
      });
      
    } catch (err) {
      console.log("💥 Ошибка в SendPlayerLeft:", err.message);
    }
  };
  
  console.log("✅ Функция SendPlayerLeft() готова!");
  console.log("🚪 Использование: SendPlayerLeft() - когда игрок выходит из лобби");
  
})();
	},

	async Gameover_Event81_Act1(runtime, localVars)
	{
// ==================== ТЕТРИС: ЭКРАН PROVAL (GAME OVER) ====================
// 🔥 ОРИГИНАЛЬНЫЙ СКРИПТ, НО БЕЗ ЦВЕТОВ
// ==================== ЗАЩИТА ОТ МНОЖЕСТВЕННЫХ ПЕРЕХОДОВ ====================
if (!window.transitionLock) {
    window.transitionLock = false;
}

// Функция безопасного перехода
function safeGoToLayout(layoutName) {
    if (window.transitionLock) {
        console.log("🔒 Блокировка перехода уже активна, игнорирую");
        return;
    }
    
    window.transitionLock = true;
    console.log(`🚀 Перехожу в ${layoutName} (с блокировкой)`);
    
    stopAllSystems();
    runtime.goToLayout(layoutName);
    
    setTimeout(() => {
        window.transitionLock = false;
    }, 2000);
}

(function() {
// 🔥 ГЛОБАЛЬНЫЕ ФЛАГИ ДЛЯ ЗАЩИТЫ
window.gameEndingInProgress = false;
window.transitionScheduled = false;

  // ==================== 1. ПОЛНАЯ ОСТАНОВКА СИСТЕМ ТЕТРИСА ====================
  (function() {
    console.log("💣 ПОЛНАЯ ОСТАНОВКА СИСТЕМ ИЗ МАКЕТА ТЕТРИСА...");
    
    const tetrisIntervals = [
      'updateInterval', 'tetrisUpdateInterval', 'scoreMonitorInterval',
      'notificationTimer', 'autoScoreInterval'
    ];
    
    tetrisIntervals.forEach(name => {
      try {
        if (window[name]) {
          console.log(`🛑 Останавливаю интервал: ${name}`);
          clearInterval(window[name]);
          clearTimeout(window[name]);
          window[name] = null;
        }
      } catch(e) {}
    });
    
    window.SendTetrisScore = function() { 
      console.log("⚠️ SendTetrisScore отключена (gameover mode)"); 
    };
    window.SendPlayerDead = function() { 
      console.log("⚠️ SendPlayerDead отключена (gameover mode)"); 
    };
    window.SendPlayerLeft = function() { 
      console.log("⚠️ SendPlayerLeft отключена (gameover mode)"); 
    };
    
    if (window.TetrisSystem) {
      console.log("🛑 Останавливаю TetrisSystem...");
      try {
        if (typeof window.TetrisSystem.stopAllSystems === 'function') {
          window.TetrisSystem.stopAllSystems();
        }
        if (typeof window.TetrisSystem.stop === 'function') {
          window.TetrisSystem.stop();
        }
        window.TetrisSystem = {
          sendScore: function() { console.log("⚠️ TetrisSystem.sendScore отключена"); },
          refresh: function() { console.log("⚠️ TetrisSystem.refresh отключена"); },
          markAsFinished: function() { console.log("⚠️ TetrisSystem.markAsFinished отключена"); },
          markAsLeft: function() { console.log("⚠️ TetrisSystem.markAsLeft отключена"); },
          stopAllSystems: function() { console.log("✅ TetrisSystem уже остановлена"); }
        };
      } catch(e) {}
    }
    
    const tetrisVars = [
      'myPlayerId', 'myNickname', 'currentLobby',
      'playerStatusHistory', 'lastSentScore', 'lastSendTime'
    ];
    
    tetrisVars.forEach(varName => {
      try {
        if (window[varName] !== undefined) {
          window[varName] = null;
        }
      } catch(e) {}
    });
    
    console.log("✅ Все системы из макета тетриса ОСТАНОВЛЕНЫ!");
  })();
  
  // ==================== НАСТРОЙКИ ====================
  const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
  
  // 🔥 ФУНКЦИЯ ДЛЯ ЗАГОЛОВКОВ С AUTH
  function getAuthHeaders() {
    const baseHeaders = {
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json"
    };
    if (window.supabaseAuthToken) {
      baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
      baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
  }
  
  // 🔥 ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ ДЛЯ ПИНГА
  function getCorrectedPing() {
    return new Date(Date.now() + (window.serverTimeOffset || 0)).toISOString();
  }
  
  // ==================== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ====================
  let myPlayerId = "";
  let myNickname = "";
  let currentLobby = "";
  let updateInterval = null;
  let chatPollInterval = null;
  let gameEndCheckInterval = null;
  let gameAlreadyEnded = false;
  let lastKnownStatuses = {};
  let serverTimeOffset = 0;
  
  // ==================== 2. ИНИЦИАЛИЗАЦИЯ ====================
  async function initGameOverSystem() {
    try {
        console.log("⏳ Ловим время сервера...");
        const check = await fetch(`${SUPABASE_URL}/rest/v1/players?limit=1`, {
            method: 'GET',
            headers: getAuthHeaders()
        });
        const serverDate = new Date(check.headers.get('date'));
        serverTimeOffset = serverDate.getTime() - Date.now();
        console.log(`⏱️ ОФСЕТ УСТАНОВЛЕН: ${serverTimeOffset}мс`);
    } catch(e) {
        console.log("❌ Синхронизация провалена, ставим офсет 0");
        serverTimeOffset = 0;
    }

    console.log("💀 Запускаю систему экрана проигрыша...");
    try {
        if (runtime && runtime.globalVars) {
            myPlayerId = runtime.globalVars.myPlayerId || "";
            myNickname = runtime.globalVars.myNickname || "Игрок";
            currentLobby = runtime.globalVars.currentLobby || "";
        }
    } catch (err) { console.log("⚠️ Ошибка переменных:", err); }

    if (!myPlayerId || !currentLobby) return;

    updateMyStatus("dasdoh");
    startAllSystems();
  }
  
  // ==================== 3. ОБНОВЛЕНИЕ МОЕГО СТАТУСА ====================
  function updateMyStatus(status) {
    if (!myPlayerId) return;
    const correctedTime = new Date(Date.now() + serverTimeOffset).toISOString();
    
    fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${myPlayerId}`, {
        method: "PATCH",
        headers: getAuthHeaders(),
        body: JSON.stringify({
            status: status,
            last_ping: correctedTime
        })
    })
    .then(() => console.log(`📝 Мой статус изменен на: ${status}`))
    .catch(err => console.log("❌ Ошибка смены статуса:", err.message));
  }
  
  // ==================== 4. ЗАПУСК ВСЕХ СИСТЕМ ====================
  function startAllSystems() {
    console.log("🔄 Запускаю все системы...");
    startChatSystem();
    startLeaderboardUpdate();
    startGameEndCheck();
    updateLeaderboard();
    checkIfGameShouldEnd();
  }
  
  // ==================== 5. СИСТЕМА ЧАТА ====================
  function startChatSystem() {
    console.log("💬 Запускаю чат...");
    
    if (chatPollInterval) clearInterval(chatPollInterval);
    
    if (runtime && runtime.globalVars) {
      if (!runtime.globalVars.supabaseChatBuffer) {
        runtime.globalVars.supabaseChatBuffer = "";
      }
      if (!runtime.globalVars.lastChatMessageId) {
        runtime.globalVars.lastChatMessageId = 0;
      }
    }
    
    loadLastChatMessages();
    chatPollInterval = setInterval(() => {
      loadNewChatMessages();
    }, 2000);
  }
  
  async function loadLastChatMessages() {
    if (!currentLobby) return;
    
    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/chat_messages?` +
        `lobby_id=eq.${currentLobby}&` +
        `order=timestamp.desc&` +
        `limit=10`,
        { headers: getAuthHeaders() }
      );
      
      if (!response.ok) return;
      
      const messages = (await response.json()).reverse();
      
      for (const msg of messages) {
        if (msg.id > (runtime.globalVars.lastChatMessageId || 0)) {
          runtime.globalVars.lastChatMessageId = msg.id;
        }
        displayChatMessage(msg);
      }
    } catch (err) {
      console.log("💥 Ошибка загрузки чата:", err.message);
    }
  }
  
  async function loadNewChatMessages() {
    const myLobby = runtime.globalVars.currentLobby;
    if (!myLobby || !runtime.globalVars) return;
    
    try {
      const lastId = runtime.globalVars.lastChatMessageId || 0;
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/chat_messages?` +
        `lobby_id=eq.${myLobby}&` +
        `id=gt.${lastId}&` +
        `order=id.asc`,
        { headers: getAuthHeaders() }
      );
      
      if (!response.ok) return;
      const messages = await response.json();
      
      for (const msg of messages) {
        if (msg.lobby_id !== myLobby) {
            console.log("🚫 Пропускаем чужое сообщение из лобби:", msg.lobby_id);
            continue; 
        }
        if (msg.id > runtime.globalVars.lastChatMessageId) {
          runtime.globalVars.lastChatMessageId = msg.id;
        }
        displayChatMessage(msg);
      }
    } catch (err) {}
  }
  
  function displayChatMessage(msg) {
    try {
      const time = new Date(msg.timestamp).toLocaleTimeString([], { 
        hour: '2-digit', minute: '2-digit' 
      });
      let prefix = msg.is_system || msg.player_id === "system" ? "[Система]" : `[${msg.nickname}]`;
      const displayText = `[${time}] ${prefix}: ${msg.clean_message}\n`;
      
      if (runtime.globalVars.supabaseChatBuffer) {
        runtime.globalVars.supabaseChatBuffer += displayText;
      }
      updateChatTextDirectly(displayText);
    } catch (err) {
      console.log("💥 Ошибка отображения сообщения:", err.message);
    }
  }
  
  function updateChatTextDirectly(text) {
    try {
      const chatObj = runtime.objects.chatText;
      if (chatObj) {
        let instance = chatObj.getFirstInstance ? chatObj.getFirstInstance() : chatObj;
        if (instance && instance.text !== undefined) {
          instance.text += text;
          if (instance.text.length > 1000) {
            instance.text = instance.text.substring(instance.text.length - 1000);
          }
        }
      }
    } catch (err) {}
  }
  
  window.SendChatMessageFromGameOver = function(message) {
    if (!message || message.trim() === "" || !myPlayerId || !currentLobby) return;
    const cleanMessage = message.trim();
    
    try {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const displayText = `[${time}] [${myNickname}]: ${cleanMessage}\n`;
      updateChatTextDirectly(displayText);
      
      fetch(`${SUPABASE_URL}/rest/v1/chat_messages`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          lobby_id: currentLobby,
          player_id: myPlayerId,
          nickname: myNickname,
          clean_message: cleanMessage,
          timestamp: new Date().toISOString(),
          is_system: false,
          user_id: window.supabaseUserId || null
        })
      }).catch(err => console.log("💥 Ошибка отправки сообщения"));
    } catch (err) {
      console.log("💥 Ошибка отправки чата:", err.message);
    }
  };
  
  // ==================== 6. ТАБЛИЦА ЛИДЕРОВ ====================
  function startLeaderboardUpdate() {
    console.log("🏆 Запускаю обновление таблицы лидеров...");
    if (updateInterval) clearInterval(updateInterval);
    updateLeaderboard();
    updateInterval = setInterval(updateLeaderboard, 3000);
  }
  
  async function updateLeaderboard() {
    if (!currentLobby) return;
    try {
        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/players?lobby_id=eq.${currentLobby}&select=player_id,nickname,score,status,last_ping&order=score.desc.nullslast`,
            { headers: getAuthHeaders() }
        );
        if (!response.ok) return;

        const players = await response.json();
        const checkNow = Date.now() + serverTimeOffset; 
        const lang = runtime.globalVars.language || 0;

        players.forEach(player => {
            const pid = player.player_id;
            if (!lastKnownStatuses[pid]) lastKnownStatuses[pid] = player.status;
            const oldStatus = lastKnownStatuses[pid];
            const newStatus = player.status;

            if (oldStatus === "naserve" && newStatus !== "naserve") {
                let msg = "";
                if (newStatus === "dasdoh") {
                    msg = lang === 0 ? `[${player.nickname}] закончил играть` : `[${player.nickname}] finished playing`;
                } else if (newStatus === "vihappizd") {
                    msg = lang === 0 ? `[${player.nickname}] покинул игру` : `[${player.nickname}] left the game`;
                }
                if (msg) displayChatMessage({ timestamp: new Date().toISOString(), nickname: "Система", clean_message: msg, is_system: true });
            }
            lastKnownStatuses[pid] = newStatus;

            if (newStatus === "naserve" && pid !== myPlayerId) {
                if (!player.last_ping) return;
                const cleanPing = player.last_ping.replace(" ", "T") + "Z";
                const lastPingMS = new Date(cleanPing).getTime();
                const diffMS = checkNow - lastPingMS;
                const realDiffSec = Math.floor(diffMS / 1000);
                console.log(`📡 [АНАЛИЗ ПИНГА] Игрок: ${player.nickname} | Разница: ${realDiffSec}с | Лимит: 90с`);

                if (realDiffSec > 90) {
                    console.warn(`🚨 [KICK] ${player.nickname} не отвечает ${realDiffSec}с. Смена статуса на 'vihappizd'...`);
                    player.status = "vihappizd";
                    lastKnownStatuses[pid] = "vihappizd";
                    fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${pid}`, {
                        method: "PATCH",
                        headers: getAuthHeaders(),
                        body: JSON.stringify({ status: "vihappizd" })
                    }).catch(e => console.error("❌ Ошибка при кике:", e));
                }
            }
        }); 

        updateLeaderboardUI(players);
        if (typeof updateGameOverArray === "function") updateGameOverArray(players);
    } catch (err) {
        console.log("💥 Ошибка лидерборда:", err.message);
    }
  }
  
  function updateLeaderboardUI(players) {
    if (!runtime || !runtime.layout) return;
    const currentLayoutName = runtime.layout.name;
    
    if (currentLayoutName !== "Obshiy3" && currentLayoutName !== "Obshiy3Mobilya") {
      return; 
    }

    if (!players || !Array.isArray(players)) {
      clearLeaderboard();
      return;
    }
    
    const sortedPlayers = [...players].sort((a, b) => {
      if (a.status === "vihappizd" && b.status !== "vihappizd") return 1;
      if (b.status === "vihappizd" && a.status !== "vihappizd") return -1;
      return (b.score || 0) - (a.score || 0);
    });
    
    for (let i = 0; i < 7; i++) {
      const player = sortedPlayers[i];
      const position = i + 1;
      
      if (player) {
        let r = 255, g = 255, b = 255;
        if (player.player_id === myPlayerId) {
          r = 173; g = 216; b = 230;
        } else if (player.status === "naserve") {
          r = 254; g = 108; b = 137;
        } else if (player.status === "dasdoh") {
          r = 255; g = 0; b = 97;
        } else if (player.status === "vihappizd") {
          r = 128; g = 128; b = 128;
        }

        updateFieldNoColor(`txtPlayer${position}Name`, player.nickname || `Игрок ${position}`, r, g, b);
        updateFieldNoColor(`txtPlayer${position}Score`, (player.score || 0).toString(), 189, 189, 189);
      } else {
        updateFieldNoColor(`txtPlayer${position}Name`, "", 255, 255, 255);
        updateFieldNoColor(`txtPlayer${position}Score`, "", 189, 189, 189);
      }
    }
  }

  function updateFieldNoColor(objName, text, r, g, b) {
    try {
      const obj = runtime.objects[objName];
      if (!obj) return;
      const instances = obj.instances();
      for (const inst of instances) {
        if (inst.setText) inst.setText(text);
        else if (inst.text !== undefined) inst.text = text;
        const r_n = r / 255, g_n = g / 255, b_n = b / 255;
        if (inst.fontColor !== undefined) {
          inst.fontColor = [r_n, g_n, b_n];
        } else if (inst.colorR !== undefined) {
          inst.colorR = r_n;
          inst.colorG = g_n;
          inst.colorB = b_n;
        }
      }
    } catch (err) { }
  }
  
  function clearLeaderboard() {
    for (let i = 1; i <= 7; i++) {
      updateFieldNoColor(`txtPlayer${i}Name`, "");
      updateFieldNoColor(`txtPlayer${i}Score`, "");
    }
  }
  
  function updateGameOverArray(players) {
    try {
      if (runtime && runtime.objects && runtime.objects.Массив) {
        const arrayObj = runtime.objects.Массив;
        for (let y = 0; y < 8; y++) {
          for (let x = 0; x < 5; x++) {
            try { arrayObj.setAt(x, y, ""); } catch(e) {}
          }
        }
        for (let i = 0; i < players.length && i < 8; i++) {
          const player = players[i];
          try {
            const nick = player.nickname || `Игрок ${i+1}`;
            arrayObj.setAt(0, i, nick.substring(0, 10));
            let statusText = "???";
            if (player.status === "naserve") statusText = "В игре";
            else if (player.status === "dasdoh") statusText = "Зконч.";
            else if (player.status === "vihappizd") statusText = "Вышел";
            arrayObj.setAt(1, i, statusText);
            arrayObj.setAt(2, i, player.score || 0);
            arrayObj.setAt(3, i, currentLobby.substring(0, 6));
            arrayObj.setAt(4, i, (player.player_id || "").substring(0, 4));
          } catch(e) {}
        }
      }
    } catch (err) {}
  }
  
  // ==================== 7. ПРОВЕРКА ОКОНЧАНИЯ ИГРЫ ====================
  function startGameEndCheck() {
    console.log("🔍 Запускаю проверку окончания игры...");
    checkIfGameShouldEnd();
    gameEndCheckInterval = setInterval(checkIfGameShouldEnd, 5000);
  }
  
  async function checkIfGameShouldEnd() {
    if (!currentLobby || gameAlreadyEnded) return;
    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/players?` +
        `lobby_id=eq.${currentLobby}&` +
        `status=eq.naserve&` +
        `select=player_id`,
        { headers: getAuthHeaders() }
      );
      if (!response.ok) return;
      const activePlayers = await response.json();
      console.log(`🎮 Активных игроков: ${activePlayers.length}`);
      
      if (activePlayers.length > 0) {
        if (runtime.globalVars.nabludanaika !== 1) {
          runtime.globalVars.nabludanaika = 1;
          console.log("🔘 Кнопка наблюдения ВКЛЮЧЕНА");
        }
      } else {
        if (runtime.globalVars.nabludanaika !== 0) {
          runtime.globalVars.nabludanaika = 0;
          console.log("🔘 Кнопка наблюдения ОТКЛЮЧЕНА");
        }
        if (!gameAlreadyEnded && !window.gameEndingInProgress) {
          console.log("🎯 ИГРА ОКОНЧЕНА! Нет активных игроков.");
          gameAlreadyEnded = true;
          endGameForAll();
        }
      }
    } catch (err) {
      console.log("💥 Ошибка проверки окончания игры:", err.message);
    }
  }
  
  async function endGameForAll() {
    console.log("🏁 Завершаю игру для всех игроков...");
    if (window.gameEndingInProgress) {
        console.log("🔒 Завершение игры уже запущено, игнорирую");
        return;
    }
    window.gameEndingInProgress = true;
    
    console.log("🔫 Жестко убиваю систему наблюдателя...");
    if (window.vSync) {
        window.vSync.isP = false;
        window.vSync.q = [];
        if (window.vSync.knownFrames) window.vSync.knownFrames.clear();
        window.vSync = null;
    }
    
    if (window.acceleratedPoll) { clearInterval(window.acceleratedPoll); window.acceleratedPoll = null; }
    if (window.forcePolling) { clearTimeout(window.forcePolling); window.forcePolling = null; }
    if (window.debugViewer) { clearInterval(window.debugViewer); window.debugViewer = null; }
    if (window.scoreUpdater) { clearInterval(window.scoreUpdater); window.scoreUpdater = null; }
    
    if (runtime && runtime.globalVars) { runtime.globalVars.ViewerPlayer = ""; }
    window.findFirstPlayer = function() { console.log("🚫 Наблюдатель отключен, игнорирую поиск"); return; };
    
    try {
        await fetch(`${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${currentLobby}`, {
            method: "PATCH",
            headers: getAuthHeaders(),
            body: JSON.stringify({ status: "finished", updated_at: new Date().toISOString() })
        }).catch(err => console.log("⚠️ Ошибка обновления лобби:", err.message));
        
        console.log("✅ Статус лобби изменен на 'finished'");
        stopAllSystems();
        
        if (!window.transitionScheduled) {
            window.transitionScheduled = true;
            window.gameEndTimer = setTimeout(() => {
                console.log("⏳ Переход на экран окончания игры...");
                const isMobile = runtime.layout.name.includes("Mobilya");
                const targetLayout = isMobile ? "Obshiy4Mobilya" : "Obshiy4";
                window.transitionLock = false;
                window.gameEndingInProgress = false;
                console.log(`🚀 Перехожу в ${targetLayout}`);
                runtime.goToLayout(targetLayout);
            }, 1000);
        }
    } catch (err) {
        console.log("💥 Ошибка завершения игры:", err.message);
        window.gameEndingInProgress = false;
        window.transitionScheduled = false;
    }
  }
  
  window.ForceEndGame = function() {
    console.log("🔄 Принудительное завершение игры...");
    gameAlreadyEnded = true;
    endGameForAll();
  };
  
  function stopAllSystems() {
    console.log("🛑 Останавливаю все системы GameOver...");
    if (updateInterval) { clearInterval(updateInterval); updateInterval = null; }
    if (chatPollInterval) { clearInterval(chatPollInterval); chatPollInterval = null; }
    if (gameEndCheckInterval) { clearInterval(gameEndCheckInterval); gameEndCheckInterval = null; }
  }
  
  window.ExitFromGameOver = function() {
    console.log("🚪 Выход из игры...");
    stopAllSystems();
    if (myPlayerId) {
      fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${myPlayerId}`, {
        method: "PATCH",
        headers: getAuthHeaders(),
        body: JSON.stringify({ status: "vihappizd", last_ping: getCorrectedPing() })
      }).catch(() => {});
    }
    if (runtime && runtime.callFunction) {
      try { runtime.callFunction("GoToMainMenu"); } catch (err) { console.log("⚠️ Функция перехода не найдена"); }
    }
  };
  
  window.GameOverSystem = {
    refreshLeaderboard: function() { updateLeaderboard(); },
    sendChatMessage: function(message) { window.SendChatMessageFromGameOver(message); },
    exitGame: function() { window.ExitFromGameOver(); },
    endGame: function() { window.ForceEndGame(); },
    stop: function() { stopAllSystems(); }
  };
  
  setTimeout(() => { initGameOverSystem(); }, 1000);
  
  window.addEventListener('beforeunload', function() {
    if (myPlayerId) {
      fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${myPlayerId}`, {
        method: "PATCH",
        headers: getAuthHeaders(),
        body: JSON.stringify({ status: "vihappizd", last_ping: getCorrectedPing() })
      }).catch(() => {});
    }
  });
  
  console.log("✅ СИСТЕМА GAME OVER ГОТОВА (без цветов)!");
})();
	},

	async Gameover2_Event28_Act7(runtime, localVars)
	{
		const text = runtime.objects.chatpisa.getFirstInstance().text;
		const url = "https://functions.yandexcloud.net/d4e4d3k1996t2mtjjb8j?endpoint=" + encodeURIComponent("https://parseapi.back4app.com/functions/checkMessage") + "&_method=POST&_body=" + encodeURIComponent('{"text":"' + text + '"}');
		
		fetch(url, { method: 'GET' })
		  .then(r => r.json())
		  .then(async data => {
		    console.log('📥 Back4App ответ:', data);
		    const cleanText = data.result.cleanText;
		    runtime.globalVars.lastCleanText = cleanText;
		    
		    if (!cleanText) { console.log('❌ Нет текста для отправки'); return; }
		    
		    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
		    const headers = {
		      "apikey": SUPABASE_KEY,
		      "Authorization": "Bearer " + (window.supabaseAuthToken || SUPABASE_KEY),
		      "Content-Type": "application/json",
		      "Prefer": "return=minimal"
		    };
		    
		    try {
		      const response = await fetch("https://lebmkbapqahnahjeycvd.supabase.co/rest/v1/chat_messages", {
		        method: "POST", headers: headers,
		        body: JSON.stringify({
		          lobby_id: runtime.globalVars.currentLobby,
		          player_id: runtime.globalVars.myPlayerId,
		          nickname: runtime.globalVars.myNickname,
		          clean_message: cleanText,
		          timestamp: new Date().toISOString(),
		          user_id: window.supabaseUserId || null
		        })
		      });
		      
		      if (response.ok) {
		        console.log('✅ Сообщение отправлено в Supabase');
		        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		        runtime.callFunction("ShowChatMessage", "[" + time + "] [" + runtime.globalVars.myNickname + "] " + cleanText);
		      } else {
		        const error = await response.text();
		        console.log('❌ Ошибка Supabase:', error);
		        runtime.callFunction("ShowChatMessage", "[System] Ошибка отправки сообщения");
		      }
		    } catch(err) {
		      console.log('💥 Ошибка сети:', err);
		      runtime.callFunction("ShowChatMessage", "[System] Ошибка сети");
		    }
		  })
		  .catch(err => console.log('❌ Ошибка Back4App:', err));
	},

	async Gameover2_Event30_Act11(runtime, localVars)
	{
// ==================== ОТПРАВКА СООБЩЕНИЯ В ЧАТ (с Auth) ====================

async function getAuthHeaders() {
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
    const baseHeaders = {
        "apikey": SUPABASE_KEY,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    };
    if (window.supabaseAuthToken) {
        baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
        baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
}

async function sendCheckedMessageToSupabase() {
  try {
    const cleanText = runtime.globalVars.lastCleanText;
    
    if (!cleanText) {
      console.log('❌ Нет текста для отправки');
      return;
    }
    
    const headers = await getAuthHeaders();
    
    const response = await fetch("https://lebmkbapqahnahjeycvd.supabase.co/rest/v1/chat_messages", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        lobby_id: runtime.globalVars.currentLobby,
        player_id: runtime.globalVars.myPlayerId,
        nickname: runtime.globalVars.myNickname,
        clean_message: cleanText,
        timestamp: new Date().toISOString(),
        user_id: window.supabaseUserId || null
      })
    });
    
    if (response.ok) {
      console.log('✅ Сообщение отправлено в чат Supabase');
      
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const displayText = `[${time}] [${runtime.globalVars.myNickname}] ${cleanText}`;
      
      runtime.callFunction("ShowChatMessage", displayText);
      
    } else {
      const error = await response.text();
      console.log('❌ Ошибка отправки в Supabase:', error);
      runtime.callFunction("ShowChatMessage", "[System] Ошибка отправки сообщения");
    }
    
  } catch (err) {
    console.log('💥 Ошибка сети:', err);
    runtime.callFunction("ShowChatMessage", "[System] Ошибка сети");
  }
}

sendCheckedMessageToSupabase();
	},

	async Gameover2_Event46_Act1(runtime, localVars)
	{
// ==================== УМНЫЙ ПОИСК ЛОББИ (АВТОМАТИЧЕСКИЙ ЗАПУСК) ====================
// 🔥 ВСТАВЬ ЭТО В Execute JavaScript НА ОТДЕЛЬНОМ МАКЕТЕ

(async function() {
  // ==================== НАСТРОЙКИ ====================
  const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
  
  // 🔥 ФУНКЦИЯ ДЛЯ ЗАГОЛОВКОВ С AUTH
  function getAuthHeaders() {
    const baseHeaders = {
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json"
    };
    if (window.supabaseAuthToken) {
      baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
      baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
  }
  
  console.log("🎮 АВТОМАТИЧЕСКИЙ ПОИСК ЛОББИ ЗАПУЩЕН...");
  
  try {
    // 🔥 ШАГ 1: Получаем данные текущего игрока
    let myPlayerId = "";
    let myNickname = "";
    let currentLobby = "";
    
    if (runtime && runtime.globalVars) {
      myPlayerId = runtime.globalVars.myPlayerId || "";
      myNickname = runtime.globalVars.myNickname || "Player_" + Math.floor(Math.random() * 1000);
      currentLobby = runtime.globalVars.currentLobby || "";
      
      console.log("👤 ДАННЫЕ ИГРОКА:");
      console.log(`   ID: ${myPlayerId}`);
      console.log(`   Ник: ${myNickname}`);
      console.log(`   Текущее лобби: ${currentLobby}`);
    }
    
    // 🔥 ШАГ 1.5: УДАЛЯЕМ СТАРОГО ИГРОКА ПЕРЕД ПОИСКОМ
    if (myPlayerId && currentLobby) {
      console.log("🗑️ Удаляю старого игрока перед поиском нового лобби...");
      await cleanupOldPlayer(myPlayerId, currentLobby);
    }
    
    // 🔥 Если нет ID игрока - создаем новый
    if (!myPlayerId) {
      myPlayerId = "player_" + Date.now();
      if (runtime && runtime.globalVars) {
        runtime.globalVars.myPlayerId = myPlayerId;
      }
      console.log(`🆕 Создан новый ID игрока: ${myPlayerId}`);
    }
    
    // 🔥 ШАГ 2: Сколько игроков в нашем текущем лобби?
    let ourPlayerCount = 1;
    
    if (currentLobby) {
      const ourLobbyResponse = await fetch(
        `${SUPABASE_URL}/rest/v1/players?lobby_id=eq.${currentLobby}`,
        { headers: getAuthHeaders() }
      );
      
      if (ourLobbyResponse.ok) {
        const ourPlayers = await ourLobbyResponse.json();
        ourPlayerCount = ourPlayers.length;
        console.log(`👥 В нашем лобби ${ourPlayerCount} игроков`);
      }
    }
    
    // 🔥 ШАГ 3: Ищем ВСЕ активные лобби (статус waiting)
    console.log("🔍 Ищу активные лобби...");
    
    const lobbiesResponse = await fetch(
      `${SUPABASE_URL}/rest/v1/lobbies?` +
      `status=eq.waiting&` +
      `select=lobby_id,player_count,max_players&` +
      `order=player_count.desc`,
      { headers: getAuthHeaders() }
    );
    
    if (!lobbiesResponse.ok) {
      console.log("❌ Ошибка поиска лобби");
      await createNewLobby();
      return;
    }
    
    const allLobbies = await lobbiesResponse.json();
    console.log(`🎯 Найдено ${allLobbies.length} активных лобби`);
    
    // 🔥 ШАГ 4: Ищем ПОДХОДЯЩЕЕ лобби
    let bestLobby = null;
    let bestLobbyReason = "";
    
    for (const lobby of allLobbies) {
      const freeSlots = 7 - lobby.player_count;
      const isSameLobby = lobby.lobby_id === currentLobby;
      
      console.log(`   Лобби ${lobby.lobby_id}: ${lobby.player_count}/7, свободно: ${freeSlots}`);
      
      if (!isSameLobby && freeSlots >= ourPlayerCount) {
        bestLobby = lobby;
        bestLobbyReason = `✅ Нашлось! Есть ${freeSlots} свободных мест, нам нужно ${ourPlayerCount}`;
        break;
      }
    }
    
    // 🔥 ШАГ 5: Если нашли - присоединяемся, если нет - создаем новое
    if (bestLobby) {
      console.log(bestLobbyReason);
      await joinExistingLobby(bestLobby.lobby_id, ourPlayerCount);
    } else {
      console.log("⚠️ Не нашел подходящего лобби, создаю новое...");
      await createNewLobby();
    }
    
  } catch (err) {
    console.log("💥 КРИТИЧЕСКАЯ ОШИБКА ПОИСКА:", err.message);
    triggerLobbyTransition(null, false, `Ошибка: ${err.message}`);
  }
  
  // ==================== ФУНКЦИЯ ОЧИСТКИ СТАРОГО ИГРОКА И ЛОББИ ====================
  
  async function cleanupOldPlayer(playerId, lobbyId) {
    try {
      console.log(`🗑️ Очистка: Игрок ${playerId} из лобби ${lobbyId}`);
      
      const deletePlayerResponse = await fetch(
        `${SUPABASE_URL}/rest/v1/players?player_id=eq.${playerId}`,
        { method: "DELETE", headers: getAuthHeaders() }
      );
      
      if (deletePlayerResponse.ok) {
        console.log("✅ Старый игрок удален из базы");
      }
      
      const playersResponse = await fetch(
        `${SUPABASE_URL}/rest/v1/players?lobby_id=eq.${lobbyId}`,
        { headers: getAuthHeaders() }
      );
      
      if (playersResponse.ok) {
        const remainingPlayers = await playersResponse.json();
        
        if (remainingPlayers.length === 0) {
          console.log(`🗑️ Лобби ${lobbyId} пустое - удаляю...`);
          
          await fetch(
            `${SUPABASE_URL}/rest/v1/chat_messages?lobby_id=eq.${lobbyId}`,
            { method: "DELETE", headers: getAuthHeaders() }
          );
          console.log("✅ Сообщения чата удалены");
          
          await fetch(
            `${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${lobbyId}`,
            { method: "DELETE", headers: getAuthHeaders() }
          );
          console.log(`✅ Лобби ${lobbyId} удалено`);
        } else {
          console.log(`👥 В лобби ${lobbyId} осталось игроков: ${remainingPlayers.length}`);
          
          await fetch(
            `${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${lobbyId}`,
            {
              method: "PATCH",
              headers: getAuthHeaders(),
              body: JSON.stringify({ player_count: remainingPlayers.length })
            }
          );
          console.log(`✅ Счетчик игроков обновлен: ${remainingPlayers.length}`);
        }
      }
    } catch (err) {
      console.log("⚠️ Ошибка при очистке старого игрока:", err.message);
    }
  }
  
  // ==================== ФУНКЦИЯ ПРИСОЕДИНЕНИЯ К СУЩЕСТВУЮЩЕМУ ЛОББИ ====================
  
  async function joinExistingLobby(lobbyId, ourPlayerCount) {
    console.log(`🎮 ПРИСОЕДИНЯЮСЬ К ЛОББИ ${lobbyId}...`);
    
    try {
      const myPlayerId = runtime?.globalVars?.myPlayerId || "";
      const myNickname = runtime?.globalVars?.myNickname || "Player_" + Date.now();
      
      const checkPlayerResponse = await fetch(
        `${SUPABASE_URL}/rest/v1/players?player_id=eq.${myPlayerId}&lobby_id=eq.${lobbyId}`,
        { headers: getAuthHeaders() }
      );
      
      if (checkPlayerResponse.ok) {
        const existingPlayer = await checkPlayerResponse.json();
        if (existingPlayer.length > 0) {
          console.log("⚠️ Игрок уже есть в этом лобби");
          await fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${myPlayerId}`, {
            method: "PATCH",
            headers: getAuthHeaders(),
            body: JSON.stringify({
              status: "naserve",
              last_ping: new Date().toISOString()
            })
          });
        } else {
          await fetch(`${SUPABASE_URL}/rest/v1/players`, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify({
              player_id: myPlayerId,
              lobby_id: lobbyId,
              nickname: myNickname,
              status: "naserve",
              score: 0,
              last_ping: new Date().toISOString(),
              created_at: new Date().toISOString(),
              user_id: window.supabaseUserId || null  // 🔥 ДОБАВЛЯЕМ user_id
            })
          });
        }
      }
      
      const playersResponse = await fetch(
        `${SUPABASE_URL}/rest/v1/players?lobby_id=eq.${lobbyId}`,
        { headers: getAuthHeaders() }
      );
      
      let actualPlayerCount = ourPlayerCount;
      if (playersResponse.ok) {
        const players = await playersResponse.json();
        actualPlayerCount = players.length;
      }
      
      await fetch(`${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${lobbyId}`, {
        method: "PATCH",
        headers: getAuthHeaders(),
        body: JSON.stringify({ player_count: actualPlayerCount })
      });
      
      if (runtime && runtime.globalVars) {
        runtime.globalVars.currentLobby = lobbyId;
        runtime.globalVars.gameStatus = "lobby";
        runtime.globalVars.myNickname = myNickname;
      }
      
      console.log(`✅ УСПЕШНО ПРИСОЕДИНИЛСЯ К ЛОББИ ${lobbyId} (игроков: ${actualPlayerCount})`);
      triggerLobbyTransition(lobbyId, true, `Присоединился к лобби ${lobbyId}`);
      
    } catch (err) {
      console.log("💥 Ошибка присоединения:", err.message);
      triggerLobbyTransition(null, false, `Ошибка присоединения: ${err.message}`);
    }
  }
  
  // ==================== ФУНКЦИЯ СОЗДАНИЯ НОВОГО ЛОББИ ====================
  
  async function createNewLobby() {
    console.log("🏗️ СОЗДАЮ НОВОЕ ЛОББИ...");
    
    try {
      const myPlayerId = runtime?.globalVars?.myPlayerId || "player_" + Date.now();
      const myNickname = runtime?.globalVars?.myNickname || "Player_" + Date.now();
      const newLobbyId = "lobby_" + Date.now();
      
      await fetch(`${SUPABASE_URL}/rest/v1/players`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          player_id: myPlayerId,
          lobby_id: newLobbyId,
          nickname: myNickname,
          status: "naserve",
          score: 0,
          last_ping: new Date().toISOString(),
          created_at: new Date().toISOString(),
          user_id: window.supabaseUserId || null  // 🔥 ДОБАВЛЯЕМ user_id
        })
      });
      
      await fetch(`${SUPABASE_URL}/rest/v1/lobbies`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          lobby_id: newLobbyId,
          status: 'waiting',
          player_count: 1,
          max_players: 7,
          created_at: new Date().toISOString(),
          vote_status: 'idle'
        })
      });
      
      if (runtime && runtime.globalVars) {
        runtime.globalVars.myPlayerId = myPlayerId;
        runtime.globalVars.myNickname = myNickname;
        runtime.globalVars.currentLobby = newLobbyId;
        runtime.globalVars.gameStatus = "lobby";
      }
      
      console.log(`✅ СОЗДАНО НОВОЕ ЛОББИ: ${newLobbyId} (Игрок: ${myNickname})`);
      triggerLobbyTransition(newLobbyId, true, `Создано новое лобби ${newLobbyId}`);
      
    } catch (err) {
      console.log("💥 Ошибка создания лобби:", err.message);
      triggerLobbyTransition(null, false, `Ошибка создания: ${err.message}`);
    }
  }
  
  // ==================== ФУНКЦИЯ ПЕРЕХОДА В ЛОББИ ====================
  
  function triggerLobbyTransition(lobbyId, success, reason) {
    console.log(`🚪 ТРИГГЕР ПЕРЕХОДА В ЛОББИ: ${reason}`);
    
    if (runtime && runtime.globalVars) {
      runtime.globalVars.foundLobbyId = lobbyId || "";
      runtime.globalVars.lobbySearchResult = success ? "success" : "failed";
      runtime.globalVars.lobbySearchReason = reason || "";
      runtime.globalVars.shouldGoToLobby = success ? 1 : 0;
      
      console.log("✅ Установлены флаги:");
      console.log(`   foundLobbyId: ${lobbyId}`);
      console.log(`   shouldGoToLobby: ${success ? 1 : 0}`);
    }
    
    if (success && runtime && runtime.callFunction) {
      try {
        runtime.callFunction("OnLobbyFound", lobbyId);
        console.log("✅ Вызвана OnLobbyFound()");
      } catch (e) {
        try {
          runtime.callFunction("GoToLobby");
          console.log("✅ Вызвана GoToLobby()");
        } catch (e2) {
          try {
            runtime.callFunction("SwitchToLobby");
            console.log("✅ Вызвана SwitchToLobby()");
          } catch (e3) {
            console.log("⚠️ Все функции не найдены, используй флаги в Construct");
          }
        }
      }
    }
    
    if (!success && runtime && runtime.globalVars) {
      runtime.globalVars.showLobbyError = 1;
      runtime.globalVars.lobbyErrorMessage = reason;
    }
    
    console.log("\n🎮 ИНСТРУКЦИЯ ДЛЯ CONSTRUCT:");
    if (success) {
      console.log("1. Добавь событие: 'Когда shouldGoToLobby = 1'");
      console.log("2. В действиях: 'Перейти на макет лобби'");
    } else {
      console.log("1. Добавь событие: 'Когда showLobbyError = 1'");
      console.log("2. Покажи сообщение: lobbyErrorMessage");
    }
  }
  
})();
	},

	async Gameover2_Event54_Act2(runtime, localVars)
	{
// ==================== КНОПКА ВЫХОДА В МЕНЮ ====================
// 🔥 ВСТАВЬ ЭТО В Execute JavaScript НА СОБЫТИИ КНОПКИ "МЕНЮ"

(async function() {
  // ==================== НАСТРОЙКИ ====================
  const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
  
  // 🔥 ФУНКЦИЯ ДЛЯ ЗАГОЛОВКОВ С AUTH
  function getAuthHeaders() {
    const baseHeaders = {
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json"
    };
    if (window.supabaseAuthToken) {
      baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
      baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
  }
  
  console.log("🚪 НАЖАТА КНОПКА МЕНЮ - УДАЛЯЮ ИГРОКА...");
  
  try {
    const myPlayerId = runtime?.globalVars?.myPlayerId || "";
    const currentLobby = runtime?.globalVars?.currentLobby || "";
    const myNickname = runtime?.globalVars?.myNickname || "Player";
    
    if (!myPlayerId) {
      console.log("⚠️ Нет ID игрока, просто переходим в меню");
      goToMainMenu();
      return;
    }
    
    console.log(`🗑️ Удаляю игрока: ${myNickname} (${myPlayerId})`);
    
    // 1. Удаляем игрока из базы
    const deleteResponse = await fetch(
      `${SUPABASE_URL}/rest/v1/players?player_id=eq.${myPlayerId}`,
      { method: "DELETE", headers: getAuthHeaders() }
    );
    
    if (deleteResponse.ok) {
      console.log("✅ Игрок удален из базы");
    } else {
      console.log("⚠️ Не удалось удалить игрока из базы");
    }
    
    // 2. Если есть лобби - обновляем счетчик
    if (currentLobby) {
      console.log(`🔢 Обновляю счетчик лобби: ${currentLobby}`);
      
      const playersResponse = await fetch(
        `${SUPABASE_URL}/rest/v1/players?lobby_id=eq.${currentLobby}`,
        { headers: getAuthHeaders() }
      );
      
      if (playersResponse.ok) {
        const remainingPlayers = await playersResponse.json();
        const newPlayerCount = remainingPlayers.length;
        
        console.log(`👥 Осталось игроков в лобби: ${newPlayerCount}`);
        
        if (newPlayerCount > 0) {
          await fetch(`${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${currentLobby}`, {
            method: "PATCH",
            headers: getAuthHeaders(),
            body: JSON.stringify({ player_count: newPlayerCount })
          });
          console.log(`✅ Счетчик обновлен: ${newPlayerCount}`);
          
          if (newPlayerCount === 1) {
            console.log("👤 Остался 1 игрок - сбрасываю голосование");
            await fetch(`${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${currentLobby}`, {
              method: "PATCH",
              headers: getAuthHeaders(),
              body: JSON.stringify({ vote_status: 'idle', yes_votes: 0, no_votes: 0 })
            });
          }
          
          if (newPlayerCount === 0) {
            console.log(`🗑️ Лобби ${currentLobby} пустое - удаляю...`);
            
            await fetch(
              `${SUPABASE_URL}/rest/v1/chat_messages?lobby_id=eq.${currentLobby}`,
              { method: "DELETE", headers: getAuthHeaders() }
            );
            
            await fetch(
              `${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${currentLobby}`,
              { method: "DELETE", headers: getAuthHeaders() }
            );
            console.log(`✅ Лобби ${currentLobby} удалено`);
          }
        }
      }
    }
    
    // 3. Сбрасываем глобальные переменные
    if (runtime && runtime.globalVars) {
      runtime.globalVars.currentLobby = "";
      runtime.globalVars.gameStatus = "menu";
      runtime.globalVars.odnahaza = 0;
      runtime.globalVars.voteActive = false;
      runtime.globalVars.systemsRunning = false;
      console.log("✅ Глобальные переменные сброшены");
    }
    
    // 4. Останавливаем все интервалы
    if (runtime.globalVars.chatPollInterval) {
      clearInterval(runtime.globalVars.chatPollInterval);
      runtime.globalVars.chatPollInterval = null;
      console.log("✅ Интервалы остановлены");
    }
    
    goToMainMenu();
    
  } catch (err) {
    console.log("💥 Ошибка при выходе в меню:", err.message);
    goToMainMenu();
  }
  
  function goToMainMenu() {
    console.log("🏠 Переход в главное меню...");
    
    if (runtime && runtime.globalVars) {
      runtime.globalVars.shouldGoToMenu = 1;
      runtime.globalVars.menuTransitionReason = "Игрок вышел в меню";
    }
    
    if (runtime && runtime.callFunction) {
      try {
        runtime.callFunction("GoToMainMenu");
        console.log("✅ Вызвана GoToMainMenu()");
      } catch (e) {
        try { runtime.callFunction("GoToMenu"); console.log("✅ Вызвана GoToMenu()"); }
        catch (e2) { try { runtime.callFunction("ReturnToMenu"); console.log("✅ Вызвана ReturnToMenu()"); }
        catch (e3) { try { runtime.callFunction("SwitchToMenu"); console.log("✅ Вызвана SwitchToMenu()"); }
        catch (e4) { console.log("⚠️ Все функции не найдены"); } } }
      }
    }
    
    console.log("\n🎮 ДЛЯ CONSTRUCT:");
    console.log("1. Добавь событие: 'Когда shouldGoToMenu = 1'");
    console.log("2. В действиях: 'Перейти на макет Obshiy2'");
  }
  
})();
	},

	async Gameover2_Event55_Act2(runtime, localVars)
	{
// ==================== КНОПКА ВЫХОДА В МЕНЮ ====================
// 🔥 ВСТАВЬ ЭТО В Execute JavaScript НА СОБЫТИИ КНОПКИ "МЕНЮ"

(async function() {
  // ==================== НАСТРОЙКИ ====================
  const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
  
  // 🔥 ФУНКЦИЯ ДЛЯ ЗАГОЛОВКОВ С AUTH
  function getAuthHeaders() {
    const baseHeaders = {
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json"
    };
    if (window.supabaseAuthToken) {
      baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
      baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
  }
  
  console.log("🚪 НАЖАТА КНОПКА МЕНЮ - УДАЛЯЮ ИГРОКА...");
  
  try {
    const myPlayerId = runtime?.globalVars?.myPlayerId || "";
    const currentLobby = runtime?.globalVars?.currentLobby || "";
    const myNickname = runtime?.globalVars?.myNickname || "Player";
    
    if (!myPlayerId) {
      console.log("⚠️ Нет ID игрока, просто переходим в меню");
      goToMainMenu();
      return;
    }
    
    console.log(`🗑️ Удаляю игрока: ${myNickname} (${myPlayerId})`);
    
    // 1. Удаляем игрока из базы
    const deleteResponse = await fetch(
      `${SUPABASE_URL}/rest/v1/players?player_id=eq.${myPlayerId}`,
      { method: "DELETE", headers: getAuthHeaders() }
    );
    
    if (deleteResponse.ok) {
      console.log("✅ Игрок удален из базы");
    } else {
      console.log("⚠️ Не удалось удалить игрока из базы");
    }
    
    // 2. Если есть лобби - обновляем счетчик
    if (currentLobby) {
      console.log(`🔢 Обновляю счетчик лобби: ${currentLobby}`);
      
      const playersResponse = await fetch(
        `${SUPABASE_URL}/rest/v1/players?lobby_id=eq.${currentLobby}`,
        { headers: getAuthHeaders() }
      );
      
      if (playersResponse.ok) {
        const remainingPlayers = await playersResponse.json();
        const newPlayerCount = remainingPlayers.length;
        
        console.log(`👥 Осталось игроков в лобби: ${newPlayerCount}`);
        
        if (newPlayerCount > 0) {
          await fetch(`${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${currentLobby}`, {
            method: "PATCH",
            headers: getAuthHeaders(),
            body: JSON.stringify({ player_count: newPlayerCount })
          });
          console.log(`✅ Счетчик обновлен: ${newPlayerCount}`);
          
          if (newPlayerCount === 1) {
            console.log("👤 Остался 1 игрок - сбрасываю голосование");
            await fetch(`${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${currentLobby}`, {
              method: "PATCH",
              headers: getAuthHeaders(),
              body: JSON.stringify({ vote_status: 'idle', yes_votes: 0, no_votes: 0 })
            });
          }
          
          if (newPlayerCount === 0) {
            console.log(`🗑️ Лобби ${currentLobby} пустое - удаляю...`);
            
            await fetch(
              `${SUPABASE_URL}/rest/v1/chat_messages?lobby_id=eq.${currentLobby}`,
              { method: "DELETE", headers: getAuthHeaders() }
            );
            
            await fetch(
              `${SUPABASE_URL}/rest/v1/lobbies?lobby_id=eq.${currentLobby}`,
              { method: "DELETE", headers: getAuthHeaders() }
            );
            console.log(`✅ Лобби ${currentLobby} удалено`);
          }
        }
      }
    }
    
    // 3. Сбрасываем глобальные переменные
    if (runtime && runtime.globalVars) {
      runtime.globalVars.currentLobby = "";
      runtime.globalVars.gameStatus = "menu";
      runtime.globalVars.odnahaza = 0;
      runtime.globalVars.voteActive = false;
      runtime.globalVars.systemsRunning = false;
      console.log("✅ Глобальные переменные сброшены");
    }
    
    // 4. Останавливаем все интервалы
    if (runtime.globalVars.chatPollInterval) {
      clearInterval(runtime.globalVars.chatPollInterval);
      runtime.globalVars.chatPollInterval = null;
      console.log("✅ Интервалы остановлены");
    }
    
    goToMainMenu();
    
  } catch (err) {
    console.log("💥 Ошибка при выходе в меню:", err.message);
    goToMainMenu();
  }
  
  function goToMainMenu() {
    console.log("🏠 Переход в главное меню...");
    
    if (runtime && runtime.globalVars) {
      runtime.globalVars.shouldGoToMenu = 1;
      runtime.globalVars.menuTransitionReason = "Игрок вышел в меню";
    }
    
    if (runtime && runtime.callFunction) {
      try {
        runtime.callFunction("GoToMainMenu");
        console.log("✅ Вызвана GoToMainMenu()");
      } catch (e) {
        try { runtime.callFunction("GoToMenu"); console.log("✅ Вызвана GoToMenu()"); }
        catch (e2) { try { runtime.callFunction("ReturnToMenu"); console.log("✅ Вызвана ReturnToMenu()"); }
        catch (e3) { try { runtime.callFunction("SwitchToMenu"); console.log("✅ Вызвана SwitchToMenu()"); }
        catch (e4) { console.log("⚠️ Все функции не найдены"); } } }
      }
    }
    
    console.log("\n🎮 ДЛЯ CONSTRUCT:");
    console.log("1. Добавь событие: 'Когда shouldGoToMenu = 1'");
    console.log("2. В действиях: 'Перейти на макет Obshiy2'");
  }
  
})();
	},

	async Gameover2_Event82_Act1(runtime, localVars)
	{
// ==================== МАКЕТ ЛИДЕРБОРДА (С ОТЛАДКОЙ) ====================
// 🔥 ВСТАВЬ ЭТО В Execute JavaScript ПРИ СТАРТЕ МАКЕТА LEADERBOARD

(function() {
  // ==================== НАСТРОЙКИ ====================
  const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
  
  // 🔥 ФУНКЦИЯ ДЛЯ ЗАГОЛОВКОВ С AUTH
  function getAuthHeaders() {
    const baseHeaders = {
      "apikey": SUPABASE_KEY,
      "Content-Type": "application/json"
    };
    if (window.supabaseAuthToken) {
      baseHeaders["Authorization"] = `Bearer ${window.supabaseAuthToken}`;
    } else {
      baseHeaders["Authorization"] = `Bearer ${SUPABASE_KEY}`;
    }
    return baseHeaders;
  }
  
  // ==================== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ====================
  let myPlayerId = "";
  let myNickname = "";
  let currentLobby = "";
  let chatPollInterval = null;
  let lastChatMessageId = 0;
  
  // ==================== 1. ИНИЦИАЛИЗАЦИЯ ====================
  async function sendWinnerToHistory(winner, lobbyId) {
    if (!winner || !lobbyId) return;

    const appId = "rtQswehi1m8cJJPZlYCkclrAkgVghX0LaXsbkfMh";
    const apiKey = "bVWT6XAwval1vPAdMgPyqRFEcWqFWYpRuw62mB85";
    const matchKey = "win_" + lobbyId;

    try {
        const check = await fetch(`https://parseapi.back4app.com/classes/win?where={"matchKey":"${matchKey}"}`, {
            headers: { "X-Parse-Application-Id": appId, "X-Parse-REST-API-Key": apiKey }
        });
        const res = await check.json();

        if (res.results && res.results.length > 0) {
            console.log("🚫 Запись об этом матче уже есть в истории.");
            return; 
        }

        await fetch("https://parseapi.back4app.com/classes/win", {
            method: "POST",
            headers: {
                "X-Parse-Application-Id": appId,
                "X-Parse-REST-API-Key": apiKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "ID": winner.player_id,
                "scores": (winner.score || 0).toString(),
                "name": winner.nickname,
                "matchKey": matchKey
            })
        });
        console.log("🏆 ПОБЕДА ЗАПИСАНА В ИСТОРИЮ!");
    } catch (e) {
        console.error("❌ Ошибка Back4App:", e);
    }
  }
  
  function initLeaderboard() {
    console.log("🏆 ФИНАЛЬНЫЙ ЛИДЕРБОРД ЗАПУСКАЕТСЯ...");
    
    debugAllObjects();
    
    try {
      if (runtime && runtime.globalVars) {
        myPlayerId = runtime.globalVars.myPlayerId || "";
        myNickname = runtime.globalVars.myNickname || "Player";
        currentLobby = runtime.globalVars.currentLobby || "";
        
        console.log(`🎮 Данные игрока:`);
        console.log(`   ID: ${myPlayerId}`);
        console.log(`   Ник: ${myNickname}`);
        console.log(`   Лобби: ${currentLobby}`);
      }
    } catch (err) {
      console.log("⚠️ Ошибка получения переменных:", err);
    }
    
    loadFinalLeaderboard();
    startChatPolling();
    setupPlayAgainButtons();
    
    console.log("✅ Лидерборд запущен!");
  }
  
  // ==================== 2. ОТЛАДКА ОБЪЕКТОВ ====================
  function debugAllObjects() {
    console.log("🔍 ОТЛАДКА ВСЕХ ОБЪЕКТОВ:");
    console.log("-".repeat(40));
    
    if (!runtime || !runtime.objects) {
      console.log("❌ runtime.objects не доступен!");
      return;
    }
    
    const allObjects = Object.keys(runtime.objects);
    console.log(`📦 Всего объектов: ${allObjects.length}`);
    
    console.log("\n📝 ТЕКСТОВЫЕ ОБЪЕКТЫ:");
    const textObjects = allObjects.filter(name => 
      name.includes('txt') || name.includes('Text') || name.includes('Name') || name.includes('Score')
    );
    
    textObjects.forEach(objName => {
      console.log(`   ${objName}:`, runtime.objects[objName] ? "✅ найден" : "❌ не найден");
      const obj = runtime.objects[objName];
      if (obj) {
        console.log(`     Методы:`);
        const methods = Object.keys(obj).filter(k => typeof obj[k] === 'function');
        methods.slice(0, 5).forEach(method => {
          console.log(`       ${method}()`);
        });
        
        try {
          let instance = obj;
          if (obj.getFirstInstance && typeof obj.getFirstInstance === 'function') {
            instance = obj.getFirstInstance();
            console.log(`     ✅ getFirstInstance() работает`);
          }
          
          const props = ['text', 'visible', 'opacity', 'setText', 'setVisible', 'setOpacity'];
          props.forEach(prop => {
            if (instance[prop] !== undefined) {
              console.log(`       ${prop}: ${typeof instance[prop]}`);
            }
          });
        } catch (e) {
          console.log(`     ❌ Ошибка проверки экземпляра:`, e.message);
        }
      }
    });
    
    console.log("\n🎖️ СПРАЙТЫ ПОЗИЦИЙ:");
    for (let i = 14; i <= 20; i++) {
      const spriteName = `Спрайт${i}`;
      if (runtime.objects[spriteName]) {
        console.log(`   ${spriteName}: ✅ найден`);
      }
    }
    
    console.log("\n🎮 КНОПКИ:");
    ['igranzanovo', 'igranzanovo2', 'ButtonPlayAgain', 'btnPlayAgain', 'playAgainBtn'].forEach(btnName => {
      if (runtime.objects[btnName]) {
        console.log(`   ${btnName}: ✅ найден`);
      }
    });
    
    console.log("-".repeat(40));
  }
  
  // ==================== 3. ЗАГРУЗКА ФИНАЛЬНОГО ЛИДЕРБОРДА ====================
  async function loadFinalLeaderboard() {
    console.log("📊 Загружаю финальный лидерборд...");
    
    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/players?` +
        `lobby_id=eq.${currentLobby}&` +
        `select=player_id,nickname,score,status&` +
        `order=score.desc.nullslast`,
        { headers: getAuthHeaders() }
      );
      
      if (!response.ok) {
        console.log("❌ Ошибка загрузки финального лидерборда");
        return;
      }
      
      const players = await response.json();
      
      if (players && players.length > 0) {
        const winner = players[0];
        const lobbyId = currentLobby;
        sendWinnerToHistory(winner, lobbyId);
      }
      
      console.log(`🎯 Загружено ${players.length} игроков из лобби ${currentLobby}`);
      displayFinalLeaderboard(players);
      
    } catch (err) {
      console.log("💥 Ошибка загрузки лидерборда:", err.message);
    }
  }
  
  function displayFinalLeaderboard(players) {
    console.log("🚀 [DEBUG] Начинаю отрисовку. Игроков в массиве:", players.length);
    
    if (!players || players.length === 0) {
      console.log("⚠️ [DEBUG] Список игроков пуст!");
      return;
    }
    
    hideAllLeaderboardElements();
    
    for (let i = 0; i < Math.min(players.length, 7); i++) {
      const player = players[i];
      const position = i + 1;
      
      let nameField = (position === 1) ? "txtPlayer2Name2" : `txtPlayer${position}Name`;
      let scoreField = `txtPlayer${position}Score`;
      
      const displayName = player.nickname || `Player ${position}`;
      const displayScore = (player.score || 0).toString();

      console.log(`🔍 [DEBUG] Позиция ${position}: Ищу объект ${nameField}, ставлю ник: ${displayName}`);

      const success = updateTextField(nameField, displayName);
      updateTextField(scoreField, displayScore);
      
      setElementVisible(nameField, true);
      setElementVisible(scoreField, true);
      setSpriteVisible(position, true);
      
      if (!success) {
          console.error(`❌ [DEBUG] ОБЪЕКТ ${nameField} НЕ ОТВЕТИЛ! Проверь имя в C3!`);
      } else {
          console.log(`✅ [DEBUG] Текст для ${nameField} успешно отправлен в C3`);
      }
    }
  }
  
  function hideAllLeaderboardElements() {
    console.log("👻 Скрываю все элементы лидерборда...");
    
    for (let i = 14; i <= 20; i++) {
      setSpriteVisible(i - 13, false);
    }
    
    for (let i = 1; i <= 7; i++) {
      setElementVisible(`txtPlayer${i}Name`, false);
      setElementVisible(`txtPlayer${i}Score`, false);
    }
    
    console.log("✅ Все элементы скрыты");
  }
  
  function setSpriteVisible(position, isVisible) {
    const spriteName = `Спрайт${position + 13}`;
    
    try {
      const sprite = runtime.objects[spriteName];
      if (!sprite) {
        console.log(`   ❌ ${spriteName}: объект не найден`);
        return false;
      }
      
      console.log(`   🎨 Настройка ${spriteName} (позиция ${position}): ${isVisible ? 'ВКЛ' : 'ВЫКЛ'}`);
      
      let instance = sprite;
      if (sprite.getFirstInstance && typeof sprite.getFirstInstance === 'function') {
        instance = sprite.getFirstInstance();
      }
      
      if (!instance) {
        console.log(`      ❌ Не удалось получить экземпляр`);
        return false;
      }
      
      if (instance.opacity !== undefined) {
        instance.opacity = isVisible ? 100 : 0;
        console.log(`      ✅ Использован opacity = ${isVisible ? 100 : 0}`);
        return true;
      }
      
      if (instance.setOpacity && typeof instance.setOpacity === 'function') {
        instance.setOpacity(isVisible ? 100 : 0);
        console.log(`      ✅ Использован setOpacity(${isVisible ? 100 : 0})`);
        return true;
      }
      
      if (instance.alpha !== undefined) {
        instance.alpha = isVisible ? 1 : 0;
        console.log(`      ✅ Использован alpha = ${isVisible ? 1 : 0}`);
        return true;
      }
      
      console.log(`      ❌ Не найден способ управления видимостью`);
      return false;
      
    } catch (e) {
      console.log(`   ❌ Ошибка настройки спрайта ${spriteName}:`, e.message);
      return false;
    }
  }
  
  function setElementVisible(objName, isVisible) {
    try {
      const obj = runtime.objects[objName];
      if (!obj) {
        console.log(`   ❌ ${objName}: объект не найден`);
        return false;
      }
      
      console.log(`   📝 Настройка ${objName}: ${isVisible ? 'видимый' : 'скрытый'}`);
      
      let success = false;
      
      if (obj.setVisible && typeof obj.setVisible === 'function') {
        obj.setVisible(isVisible);
        console.log(`      ✅ Использован setVisible(${isVisible})`);
        success = true;
      }
      
      if (obj.visible !== undefined) {
        obj.visible = isVisible;
        console.log(`      ✅ Использован visible = ${isVisible}`);
        success = true;
      }
      
      let instance = obj;
      if (obj.getFirstInstance && typeof obj.getFirstInstance === 'function') {
        instance = obj.getFirstInstance();
        if (instance && instance.visible !== undefined) {
          instance.visible = isVisible;
          console.log(`      ✅ Использован instance.visible = ${isVisible}`);
          success = true;
        }
      }
      
      if (obj.setOpacity && typeof obj.setOpacity === 'function') {
        obj.setOpacity(isVisible ? 100 : 0);
        console.log(`      ✅ Использован setOpacity(${isVisible ? 100 : 0})`);
      } else if (obj.opacity !== undefined) {
        obj.opacity = isVisible ? 100 : 0;
        console.log(`      ✅ Использован opacity = ${isVisible ? 100 : 0}`);
      }
      
      return success;
      
    } catch (err) {
      console.log(`   ❌ Ошибка настройки ${objName}:`, err.message);
      return false;
    }
  }
  
  function updateTextField(objName, text) {
    try {
      const objType = runtime.objects[objName];
      if (!objType) {
        if (objName === "txtPlayer2Name2") {
          for (const name in runtime.objects) {
            const type = runtime.objects[name];
            if (type.instances) {
              const insts = type.instances();
              for (const inst of insts) {
                if (inst.tags && inst.tags.includes("winnerName")) {
                  writeToInstance(inst, text);
                  return true;
                }
              }
            }
          }
        }
        return false;
      }

      const instances = objType.instances();
      let found = false;
      for (const inst of instances) {
        writeToInstance(inst, text);
        found = true;
      }
      return found;
    } catch (err) {
      console.log(`💥 Ошибка в updateTextField для ${objName}:`, err.message);
      return false;
    }
  }
  
  function writeToInstance(inst, text) {
    if (inst.setText) inst.setText(text);
    else if (inst.text !== undefined) inst.text = text;
    
    if (inst.instVars && inst.instVars.playername !== undefined) {
      inst.instVars.playername = text;
    }
    
    inst.visible = true;
    if (inst.opacity !== undefined) inst.opacity = 100;
  }
  
  // ==================== 4. СИСТЕМА ЧАТА ====================
  function startChatPolling() {
    console.log("💬 Запускаю чат лидерборда...");
    
    if (chatPollInterval) clearInterval(chatPollInterval);
    loadLast5Messages();
    chatPollInterval = setInterval(loadNewChatMessages, 2000);
  }
  
  async function loadLast5Messages() {
    const lobby = runtime.globalVars.currentLobby;
    if (!lobby) return;

    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/chat_messages?` +
        `lobby_id=eq.${lobby}&` +
        `order=id.desc&` +
        `limit=5`,
        { headers: getAuthHeaders() }
      );
      
      if (!response.ok) return;
      const messages = (await response.json()).reverse();
      
      for (const msg of messages) {
        if (msg.lobby_id !== lobby) continue;
        if (msg.id > lastChatMessageId) lastChatMessageId = msg.id;
        
        const time = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const prefix = msg.player_id === "system" ? "[Система]" : `[${msg.nickname}]`;
        addMessageToBuffer(`[${time}] ${prefix} ${msg.clean_message}\n`);
      }
      console.log("📨 Загружено 5 сообщений ТОЛЬКО для: " + lobby);
    } catch (err) {}
  }
  
  async function loadNewChatMessages() {
    const lobby = runtime.globalVars.currentLobby;
    if (!lobby) return;

    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/chat_messages?` +
        `lobby_id=eq.${lobby}&` +
        `id=gt.${lastChatMessageId}&` +
        `order=id.asc&` +
        `limit=10`,
        { headers: getAuthHeaders() }
      );
      
      if (!response.ok) return;
      const messages = await response.json();
      
      for (const msg of messages) {
        if (msg.lobby_id !== lobby) continue;
        if (msg.id > lastChatMessageId) lastChatMessageId = msg.id;
        
        const time = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const prefix = msg.player_id === "system" ? "[Система]" : `[${msg.nickname}]`;
        addMessageToBuffer(`[${time}] ${prefix} ${msg.clean_message}\n`);
      }
    } catch (err) {}
  }
  
  function addMessageToBuffer(messageText) {
    if (!runtime || !runtime.globalVars) return;
    runtime.globalVars.supabaseChatBuffer += messageText;
    
    if (runtime.callFunction) {
      try {
        runtime.callFunction("ProcessSupabaseChat");
      } catch (err) {
        try {
          runtime.callFunction("ShowChatMessage", messageText);
        } catch (err2) {}
      }
    }
  }
  
  window.sendLeaderboardChat = async function(message) {
    if (!message || message.trim() === "") return;
    const cleanMessage = message.trim();
    
    try {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      addMessageToBuffer(`[${time}] [${myNickname || "Player"}] ${cleanMessage}\n`);
      
      await fetch(`${SUPABASE_URL}/rest/v1/chat_messages`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          lobby_id: "global_leaderboard",
          player_id: myPlayerId,
          nickname: myNickname || "Player",
          clean_message: cleanMessage,
          timestamp: new Date().toISOString(),
          user_id: window.supabaseUserId || null
        })
      });
      console.log("✅ Сообщение отправлено на сервер");
    } catch (err) {
      console.log("💥 Ошибка отправки:", err.message);
    }
  };
  
  // ==================== 5. КНОПКИ "ИГРАТЬ ЗАНОВО" ====================
  function setupPlayAgainButtons() {
    console.log("🔧 Настраиваю кнопки 'Играть заново'...");
    const buttonNames = ['igranzanovo', 'igranzanovo2'];
    
    buttonNames.forEach(buttonName => {
      const button = runtime.objects[buttonName];
      if (button) {
        console.log(`✅ Найдена кнопка: ${buttonName}`);
        button.addEventListener("click", () => handlePlayAgainClick());
        setupTapHandler(buttonName);
      } else {
        console.log(`❌ Кнопка ${buttonName} не найдена`);
      }
    });
  }
  
  function setupTapHandler(buttonName) {
    const touchPlugin = runtime.objects.Тач;
    if (!touchPlugin) return;
    
    touchPlugin.addEventListener("tap", function(event) {
      if (event.target === buttonName || event.target.name === buttonName) {
        console.log(`👆 Тап по кнопке '${buttonName}' через плагин Тач`);
        handlePlayAgainClick();
      }
    });
  }
  
  function handlePlayAgainClick() {
    console.log("🚀 Обработка клика 'Играть заново'...");
    
    if (runtime.globalVars) {
      runtime.globalVars.posleshadow = 1;
      runtime.globalVars.knopanazhatanaten = 1;
      console.log("✅ Установлены переменные: posleshadow=1, knopanazhatanaten=1");
    }
    
    if (runtime.callFunction) {
      try {
        runtime.callFunction("goToObshiy7");
        console.log("✅ Вызвана функция goToObshiy7");
      } catch (e) {
        try {
          runtime.callFunction("GoToObshiy7");
          console.log("✅ Вызвана функция GoToObshiy7");
        } catch (e2) {
          try {
            runtime.callFunction("go-to-layout", "Obshiy7");
            console.log("✅ Вызван go-to-layout для Obshiy7");
          } catch (e3) {
            console.log("❌ Все способы перехода не сработали");
          }
        }
      }
    }
  }
  
  // ==================== 6. ОЧИСТКА ====================
  function cleanup() {
    console.log("🧹 Очищаю лидерборд...");
    if (chatPollInterval) {
      clearInterval(chatPollInterval);
      chatPollInterval = null;
    }
  }
  
  // ==================== 7. ГЛОБАЛЬНЫЕ ФУНКЦИИ ДЛЯ ОТЛАДКИ ====================
  window.LeaderboardSystem = {
    reload: () => loadFinalLeaderboard(),
    testVisibility: function() {
      console.log("👁️ ТЕСТ ВИДИМОСТИ ОБЪЕКТОВ:");
      for (let i = 1; i <= 7; i++) {
        const nameField = runtime.objects[`txtPlayer${i}Name`];
        const scoreField = runtime.objects[`txtPlayer${i}Score`];
        
        if (nameField) {
          let instance = nameField.getFirstInstance ? nameField.getFirstInstance() : nameField;
          console.log(`   txtPlayer${i}Name: visible=${instance?.visible}, text="${instance?.text}"`);
        }
        if (scoreField) {
          let instance = scoreField.getFirstInstance ? scoreField.getFirstInstance() : scoreField;
          console.log(`   txtPlayer${i}Score: visible=${instance?.visible}, text="${instance?.text}"`);
        }
      }
      for (let i = 14; i <= 20; i++) {
        const sprite = runtime.objects[`Спрайт${i}`];
        if (sprite) {
          let instance = sprite.getFirstInstance ? sprite.getFirstInstance() : sprite;
          console.log(`   Спрайт${i}: visible=${instance?.visible}, opacity=${instance?.opacity}`);
        }
      }
    },
    showAll: function() {
      console.log("✨ ПРИНУДИТЕЛЬНО ПОКАЗЫВАЮ ВСЕ:");
      for (let i = 1; i <= 7; i++) {
        setElementVisible(`txtPlayer${i}Name`, true);
        setElementVisible(`txtPlayer${i}Score`, true);
        updateTextField(`txtPlayer${i}Name`, `Игрок ${i}`);
        updateTextField(`txtPlayer${i}Score`, `${i * 1000}`);
      }
      for (let i = 1; i <= 7; i++) setSpriteVisible(i, true);
    },
    hideAll: () => hideAllLeaderboardElements(),
    sendChat: (message) => window.sendLeaderboardChat(message),
    playAgain: () => handlePlayAgainClick(),
    cleanup: () => cleanup(),
    debug: () => debugAllObjects()
  };
  
  // ==================== 8. АВТОМАТИЧЕСКИЙ ЗАПУСК ====================
  setTimeout(initLeaderboard, 1000);
  
  window.addEventListener('beforeunload', cleanup);
  window.addEventListener('pagehide', cleanup);
  
  console.log("=".repeat(60));
  console.log("🏆 ЛИДЕРБОРД С ОТЛАДКОЙ ГОТОВ!");
  console.log("=".repeat(60));
  console.log("🔄 Перезагрузка: LeaderboardSystem.reload()");
  console.log("👁️ Тест видимости: LeaderboardSystem.testVisibility()");
  console.log("✨ Показать все: LeaderboardSystem.showAll()");
  console.log("🌑 Скрыть все: LeaderboardSystem.hideAll()");
  console.log("💬 Чат: LeaderboardSystem.sendChat('текст')");
  console.log("🎮 Играть: LeaderboardSystem.playAgain()");
  console.log("🧹 Очистка: LeaderboardSystem.cleanup()");
  console.log("🔍 Отладка: LeaderboardSystem.debug()");
  console.log("=".repeat(60));
  
})();
	},

	async Gameover2_Event85_Act1(runtime, localVars)
	{
		setTimeout(() => {
		    document.querySelectorAll("div, iframe, ins").forEach(el => {
		        const style = window.getComputedStyle(el);
		        const zIndex = parseInt(style.zIndex) || 0;
		        // Если элемент на переднем плане и не относится к C3
		        if (zIndex > 5 && !el.id.includes("c3") && !el.id.includes("yandex")) {
		             console.warn("⚠️ УБИВАЮ БЛОКИРОВКУ КЛИКОВ:", el);
		             // Делаем элемент прозрачным для кликов, но не удаляем (чтобы SDK не паниковало)
		             el.style.pointerEvents = 'none'; 
		             el.style.display = 'none'; // Попробуем еще и скрыть с глаз
		        }
		    });
		}, 1500); // 1.5 секунды — даем Яндексу время всё подгрузить
	},

	async Obshiy6_Event2_Act52(runtime, localVars)
	{
// 🔥 ЯДЕРНЫЙ СБРОС ТЕТРИСА - УБИВАЕТ ВСЁ
(function() {
  console.log("💣 ЗАПУСКАЮ ЯДЕРНЫЙ СБРОС ТЕТРИСА...");
  
  const SUPABASE_URL = "https://lebmkbapqahnahjeycvd.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
  
  // 🔥 1. СОЗДАЕМ ФЛАГ ЯДЕРНОГО СБРОСА
  window.__TETRIS_NUKED__ = true;
  
  // 🔥 2. ОСТАНАВЛИВАЕМ ВСЕ ИНТЕРВАЛЫ НА ВСЕХ УРОВНЯХ
  console.log("🛑 Убиваю все интервалы...");
  
  // Получаем ID ВСЕХ интервалов
  const intervalIds = [];
  for (let i = 1; i < 9999; i++) {
    intervalIds.push(i);
  }
  
  // Очищаем ВСЕ возможные интервалы
  intervalIds.forEach(id => {
    try {
      clearInterval(id);
      clearTimeout(id);
    } catch(e) {}
  });
  
  // Очищаем известные интервалы
  const knownIntervals = [
    'updateInterval', 'tetrisUpdateInterval', 'pingInterval',
    'refreshInterval', 'dataInterval', 'lobbyInterval'
  ];
  
  knownIntervals.forEach(name => {
    if (window[name]) {
      clearInterval(window[name]);
      window[name] = null;
    }
  });
  
  // 🔥 3. УДАЛЯЕМ ВСЕ ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ТЕТРИСА
  console.log("🧹 Стираю все переменные тетриса...");
  
  const tetrisVars = [
    // Основные переменные
    'myPlayerId', 'myNickname', 'currentLobby', 'lastPingTime',
    // Системы
    'TetrisSystem', 'SendTetrisScore', 'SendPlayerDead', 'SendPlayerLeft',
    'SendPlayerScore', 'TetrisMultiplayer',
    // Интервалы
    'updateInterval', 'tetrisUpdateInterval', 'pingInterval',
    // Вспомогательные
    'playersData', 'lobbyPlayers', 'sortedPlayers', 'topPlayers'
  ];
  
  tetrisVars.forEach(varName => {
    try {
      window[varName] = null;
      delete window[varName];
    } catch(e) {}
  });
  
  // 🔥 4. ЗАМЕНЯЕМ ВСЕ ФУНКЦИИ НА ПУСТЫЕ
  console.log("🔄 Заменяю функции на заглушки...");
  
  // Создаем заглушки для всех функций
  const stubFunctions = [
    'SendTetrisScore', 'SendPlayerDead', 'SendPlayerLeft',
    'TetrisSystem.sendScore', 'TetrisSystem.refresh', 
    'TetrisSystem.finish', 'TetrisSystem.markAsFinished',
    'TetrisSystem.markAsLeft', 'TetrisSystem.rejoinGame'
  ];
  
  // Заменяем функции
  window.SendTetrisScore = function() { 
    console.log("⚠️ Система тетриса отключена (ядерный сброс)"); 
  };
  window.SendPlayerDead = function() { 
    console.log("⚠️ Система тетриса отключена (ядерный сброс)"); 
  };
  window.SendPlayerLeft = function() { 
    console.log("⚠️ Система тетриса отключена (ядерный сброс)"); 
  };
  
  // Удаляем TetrisSystem если есть
  if (window.TetrisSystem) {
    window.TetrisSystem = {
      sendScore: function() { console.log("⚠️ Система отключена"); },
      refresh: function() { console.log("⚠️ Система отключена"); },
      finish: function() { console.log("⚠️ Система отключена"); }
    };
  }
  
  // 🔥 5. ОТПРАВЛЯЕМ ФИНАЛЬНЫЙ ЗАПРОС НА СЕРВЕР
  console.log("📡 Отправляю финальный запрос на сервер...");
  
  try {
    const playerId = runtime && runtime.globalVars ? runtime.globalVars.myPlayerId : null;
    
    if (playerId) {
      // 🔥 ФИНАЛЬНЫЙ СБРОС НА СЕРВЕРЕ (без ожидания ответа)
      fetch(`${SUPABASE_URL}/rest/v1/players?player_id=eq.${playerId}`, {
        method: "PATCH",
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          status: "vihappizd",
          lobby_id: null,
          score: 0,
          last_ping: new Date().toISOString()
        })
      })
      .catch(() => {}); // Игнорируем все ошибки
      
      console.log("✅ Запрос на сброс отправлен (не жду ответа)");
    }
  } catch (e) {
    // Игнорируем все ошибки при отправке
  }
  
  // 🔥 6. ОЧИЩАЕМ ЛОКАЛЬНЫЙ UI (ОДИН РАЗ!)
  console.log("🎨 Очищаю UI (один раз)...");
  
  // Используем requestAnimationFrame для однократного выполнения
  requestAnimationFrame(() => {
    try {
      // Очищаем только если объекты существуют
      for (let i = 1; i <= 7; i++) {
        // Имя игрока
        try {
          const nameObj = runtime.objects[`txtPlayer${i}Name`];
          if (nameObj) {
            const instance = nameObj.getFirstInstance ? nameObj.getFirstInstance() : nameObj;
            if (instance && instance.text !== undefined) {
              instance.text = "";
            }
          }
        } catch(e) {}
        
        // Очки
        try {
          const scoreObj = runtime.objects[`txtPlayer${i}Score`];
          if (scoreObj) {
            const instance = scoreObj.getFirstInstance ? scoreObj.getFirstInstance() : scoreObj;
            if (instance && instance.text !== undefined) {
              instance.text = "0";
            }
          }
        } catch(e) {}
      }
      
      // Очищаем массив если есть
      try {
        if (runtime.objects && runtime.objects.Массив) {
          const arrayObj = runtime.objects.Массив;
          for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 5; x++) {
              try { arrayObj.setAt(x, y, ""); } catch(e) {}
            }
          }
        }
      } catch(e) {}
      
    } catch (e) {
      // Игнорируем ошибки UI
    }
  });
  
  // 🔥 7. УДАЛЯЕМ ВСЕ ОБРАБОТЧИКИ СОБЫТИЙ
  console.log("🎧 Снимаю все обработчики событий...");
  
  // Создаем пустой обработчик для замены
  const emptyHandler = function() {};
  
  // Заменяем обработчики
  window.onbeforeunload = emptyHandler;
  window.onunload = emptyHandler;
  window.onpagehide = emptyHandler;
  
  // 🔥 8. ФИНАЛЬНАЯ ОЧИСТКА ПАМЯТИ
  console.log("🧠 Выполняю финальную очистку памяти...");
  
  setTimeout(() => {
    // Удаляем остатки
    delete window.__TETRIS_NUKED__;
    
    // Очищаем глобальные переменные Construct
    if (window.runtime && window.runtime.globalVars) {
      try {
        window.runtime.globalVars.myPlayerId = "";
        window.runtime.globalVars.currentLobby = "";
      } catch(e) {}
    }
    
    console.log("💀 ЯДЕРНЫЙ СБРОС ВЫПОЛНЕН!");
    console.log("🔥 Все системы тетриса уничтожены");
    console.log("🔄 Теперь можно запускать игру заново");
    
    // 🔥 ДОБАВЛЯЕМ ЗАЩИТУ: если кто-то попытается запустить старый код
    setTimeout(() => {
      // Убиваем ВСЕ интервалы еще раз на всякий случай
      for (let i = 0; i < 100; i++) {
        try {
          clearInterval(i);
          clearTimeout(i);
        } catch(e) {}
      }
    }, 1000);
    
  }, 100);
  
})();
	},

	async Tutu2_Event28_Act1(runtime, localVars)
	{
		(async () => {
		  const log = (msg) => {
		    const textObj = runtime.objects["среднерога16отладка"].getFirstInstance();
		    if (textObj) textObj.text += "\n" + msg;
		    else console.log("[Log]", msg);
		  };
		
		  const myId = parseInt(runtime.globalVars.playerNumericId);
		  const myNick = runtime.globalVars.nick;
		  const played = JSON.parse(localStorage.getItem("playedSessions") || "[]");
		
		  let opponent = null;
		
		  try {
		    const response = await fetch("https://lebmkbapqahnahjeycvd.supabase.co/rest/v1/matches", {
		      method: "GET",
		      headers: {
		        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU",
		        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU",
		        "Content-Type": "application/json"
		      }
		    });
		
		    const data = await response.json();
		    log("✅ Получено записей: " + data.length);
		
		    for (const row of data) {
		      const opId = parseInt(row.idishnik);
		      const opNick = row.nickname;
		
		      if (opId !== myId && opNick !== myNick && !played.includes(opId)) {
		        opponent = row;
		        break;
		      }
		    }
		
		    if (opponent) {
		      log("🎯 Найден соперник: " + opponent.nickname + " (id " + opponent.idishnik + ")");
		      runtime.globalVars.OpponentId = parseInt(opponent.idishnik);
		      runtime.globalVars.OpponentName = opponent.nickname;
		      runtime.globalVars.OpponentScoreJSON = opponent.score;
		
		      try {
		        const parsed = JSON.parse(opponent.score);
		
		        if (parsed.c2array && Array.isArray(parsed.data)) {
		          runtime.globalVars.ResizeArrayX = parsed.size[0];
		          runtime.globalVars.ResizeArrayY = parsed.size[1];
		          runtime.globalVars.ResizeArrayZ = parsed.size[2];
		          runtime.globalVars.FlagResizeArray = 1;
		
		          log("📦 OpponentScoreJSON загружен, массив готов к вставке. Размер: " +
		              parsed.size[0] + "×" + parsed.size[1] + "×" + parsed.size[2]);
		
		          // ⬇️ ВСТАВЛЯЕМ ЗДЕСЬ: распарсим "очки_секунды" в отдельный массив
		          const rawData = parsed.data;
		          const splitArray = rawData.map(entry => {
		            const [score, sec] = entry[0][0].split("_").map(Number);
		            return { score, sec };
		          });
		
		          // Сохраняем в глобал
		          runtime.globalVars.ParsedOpponentArray = JSON.stringify(splitArray);
		          log("📊 Распаршенный массив оппонента сохранён. Записей: " + splitArray.length);
		        } else {
		          log("⚠️ OpponentScoreJSON в неверном формате");
		        }
		
		      } catch (e) {
		        log("💥 Ошибка парсинга OpponentScoreJSON: " + e.message);
		      }
		
		      played.push(parseInt(opponent.idishnik));
		      localStorage.setItem("playedSessions", JSON.stringify(played));
		      // ⛔️ shadowOpponentFound НЕ трогаем — ты его сам выставляешь позже
		    } else {
		      log("🕓 Соперник не найден, добавляю себя в ожидание...");
		      runtime.globalVars.shadowOpponentFound = 0;
		      runtime.callFunction("POST_Себя_В_Supabase");
		    }
		
		  } catch (err) {
		    log("💥 Ошибка подключения: " + (err?.message || err));
		    runtime.globalVars.shadowOpponentFound = 0;
		  }
		})();
	},

	async Tetrisshadowevent_Event3_Act3(runtime, localVars)
	{
		ysdk.multiplayer.sessions.commit({
		  score: runtime.globalVars.sravnaochi  // Вставь сюда твою переменную Construct с очками
		});
	},

	async Tetrisshadowevent_Event4_Act1(runtime, localVars)
	{
		ysdk.on('multiplayer-sessions-transaction', ({ opponentId, transactions }) => {
		  transactions.forEach(transaction => {
		    const score = transaction.payload.score;
		    const nick = transaction.payload.nick;  // Добавляем получение ника из payload
		
		    runtime.globalVars.opponentScore = score;   // Правильно записываем очки
		    runtime.globalVars.opponentNick = nick;     // Сохраняем ник в переменную Construct
		  });
		});
		
		ysdk.on('multiplayer-sessions-finish', (opponentId) => {
		  runtime.globalVars.opponentFinished = 1;      // Это оставляй — реакция на завершение игры соперника
		});
	},

	async Tetrisshadowevent_Event5_Act1(runtime, localVars)
	{
		const ysdk = await YaGames.init();
		
		// Сообщаем о старте геймплея.
		ysdk.features.GameplayAPI?.start()
		
		// Игровой процесс активен.
	},

	async Tetrisshadowevent_Event113_Act1(runtime, localVars)
	{
		ysdk.multiplayer.sessions.commit({
		  score: runtime.globalVars.sravnaochi,     // Очки
		  nick: runtime.globalVars.nick             // Ник
		});
	},

	async Tetrisshadowevent_Event113_Act2(runtime, localVars)
	{
		const ysdk = await YaGames.init();
		
		
		ysdk.features.GameplayAPI?.stop()
	},

	async Tetrisshadowevent_Event114_Act1(runtime, localVars)
	{
		ysdk.multiplayer.sessions.commit({
		  score: runtime.globalVars.sravnaochi,     // Очки
		  nick: runtime.globalVars.nick             // Ник
		});
	},

	async Tetrisshadowevent_Event114_Act2(runtime, localVars)
	{
		const ysdk = await YaGames.init();
		
		
		ysdk.features.GameplayAPI?.stop()
	},

	async Tetrisshadowevent_Event115_Act1(runtime, localVars)
	{
		ysdk.multiplayer.sessions.commit({
		  score: runtime.globalVars.sravnaochi,     // Очки
		  nick: runtime.globalVars.nick             // Ник
		});
	},

	async Tetrisshadowevent_Event115_Act2(runtime, localVars)
	{
		const ysdk = await YaGames.init();
		
		
		ysdk.features.GameplayAPI?.stop()
	},

	async Tetrisshadowevent_Event116_Act1(runtime, localVars)
	{
		ysdk.multiplayer.sessions.commit({
		  score: runtime.globalVars.sravnaochi,     // Очки
		  nick: runtime.globalVars.nick             // Ник
		});
	},

	async Tetrisshadowevent_Event116_Act2(runtime, localVars)
	{
		const ysdk = await YaGames.init();
		
		
		ysdk.features.GameplayAPI?.stop()
	},

	async Tetrisshadowevent_Event117_Act1(runtime, localVars)
	{
		ysdk.multiplayer.sessions.commit({
		  score: runtime.globalVars.sravnaochi,     // Очки
		  nick: runtime.globalVars.nick             // Ник
		});
	},

	async Tetrisshadowevent_Event117_Act2(runtime, localVars)
	{
		const ysdk = await YaGames.init();
		
		
		ysdk.features.GameplayAPI?.stop()
	},

	async Tetrisshadowevent_Event118_Act1(runtime, localVars)
	{
		ysdk.multiplayer.sessions.commit({
		  score: runtime.globalVars.sravnaochi,     // Очки
		  nick: runtime.globalVars.nick             // Ник
		});
	},

	async Tetrisshadowevent_Event118_Act2(runtime, localVars)
	{
		const ysdk = await YaGames.init();
		
		
		ysdk.features.GameplayAPI?.stop()
	},

	async Tetrisshadoweventreal_Event21_Act1(runtime, localVars)
	{
		
		// Сообщаем о старте геймплея.
		window.ysdk.features.GameplayAPI?.start()
		
		// Игровой процесс активен.
	},

	async Tetrisshadoweventreal_Event22_Act1(runtime, localVars)
	{
		
		// Сообщаем о старте геймплея.
		window.ysdk.features.GameplayAPI?.start()
		
		// Игровой процесс активен.
	},

	async Tetrisshadoweventreal_Event263_Act2(runtime, localVars)
	{
		window.ysdk.features.GameplayAPI?.stop()
	},

	async Tetrisshadoweventreal_Event296_Act3(runtime, localVars)
	{
		window.ysdk.multiplayer.sessions.commit({
		    score: runtime.globalVars.sravnaochi
		});
	},

	async Gameover3_Event21_Act7(runtime, localVars)
	{
		const text = runtime.objects.chatpisa.getFirstInstance().text;
		const url = "https://functions.yandexcloud.net/d4e4d3k1996t2mtjjb8j?endpoint=" + encodeURIComponent("https://parseapi.back4app.com/functions/checkMessage") + "&_method=POST&_body=" + encodeURIComponent('{"text":"' + text + '"}');
		
		fetch(url, { method: 'GET' })
		  .then(r => r.json())
		  .then(async data => {
		    console.log('📥 Back4App ответ:', data);
		    const cleanText = data.result.cleanText;
		    runtime.globalVars.lastCleanText = cleanText;
		    
		    if (!cleanText) { console.log('❌ Нет текста для отправки'); return; }
		    
		    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlYm1rYmFwcWFobmFoamV5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODk1OTMsImV4cCI6MjA2OTY2NTU5M30.XpkbQSxJeM-JlrRoBPypVUKPOVeR3kprNt0DgX-FJQU";
		    const headers = {
		      "apikey": SUPABASE_KEY,
		      "Authorization": "Bearer " + (window.supabaseAuthToken || SUPABASE_KEY),
		      "Content-Type": "application/json",
		      "Prefer": "return=minimal"
		    };
		    
		    try {
		      const response = await fetch("https://lebmkbapqahnahjeycvd.supabase.co/rest/v1/chat_messages", {
		        method: "POST", headers: headers,
		        body: JSON.stringify({
		          lobby_id: runtime.globalVars.currentLobby,
		          player_id: runtime.globalVars.myPlayerId,
		          nickname: runtime.globalVars.myNickname,
		          clean_message: cleanText,
		          timestamp: new Date().toISOString(),
		          user_id: window.supabaseUserId || null
		        })
		      });
		      
		      if (response.ok) {
		        console.log('✅ Сообщение отправлено в Supabase');
		        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		        runtime.callFunction("ShowChatMessage", "[" + time + "] [" + runtime.globalVars.myNickname + "] " + cleanText);
		      } else {
		        const error = await response.text();
		        console.log('❌ Ошибка Supabase:', error);
		        runtime.callFunction("ShowChatMessage", "[System] Ошибка отправки сообщения");
		      }
		    } catch(err) {
		      console.log('💥 Ошибка сети:', err);
		      runtime.callFunction("ShowChatMessage", "[System] Ошибка сети");
		    }
		  })
		  .catch(err => console.log('❌ Ошибка Back4App:', err));
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

