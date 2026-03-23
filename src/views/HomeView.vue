<template>
  <div class="gdc-container h-full flex flex-col justify-center items-center" :class="initialScreenVisible ? '' : 'bg-color-animation'">
    <div v-if="initialScreenVisible" class="bg-black w-full h-full fixed top-0 left-0 flex items-center justify-center z-20"
         @click="hideInitialScreen">
      <p class="xs:hover:italic text-white cursor-pointer text-enter-animation p-10">ENTER</p>
    </div>

    <template v-else>
      <div class="w-full sm:w-[580px]">
        <div class="text-div">
          <div class="hidden sm:block" v-html="desktopText1"></div>
          <div class="sm:hidden whitespace-nowrap" v-html="mobileText1"></div>
        </div>
        <gdc-gif/>
        <div class="text-div">
          <div class="hidden sm:block" v-html="desktopText2"></div>
          <div class="sm:hidden whitespace-nowrap" v-html="mobileText2"></div>
        </div>
      </div>

      <audio class="hidden" ref="audio" controls loop :muted="!sound">
        <source :src="AudioFile" type="audio/mpeg">
      </audio>
    </template>
  </div>
</template>

<script setup lang="ts">
import GdcGif from "@/components/GdcGif.vue";
import AudioFile from "@/assets/audio/audio.mp3";
</script>

<script lang="ts">
export default {
  name: 'HomeView',
  data() {
    return {
      initialScreenVisible: true,
      sound: true,
      soundTexts: {
        desktopOn: `<span class="opacity-0 on">-</span><span class="italic md:not-italic md:hover:italic cursor-pointer">sound on</span><span class="opacity-0">-</span>-`,
        desktopOff: `<span class="opacity-0 off">-</span><span class="italic md:not-italic md:hover:italic cursor-pointer">sound off</span><span class="opacity-0">-</span>`,
        mobileOn: `-<span class="opacity-0">-</span><span class="italic md:not-italic md:hover:italic cursor-pointer">sound on</span>`,
        mobileOff: `<span class="opacity-0">-</span><span class="italic md:not-italic md:hover:italic cursor-pointer">sound off</span>`,
      },
      desktopText1:
        "-------------------------------------------$sound------------------------------------------------------------" +
        "I'm building this page. Come back soon. -----------------------------------------------------------------------------------------------------------------------------------" +
        "AND DON'T WORRY. ----------------------------------------" +
        "I'M A LEGIT HUMAN BEING THAT DID STUFF IN REAL LIFE. ----------------------------------------------------------------------------------------------------------------------",
      desktopText2: "------------------------------------------------------------------------------------------------------------------" +
        "YOU CAN SEE SOME STUFF ON -------------------------------" +
        "---------------------- $igLink ------------------------" +
        "---------------------------------------------------------" +
        "---------------------------------------------------------" +
        "-------------- Or you can check me out on $linkedInLink ----------------------------- If you're serious like that. -------------------------------------------------------------",
      mobileText1:
        "---------------------------------$sound<br/>" +
        "-------------------------------------------<br/>" +
        "-------------------------------------------<br/>" +
        "-------------------------------------------<br/>" +
        "I'M BUILDING THIS PAGE. COME BACK SOON. ---<br/>" +
        "-------------------------------------------<br/>" +
        "-------------------------------------------<br/>" +
        "AND DON'T WORRY. I'M A LEGIT HUMAN BEING --<br/>" +
        "THAT DID STUFF IN REAL LIFE.---------------<br/>" +
        "-------------------------------------------<br/>" +
        "-------------------------------------------<br/>",
      mobileText2: "-------------------------------------------<br/>" +
        "-------------------------------------------<br/>" +
        "YOU CAN SEE SOME STUFF ON -----------------<br/>" +
        "---------------------- $igLink ----------<br/>" +
        "-------------------------------------------<br/>" +
        "-------------------------------------------<br/>" +
        "OR YOU CAN CHECK ME OUT ON $linkedInLink -------<br/>" +
        "--------- IF YOU'RE SERIOUS LIKE THAT. ----<br/>-------------------------------------------<br/>",
    }
  },
  mounted() {
    const igLink = '<a class="link" href=\'https://www.instagram.com/tresbien.agency/\' target=\'_blank\'>instagram</a>'
    const linkedInLink = '<a class="link" href=\'https://www.linkedin.com/in/guillaumedchampeau/\' target=\'_blank\'>linkedin</a>'
    const sound = `<span class="sound">${this.soundText()}</span>`
    this.desktopText1 = this.desktopText1.replaceAll(' ', '<span class="opacity-0">-</span>').replace('$sound', sound)
    this.desktopText2 = this.desktopText2.replaceAll(' ', '<span class="opacity-0">-</span>').replace('$igLink', igLink).replace('$linkedInLink', linkedInLink)
    this.mobileText1 = this.mobileText1.replaceAll(' ', '<span class="opacity-0">-</span>').replace('$sound', sound)
    this.mobileText2 = this.mobileText2.replaceAll(' ', '<span class="opacity-0">-</span>').replace('$igLink', igLink).replace('$linkedInLink', linkedInLink)

    window.addEventListener('resize', this.updateSoundText)
    const tryToPlay = setInterval(() => {
      this.$refs.audio?.play()
        .then(() => {
          clearInterval(tryToPlay);
        })
        .catch(error => {
          console.info('User has not interacted with document yet.');
        });
    }, 1000);
  },
  methods: {
    soundText() {
      return window.innerWidth > 640 ? this.soundTexts[!this.sound ? 'desktopOn' : 'desktopOff'] : this.soundTexts[!this.sound ? 'mobileOn' : 'mobileOff']
    },
    updateSoundText() {
      let soundTexts = document.getElementsByClassName("sound");
      Array.from(soundTexts).forEach((st) => st.innerHTML = this.soundText());
    },
    hideInitialScreen() {
      this.initialScreenVisible = !this.initialScreenVisible
      this.$nextTick(() => {
        const soundClick = () => {
          this.sound = !this.sound
          this.updateSoundText()
        };

        let soundTexts = document.getElementsByClassName("sound");
        Array.from(soundTexts).forEach((e) => e.addEventListener('click', soundClick));
      })
    }
  }
};

