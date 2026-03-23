<template>
  <div class="w-full flex sm:px-[15px] pt-[20px] sm:pt-[34px] pb-[21px] sm:pb-[35px]">
    <div class="slot-icon">
      <logo-animated-icon v-for="icon in leftIcons" :icon="icon"/>
    </div>
    <div class="slot-icon ml-1 mr-1.5 middle">
      <logo-animated-icon v-for="icon in middleIcons" :icon="icon"/>
    </div>
    <div class="slot-icon">
      <logo-animated-icon v-for="icon in rightIcons" :icon="icon"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import GIcon from "@/assets/icons/g.svg";
import DIcon from "@/assets/icons/d.svg";
import CIcon from "@/assets/icons/c.svg";
import GothicDIcon from "@/assets/icons/gothic_d.svg";
import RobotIcon from "@/assets/icons/robot.svg";
import CoffeeIcon from "@/assets/icons/coffee.svg";
import BeerIcon from "@/assets/icons/beer.svg";
import MicIcon from "@/assets/icons/mic.svg";
import SmileIcon from "@/assets/icons/smile.svg";
import EmailIcon from "@/assets/icons/email.svg";
import WatermelonIcon from "@/assets/icons/watermelon.svg";
import DollarIcon from "@/assets/icons/dollar.svg";
import LogoAnimatedIcon from "@/components/LogoAnimatedIcon.vue";

const leftIcons = [
  {
    name: GIcon,
    animation: 'disappear1',
    motionBlur: false,
  },
  {
    name: WatermelonIcon,
    animation: 'bounce10',
    motionBlur: false,
  },
  {
    name: DollarIcon,
    animation: 'switch1',
    motionBlur: false,
  },
]
const middleIcons = [
  {
    name: DIcon,
    animation: 'bounce1'
  },
  {
    name: GothicDIcon,
    animation: 'bounce2'
  },
  {
    name: RobotIcon,
    animation: 'bounce3'
  },
  {
    name: CoffeeIcon,
    animation: 'bounce4'
  },
  {
    name: BeerIcon,
    animation: 'bounce5'
  },
  {
    name: MicIcon,
    animation: 'bounce6'
  },
  {
    name: SmileIcon,
    animation: 'bounce7'
  },
  {
    name: EmailIcon,
    animation: 'bounce8'
  },
  {
    name: WatermelonIcon,
    animation: 'bounce9',
    motionBlur: false,
  },
  {
    name: DollarIcon,
    animation: 'switch2',
    motionBlur: false,
  },
]
const rightIcons = [
  {
    name: CIcon,
    animation: 'disappear2',
    motionBlur: false,
  },
  {
    name: WatermelonIcon,
    animation: 'bounce11',
    motionBlur: false,
  },
  {
    name: DollarIcon,
    animation: 'switch3',
    motionBlur: false,
  },
]
</script>

<style lang="scss">
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.middle {
  position: relative;
  &:before {
    @apply bg-black;
    content: '';
    width: 13.5%;
    padding-top: 13.5%;
    position: absolute;
    bottom: 6px;
    right: -6%;
  }
}

