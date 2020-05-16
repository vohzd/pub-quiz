<template lang="html">
  <div class="main-view">
    <hooper :vertical="true" :progress="true" :centerMode="true">
      <slide >
        <h1>WLECOME TO QUIZ</h1>
        <div class="row center mtx">
          <img src="~/assets/img/frog.gif" alt="">
        </div>
      </slide>
      <slide class="bg1">
        <h1>ROUND A - PICTURE ROUND</h1>
        <h2 class="mtx">NAME THAT BEARD</h2>
      </slide>
      <slide class="">
        <h1>A1</h1>
        <div class="main-container">
          <VueCompareImage  :sliderPositionPercentage="1" leftImage="/img/beard/1-beard.jpg" rightImage="/img/beard/1.jpg" />;
        </div>
      </slide>
      <slide class="">
        <h1>A2</h1>
        <div class="main-container">
          <VueCompareImage  :sliderPositionPercentage="1" leftImage="/img/beard/2-beard.jpg" rightImage="/img/beard/2.jpg" />;
        </div>
      </slide>
      <slide class="">
        <h1>A3</h1>
        <div class="main-container">
          <VueCompareImage  :sliderPositionPercentage="1" leftImage="/img/beard/3-beard.jpg" rightImage="/img/beard/3.jpg" />;
        </div>
      </slide>
      <slide class="">
        <h1>A4</h1>
        <div class="main-container">
          <VueCompareImage  :sliderPositionPercentage="1" leftImage="/img/beard/4-beard.jpg" rightImage="/img/beard/4.jpg" />;
        </div>
      </slide>
      <slide class="">
        <h1>A5</h1>
        <div class="main-container">
          <VueCompareImage  :sliderPositionPercentage="1" leftImage="/img/beard/5-beard.jpg" rightImage="/img/beard/5.jpg" />;
        </div>
      </slide>
      <slide class="">
        <h1>A6</h1>
        <div class="main-container">
          <VueCompareImage  :sliderPositionPercentage="1" leftImage="/img/beard/6-beard.jpg" rightImage="/img/beard/6.jpg" />;
        </div>
      </slide>
      <slide class="">
        <h1>A7</h1>
        <div class="main-container">
          <VueCompareImage  :sliderPositionPercentage="1" leftImage="/img/beard/7-beard.jpg" rightImage="/img/beard/7.jpg" />;
        </div>
      </slide>
      <slide class="">
        <h1>A8</h1>
        <div class="main-container">
          <VueCompareImage  :sliderPositionPercentage="1" leftImage="/img/beard/8-beard.jpg" rightImage="/img/beard/8.jpg" />;
        </div>
      </slide>
      <slide class="">
        <h1>A9</h1>
        <div class="main-container">
          <VueCompareImage  :sliderPositionPercentage="1" leftImage="/img/beard/9-beard.jpg" rightImage="/img/beard/9.jpg" />;
        </div>
      </slide>
      <slide class="">
        <h1>A10</h1>
        <div class="main-container">
          <VueCompareImage  :sliderPositionPercentage="1" leftImage="/img/beard/10-beard.jpg" rightImage="/img/beard/10.jpg" />;
        </div>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </div>

</template>

<script>

import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
} from "hooper";
import "hooper/dist/hooper.css";

import VueCompareImage from 'vue-compare-image';

export default {
  data() {
    return {};
  },
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    VueCompareImage
  },
};
</script>

<style lang="css">
  .hooper {
    height: 100vh;
  }



  .hooper-indicator:hover,
  .hooper-indicator.is-active {
    background: black;
  }


</style>
