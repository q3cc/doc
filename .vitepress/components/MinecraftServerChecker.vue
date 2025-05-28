<!-- .vitepress/components/MinecraftServerChecker.vue -->
<template>
  <div>
    <div id="minecraft-server-checker"></div>
    
    <!-- 可选：加载状态提示 -->
    <div v-if="!initialized" class="server-checker-loading">
      <p>正在加载服务器状态...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MinecraftServerChecker',
  data() {
    return {
      initialized: false, // 初始化状态
      servers: [
        { address: "starcity.ink:19132" }, // 默认服务器
        // { address: "另一服务器地址：端口" }
      ]
    }
  },
  mounted() {
    this.loadScript();
  },
  methods: {
    // 加载外部脚本
    loadScript() {
      // 检查脚本是否已加载
      const existingScript = document.querySelector('script[src="https://craftblockht6x.github.io/minecraft-server-checker.js"]');
      
      if (existingScript) {
        // 脚本已存在，直接初始化
        this.initChecker();
      } else {
        // 动态加载脚本
        const script = document.createElement('script');
        script.src = 'https://craftblockht6x.github.io/minecraft-server-checker.js';
        script.onload = () => this.initChecker();
        script.onerror = () => console.error('Failed to load Minecraft server checker script');
        document.head.appendChild(script);
      }
    },
    
    // 初始化服务器检查器
    initChecker() {
      // 等待容器元素渲染完成
      this.$nextTick(() => {
        try {
          initMinecraftServerChecker({
            containerId: 'minecraft-server-checker',
            
            // 服务器列表
            defaultServers: this.servers,
            
            // 显示设置
            displaySettings: {
              motd: true,          // 服务器公告
              version: true,       // 游戏版本
              players: true,       // 玩家数量
              playersList: true,   // 玩家列表
              gamemode: true,      // 游戏模式
              edition: true,       // 版本类型
              software: true,      // 服务器软件
              plugins: true,       // 插件列表
              delay: true,         // 延迟信息
              ping: true,          // ping 值
              protocol: true,      // 协议版本
              map: true,           // 地图信息
              whitelist: true,     // 白名单状态
              serverId: true       // 服务器 ID
            },
            
            // 交互设置
            allowUserInput: false,          // 是否允许用户输入新服务器
            allowServerRemoval: false,      // 是否允许移除服务器
            allowServerSwitch: true,        // 是否允许切换服务器
            refreshInterval: 5000,          // 自动刷新间隔（毫秒）
            showAdvancedOptions: true,      // 显示高级选项
            defaultView: 'list',            // 默认视图：'list' 或 'grid'
            
            // 自定义主题
            theme: {
              cardBackgroundColor: '#2c3e50',
              cardBorderRadius: '8px',
              cardBoxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              textColor: '#ffffff',
              primaryColor: '#3498db',
              secondaryColor: '#95a5a6',
              successColor: '#2ecc71',
              warningColor: '#f39c12',
              errorColor: '#e74c3c',
              onlineIndicatorColor: '#2ecc71',
              offlineIndicatorColor: '#e74c3c',
              gradientStart: 'rgba(44, 62, 80, 0.9)',
              gradientEnd: 'rgba(52, 152, 219, 0.9)'
            },
            
            // 国际化设置
            translations: {
              online: '在线',
              offline: '离线',
              players: '玩家',
              version: '版本',
              motd: '服务器公告',
              ping: '延迟',
              loading: '加载中...',
              refresh: '刷新',
              addServer: '添加服务器',
              serverAddress: '服务器地址',
              invalidAddress: '无效的服务器地址',
              maxPlayers: '最大玩家数',
              software: '服务器软件',
              plugins: '插件',
              gamemode: '游戏模式',
              map: '地图',
              protocol: '协议'
            },
            
            // 高级设置
            apiProviders: [
              {
                name: 'mcapi',
                url: (host, port) => `https://api.mcsrvstat.us/2/${host}:${port}`,
                parser: (data) => ({
                  online: data.online,
                  version: data.version,
                  players: {
                    online: data.players.online,
                    max: data.players.max,
                    list: data.players.list || []
                  },
                  motd: data.motd.clean.join('\n'),
                  latency: data.latency,
                  software: data.server || 'Minecraft Server',
                  protocol: data.protocol
                })
              }
              // 可添加其他 API 提供商
            ],
            
            // 回调函数
            onServerAdded: (server) => {
              console.log('服务器已添加：', server);
              this.servers.push(server);
            },
            onServerRemoved: (server) => {
              console.log('服务器已移除：', server);
              this.servers = this.servers.filter(s => s.address !== server.address);
            },
            onServerStatusUpdated: (server, status) => {
              console.log('服务器状态已更新：', server.address, status);
            },
            onError: (error) => {
              console.error('服务器检查器错误：', error);
            }
          });
          
          this.initialized = true;
        } catch (error) {
          console.error('初始化服务器检查器失败：', error);
        }
      });
    }
  }
}
</script>

<style scoped>
/* 自定义加载状态样式 */
.server-checker-loading {
  padding: 20px;
  text-align: center;
  color: #666;
  font-style: italic;
}

/* 可选：覆盖全局样式 */
::v-deep #minecraft-server-checker {
  margin: 20px 0;
}

::v-deep .server-card {
  transition: all 0.3s ease;
}

::v-deep .server-card:hover {
  transform: translateY(-5px);
}
</style>