.slot-icon {
  width: calc((100% - 10px) / 3);
  @apply relative pt-[38%];

  img {
    @apply absolute w-full top-0 left-0;
  }
}
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.gdelay-1 {
  -webkit-animation-delay: 3ms !important;
  animation-delay: 3ms !important;
}
.gdelay-2 {
  -webkit-animation-delay: 6ms !important;
  animation-delay: 6ms !important;
}
.gdelay-3 {
  -webkit-animation-delay: 9ms !important;
  animation-delay: 9ms !important;
}
.gdelay-4 {
  -webkit-animation-delay: 12ms !important;
  animation-delay: 12ms !important;
}
.gdelay-5 {
  -webkit-animation-delay: 14ms !important;
  animation-delay: 14ms !important;
}
.gdelay-6 {
  -webkit-animation-delay: 17ms !important;
  animation-delay: 17ms !important;
}
.gdelay-7 {
  -webkit-animation-delay: 20ms !important;
  animation-delay: 20ms !important;
}
.gdelay-8 {
  -webkit-animation-delay: 23ms !important;
  animation-delay: 23ms !important;
}
.gdelay-9 {
  -webkit-animation-delay: 26ms !important;
  animation-delay: 26ms !important;
}
.gdelay-10 {
  -webkit-animation-delay: 29ms !important;
  animation-delay: 29ms !important;
}
.gdelay-11 {
  -webkit-animation-delay: 32ms !important;
  animation-delay: 32ms !important;
}
.gdelay-12 {
  -webkit-animation-delay: 35ms !important;
  animation-delay: 35ms !important;
}
.gdelay-13 {
  -webkit-animation-delay: 38ms !important;
  animation-delay: 38ms !important;
}
.gdelay-14 {
  -webkit-animation-delay: 41ms !important;
  animation-delay: 41ms !important;
}
.gdelay-15 {
  -webkit-animation-delay: 44ms !important;
  animation-delay: 44ms !important;
}

.bounce1 {
  -webkit-animation: bounce1 11s linear infinite;
  animation: bounce1 11s linear infinite;
}
@-webkit-keyframes bounce1 {
  0%, 10.6% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  11% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  12.2% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  12.3%, 100% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    visibility: hidden;
  }
}
@keyframes bounce1 {
  0%, 10.6% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  11% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  12.2% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  12.3%, 100% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    visibility: hidden;
  }
}

.bounce2 {
  -webkit-animation: bounce2 11s infinite;
  animation: bounce2 11s infinite;
}
@-webkit-keyframes bounce2 {
  0%, 12.3% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    visibility: hidden;
  }
  12.4% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
    visibility: visible;
  }
  14% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }

  15% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }

  20% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  20.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}
@keyframes bounce2 {
  0%, 12.3% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    visibility: hidden;
  }
  12.4% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
    visibility: visible;
  }
  14% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }

  15% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }

  20% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  20.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce3 {
  -webkit-animation: bounce3 11s ease infinite;
  animation: bounce3 11s ease infinite;
}
@-webkit-keyframes bounce3 {
  0%, 20.3% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    visibility: hidden;
  }
  22% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }
  23.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  28% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  28.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}
@keyframes bounce3 {
  0%, 20.3% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    visibility: hidden;
  }
  22% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }
  23.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  28% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  28.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce4 {
  -webkit-animation: bounce4 11s ease infinite;
  animation: bounce4 11s ease infinite;
}
@-webkit-keyframes bounce4 {
  0%, 28.3% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    visibility: hidden;
  }
  30% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }
  31.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  36% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  36.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}
@keyframes bounce4 {
  0%, 28.3% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    visibility: hidden;
  }
  30% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }
  31.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  36% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  36.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce5 {
  -webkit-animation: bounce5 11s ease infinite;
  animation: bounce5 11s ease infinite;
}
@-webkit-keyframes bounce5 {
  0%, 36.3% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    visibility: hidden;
  }
  38% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }
  39.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  44% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  44.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}
@keyframes bounce5 {
  0%, 36.3% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    visibility: hidden;
  }
  38% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }
  39.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  44% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  44.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce6 {
  -webkit-animation: bounce6 11s ease infinite;
  animation: bounce6 11s ease infinite;
}
@-webkit-keyframes bounce6 {
  0%, 44.3% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    visibility: hidden;
  }
  46% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }
  47.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  52% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  52.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}
@keyframes bounce6 {
  0%, 44.3% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    visibility: hidden;
  }
  46% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }
  47.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  52% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  52.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce7 {
  -webkit-animation: bounce7 11s ease infinite;
  animation: bounce7 11s ease infinite;
}
@-webkit-keyframes bounce7 {
  0%, 52.3% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    visibility: hidden;
  }
  54% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }
  55.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  60% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  60.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}
