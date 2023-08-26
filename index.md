---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: 概览
hero:
  name: "补订《插件开发日记》"
  text: "翦榛集翠，翠乃蒙茸；\n焚艾留芝，芝方菌蠢。"
  tagline: "接承坠绪，重扬小马之照临；\n补订遗编，复成日记之黼黻。"
  actions:
    - theme: brand
      text: 开始学习吧！
      link: /Volume0/Preface_Original.html
    - theme: alt
      text: 为什么要补订
      link: /Postface/Postface.html
    - theme: alt
      text: 开发交流社区
      link: https://discord.gg/7jS7RsMBda
  image:
    src: 'data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAkAAAEALAAAAAABAAEAAAICTAEAOw=='

features:
  - icon: 🦄
    title: 小马之逸编
    details: 壁碎玑零，今朝复合。
  - icon: 💬
    title: 对话之文辞
    details: 读如应答，笑貌跃然。
  - icon: 📚
    title: 统贯之蒙书
    details: 津逮后生，行遥自迩。
  - icon: 🎊
    title: 实例之缀联
    details: 留篇启沃，垂范万年。
---

<style scope>
  .VPContent.is-home{
    background-color: #b1ceff;
  }
  
  :root{
    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #731482 20%, #DF307F);
  }
</style>

<script setup>
  import * as skinview3d from 'skinview3d';
  import { onMounted } from 'vue';

  onMounted(() => {
    const container = document.querySelector('.image-container');
    container.innerHTML = '<canvas id="skin_container"></canvas>';
    
      let skinViewer = new skinview3d.SkinViewer({
          canvas: document.getElementById("skin_container"),
          width: 500,
          height: 500,
          skin: "skin.png"
      });
    
    skinViewer.background = 0xb1ceff;
      skinViewer.fov = 50;
      skinViewer.zoom = 0.6;
      skinViewer.autoRotate = false;
      skinViewer.animation = new skinview3d.WalkingAnimation();
      skinViewer.animation.speed = 0.5;
    skinViewer.nameTag = "ThatRarityEG";
    })
</script>