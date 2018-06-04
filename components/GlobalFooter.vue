<template lang="pug">
  .footer
    b-container
      footer
        p
          | このサイトは個人運営のファンサイトであり、ホロライブおよびカバー株式会社とは関係がありません。
        p
          | コンタクト: 
          a(href="https://twitter.com/MikazukiFuyuno" target="_blank") @MikazukiFuyuno
          |  / 
          | 寄付: 
          a(href="https://mochizuki.moe/donation/" target="_blank") こちら
        p Copyright &copy; 2018 mochizuki.moe.
</template>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0px;
  width: 100vw;
}

footer {
  border-top: thin solid silver;
  padding-top: 10px;
  font-size: 80%;
  text-align: center;
}

p {
  margin: 0;
}
</style>