</script>

<style lang="scss">
.text-div {
  @apply uppercase text-[18px];
  letter-spacing: -0.7px;
  line-height: 1.12;
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}

.link {
  @apply italic md:not-italic md:hover:italic;
}

.text-enter-animation {
  animation: text-enter-animation 1s ease;
}

@keyframes text-enter-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.bg-color-animation {
  animation: bg-color-animation 11s ease infinite;
}

@keyframes bg-color-animation {
  0%, 85.6% {
    @apply bg-white;
  }

  85.7% {
    @apply bg-orange;
  }
  86.7% {
    @apply bg-blue;
  }
  87.7% {
    @apply bg-orange;
  }
  88.7% {
    @apply bg-green;
  }
  89.7% {
    @apply bg-orange;
  }
  90.7% {
    @apply bg-white;
  }
  91.7% {
    @apply bg-blue;
  }
  // switch2
  92.7% {
    @apply bg-orange;
  }
  93.7% {
    @apply bg-green;
  }
  94.7% {
    @apply bg-orange;
  }
  95.7% {
    @apply bg-white;
  }
  96.7% {
    @apply bg-blue;
  }
  //switch3
  97.7% {
    @apply bg-orange;
  }
  98.7% {
    @apply bg-green;
  }
  100% {
    @apply bg-orange;
  }
}

@media screen and (max-width: 639px) {
  .text-div {
    //letter-spacing: -0.2vw;
    //font-size: 3.7vw;
    letter-spacing: -0.2vw;
    font-size: 3.74vw;
    line-height: 1.19;
  }
}
</style>

