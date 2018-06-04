<template lang="pug">
  b-navbar(toggleable="md" type="dark" variant="dark" fixed="top")
    b-container
      b-nav-toggle(target="nav_collapse")
      b-navbar-brand(to="/") ホロジュール
      b-collapse#nav_collapse(is-nav)
        b-navbar-nav.ml-auto
          b-nav-item(to="/schedules/today") 今日の予定
          b-nav-item(to="/schedules/") 過去ログ
          b-nav-item(to="/vtubers/") VTubers
          b-nav-item(to="/about") このサイトについて
</template>
