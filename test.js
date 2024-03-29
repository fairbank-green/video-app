const youtubePlayer = {
  template: document.getElementById('youtube-player').innerHTML,
  props: {'videoId': String },
  data(){
    return {
      'videoId': this.videoId || null,
      'youtubeCallbackName': 'onYouTubeIframeAPIReady',
      'youtubeExistsFlag':   '$isYoutubeFrameAPIReady'
    }
  },
  computed: {
    youtubeVideoID(){
      if(this.videoId.indexOf(':/') !== -1)
      {
        const catcher = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
        const res = catcher.exec(this.videoId);
        if(res && res[1]){
          return res[1];
        }
      }

      return this.videoId;
    }
  },
  mounted(){
    if(!this.hasYoutubeFrameAPI()){
      this.injectYoutubeFrameAPI();
    }
    this.whenYoutubeAPIReady().then(
      ()    => {
        const player = this.$el.querySelector('.video-placeholder');
        player.id = 'player-'
          + Math.floor(Math.random()*1024)
          + Date.now()
          + Math.floor(Math.random()*1024);

         this.YTPLayer = new YT.Player(player.id, {
              height: '360',
              width: '640',
              videoId: this.youtubeVideoID
         });
      },
      error => console.error(error)
    );
  },
  methods: {
    whenYoutubeAPIReady(){
      const existsFlag = this.youtubeExistsFlag;
      return new Promise(function(resolve, reject){
        let elapsed = 0;
        let intervalHandle;
        let checker = function(){
          elapsed += 48;
          if(!!window[existsFlag]){
            clearTimeout(intervalHandle);
            resolve();
          }
          else{
            if(elapsed <= 15000){
              intervalHandle = setTimeout(checker, 48);
            }
            else{
              reject("timeout");
            }
          }
        };

        setTimeout(checker,48);
      });
    },
    hasYoutubeFrameAPI(){
      if(!this.hasYTFrame)
      {
        this.hasYTFrame = !!(document.getElementsByClassName('.yt-frame-api').length);
      }
      return this.hasYTFrame;
    },

    injectYoutubeFrameAPI(){
      const youtubeExistsFlag   = this.youtubeExistsFlag;
      const youtubeCallbackName = this.youtubeCallbackName;

      window[this.youtubeCallbackName] = window[this.youtubeCallbackName] || function() {
        window[youtubeExistsFlag] = true;
        window[youtubeCallbackName] = null;
        delete window[youtubeCallbackName];
      }

      var tag       = document.createElement('script');
      var first     = document.getElementsByTagName('script')[0];
      tag.src       = "https://www.youtube.com/iframe_api";
      tag.className = "yt-frame-api";
      first.parentNode.insertBefore(tag, first);
    }
  }
};

//installation

const AppComponents = { youtubePlayer };

const App = new Vue({
  el:'#app',
  components: AppComponents
});
