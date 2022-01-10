<template>
  <div class="fonts" :class="{ active: isActive }">
    <img :src="iconMap[iconType]" alt="" />{{ label }}
  </div>
</template>

<script>
const wifiIcon = require('../assets/info/wifi.svg')
const telIcon = require('../assets/info/phone.svg')
const viewIcon = require('../assets/info/mountain-range.svg')
const breakfastIcon = require('../assets/info/breakfast.svg')
const airConditioner = require('../assets/info/breeze.svg')
const noSmoke = require('../assets/info/no-smoke-symbol.svg')
const bar = require('../assets/info/bar.svg')
const babyFriendly = require('../assets/info/crawling-baby-silhouette.svg')
const roomService = require('../assets/info/room_service.svg')
const pet = require('../assets/info/dog.svg')

export const ICON_TYPE = {
  WIFI: 'Wi-Fi',
  TEL: 'Television',
  VIEW: 'Great-View',
  BREAKFAST: 'Breakfast',
  AIR_CONDITIONER: 'Air-Conditioner',
  SMOKE_FREE: 'Smoke-Free',
  BAR: 'Mini-Bar',
  REFRIGERATOR: 'Refrigerator',
  CHILD_FRIENDLY: 'Child-Friendly',
  ROOM_SERVICE: 'Room-Service',
  PET: 'Pet-Friendly'
}

export default {
  props: {
    iconType: {
      type: String
    },
    label: {
      type: String
    },
    isActive: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      iconMap: {
        [ICON_TYPE.WIFI]: wifiIcon,
        [ICON_TYPE.TEL]: telIcon,
        [ICON_TYPE.VIEW]: viewIcon,
        [ICON_TYPE.BREAKFAST]: breakfastIcon,
        [ICON_TYPE.AIR_CONDITIONER]: airConditioner,
        [ICON_TYPE.SMOKE_FREE]: noSmoke,
        [ICON_TYPE.BAR]: bar,
        [ICON_TYPE.CHILD_FRIENDLY]: babyFriendly,
        [ICON_TYPE.ROOM_SERVICE]: roomService,
        [ICON_TYPE.PET]: pet
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fonts {
  font-family: NotoSansCJKtc-Light;
  font-size: 12px;
  color: #3a3a3a;
  letter-spacing: 1.25px;
  display: flex;
  justify-content: left;
  align-items: center;
  opacity: 0.3;
  &.active {
    opacity: 1;
  }
  img {
    width: 25px;
    height: 25px;
    margin-right: 15px;
  }
}
</style>