@keyframes bounce7 {
  0%, 52.3% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    visibility: hidden;
  }
  54% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }
  55.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  60% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  60.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce8 {
  -webkit-animation: bounce8 11s ease infinite;
  animation: bounce8 11s ease infinite;
}
@-webkit-keyframes bounce8 {
  0%, 60.3% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    visibility: hidden;
  }
  62% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }
  63.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  68% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  68.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}
@keyframes bounce8 {
  0%, 60.3% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    visibility: hidden;
  }
  62% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }
  63.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  68% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  68.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce9 {
  -webkit-animation: bounce9 11s ease infinite;
  animation: bounce9 11s ease infinite;
}
@-webkit-keyframes bounce9 {
  0%, 68.3% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    visibility: hidden;
  }
  70% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }
  71.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  89%, 100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    visibility: hidden;
  }
}
@keyframes bounce9 {
  0%, 68.3% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    visibility: hidden;
  }
  70% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }
  71.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  89%, 100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    visibility: hidden;
  }
}

.disappear1 {
  -webkit-animation: disappear1 11s ease infinite;
  animation: disappear1 11s ease infinite;
}
@-webkit-keyframes disappear1 {
  0% {
    visibility: visible;
  }
  75%, 100% {
    visibility: hidden;
  }
}
@keyframes disappear1 {
  0% {
    visibility: visible;
  }
  75%, 100% {
    visibility: hidden;
  }
}

.bounce10 {
  -webkit-animation: bounce10 11s ease infinite;
  animation: bounce10 11s ease infinite;
}
@-webkit-keyframes bounce10 {
  0%, 75% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    visibility: hidden;
  }
  77% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }
  78.2% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  86.7%, 100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    visibility: hidden;
  }
}
@keyframes bounce10 {
  0%, 75% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    visibility: hidden;
  }
  77% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }
  78.2% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  86.7%, 100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    visibility: hidden;
  }
}

.disappear2 {
  -webkit-animation: disappear2 11s ease infinite;
  animation: disappear2 11s ease infinite;
}
@-webkit-keyframes disappear2 {
  0% {
    visibility: visible;
  }
  82%, 100% {
    visibility: hidden;
  }
}
@keyframes disappear2 {
  0% {
    visibility: visible;
  }
  82%, 100% {
    visibility: hidden;
  }
}

.bounce11 {
  -webkit-animation: bounce11 11s ease infinite;
  animation: bounce11 11s ease infinite;
}
@-webkit-keyframes bounce11 {
  0%, 82% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    visibility: hidden;
  }
  84% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }
  84.7% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  91.4%, 100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    visibility: hidden;
  }
}
@keyframes bounce11 {
  0%, 82% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    visibility: hidden;
  }
  84% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    visibility: visible;
  }
  84.7% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  91.4%, 100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    visibility: hidden;
  }
}

.switch1 {
  -webkit-animation: switch1 11s ease infinite;
  animation: switch1 11s ease infinite;
}
@-webkit-keyframes switch1 {
  0%, 86.7% {
    visibility: hidden;
  }
  86.8%, 100% {
    visibility: visible;
  }
}
@keyframes switch1 {
  0%, 86.7% {
    visibility: hidden;
  }
  86.8%, 100% {
    visibility: visible;
  }
}

.switch2 {
  -webkit-animation: switch2 11s ease infinite;
  animation: switch2 11s ease infinite;
}
@-webkit-keyframes switch2 {
  0%, 89% {
    visibility: hidden;
  }
  89.1%, 100% {
    visibility: visible;
  }
}
@keyframes switch2 {
  0%, 89% {
    visibility: hidden;
  }
  89.1%, 100% {
    visibility: visible;
  }
}

.switch3 {
  -webkit-animation: switch3 11s ease infinite;
  animation: switch3 11s ease infinite;
}
@-webkit-keyframes switch3 {
  0%, 91.4% {
    visibility: hidden;
  }
  91.5%, 100% {
    visibility: visible;
  }
}
@keyframes switch3 {
  0%, 91.4% {
    visibility: hidden;
  }
  91.5%, 100% {
    visibility: visible;
  }
}

</style>